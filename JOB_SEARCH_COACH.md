# Job Search Coach

> Start with [DAILY_ROUTINE.md](DAILY_ROUTINE.md) for the 7am plan, 5pm check-in, and private 9pm progress record.

This is a routine-first Job Search Coach. Its main interface is the 7am plan and the 5pm check-in: decide today's actions, record what changed, and improve tomorrow's plan.

It does **not** run interview practice. For that separate system, see [Data Science Sprint Coach](https://github.com/limorgu/DataScienceSprintCoach).

## Start here

Open this repository in Codex and say:

```text
Run my 7am job-search plan.
```

At 5pm, use: `Run my 5pm job-search check-in and update tomorrow's priorities.`

A resume, target roles, Gmail, Drive, calendar, and network sources are optional supporting inputs—not the public coach's starting point. They are used only when a daily action calls for them and the user approves.

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

## What the routine owns

- 7am priorities, high-fit opportunities, and time-bounded actions;
- 5pm completion, outcomes, constraints, and next-day adaptation;
- approved networking and application follow-ups when they are the highest-priority action;
- private 9pm progress capture.

Resume selection, role-fit analysis, and source connections remain available only as supporting work for a specific daily action.

## What you receive

The 7am routine returns a short practical plan; the 5pm routine returns a concise update to tomorrow's priorities. It does not begin by asking for a general resume review or a large onboarding process.

## Boundaries

This coach does not mass apply, invent qualifications, send outreach, or change calendars without explicit approval. All individual progress and results belong only in `private-progress/`; the public repository contains the reusable pipeline, not a person's job-search record. It does not store interview-training questions or practice results.

Read the full implementation in [the Job Search Coach skill](.agents/skills/fit-focused-job-search/SKILL.md) and its [routine reference](.agents/skills/fit-focused-job-search/references/daily-planning.md).
