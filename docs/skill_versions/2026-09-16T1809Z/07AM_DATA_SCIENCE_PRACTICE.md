# 07:00 AM Data Science Practice — Current Version

## Purpose

Use the morning for focused technical preparation only. The routine should build interview-ready Data Science skill through guided acquisition, realistic hands-on work, gradual reduction of scaffolding, explicit model/data-flow understanding, and evidence-based readiness tracking.

## Schedule

- Weekdays at **07:00 America/Los_Angeles**.
- Target daily load: **3–4 hours maximum**.
- Do not mix job-search administration into the morning routine.

## Required learning design

### 1. Scaffold genuinely new topics

For the first few exposures to a new topic:

- show the correct sequence of work;
- explain why each step comes before the next;
- provide enough code structure to demonstrate a strong workflow;
- fade hints only after repeated successful practice;
- reserve unseen/interview-style work for after acquisition.

### 2. Teach model data flow whenever a new model/model family appears

Explicitly walk through:

`raw dataframe -> selected X/y -> preprocessing -> transformed matrix -> model fit/internal representation -> predict/predict_proba/transform -> threshold/decision if applicable -> validation metrics`

Use small before/after examples and explain shape changes. Clarify what `.fit()`, `.predict()`, `.predict_proba()`, and `.transform()` return when applicable.

### 3. Maintain a model-specific learning document

For each genuinely new model family, create/update a concise model-specific learning document containing:

- end-to-end data flow;
- small before/after dataframe example;
- preprocessing and shape changes;
- what `.fit()` learns;
- model outputs;
- how validation metrics consume those outputs;
- 3–6 “remember this” rules;
- one compact flow diagram.

The daily email should link to the current version of that model guide through the private working storage.

## Mandatory daily email sections

Every 07:00 email should contain:

- canonical practice-plan reference;
- practice-log reference;
- mindfulness/practice reference;
- Readiness Dashboard;
- ML Coverage Dashboard;
- VS Code / Python environment block;
- Today’s Fundamental Concept;
- Quick Video section (only if worthwhile);
- dataset/source section;
- exact 3–4 hour hands-on plan;
- embedded planning/interpretation prompts;
- SQL/Pandas maintenance when due;
- End-of-Day Evidence prompt;
- `Concrete learning from today` with 4–8 practical takeaways;
- final private-GitHub save block with exact commands.

## Environment contract

Use one stable local workspace and environment. The routine should always remind the learner to verify the active interpreter before practice and avoid stale/archived environments.

Key rule: do not create unnecessary extra environments or kernels when the existing practice environment is healthy.

## Readiness tracking

### Readiness Dashboard

Track evidence-based status for:

- SQL;
- Python fundamentals;
- Pandas;
- Statistics / experimentation;
- ML fundamentals;
- Model evaluation;
- Unsupervised ML;
- LLM / AI evaluation;
- Mixed DS interview readiness.

Use labels such as `Covered`, `In progress`, `Missing`, or similarly explicit evidence-based states. Do not invent scores.

### ML Coverage Dashboard

Track:

- business problem types;
- data / label setup;
- model families;
- evaluation / validation;
- generalization / failure modes;
- DS reasoning habits;
- difficulty progression.

Use states such as `Not covered`, `Introduced`, `Hands-on`, `Independently tested`.

## Practice design

Prefer practical exercises over standalone verbal interview questions during learning. For a new modeling topic, use a sequence such as:

1. inspect data;
2. define target and prediction time;
3. identify leakage;
4. split data;
5. build a naive baseline;
6. preprocess;
7. fit model;
8. validate;
9. compare alternatives;
10. interpret errors and business meaning.

## SQL + Pandas maintenance

Do not let SQL/Pandas disappear during the ML sprint.

Target 15–30 minutes total on 2–4 weekdays per week, with at least one SQL item and one Pandas item each week.

Preferred SQL rotation:

- aggregation grain;
- GROUP BY completeness;
- LEFT JOIN denominator preservation;
- CASE;
- dates/cohorts;
- LAG/LEAD;
- window functions;
- Top-N within group;
- retention / activation logic.

Preferred Pandas rotation:

- filtering;
- groupby/agg;
- merge;
- missing values;
- sort/rank;
- transform;
- row -> user -> segment aggregation;
- date/cohort logic.

## Private GitHub save rule

At the end of the email, include copy-paste commands customized to the day’s practice folder when known. Default safe pattern:

```bash
cd /Users/limorkissos/Documents/IntreviewPractice
git status
git add <today's-practice-folder-or-files>
git status
git commit -m "<meaningful practice checkpoint>"
git push
```

Do not recommend `git add .` by default. Do not commit `.venv`, secrets, `.env`, key files, caches, or local-only configuration.

## End-of-day evidence

Ask for:

- what was completed independently;
- where help was used;
- mistakes / blockers;
- concepts learned;
- exact continuation point;
- readiness changes;
- ML coverage dimensions advanced.

Update the practice log from actual evidence only.

## Current sprint progression

The intended sequence is:

1. binary classification + framing + train/validation/test + baseline + logistic regression;
2. preprocessing pipelines + missing/categorical data + leakage + cross-validation;
3. tree models + random forest/boosting intuition + overfitting/generalization;
4. imbalance + precision/recall/F1 + ROC-AUC/PR-AUC + threshold/cost + error analysis;
5. independent classification transfer + short SQL/Pandas maintenance;
6. regression + MAE/RMSE + residual/error analysis;
7. clustering/segmentation;
8. PCA/dimensionality reduction;
9. ranking/recommendation OR anomaly detection OR time-aware prediction, whichever closes gaps;
10. unseen interview-style ML test.

## Recovery rule

If this routine must be rebuilt, restore the separation: **07:00 = technical skill acquisition and readiness tracking only; no resume/job-search work here.**
