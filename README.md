# Harper
**Talk through your four years.** A voice-driven degree planner for UChicago students.
Built at the KTP Fall Voice AI Mini-Hack with ElevenLabs Conversational AI.

> "I want to study abroad in Paris Autumn of junior year — does that break my CS major?"

Instead of a wall of text, Harper *talks you through it* while your 12-quarter plan
rearranges itself live on screen: displaced courses fly out, broken prerequisites turn red,
and one "fix it" turns the board green again.

## The problem
Planning 4 years at UChicago means juggling Core sequences that are only offered in certain
quarters, long prerequisite chains, and study abroad. One change (a closed course, a quarter
in Paris) can silently cascade and delay graduation. Students find out too late.

## What it does
- **Load a plan by voice:** "I'm a CS major." loads a valid sample 4-year plan
- **What-if moves:** "Move SOSC to second year." The rule engine checks offerings and prereqs instantly
- **Study abroad:** "Paris, Autumn junior year." Ineligible courses are displaced; Civ is covered abroad
- **Registration panic:** "CMSC 14300 just closed!" Every downstream course that breaks turns red
- **Auto-fix:** "Fix it." Greedy prerequisite-aware re-planning with minimal disruption
- **Workload warnings:** quarters over ~42 hrs/week flash yellow

## How it works
```
 Student voice ──► ElevenLabs Agent (STT → LLM → TTS)
                        │  client tool calls
                        ▼
            planner.js: deterministic rule engine
     (prereq graph · quarter offerings · abroad rules · auto-fix)
                        │  JSON results (what changed / what broke)
                        ▼
      index.html grid re-renders + animates ◄── agent explains out loud
```
**Key design choice:** the LLM never invents a plan. It calls 6 tools (`load_major`,
`move_course`, `set_study_abroad`, `mark_course_closed`, `auto_fix`, `get_plan`) and a
deterministic engine guarantees every plan it shows obeys the rules. No hallucinated degrees.

## Run it
1. Create the agent in ElevenLabs (see `AGENT_SETUP.md`).
2. Paste your Agent ID into `index.html` (`const AGENT_ID = ...`).
3. Open `index.html` in Chrome and click **Talk to Harper**.
   (If the mic is blocked, run `python3 -m http.server` in this folder and open http://localhost:8000.)

## Adding a major
It's just data: add courses and a 12-quarter plan to `catalog.js`. The engine works for any program.

## Data disclaimer
Course data is a simplified sample based on the UChicago College Catalog (single prerequisite
paths, generic Core courses, estimated weekly hours). Not official advising.

## Why "Harper"?
Named for William Rainey Harper, UChicago's first president (and the library on the quad).

## Next steps
Double majors and minors with double-counting rules · live catalog scraping · real course
evaluation data for workload · export to an advisor-ready PDF.
