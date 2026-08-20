# JobSearchCoach

> Start with [DAILY_ROUTINE.md](DAILY_ROUTINE.md) for the 7am plan, 5pm check-in, and private 9pm progress record.

Two connected, stand-alone coaches: one runs the job-search routine; the other runs continuous data-science interview practice.

## Choose your coach

| Coach | Use it for | Start here |
| --- | --- | --- |
| **Job Search Coach** | 7am priorities, 5pm check-ins, fit-based opportunities, applications, networking, and daily actions | [Open the Job Search Coach](JOB_SEARCH_COACH.md) |
| **Data Science Sprint Coach** | Continuous, topic-based interview practice with question continuity and schema isolation | [Open the separate repository](https://github.com/limorgu/DataScienceSprintCoach) |

They can exchange only a small readiness signal: the Job Search Coach may tell the sprint about an upcoming interview or a time window; the sprint may return what was practiced and the next readiness gap. Their data, procedures, and results stay separate.

---

An evidence-based job-search operating system that adapts from real outcomes, constraints, and completed work.

JobSearchCoach is not a job board, ATS, or general resume-review tool. It is a routine-first coach: the 7am plan decides the few actions that matter today, and the 5pm check-in turns what happened into a better plan for tomorrow.

It optimizes for a clear daily rhythm, continuous learning, and sustainable execution rather than application volume.

## Architecture

The repository contains two connected but separate systems:

- **Job Search Coach** — owns the 7am plan, 5pm check-in, private 9pm record, and the opportunity, networking, or resume action selected by that routine. Its user interface is [JOB_SEARCH_COACH.md](JOB_SEARCH_COACH.md).
- **Data Science Sprint Coach** — owns data-science questions, session state, topic banks, and progress evidence in its [separate repository](https://github.com/limorgu/DataScienceSprintCoach).

This separation prevents job-search decisions and training history from being mixed together.

## Why this exists

The advantage is not another title-or-keyword matcher. It is a continuous learning and adaptation pipeline: evidence from real outcomes, explicit constraints, and daily completion feedback improves the next decision.

JobSearchCoach begins with the day's priority and the user's real working rhythm. It uses only the evidence needed for today's action, then updates tomorrow's plan from what was actually learned today.

It also supports an ongoing routine:

- daily job recommendations matched to fit and constraints;
- a realistic daily plan that respects work windows, exercise, meditation, and other user-defined anchors;
- learning from approved daily check-ins and outcome signals so the next day adapts to real progress;
- connector-based monitoring of approved submission folders and approved email threads;
- optional approved network review to recommend who to contact next when the user wants it;
- lightweight progress capture through daily completion feedback or a reply to the user's own tracking email;
- a Friday science reading brief selected from the user's approved interest list.

The center of the system is the continuous learning loop:

1. observe what was completed or missed;
2. detect changing constraints, outcomes, and priorities;
3. update the next day accordingly.

## Core workflow

1. **Progressive onboarding** — asks a few high-value questions at a time.
2. **Evidence map** — identifies proven strengths, advantages, uncertainties, and exclusions.
3. **Routine profile** — learns the user's schedule, concentration windows, sustainable habits, and preferred planning style.
4. **Resource setup** — supports manual uploads or explicitly approved folders and connectors.
5. **Opportunity review** — applies approved hard exclusions before fit scoring.
6. **Daily planning** — turns priorities into precise, feasible tasks with definitions of done.
7. **Connector-aware progress tracking** — reads approved email or drive sources to understand what was submitted or completed.
8. **Outcome learning** — adapts from applications, interviews, completions, and user feedback.
9. **Optional network guidance** — ranks the best people to contact from approved network sources when networking is relevant.
10. **Weekly science brief** — on Fridays, curates relevant science or research reading from an approved list aligned to the user's career interests.

## Product behaviors

### What the coach learns

- job families, industries, and missions the user wants or wants to avoid;
- what the market already validated through interviews and recruiter interest;
- which daily habits should be protected or encouraged as optional planning anchors;
- which job-search priority should move up tomorrow;
- which parts of the user's network may help when networking is relevant.

### What the coach can do

- rank new jobs against evidence-based market fit;
- recommend the next best action instead of a generic long to-do list;
- carry forward unfinished work and avoid repeating completed work;
- use approved Gmail and Drive sources to monitor progress without requiring broad account access.
- use an approved LinkedIn profile or approved network export to recommend outreach targets when that is useful, but keep networking secondary to the main learning loop.

### What the coach will not do

- mass apply;
- fabricate qualifications;
- send outreach without authorization;
- modify calendar events without approval;
- require health disclosures;
- require connectors when manual input is enough.

## Use in Codex

The repo-scoped skill is located at:

`.agents/skills/fit-focused-job-search/SKILL.md`

If you want the simplest user guide first, start here:

- [START_HERE.md](START_HERE.md)

### Direct repository use

1. Extract this package or clone the GitHub repository.
2. Open the repository folder in Codex.
3. Start with:

> Use @fit-focused-job-search to help me set up a focused job search.

Codex can also detect the repo-scoped skill automatically when a request matches its description.

### Personal installation

Ask the skill installer to install `fit-focused-job-search` from this repository when you want it available outside this project.

## Quick trust guide

People evaluating this repository usually want to know three things quickly:

1. how to start;
2. what files are in the package;
3. whether the system respects privacy and approval boundaries.

Use these docs in this order:

- [START_HERE.md](START_HERE.md) for setup, first prompts, and folder overview;
- [PRIVACY.md](PRIVACY.md) for data and permission boundaries;
- [E2E_EMAIL_TEST.md](E2E_EMAIL_TEST.md) for a narrow, fictional end-to-end test.

## Public package and private data

This repository is for the reusable skill package, not for any one user's private setup.

The public repo should contain:

- the skill logic;
- generic folder examples;
- privacy rules;
- fictional tests and examples.

It should not contain:

- real Drive links or folder IDs;
- real Gmail labels or private queries;
- real recording links or transcripts;
- personal routine history or account-specific configuration.

Users should connect their own private folders, email threads, and notes separately. All personal outcomes, daily records, and dashboard results belong in local gitignored `private-progress/`, maintained by the 9pm progress agent.

## Example requests

- “My alerts keep showing management jobs that do not fit me. Help me recalibrate my search.”
- “Use the applications that produced interviews to identify my strongest role families.”
- “Compare this job with my curated resume versions and suggest only small truthful changes.”
- “I have an interview next week. Help me prioritize the job-search actions that support it.”
- “I do not want to connect any accounts. Use one uploaded resume and pasted job descriptions.”
- “Create a realistic weekday plan that includes applications and networking.”
- “Use my approved Gmail and Drive sources to monitor what I submitted and plan tomorrow.”
- “Use my LinkedIn network to tell me who I should contact this week and why.”
- “Every Friday, give me one short science reading brief relevant to my target career direction.”

## Privacy by design

This package contains no real resumes, contacts, application history, health information, credentials, private folder links, or personal automation settings.

Users choose what to provide. Manual uploads and pasted job descriptions remain supported when a user does not want to connect an account. Reading a resource never implies permission to edit it, send outreach, modify a calendar, or create recurring work.

See [PRIVACY.md](PRIVACY.md).

## Testing

V1 was structurally validated and forward-tested with three independent fictional users:

- a cognitive researcher entering responsible AI;
- a logistics program manager without direct reports;
- a privacy-first data analyst with clear role and location constraints.

See [tests/TEST_RESULTS.md](tests/TEST_RESULTS.md) and [tests/evaluation-rubric.md](tests/evaluation-rubric.md).

## Scope boundaries

JobSearchCoach does not mass apply, fabricate qualifications, guarantee interviews or offers, send outreach without authorization, modify existing calendar events, require health information, or require connectors when manual input is sufficient.

## System design

See [SYSTEM_BLUEPRINT.md](SYSTEM_BLUEPRINT.md) for the coach architecture, data model, recurring workflow design, and connector boundaries.

## End-to-end test

See [E2E_EMAIL_TEST.md](E2E_EMAIL_TEST.md) for a narrow-scope Gmail sandbox workflow that tests onboarding, job alert ingestion, application tracking, end-of-day feedback, and next-day planning end to end.

## Repository contents

```text
.agents/skills/fit-focused-job-search/
├── SKILL.md
├── agents/openai.yaml
├── references/
    ├── onboarding.md
    ├── evidence-and-fit.md
    ├── resources-and-connections.md
    ├── daily-planning.md
    ├── privacy-and-permissions.md
    └── testing.md

tests/
├── personas/
├── evaluation-rubric.md
└── TEST_RESULTS.md
```

## Documentation

- [Job Search Coach interface](JOB_SEARCH_COACH.md)
- [Daily job-search routine](DAILY_ROUTINE.md)
- [Data Science Sprint Coach (separate repository)](https://github.com/limorgu/DataScienceSprintCoach)
- [Skill instructions](.agents/skills/fit-focused-job-search/SKILL.md)
- [Start here guide](START_HERE.md)
- [Privacy and data boundaries](PRIVACY.md)
- [Contribution guidance](CONTRIBUTING.md)
- [Testing results](tests/TEST_RESULTS.md)
- [System blueprint](SYSTEM_BLUEPRINT.md)
- [End-to-end email sandbox test](E2E_EMAIL_TEST.md)
- [Official OpenAI skill documentation](https://learn.chatgpt.com/docs/build-skills)

## License

A reuse license has not yet been selected. Until one is added, copyright remains with the repository owner.
