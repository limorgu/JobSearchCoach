# Job Search Coach Environment

Use this repository in VS Code or Codex as the operating environment for the job-search pipeline.

## Open and start

1. Clone this repository and open its root folder in VS Code.
2. Keep public workflow files in the repository.
3. Keep real results only in local `private-progress/`—it is gitignored.
4. In Codex, start with:

```text
Use @fit-focused-job-search to run my 7am/5pm job-search routine.
```

## Daily rhythm

- **7am:** create a short plan: priorities, high-fit opportunities, applications, networking suggestions, and definitions of done.
- **5pm:** report completion, outcomes, new constraints, and worthwhile new opportunities.
- **9pm:** the private progress agent writes the daily record, dashboard results, and next-day context in `private-progress/`.

## Working files

- `.agents/skills/fit-focused-job-search/` — reusable coach instructions.
- `JOB_SEARCH_COACH.md` — public interface and routine.
- `private-progress/` — local-only applications, outcomes, networking notes, dashboard results, and daily logs.

Never add real resumes, application records, private links, personal dashboards, or private-progress files to Git.

## Related practice system

Technical interview practice is separate. Use [DataScienceSprintCoach](https://github.com/limorgu/DataScienceSprintCoach) for SQL, Python, ML, and other interview training.
