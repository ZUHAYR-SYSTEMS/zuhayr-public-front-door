export default function App() { return (    <main>      <section className="hero">        <p className="eyebrow">ZUHAYR SYSTEMS / ENGINEERING</p>

        <h1>
          Production systems
          that can prove they work.
        </h1>

        <p className="lede">
          We diagnose read-only, fix minimally and reversibly, prove recovery in isolation, and leave monitoring plus evidence behind.
        </p>

        <div className="actions">
          <a href="#capabilities">Explore capabilities</a>
          <a href="#engagement" className="secondary">Production Reliability Review</a>
        </div>

        <div className="system-line" aria-label="ZUHAYR engineering lifecycle">
          <span>BUILD</span>
          <b>?</b>
          <span>BREAK</span>
          <b>?</b>
          <span>RECOVER</span>
          <b>?</b>
          <span>PROVE</span>
        </div>
      </section>

      <section id="capabilities" className="placeholder">
        <p className="eyebrow">CAPABILITY SURFACE</p>
        <h2>Production System Rescue & Reliability</h2>
        <p className="lede small">Taking an existing containerized SaaS from fragile to operable</p>
      </section>

      <section id="case-study" className="placeholder">
        <p className="eyebrow">CASE STUDY</p>
        <h2>Production System Rescue & Reliability</h2>
        <p className="lede">
          A containerized production system appeared healthy from the outside - all containers reported "running" - yet was completely inert inside. The database schema had never been initialized, no tables existed, and the background worker was stuck in a crash loop with 922 restarts. The aggregate readiness probe correctly reported "not ready": the system could not do its job.
        </p>
        <p className="sublede">
          <strong>What We Found:</strong> Root cause was two missing database-connection configuration keys in a single environment file. The migration runner fell back to a loopback default that could never reach the database on the container network - schema, migration, topology, and image were all correct; the two missing keys were the entire incident.
        </p>
        <p className="sublede">
          <strong>What We Changed:</strong> Configuration-only fix - the two missing keys were added to the production environment file. The prior file was preserved first so rollback was one command away. No code, image, or migration script was touched. Read-only reachability was proven before the real migration ran.
        </p>
        <p className="sublede">
          <strong>How We Verified It:</strong> The migration applied cleanly on the first attempt after the fix. The background worker went from a crash loop to zero restarts with a clean error scan. At the database level, least-privilege was verified: non-superuser roles with no escalation rights, row-level security forced on every application table, and the worker proved unable to touch business tables. The running containers were verified to be the exact released artifact - same image, not merely the same tag - and an independent read-only verifier passed against the recovered system.
        </p>
        <p className="sublede">
          <strong>Recovery & Durability:</strong> A fresh backup, hash-verified and integrity-checked, was restored into a fully isolated database (no network, no published ports). The first attempt failed visibly on missing cluster roles; the second attempt, after canonical credential-free role bootstrap, matched the live system structure exactly. The isolated target was then destroyed and production was verified unchanged. A sanitized recovery runbook was placed in independent private object storage with verified upload, independent read-back, and exact hash match.
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
              <td className="tablerow">Migration</td>
              <td className="tablerow">failed closed, zero partial state</td>
              <td className="tablerow">PASS single attempt</td>
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
        <ul>
          <li>Diagnose read-only before making any change</li>
          <li>Change minimally and reversibly; preserve pre-change state for one-command rollback</li>
          <li>Prove read-only reachability before committing the real migration</li>
          <li>Migration applied cleanly on the first attempt after remediation</li>
          <li>Prove recoverability with isolated restore rehearsals before claiming it</li>
          <li>Deploy and observe scheduled operations layer; caught and fixed its own defect on day one</li>
          <li>Close off-node durability with verified independent storage and independent read-back</li>
          <li>Deliver a complete hashed evidence chain: every artifact checksummed, every failed attempt preserved and classified</li>
        </ul>
      </section>

      <section id="outcome" className="placeholder">
        <p className="eyebrow">WHAT THIS DEMONSTRATES</p>
        <h2>Credible, verified recovery</h2>
        <ul>
          <li><strong>Safer production change:</strong> diagnose read-only first, change minimally and reversibly, prove recovery in isolation before claiming it</li>
          <li><strong>Recoverability:</strong> proved restore in isolation before claiming it; two-run rehearsal pattern preserved in the record</li>
          <li><strong>Reduced ambiguity during incidents:</strong> fail-closed diagnostics name the exact problem rather than leaving it vague</li>
          <li><strong>Repeatable verification:</strong> independent read-only verifier pass, operations test suite green, observable monitoring discipline</li>
          <li><strong>Durable recovery evidence:</strong> hash-verified independent storage with independent read-back; every artifact checksummed</li>
          <li><strong>Cleaner operational handoff:</strong> complete evidence chain a buyer or auditor can re-verify independently</li>
        </ul>
      </section>

      <section id="engagement" className="placeholder">
        <p className="eyebrow">ENGAGEMENT FIT</p>
        <h2>Production Reliability Review</h2>
        <p className="lede">
          This capability is for existing containerized SaaS that is degraded, "running but not working," or at a standstill where teams fear touching it. We diagnose read-only, fix minimally and reversibly, prove recovery in isolation, and leave monitoring plus evidence behind. Explicitly not offered: SLA-backed operations, greenfield builds at scale, public-launch readiness, payment-provider integrations, or external identity integrations.
        </p>
      </section>

      <p className="disclosure">
        this proof comes from rescuing and operating our own production infrastructure - not from a client engagement. No client data is involved. (CL-18)
      </p>

      <section id="contact" className="placeholder">
        <p className="eyebrow">ENGAGE</p>
        <h2>Bring us the system that needs to keep working.</h2>
        <p className="lede small">
          A Production Reliability Review starts with a read-only diagnosis. We will never claim a service level not yet governed, and we never expose private evidence in our analysis.
        </p>
      </section>
    </main>
  )
}