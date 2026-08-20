# JobSearchCoach System Blueprint

## Product goal

Build a continuous job-search pipeline that improves decisions from real outcomes. The system learns from fit evidence, explicit constraints, opportunity results, and completion feedback to adapt what happens next.

The parent coach owns job-search work. It only links to the separate Data Science Training Sprint leaf; it does not own training content, questions, or progress state.

## Parent pipeline

### 1. Progressive onboarding

Collect only the next useful inputs:

- target roles and exclusions;
- location and work-model constraints;
- demonstrated market-fit signals;
- daily schedule and concentration windows;
- optional routine anchors;
- approved resources, connectors, and delivery preferences.

### 2. Evidence and market-fit engine

Evaluate a role against evidence in this order:

1. prior interviews and recruiter interest;
2. repeated responsibilities and outcomes;
3. domain credibility;
4. transferable strengths;
5. aspirational directions.

Return `Apply`, `Consider`, or `Skip`, plus the strongest evidence, central required gap, closest truthful resume basis, and the next job-search action.

### 3. Opportunity pipeline

For every strong match:

- verify availability, location, work arrangement, and core requirements;
- apply hard exclusions before scoring;
- select the closest truthful resume;
- recommend concise factual adaptations;
- identify an appropriate networking route when approved;
- decide whether the role changes the next day's priorities.

### 4. Execution planner

Create a feasible plan with priority applications, referrals, recruiter requests, networking actions, and evidence-building work. Each task has a time or duration, one action, a reason, and a definition of done.

### 5. Outcome and adaptation loop

Record only approved signals such as applied, interview invited, rejected, completed, unfinished, or no longer interested. Reprioritize the next plan from the newest outcome and constraint rather than repeating yesterday's plan.

### 6. Connector-aware progress tracking

Use only approved Drive folders, Gmail threads, submission logs, or manual notes. Reading a source never authorizes sending, editing, applying, or calendar changes.

### 7. Network recommender

Use approved professional-network sources to recommend appropriate contacts and routes. Draft by default; send only with explicit authorization.

## Separate Data Science Sprint link

The job-search pipeline links to the separate Data Science Training Sprint leaf without incorporating its procedures, questions, state, or results.

See [the Data Science Training Sprint child](.agents/skills/fit-focused-job-search/training/data-science-sprint/).

## Suggested data model

### User profile

- target role families;
- preferred industries or missions;
- hard exclusions;
- work arrangement constraints;
- demonstrated strengths;
- prior interview-producing applications;
- available time windows;
- optional routine anchors;
- approved resources and connectors;
- approved networking sources.

### Opportunity record

- role title;
- company;
- link;
- date seen;
- fit status;
- evidence summary;
- required gap;
- resume basis;
- next job-search action.

### Daily status

- date;
- planned tasks;
- completed tasks;
- unfinished tasks;
- applications sent;
- interviews scheduled;
- freeform user notes;
- next-day reprioritization reason;
- outreach targets suggested;
- outreach attempted.

## Product rules

- Optimize for continuous learning and adaptation, not application volume or keyword matching.
- Keep the job-search and data-science sprint pipelines separate.
- Preserve private data boundaries and require authorization for connected actions.
- Operate with manual input when connectors are unavailable or unwanted.
