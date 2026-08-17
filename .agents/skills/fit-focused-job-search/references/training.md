# Readiness and training

## Diagnose the gap

Classify each gap before assigning practice:

- **Positioning gap:** experience exists but is communicated unclearly.
- **Fluency gap:** knowledge exists but recall or execution is slow under pressure.
- **Knowledge gap:** a learnable concept or method is missing.
- **Qualification gap:** the role requires substantial experience that cannot be created through short preparation.

Use interview practice for positioning, drills for fluency, focused learning for knowledge, and role exclusion or transparent risk labeling for qualification gaps.

## Readiness map

Maintain a compact table with:

- competency;
- importance to current targets;
- evidence;
- current readiness;
- next exercise;
- reassessment signal.

Track evidence level separately from topic exposure:

1. can explain;
2. can analyze or debug;
3. completed with guidance;
4. completed independently;
5. transferred to a new problem;
6. can defend trade-offs under interview conditions.

Prioritize skills appearing across several strong roles or in an imminent interview.

## Current intensive interview pipeline

For a Data Scientist / applied-AI interview sprint, default to five practice days per week and roughly three focused hours per day when the user has that capacity. Keep the curriculum balanced across six surfaces:

1. SQL coding;
2. Python and pandas coding;
3. statistics and experimentation;
4. classic ML, model evaluation, and AI fundamentals;
5. data-science / AI-system design and diagnostic cases;
6. behavioral communication and role-specific mocks.

SQL is the daily anchor when technical fluency is the main bottleneck. Do not let AI/LLM familiarity substitute for core DS fluency.

### SQL progression

Practice timed 15–20 minute queries, ideally drafted without autocomplete before validation. Prefer realistic marketplace, support, trust-and-safety, evaluation, or product schemas. Progress through:

- joins, aggregation, CASE, dates, and metric definitions;
- anti-joins and multi-table reasoning;
- CTE decomposition;
- cohort/retention and multi-step metrics;
- top-N per group;
- window functions, running metrics, and ranking;
- transfer questions with changed schemas or definitions.

When fresh external questions are needed, prefer this source order: DataLemur, StrataScratch, LeetCode SQL medium/hard, then Interview Query or comparable Amazon-style sets. Never copy paid/proprietary question banks into the repository; store links and adaptation rules instead.

### Python / pandas progression

Keep both data manipulation and basic coding active:

- filtering, Boolean columns, groupby, aggregation, sorting;
- merge/join, missing data, cleaning, apply/transform, window-style operations;
- metric calculation and debugging on realistic messy data;
- arrays, strings, hash maps, counters, loops, two-pointers, and basic sliding windows;
- clean modular code plus time/space explanation when relevant.

Do not mark a pandas pattern as learned after one coached solution. Re-test it later without the scaffold and then on a changed dataset.

### Stats / experimentation / ML

Practice complete reasoning chains rather than isolated definitions:

- hypothesis -> primary metric -> guardrails -> sample size/power considerations -> analysis -> pitfalls;
- precision, recall, false-positive/false-negative trade-offs, class imbalance, PR-AUC, thresholds;
- sampling and weighting, distribution shift, subgroup analysis, labeling drift;
- model-selection and evaluation trade-offs under business constraints;
- launch, canary, monitoring, regression, and rollback reasoning.

### AI-system diagnostic practice

Use end-to-end scenarios that require tracing failures across data, retrieval, prompts/models, tools, policy/rubric, UX, and monitoring. Practice cost-latency-quality trade-offs, RAG/evaluation, privacy/security, production evaluation, and debugging. Prefer one accumulating project or case over many disconnected toy exercises when evidence-building is useful.

### Communication and mocks

Practice concise 45–75 second technical explanations using: direct answer -> concrete example/evidence -> result or trade-off -> tie-back. Also run timed SQL/coding/stats mocks and behavioral/leadership-principle style mocks. Recordings or transcripts may be reviewed only from explicitly approved private sources and must never be committed to a public repository.

## Practice modes

- **Coach:** provide hints and scaffolding.
- **Interview:** ask realistic questions without assistance until the answer is complete.
- **Drill:** give short repeated technical exercises.
- **Review:** critique a completed answer or solution.

Ask which mode the user wants. Allow a one-question-at-a-time preference.

## Practice loop

1. State the competency and why it matters.
2. Present one exercise.
3. Wait for the user's attempt.
4. Identify the highest-impact strength and correction.
5. Explain the correction briefly.
6. Invite one retry when useful.
7. Record the readiness update.
8. Schedule a transfer/retest when the evidence is still weak.
9. Stop or ask before advancing.

Do not bury the user in commentary. Do not provide the answer before the attempt unless requested.

If practice is reviewed later through a recording, transcript, or coaching note, use that review to update the next day's training priority.

## Progress evidence and mastery

Do not confuse activity with progress.

- One observation is a **new event**, not a trend.
- Two comparable observations may be an **early signal**, explicitly provisional.
- Three or more comparable sessions are required before describing a directional trend.
- Mastery requires repeated independent performance plus transfer to a materially changed problem.
- A coached solution, exposure, or one correct answer is not mastery.
- When confidence, clarity, accuracy, speed, or error rate is reported, preserve the same measurement definition across sessions before comparing.

The weekly dashboard should lead with exactly one meaningful multi-session change when one exists. If no valid trend exists, say what is not yet a story rather than manufacturing progress bars, arrows, or percentages.

## Technical drills

Use small realistic schemas, data, or code contexts. Define completion precisely, for example: solve two independently and correct one after feedback.

When selecting the next practice topic, use this order:

1. an upcoming interview requirement;
2. the strongest gap revealed by the latest reviewed practice or recording;
3. the most common gap across current high-fit roles;
4. the weakest high-importance readiness item;
5. the user's requested development area when it does not conflict with the first four.

## Interview practice

Cover the actual interview surface:

- career narrative and transition;
- behavioral and stakeholder questions;
- failure and learning;
- technical explanations;
- case or system design;
- questions grounded in the submitted resume and job description.

Preserve consistency with the application. Never coach the user to claim work they did not do.

## Resource recommendations

Recommend only resources that solve the next gap. State the exact section, exercise, or time range when possible. Practice in chat should remain the default when it can accomplish the goal directly.

For synthetic practice assets, keep datasets reproducible, document the schema and expected skill, and make the next question discoverable by topic and difficulty. Keep private transcripts, personal application data, and other sensitive progress evidence outside the public repository.
