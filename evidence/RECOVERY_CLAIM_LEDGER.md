# CLAIM LEDGER — INBOUND FOUNDATION #1 (website work only)

Date: 2026-10-05. Scope: Recovery & Resilience + Production Rescue public pages.
Authority: C0-4 claim ledger CL-01..CL-22 (GOVERNED INTERNAL), 03_PUBLIC_SAFE_CASE_STUDY_SOURCE.md,
website_content_contract.md, BACKUP_RESTORE_RUNBOOK (internal), 90_RECOVERY G0-1 preserve evidence (internal).
This file is INTERNAL to the repo working area; only PROVEN+PUBLIC_SAFE rows become buyer copy.

## PROVEN + PUBLIC_SAFE → may become strong buyer-facing claims

| ID | Claim | Ledger trace |
|---|---|---|
| R-P1 | Backups were created and each was hash-verified, integrity-checked, and secret-scanned before counting as evidence | CL-11 |
| R-P2 | A fresh backup was restored into a brand-new, fully isolated target (own container/volume, no network, production never mounted) | CL-10 |
| R-P3 | First isolated restore attempt failed visibly (missing cluster roles); failure kept in the record; second attempt after credential-free role bootstrap matched live structure exactly | CL-10 |
| R-P4 | Isolated target destroyed afterward; production verified unchanged | CL-10 |
| R-P5 | Sanitized recovery runbook placed in independent private object storage: verified upload + independent read-back + exact hash match | CL-15 (summary form; provider/key/hash never in buyer copy) |
| R-P6 | Exporter with no destination provably sent nothing and kept the local snapshot (fail-closed) | CL-16 |
| R-P7 | 40-test ops suite passed 3 consecutive full runs; extended to 52/52 green on Linux | CL-14 (exact numbers only) |
| R-P8 | 8-signal health collector PASS across the board; monitoring defect caught and fixed with stronger invariants | CL-12, CL-13 |
| R-P9 | Least privilege verified at DB level (non-superuser roles, forced RLS, worker zero business grants) | CL-07 (summary form) |
| R-P10 | Worker 922→0 restarts; 0→28 tables; 2 missing keys; 0 code changes | CL-01/03/04/05/06 |
| R-P11 | Aggregate readiness honestly 503-by-scope; owned DB ready (must travel with health claims) | CL-19 |
| R-DISC | All proof is our own internal production/reference infrastructure — NOT a paid client engagement; no client data (mandatory in every proof rendering) | CL-18 |

## ADJACENT → method/engagement capability language ONLY (never as rescue outcomes)

| ID | Wording rule |
|---|---|
| R-A1 | "Rehearsed restore exercises in isolation with integrity checks" as engagement method |
| R-A2 | "Backup → integrity → fresh-target restore → verify → evidence" as method chain |
| R-A3 | Nightly backup discipline / runbook-driven rehearsal as engagement practice (from internal runbook, summarized) |
| R-A4 | Safe retries / idempotent processing as forward-looking integration engagement method (CL-21 boundary kept) |

## NOT_SUPPORTED → forbidden in all public content (state negations where adjacent)

- Paid external-client delivery or customer recovery outcomes
- Enterprise-scale DR, high-volume production recovery, multi-region failover
- Continuous replication; guaranteed RPO; guaranteed RTO; SLA/SLO
- Recurring production operations; "all systems operational" / aggregate 200
- "120 unique tests"; traffic/scale/revenue claims; certifications; testimonials
- G4/G5 scope (n8n, adapters); production DB dumps replicated off-node (only sanitized runbook was)

## INTERNAL_ONLY → never in buyer copy

Hostnames, IPs, ports, filesystem paths, provider/bucket/object names, hash/SHA strings,
role names, grant tables, env-file contents, raw evidence locations, recovery keys.

## Explicit support answers

- paid external-client delivery: NOT SUPPORTED (CL-18 governs every page)
- enterprise-scale DR: NOT SUPPORTED (BLOCKED per runbook; proposal-stage only as negation)
- high-volume production recovery: NOT SUPPORTED
- multi-region failover: NOT SUPPORTED
- continuous replication: NOT SUPPORTED
- guaranteed RPO: NOT SUPPORTED (RPO 24h + no WAL/PITR are internal limits, not offers)
- guaranteed RTO: NOT SUPPORTED
- SLA: NOT SUPPORTED
- recurring production operations: NOT SUPPORTED (12 units were observed on own infra; no ops SLA offered)
- customer recovery outcomes: NOT SUPPORTED
