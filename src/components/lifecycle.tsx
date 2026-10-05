import { useState } from 'react'

/** ZUHAYR identity signature: BUILD / BREAK / RECOVER / PROVE. */
export function Signature({ compact = false }: { compact?: boolean }) {
  const steps = ['BUILD', 'BREAK', 'RECOVER', 'PROVE']
  return (
    <p
      className={compact ? 'signature signature-compact' : 'signature'}
      aria-label="ZUHAYR engineering lifecycle: build, break, recover, prove"
    >
      {steps.map((step, i) => (
        <span key={step} className="signature-step">
          <span>{step}</span>
          {i < steps.length - 1 && (
            <svg
              className="signature-sep"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M1 1 L9 9 L17 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                transform="rotate(-90 9 5)"
              />
            </svg>
          )}
        </span>
      ))}
    </p>
  )
}

type LifecycleMode = 'steady' | 'failure'

const NOMINAL = ['DEMAND', 'GOVERN', 'EXECUTE', 'VERIFY', 'OUTCOME'] as const

const STATE_WORD: Record<string, string> = {
  DEMAND: 'OBSERVING',
  GOVERN: 'WORKING',
  EXECUTE: 'WORKING',
  FAILURE: 'BLOCKED',
  RECOVER: 'RECOVERING',
  VERIFY: 'WORKING',
  OUTCOME: 'VERIFIED',
}

/**
 * Governed-lifecycle visualization. A vertical station rail shows the nominal
 * path DEMAND > GOVERN > EXECUTE > VERIFY > OUTCOME; switching to the failure
 * path reveals EXECUTE > FAILURE > RECOVER > VERIFY. All meaning is present
 * statically; motion only carries a travelling pulse (disabled entirely under
 * prefers-reduced-motion).
 */
export function LifecycleViz() {
  const [mode, setMode] = useState<LifecycleMode>('steady')
  const failure = mode === 'failure'

  const stations = failure
    ? ['DEMAND', 'GOVERN', 'EXECUTE', 'FAILURE', 'RECOVER', 'VERIFY', 'OUTCOME']
    : [...NOMINAL]

  return (
    <figure
      className="lifecycle"
      aria-label="Governed system lifecycle visualization"
    >
      <div className="lifecycle-head">
        <figcaption>GOVERNED LIFECYCLE / TWO PATHS</figcaption>
        <div
          className="lifecycle-toggle"
          role="group"
          aria-label="Lifecycle path"
        >
          <button
            type="button"
            aria-pressed={!failure}
            className={failure ? '' : 'is-active'}
            onClick={() => setMode('steady')}
          >
            Steady
          </button>
          <button
            type="button"
            aria-pressed={failure}
            className={failure ? 'is-active is-alert' : ''}
            onClick={() => setMode('failure')}
          >
            Failure
          </button>
        </div>
      </div>
      <ol className={failure ? 'rail rail-failure' : 'rail'}>
        <span className="rail-pulse" aria-hidden="true" />
        {stations.map((station) => {
          const alert = station === 'FAILURE'
          const recovering = station === 'RECOVER'
          return (
            <li
              key={station}
              className={[
                'station',
                alert ? 'station-alert' : '',
                recovering ? 'station-recovering' : '',
                station === 'OUTCOME' ? 'station-outcome' : '',
              ]
                .join(' ')
                .trim()}
            >
              <span className="station-dot" aria-hidden="true" />
              <span className="station-name">{station}</span>
              <span
                className={[
                  'state-chip',
                  alert ? 'chip-alert' : '',
                  recovering ? 'chip-recovering' : '',
                  station === 'OUTCOME' ? 'chip-verified' : '',
                ]
                  .join(' ')
                  .trim()}
              >
                {STATE_WORD[station]}
              </span>
            </li>
          )
        })}
      </ol>
      <p className="lifecycle-note">
        {failure
          ? 'Failure path: execution faults are contained, recovered, then verified before any outcome is claimed.'
          : 'Nominal path: demand is governed before execution, and every outcome passes verification.'}
      </p>
    </figure>
  )
}
