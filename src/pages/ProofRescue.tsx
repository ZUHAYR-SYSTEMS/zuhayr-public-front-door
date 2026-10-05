import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { EvidenceObject } from '../components/evidence'
import { PRODUCTION_RESCUE_EVIDENCE } from '../evidence'
import { usePageMeta } from '../meta'
import { REVIEW_MAILTO } from '../site'

function Step({
  num,
  id,
  title,
  children,
}: {
  num: string
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="narrative-step" aria-labelledby={id}>
      <p className="narrative-num" aria-hidden="true">
        {num}
      </p>
      <div>
        <h3 id={id}>{title}</h3>
        {children}
      </div>
    </section>
  )
}

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

        <div className="container">
          <div className="narrative">
            <Step num="01" id="pr-situation" title="The situation">
              <p>
                A containerized production system appeared healthy — every
                container reported “running” — yet was completely inert: the
                schema had never been initialized, no tables existed, and the
                worker was in a crash loop with 922 restarts.
              </p>
            </Step>
            <Step num="02" id="pr-mattered" title="Why it mattered">
              <p>
                The process layer was alive while the persistence layer did
                not exist. The readiness probe correctly reported “not
                ready”: the system could not do its job, and every restart
                burned time without changing anything.
              </p>
            </Step>
            <Step num="03" id="pr-diagnosis" title="Diagnosis">
              <p>
                Two missing database-connection keys in a single environment
                file. The migration runner fell back to an unreachable
                loopback default — schema, image, migration, and topology
                were all correct; the two keys were the entire incident.
              </p>
              <details className="disclose">
                <summary>How the diagnosis was established</summary>
                <div className="disclose-body">
                  <p>
                    The live system was measured read-only before any change:
                    zero tables, no queue outbox, and a repeatedly restarting
                    worker. Each layer — schema, image, migration, topology —
                    was eliminated in turn until only the two missing keys
                    remained.
                  </p>
                </div>
              </details>
            </Step>
            <Step num="04" id="pr-intervention" title="Minimum intervention">
              <p>
                Configuration-only fix: the two keys were added, with the
                prior file preserved first for one-command rollback.
              </p>
              <details className="disclose">
                <summary>What changed — and what did not</summary>
                <div className="disclose-body">
                  <p>
                    Changed: two connection keys in one environment file.
                    Untouched: code, container images, and migration scripts.
                    Read-only reachability was proven before the real
                    migration ran, and permissions were re-verified after the
                    edit with no secret value entering any log.
                  </p>
                </div>
              </details>
            </Step>
            <Step num="05" id="pr-verification" title="Verification">
              <p>
                The migration applied cleanly on the first attempt; worker
                restarts went from 922 to zero; least-privilege was verified
                at the database level; and an independent read-only verifier
                passed against the recovered system.
              </p>
            </Step>
            <Step num="06" id="pr-rehearsal" title="Recovery rehearsal">
              <p>
                A hash-verified backup was restored into a brand-new, fully
                isolated database — then the isolated target was destroyed
                with production verified unchanged.
              </p>
              <details className="disclose">
                <summary>How the rehearsal ran</summary>
                <div className="disclose-body">
                  <p>
                    The first attempt failed visibly on missing cluster roles
                    and stays in the record. The second attempt, after
                    credential-free role bootstrap, matched the live structure
                    exactly.
                  </p>
                </div>
              </details>
            </Step>
            <Step num="07" id="pr-learning" title="Failure learning">
              <p>
                Nothing was sanitized out of this story: the failed first
                migration guard, the failed first restore attempt, and a
                monitoring check that falsely flagged a hardened firewall on
                day one are all preserved and classified — each one made the
                final verification stronger, not weaker.
              </p>
            </Step>
            <Step num="08" id="pr-outcome" title="Verified outcome">
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
            </Step>
            <Step num="09" id="pr-limits" title="Limitations">
              <p>
                This is one internal system — not a client outcome, not a
                scale claim, and not disaster recovery with guaranteed times.
                Overall readiness honestly stayed not-ready for intentionally
                absent future components throughout.
              </p>
            </Step>
            <Step num="10" id="pr-provenance" title="Provenance / maturity">
              <EvidenceObject evidence={PRODUCTION_RESCUE_EVIDENCE} />
            </Step>
            <Step num="11" id="pr-next" title="Next action">
              <p>
                Suspect the same kind of fragility? A bounded Review
                establishes your actual failure state — read-only first,
                findings in writing.
              </p>
              <div className="actions">
                <Link className="btn-ghost" to="/proof/recovery-resilience">
                  Read the recovery proof ›
                </Link>
                <Link className="btn-ghost" to="/saas-production-rescue">
                  Production rescue capability ›
                </Link>
              </div>
              <Disclosure />
            </Step>
          </div>
        </div>

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
