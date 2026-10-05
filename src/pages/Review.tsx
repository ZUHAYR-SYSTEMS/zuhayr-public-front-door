import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { usePageMeta } from '../meta'
import { REVIEW_MAILTO } from '../site'

export default function Review() {
  usePageMeta({
    title: 'Production Reliability Review | ZUHAYR SYSTEMS',
    description:
      'Start with a bounded, read-only-first Production Reliability Review: prioritized findings, root-cause map, remediation plan, and residual-risk record for your fragile production system.',
    path: '/production-reliability-review',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="review-title">
          <div className="container">
            <p className="eyebrow">ENTRY ENGAGEMENT</p>
            <h1 id="review-title">Production Reliability Review</h1>
            <p className="lede">
              A bounded first assessment for teams that suspect production
              fragility. We diagnose read-only, collect evidence, and tell you
              plainly what is wrong — before anyone talks about changing
              anything.
            </p>
            <div className="actions">
              <a className="btn" href={REVIEW_MAILTO}>
                Start a Production Reliability Review
              </a>
              <Link className="btn-ghost" to="/#problems">
                Check the signs first
              </Link>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="review-fit">
          <div className="container">
            <p className="eyebrow">WHEN IT FITS</p>
            <h2 id="review-fit">Start here when…</h2>
            <ul className="checklist symptoms" aria-label="When a review fits">
              <li>Production looks running, but something is clearly wrong.</li>
              <li>Incidents recur and the root cause stays unclear.</li>
              <li>Deployments feel risky and rollbacks are uncertain.</li>
              <li>
                Recovery or restore has never actually been proven to work.
              </li>
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="review-get">
          <div className="container">
            <p className="eyebrow">WHAT YOU GET</p>
            <h2 id="review-get">What the Review produces</h2>
            <div className="cards">
              <article className="card">
                <h3>Findings, prioritized</h3>
                <p>
                  What is actually failing, ordered by impact — measured
                  read-only on your system, not guessed from descriptions.
                </p>
              </article>
              <article className="card">
                <h3>Root-cause map</h3>
                <p>
                  The smallest confirmed cause chain behind the failure state,
                  distinguishing proven causes from open questions.
                </p>
              </article>
              <article className="card">
                <h3>Remediation plan</h3>
                <p>
                  Minimal, reversible next steps with rollback preserved — a
                  plan you can execute with us or without us.
                </p>
              </article>
              <article className="card">
                <h3>Residual-risk record</h3>
                <p>
                  Known limitations and remaining risks, stated in writing —
                  including what the Review could not establish.
                </p>
              </article>
            </div>
            <p className="boundary tiers-note">
              The Review itself changes nothing on your system. Fixes happen
              only as separately agreed follow-up, when the findings justify
              them.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="review-proof">
          <div className="container narrow">
            <p className="eyebrow">WHY TRUST IT</p>
            <h2 id="review-proof">The method is already proven</h2>
            <p className="section-lede">
              This is the same read-only-first sequence behind our internal
              production rescue — 922 worker restarts traced to two missing
              configuration keys, fixed without touching code, and verified
              with an independent read-only check.
            </p>
            <div className="actions">
              <Link className="btn-ghost" to="/proof/production-rescue">
                Read the rescue proof ›
              </Link>
            </div>
            <Disclosure />
          </div>
        </section>

        <CtaBand
          title="Describe your system. We take it from there."
          note="Tell us what you run, what is failing, and how urgent it is. Your email opens with prompts so you do not forget anything."
          mailto={REVIEW_MAILTO}
          buttonLabel="Start a Production Reliability Review"
        />
      </main>
      <SiteFooter />
    </>
  )
}
