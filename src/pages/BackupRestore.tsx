import { Link } from 'react-router-dom'
import { CtaBand, Disclosure, SiteFooter, SiteHeader } from '../components/layout'
import { usePageMeta } from '../meta'
import { RECOVERY_MAILTO } from '../site'

export default function BackupRestore() {
  usePageMeta({
    title: 'Backup, Restore & Recovery Check | ZUHAYR SYSTEMS',
    description:
      'You have backups but are unsure restore would work? ZUHAYR checks your backup path, rehearses restores in isolation, and reports recovery findings with evidence.',
    path: '/backup-restore-recovery',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="brr-title">
          <div className="container">
            <p className="eyebrow">BACKUP ≠ RECOVERY</p>
            <h1 id="brr-title">Your backups exist. Would they restore?</h1>
            <p className="lede">
              Most teams discover the answer at the worst possible moment. We
              check your backup path before that day — and rehearse the
              restore so you know instead of hoping.
            </p>
            <div className="actions">
              <a className="btn" href={RECOVERY_MAILTO}>
                Check my recovery readiness
              </a>
              <Link className="btn-ghost" to="/recovery-resilience">
                How we verify recovery
              </Link>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="brr-path">
          <div className="container">
            <p className="eyebrow">WHAT WE CHECK</p>
            <h2 id="brr-path">The backup path, end to end</h2>
            <div className="cards">
              <article className="card">
                <h3>Backup assessment</h3>
                <p>
                  What is backed up, how often, where it lands — and whether
                  integrity is verified before anyone calls it evidence.
                </p>
              </article>
              <article className="card">
                <h3>Restore rehearsal</h3>
                <p>
                  A restore exercised into an isolated target and compared
                  against the live structure — without touching production.
                </p>
              </article>
              <article className="card">
                <h3>Findings &amp; gaps</h3>
                <p>
                  Recovery findings, integrity results, prioritized
                  remediation, and residual limitations — in writing.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="brr-proof">
          <div className="container narrow">
            <p className="eyebrow">GROUNDED IN PRACTICE</p>
            <h2 id="brr-proof">We rehearse before we claim</h2>
            <p className="section-lede">
              Our reference practice includes hash-verified backups, isolated
              restores rehearsed twice — the first attempt failed visibly and
              stays in the record — and independent off-node read-back. That
              is the standard your assessment is measured against.
            </p>
            <div className="actions">
              <Link className="btn-ghost" to="/proof/recovery-resilience">
                Read the recovery proof ›
              </Link>
            </div>
            <Disclosure />
          </div>
        </section>

        <CtaBand
          title="Stop hoping. Start knowing."
          note="Tell us your backup mechanism, storage, data size, and whether a restore was ever tested — the email opens with those prompts."
          mailto={RECOVERY_MAILTO}
          buttonLabel="Check my recovery readiness"
        />
      </main>
      <SiteFooter />
    </>
  )
}
