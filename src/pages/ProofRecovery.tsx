import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { usePageMeta } from '../meta'
import { RECOVERY_MAILTO } from '../site'

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

        <section className="section" aria-labelledby="prr-chain">
          <div className="container">
            <p className="eyebrow">WHAT WAS PROVEN</p>
            <h2 id="prr-chain">The recovery record</h2>
            <ol className="chain chain-flow" aria-label="Proven recovery steps">
              <li>
                <strong>Backup with integrity</strong>
                <span>
                  Fresh backups created; each hash-verified, integrity-checked,
                  and scanned for leaked secrets before counting as evidence.
                </span>
              </li>
              <li>
                <strong>Isolated restore, rehearsed twice</strong>
                <span>
                  Restored into a brand-new isolated target with no network
                  access. The first attempt failed visibly on missing cluster
                  roles and stays in the record.
                </span>
              </li>
              <li>
                <strong>Exact structural match</strong>
                <span>
                  The second attempt, after credential-free role bootstrap,
                  matched the live structure exactly — then the isolated
                  target was destroyed and production verified unchanged.
                </span>
              </li>
              <li>
                <strong>Off-node durability</strong>
                <span>
                  A sanitized recovery runbook placed in independent private
                  storage, with verified upload, independent read-back, and an
                  exact hash match.
                </span>
              </li>
              <li>
                <strong>Fail-closed behavior</strong>
                <span>
                  With no destination configured, the exporter provably sent
                  nothing and kept the local snapshot instead of failing
                  silently.
                </span>
              </li>
              <li>
                <strong>Observed operations</strong>
                <span>
                  Scheduled monitoring deployed and observed succeeding,
                  including a monitoring defect the system caught in itself on
                  day one — fixed with stronger checks, not weaker ones.
                </span>
              </li>
            </ol>
            <Disclosure />
          </div>
        </section>

        <section className="section" aria-labelledby="prr-limits">
          <div className="container narrow">
            <p className="eyebrow">BOUNDARIES OF THIS PROOF</p>
            <h2 id="prr-limits">What this proof is not</h2>
            <p className="section-lede">
              This is not disaster recovery with guaranteed times, not
              replication, not multi-region failover, and not a client
              outcome. Overall readiness honestly reported “not ready” for
              intentionally absent future components throughout. The proof
              shows a disciplined recovery practice — the same practice your
              assessment would be measured against.
            </p>
            <div className="actions">
              <Link className="btn-ghost" to="/recovery-resilience">
                Recovery &amp; resilience capability →
              </Link>
              <Link className="btn-ghost" to="/backup-restore-recovery">
                Check your own backups →
              </Link>
            </div>
          </div>
        </section>

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
