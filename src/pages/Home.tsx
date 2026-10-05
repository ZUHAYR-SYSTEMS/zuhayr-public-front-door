import { Link } from 'react-router-dom'
import { SiteFooter, SiteHeader } from '../components/layout'
import { EvidenceObject } from '../components/evidence'
import { ProblemPaths } from '../components/journey'
import { PUBLIC_EVIDENCE } from '../evidence'
import { LifecycleViz, Signature } from '../components/lifecycle'
import { usePageMeta } from '../meta'
import { REVIEW_MAILTO } from '../site'

export default function Home() {
  usePageMeta({
    title: 'ZUHAYR SYSTEMS | Production Reliability & Recovery Engineering',
    description:
      'ZUHAYR SYSTEMS helps teams rescue fragile production systems, verify recovery, integrate critical systems safely, and build governed automation with evidence.',
    path: '/',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">ZUHAYR SYSTEMS / PRODUCTION ENGINEERING</p>
              <h1 id="hero-title">
                Production systems
                <br />
                that can prove
                <br />
                they work.
              </h1>
              <p className="hero-sub">
                When production becomes fragile, ZUHAYR finds the smallest
                safe path back to an operable system — then proves the
                recovery actually works.
              </p>
              <div className="actions">
                <Link className="btn" to="/production-reliability-review">
                  Discuss a production problem
                </Link>
                <a className="btn-ghost" href="#how-we-work">
                  Explore how we work
                </a>
              </div>
            </div>
            <LifecycleViz />
          </div>
          <div className="container hero-signature">
            <Signature />
          </div>
        </section>

        <section id="problems" className="section" aria-labelledby="problems-title">
          <div className="container">
            <p className="eyebrow">01 — WHAT'S GOING WRONG?</p>
            <h2 id="problems-title">Find your problem. See the starting point.</h2>
            <p className="section-lede">
              Seven familiar situations. Open yours to see a truthful first
              step — a routing choice, not a diagnosis.
            </p>
            <ProblemPaths />
          </div>
        </section>

        <section
          id="capabilities"
          className="section"
          aria-labelledby="capabilities-title"
        >
          <div className="container">
            <p className="eyebrow">02 — CAPABILITIES</p>
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
                <p className="card-link">
                  <Link to="/saas-production-rescue">
                    Production rescue capability ›
                  </Link>
                </p>
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
                <p className="card-link">
                  <Link to="/recovery-resilience">
                    Recovery &amp; resilience capability ›
                  </Link>
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

        <section id="flagship" className="section" aria-labelledby="flagship-title">
          <div className="container narrow">
            <p className="eyebrow">03 — FLAGSHIP CAPABILITY</p>
            <h2 id="flagship-title">
              Production System Rescue &amp; Reliability
            </h2>
            <p className="section-lede">
              Taking an existing SaaS from fragile to operable: we find the
              smallest safe path back, then prove the recovery actually works.
            </p>
            <details className="disclose">
              <summary>How the rescue works, briefly</summary>
              <div className="disclose-body">
                <p>
                  <strong>Situation:</strong> your system runs but cannot do
                  its job — inert schema, crash-looping workers, misleading
                  green dashboards.
                </p>
                <p>
                  <strong>Philosophy:</strong> diagnose read-only first, fix
                  the smallest confirmed cause, keep every step reversible,
                  and verify with checks independent of the fix.
                </p>
                <p>
                  <strong>Outcome:</strong> an operable system plus a written
                  record — findings, verification evidence, and residual risks
                  stated plainly.
                </p>
              </div>
            </details>
            <div className="actions">
              <Link className="btn-ghost" to="/saas-production-rescue">
                Production rescue capability ›
              </Link>
              <Link className="btn-ghost" to="/proof/production-rescue">
                Read the rescue proof ›
              </Link>
            </div>
          </div>
        </section>

        <section id="method" className="section" aria-labelledby="method-title">
          <div className="container">
            <p className="eyebrow">04 — METHOD</p>
            <h2 id="method-title">The rescue sequence</h2>
            <ol className="chain chain-compact" aria-label="Rescue method">
              <li>
                <strong>Observe</strong>
                <span>Read-only first. Establish the actual failure state.</span>
              </li>
              <li>
                <strong>Isolate</strong>
                <span>Find the authoritative failure — the smallest confirmed cause.</span>
              </li>
              <li>
                <strong>Recover</strong>
                <span>Use the minimum reversible intervention, rollback preserved.</span>
              </li>
              <li>
                <strong>Prove</strong>
                <span>Verify recovery independently and preserve the evidence.</span>
              </li>
            </ol>
            <p className="boundary tiers-note">
              Observe / Isolate / Recover / Prove is the rescue method used on
              an engagement. BUILD / BREAK / RECOVER / PROVE remains the
              broader ZUHAYR engineering signature.
            </p>
          </div>
        </section>

        <section id="evidence" className="section" aria-labelledby="evidence-title">
          <div className="container">
            <p className="eyebrow">05 — EVIDENCE</p>
            <h2 id="evidence-title">Before, then verified</h2>
            <p className="section-lede">
              One internal rescue, measured before and after. Full detail
              lives on the proof pages — these are the headline facts.
            </p>
            <div className="evidence-grid">
              {PUBLIC_EVIDENCE.map((item) => (
                <EvidenceObject key={item.id} evidence={item} />
              ))}
            </div>
            <div className="actions">
              <Link className="btn-ghost" to="/proof/production-rescue">
                Read the full rescue proof ›
              </Link>
              <Link className="btn-ghost" to="/proof/recovery-resilience">
                Read the recovery proof ›
              </Link>
            </div>
          </div>
        </section>

        <section id="trust" className="section" aria-labelledby="trust-title">
          <div className="container">
            <p className="eyebrow">06 — WHY IT'S SAFER</p>
            <h2 id="trust-title">A method that refuses to gamble</h2>
            <ul className="trust-strip trust-grid" aria-label="Why the method is safer">
              <li>Read-only first — understand before changing</li>
              <li>Minimum intervention — change the smallest authoritative thing</li>
              <li>Reversible — know the path back</li>
              <li>Fail closed — ambiguity never becomes success</li>
              <li>Evidence preserved — recovery can be independently reviewed</li>
              <li>Claims bounded — internal proof remains internal proof</li>
            </ul>
          </div>
        </section>

        <section
          id="engagements"
          className="section"
          aria-labelledby="engagements-title"
        >
          <div className="container">
            <p className="eyebrow">07 — ENGAGEMENTS</p>
            <h2 id="engagements-title">What we can start with</h2>
            <p className="section-lede">
              Every engagement starts with the Review. Deeper work happens
              only when the findings justify it — and only by agreement.
            </p>
            <div className="cards tiers">
              <article className="card">
                <p className="card-num" aria-hidden="true">01</p>
                <h3>Production Reliability Review</h3>
                <p className="tier-scope">
                  Read-only-first diagnosis and evidence collection on your
                  existing system. No speculative change before diagnosis.
                </p>
                <p className="mini-label">You receive</p>
                <ul className="checklist tier-list">
                  <li>Prioritized findings</li>
                  <li>Failure and root-cause map</li>
                  <li>Remediation plan</li>
                  <li>Residual-risk and known-limitations record</li>
                </ul>
                <p className="card-link">
                  <Link to="/production-reliability-review">
                    About the Review ›
                  </Link>
                </p>
              </article>
              <article className="card">
                <p className="card-num" aria-hidden="true">02</p>
                <h3>Rescue / Stabilization</h3>
                <p className="tier-scope">
                  Bounded remediation once Review findings justify change:
                  minimal, reversible intervention with rollback preserved.
                </p>
                <p className="mini-label">You receive</p>
                <ul className="checklist tier-list">
                  <li>Implemented fixes, separately agreed</li>
                  <li>Verification evidence for each fix</li>
                  <li>Updated residual-risk record</li>
                </ul>
              </article>
              <article className="card">
                <p className="card-num" aria-hidden="true">03</p>
                <h3>Recovery Verification</h3>
                <p className="tier-scope">
                  Backup, restore, and recovery validation where applicable —
                  proven in isolation rather than assumed.
                </p>
                <p className="mini-label">You receive</p>
                <ul className="checklist tier-list">
                  <li>Recovery and rehearsal findings</li>
                  <li>Restore evidence summary</li>
                  <li>Handoff and runbook notes where relevant</li>
                </ul>
                <p className="boundary">
                  Recovery methods reflect our internal reference practice —
                  not client production recovery evidence.
                </p>
              </article>
            </div>
            <p className="boundary tiers-note">
              Not every engagement includes every capability above. Scope is
              set from Review findings, and proof of our methods remains the
              internal production reference — not client evidence.
            </p>
          </div>
        </section>

        <section
          id="how-we-work"
          className="section"
          aria-labelledby="how-title"
        >
          <div className="container">
            <p className="eyebrow">08 — HOW WE WORK</p>
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
            <p className="eyebrow">09 — ENGAGEMENT</p>
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
                  <li>No production credentials needed to start talking.</li>
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
                <a className="btn btn-large" href={REVIEW_MAILTO}>
                  Email ZUHAYR SYSTEMS
                </a>
                <p className="engage-mail">admin@zuhayrsystems.com</p>
                <p className="engage-note">
                  Subject: Production Reliability Review
                </p>
                <p className="engage-note">
                  Your email opens with prompts for: what system you have,
                  what is failing, current urgency, stack and environment,
                  and the outcome you need.
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
