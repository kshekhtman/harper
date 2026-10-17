// Harper rule engine: deterministic plan state + validation + tools.
// The voice agent never edits the plan directly; it calls these tools and
// explains the results. Works in the browser (window.Planner) and Node (tests).
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

    const state = { major: null, plan: emptyPlan(), tray: [], abroad: null, closed: {}, changed: [], origin: {} };
    const listeners = [];

    function emptyPlan() { const p = {}; QUARTERS.forEach(q => (p[q] = [])); return p; }
    function emit() { listeners.forEach(fn => fn(state)); }
    const seasonOf = q => q.split("-")[1];
    const qIndex = q => QUARTERS.indexOf(q);

    // ---------- Fuzzy input parsing (the LLM may say things loosely) ----------
    function findCourse(input) {
      const n = norm(input);
      if (!n) return null;
      if (byNorm[n]) return byNorm[n];
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
      else if (/first|freshman/.test(s)) year = 1;
      else if (/second|sophomore/.test(s)) year = 2;
      else if (/third|junior/.test(s)) year = 3;
      else if (/fourth|senior/.test(s)) year = 4;
      return season && year ? `Y${year}-${season}` : null;
    }
    function parseMajor(input) {
      const s = String(input || "").toLowerCase();
      if (/econ/.test(s)) return "Econ";
      if (/cs|comput|cmsc/.test(s)) return "CS";
      return Object.keys(catalog.plans).find(m => m.toLowerCase() === s) || null;
    }

    // ---------- State helpers ----------
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

    // ---------- Validation ----------
    function courseProblems(id, q) {
      const c = courses[id], i = qIndex(q), out = [];
      if (!c) return out;
      if (state.closed[id] === q) out.push(`closed in ${q}`);
      if (state.abroad === q) { if (!c.abroad_eligible) out.push(`not available while studying abroad`); }
      else if (!c.offered.includes(seasonOf(q))) out.push(`only offered ${c.offered.join("/")}`);
      c.prereqs.forEach(p => {
        if (!courses[p]) return;
        const pq = whereIs(p);
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

    // ---------- Auto-fix (greedy, prerequisite-aware) ----------
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
      return c.prereqs.every(p => { if (!courses[p]) return true; const pq = whereIs(p); return pq && pq !== "TRAY" && (qIndex(pq) < i || (qIndex(pq) === i && state.abroad === q)); });
    }
    function placeBest(id, pref) {
      const order = QUARTERS.map((_, i) => i).sort((a, b) => (Math.abs(a - pref) - Math.abs(b - pref)) || (b - a));
      const tiers = [[3, HEAVY_HOURS], [MAX_COURSES, HEAVY_HOURS], [MAX_COURSES, Infinity]];
      for (const [maxLoad, maxHrs] of tiers) {
        for (const i of order) {
          if (canPlace(id, i, maxLoad) && hoursIn(QUARTERS[i]) + courses[id].hours_per_week <= maxHrs) {
            state.plan[QUARTERS[i]].push(id); return true;
          }
        }
      }
      return false;
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

    // ---------- Tools (called by the voice agent) ----------
    const tools = {
      load_major({ major }) {
        const m = parseMajor(major);
        if (!m || !catalog.plans[m]) return { ok: false, error: `Unknown major "${major}". Available: ${Object.keys(catalog.plans).join(", ")}` };
        state.major = m; state.plan = emptyPlan(); state.tray = []; state.abroad = null; state.closed = {}; state.origin = {};
        QUARTERS.forEach(q => (state.plan[q] = [...(catalog.plans[m][q] || [])]));
        state.changed = QUARTERS.flatMap(q => state.plan[q]);
        const n = state.changed.length;
        return result({ message: `Loaded the sample ${m} 4-year plan: ${n} courses across 12 quarters.` });
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
        if (state.closed[id] && state.closed[id] !== q) { /* moving out of a closed quarter is fine */ }
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
        // Displace courses that can't be taken abroad.
        const displaced = state.plan[q].filter(id => !courses[id]?.abroad_eligible);
        state.plan[q] = state.plan[q].filter(id => courses[id]?.abroad_eligible);
        state.tray.push(...displaced);
        // Pull Civ courses into the abroad quarter (abroad programs cover the Civ sequence).
        const civ = catalog.courses.filter(c => c.category === "CIV" && c.abroad_eligible).map(c => c.id);
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
      auto_fix() {
        const before = snapshot();
        runAutoFix();
        const changes = diff(before);
        return result({ changes, message: changes.length ? `Moved ${changes.length} course(s).` : "Nothing needed fixing." });
      }
    };

    return { tools, state, validate, hoursIn, courses, QUARTERS, SEASONS, onChange: fn => listeners.push(fn), parseQuarter, findCourse };
  }

  root.Planner = { createPlanner, QUARTERS, SEASONS };
  if (typeof module !== "undefined") module.exports = root.Planner;
})(typeof window !== "undefined" ? window : globalThis);
