export default function App() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">ZUHAYR SYSTEMS / ENGINEERING</p>

        <h1>
          Systems that can
          <br />
          prove they work.
        </h1>

        <p className="lede">
          We rescue fragile production systems, build reliable automation
          and integrations, and make failure recoverable and verifiable.
        </p>

        <div className="actions">
          <a href="#capabilities">Explore capabilities</a>
          <a href="#contact" className="secondary">Start a conversation</a>
        </div>

        <div className="system-line" aria-label="ZUHAYR engineering lifecycle">
          <span>BUILD</span>
          <b>?</b>
          <span>BREAK</span>
          <b>?</b>
          <span>RECOVER</span>
          <b>?</b>
          <span>PROVE</span>
        </div>
      </section>

      <section id="capabilities" className="placeholder">
        <p className="eyebrow">CAPABILITY SURFACE / G0</p>
        <h2>Built for the part after software meets reality.</h2>
      </section>

      <section id="contact" className="placeholder">
        <p className="eyebrow">ENGAGE</p>
        <h2>Bring us the system that needs to keep working.</h2>
      </section>
    </main>
  )
}
