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

    const state = { major: null, second: null, plan: emptyPlan(), tray: [], abroad: null, closed: {}, changed: [], origin: {} };
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
      const low = String(input).toLowerCase();
      const t = catalog.courses.find(c => c.title.toLowerCase().includes(low) || low.includes(c.title.toLowerCase()));
      return t ? t.id : null;
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
      if (!c) return out;
      if (state.closed[id] === q) out.push(`closed in ${q}`);
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
    function runAutoFix() {
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
    }

    // tools the agent can call
    const tools = {
      load_major({ major }) {
        const m = parseMajor(major);
        if (!m || !catalog.plans[m]) return { ok: false, error: `Unknown major "${major}". Available: ${Object.keys(catalog.plans).join(", ")}` };
        state.major = m; state.second = null; state.plan = emptyPlan(); state.tray = []; state.abroad = null; state.closed = {}; state.origin = {};
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
        state.changed = QUARTERS.flatMap(q => state.plan[q]);
        return result({ message: `Loaded the ${m} plan.`, core_not_picked_yet: open });
      },
      add_second_major({ major }) {
        const m2 = parseMajor(major);
        if (!state.major) return { ok: false, error: "Load a first major before adding a second one." };
        if (!m2 || !catalog.plans[m2]) return { ok: false, error: `Unknown major "${major}". Available: ${Object.keys(catalog.plans).join(", ")}` };
        if (m2 === state.major) return { ok: false, error: `${m2} is already the first major.` };
        const cats = catalog.major_categories || {};
        const mine1 = cats[state.major] || [], mine2 = cats[m2] || [];
        const core = Object.keys(catalog.core_options || {});
        const before = snapshot();
        const scheduled = () => QUARTERS.flatMap(q => state.plan[q]).concat(state.tray);
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
        const reshuffle = shared.filter(id => !core.includes(courses[id].category) &&
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
      move_course({ course_id, to_quarter }) {
        const id = findCourse(course_id), q = parseQuarter(to_quarter);
        if (!id) return { ok: false, error: `Couldn't find course "${course_id}".` };
        if (!q) return { ok: false, error: `Couldn't understand quarter "${to_quarter}". Use format like Y2-Winter.` };
        const before = snapshot();
        removeEverywhere(id); state.plan[q].push(id);
        return result({ changes: diff(before) });
      },
      set_study_abroad({ quarter }) {
        const before = snapshot();
        if (/none|cancel|no/i.test(String(quarter)) && !parseQuarter(quarter)) {
          state.abroad = null; state.changed = [];
          return result({ message: "Study abroad cancelled." });
        }
        const q = parseQuarter(quarter);
        if (!q) return { ok: false, error: `Couldn't understand quarter "${quarter}".` };
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
        const before = snapshot();
        state.closed[id] = q; removeEverywhere(id); state.tray.push(id);
        const v = validate();
        diff(before);
        state.changed = [id, ...Object.keys(v.courseIssues)];
        return result({ message: `${id} is closed for ${q} and has been unscheduled.`, now_broken: Object.keys(v.courseIssues), hint: "Offer to call auto_fix." });
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
        const pick = opts.find(o => o.name.toLowerCase() === low)
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
        // register the chosen courses (each one requires the one before it)
        pick.courses.forEach((c, i) => {
          if (!courses[c.id]) {
            const prev = courses[slots[0]?.[1]] || {};
            const nc = { id: c.id, title: c.title, category: a, offered: c.offered, prereqs: [],
                         abroad_eligible: !!pick.abroad || a === "CIV" || a === "ARTS", hours_per_week: prev.hours_per_week || 8 };
            catalog.courses.push(nc); courses[c.id] = nc; byNorm[norm(c.id)] = c.id;
          }
          courses[c.id].prereqs = i > 0 ? [pick.courses[i - 1].id] : [];
        });
        slots.forEach(([q, id], i) => {
          removeEverywhere(id);
          const nid = pick.courses[i]?.id;
          if (!nid) return;
          if (q === "TRAY") state.tray.push(nid); else state.plan[q].push(nid);
        });
        pick.courses.slice(slots.length).forEach(c => state.tray.push(c.id));
        if (pick.abroad) {
          const q = state.abroad || "Y3-Autumn";
          state.abroad = q;
          pick.courses.forEach(c => { removeEverywhere(c.id); state.plan[q].push(c.id); });
          state.plan[q].filter(id => !courses[id]?.abroad_eligible).forEach(id => { removeEverywhere(id); state.tray.push(id); });
        }
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
        return result({ changes, message: stuck.length ? `Squeezed in ${todo.length - stuck.length}, but ${stuck.length} still won't fit.` : `Squeezed everything in with a fifth course where needed.` });
      },
      auto_fix() {
        const before = snapshot();
        runAutoFix();
        const changes = diff(before);
        const left = state.tray.length;
        return result({ changes, message: (changes.length ? `Moved ${changes.length} course(s).` : "Nothing needed fixing.") +
          (left ? ` ${left} course(s) can't fit in four years without a fifth course in some quarter.` : "") });
      }
    };

    return { tools, state, validate, hoursIn, courses, QUARTERS, SEASONS, onChange: fn => listeners.push(fn), parseQuarter, findCourse };
  }

  root.Planner = { createPlanner, QUARTERS, SEASONS };
  if (typeof module !== "undefined") module.exports = root.Planner;
})(typeof window !== "undefined" ? window : globalThis);
