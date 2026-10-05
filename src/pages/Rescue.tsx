import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { usePageMeta } from '../meta'
import { REVIEW_MAILTO } from '../site'

export default function Rescue() {
  usePageMeta({
    title: 'SaaS Production Rescue | ZUHAYR SYSTEMS',
    description:
      'Your SaaS looks running but is unreliable or stalled? ZUHAYR SYSTEMS rescues fragile production systems with read-only-first diagnosis and minimal reversible fixes — proven on our own infrastructure.',
    path: '/saas-production-rescue',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="rescue-title">
          <div className="container">
            <p className="eyebrow">CAPABILITY FAMILY 1</p>
            <h1 id="rescue-title">SaaS production rescue</h1>
            <p className="lede">
              For existing systems that are unstable, degraded, or stalled —
              where teams are afraid to touch anything. We establish the
              actual failure state first, then make the smallest reversible
              change that fixes it.
            </p>
            <div className="actions">
              <a className="btn" href={REVIEW_MAILTO}>
                Start a Production Reliability Review
              </a>
              <Link className="btn-ghost" to="/proof/production-rescue">
                See the proof
              </Link>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="rescue-signs">
          <div className="container">
            <p className="eyebrow">SYMPTOMS WE RESCUE</p>
            <h2 id="rescue-signs">Failures we recognize</h2>
            <ul className="checklist symptoms" aria-label="Rescue symptoms">
              <li>Containers report running while the system is inert.</li>
              <li>Workers or processes stuck in crash loops.</li>
              <li>Migrations that fail or differ between environments.</li>
              <li>Readiness probes correctly reporting not-ready.</li>
              <li>Recurring incidents with an unclear root cause.</li>
              <li>Deployments nobody dares to roll back.</li>
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="rescue-method">
          <div className="container">
            <p className="eyebrow">METHOD</p>
            <h2 id="rescue-method">Diagnose → change minimally → verify</h2>
            <ol className="chain" aria-label="Rescue method chain">
              <li>
                <strong>Diagnose read-only</strong>
                <span>Measure the live failure state before touching anything.</span>
              </li>
              <li>
                <strong>Find the smallest cause</strong>
                <span>Trace to the minimal confirmed root cause.</span>
              </li>
              <li>
                <strong>Change reversibly</strong>
                <span>Preserve pre-change state so rollback is one step away.</span>
              </li>
              <li>
                <strong>Verify independently</strong>
                <span>Prove recovery with checks separate from the fix itself.</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" aria-labelledby="rescue-proof">
          <div className="container">
            <p className="eyebrow">PROOF</p>
            <h2 id="rescue-proof">Proven once, end to end</h2>
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
            <div className="actions">
              <Link className="btn-ghost" to="/proof/production-rescue">
                Read the full rescue proof →
              </Link>
            </div>
            <Disclosure />
          </div>
        </section>

        <CtaBand
          title="Bring us the system that needs to keep working."
          note="Start with a bounded Review. If the findings justify deeper work, rescue follows — minimal, reversible, verified."
          mailto={REVIEW_MAILTO}
          buttonLabel="Start a Production Reliability Review"
        />
      </main>
      <SiteFooter />
    </>
  )
}
