# Start Here

> Start with [DAILY_ROUTINE.md](DAILY_ROUTINE.md) for the 7am plan, 5pm check-in, and private 9pm progress record.

This guide is for people who want to use JobSearchCoach quickly and safely.

## What this repository is

JobSearchCoach is a Codex skill package for running an adaptive, evidence-based job-search pipeline.

It helps a user:

- define which roles fit and which do not;
- plan realistic daily job-search work;
- monitor progress from approved files, email threads, and outcome inputs;
- learn from completed work to adjust the next day;
- recommend who to contact next from approved networking sources when useful;
- keep the process sustainable over time.

## What matters most

The main value of this skill is the learning cycle:

1. review what was actually done;
2. identify the most important outcome, constraint, or improvement;
3. update the next day's priorities.

Networking can be part of the workflow, but it is not the center of the system.

For data-science training, use the separate [Data Science Sprint Coach repository](https://github.com/limorgu/DataScienceSprintCoach). The Job Search Coach only links to it and does not store training history.

## What this repository is not

It does not:

- mass apply to jobs;
- invent qualifications;
- send messages without approval;
- require private account access to be useful;
- require health disclosures.

## Fastest way to use it

### Option 1: Use it directly from this repository

1. Clone or download this repository.
2. Open the repository folder in Codex.
3. Start a new task in Codex.
4. Use this prompt:

```text
Use @fit-focused-job-search to help me set up a focused job search.
```

If Codex does not require the `@` mention, this also works:

```text
Help me set up JobSearchCoach for my job search.
```

### Option 2: Install it as a personal skill

If you want the skill available outside this repo, install `fit-focused-job-search` from this repository into your personal Codex skills.

## First-use onboarding

The skill is designed to ask a few questions at a time instead of giving a giant intake form.

Expect it to ask about:

- target roles;
- roles to avoid;
- location and work setup constraints;
- strongest evidence of fit;
- realistic weekly schedule;
- optional habits such as exercise or meditation;
- whether you want to use files, Gmail, Drive, or networking sources.

## Good first prompts

- `Help me define the best target roles based on my past interviews and strengths.`
- `Use one resume and three job descriptions to tell me where I am the strongest fit.`
- `Create a weekday routine with 90 minutes a day for applications and networking.`
- `Use my approved Gmail thread to track what I finished and plan tomorrow.`
- `Use my approved LinkedIn network note to tell me who I should contact this week and why.`

## Easiest trust-first setup

The safest starting point is manual input only.

Start with:

- one current resume;
- two to five job descriptions;
- one short note on target roles and exclusions;
- one short note on schedule and habits.

You do not need to connect Gmail, Drive, LinkedIn, or Calendar to get value from the skill.

## If you want connectors later

The repository supports narrow, explicit sources such as:

- one curated Drive folder;
- one Gmail label or one self-check-in thread;
- one approved LinkedIn profile, network note, or connections export;
- optional calendar access only for creating new blocks with approval.

Reading a source does not imply permission to send, edit, organize, or automate.

## Public repo vs. private setup

Keep these separate.

The public GitHub repository should contain only:

- reusable skill instructions;
- generic folder examples;
- privacy and permission rules;
- fictional tests and sample prompts.

Your private personal setup should contain:

- your real Drive folders;
- your real Gmail labels or threads;
- your real recordings or transcripts;
- your real networking notes;
- your real daily routine history.

Do not publish:

- Drive folder links or IDs;
- recording links;
- private email queries;
- personal calendar details;
- any path or identifier tied to a real user's account.

## Folder overview

This repository is intentionally small and readable.

### Core skill folder

`/.agents/skills/fit-focused-job-search/`

This is the actual skill package.

- `SKILL.md`
  The main behavior and workflow instructions for the coach.
- `agents/openai.yaml`
  The skill metadata/config used by Codex.
- `references/onboarding.md`
  How the coach gathers information gradually.
- `references/evidence-and-fit.md`
  How the coach evaluates role fit using evidence instead of titles alone.
- `references/resources-and-connections.md`
  How resumes, folders, Gmail, Drive, and networking sources are handled.
- `references/daily-planning.md`
  How daily execution plans are built.
- `references/privacy-and-permissions.md`
  What the coach may and may not read or do without approval.
- `references/testing.md`
  How the skill was validated.

### Supporting docs

- `README.md`
  Public overview of the project.
- `START_HERE.md`
  This user guide.
- `PRIVACY.md`
  High-level privacy and permission boundaries.
- `SYSTEM_BLUEPRINT.md`
  Product architecture and data model.
- `E2E_EMAIL_TEST.md`
  A safe end-to-end test using fictional Gmail and network data.
- `CONTRIBUTING.md`
  Contribution notes.

### Test materials

`/tests/`

- `personas/`
  Fictional sample users used for validation.
- `evaluation-rubric.md`
  The scoring criteria for quality checks.
- `TEST_RESULTS.md`
  Summary of validation outcomes.

## Why people can trust this repository

The package is designed to be inspectable.

- The instructions are plain Markdown files, not hidden logic.
- The privacy rules are documented explicitly.
- The repository contains fictional test cases, not real user data.
- The coach defaults to narrow access and manual alternatives.
- External actions such as outreach or calendar changes require explicit approval.

## Best way to share it with someone today

Send them these three links:

1. the main repository README;
2. this `START_HERE.md` guide;
3. the `PRIVACY.md` file.

That gives them:

- what it does;
- how to start;
- why it is safe to inspect and try.

If they want to use their own data, they should create their own private folders and connectors separately from this repository.
