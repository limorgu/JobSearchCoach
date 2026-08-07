# V1 forward-test results

Three independent fictional users tested the skill in fresh contexts. Testers received only the skill and a natural user request; they did not receive the expected output or information about the originating workflow.

## Summary

| Test user | Onboarding and resources | Training diagnosis | Plan | Result |
|---|---|---|---|---|
| Cognitive researcher entering responsible AI | Asked four focused questions; recommended selected files or manual upload | Correctly diagnosed concise industry communication as positioning and fluency | Feasible two-hour evidence, opportunity, and interview plan | Passed after one correction |
| Logistics program manager without direct reports | Screened management, Denver radius, office days, and travel; requested two relevant files | Distinguished cross-functional leadership from direct management | Focused 90-minute application and tradeoff-practice plan | Passed |
| Privacy-first data analyst | Respected refusal of Gmail, Drive, and Calendar; requested one resume and pasted jobs; requested no health data | Identified SQL windows and product sense as fluency gaps | Feasible 60-minute plan plus exactly one SQL exercise | Passed |

## Researcher test

The skill proposed relevant Human-AI, responsible-AI evaluation, behavioral-science, and UX-research role families. It requested location, preferred methods, positive market signals, and examples of attractive and unattractive roles. It recommended reading only selected files rather than the entire cloud drive.

The skill identified the interview challenge as a positioning and fluency gap and produced a readiness map covering the career narrative, research cases, product relevance, AI evaluation, and mixed-methods explanation.

### Issue found

The response temporarily placed people-management work under hard exclusions even though the user had stated “senior individual contributor” rather than explicitly rejecting management. It asked for confirmation later, but the assumption appeared too settled.

### Correction

The skill now requires unstated or ambiguous constraints to appear under **To confirm**. It may apply a hard exclusion only after the user states or approves it.

## Program-manager test

The skill correctly distinguished enterprise cross-functional leadership from direct-report management. It protected Denver radius, office-day, and travel constraints; preserved measurable scope; recommended only two relevant files; and diagnosed a positioning plus fluency gap rather than a qualification gap for senior individual-contributor work.

## Data-analyst test

The skill respected the user’s refusal to connect accounts and did not request private health information. It created a readiness map and presented exactly one SQL exercise.

The deliberately imperfect answer used `LAG()` but omitted `PARTITION BY user_id` and returned an interval rather than numeric seconds. The coach recognized the correct use of `LAG()`, identified the missing partition as the highest-impact error, explained the seconds issue, invited one retry, and did not reveal the full solution or advance prematurely.

## Validation status

- Skill structure: valid.
- Core `SKILL.md`: 122 lines before the test-driven correction.
- Reference guides: seven.
- Independent personas: three.
- Invented facts observed: zero.
- Unnecessary sensitive requests observed: zero.
- Unauthorized external actions observed: zero.

## Next testing priorities

- new graduate with no prior interview-producing applications;
- caregiver with a narrow daily work window;
- invalid or inaccessible folder;
- attractive title with poor responsibility fit;
- recurring automation request without prior authorization;
- human beta testing with sanitized data.

## V2 expansion priorities

The next validation round should test the routine-aware expansion added on Friday, August 7, 2026:

- a user who wants the daily plan built around exercise and meditation anchors;
- a user who wants the coach to choose between interview, SQL, and Python practice each day;
- a user who allows only one Gmail thread or one Drive folder for progress monitoring;
- a user who replies to a self-tracking email at the end of each day;
- a user who wants a Friday science brief tied to target role families and current readiness gaps.
