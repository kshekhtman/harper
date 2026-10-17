# Harper

Hi! Harper is an interactive tool that helps you talk to someone about your four-year graduation plan. I made this as part of my submission for the UChicago KTP Fall Voice AI Mini-Hack (Oct 17, 2026) with ElevenLabs.

Through this tool, you can talk to Harper about your four-year graduation plan. You speak with Harper and it helps you plan your time here in college. You tell Harper your major and it lays out a possible 12-quarter plan. Then you can talk to Harper about it, "I want to do Paris in the fall of third year," or "CMSC 14300 just filled up." The grid then automatically updates as you talk with Harper. If a course is incompatiable with another course or isn't satisfied in your plan, it will turn red, and Harper will fix the plan on your behalf, taking into account your evolving preferences.

## Why

UChicago is a very unique university, with its CORE cirriculum, complicated majors, and quarter system. Ensuring you have all the requirements to graduate is quite hard, as one change (a full class, a quarter abroad) can push something back a year without you noticing until it's too late. Plus, you only see your academic advisor on average no more than once a quarter, and they don't have as much time to help you plan as we would like. So, my tool, Harper can fill in this gap, acting as a personalized academic advisor available 24/7.

## How it works

- The voice side is powered by ElevenLabs. Harper doesn't edit the plan itself. Instead, it calls one of six functions: `load_major`, `move_course`, `set_study_abroad`, `mark_course_closed`, `auto_fix`, `get_plan`.
- `planner.js` does the actual checking (prereqs, which quarters a course is offered, study abroad rules, overloaded quarters) and tells Harper what changed.
- Harper then speaks the result out loud using text-to-speech.

We split it this way so the model can't make up a plan that breaks the rules. Whatever shows on screen has been checked.

![System Architecture](docs/arch.svg)

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
    
You can also pick your own Core sequences ("switch my Sosc to Power, Identity, and Resistance," "do Civ in Rome"), and ask Harper to lighten a heavy year.

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
