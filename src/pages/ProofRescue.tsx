import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { usePageMeta } from '../meta'
import { REVIEW_MAILTO } from '../site'

export default function ProofRescue() {
  usePageMeta({
    title: 'Proof: Production System Rescue | ZUHAYR SYSTEMS',
    description:
      'How ZUHAYR rescued a containerized production system from inert to operational: 922 to 0 restarts, 0 to 28 tables, config-only fix, independent verification — internal reference, no client data.',
    path: '/proof/production-rescue',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="pr-title">
          <div className="container">
            <p className="eyebrow">PROOF / PRODUCTION RESCUE</p>
            <h1 id="pr-title">From inert to operational</h1>
            <p className="lede">
              One controlled internal rescue, verified end to end. This proof
              comes from our own internal production infrastructure — not from
              a client engagement, and no client data is involved.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="pr-story">
          <div className="container">
            <p className="eyebrow">THE RESCUE</p>
            <h2 id="pr-story">What happened, step by step</h2>
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
                <strong>922 to 0</strong>
                <span>worker restarts</span>
              </li>
              <li>
                <strong>0 to 28</strong>
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
                <caption>Before / after the rescue, same system</caption>
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
            <ul className="trust-strip" aria-label="Why this proof is credible">
              <li>Diagnosed read-only before any change</li>
              <li>Failed attempts preserved in the record</li>
              <li>Independent read-only verifier passed</li>
              <li>Complete hashed evidence chain handed over</li>
            </ul>
            <Disclosure />
          </div>
        </section>

        <section className="section" aria-labelledby="pr-more">
          <div className="container narrow">
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2 id="pr-more">The recovery half of the story</h2>
            <p className="section-lede">
              The same rescue produced the recovery evidence: isolated restore
              rehearsals, integrity discipline, and off-node durability — each
              proven, each bounded.
            </p>
            <div className="actions">
              <Link className="btn-ghost" to="/proof/recovery-resilience">
                Read the recovery proof ›
              </Link>
              <Link className="btn-ghost" to="/saas-production-rescue">
                Production rescue capability ›
              </Link>
            </div>
          </div>
        </section>

        <CtaBand
          title="Suspect the same kind of fragility?"
          note="A bounded Review establishes your actual failure state — read-only first, findings in writing."
          mailto={REVIEW_MAILTO}
          buttonLabel="Start a Production Reliability Review"
        />
      </main>
      <SiteFooter />
    </>
  )
}
