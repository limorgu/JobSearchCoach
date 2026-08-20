# Data Science Sprint Coach

This is a stand-alone continuous-learning system for data-science interview practice. It keeps each topic, question history, future queue, and progress evidence separate so practice continues accurately across sessions.

It does **not** find jobs, edit resumes, manage applications, or perform networking. For that separate system, see [Job Search Coach](JOB_SEARCH_COACH.md).

## Start here

Open this repository in Codex and say:

```text
Continue my Data Science Sprint. Read the current session state, active schema, and active topic before asking the next question.
```

## The practice interface

Each session follows one consistent loop:

1. read the private checkpoint when available, otherwise the sanitized session state;
2. load only the active topic and approved schema;
3. ask one numbered question without the solution;
4. review the attempt, identify the key correction, and offer a retry when useful;
5. record evidence, the next question, and the next progression.

Question numbering is durable: a continued sequence never restarts at Q1. The coach uses only the active schema; it never pulls tables or feedback from an older practice dataset.

## Topic interfaces

Each topic has separate `covered/` and `future/` folders:

- SQL
- Python
- ML
- statistics
- LLM
- design
- case
- communication
- other

`covered/` contains verified, sanitized practice evidence. `future/` contains questions still to practice. Detailed real answers, scores, interview details, and daily results remain in the local private practice area.

## What this coach owns

- session continuation and durable question numbers;
- schema registry and schema-isolation rules;
- targeted practice by topic;
- retry and transfer progression;
- public-safe progress evidence;
- private daily practice checkpoints.

## Boundaries

The Job Search Coach may provide an interview surface, readiness gap, available time, or approved schema. This coach returns only a compact readiness signal; it does not take job-search actions.

Read the full implementation in [the Data Science Sprint leaf](.agents/skills/fit-focused-job-search/training/data-science-sprint/LEAF.md) and browse all topic banks in [its question-bank folder](.agents/skills/fit-focused-job-search/training/data-science-sprint/question-bank/).
