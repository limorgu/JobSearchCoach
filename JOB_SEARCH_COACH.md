# Job Search Coach

> Start with [DAILY_ROUTINE.md](DAILY_ROUTINE.md) for the 7am plan, 5pm check-in, and private 9pm progress record.

This is a stand-alone job-search operating system. It helps you find high-fit opportunities, decide what to do next, prepare truthful application materials, and learn from real outcomes.

It does **not** run interview practice. For that separate system, see [Data Science Sprint Coach](https://github.com/limorgu/DataScienceSprintCoach).

## Start here

Open this repository in Codex and say:

```text
Use @fit-focused-job-search to set up my job-search pipeline and 7am/5pm routine.
```

You can start with only a resume, a few target roles, and your constraints. Gmail, Drive, calendar, and network sources are optional and always require approval.

## The daily interface

### 7am: plan the day

The morning plan uses your current priorities, constraints, and newest evidence to give you:

- the one most important job-search action;
- a small, time-bounded list of applications, networking, follow-ups, or evidence-building work;
- suggested high-fit opportunities, clearly marked Apply, Consider, or Skip;
- a concise reason each action matters now;
- a definition of done for each action.

### 5pm: close the loop

The evening check-in captures only what changed:

- completed and unfinished work;
- applications, recruiter updates, interview invitations, or rejections;
- useful networking actions and responses;
- constraints that should change tomorrow;
- newly discovered opportunities worth considering.

The next 7am plan learns from that check-in. It carries forward only important unfinished work and does not repeat completed work.

### 9pm: private progress record

The dedicated 9pm progress agent records the day's real applications, networking outcomes, completed work, constraints, dashboard results, and next-day context in local `private-progress/`. This folder is excluded from Git and is never part of the public coach interface.

## What this coach owns

- evidence-based role fit and hard exclusions;
- opportunity discovery, verification, and prioritization;
- truthful resume selection and small factual adaptations;
- networking suggestions and follow-up priorities;
- daily 7am planning and 5pm learning/check-in;
- optional weekly research brief;
- approved-source progress tracking.

## What you receive

For a strong opportunity, the coach returns a verified link, fit rationale, central gap, Apply/Consider/Skip recommendation, closest truthful resume, small adaptations, networking route, and the next action.

For the daily routine, it returns a short, practical plan rather than a long generic to-do list.

## Boundaries

This coach does not mass apply, invent qualifications, send outreach, or change calendars without explicit approval. All individual progress and results belong only in `private-progress/`; the public repository contains the reusable pipeline, not a person's job-search record. It does not store interview-training questions or practice results.

Read the full implementation in [the Job Search Coach skill](.agents/skills/fit-focused-job-search/SKILL.md) and its [routine reference](.agents/skills/fit-focused-job-search/references/daily-planning.md).
