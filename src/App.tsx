import { useState } from 'react'

const MAILTO =
  'mailto:admin@zuhayrsystems.com?subject=Production%20Reliability%20Review'

const NAV = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#proof', label: 'Proof' },
  { href: '#how-we-work', label: 'How We Work' },
]

function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="ZUHAYR SYSTEMS — back to top">
          <span className="brand-mark" aria-hidden="true">
            Z
          </span>
          <span className="brand-word">
            ZUHAYR&nbsp;SYSTEMS
          </span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="menu-icon">
            <i />
            <i />
            <i />
          </span>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-nav"
          className={open ? 'site-nav open' : 'site-nav'}
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">ZUHAYR SYSTEMS</p>
          <p className="footer-note">
            Engineering brand of PT ZUHAYR SYSTEM TEKNOLOGI
            <br />
            Indonesia
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-heading">Focus</p>
          <ul className="footer-list">
            <li>Production Reliability</li>
            <li>Recovery &amp; Resilience</li>
            <li>Integration &amp; Reconciliation</li>
            <li>Governed Automation</li>
          </ul>
        </nav>
        <div>
          <p className="footer-heading">Contact</p>
          <p className="footer-note">
            <a href={MAILTO}>admin@zuhayrsystems.com</a>
          </p>
          <p className="footer-note small">
            &copy; 2026 PT ZUHAYR SYSTEM TEKNOLOGI
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container">
            <p className="eyebrow">ZUHAYR SYSTEMS / PRODUCTION ENGINEERING</p>
            <h1 id="hero-title">
              Production systems
              <br />
              that can prove they work.
            </h1>
            <p className="lede">
              We help teams rescue fragile production systems, recover safely
              from failure, and keep critical business state correct — with
              evidence left behind.
            </p>
            <div className="actions">
              <a className="btn" href="#contact">
                Start a Production Reliability Review
              </a>
              <a className="btn-ghost" href="#capabilities">
                Explore capabilities
              </a>
            </div>
            <p
              className="system-line"
              aria-label="ZUHAYR engineering lifecycle: build, break, recover, prove"
            >
              <span>BUILD</span>
              <b aria-hidden="true">→</b>
              <span>BREAK</span>
              <b aria-hidden="true">→</b>
              <span>RECOVER</span>
              <b aria-hidden="true">→</b>
              <span>PROVE</span>
            </p>
          </div>
        </section>

        <section
          id="capabilities"
          className="section"
          aria-labelledby="capabilities-title"
        >
          <div className="container">
            <p className="eyebrow">01 — CAPABILITIES</p>
            <h2 id="capabilities-title">What we can help with</h2>
            <p className="section-lede">
              Four problems we solve for teams running real systems.
            </p>
            <div className="cards">
              <article className="card">
                <p className="card-num" aria-hidden="true">01</p>
                <h3>Production System Rescue &amp; Reliability</h3>
                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      Your system looks running but is unreliable or fragile.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>A system that holds up under real production load.</dd>
                  </div>
                  <div>
                    <dt>Method</dt>
                    <dd>
                      Read-only diagnosis, smallest root cause, minimal
                      reversible change, verified recovery.
                    </dd>
                  </div>
                </dl>
              </article>
              <article className="card">
                <p className="card-num" aria-hidden="true">02</p>
                <h3>Recovery &amp; Resilience Assurance</h3>
                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      You have backups but nobody knows if they will restore.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      Recovery you have rehearsed, not recovery you assume.
                    </dd>
                  </div>
                  <div>
                    <dt>Method</dt>
                    <dd>
                      Controlled isolated restore exercises with integrity
                      checks, reconciliation, and evidence.
                    </dd>
                  </div>
                </dl>
                <p className="boundary">
                  Current recovery proof is controlled internal lab / governed
                  recovery witness work — not client production recovery
                  evidence.
                </p>
              </article>
              <article className="card">
                <p className="card-num" aria-hidden="true">03</p>
                <h3>Enterprise / API Integration &amp; Reconciliation</h3>
                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      Retries, webhooks, and partial failures duplicate, lose,
                      or disagree about work.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>Authoritative records that stay correct.</dd>
                  </div>
                  <div>
                    <dt>Method</dt>
                    <dd>
                      Safe retries, idempotent processing, and explicit failure
                      handling so records reconcile.
                    </dd>
                  </div>
                </dl>
                <p className="boundary">
                  Method description for integration engagements — not claimed
                  as a C0-4 production-rescue outcome.
                </p>
              </article>
              <article className="card">
                <p className="card-num" aria-hidden="true">04</p>
                <h3>Governed Automation</h3>
                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      You want automation that helps without running out of
                      control.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>Automation with clear limits and observable results.</dd>
                  </div>
                  <div>
                    <dt>Method</dt>
                    <dd>
                      Bounded execution with approval and authority limits,
                      defined failure states, and evidence.
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section id="proof" className="section" aria-labelledby="proof-title">
          <div className="container">
            <p className="eyebrow">02 — PROOF</p>
            <h2 id="proof-title">What a rescue looks like in practice</h2>
            <p className="section-lede">
              One controlled internal rescue, verified end to end — summarized
              for buyers, with the evidence boundary stated plainly. This proof
              comes from our own internal production infrastructure — not from
              a client engagement, and no client data is involved.
            </p>
            <div className="proof-steps">
              <article>
                <h3>Problem</h3>
                <p>
                  A containerized production system appeared healthy — every
                  container reported “running” — yet was completely inert: the
                  schema had never been initialized, no tables existed, the
                  worker was in a crash loop with 922 restarts, and the
                  readiness probe correctly reported “not ready.”
                </p>
              </article>
              <article>
                <h3>Root cause</h3>
                <p>
                  Two missing database-connection keys in a single environment
                  file. The migration runner fell back to an unreachable
                  loopback default — schema, image, migration, and topology
                  were all correct; the two keys were the entire incident.
                </p>
              </article>
              <article>
                <h3>Intervention</h3>
                <p>
                  Configuration-only fix: the two keys were added, with the
                  prior file preserved first for one-command rollback. No code,
                  image, or migration script was touched; read-only
                  reachability was proven before the real migration ran.
                </p>
              </article>
              <article>
                <h3>Verified outcome</h3>
                <p>
                  Migration applied cleanly on the first attempt; worker
                  restarts went from 922 to zero; least-privilege verified at
                  the database level; and an independent read-only verifier
                  passed. A hash-verified backup was restored into a fully
                  isolated database — the first attempt failed visibly on
                  missing cluster roles, the second matched the live structure
                  exactly after canonical credential-free role bootstrap —
                  then the isolated target was destroyed with production
                  verified unchanged.
                </p>
              </article>
            </div>
            <ul className="facts" aria-label="Key verified facts">
              <li>
                <strong>922 → 0</strong>
                <span>worker restarts</span>
              </li>
              <li>
                <strong>0 → 28</strong>
                <span>public tables</span>
              </li>
              <li>
                <strong>2</strong>
                <span>missing config keys</span>
              </li>
              <li>
                <strong>0</strong>
                <span>code changes</span>
              </li>
            </ul>
            <div
              className="table-scroll"
              role="region"
              aria-label="Before and after recovery results"
              tabIndex={0}
            >
              <table>
                <caption>
                  Before / after the rescue, same system
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Dimension</th>
                    <th scope="col">Before</th>
                    <th scope="col">After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Schema</th>
                    <td>Never initialized</td>
                    <td>Revision pinned, applied clean first attempt</td>
                  </tr>
                  <tr>
                    <th scope="row">Public tables</th>
                    <td>0</td>
                    <td>28, queue outbox present</td>
                  </tr>
                  <tr>
                    <th scope="row">Worker</th>
                    <td>Crash loop, 922 restarts</td>
                    <td>Running, 0 restarts, clean error scan</td>
                  </tr>
                  <tr>
                    <th scope="row">Health probe</th>
                    <td>Not ready</td>
                    <td>Ready for owned components</td>
                  </tr>
                  <tr>
                    <th scope="row">Privileges</th>
                    <td>Unverified</td>
                    <td>Least-privilege roles, forced row-level security</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section
          id="how-we-work"
          className="section"
          aria-labelledby="how-title"
        >
          <div className="container">
            <p className="eyebrow">03 — HOW WE WORK</p>
            <h2 id="how-title">Safer production change, from start to finish</h2>
            <p className="section-lede">
              The same disciplined sequence on every engagement.
            </p>
            <ol className="stages">
              <li>
                <p className="stage-num" aria-hidden="true">01</p>
                <h3>Diagnose</h3>
                <p>Read-only first. Establish the actual failure state.</p>
              </li>
              <li>
                <p className="stage-num" aria-hidden="true">02</p>
                <h3>Change safely</h3>
                <p>
                  Minimal, reversible intervention. Pre-change state preserved
                  for rollback.
                </p>
              </li>
              <li>
                <p className="stage-num" aria-hidden="true">03</p>
                <h3>Recover &amp; reconcile</h3>
                <p>
                  Prove recovery and authoritative state in isolation rather
                  than assuming it.
                </p>
              </li>
              <li>
                <p className="stage-num" aria-hidden="true">04</p>
                <h3>Leave evidence</h3>
                <p>
                  Verification, monitoring, and a hashed evidence chain for
                  handoff.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container">
            <p className="eyebrow">04 — ENGAGEMENT</p>
            <h2 id="contact-title">
              Bring us the system that needs to keep working.
            </h2>
            <div className="engage">
              <div>
                <h3>Production Reliability Review</h3>
                <p>
                  For teams with an existing system that is fragile, degraded,
                  difficult to recover, or inconsistent across integrations.
                </p>
                <ul className="checklist">
                  <li>We start read-only and identify the actual failure.</li>
                  <li>No speculative change before diagnosis.</li>
                  <li>
                    Deeper access only by agreement, if the findings justify
                    it.
                  </li>
                </ul>
                <p className="boundary">
                  Public proof currently includes controlled internal
                  production/lab evidence — not client engagement evidence. No
                  client data is involved. (CL-18)
                </p>
              </div>
              <div className="engage-cta">
                <a className="btn btn-large" href={MAILTO}>
                  Email ZUHAYR SYSTEMS
                </a>
                <p className="engage-mail">admin@zuhayrsystems.com</p>
                <p className="engage-note">
                  Subject: Production Reliability Review
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
