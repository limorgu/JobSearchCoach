# Privacy and data boundaries

JobSearchCoach is designed to work with the minimum information required for the user's requested outcome.

## Public repository contents

The public repository may contain:

- workflow instructions;
- fictional personas;
- sanitized examples;
- evaluation rubrics;
- generic templates.
- generic folder structures such as `daily-checkins/` or `meeting-recordings/`.

It must not contain:

- real resumes or application histories;
- real contact lists or email addresses;
- email or calendar contents;
- health information;
- credentials, tokens, or account identifiers;
- private folder links;
- private Drive folder IDs or URLs;
- private recording links or transcript links;
- personal automation configuration.
- real daily practice answers, scores, reflections, or interview-specific feedback.

## Public skill vs. private user setup

The published repository should describe how a user can set up their own private workflow without exposing that workflow publicly.

That means:

- publish the schema, not the real location;
- publish the permission rule, not the private account identifier;
- publish fictional examples, not personal operating data.

For example, it is appropriate to document folders like:

- `daily-checkins/`
- `job-materials/`
- `network-notes/`
- `meeting-recordings/`
- `meeting-notes/`

It is not appropriate to publish the actual Drive path, link, folder ID, or account-specific setup for any real user.

## Private practice records

Question-bank structure, synthetic schemas, genericized covered questions, and future questions may be public. Detailed daily training records must stay private.

Use the local `private-practice/` directory for the real session checkpoint, attempted answer, score, corrections, readiness signal, and next step. This directory is gitignored and must not be force-added or copied into a public issue, pull request, or documentation page.

Git ignore prevents commits; it does not control other backup, sync, or sharing services. Use a private repository or private storage that only you control if those records need to leave the local machine.

## User-controlled resource ladder

The skill should offer the least intrusive useful option:

1. pasted text;
2. selected uploads;
3. one explicitly approved folder;
4. broader connected sources only when the user requests the benefit they enable.

Before requesting a connection, explain what will be read, why it is useful, what output it enables, and the manual alternative.

## Separate permissions

Permission to read a resource does not authorize:

- editing the resource;
- sending outreach;
- changing a calendar;
- applying to a job;
- creating recurring work.

Each action requires the appropriate user authorization.

For Gmail and Drive specifically:

- permission to read one label, one thread, or one folder does not imply permission to read the full account;
- permission to monitor progress does not imply permission to reply, edit, send, or reorganize;
- a dedicated self-check-in thread is preferred over broad inbox monitoring when email is used for progress tracking.

## Sustainable-work preferences

Movement, meals, breaks, grounding, caregiving, and similar inputs are optional scheduling preferences. The skill should not request diagnoses, provide medical advice, or infer health conditions.

## Failure behavior

If access is denied or unavailable, the skill must state what it could not read, avoid inferring the contents, offer manual upload or pasted text, and continue with the remaining safe workflow.

## Outcomes

The skill does not guarantee interviews, offers, or employment. Recommendations should explain their evidence and uncertainty.
