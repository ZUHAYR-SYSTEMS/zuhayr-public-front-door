# GOVERNED EVIDENCE PUBLICATION — CLOSURE EVIDENCE

Date (UTC): 2026-10-07
Gate: governed evidence publication — Recovery Assurance completion +
Governed Automation proof (n8n lead-intake).

## Verdict: PASS / CLOSED

## Canonical state

- Repo: ZUHAYR-SYSTEMS/zuhayr-public-front-door (public), branch `main`
- Canonical commit: 82c2365d231491fd3cec23c02df0fc51da2eeab8
  `feat(public): governed evidence publication — Customer #0 recovery
  benchmark + Governed Automation proof`
- HEAD == origin/main; worktree clean
- Deployment: Cloudflare Pages auto-deploy on push to `main` (established
  mechanism; no DNS/mail/wrangler changes)

## Evidence sources reconciled (read-only, unmodified)

- Customer #0 recovery benchmark — canonical commit
  076e8b5cbba9d2a753792a361cb72c8c4d60efcc (zuhayr-digital-hq):
  30 admitted / 30 reconciled / 0 unresolved / 0 lost.
  Maturity: INTERNALLY VALIDATED, Customer #0 controlled benchmark,
  MEASURED. CLIENT-PROVEN: NO. PRODUCTION-PROVEN: NO. GUARANTEED: NONE.
- Governed Automation proof — canonical commit
  f4009b0a4e51fd4d90922d72ac6db02a872781fa
  (ZUHAYR-SYSTEMS/n8n-client-lead-intake-automation, public repo, HEAD
  confirmed == f4009b0a). 3/3 synthetic scenarios reproduce via
  scripts/verify-local.sh on n8n 2.36.9 (CLI import):
  sales lead -> HTTP 200 routed sales; support lead -> HTTP 200 routed
  support; invalid input -> HTTP 400 with field-level errors.
  Status remains PASS / CLOSED upstream; not reopened.

## Implementation

- src/evidence.ts: APPLICATION_BUSINESS_RECOVERY_EVIDENCE (Customer #0
  benchmark) + GOVERNED_AUTOMATION_EVIDENCE objects added to
  PUBLIC_EVIDENCE; lab-specific disclosure added.
- src/pages/ProofRecovery.tsx: new step "Application & business state
  verification" (30/30/0/0) with progressive-disclosure detail; provenance
  step now renders both evidence objects; steps renumbered.
- src/pages/ProofAutomation.tsx (new): /proof/lead-intake-automation case
  study — challenge / approach / what we verified / verified result /
  evidence level / limitations / relevant service + CTA. n8n referenced
  only as implementation technology.
- src/pages/Home.tsx: Governed Automation capability card links to the
  proof; evidence section gains "Read the automation proof".
- src/App.tsx: new route /proof/lead-intake-automation.
- src/site.ts: AUTOMATION_MAILTO CTA (subject: Governed Automation).
- public/sitemap.xml: 8 routes, lastmod 2026-10-07.
- public/llms.txt, public/ai-catalog.json: route entries updated.
- tests/smoke.mjs: assertions for Customer #0 metrics/disclosure,
  automation proof strings, sitemap count 7 -> 8.

## Test results (local, at 82c2365)

- oxlint: PASS, zero warnings.
- tsc -b + vite build: PASS (dist/assets/index-DReLPmZs.js).
- node tests/smoke.mjs: 37/37 PASS (incl. sitemap 8 routes, sitemap ==
  governed source, React mount invariant, no Unicode arrows).

## Live verification (post-deploy, 2026-10-07 ~11:25 UTC)

- Live bundle: assets/index-DReLPmZs.js — byte-identical hash to local
  build artifact.
- Routes 200: /, /production-reliability-review, /saas-production-rescue,
  /recovery-resilience, /backup-restore-recovery,
  /proof/production-rescue, /proof/recovery-resilience,
  /proof/lead-intake-automation.
- Machine artifacts 200: /robots.txt, /sitemap.xml (8 locs incl. new
  route), /llms.txt, /ai-catalog.json.
- Live bundle contains: "30 admitted", "30 reconciled", "0 unresolved",
  "0 lost", "Customer #0 controlled benchmark",
  "Lead intake that validates and routes",
  "Simulated automation lab using synthetic data", "n8n 2.36.9",
  "3/3 scenarios", Governed Automation mailto CTA, "INTERNAL VALIDATION".
- Only "paid-client" occurrence is inside the negation
  "not paid-client work". No secrets/paths/endpoints exposed.

## Limitations / deferred

- Automation proof maturity: simulated lab, synthetic data, locally
  reproducible. NOT client-proven, NOT production-proven.
- Secure Compliance Lab case study: DEFERRED — needs independent
  reconciliation of canonical test counts before publication.
- Cafe Ops / Integration & Data Reliability case study: DEFERRED —
  canonical evidence not yet reconciled.
