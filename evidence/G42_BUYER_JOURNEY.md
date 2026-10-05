# G4.2 BUYER JOURNEY — EVIDENCE RECORD (LOCAL COMMIT, NOT PUSHED)

Date (UTC): 2026-10-05. Baseline: G4.1 PASS @ a98a3cc, clean tree, 0/0.
Deployment safety: implemented → tested → QA → LOCAL COMMIT ONLY. No push, no deploy.

## Journey (Home only; sub-pages untouched except one anchor fix)

1. PROBLEMS (#problems, replaces #choose + #symptoms): 7 data-driven routing
   choices (`PROBLEM_PATHS` in src/components/journey.tsx — future capabilities
   enter via data, no MUNVYR added). Accordion: real buttons, aria-expanded,
   inline panels with starting-point links (Review ×5 conservative, Recovery ×1,
   scoped-capability ×2). First item open by default; usable without animation.
2. FLAGSHIP (#flagship): positioning + native <details> progressive disclosure
   (situation/philosophy/outcome) + capability/proof links. No case-study dump.
3. METHOD (#method): OBSERVE/ISOLATE/RECOVER/PROVE chain reusing G4.1 chain
   language + note separating it from the BUILD/BREAK/RECOVER/PROVE signature.
4. EVIDENCE (#evidence): compact facts (922 to 0, 0 to 28, readiness, rehearsed
   restore) + INTERNAL VALIDATION badge + non-fine-print disclosure + proof links.
   Full case-study table removed from Home (lives on /proof/*).
5. TRUST (#trust): 6 terse principles (read-only, minimum, reversible, fail-closed,
   evidence, bounded claims). No compliance theater.
6. ENGAGEMENT: existing tiers + contact, plus "No production credentials needed
   to start talking." No scheduling/SLA/availability promises invented.
7. Eyebrows renumbered 01–09; Review.tsx /#symptoms anchor updated to /#problems.

## Validation

- build PASS (36 modules); lint PASS; smoke 18/18 PASS (extended with journey strings).
- Headless Chromium: G4.1 suite 18/18 + G4.2 suite 17/17 PASS (accordion click +
  keyboard Enter toggle + touch tap, single h1, 7 buttons, method/evidence/trust
  present, direct evidence + CTA routes, zero console/page errors, 0 overflow
  desktop + 390px, reduced-motion intact).
- Screenshots inspected: desktop problems accordion + mobile open-panel state.
- Claim review PASS (only legitimate "diagnosis-as-service" + explicit
  routing-not-diagnosis disclaimer). Secret/topology CLEAN. Links: all targets
  valid routes/anchors. diff-check PASS.
- Visual self-review: 30-second scan (problems → flagship → method → evidence →
  trust → contact) works without internal terminology; no card-grid sprawl, no
  prose walls, G4.1 identity preserved.

## Defects fixed

- Stale /#symptoms anchor in Review.tsx → /#problems.
- No other defects; first implementation accepted after screenshot review
  (mobile tap highlight is native feedback, not a defect).
