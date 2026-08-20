export default function Home() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">JobSearchCoach / public example</p>
        <h1>Two connected coaches.<br />Two clear pipelines.</h1>
        <p className="lede">A synthetic preview of the Job Search Coach and the Data Science Training Sprint. No personal results appear here.</p>
        <div className="privacy-note"><span>●</span> Demo data only — real dashboards stay private</div>
      </header>

      <section className="pipeline-grid" aria-label="Dashboard examples">
        <article className="panel job-panel">
          <div className="panel-header">
            <div><p className="label">PIPELINE 01</p><h2>Job Search Coach</h2></div>
            <span className="status">Active</span>
          </div>
          <p className="panel-copy">Turns fit evidence into a focused, sustainable search plan. It only receives a compact readiness signal from the training leaf.</p>
          <div className="metrics">
            <div><strong>8</strong><span>screened roles</span></div>
            <div><strong>3</strong><span>strong-fit roles</span></div>
            <div><strong>2</strong><span>next actions</span></div>
          </div>
          <div className="focus-card"><p className="label">THIS WEEK</p><strong>Prioritize two analyst roles with verified location and scope fit.</strong><small>Training signal: SQL continuity recommended before the next technical screen.</small></div>
          <ul className="checklist"><li><i>✓</i> Fit profile confirmed</li><li><i>✓</i> Resume evidence selected</li><li><i>→</i> Follow up on two high-value applications</li></ul>
        </article>

        <article className="panel training-panel">
          <div className="panel-header">
            <div><p className="label">PIPELINE 02</p><h2>Data Science Sprint</h2></div>
            <span className="status violet">Week 1</span>
          </div>
          <p className="panel-copy">Keeps one-question-at-a-time practice, evidence, schemas, and future prompts separate from the job-search workflow.</p>
          <div className="sprint"><span>W1</span><span className="active">W2</span><span>W3</span><span>W4</span></div>
          <div className="question-card"><p className="label">NEXT QUESTION</p><strong>SQL Q50 · First session after signup</strong><small>LEFT JOIN · NULL handling · date transformation</small></div>
          <div className="topics">
            <span className="selected">SQL</span><span>Python</span><span>ML</span><span>Stats</span><span>LLM</span><span>Design</span><span>Case</span>
          </div>
          <div className="progress-row"><span>Public sprint plan</span><div className="track"><b /></div><strong>25%</strong></div>
        </article>
      </section>

      <section className="connection">
        <div><p className="label">THE HANDOFF</p><h2>Fit need → focused practice → readiness signal</h2></div>
        <p>The parent coach never stores practice answers. The sprint coach never searches jobs. They connect only through a compact, privacy-aware handoff.</p>
      </section>

      <footer><span>Public example dashboard</span><span>Private results are local-only and excluded from GitHub.</span></footer>
    </main>
  );
}
