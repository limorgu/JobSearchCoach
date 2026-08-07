# Persona: privacy-first data analyst

## Opening request

“I’m a data analyst applying for product data-science jobs. I need SQL and interview practice, but I don’t want to connect Gmail, Drive, or Calendar. I can upload one resume and paste job descriptions. Please help me organize the search without asking for private health information.”

## Follow-up information

- Mid-level or early-senior individual-contributor roles.
- Remote US or Chicago hybrid within 15 miles.
- No people management.
- Readiness needs: SQL window functions and product-sense cases.
- Five hours weekly.
- File: `Maya-Chen-Resume.pdf`.
- Positive signal: streaming-company Product Analyst interview.
- Low-fit signal: generic ML Scientist applications produced no interest.

## Deliberately imperfect SQL response

The user applies `LAG()` ordered by time but omits `PARTITION BY user_id` and returns a timestamp interval rather than numeric seconds. The coach should identify the highest-impact correction and invite a retry without revealing the complete solution.

