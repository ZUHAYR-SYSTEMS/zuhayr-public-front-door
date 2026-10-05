# SEARCH CONSOLE INBOUND BASELINE — 2026-10-05

Scope: EVIDENCE / RECONCILIATION ONLY. No code, route, DNS, sitemap, or robots change.
No new stage/gate. No traffic, ranking, or lead claim.

## Owner-verified facts (2026-10-05)

- Search Console domain property: zuhayrsystems.com
- Homepage https://zuhayrsystems.com/ — STATUS: URL IS ON GOOGLE; PAGE INDEXING: INDEXED
- HTTPS: PASS (live home → 200 over TLS, re-verified this session)
- Existing sitemap https://zuhayrsystems.com/sitemap.xml — Search Console status
  previously observed: SUCCESS; last-read snapshot Oct 4, 2026; discovered pages at
  that snapshot: 1.
  - Temporal note: that snapshot predates the sitemap update. Live verification this
    session proves the sitemap now contains 7 canonical `<loc>` entries. The "1
    discovered page" figure is therefore a STALE snapshot, NOT a sitemap defect.
- Six commercial URLs manually submitted 2026-10-05; Search Console returned
  "Indexing requested" for each:
  1. /production-reliability-review
  2. /saas-production-rescue
  3. /recovery-resilience
  4. /backup-restore-recovery
  5. /proof/production-rescue
  6. /proof/recovery-resilience

## Critical distinction

INDEXING_REQUESTED != INDEXED. All six commercial routes are REQUESTED; none is
claimed INDEXED in this record. Homepage INDEXED is the only indexed claim, and it
rests on the owner-verified "URL IS ON GOOGLE" state.

## Live sitemap state (machine-verified this session)

- https://zuhayrsystems.com/sitemap.xml → 200, 7 canonical `<loc>` entries
  (/, review, rescue, recovery, backup-restore, proof ×2). No indexing guarantee follows.

## Claims explicitly NOT made

- No traffic, impression, ranking, click, or lead claim.
- No guarantee any submitted URL will be indexed or when.
- No external client evidence introduced; INTERNAL/CONTROLLED vs external-client
  boundary unchanged (CL-18).

## Next evidence checkpoints

- A. GOOGLE_DISCOVERY — sitemap re-read; submitted routes appear as discovered.
- B. GOOGLE_INDEXING — individual commercial routes reach INDEXED state.
- C. SEARCH_VISIBILITY — first impressions / search queries observed.
- D. SEARCH_TRAFFIC — first organic click observed.
- E. COMMERCIAL_ATTRIBUTION — first attributable inquiry / qualified buyer.

Each checkpoint requires its own dated evidence before it is claimed.
