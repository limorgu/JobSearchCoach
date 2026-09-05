# Private continuity protocol

Use this reference when a private agent should learn across recurring job-search runs without publishing personal history.

## Separation of responsibilities

The public skill defines the method. Private agent state defines what is true for one user now.

Never store private source locations, personal document links, application history, search history, or current user state in this public repository.

## Read → decide → write

For every recurring run:

1. **Read current state** from the private continuity store supplied to the agent.
2. **Read recent relevant history** only for the workflow being run.
3. **Decide** using the public skill plus that private evidence.
4. **Write one outcome record** after the run.
5. **Refresh the compact current-state record** for the next run.

If no private continuity store is available, proceed without inventing prior state and clearly avoid claims about what happened before.

## Daily job-search continuity

Before surfacing roles, compare candidates against recent private search history.

Use a stable posting ID or canonical URL when available, plus semantic comparison of company, role, team, location/work mode, and core responsibilities.

Suppress a previously surfaced role unless at least one meaningful change exists, such as:
- a new posting ID for a materially different opening;
- a different team or scope;
- a changed location/work arrangement;
- a materially changed fit signal;
- a previously closed/uncertain role becoming actionable.

After the run, record the roles surfaced, fit/decision, key reason, and any later outcome when known.

## Job-search coach continuity

Before setting career priorities, read the latest private outcomes from applications, recruiter activity, interviews, coaching, readiness work, and prior recommendations.

Use outcomes to update:
- role-family priority;
- positioning strategy;
- readiness gaps;
- networking priorities;
- application cadence;
- next best action.

Do not treat one rejection, silence, or one strong response as conclusive evidence by itself. Prefer repeated patterns and explicit outcomes.

## Current state vs history

Keep **current state** compact: current focus, next action, blockers/gaps, and a short evidence summary.

Keep **history** chronological and append-only where practical. One meaningful run should produce one concise history record rather than rewriting the past.

## Privacy contract

The private agent may know how to locate its state store through private configuration. This public skill must never contain that identifier or path.
