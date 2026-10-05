# INBOUND FOUNDATION #1 — EVIDENCE RECORD

Date (UTC): 2026-10-05. Baseline: Stage 3 CLOSED @ 16f1d42 (live, Pages auto-deploy).

## Capability sources consulted (read-only)

- C0-4 proof pack: 01_CLAIM_LEDGER.md (CL-07/09/10/11/12/13/14/15/16/18/19/20/21),
  03_PUBLIC_SAFE_CASE_STUDY_SOURCE.md, website_content_contract.md,
  07_SECRET_PUBLIC_SAFETY_REVIEW.md — canonical governed facts.
- docs/operations/BACKUP_RESTORE_RUNBOOK.md, EVIDENCE_CHECKPOINT_POLICY.md — method only.
- 90_RECOVERY G0-1 preserve/restore evidence — internal method context, not publicized.
- 60_SECURITY_AND_RECOVERY — surveyed; durability artifacts internal-only, not publicized.
- No Stage-2/Enterprise evidence modified. No C0-4 gate reopened.

## Claim classifications (evidence/RECOVERY_CLAIM_LEDGER.md)

- PROVEN+PUBLIC_SAFE → buyer claims: R-P1..R-P11 + R-DISC (hash-verified backups,
  isolated rehearsals ×2 with failure kept, off-node read-back summary, fail-closed,
  52/52 suite, 922→0/0→28/2-keys/0-code, 503 honesty, CL-18 disclosure everywhere).
- ADJACENT → method/engagement language only: R-A1..R-A4.
- NOT_SUPPORTED → explicit negations on site: no RPO/RTO/SLA, no enterprise DR,
  no failover/replication, no client outcomes.
- INTERNAL_ONLY → fully excluded: hosts/IPs/paths/buckets/hashes/roles/keys.

## Pages created (React Router + BrowserRouter, existing react-router-dom dep)

- /production-reliability-review — bounded entry engagement (fit, deliverables, method proof link, guided mailto CTA)
- /saas-production-rescue — capability family 1 (symptoms, 4-step method chain, facts, proof link)
- /recovery-resilience — capability family 2 (6-link verification chain visual, confidence questions, negations, Recovery Readiness mailto with buyer-input prompts)
- /backup-restore-recovery — intent page (path check cards, rehearsal standard, links)
- /proof/production-rescue — governed rescue proof (steps, facts, before/after, trust strip, disclosure)
- /proof/recovery-resilience — recovery record (6 proven steps, boundaries, disclosure)
- Homepage: pathway chooser (FAILING→rescue / UNSURE-RECOVER→recovery), capability deep-links, proof-page links; existing sections intact.

## SEO / routing

- Per-route title/description/canonical/OG via usePageMeta hook (no new deps);
  Organization JSON-LD kept (no fake Review/Rating/Offer/FAQ schema).
- public/_redirects: `/* /index.html 200` (direct-route refresh under Pages).
- public/sitemap.xml: 7 canonical routes. robots.txt: allow-all + sitemap pointer (unchanged).
- Local direct-route test (vite preview): all 7 routes + robots + sitemap → 200.

## Test/build/safety

- oxlint PASS; tsc -b PASS (one generic-type fix during build); vite build PASS
  (34 modules; js ~311 kB / gzip ~92 kB — router cost only, no new deps/assets).
- Prohibited-claim scan: only explicit negations + 2 pre-existing governed markers. PASS.
- Secret/topology scan (high-confidence): CLEAN on src, public, index.html, fresh dist.
- e2e: NOT_RUNNABLE (no suite upstream). git diff --check PASS.
- Visual self-review: hierarchy/scannability/brand/mobile/performance/no-wall PASS —
  restrained additions only (chain lists, chooser cards, pills), no gradients/animation/libs.

## Deployment / live verification (post-push)

- Pushed to main; Pages automatic deployment authoritative (no duplicate project, no DNS change).
- Verified live shell serves the new asset hash; per-route HTTPS checks; bundle secret scan.
- (Fill live asset hash + route results after deploy propagation.)
