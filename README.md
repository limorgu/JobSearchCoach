# JobSearchCoach

A human-centered AI coaching system for job search execution, market-fit learning, and sustainable daily routines.

JobSearchCoach helps a job seeker connect demonstrated market fit, verified opportunities, curated resume versions, thoughtful professional connections, interview and technical practice, realistic daily planning, and outcome-based learning.

It optimizes for relevant opportunities, interview readiness, and sustainable execution rather than application volume.

## Why this exists

Most job alerts match titles and keywords. They often ignore whether a role fits the person's actual responsibilities, domain advantages, location limits, management experience, readiness, habits, and available time.

JobSearchCoach begins with evidence: work performed successfully, applications that produced interviews, recurring strengths, explicit constraints, and the user's real working rhythm. It uses that evidence to screen opportunities, select the closest truthful resume, recommend small adaptations, identify an appropriate networking path, and practice the skills most likely to matter.

It also supports an ongoing routine:

- daily job recommendations matched to fit and constraints;
- a realistic daily plan that respects work windows, exercise, meditation, and other user-defined anchors;
- targeted practice selection across interview, SQL, Python, case, or domain preparation;
- connector-based monitoring of approved submission folders and approved email threads;
- lightweight progress capture through daily completion feedback or a reply to the user's own tracking email;
- a Friday science reading brief selected from the user's approved interest list.

## Core workflow

1. **Progressive onboarding** — asks a few high-value questions at a time.
2. **Evidence map** — identifies proven strengths, advantages, uncertainties, and exclusions.
3. **Routine profile** — learns the user's schedule, concentration windows, sustainable habits, and preferred planning style.
4. **Resource setup** — supports manual uploads or explicitly approved folders and connectors.
5. **Opportunity review** — applies approved hard exclusions before fit scoring.
6. **Resume and connection guidance** — recommends limited truthful edits and verified outreach routes.
7. **Readiness training** — diagnoses positioning, fluency, knowledge, and qualification gaps.
8. **Daily planning** — turns priorities into precise, feasible tasks with definitions of done.
9. **Connector-aware progress tracking** — reads approved email or drive sources to understand what was submitted or practiced.
10. **Outcome learning** — adapts from applications, interviews, completions, and user feedback.
11. **Weekly science brief** — on Fridays, curates relevant science or research reading from an approved list aligned to the user's career interests.

## Product behaviors

### What the coach learns

- job families, industries, and missions the user wants or wants to avoid;
- what the market already validated through interviews and recruiter interest;
- which preparation modes convert best for the user;
- which daily habits should be protected or encouraged as optional planning anchors;
- which practice area should come next: interview, SQL, Python, case, domain reading, or positioning.

### What the coach can do

- rank new jobs against evidence-based market fit;
- recommend the next best action instead of a generic long to-do list;
- tell the user when to focus on interview prep instead of more applications;
- detect whether the user needs fluency practice, a resume adaptation, or a targeting change;
- carry forward unfinished work and avoid repeating completed work;
- use approved Gmail and Drive sources to monitor progress without requiring broad account access.

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

### Direct repository use

1. Extract this package or clone the GitHub repository.
2. Open the repository folder in Codex.
3. Start with:

> Use @fit-focused-job-search to help me set up a focused job search.

Codex can also detect the repo-scoped skill automatically when a request matches its description.

### Personal installation

Ask the skill installer to install `fit-focused-job-search` from this repository when you want it available outside this project.

## Example requests

- “My alerts keep showing management jobs that do not fit me. Help me recalibrate my search.”
- “Use the applications that produced interviews to identify my strongest role families.”
- “Compare this job with my curated resume versions and suggest only small truthful changes.”
- “I have an interview next week. Build a readiness map and practice one question at a time.”
- “I do not want to connect any accounts. Use one uploaded resume and pasted job descriptions.”
- “Create a realistic weekday plan that includes applications, networking, and SQL practice.”
- “Use my approved Gmail and Drive sources to monitor what I submitted and plan tomorrow.”
- “Every Friday, give me one short science reading brief relevant to my target career direction.”

## Privacy by design

This package contains no real resumes, contacts, application history, health information, credentials, private folder links, or personal automation settings.

Users choose what to provide. Manual uploads and pasted job descriptions remain supported when a user does not want to connect an account. Reading a resource never implies permission to edit it, send outreach, modify a calendar, or create recurring work.

See [PRIVACY.md](PRIVACY.md).

## Testing

V1 was structurally validated and forward-tested with three independent fictional users:

- a cognitive researcher entering responsible AI;
- a logistics program manager without direct reports;
- a privacy-first data analyst needing SQL and interview practice.

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
└── references/
    ├── onboarding.md
    ├── evidence-and-fit.md
    ├── resources-and-connections.md
    ├── training.md
    ├── daily-planning.md
    ├── privacy-and-permissions.md
    └── testing.md

tests/
├── personas/
├── evaluation-rubric.md
└── TEST_RESULTS.md
```

## Documentation

- [Skill instructions](.agents/skills/fit-focused-job-search/SKILL.md)
- [Privacy and data boundaries](PRIVACY.md)
- [Contribution guidance](CONTRIBUTING.md)
- [Testing results](tests/TEST_RESULTS.md)
- [System blueprint](SYSTEM_BLUEPRINT.md)
- [End-to-end email sandbox test](E2E_EMAIL_TEST.md)
- [Official OpenAI skill documentation](https://learn.chatgpt.com/docs/build-skills)

## License

A reuse license has not yet been selected. Until one is added, copyright remains with the repository owner.
