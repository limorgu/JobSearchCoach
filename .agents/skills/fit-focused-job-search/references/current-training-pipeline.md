# Current training pipeline

This reference stores the coach's current interview-training operating state. Keep it current when the user materially changes priorities, practice sources, progression rules, or evidence thresholds. Do not treat ordinary one-off questions as a reason to rewrite the pipeline.

## Current objective

Primary goal: improve technical interview readiness for general Data Scientist and adjacent AI/evaluation roles, with Amazon-style L5 DS expectations as a useful difficulty benchmark.

The training system should emphasize conversion readiness over broad study. Practice should be tied to skills that recur across strong target roles and to weaknesses observed in recent practice.

## Core practice areas

Maintain balanced coverage across:

1. SQL coding
2. Python and pandas
3. statistics and experimentation
4. classic ML and model evaluation
5. data-science / AI system design
6. behavioral and role-specific communication

AI-system practice should also include end-to-end lifecycle reasoning, evaluation, debugging, monitoring, safety/privacy, retrieval/tool failure analysis, and cost-latency-quality tradeoffs when relevant to target roles.

## Priority order

Use this default order unless an imminent interview changes it:

1. SQL fluency
2. Python/pandas fluency
3. statistics, experimentation, and model evaluation
4. ML fundamentals and model-selection tradeoffs
5. DS/AI system design and diagnostic reasoning
6. behavioral/STAR communication and role-specific cases
7. portfolio or project hardening only when it improves interview evidence

## SQL practice rules

SQL is the daily anchor during an intensive interview-prep period.

Preferred format:

- one timed query, usually 15-20 minutes;
- draft without autocomplete or heavy IDE assistance first when practical;
- validate afterward in SQLite or another lightweight environment;
- use realistic schemas rather than toy single-table exercises;
- include follow-up variants after the first solution to test transfer.

Target patterns include:

- joins and anti-joins;
- aggregation and conditional aggregation;
- cohort retention;
- top-N per group;
- running metrics;
- multi-step metric definitions;
- CTEs;
- window functions;
- ranking and tie-breaking;
- session/user/model-level metric construction.

Preferred supplemental sources, in order when fresh questions are needed:

1. DataLemur
2. StrataScratch
3. LeetCode SQL medium/hard
4. Interview Query or equivalent Amazon-style sets

Adapt external questions into realistic retail, marketplace, trust-and-safety, support, AI-quality, or product schemas when useful.

## Python / pandas practice rules

Prioritize practical data manipulation and interview fluency:

- filtering and boolean logic;
- groupby and aggregation;
- merge/join;
- missing-data handling;
- metric calculations;
- sorting and ranking;
- string/list/dict manipulation;
- arrays, hash maps, two-pointers, and basic sliding-window patterns;
- modular functions and readable code;
- basic time/space explanation when the task is algorithmic.

Use realistic messy datasets and require the learner to explain what each operation is doing.

## Statistics / experimentation / ML

Practice complete reasoning chains, not isolated trivia:

- hypothesis and decision framing;
- primary metrics and guardrails;
- sample-size / power reasoning at an interview-appropriate level;
- confounding and bias;
- precision, recall, FPR/FNR, PR-AUC and class imbalance;
- threshold selection;
- offline vs online evaluation;
- distribution shift;
- model selection tradeoffs under business constraints;
- experiment pitfalls and interpretation.

## AI-system diagnostic practice

Use failure scenarios that require tracing evidence through the whole system. Examples:

- retrieval contains the correct evidence but the final answer is wrong;
- offline evaluation improves while user completion declines;
- one language or subgroup has materially worse false-negative performance;
- a tool-using agent fails after an external API/tool error;
- a model improves one quality dimension while safety or latency regresses.

The expected response should identify competing hypotheses, evidence that distinguishes them, the next test, the proposed change, and a regression check.

## Communication practice

Use 45-75 second answers for short technical or experience questions unless a longer format is explicitly requested.

Preferred structure:

1. direct answer;
2. one concrete example or decision;
3. evidence/result;
4. tie-back to the role or question.

Behavioral practice should map a small set of quantified stories across multiple leadership/behavior dimensions rather than creating a new story for every prompt.

## Evidence levels

Track demonstrated skill using evidence levels rather than covered/not-covered labels:

- can explain;
- can analyze or debug;
- completes with coaching;
- completes independently;
- transfers the skill to a new variant;
- has used it in real work;
- can defend tradeoffs under interview conditions.

A skill should not be marked mastered after one successful attempt.

## Progress thresholds

Use an evidence-first progression model:

- one isolated result = event, not trend;
- two comparable observations = early signal;
- three or more comparable observations = trend may be reported;
- mastery requires repeated independent performance plus transfer to a new problem;
- coached completion does not count as independent mastery;
- improved confidence or clarity should be reported only across comparable sessions, not from a single impression.

When a dashboard or review summarizes progress, lead with exactly one meaningful multi-session change. Explicitly state what is not yet a story.

## Current observed refresh needs

Recent practice indicates that fundamentals can be understood conceptually but execution fluency may lag, especially when recalling pandas/groupby syntax or reconstructing metric calculations without scaffolding. Treat this as a fluency gap first unless repeated evidence shows a deeper knowledge gap.

The coach should therefore favor short recall-and-apply exercises, then a transfer variant, rather than long explanations.

## Session workflow

For each practice session:

1. select one high-value competency;
2. present one question without the solution;
3. wait for the attempt;
4. give the smallest useful hint if requested;
5. inspect both correctness and reasoning;
6. provide one focused correction;
7. ask a transfer variant when useful;
8. update the evidence level and next-practice recommendation.

Avoid giving several solutions in advance. The user may explicitly ask to skip a calculation or move to the next question; honor that and preserve momentum.

## Keeping this file fresh

Update this reference when any of the following materially changes:

- target role family or interview bar;
- priority order across SQL/Python/stats/ML/design/behavioral;
- new durable practice source;
- repeated weakness or demonstrated mastery across several sessions;
- evidence/mastery thresholds;
- practice cadence or mode rules.

Do not store private transcript contents, personal email addresses, sensitive personal data, or private Drive/Gmail identifiers in this public repository. Private sources may be referenced generically as approved evidence sources and read at runtime when authorized.