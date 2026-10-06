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

type LifecycleMode = 'steady' | 'failure' | 'simulation'

const _NOMINAL = ['DEMAND', 'GOVERN', 'EXECUTE', 'VERIFY', 'OUTCOME'] as const

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
 * Governed-lifecycle visualization with synthetic failure simulation.
 * Two paths: STEADY (nominal) and FAILURE SIMULATION (Z/LAB).
 * Client-side only; no backend; no real telemetry; no production connection.
 * Motion disabled entirely under prefers-reduced-motion.
 */
type FailureStep =
  | 'EXECUTE'
  | 'FAILURE_DETECTED'
  | 'ISOLATE'
  | 'RECOVER'
  | 'VERIFY'
  | 'OUTCOME_VERIFIED'

const _STEADY_STATIONS = ['DEMAND', 'GOVERN', 'EXECUTE', 'VERIFY', 'OUTCOME']
const _FAILURE_STATIONS = [
  'DEMAND',
  'GOVERN',
  'EXECUTE',
  'FAILURE_DETECTED',
  'ISOLATE',
  'RECOVER',
  'VERIFY',
  'OUTCOME_VERIFIED',
]
const _FAILURE_STEPS: Record<FailureStep, string> = {
  EXECUTE: 'Execute the change',
  FAILURE_DETECTED: 'Failure detected — state not authoritative',
  ISOLATE: 'Isolate the failure',
  RECOVER: 'Recover with bounded intervention',
  VERIFY: 'Verify recovery',
  OUTCOME_VERIFIED: 'Outcome verified — evidence preserved',
}
const _STEP_LABELS: Record<FailureStep, string> = {
  EXECUTE: 'RETRY',
  FAILURE_DETECTED: 'INSPECT FIRST',
  ISOLATE: 'Recovering',
  RECOVER: 'Recovering',
  VERIFY: 'Verifying',
  OUTCOME_VERIFIED: 'Outcome verified',
}

const STEP_MEANING: Record<FailureStep, string> = {
  EXECUTE:
    'Retry withheld. Authoritative state has not yet been established.',
  FAILURE_DETECTED:
    'Inspection preferred. Failure not yet isolated; proceeding risks unsafe change.',
  ISOLATE: 'Failure contained; recovery path available.',
  RECOVER: 'Bounded recovery in progress.',
  VERIFY: 'Independent verification runs.',
  OUTCOME_VERIFIED: 'Simulation complete. Evidence shows what we have proved.',
}

export function LifecycleViz() {
  const [mode, setMode] = useState<LifecycleMode>('steady')
  const simulation = mode === 'simulation'
  const failure = mode === 'failure'

  const simulationStep = simulation ? ('EXECUTE' as FailureStep) : undefined

  const simulationUnsafe = simulationStep === 'EXECUTE'
  const simulationVerified = simulationStep === 'OUTCOME_VERIFIED'

  const choiceLabel = simulationStep
    ? simulationStep === 'EXECUTE'
      ? 'RETRY'
    : simulationStep === 'FAILURE_DETECTED'
      ? 'INSPECT FIRST'
      : '—'
    : 'RETRY'

  const choiceClass = simulationStep
    ? simulationStep === 'EXECUTE'
      ? 'choice-retry'
    : simulationStep === 'FAILURE_DETECTED'
      ? 'choice-inspect'
      : ''
    : 'choice-retry'

  /* station classifications */
  const isUnsafe = simulationUnsafe
  const isVerified = simulationVerified

  const stations = simulation
    ? ['DEMAND', 'GOVERN', 'EXECUTE', 'FAILURE_DETECTED', 'ISOLATE', 'RECOVER', 'VERIFY', 'OUTCOME_VERIFIED']
    : failure
    ? ['DEMAND', 'GOVERN', 'EXECUTE', 'FAILURE', 'RECOVER', 'VERIFY', 'OUTCOME']
    : ['DEMAND', 'GOVERN', 'EXECUTE', 'VERIFY', 'OUTCOME']

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
            aria-pressed={!failure && !simulation}
            className={!failure && !simulation ? 'is-active' : ''}
            onClick={() => setMode('steady')}
          >
            Steady
          </button>
          <button
            type="button"
            aria-pressed={failure}
            className={
              failure
                ? 'is-active is-alert'
                : simulation
                  ? ''
                  : ''
            }
            onClick={() => setMode('failure')}
          >
            Failure
          </button>
          {simulation && (
            <button
              type="button"
              aria-pressed="false"
              className="simulation-btn"
              onClick={() => setMode('steady')}
            >
              Reset
            </button>
          )}
        </div>
        {simulation && (
          <p className="simulation-label">
            Z / LAB SYNTHETIC SIMULATION — client-side only; not production evidence
          </p>
        )}
      </div>
      {simulation && (
        <div className="simulation-controls">
          <p className="simulation-instruction">
            {choiceLabel}:{" "}
            {STEP_MEANING[simulationStep as FailureStep]}
          </p>
          <div className="simulation-choice">
            <button
              type="button"
              className={choiceClass}
              onClick={() => setMode('steady')}
            >
              INSPECT FIRST
            </button>
            <button
              type="button"
              className="choice-retry"
              onClick={() => setMode('failure')}
            >
              RETRY
            </button>
          </div>
        </div>
      )}
      <ol className={simulation ? 'rail rail-simulation' : failure ? 'rail rail-failure' : 'rail'}>
        <span className="rail-pulse" aria-hidden="true" />
        {stations.map((station, i) => {
          const _isLast = i === stations.length - 1
          const alert =
            station === 'FAILURE_DETECTED' || station === 'FAILURE'
          const recovering =
            station === 'RECOVER' || station === 'OUTCOME_VERIFIED'

          return (
            <li
              key={station}
              className={[
                'station',
                alert ? 'station-alert' : '',
                recovering ? 'station-recovering' : '',
                isUnsafe ? 'station-unsafe' : '',
                isVerified ? 'station-verified' : '',
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
                  isUnsafe ? 'chip-unsafe' : '',
                  isVerified ? 'chip-verified' : '',
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
          : simulation
          ? 'Synthetic failure simulation: EXECUTE to FAILURE DETECTED to ISOLATE to RECOVER to VERIFY to OUTCOME VERIFIED. Client-side only. Z/LAB.'
          : 'Nominal path: demand is governed before execution, and every outcome passes verification.'}
      </p>
    </figure>
  )
}
