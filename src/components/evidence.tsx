import { Link } from 'react-router-dom'
import type { PublicEvidence } from '../evidence'

/**
 * Reusable public-safe evidence object. Renders only governed fields:
 * title, maturity, verified states, source/type, disclosure, limitations,
 * and a deep-evidence destination. Status is text-first, never color-only.
 */
export function EvidenceObject({ evidence }: { evidence: PublicEvidence }) {
  return (
    <article className="evidence-object" aria-labelledby={`ev-${evidence.id}`}>
      <p className="evidence-kicker">
        <span className="evidence-mark" aria-hidden="true">
          Z
        </span>
        <span>EVIDENCE / {evidence.capability.toUpperCase()}</span>
      </p>
      <h3 id={`ev-${evidence.id}`}>{evidence.title}</h3>
      <p className="maturity maturity-inline">
        <span className="maturity-badge">MATURITY</span>
        <span className="maturity-value">{evidence.maturity}</span>
      </p>
      <p className="evidence-situation">{evidence.situation}</p>
      <dl className="evidence-states" aria-label="Verified states">
        {evidence.verifiedOutcomes.map((outcome) => (
          <div key={outcome.label}>
            <dt>{outcome.label}</dt>
            <dd>
              <span className="verify-mark" aria-hidden="true">
                ✓
              </span>{' '}
              {outcome.state}
            </dd>
          </div>
        ))}
      </dl>
      <dl className="evidence-meta">
        <div>
          <dt>Source</dt>
          <dd>{evidence.evidenceType}</dd>
        </div>
        <div>
          <dt>Limitations</dt>
          <dd>
            <ul>
              {evidence.limitations.map((limitation) => (
                <li key={limitation}>{limitation}</li>
              ))}
            </ul>
          </dd>
        </div>
        {evidence.lastVerifiedAt && (
          <div>
            <dt>Last verified</dt>
            <dd>{evidence.lastVerifiedAt}</dd>
          </div>
        )}
      </dl>
      <p className="boundary evidence-disclosure">{evidence.disclosure}</p>
      <dl className="evidence-lens">
        <dt>WHAT THIS PROVES</dt>
        <dd>
          {evidence.verifiedOutcomes.map((outcome, i) => (
            <div key={i}>
              <span>{outcome.label}</span>{' '}
              <span>{outcome.state}</span>
            </div>
          ))}
        </dd>
        <dt>WHAT THIS DOES NOT PROVE</dt>
        <dd>
          {evidence.limitations.map((limitation, i) => (
            <div key={i}>
              <span>{limitation}</span>
            </div>
          ))}
          {evidence.limitations.length === 0 && (
            <p>No limitations declared — but caution: absence of evidence is not evidence of absence.</p>
          )}
        </dd>
      </dl>
      <p className="card-link">
        <Link to={evidence.route}>{evidence.routeLabel} ›</Link>
      </p>
    </article>
  )
}
