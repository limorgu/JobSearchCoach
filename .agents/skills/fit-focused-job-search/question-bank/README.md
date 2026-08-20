# Training Question Bank

This folder is owned by the interview-training leaf.

## Folders

- `covered/` — verified historical practice evidence.
- `future/` — planned practice questions that have not yet been completed.
- `session-state.yaml` — durable continuation state.
- `schema-registry.md` — dataset isolation rules and sanitized schemas.

## Rules

- Once a question is presented, keep its number stable.
- Never renumber a continuation back to Q1.
- Do not call a prompt “covered” unless there is evidence it was attempted.
- If only the stopping number is known, preserve the number and label the prompt missing.
- A future question becomes covered only after it is attempted.
- Keep solutions separate from questions when possible.
