import { Link } from 'react-router-dom'
import { CtaBand, SiteFooter, SiteHeader } from '../components/layout'
import { EvidenceObject } from '../components/evidence'
import { GOVERNED_AUTOMATION_EVIDENCE } from '../evidence'
import { usePageMeta } from '../meta'
import { AUTOMATION_MAILTO } from '../site'

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

export default function ProofAutomation() {
  usePageMeta({
    title: 'Proof: Governed Automation | ZUHAYR SYSTEMS',
    description:
      'Verified lead-intake automation: webhook intake, validation and normalization, explicit sales/support routing — a simulated lab with synthetic data, locally reproducible, not client work.',
    path: '/proof/lead-intake-automation',
  })

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="page-hero" aria-labelledby="pla-title">
          <div className="container">
            <p className="eyebrow">PROOF / GOVERNED AUTOMATION</p>
            <h1 id="pla-title">Lead intake that validates and routes</h1>
            <p className="lede">
              This proof comes from a simulated automation lab using
              synthetic data — built and tested locally. It is not client
              work and not a production deployment, and it is presented
              that way deliberately.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="narrative">
            <Step num="01" id="pla-challenge" title="The challenge">
              <p>
                Manual lead intake creates inconsistent handling, delayed
                follow-up, and unclear routing between sales and support.
                A governed intake workflow makes the behavior consistent:
                every submission is validated, normalized, and routed by
                explicit rules — not by whoever happens to read the inbox.
              </p>
            </Step>
            <Step num="02" id="pla-approach" title="The approach">
              <p>
                A bounded workflow accepts a lead over a webhook, validates
                and normalizes the payload, makes an explicit sales/support
                routing decision, and returns a structured JSON response.
                Intake logic stays inspectable and separate from any
                downstream system.
              </p>
              <details className="disclose">
                <summary>Implementation technology</summary>
                <div className="disclose-body">
                  <p>
                    The workflow is implemented in n8n, pinned to version
                    2.36.9 for the verification run. n8n is the
                    implementation technology — the capability being
                    demonstrated is governed intake: validation,
                    normalization, and explicit routing with defined
                    failure behavior.
                  </p>
                </div>
              </details>
            </Step>
            <Step num="03" id="pla-verified" title="What we verified">
              <p>
                A committed verification script imports the workflow
                unmodified into a throwaway container, publishes it, posts
                each synthetic payload to the webhook, and compares the
                HTTP status and exact JSON body against expected results —
                then tears the container down.
              </p>
              <ol
                className="chain chain-compact"
                aria-label="Verified automation scenarios"
              >
                <li>
                  <strong>Valid sales lead</strong>
                  <span>HTTP 200 — qualified and routed to sales.</span>
                </li>
                <li>
                  <strong>Valid support lead</strong>
                  <span>HTTP 200 — received and routed to support.</span>
                </li>
                <li>
                  <strong>Invalid input</strong>
                  <span>
                    HTTP 400 — field-level errors returned, nothing routed.
                  </span>
                </li>
              </ol>
            </Step>
            <Step num="04" id="pla-result" title="Verified result">
              <p>
                All three scenarios pass — 3/3 — reproducibly, from a
                clean import of the published workflow. The workflow
                returns JSON only: it writes no files and calls no
                downstream systems, so the verified surface is exactly
                the intake, validation, and routing behavior.
              </p>
            </Step>
            <Step num="05" id="pla-maturity" title="Evidence level">
              <p>
                Internal lab validation: a simulated automation lab with
                synthetic data, built and tested locally. The workflow and
                verification script are published in a public-safe
                portfolio repository for independent review.
              </p>
              <p className="boundary">
                <a
                  href="https://github.com/ZUHAYR-SYSTEMS/n8n-client-lead-intake-automation"
                  rel="noopener noreferrer"
                >
                  Public-safe portfolio repository ›
                </a>
              </p>
            </Step>
            <Step num="06" id="pla-limits" title="Limitations">
              <p>
                This is not paid-client work, not a live customer
                deployment, and not production operating history. No
                uptime, traffic, load, revenue, or SLA evidence exists.
                Editor-import was not part of the verification run, and a
                real deployment needs environment-specific configuration
                and credentials.
              </p>
            </Step>
            <Step num="07" id="pla-provenance" title="Provenance / maturity">
              <EvidenceObject evidence={GOVERNED_AUTOMATION_EVIDENCE} />
            </Step>
            <Step num="08" id="pla-next" title="Relevant service">
              <p>
                Governed Automation is the capability behind this proof:
                bounded automation with explicit validation, defined
                failure behavior, and evidence — scoped so it helps
                without running out of control.
              </p>
              <div className="actions">
                <Link className="btn-ghost" to="/#capabilities">
                  Governed Automation capability ›
                </Link>
                <Link className="btn-ghost" to="/production-reliability-review">
                  Start with a Review ›
                </Link>
              </div>
            </Step>
          </div>
        </div>

        <CtaBand
          title="Automation that stays inside its limits?"
          note="Describe the intake, routing, or workflow problem — we will tell you honestly what can be bounded, verified, and proven."
          mailto={AUTOMATION_MAILTO}
          buttonLabel="Discuss governed automation"
        />
      </main>
      <SiteFooter />
    </>
  )
}
