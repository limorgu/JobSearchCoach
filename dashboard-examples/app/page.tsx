export default function Home() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">JobSearchCoach / public example</p>
        <h1>One focused routine.<br />A clearer job search.</h1>
        <p className="lede">A synthetic preview of the Job Search Coach daily pipeline. No personal results appear here.</p>
        <div className="privacy-note"><span>●</span> Demo data only — real dashboards stay private</div>
      </header>

      <section className="pipeline-grid" aria-label="Dashboard examples">
        <article className="panel job-panel">
          <div className="panel-header">
            <div><p className="label">PIPELINE 01</p><h2>Job Search Coach</h2></div>
            <span className="status">Active</span>
          </div>
          <p className="panel-copy">Turns fit evidence into a focused, sustainable search plan with a 7am plan and 5pm check-in.</p>
          <div className="metrics">
            <div><strong>8</strong><span>screened roles</span></div>
            <div><strong>3</strong><span>strong-fit roles</span></div>
            <div><strong>2</strong><span>next actions</span></div>
          </div>
          <div className="focus-card"><p className="label">THIS WEEK</p><strong>Prioritize two analyst roles with verified location and scope fit.</strong><small>5pm check-in: record outcomes and carry only important work into tomorrow.</small></div>
          <ul className="checklist"><li><i>✓</i> Fit profile confirmed</li><li><i>✓</i> Resume evidence selected</li><li><i>→</i> Follow up on two high-value applications</li></ul>
        </article>

      </section>

      <footer><span>Public example dashboard</span><span>Private results are local-only and excluded from GitHub.</span></footer>
    </main>
  );
}
