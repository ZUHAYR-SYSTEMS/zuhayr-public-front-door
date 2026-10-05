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

export const PUBLIC_EVIDENCE: PublicEvidence[] = [
  PRODUCTION_RESCUE_EVIDENCE,
  RECOVERY_RESILIENCE_EVIDENCE,
]
