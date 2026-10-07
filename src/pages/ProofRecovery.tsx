import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { EvidenceObject } from '../components/evidence'
import { RECOVERY_RESILIENCE_EVIDENCE, APPLICATION_BUSINESS_RECOVERY_EVIDENCE } from '../evidence'
import { usePageMeta } from '../meta'
import { RECOVERY_MAILTO } from '../site'

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

export default function ProofRecovery() {
  usePageMeta({
    title: 'Proof: Recovery & Resilience | ZUHAYR SYSTEMS',
    description:
      'How ZUHAYR proved recoverability: hash-verified backups, isolated restore rehearsed twice with the failure kept, off-node durability with read-back — internal reference, no client data.',
    path: '/proof/recovery-resilience',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="prr-title">
          <div className="container">
            <p className="eyebrow">PROOF / RECOVERY &amp; RESILIENCE</p>
            <h1 id="prr-title">Recoverability, proven — not assumed</h1>
            <p className="lede">
              Every claim below was practiced on our own internal production
              infrastructure — not on a client system, with no client data
              involved. Failed attempts are part of the proof, not hidden
              from it.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="narrative">
            <Step num="01" id="prr-situation" title="The situation">
              <p>
                A rescued system is only half the story until its recovery is
                proven too. Backups existed — but nobody had shown that a
                restore would actually work, or that recovery material could
                survive outside the failing system.
              </p>
            </Step>
            <Step num="02" id="prr-integrity" title="Backup with integrity">
              <p>
                Fresh backups were created, and each was hash-verified,
                integrity-checked, and scanned for leaked secrets before it
                counted as evidence.
              </p>
            </Step>
            <Step num="03" id="prr-rehearsal" title="Recovery rehearsal">
              <p>
                A backup was restored into a brand-new isolated target with
                no network access — then the isolated target was destroyed
                and production verified unchanged.
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
            <Step num="04" id="prr-offnode" title="Off-node durability">
              <p>
                A sanitized recovery runbook was placed in independent private
                storage, with a verified upload, an independent read-back,
                and an exact hash match.
              </p>
            </Step>
            <Step num="05" id="prr-business-state" title="Application & business state verification">
              <p>
                Recovery goes beyond infrastructure availability: a Customer #0
                controlled benchmark demonstrated item-level reconciliation of
                admitted business work before and after recovery — 30 admitted,
                30 reconciled, 0 unresolved, 0 lost.
              </p>
              <details className="disclose">
                <summary>What this actually proves</summary>
                <div className="disclose-body">
                  <p>
                    A disposable local target with 30 admitted items experienced
                    controlled failure, recovery, and item-level reconciliation.
                    The zero result is measured by sensitivity controls, not
                    asserted. This is not client-proven, not production-proven,
                    and no guarantee is implied.
                  </p>
                </div>
              </details>
            </Step>
            <Step num="06" id="prr-failclosed" title="Fail-closed behavior">
              <p>
                With no destination configured, the exporter provably sent
                nothing and kept the local snapshot instead of failing
                silently. Monitoring deployed on the system caught its own
                defect on day one — and was fixed with stronger checks, not
                weaker ones.
              </p>
            </Step>
            <Step num="07" id="prr-learning" title="Failure learning">
              <p>
                The failed first restore attempt, the exporter that had
                nowhere to send, and the monitoring check that cried wolf are
                all preserved in the record. Each visible failure is what
                makes the passing runs believable.
              </p>
            </Step>
            <Step num="08" id="prr-outcome" title="Verified outcome">
              <ol
                className="chain chain-compact"
                aria-label="Proven recovery steps"
              >
                <li>
                  <strong>Backup with integrity</strong>
                  <span>Hash-verified, integrity-checked, secret-scanned.</span>
                </li>
                <li>
                  <strong>Isolated restore, rehearsed twice</strong>
                  <span>First attempt failed visibly and stays recorded.</span>
                </li>
                <li>
                  <strong>Exact structural match</strong>
                  <span>Second attempt matched; target destroyed after.</span>
                </li>
                <li>
                  <strong>Off-node durability</strong>
                  <span>Upload, independent read-back, exact hash match.</span>
                </li>
                <li>
                  <strong>Application & business state verification</strong>
                  <span>Customer #0 benchmark: 30 admitted, 30 reconciled, 0 unresolved, 0 lost.</span>
                </li>
                <li>
                  <strong>Fail-closed behavior</strong>
                  <span>Sent nothing; kept the snapshot.</span>
                </li>
                <li>
                  <strong>Observed operations</strong>
                  <span>Monitoring deployed, observed, self-corrected.</span>
                </li>
              </ol>
            </Step>
            <Step num="09" id="prr-limits" title="Limitations">
              <p>
                This is not disaster recovery with guaranteed times, not
                replication, not multi-region failover, and not a client
                outcome. Overall readiness honestly reported “not ready” for
                intentionally absent future components throughout.
              </p>
            </Step>
            <Step num="10" id="prr-provenance" title="Provenance / maturity">
              <EvidenceObject evidence={RECOVERY_RESILIENCE_EVIDENCE} />
              <EvidenceObject evidence={APPLICATION_BUSINESS_RECOVERY_EVIDENCE} />
            </Step>
            <Step num="11" id="prr-next" title="Next action">
              <p>
                Measure your recovery against this standard: a Recovery
                Readiness Review checks your backup path, rehearses where it
                counts, and reports gaps honestly.
              </p>
              <div className="actions">
                <Link className="btn-ghost" to="/recovery-resilience">
                  Recovery &amp; resilience capability ›
                </Link>
                <Link className="btn-ghost" to="/backup-restore-recovery">
                  Check your own backups ›
                </Link>
              </div>
              <Disclosure />
            </Step>
          </div>
        </div>

        <CtaBand
          title="Measure your recovery against this standard."
          note="A Recovery Readiness Review checks your backup path, rehearses where it counts, and reports gaps honestly."
          mailto={RECOVERY_MAILTO}
          buttonLabel="Start a Recovery Readiness Review"
        />
      </main>
      <SiteFooter />
    </>
  )
}
