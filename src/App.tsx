export default function App() { return (    <main>      <section className="hero">        <p className="eyebrow">ZUHAYR SYSTEMS / ENGINEERING</p>

        <h1>
          Production systems
          that can prove they work.
        </h1>

        <p className="lede">
          We help teams rescue fragile production systems, recover safely from failure,
          and keep critical business state correct — with evidence left behind.
        </p>

        <div className="actions">
          <a href="#engagement">Start a Production Reliability Review</a>
          <a href="#capabilities" className="secondary">Explore capabilities</a>
        </div>

        <div className="system-line" aria-label="ZUHAYR engineering lifecycle: build, break, recover, prove">
          <span>BUILD</span>
          <b aria-hidden="true">→</b>
          <span>BREAK</span>
          <b aria-hidden="true">→</b>
          <span>RECOVER</span>
          <b aria-hidden="true">→</b>
          <span>PROVE</span>
        </div>
      </section>

      <section id="capabilities" className="placeholder">
        <p className="eyebrow">CAPABILITIES</p>
        <h2>What we can help with</h2>
        <p className="lede small">Four problems we solve for teams running real systems.</p>
        <p className="sublede">
          <strong>1. Production System Rescue & Reliability:</strong> Your system looks running but is unreliable or fragile. We diagnose read-only first, find the smallest root cause, make minimal reversible changes, verify recovery, and leave evidence behind.
        </p>
        <p className="sublede">
          <strong>2. Recovery & Resilience Assurance:</strong> You have backups but nobody knows if they will restore. We verify recovery through controlled isolated restore exercises, with integrity checks, reconciliation, and evidence. Current recovery proof is controlled internal lab / governed recovery witness work. It is not client production recovery evidence.
        </p>
        <p className="sublede">
          <strong>3. Enterprise / API Integration & Reconciliation:</strong> Retries, webhooks, and partial failures duplicate, lose, or disagree about work. We make retries safe, processing idempotent, and records reconcile, with explicit failure handling so authoritative records stay correct.
        </p>
        <p className="sublede">
          <strong>4. Governed Automation:</strong> You want automation that does useful work without running out of control. We build bounded execution with clear approval and authority limits, observable outcomes, defined failure states, and evidence.
        </p>
      </section>

      <section id="case-study" className="placeholder">
        <p className="eyebrow">CASE STUDY</p>
        <h2>What a rescue looks like in practice</h2>
        <p className="sublede">
          <strong>Problem:</strong> A containerized production system appeared healthy — every container reported “running” — yet was completely inert: the database schema had never been initialized, no tables existed, the background worker was stuck in a crash loop with 922 restarts, and the readiness probe correctly reported “not ready.”
        </p>
        <p className="sublede">
          <strong>Root cause:</strong> Two missing database-connection keys in a single environment file. The migration runner fell back to a loopback default that could never reach the database — schema, image, migration, and topology were all correct; the two keys were the entire incident.
        </p>
        <p className="sublede">
          <strong>Intervention:</strong> Configuration-only fix — the two keys were added, with the prior file preserved first for one-command rollback. No code, image, or migration script was touched, and read-only reachability was proven before the real migration ran.
        </p>
        <p className="sublede">
          <strong>Verified outcome:</strong> Migration applied cleanly on the first attempt; worker went from crash loop to zero restarts with a clean error scan; least-privilege verified at the database level; the running containers were verified to be the exact released artifact; and an independent read-only verifier passed. A hash-verified backup was restored into a fully isolated database — the first attempt failed visibly on missing cluster roles, the second matched the live structure exactly — then the isolated target was destroyed with production verified unchanged.
        </p>
        <table>
          <thead>
            <tr>
              <th className="tablehdr">Dimension</th>
              <th className="tablehdr">Before</th>
              <th className="tablehdr">After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tablerow">Schema</td>
              <td className="tablerow">never initialized</td>
              <td className="tablerow">revision pinned, applied clean first attempt</td>
            </tr>
            <tr>
              <td className="tablerow">Public tables</td>
              <td className="tablerow">0</td>
              <td className="tablerow">28, queue outbox present</td>
            </tr>
            <tr>
              <td className="tablerow">Worker</td>
              <td className="tablerow">crash loop, 922 restarts</td>
              <td className="tablerow">running, 0 restarts, clean error scan</td>
            </tr>
            <tr>
              <td className="tablerow">Health probe</td>
              <td className="tablerow">not ready</td>
              <td className="tablerow">ready for owned components</td>
            </tr>
            <tr>
              <td className="tablerow">Privileges</td>
              <td className="tablerow">unverified</td>
              <td className="tablerow">least-privilege roles, forced row-level security</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="how-we-work" className="placeholder">
        <p className="eyebrow">HOW WE WORK</p>
        <h2>Safer production change, from start to finish</h2>
        <ol className="stages">
          <li>
            <strong>Diagnose.</strong> Read-only first — establish what is actually failing before proposing any change.
          </li>
          <li>
            <strong>Change safely.</strong> Minimal, reversible changes, with pre-change state preserved for one-command rollback.
          </li>
          <li>
            <strong>Recover & reconcile.</strong> Prove recovery in isolation — restore rehearsals with integrity checks and reconciliation — before claiming it.
          </li>
          <li>
            <strong>Leave evidence.</strong> Monitoring plus a hashed evidence chain: every artifact checksummed, every failed attempt preserved and classified.
          </li>
        </ol>
      </section>

      <section id="engagement" className="placeholder">
        <p className="eyebrow">ENGAGEMENT</p>
        <h2>Production Reliability Review</h2>
        <p className="lede">
          For teams running containerized systems that are degraded, “running but not working,” or frozen because they feel unsafe to touch. We diagnose read-only, change minimally and reversibly, prove recovery in isolation, and leave monitoring plus evidence behind.
        </p>
        <p className="lede small">
          We begin read-only; deeper access is agreed only if the findings call for it. Explicitly out of scope: SLA-backed operations, greenfield builds, public-launch readiness, payment-provider integrations, and external identity integrations.
        </p>
        <p className="disclosure">
          Current public proof is controlled internal production/lab evidence — not client engagement evidence. No client data is involved. (CL-18)
        </p>
        <div className="actions">
          <a href="mailto:admin@zuhayrsystems.com">Start a Production Reliability Review — admin@zuhayrsystems.com</a>
        </div>
      </section>
    </main>
  )
}
