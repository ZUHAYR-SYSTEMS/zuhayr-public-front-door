import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Buyer problem paths — data-driven so future governed capabilities can enter
 * through data (one umbrella, one governed truth) rather than marketing sprawl.
 * Each path is a routing choice with a truthful starting point, never a diagnosis.
 */
export interface ProblemPath {
  id: string
  title: string
  detail: string
  linkTo: string
  linkLabel: string
}

export const PROBLEM_PATHS: ProblemPath[] = [
  {
    id: 'not-working',
    title: 'Production is running — but not actually working.',
    detail:
      'Start with a Production Reliability Review: read-only diagnosis of the real failure state, before anything is changed.',
    linkTo: '/production-reliability-review',
    linkLabel: 'Production Reliability Review',
  },
  {
    id: 'workers-failing',
    title: 'Workers, queues or jobs keep failing.',
    detail:
      'Start with a Production Reliability Review — crash loops usually have a small, findable cause.',
    linkTo: '/production-reliability-review',
    linkLabel: 'Production Reliability Review',
  },
  {
    id: 'events-disordered',
    title: 'Events are duplicated, lost or out of order.',
    detail:
      'Relevant capability: integration and reconciliation work, scoped from a Review — the failure path is assessed before anything is changed.',
    linkTo: '/production-reliability-review',
    linkLabel: 'A useful starting point',
  },
  {
    id: 'integrations-unreliable',
    title: 'Integrations or webhooks are unreliable.',
    detail:
      'Relevant capability: integration and reconciliation work, scoped from a Review — partial failures are mapped before any fix is attempted.',
    linkTo: '/production-reliability-review',
    linkLabel: 'A useful starting point',
  },
  {
    id: 'recovery-unproven',
    title: 'Recovery exists — but nobody has proved it.',
    detail:
      'Start with a Recovery Readiness Review: isolated rehearsal, integrity checks, and findings in writing.',
    linkTo: '/recovery-resilience',
    linkLabel: 'Recovery & Resilience Review',
  },
  {
    id: 'preparing-production',
    title: 'We are preparing an existing system for serious production.',
    detail:
      'A useful starting point: a Review that maps the failure state, recovery gaps, and remediation order.',
    linkTo: '/production-reliability-review',
    linkLabel: 'Production Reliability Review',
  },
  {
    id: 'unsure',
    title: 'I am not sure what is wrong.',
    detail:
      'That is exactly what the Review is for: read-only diagnosis, with findings and limits stated plainly.',
    linkTo: '/production-reliability-review',
    linkLabel: 'Production Reliability Review',
  },
]

export function ProblemPaths() {
  const [open, setOpen] = useState<string | null>(PROBLEM_PATHS[0].id)

  return (
    <div className="problems">
      <div
        className="problem-list"
        role="list"
        aria-label="Common production problems"
      >
        {PROBLEM_PATHS.map((problem, index) => {
          const isOpen = open === problem.id
          return (
            <div key={problem.id} role="listitem" className="problem-item">
              <button
                type="button"
                className={isOpen ? 'problem-btn is-open' : 'problem-btn'}
                aria-expanded={isOpen}
                aria-controls={`problem-panel-${problem.id}`}
                onClick={() => setOpen(isOpen ? null : problem.id)}
              >
                <span className="problem-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="problem-title">{problem.title}</span>
              </button>
              {isOpen && (
                <div
                  className="problem-panel"
                  id={`problem-panel-${problem.id}`}
                >
                  <p>{problem.detail}</p>
                  <Link
                    className="problem-link"
                    to={problem.linkTo}
                  >
                    {problem.linkLabel} ›
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
