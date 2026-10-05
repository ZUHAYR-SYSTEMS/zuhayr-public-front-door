import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { usePageMeta } from '../meta'
import { RECOVERY_MAILTO } from '../site'

export default function Recovery() {
  usePageMeta({
    title: 'Recovery & Resilience | ZUHAYR SYSTEMS',
    description:
      'A backup existing is not the same as recoverability being proven. ZUHAYR verifies recovery with isolated restore rehearsals, integrity checks, off-node durability, and evidence.',
    path: '/recovery-resilience',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="recovery-title">
          <div className="container">
            <p className="eyebrow">CAPABILITY FAMILY 2</p>
            <h1 id="recovery-title">Recovery &amp; resilience</h1>
            <p className="lede">
              A backup existing is not the same thing as recoverability being
              proven. We verify that your system can actually come back —
              with isolated rehearsals, integrity checks, and evidence you can
              inspect.
            </p>
            <div className="actions">
              <a className="btn" href={RECOVERY_MAILTO}>
                Start a Recovery Readiness Review
              </a>
              <Link className="btn-ghost" to="/proof/recovery-resilience">
                See the recovery proof
              </Link>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="recovery-chain">
          <div className="container">
            <p className="eyebrow">WHAT PROVEN RECOVERY LOOKS LIKE</p>
            <h2 id="recovery-chain">Six links. Every one verified.</h2>
            <ol className="chain chain-flow" aria-label="Recovery verification chain">
              <li>
                <strong>Backup</strong>
                <span>Fresh backups created and retained before anything else.</span>
              </li>
              <li>
                <strong>Integrity</strong>
                <span>Each backup hash-verified, integrity-checked, and scanned for leaked secrets.</span>
              </li>
              <li>
                <strong>Restore</strong>
                <span>Restored for real — not assumed from a successful backup job.</span>
              </li>
              <li>
                <strong>Fresh-target verification</strong>
                <span>Restored into a brand-new isolated target and matched against the live structure.</span>
              </li>
              <li>
                <strong>Off-node durability</strong>
                <span>Recovery material held in an independent location with verified read-back.</span>
              </li>
              <li>
                <strong>Recovery evidence</strong>
                <span>Every step checksummed — including the attempts that failed.</span>
              </li>
            </ol>
            <p className="boundary tiers-note">
              Each link above reflects practiced method from our internal
              production reference. Engagement scope is set from your Review
              findings — we do not promise recovery success before assessment.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="recovery-confidence">
          <div className="container">
            <p className="eyebrow">RECOVERY CONFIDENCE</p>
            <h2 id="recovery-confidence">Questions we answer</h2>
            <ul className="checklist symptoms" aria-label="Recovery questions">
              <li>Would your latest backup actually restore right now?</li>
              <li>Has any restore ever been rehearsed in isolation?</li>
              <li>Could you prove integrity of what was restored?</li>
              <li>Is recovery material held outside the failing system?</li>
              <li>What exactly would you do on the worst day — in writing?</li>
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="recovery-limits">
          <div className="container narrow">
            <p className="eyebrow">HONEST BOUNDARIES</p>
            <h2 id="recovery-limits">What we do not claim</h2>
            <p className="section-lede">
              We do not offer guaranteed recovery times, replication
              continuity, multi-region failover, or operations SLAs. What we
              offer is verification: proof of what your recovery can actually
              do today, plus the gaps stated plainly.
            </p>
            <div className="actions">
              <Link className="btn-ghost" to="/proof/recovery-resilience">
                Read the recovery proof ›
              </Link>
              <Link className="btn-ghost" to="/backup-restore-recovery">
                Unsure about your backups? ›
              </Link>
            </div>
            <Disclosure />
          </div>
        </section>

        <CtaBand
          title="Find out whether you can actually recover."
          note="A Recovery Readiness Review assesses your backup path, rehearses where it counts, and leaves findings plus residual risks in writing."
          mailto={RECOVERY_MAILTO}
          buttonLabel="Start a Recovery Readiness Review"
        />
      </main>
      <SiteFooter />
    </>
  )
}
