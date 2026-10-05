# BOUNDED COMMERCIAL CONVERSION PASS #1 — zuhayr-public-front-door

Date (UTC): 2026-10-05
Scope: conversion hardening ONLY. No redesign, no new gate, C0-4 untouched, Stage 4 not started.
Baseline: Stage 3 CLOSED @ 04c9041 (Pages auto-deploy SUCCESS, live verified).

## Changes (src/App.tsx + src/index.css only)

1. BUYER SYMPTOMS — new `#symptoms` section first after hero ("Taking an existing SaaS
   from fragile to operable." + 7 buyer-language symptom items + dual CTA). Buyer language
   only; no gate terminology (no C0-4/FER/CL references in new copy).
2. ENGAGEMENT MODEL — new `#engagements` section: 01 Production Reliability Review
   (read-only-first), 02 Rescue/Stabilization (bounded, findings-justified, separately
   agreed), 03 Recovery Verification (where applicable). Explicit note: not every
   engagement includes every capability; deeper work only by agreement.
3. DELIVERABLES — per-tier "You receive" lists (findings, root-cause map, remediation plan,
   agreed fixes + verification evidence, recovery findings, residual-risk record,
   runbook notes). No pricing/SLA/outcomes beyond evidence.
4. TRUST LAYER — proof section gains a 4-item credibility strip (read-only-first, failed
   attempts preserved, independent verifier, hashed evidence chain — all CL-traceable)
   plus a "why credible" note. CL-18 disclosure sentences untouched and still explicit
   in proof lede, capability-02 boundary, and contact boundary.
5. CTA — mailto now opens with a guided body template (system / failure / urgency /
   stack-environment / outcome needed) + hint text. No fake form/backend. Primary action
   remains "Start a Production Reliability Review".
6. NAV — added "Is this you?" (#symptoms) and "Engagements" (#engagements); mobile
   collapse behavior unchanged. Eyebrows renumbered 01–06; existing anchors preserved.
7. CSS — `.checklist.symptoms` (2-col → 1-col ≤760px), `.trust-strip` pills,
   `.cards.tiers` (3-col → 1-col ≤900px), `.tier-scope/.mini-label/.tier-list`.
   All new sections reuse existing primitives (section/container/eyebrow/boundary).

## Quality gates (all on final tree)

- TRUTHFUL=PASS; BUYER_READABLE=PASS; COMMERCIAL_CONVERSION=PASS
- EVIDENCE_BOUNDARY=PASS (CL-18 intact ×3, CL-21 card-03 + tier-03 boundaries intact)
- NO_EXTERNAL_CLIENT_OVERCLAIM=PASS (prohibited-claim scan: only false-positive `slo`
  substring inside "isolated/isolated"; zero real hits for SLA/revenue/uptime/customer/
  pricing/testimonial/guarantee/RTO/Cafe Ops)
- NO_LAB_ONLY_CAPABILITY_LEAKAGE=PASS (no retry/webhook/idempotency/outbox/DLQ claims in
  proof; engagement methods carry scope boundaries)
- NO_SECRET_OR_TOPOLOGY_LEAKAGE=PASS (high-confidence secret + topology scan CLEAN on
  src, public, index.html, and fresh dist)
- RESPONSIVE_BASELINE=PASS (900/760/560 breakpoints extended to new grids; pills wrap;
  no fixed widths introduced)
- ACCESSIBILITY_BASELINE=PASS (aria-labelledby on new sections, labeled lists, existing
  skip-link/focus/reduced-motion untouched)
- LINT=PASS (oxlint, zero findings); TYPESCRIPT=PASS (tsc -b); PRODUCTION_BUILD=PASS
  (dist/index.html 2.11 kB; css ~10.5 kB; js ~239 kB)
- TESTS=NOT_RUNNABLE (no suite exists upstream — unchanged, not fabricated)
- DIFF_CHECK=PASS

## Deployment

- Pushed to main; Cloudflare Pages automatic deployment picks it up (no manual system).
- Post-push: confirm production build SUCCESS and live shell serves the new asset hash.
