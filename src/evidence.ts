/**
 * Governed public-evidence data model (repo-local, no CMS/backend).
 *
 * Direction: governed truth, sanitized public projection, website.
 * Only PROVEN + PUBLIC_SAFE ledger rows become fields. Maturity ladder:
 * INTERNAL VALIDATION (rendered today) / VALIDATED DELIVERY / EXTERNAL
 * EVIDENCE (defined for future capabilities such as MUNVYR; never rendered
 * until earned). Never upgrade maturity to improve marketing.
 */

export type EvidenceMaturity = 
  | 'INTERNAL VALIDATION'
  | 'VALIDATED DELIVERY'
  | 'EXTERNAL EVIDENCE'

export interface VerifiedState {
  label: string
  state: string
}

export interface PublicEvidence {
  id: string
  title: string
  capability: string
  maturity: EvidenceMaturity
  disclosure: string
  situation: string
  verifiedOutcomes: VerifiedState[]
  limitations: string[]
  evidenceType: string
  /** Only when an authoritative public-safe date exists. None today. */
  lastVerifiedAt?: string
  route: string
  routeLabel: string
}

const INTERNAL_DISCLOSURE =
  'This proof comes from our own internal production infrastructure — not a client engagement, and no client data is involved.'

const CUSTOMER_ZERO_DISCLOSURE =
  'Customer #0 controlled benchmark. Internally validated. Not client-proven. Not production-proven. No guarantee implied.'

const LAB_DISCLOSURE =
  'Simulated automation lab using synthetic data — built and tested locally. Not client work and not a production deployment.'

export const PRODUCTION_RESCUE_EVIDENCE: PublicEvidence = {
  id: 'production-rescue',
  title: 'Production rescue: inert to operational',
  capability: 'Production System Rescue & Reliability',
  maturity: 'INTERNAL VALIDATION',
  disclosure: INTERNAL_DISCLOSURE,
  situation:
    'A containerized production system reported running yet was completely inert: uninitialized schema, no tables, a worker in a 922-restart crash loop, and a correctly not-ready probe.',
  verifiedOutcomes: [
    { label: 'WORKER', state: '922 to 0 restarts' },
    { label: 'SCHEMA', state: '0 to 28 tables' },
    { label: 'READINESS', state: 'Not ready to ready' },
    { label: 'CHANGE', state: 'Configuration only' },
  ],
  limitations: [
    'Single internal system — not a client outcome and not a scale claim.',
    'Overall readiness stayed honestly not-ready for intentionally absent components.',
  ],
  evidenceType: 'Controlled recovery witness',
  route: '/proof/production-rescue',
  routeLabel: 'Read the full rescue proof',
}

export const RECOVERY_RESILIENCE_EVIDENCE: PublicEvidence = {
  id: 'recovery-resilience',
  title: 'Recovery rehearsal, twice attempted',
  capability: 'Recovery & Resilience',
  maturity: 'INTERNAL VALIDATION',
  disclosure: INTERNAL_DISCLOSURE,
  situation:
    'A hash-verified backup had to prove it could restore — into a brand-new isolated target, with production left untouched.',
  verifiedOutcomes: [
    { label: 'BACKUP', state: 'Hash-verified' },
    { label: 'REHEARSAL', state: 'Attempt 1 failed visibly; attempt 2 matched exactly' },
    { label: 'ISOLATION', state: 'Target destroyed; production unchanged' },
    { label: 'DURABILITY', state: 'Independent read-back matched' },
  ],
  limitations: [
    'Rehearsal proves method, not disaster recovery with guaranteed times.',
    'No replication, failover, or operations SLA is claimed.',
  ],
  evidenceType: 'Controlled recovery witness',
  route: '/proof/recovery-resilience',
  routeLabel: 'Read the recovery proof',
}

export const APPLICATION_BUSINESS_RECOVERY_EVIDENCE: PublicEvidence = {
  id: 'application-business-recovery',
  title: 'Application & Business Recovery Assurance',
  capability: 'Recovery & Resilience',
  maturity: 'INTERNAL VALIDATION',
  disclosure: CUSTOMER_ZERO_DISCLOSURE,
  situation:
    'Customer #0 controlled benchmark: admitted work before failure, injected failure, recovery, then item-level reconciliation of pre-failure and post-recovery states.',
  verifiedOutcomes: [
    { label: 'ADMITTED', state: '30' },
    { label: 'RECONCILED', state: '30' },
    { label: 'UNRESOLVED', state: '0' },
    { label: 'LOST', state: '0' },
  ],
  limitations: [
    'Customer #0 controlled benchmark only — not client-proven, not production-proven.',
    'Disposable local target — no production contact, no timescale claim.',
    'Infrastructure availability does not establish application/business state verification.',
    'No guarantee implied — no RTO/RPO guarantee, no SLA, no universal recovery claim.',
  ],
  evidenceType: 'Measured reconciliation benchmark',
  route: '/proof/recovery-resilience',
  routeLabel: 'Read the recovery proof',
}

export const GOVERNED_AUTOMATION_EVIDENCE: PublicEvidence = {
  id: 'governed-automation',
  title: 'Lead intake that validates and routes',
  capability: 'Governed Automation',
  maturity: 'INTERNAL VALIDATION',
  disclosure: LAB_DISCLOSURE,
  situation:
    'Manual lead intake creates inconsistent handling, delayed follow-up, and unclear routing between teams. A bounded intake workflow validates and normalizes each submission, then routes it explicitly.',
  verifiedOutcomes: [
    { label: 'VALID SALES LEAD', state: 'HTTP 200, routed to sales' },
    { label: 'VALID SUPPORT LEAD', state: 'HTTP 200, routed to support' },
    { label: 'INVALID INPUT', state: 'HTTP 400 with field-level errors' },
    { label: 'REPRODUCED', state: '3/3 scenarios via verification script' },
  ],
  limitations: [
    'Simulated lab with synthetic data — not client work, not a production deployment.',
    'Local verification only — no uptime, traffic, load, or SLA evidence.',
    'A real deployment needs environment-specific configuration and credentials.',
  ],
  evidenceType: 'Reproducible local verification (n8n 2.36.9)',
  route: '/proof/lead-intake-automation',
  routeLabel: 'Read the automation proof',
}

export const PUBLIC_EVIDENCE: PublicEvidence[] = [
  PRODUCTION_RESCUE_EVIDENCE,
  RECOVERY_RESILIENCE_EVIDENCE,
  APPLICATION_BUSINESS_RECOVERY_EVIDENCE,
  GOVERNED_AUTOMATION_EVIDENCE,
]
