# Production Continuity Delivery Pack v1

## Delivery lifecycle

DISCOVER
? PRESERVE
? REPRODUCE
? BREAK SAFELY
? DETECT
? RECOVER
? VERIFY
? HARDEN
? ASSURE
? OPERATE
? EVIDENCE
? HANDOFF

## 1. Discover

Understand:

- system topology;
- production symptoms;
- critical paths;
- deployment path;
- dependencies;
- existing monitoring;
- recovery mechanisms;
- business impact.

## 2. Preserve

Before intervention:

- preserve known-good state;
- record repository/deployment state;
- protect unrelated active work;
- identify rollback/recovery options.

## 3. Reproduce

Establish a controlled environment or artifact that can reproduce the relevant
system behavior without unnecessarily risking production.

## 4. Break safely

Exercise bounded failure scenarios against authorized non-production or
otherwise explicitly safe targets.

Never manufacture production damage merely to demonstrate recovery.

## 5. Detect

Verify that monitoring/tests actually detect the injected failure.

A failure that escapes verification is itself a material finding.

## 6. Recover

Restore the system or artifact through the defined recovery path.

## 7. Verify

Do not equate "command succeeded" with recovery.

Verify critical invariants and observable system behavior.

## 8. Harden

Convert discovered blind spots into durable controls:

- tests;
- validation;
- monitoring;
- runbooks;
- reconciliation;
- deployment safeguards.

## 9. Assure

Repeat sufficient verification to establish bounded confidence in the recovery
path.

## 10. Operate

For ongoing engagements, apply an agreed Managed Reliability cadence and
operational boundary.

## 11. Evidence

Preserve defensible evidence while separating:

INTERNAL VALIDATION
from
CLIENT / EXTERNAL EVIDENCE.

## 12. Handoff

Deliver:

- findings;
- changes;
- verification results;
- residual risks;
- recovery procedure;
- operational recommendations;
- evidence boundary;
- next actions.

## Commercial service path

Production Reliability Review
? Rescue
? Stabilize
? Recovery Assurance
? Managed Reliability
