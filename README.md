# Harper

A four-year course planner you talk to. Built for the KTP Fall Voice AI Mini-Hack (Oct 17, 2026) with ElevenLabs.

You tell Harper your major and it lays out a 12-quarter plan. Then you change things out loud: "I want to do Paris in the fall of third year," or "CMSC 14300 just filled up." The grid updates as Harper talks, any course that breaks turns red, and you can ask it to fix the plan.

## Why

Planning four years here is annoying. Core sequences only run in certain quarters, prereq chains are long, and one change (a full class, a quarter abroad) can push something back a year without you noticing until it's too late. Advisors help, but you only see them a few times a year.

## How it works

- The voice side is an ElevenLabs agent.
- The agent doesn't edit the plan itself. It calls one of six tools in the browser: `load_major`, `move_course`, `set_study_abroad`, `mark_course_closed`, `auto_fix`, `get_plan`.
- `planner.js` does the actual checking (prereqs, which quarters a course is offered, study abroad rules, overloaded quarters) and tells the agent what changed.
- The agent then explains the result out loud.

We split it this way so the model can't make up a plan that breaks the rules. Whatever shows on screen has been checked.

```
voice -> ElevenLabs agent -> tool call -> planner.js -> grid updates
                 ^                              |
                 '------- result (JSON) --------'
```

## Files

- `index.html`: the page and the voice connection
- `styles.css`: styling
- `planner.js`: rules, auto-fix, and the tools
- `catalog.js`: course data and the starting plans for CS and Econ
- `AGENT_SETUP.md`: prompt and tool settings for the ElevenLabs agent

## Running it

1. Set up the agent using `AGENT_SETUP.md`.
2. Put your agent ID in `index.html` where it says `AGENT_ID`.
3. Open `index.html` in Chrome and click "Talk to Harper."

If Chrome won't give the page the mic, run `python3 -m http.server` in this folder and go to `localhost:8000`.

You can also try everything without voice using "Manual controls" on the right.

## About the data

The course data is a simplified sample loosely based on the College Catalog. Core courses are generic (HUM 1, SOSC 2, etc.), some courses really have several ways to satisfy a prereq and we only list one, and the hours per week are rough guesses. Don't use this to plan your actual schedule.

Adding a major just means adding its courses and a starting plan to `catalog.js`.

## The name

After William Rainey Harper, UChicago's first president, and the library on the quad.

## What we'd add next

- Double majors and minors, including which courses can count for both
- Pulling course data straight from the catalog
- Real workload numbers from course evaluations
- Exporting a plan to bring to your advisor

Independent student project, not affiliated with the University of Chicago.
