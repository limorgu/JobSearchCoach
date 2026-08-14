# JobSearchCoach System Blueprint

## Product goal

Build a continuous AI coach that helps a user run a job search the way a strong human coach would:

- understand fit and constraints;
- find relevant jobs;
- choose the next best task;
- adapt the daily plan to available time and energy;
- focus practice on the highest-impact gap;
- learn from recordings, transcripts, and review notes after practice;
- learn from prior submissions, interviews, and completions;
- optionally learn from approved networking assets such as LinkedIn profile or network exports;
- keep the routine sustainable.

## Core modules

### 1. Progressive onboarding

Collect only the next useful inputs:

- target roles and exclusions;
- location and work-model constraints;
- demonstrated market-fit signals;
- interview and technical-readiness needs;
- daily schedule and concentration windows;
- optional habits to anchor the plan, such as movement, meditation, or meals;
- connector permissions and delivery preferences.

### 2. Evidence and market-fit engine

Use evidence in this order:

1. prior interviews and recruiter interest;
2. repeated responsibilities and outcomes;
3. domain credibility;
4. transferable strengths;
5. aspirational directions.

Fit scoring should produce:

- `Apply`, `Consider`, or `Skip`;
- strongest evidence of fit;
- central required gap, if any;
- closest truthful resume basis;
- next-best readiness exercise.

### 3. Routine planner

Generate a realistic daily plan that includes:

- priority job-search tasks;
- targeted practice;
- optional anchored habits such as exercise or meditation when requested;
- one primary focus block instead of too many goals.

Each task should include:

- time or duration;
- one action;
- why now;
- definition of done;
- necessary files or links.

The plan should be updated from the newest evidence rather than repeating yesterday's plan by default.

### 4. Practice selector

Choose the next practice mode from:

- interview narrative;
- behavioral interview;
- SQL drill;
- Python drill;
- case or product thinking;
- domain reading;
- resume positioning.

Selection rule:

- urgent interview beats generic skill building;
- repeated role requirements beat isolated preferences;
- fluency gaps beat new content when the interview is near.

### 5. Recording and review learner

Use approved practice recordings, transcripts, or review notes to identify:

- repeated hesitation points;
- unclear explanations or weak stories;
- technical fluency gaps;
- visible progress since the last review;
- whether the next day's plan should be reprioritized.

This learning loop is one of the core engines of the system, not an optional add-on.

### 6. Connector-aware progress tracker

Approved data sources may include:

- curated Drive folder for resumes, job descriptions, or submission logs;
- historical submissions folder;
- Gmail threads used to track applications or daily check-ins;
- optional calendar availability for scheduling new blocks only.

The tracker should infer only approved signals:

- submitted application;
- interview invitation;
- rejection;
- follow-up needed;
- completed practice;
- unfinished task carried forward.

The tracker should work together with the recording-and-review learner so the next plan reflects both what was done and what was learned.

### 7. Network recommender

Use approved LinkedIn or other professional-network sources to recommend who to contact next when networking is relevant.

Inputs may include:

- LinkedIn profile URL or exported profile summary;
- LinkedIn connections export or approved screenshot/text summary;
- prior outreach log;
- target company list;
- role-family priorities.

For each recommended contact, produce:

- verified name;
- current company and role if known;
- relationship strength or path;
- why this person matters now;
- suggested route: insight, intro, recruiter contact, informational chat, or referral;
- a short message draft if the user asks for one.

Never send outreach automatically.

This module is secondary to the main learning loop built from practice, submissions, recordings, and next-day reprioritization.

### 8. Friday science brief

Every Friday, produce one short brief from an approved reading list or approved source set.

Selection should be based on:

- target role family;
- immediate career direction;
- current readiness gaps;
- user preference for format or depth.

Output shape:

- title and link;
- why it matters now;
- 3 to 5 bullet takeaways;
- one concrete way to use it in interviews, applications, or thinking.

## Suggested data model

### User profile

- target role families
- preferred industries or missions
- hard exclusions
- work arrangement constraints
- demonstrated strengths
- prior interview-producing applications
- practice preferences
- available time windows
- optional routine anchors
- approved connectors
- approved networking sources
- approved practice-review sources

### Opportunity record

- role title
- company
- link
- date seen
- fit status
- evidence summary
- required gap
- resume basis
- next practice recommendation

### Daily status

- date
- planned tasks
- completed tasks
- unfinished tasks
- applications sent
- interviews scheduled
- practiced competency
- freeform user notes
- recording-derived gap summary
- next-day reprioritization reason
- outreach targets suggested
- outreach attempted

## Customer-centered product rule

The system should optimize for what the customer cares about, not what is easiest to automate.

That means:

- if the user values reducing overwhelm, the system should narrow choices;
- if the user values high-fit roles, the system should avoid filler matches;
- if the user values routine stability, the plan should protect that;
- if the user values skill growth, practice should be explicit and measurable;
- if the user values privacy, manual input must remain a first-class path.

## Release requirements

The system is not ready unless it can:

- onboard a new user without a giant intake form;
- produce a believable daily plan;
- distinguish market-fit issues from practice issues;
- operate with or without connectors;
- explain what it reads and why;
- avoid unauthorized external actions.
