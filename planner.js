// Rule engine for Harper. Holds the plan, checks it, and exposes the tools
// the voice agent calls. The agent never edits the plan itself.
(function (root) {
  const SEASONS = ["Autumn", "Winter", "Spring"];
  const QUARTERS = [];
  for (let y = 1; y <= 4; y++) for (const s of SEASONS) QUARTERS.push(`Y${y}-${s}`);
  const MAX_COURSES = 4;
  const HEAVY_HOURS = 42;

  function createPlanner(catalog) {
    const courses = {};
    catalog.courses.forEach(c => (courses[c.id] = c));
    const norm = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    const byNorm = {};
    catalog.courses.forEach(c => (byNorm[norm(c.id)] = c.id));

    const state = { major: null, second: null, plan: emptyPlan(), tray: [], abroad: null, closed: {}, changed: [], origin: {}, locked: [], transcript: null, credit: [] };
    const listeners = [];

    function emptyPlan() { const p = {}; QUARTERS.forEach(q => (p[q] = [])); return p; }
    function emit() { listeners.forEach(fn => fn(state)); }
    const seasonOf = q => q.split("-")[1];
    const qIndex = q => QUARTERS.indexOf(q);

    // the agent sometimes says "fall of junior year" instead of "Y3-Autumn", so be loose here
    function findCourse(input) {
      const n = norm(input);
      if (!n) return null;
      if (byNorm[n]) return byNorm[n];
      if (byNorm[n + "00"]) return byNorm[n + "00"]; // "CMSC 141" -> CMSC 14100
      const digits = n.replace(/[^0-9]/g, "");
      if (digits.length >= 4) {
        const hit = Object.keys(byNorm).find(k => k.endsWith(digits));
        if (hit) return byNorm[hit];
      }
      const low = String(input).toLowerCase().trim();
      const exact = catalog.courses.find(c => c.title.toLowerCase() === low);
      if (exact) return exact.id;
      // longest title mentioned wins, so "Calculus III" doesn't match "Calculus I"
      const hits = catalog.courses.filter(c => !c.placeholder && (c.title.toLowerCase().includes(low) || low.includes(c.title.toLowerCase())))
        .sort((a, b) => Math.abs(a.title.length - low.length) - Math.abs(b.title.length - low.length));
      return hits[0] ? hits[0].id : null;
    }
    function parseQuarter(input) {
      const s = String(input || "").toLowerCase();
      const exact = QUARTERS.find(q => q.toLowerCase() === s.replace(/\s+/g, ""));
      if (exact) return exact;
      let season = /autumn|fall/.test(s) ? "Autumn" : /winter/.test(s) ? "Winter" : /spring/.test(s) ? "Spring" : null;
      let year = null;
      const d = s.match(/[1-4]/);
      if (d) year = +d[0];
      else if (/first|freshman|\bone\b/.test(s)) year = 1;
      else if (/second|sophomore|\btwo\b/.test(s)) year = 2;
      else if (/third|junior|\bthree\b/.test(s)) year = 3;
      else if (/fourth|senior|\bfour\b/.test(s)) year = 4;
      return season && year ? `Y${year}-${season}` : null;
    }
    function coreArea(input) {
      const s = String(input || "").toLowerCase();
      if (/hum/.test(s)) return "HUM";
      if (/sosc|social/.test(s)) return "SOSC";
      if (/civ|abroad/.test(s)) return "CIV";
      if (/art|music|theat/.test(s)) return "ARTS";
      if (/bio|life/.test(s)) return "BIO";
      if (/phys|phsc|chem|astr|science/.test(s)) return "PHYS";
      return null;
    }
    function parseMajor(input) {
      const s = String(input || "").toLowerCase().trim();
      const names = Object.keys(catalog.plans);
      const opts = m => [m, ...((catalog.aliases || {})[m] || [])].map(x => x.toLowerCase());
      const exact = names.find(m => opts(m).includes(s));
      if (exact) return exact;
      let best = null, len = 0;
      names.forEach(m => opts(m).forEach(o => {
        if (o.length > len && new RegExp(`\\b${o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(s)) { best = m; len = o.length; }
      }));
      return best;
    }

    function whereIs(id) {
      if (state.credit.includes(id)) return "CREDIT"; // AP / placement credit counts as done before year 1
      for (const q of QUARTERS) if (state.plan[q].includes(id)) return q;
      return state.tray.includes(id) ? "TRAY" : null;
    }
    function removeEverywhere(id) {
      const w = whereIs(id); if (w && w !== "TRAY") state.origin[id] = qIndex(w);
      QUARTERS.forEach(q => (state.plan[q] = state.plan[q].filter(x => x !== id)));
      state.tray = state.tray.filter(x => x !== id);
    }
    function snapshot() { const m = {}; QUARTERS.forEach(q => state.plan[q].forEach(id => (m[id] = q))); state.tray.forEach(id => (m[id] = "TRAY")); return m; }
    function diff(before) {
      const after = snapshot(), out = [];
      Object.keys(after).forEach(id => { if (before[id] !== after[id]) out.push({ course: id, from: before[id] || "nowhere", to: after[id] }); });
      state.changed = out.map(c => c.course);
      return out.map(c => `${c.course}: ${pretty(c.from)} -> ${pretty(c.to)}`);
    }
    const pretty = q => (q === "TRAY" ? "unscheduled" : q);

    // validation
    // a prereq on a Core course is met by whatever course fills that Core area
    function prereqAt(pid) {
      const w = whereIs(pid);
      if (w && w !== "TRAY") return w;
      const cat = courses[pid]?.category;
      if (!(catalog.core_options || {})[cat]) return w;
      const q = QUARTERS.find(q => state.plan[q].some(x => courses[x]?.category === cat));
      return q || w;
    }
    function courseProblems(id, q) {
      const c = courses[id], i = qIndex(q), out = [];
      if (state.locked.includes(q)) return out; // already taken
      if (!c) return out;
      if (state.closed[id] === q) out.push(`full in ${q}`);
      if (state.abroad === q) { if (!c.abroad_eligible) out.push(`not available while studying abroad`); }
      else if (!c.offered.includes(seasonOf(q))) out.push(`only offered ${c.offered.join("/")}`);
      c.prereqs.forEach(p => {
        if (!courses[p]) return;
        const pq = prereqAt(p);
        if (!pq || pq === "TRAY") out.push(`needs ${p}, which is unscheduled`);
        else if (qIndex(pq) > i || (qIndex(pq) === i && state.abroad !== q)) out.push(`needs ${p} first (it's in ${pq})`);
      });
      return out;
    }
    function validate() {
      const courseIssues = {}, quarterWarnings = {};
      QUARTERS.forEach(q => {
        state.plan[q].forEach(id => { const p = courseProblems(id, q); if (p.length) courseIssues[id] = p; });
        const hrs = hoursIn(q), n = state.plan[q].length;
        const w = [];
        if (state.locked.includes(q)) return;
        if (n > MAX_COURSES) w.push(`${n} courses (max ${MAX_COURSES})`);
        if (hrs > HEAVY_HOURS) w.push(`heavy: ~${hrs} hrs/week`);
        if (w.length) quarterWarnings[q] = w;
      });
      return { courseIssues, quarterWarnings, unscheduled: [...state.tray] };
    }
    const hoursIn = q => state.plan[q].reduce((s, id) => s + (courses[id]?.hours_per_week || 0), 0);
    function problemList() {
      const v = validate(), out = [];
      Object.entries(v.courseIssues).forEach(([id, ps]) => out.push(`${id} (${whereIs(id)}): ${ps.join("; ")}`));
      v.unscheduled.forEach(id => out.push(`${id} is unscheduled and needs a new quarter`));
      Object.entries(v.quarterWarnings).forEach(([q, ws]) => out.push(`${q} warning: ${ws.join("; ")}`));
      return out;
    }
    function result(extra) {
      const problems = problemList();
      emit();
      return { ok: true, ...extra, plan_valid: problems.filter(p => !p.includes("warning")).length === 0, problems };
    }

    // auto-fix: put each broken course in the closest quarter that works
    function depth(id, seen = {}) {
      if (seen[id]) return 0; seen[id] = 1;
      const c = courses[id]; if (!c || !c.prereqs.length) return 0;
      return 1 + Math.max(...c.prereqs.map(p => depth(p, seen)));
    }
    function canPlace(id, i, maxLoad) {
      const q = QUARTERS[i], c = courses[id];
      if (state.locked.includes(q)) return false; // completed quarters are frozen
      if (state.plan[q].length >= maxLoad) return false;
      if (state.closed[id] === q) return false;
      if (state.abroad === q) { if (!c.abroad_eligible) return false; }
      else if (!c.offered.includes(seasonOf(q))) return false;
      return c.prereqs.every(p => { if (!courses[p]) return true; const pq = prereqAt(p); return pq && pq !== "TRAY" && (qIndex(pq) < i || (qIndex(pq) === i && state.abroad === q)); });
    }
    function placeBest(id, pref) {
      // closest valid quarter wins; busy or heavy quarters cost a little extra
      let best = -1, bestScore = Infinity;
      QUARTERS.forEach((q, i) => {
        if (!canPlace(id, i, MAX_COURSES)) return;
        const heavy = hoursIn(q) + courses[id].hours_per_week > HEAVY_HOURS;
        const score = Math.abs(i - pref) + (state.plan[q].length >= 3 ? 1.2 : 0) + (heavy ? 3 : 0) + (i < pref ? 0.1 : 0);
        if (score < bestScore) { bestScore = score; best = i; }
      });
      if (best < 0) return false;
      state.plan[QUARTERS[best]].push(id);
      return true;
    }
    // move a course (and, if needed, its prerequisites) into an earlier quarter
    function pullEarlier(id, depth) {
      const w = whereIs(id);
      if (!w || w === "TRAY" || w === "CREDIT" || state.locked.includes(w)) return false; // credit and completed quarters stay put
      const cur = qIndex(w);
      removeEverywhere(id);
      const tryPlace = () => {
        for (let i = 0; i < cur; i++) {
          if (canPlace(id, i, MAX_COURSES) && hoursIn(QUARTERS[i]) + courses[id].hours_per_week <= HEAVY_HOURS + 6) { state.plan[QUARTERS[i]].push(id); return true; }
        }
        return false;
      };
      if (tryPlace()) return true;
      if (depth > 0) {
        (courses[id].prereqs || []).forEach(pr => pullEarlier(pr, depth - 1));
        if (tryPlace()) return true;
      }
      state.plan[w].push(id);
      return false;
    }
    // a stuck course has a valid quarter that's just full: move something flexible out of it
    function makeRoom(id) {
      const dependents = x => catalog.courses.filter(c => c.prereqs.includes(x)).map(c => c.id);
      for (let i = 0; i < QUARTERS.length; i++) {
        if (!canPlace(id, i, MAX_COURSES + 1)) continue; // valid apart from being full
        const q = QUARTERS[i];
        const movable = [...state.plan[q]].sort((a, b) => (courses[a].placeholder || /^ELECTIVE/.test(a) ? -1 : 0) - (courses[b].placeholder || /^ELECTIVE/.test(b) ? -1 : 0));
        for (const x of movable) {
          removeEverywhere(x);
          const depAt = dependents(x).map(d => whereIs(d)).filter(w => w && w !== "TRAY").map(qIndex);
          const j = QUARTERS.map((_, k) => k).filter(k => k !== i && canPlace(x, k, MAX_COURSES) && depAt.every(d => d > k))
            .sort((a, b) => Math.abs(a - i) - Math.abs(b - i))[0];
          if (j !== undefined && canPlace(id, i, MAX_COURSES)) { state.plan[QUARTERS[j]].push(x); state.plan[q].push(id); return true; }
          state.plan[q].push(x);
        }
      }
      return false;
    }
    function rescueStuck() {
      for (let round = 0; round < 4 && state.tray.length; round++) {
        let progress = false;
        [...state.tray].sort((a, b) => depth(a) - depth(b)).forEach(id => {
          removeEverywhere(id);
          (courses[id].prereqs || []).forEach(pr => pullEarlier(pr, 3));
          if (placeBest(id, state.origin[id] ?? 0) || makeRoom(id)) progress = true; else state.tray.push(id);
        });
        if (!progress) break;
      }
    }
    // keep running passes while each one places more courses
    function runAutoFix() {
      for (let k = 0; k < 4; k++) {
        const before = state.tray.length;
        runAutoFixOnce();
        if (!state.tray.length || state.tray.length >= before && k > 0) break;
      }
    }
    function runAutoFixOnce() {
      const home = {};
      for (let pass = 0; pass < 30; pass++) {
        const v = validate();
        const toPlace = [...new Set([...state.tray, ...Object.keys(v.courseIssues)])];
        if (!toPlace.length) break;
        toPlace.forEach(id => { const w = whereIs(id); if (!(id in home)) home[id] = w && w !== "TRAY" ? qIndex(w) : (state.origin[id] ?? 0); });
        toPlace.forEach(removeEverywhere);
        toPlace.sort((a, b) => depth(a) - depth(b));
        const stuck = [];
        toPlace.forEach(id => { if (!placeBest(id, home[id])) stuck.push(id); });
        state.tray.push(...stuck);
        if (stuck.length === toPlace.length) break;
      }
      rescueStuck();
      // never leave a course somewhere that breaks the rules: unschedule it instead
      for (let n = 0; n < 12; n++) {
        const bad = Object.keys(validate().courseIssues);
        if (!bad.length) break;
        bad.forEach(id => { removeEverywhere(id); state.tray.push(id); });
      }
    }

    // transcript: entries = [{ id, title, quarter }] with quarter like "Y2-Spring"
    function applyTranscript(entries) {
      const before = snapshot();
      const ids = entries.map(e => e.id);
      // 1. Core picks implied by what they took
      Object.entries(catalog.core_options || {}).forEach(([a, list]) => {
        const hit = list.find(o => o.courses.some(c => ids.includes(c.id)));
        if (hit && (state.coreChoices || {})[a] !== hit.name) tools.choose_core({ area: a, option: hit.name });
      });
      // 2. make sure every course exists (unknown ones count as electives)
      entries.forEach(e => {
        if (!courses[e.id]) {
          const nc = { id: e.id, title: e.title || "From transcript", category: "ELECTIVE", offered: SEASONS, prereqs: [], abroad_eligible: true, hours_per_week: 9, external: true };
          catalog.courses.push(nc); courses[e.id] = nc; byNorm[norm(e.id)] = e.id;
        }
      });
      const cats = catalog.major_categories || {}, core = Object.keys(catalog.core_options || {});
      const mine = [...(cats[state.major] || []), ...(cats[state.second] || [])];
      const planned = new Set(QUARTERS.flatMap(q => state.plan[q]).concat(state.tray));
      // 3. extra courses they took use up elective slots
      let extras = entries.filter(e => !planned.has(e.id) && !core.includes(courses[e.id].category) && !mine.includes(courses[e.id].category)).length;
      QUARTERS.forEach(q => state.plan[q].forEach(id => { if (extras > 0 && /^ELECTIVE \d/.test(id)) { removeEverywhere(id); extras--; } }));
      // 4. put each course in the quarter they actually took it
      entries.forEach(e => { removeEverywhere(e.id); state.plan[e.quarter].push(e.id); });
      // AP / test credit with no course list: each 100 units fills an open elective slot
      let tc = state.testCredits || 0;
      state.testUsed = [];
      QUARTERS.forEach(q => [...state.plan[q]].forEach(id => { if (tc > 0 && /^ELECTIVE \d/.test(id)) { removeEverywhere(id); state.testUsed.push(id); tc--; } }));
      const last = Math.max(...entries.map(e => qIndex(e.quarter)));
      const past = QUARTERS.slice(0, last + 1);
      // 5. anything planned for a past quarter that they didn't take needs a new home
      past.forEach(q => state.plan[q].filter(id => !ids.includes(id)).forEach(id => { removeEverywhere(id); state.tray.push(id); }));
      state.locked = past;
      runAutoFix();
      diff(before);
      return { completed_courses: ids.length, completed_through: QUARTERS[last], test_credits: state.testCredits || 0,
               test_credit_note: state.testCredits ? `The transcript shows ${state.testCredits} course(s) of AP/test credit but not which courses. Ask which courses they cover, then use mark_completed.` : undefined, still_to_take: QUARTERS.slice(last + 1).reduce((n, q) => n + state.plan[q].length, 0),
               unscheduled: [...state.tray], on_track: state.tray.length === 0 };
    }

    // ---- SAMPLE course feedback (demo data, NOT real UChicago course evaluations) ----
    function hash(s) { let h = 2166136261; for (const ch of String(s)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
    function sampleReviews(id) {
      const c = courses[id]; if (!c || c.placeholder) return null;
      const h = hash(id), tags = ["clear lectures", "helpful TAs", "heavy problem sets", "great discussions", "fair grading", "tough exams", "lots of reading", "engaging projects", "fast-paced", "well organized"];
      const section = (k, name) => {
        const hk = hash(id + name);
        return { instructor: name, rating: +(3.3 + (hk % 160) / 100).toFixed(1), would_recommend: 60 + (hk % 38),
                 hours_per_week: Math.max(4, c.hours_per_week + ((hk >> 5) % 5) - 2), known_for: [tags[hk % tags.length], tags[(hk >>> 7) % tags.length]].filter((t, i, a) => a.indexOf(t) === i) };
      };
      const sections = [section(0, "Instructor A"), section(1, "Instructor B")];
      const rating = +((sections[0].rating + sections[1].rating) / 2).toFixed(1);
      return { course: id, title: c.title, rating, hours_per_week: Math.round((sections[0].hours_per_week + sections[1].hours_per_week) / 2),
               responses: 20 + (h % 180), sections, sample_data: true };
    }

    // tools the agent can call
    const tools = {
      load_major({ major }) {
        const m = parseMajor(major);
        if (!m || !catalog.plans[m]) return { ok: false, error: `Unknown major "${major}". Available: ${Object.keys(catalog.plans).join(", ")}` };
        // majors with tracks: ask which one unless they already said
        const tracks = Object.keys(catalog.plans).filter(k => k.startsWith(m + " - "));
        if (tracks.length && !/standard|general|regular|base|main|normal/i.test(String(major))) {
          return { ok: true, needs_track: true, major: m,
                   tracks: [`${m} (standard)`, ...tracks.map(t => t.slice(m.length + 3))],
                   hint: `Ask which ${m} track they want. Then call load_major with "${m} standard" or the track name.` };
        }
        state.major = m; state.second = null; state.coreChoices = {}; state.locked = []; state.reviewing = null; state.plan = emptyPlan(); state.tray = []; state.abroad = null; state.closed = {}; state.origin = {};
        QUARTERS.forEach(q => (state.plan[q] = [...(catalog.plans[m][q] || [])]));
        // leave the Core open so the student picks it
        const open = [];
        Object.keys(catalog.core_options || {}).forEach(area => {
          const slots = [];
          QUARTERS.forEach(q => state.plan[q].forEach(id => { if (courses[id]?.category === area) slots.push([q, id]); }));
          slots.forEach(([q, id], i) => {
            const pid = `${area} ${i + 1}`;
            if (!courses[pid]) {
              const base = courses[id];
              const pc = { id: pid, title: "Not picked yet", category: area, offered: base.offered, prereqs: i ? [`${area} ${i}`] : [],
                           abroad_eligible: base.abroad_eligible, hours_per_week: base.hours_per_week, placeholder: true };
              catalog.courses.push(pc); courses[pid] = pc; byNorm[norm(pid)] = pid;
            }
            state.plan[q] = state.plan[q].map(x => (x === id ? pid : x));
          });
          if (slots.length) open.push(area);
        });
        QUARTERS.forEach(q => (state.plan[q] = state.plan[q].filter(id => !state.credit.includes(id))));
        state.changed = QUARTERS.flatMap(q => state.plan[q]);
        if (state.transcript) {
          const t = applyTranscript(state.transcript);
          return result({ message: `Loaded the ${m} plan and applied the transcript.`, transcript: t });
        }
        return result({ message: `Loaded the ${m} plan.`, core_not_picked_yet: open });
      },
      add_second_major({ major }) {
        const m2 = parseMajor(major);
        if (!state.major) return { ok: false, error: "Load a first major before adding a second one." };
        if (!m2 || !catalog.plans[m2]) return { ok: false, error: `Unknown major "${major}". Available: ${Object.keys(catalog.plans).join(", ")}` };
        if (m2 === state.major) return { ok: false, error: `${m2} is already the first major.` };
        if (m2 === state.second) return { ok: false, error: `${m2} is already the second major. To remove it, use drop_second_major.` };
        const cats = catalog.major_categories || {};
        const mine1 = cats[state.major] || [], mine2 = cats[m2] || [];
        const core = Object.keys(catalog.core_options || {});
        const before = snapshot();
        const scheduled = () => QUARTERS.flatMap(q => state.plan[q]).concat(state.tray, state.credit);
        const needed = QUARTERS.flatMap(q => catalog.plans[m2][q]).filter(id => mine2.includes(courses[id]?.category));
        const shared = needed.filter(id => scheduled().includes(id));
        const toAdd = needed.filter(id => !scheduled().includes(id));
        // free up space: drop electives that neither major needs
        const dropped = [];
        QUARTERS.forEach(q => state.plan[q].forEach(id => {
          const c = courses[id];
          if (core.includes(c.category) || mine1.includes(c.category) || needed.includes(id)) return;
          dropped.push(id);
        }));
        dropped.forEach(removeEverywhere);
        // second-major courses go roughly where that major normally takes them
        const home2 = {};
        QUARTERS.forEach((q, i) => catalog.plans[m2][q].forEach(id => (home2[id] = i)));
        const reshuffle = shared.filter(id => !state.credit.includes(id) && !state.locked.includes(whereIs(id)) && !core.includes(courses[id].category) &&
          (!mine1.includes(courses[id].category) || qIndex(whereIs(id)) > (home2[id] ?? 99)));
        reshuffle.forEach(removeEverywhere);
        [...toAdd, ...reshuffle].forEach(id => (state.origin[id] = home2[id] ?? 0));
        state.second = m2;
        state.tray.push(...toAdd, ...reshuffle);
        runAutoFix();
        const changes = diff(before);
        const left = state.tray.length;
        return result({
          message: left ? `Added ${m2} as a second major, but ${left} course(s) don't fit in four years.` : `Added ${m2} as a second major and it fits.`,
          courses_added: toAdd.length, counted_for_both: shared, electives_dropped: dropped, still_unscheduled: [...state.tray],
          hint: left ? "Suggest lighten_load won't help here; they'd need a fifth course in some quarters or to drop something. Ask what they'd like." : undefined
        });
      },
      get_plan() {
        const plan = {}; QUARTERS.forEach(q => (plan[q] = state.plan[q].join(", ") || "(empty)"));
        state.changed = [];
        return result({ major: state.major, study_abroad: state.abroad || "none", plan });
      },
      import_transcript({ entries, program, test_units }) {
        state.testCredits = Math.floor((Number(test_units) || 0) / 100);
        const list = (entries || []).filter(e => e && e.id && QUARTERS.includes(e.quarter));
        if (!list.length) return { ok: false, error: "No courses found in that transcript." };
        if (!state.major) {
          // figure out the major: the "Program:" line first, then whichever major's departments they took most
          let m = program ? parseMajor(program) : null;
          if (!m) {
            const cats = catalog.major_categories || {};
            const taken = list.map(e => e.id.split(" ")[0]);
            const deptOf = c => (catalog.courses.find(x => x.category === c) || {}).id?.split(" ")[0];
            let best = 0;
            Object.entries(cats).forEach(([name, cs]) => {
              const main = deptOf(cs[0]);
              const score = taken.filter(d => d === main).length * 2 + taken.filter(d => cs.some(c => deptOf(c) === d)).length;
              if (score > best && !name.includes(" - ")) { best = score; m = name; }
            });
          }
          if (!m) { state.transcript = list; return { ok: true, message: `Read ${list.length} courses. Ask for their major to plan the rest.`, needs_major: true }; }
          state.transcript = list;
          const r = tools.load_major({ major: m + " standard" });
          return { ...r, detected_major: m };
        }
        state.transcript = list;
        const t = applyTranscript(list);
        return result({ message: t.on_track ? `Applied the transcript. Everything left fits, so they're on track to graduate.` : `Applied the transcript, but ${t.unscheduled.length} course(s) don't fit in the remaining quarters.`, transcript: t });
      },
      mark_completed({ course_ids }) {
        const ids = String(course_ids || "").split(/,|\band\b|&/).map(s => s.trim()).filter(Boolean).map(findCourse);
        const found = ids.filter(Boolean), missing = String(course_ids).split(/,|\band\b|&/).filter((s, i) => !ids[i]).map(s => s.trim()).filter(Boolean);
        if (!found.length) return { ok: false, error: `Couldn't find ${course_ids}. Use course numbers like "MATH 15100".` };
        const before = snapshot();
        found.forEach(id => { removeEverywhere(id); if (!state.credit.includes(id)) state.credit.push(id); });
        // these are the transcript's unlisted test credits being named: give back the elective slots they were holding
        if (state.testCredits) {
          const n = Math.min(found.length, state.testCredits);
          state.testCredits -= n;
          (state.testUsed || []).splice(0, n).forEach(id => state.tray.push(id));
        }
        runAutoFix();
        return result({ message: `Marked ${found.join(", ")} as completed (credit).`, not_found: missing.length ? missing : undefined, changes: diff(before),
                        hint: "That freed up space. Offer to pick an elective for the open slot or to lighten a heavy year." });
      },
      course_reviews({ course_id }) {
        const id = findCourse(course_id);
        if (!id) return { ok: false, error: `Couldn't find course "${course_id}".` };
        const r = sampleReviews(id);
        state.reviewing = r; emit();
        return { ok: true, ...r, note: "These are SAMPLE ratings for the demo, not real course evaluations. Say that briefly." };
      },
      recommend_electives({ quarter, interest }) {
        const q = quarter ? parseQuarter(quarter) : null;
        const cats = catalog.major_categories || {}, core = Object.keys(catalog.core_options || {});
        const scheduled = new Set(QUARTERS.flatMap(x => state.plan[x]).concat(state.tray, state.credit));
        const words = String(interest || "").toLowerCase().split(/[^a-z]+/).filter(w => w.length > 2 && !["any", "anything", "none", "whatever"].includes(w));
        let pool = catalog.courses.filter(c => !c.placeholder && !c.external && !core.includes(c.category) && c.category !== "ELECTIVE" && !scheduled.has(c.id));
        // only courses whose prerequisites are already in the plan (or credited)
        pool = pool.filter(c => c.prereqs.every(pr => { const w = prereqAt(pr); return w && w !== "TRAY"; }));
        if (q) pool = pool.filter(c => canPlace(c.id, qIndex(q), MAX_COURSES + 1));
        if (words.length) {
          const match = pool.filter(c => words.some(w => (c.title + " " + c.category + " " + c.id).toLowerCase().includes(w.slice(0, 5))));
          if (match.length) pool = match;
        }
        const recs = pool.map(c => sampleReviews(c.id)).sort((a, b) => b.rating - a.rating || a.hours_per_week - b.hours_per_week).slice(0, 3)
          .map(r => ({ course: r.course, title: r.title, rating: r.rating, hours_per_week: r.hours_per_week, best_section: [...r.sections].sort((a, b) => b.rating - a.rating)[0].instructor }));
        state.reviewing = recs.length ? { list: recs, quarter: q, interest } : null; emit();
        return { ok: true, quarter: q || "any", recommendations: recs, note: "SAMPLE ratings for the demo, not real evaluations. Mention that once, briefly." };
      },
      add_course({ course_id, quarter }) {
        const id = findCourse(course_id);
        if (!id) return { ok: false, error: `Couldn't find course "${course_id}".` };
        if (whereIs(id) && whereIs(id) !== "TRAY") return { ok: false, error: `${id} is already in the plan (${whereIs(id)}).` };
        const q = quarter ? parseQuarter(quarter) : null;
        if (q && state.locked.includes(q)) return { ok: false, error: `${q} is already completed.` };
        const before = snapshot();
        // use up an open elective slot, preferring one in the same quarter
        const slots = QUARTERS.filter(x => !state.locked.includes(x)).flatMap(x => state.plan[x].filter(i => /^ELECTIVE \d/.test(i)).map(i => [x, i]));
        const slot = slots.find(([x]) => x === q) || slots[0];
        if (slot) removeEverywhere(slot[1]);
        removeEverywhere(id);
        if (q && canPlace(id, qIndex(q), MAX_COURSES)) state.plan[q].push(id);
        else if (!placeBest(id, q ? qIndex(q) : (slot ? qIndex(slot[0]) : 6))) state.tray.push(id);
        state.reviewing = null; // they picked one, so the recommendations panel can go
        return result({ message: `Added ${id}${slot ? ` in place of ${slot[1]}` : ""}.`, changes: diff(before) });
      },
      start_over() {
        state.major = null; state.second = null; state.coreChoices = {}; state.locked = []; state.transcript = null; state.credit = []; state.testCredits = 0; state.reviewing = null; state.plan = emptyPlan();
        state.tray = []; state.abroad = null; state.closed = {}; state.origin = {}; state.changed = [];
        emit();
        return { ok: true, message: "Cleared everything. Ask for their major to start again." };
      },
      drop_second_major() {
        if (!state.second) return { ok: false, error: "There's no second major to drop." };
        const dropped = state.second, choices = { ...(state.coreChoices || {}) }, abroad = state.abroad;
        const before = snapshot();
        const m = state.major;
        tools.load_major({ major: m + " standard" });
        if (state.major !== m) { state.major = m; QUARTERS.forEach(q => (state.plan[q] = [...catalog.plans[m][q]])); }
        Object.entries(choices).forEach(([a, name]) => tools.choose_core({ area: a, option: name }));
        if (abroad && !state.abroad) tools.set_study_abroad({ quarter: abroad });
        runAutoFix();
        return result({ message: `Dropped the ${dropped} second major.`, changes: diff(before) });
      },
      move_course({ course_id, to_quarter }) {
        const id = findCourse(course_id), q = parseQuarter(to_quarter);
        if (!id) return { ok: false, error: `Couldn't find course "${course_id}".` };
        if (!q) return { ok: false, error: `Couldn't understand quarter "${to_quarter}". Use format like Y2-Winter.` };
        if (state.locked.includes(q)) return { ok: false, error: `${q} is already completed on the transcript.` };
        if (state.locked.includes(whereIs(id))) return { ok: false, error: `${id} is already completed on the transcript.` };
        const before = snapshot();
        removeEverywhere(id); state.plan[q].push(id);
        return result({ changes: diff(before) });
      },
      set_study_abroad({ quarter }) {
        const before = snapshot();
        if (/none|cancel|no/i.test(String(quarter)) && !parseQuarter(quarter)) {
          state.abroad = null;
          runAutoFix();
          return result({ message: "Study abroad cancelled.", changes: diff(before), unscheduled: [...state.tray] });
        }
        const q = parseQuarter(quarter);
        if (!q) return { ok: false, error: `Couldn't understand quarter "${quarter}".` };
        if (state.locked.includes(q)) return { ok: false, error: `${q} is already in the past.` };
        state.abroad = q;
        // anything you can't take abroad gets bumped
        const displaced = state.plan[q].filter(id => !courses[id]?.abroad_eligible);
        state.plan[q] = state.plan[q].filter(id => courses[id]?.abroad_eligible);
        state.tray.push(...displaced);
        // abroad programs usually cover the whole Civ sequence, so pull it in
        const civ = catalog.courses.filter(c => c.category === "CIV" && c.abroad_eligible && whereIs(c.id)).map(c => c.id);
        const pulled = [];
        civ.forEach(id => { if (whereIs(id) !== q && state.plan[q].length < MAX_COURSES) { removeEverywhere(id); state.plan[q].push(id); pulled.push(id); } });
        return result({
          message: `${q} is now a study abroad quarter.`,
          displaced, covered_abroad: pulled, changes: diff(before),
          hint: displaced.length ? "Displaced courses need new quarters. Offer to call auto_fix." : undefined
        });
      },
      mark_course_closed({ course_id }) {
        const id = findCourse(course_id);
        if (!id) return { ok: false, error: `Couldn't find course "${course_id}".` };
        const q = whereIs(id);
        if (!q || q === "TRAY") return { ok: false, error: `${id} isn't scheduled.` };
        if (state.locked.includes(q)) return { ok: false, error: `${id} is already completed on the transcript.` };
        const before = snapshot();
        state.closed[id] = q; removeEverywhere(id); state.tray.push(id);
        const v = validate();
        diff(before);
        state.changed = [id, ...Object.keys(v.courseIssues)];
        return result({ message: `${id} is full in ${q}, so it's been taken off that quarter.`, now_broken: Object.keys(v.courseIssues), hint: "Offer to call auto_fix." });
      },
      auto_pick_core() {
        const before = snapshot(), picked = [];
        const sugg = (catalog.core_suggestions || {})[state.major] || {};
        Object.entries(catalog.core_options || {}).forEach(([a, list]) => {
          const open = QUARTERS.flatMap(q => state.plan[q]).some(id => courses[id]?.placeholder && courses[id].category === a);
          if (!open) return;
          // their major's suggested pick, but stay on campus unless they've asked to go abroad
          let pick = list.find(o => o.name === sugg[a] && (!o.abroad || state.abroad));
          if (!pick) pick = list.find(o => !o.abroad) || list[0];
          tools.choose_core({ area: a, option: pick.name });
          picked.push(`${a}: ${pick.name}`);
        });
        runAutoFix();
        return result({ message: picked.length ? `Picked ${picked.length} Core sequence(s).` : "The Core is already picked.", picked, changes: diff(before),
                        hint: "Name one or two picks, not all. Mention they can swap any of them, or study abroad for Civ." });
      },
      list_core_options({ area }) {
        const a = coreArea(area);
        const opts = catalog.core_options || {};
        if (!a) return { ok: true, areas: Object.keys(opts), hint: "Ask which area they want: Hum, Sosc, Civ, science (Phys or Bio), or Arts." };
        const scheduled = QUARTERS.flatMap(q => state.plan[q]);
        const rec = ((catalog.core_suggestions || {})[state.major] || {})[a];
        // try each option on a copy of the plan to see if it fits cleanly
        const saved = JSON.stringify({ plan: state.plan, tray: state.tray, abroad: state.abroad, origin: state.origin });
        const list = (opts[a] || []).map(o => {
          tools.choose_core({ area: a, option: o.name });
          const fits = state.tray.length === 0 && Object.keys(validate().courseIssues).length === 0;
          Object.assign(state, JSON.parse(saved));
          return { name: o.name, abroad: o.abroad || undefined, fits_your_plan: fits, current: o.courses.every(c => scheduled.includes(c.id)) || undefined,
                   recommended_for_your_major: o.name === rec || undefined };
        });
        list.sort((x, y) => (y.recommended_for_your_major ? 1 : 0) - (x.recommended_for_your_major ? 1 : 0) || (y.fits_your_plan ? 1 : 0) - (x.fits_your_plan ? 1 : 0));
        state.changed = [];
        emit();
        return { ok: true, area: a, options: list, hint: "Suggest the recommended option first if there is one, and only options that fit." };
      },
      choose_core({ area, option }) {
        const a = coreArea(area);
        const opts = (catalog.core_options || {})[a] || [];
        if (!a || !opts.length) return { ok: false, error: `No options for "${area}". Areas: ${Object.keys(catalog.core_options || {}).join(", ")}` };
        const low = String(option || "").toLowerCase();
        // best match: exact name, else the option sharing the most words with what they said
        const words = low.split(/[^a-z\u00c0-\u017f]+/).filter(w => w.length > 2 && !["the", "and", "civ", "civilization", "civilizations", "in", "abroad", "study"].includes(w));
        const scored = opts.map((o, i) => { const text = (o.name + " " + (o.abroad || "") + " " + o.courses.map(c => c.title).join(" ")).toLowerCase();
          return { o, i, s: words.filter(w => text.includes(w.slice(0, 5))).length + (o.abroad && words.includes(o.abroad.toLowerCase()) ? 0.5 : 0) }; })
          .filter(x => x.s > 0).sort((a, b) => b.s - a.s || a.i - b.i);
        const pick = opts.find(o => o.name.toLowerCase() === low) || scored[0]?.o
          || opts.find(o => o.name.toLowerCase() === low)
          || opts.find(o => o.name.toLowerCase().includes(low) || low.includes(o.name.toLowerCase()))
          || opts.find(o => o.abroad && low.includes(o.abroad.toLowerCase()))
          || opts.find(o => low.split(/\s+/).filter(w => w.length > 3).some(w => o.name.toLowerCase().includes(w)))
          || opts.find(o => { const text = (o.name + " " + o.courses.map(c => c.title).join(" ")).toLowerCase();
                              return low.split(/\s+/).filter(w => w.length > 3).some(w => text.includes(w.slice(0, 5))); });
        if (!pick) return { ok: false, error: `No ${a} option matching "${option}".`, options: opts.map(o => o.name) };
        // the slots this area currently fills, in quarter order
        const slots = [];
        QUARTERS.forEach(q => state.plan[q].forEach(id => { if (courses[id]?.category === a) slots.push([q, id]); }));
        state.tray.filter(id => courses[id]?.category === a).forEach(id => slots.push(["TRAY", id]));
        const before = snapshot();
        // switching away from a study abroad program: drop its language course and give back the elective slots it used
        if (a === "CIV") {
          QUARTERS.forEach(q => state.plan[q].filter(id => courses[id]?.abroad_extra).forEach(id => removeEverywhere(id)));
          state.tray = state.tray.filter(id => !courses[id]?.abroad_extra);
          (state.abroadElectives || []).forEach(id => state.tray.push(id));
          state.abroadElectives = [];
          if (state.abroad && !pick.abroad) state.abroad = null;
        }
        // register the chosen courses (each one in a sequence requires the one before it)
        pick.courses.forEach((c, i) => {
          if (!courses[c.id]) {
            const prev = courses[slots[0]?.[1]] || {};
            const nc = { id: c.id, title: c.title, category: c.category || a, offered: c.offered, prereqs: [],
                         abroad_eligible: !!pick.abroad || a === "CIV" || a === "ARTS", hours_per_week: prev.hours_per_week || 8,
                         abroad_extra: !!c.category && c.category !== a };
            catalog.courses.push(nc); courses[c.id] = nc; byNorm[norm(c.id)] = c.id;
          }
          const prevSame = pick.courses.slice(0, i).reverse().find(x => (x.category || a) === (c.category || a));
          courses[c.id].prereqs = prevSame ? [prevSame.id] : [];
        });
        slots.forEach(([q, id], i) => {
          removeEverywhere(id);
          const nid = pick.courses[i]?.id;
          if (!nid) return;
          if (q === "TRAY") state.tray.push(nid); else state.plan[q].push(nid);
        });
        pick.courses.slice(slots.length).forEach(c => { removeEverywhere(c.id); state.tray.push(c.id); });
        if (pick.abroad) {
          // a program is the whole quarter: its 3 CIV courses plus a language course, in the quarter it runs
          state.abroad = null;
          let q = `Y3-${pick.quarter || "Autumn"}`;
          if (state.locked.includes(q)) q = `Y4-${pick.quarter || "Autumn"}`;
          state.abroad = q;
          state.plan[q].filter(id => !pick.courses.some(c => c.id === id)).forEach(id => { removeEverywhere(id); state.tray.push(id); });
          pick.courses.forEach(c => { removeEverywhere(c.id); state.plan[q].push(c.id); });
          // the extra courses beyond the CIV requirement count as electives
          const extra = Math.max(0, pick.courses.length - slots.length);
          state.abroadElectives = [];
          for (const x of QUARTERS.filter(x => !state.locked.includes(x) && x !== q)) {
            for (const id of [...state.plan[x]]) {
              if (state.abroadElectives.length >= extra) break;
              if (/^ELECTIVE \d/.test(id)) { removeEverywhere(id); state.abroadElectives.push(id); }
            }
          }
          state.tray.filter(id => /^ELECTIVE \d/.test(id)).forEach(id => { if (state.abroadElectives.length < extra) { removeEverywhere(id); state.abroadElectives.push(id); } });
        }
        state.coreChoices = { ...(state.coreChoices || {}), [a]: pick.name };
        runAutoFix(); // slot the new sequence in cleanly
        return result({ message: `Switched ${a} to ${pick.name}${pick.abroad ? ` (abroad in ${pick.abroad}, ${state.abroad})` : ""}.`, changes: diff(before),
                        hint: state.tray.length ? "Some courses need new quarters. Offer auto_fix." : undefined });
      },
      lighten_load({ period, max_hours }) {
        // period can be a whole year ("Y2", "second year") or one quarter ("Y2-Autumn")
        const s = String(period || "").toLowerCase();
        let qs = [];
        const q1 = parseQuarter(period);
        if (q1) qs = [q1];
        else {
          const d = s.match(/[1-4]/);
          const y = d ? +d[0] : /first|freshman|\bone\b/.test(s) ? 1 : /second|sophomore|\btwo\b/.test(s) ? 2 : /third|junior|\bthree\b/.test(s) ? 3 : /fourth|senior|\bfour\b/.test(s) ? 4 : null;
          if (y) qs = SEASONS.map(x => `Y${y}-${x}`);
        }
        if (!qs.length) return { ok: false, error: `Couldn't understand "${period}". Use a year like "Y2" or a quarter like "Y2-Autumn".` };
        const goal = Number(max_hours) || 34;
        const before = snapshot();
        const dependents = id => catalog.courses.filter(c => c.prereqs.includes(id)).map(c => c.id);
        const stuck = new Set();
        for (let n = 0; n < 20; n++) {
          const heavy = qs.filter(q => hoursIn(q) > goal && !stuck.has(q)).sort((a, b) => hoursIn(b) - hoursIn(a))[0];
          if (!heavy) break;
          const hi = qIndex(heavy);
          const movable = [...state.plan[heavy]].sort((a, b) => courses[b].hours_per_week - courses[a].hours_per_week);
          const targets = QUARTERS.map((q, i) => i).filter(i => !qs.includes(QUARTERS[i])).sort((a, b) => Math.abs(a - hi) - Math.abs(b - hi));
          let moved = false;
          for (const id of movable) {
            for (const t of targets) {
              const tq = QUARTERS[t];
              if (hoursIn(tq) + courses[id].hours_per_week > goal + 4) continue;
              const deps = dependents(id).map(whereIs).filter(w => w && w !== "TRAY");
              if (deps.some(w => qIndex(w) <= t)) continue;
              removeEverywhere(id);
              if (canPlace(id, t, MAX_COURSES)) { state.plan[tq].push(id); moved = true; break; }
              state.plan[heavy].push(id);
            }
            if (moved) break;
          }
          if (!moved) stuck.add(heavy);
        }
        const changes = diff(before);
        const still = qs.filter(q => hoursIn(q) > goal).map(q => `${q} is still ~${hoursIn(q)} hrs/week`);
        return result({
          changes,
          hours_now: Object.fromEntries(qs.map(q => [q, hoursIn(q)])),
          message: changes.length ? `Moved ${changes.length} course(s) out of ${qs.join(", ")}.` : "Couldn't move anything without breaking a prerequisite.",
          still_heavy: still
        });
      },
      squeeze_in() {
        // last resort: allow a fifth course in the lightest quarters that work
        const before = snapshot();
        runAutoFix();
        const todo = [...state.tray].sort((a, b) => depth(a) - depth(b));
        const stuck = [];
        todo.forEach(id => {
          removeEverywhere(id);
          const ok = QUARTERS.map((q, i) => i).filter(i => canPlace(id, i, MAX_COURSES + 1))
            .sort((a, b) => hoursIn(QUARTERS[a]) - hoursIn(QUARTERS[b]))[0];
          if (ok === undefined) stuck.push(id); else state.plan[QUARTERS[ok]].push(id);
        });
        state.tray.push(...stuck);
        const changes = diff(before);
        const options = [];
        if (stuck.length) {
          if (state.second) options.push(`drop the ${state.second} second major`);
          if (state.abroad) options.push(`skip studying abroad in ${state.abroad}`);
          options.push("leave them unscheduled and ask your adviser about summer courses (Harper can't schedule summer yet)");
        }
        return result({ changes, message: stuck.length ? `Squeezed in ${todo.length - stuck.length}, but ${stuck.length} still won't fit. This isn't possible in four years.` : `Squeezed everything in with a fifth course where needed.`,
          verdict: stuck.length ? "not_possible" : "fixed", options: options.length ? options : undefined });
      },
      auto_fix() {
        const before = snapshot();
        runAutoFix();
        const changes = diff(before);
        const left = state.tray.length;
        return result({ changes, message: (changes.length ? `Moved ${changes.length} course(s).` : "Nothing needed fixing.") +
          (left ? ` ${left} course(s) can't fit in four years without a fifth course in some quarter.` : ""),
          verdict: left ? "needs_fifth_course" : "fixed",
          next_step: left ? "Tell them it doesn't fit with four courses a quarter and ask if they're okay taking five in a quarter (squeeze_in). Don't move courses one by one." : undefined });
      }
    };

    return { tools, state, validate, hoursIn, courses, QUARTERS, SEASONS, onChange: fn => listeners.push(fn), parseQuarter, findCourse };
  }

  root.Planner = { createPlanner, QUARTERS, SEASONS };
  if (typeof module !== "undefined") module.exports = root.Planner;
})(typeof window !== "undefined" ? window : globalThis);
