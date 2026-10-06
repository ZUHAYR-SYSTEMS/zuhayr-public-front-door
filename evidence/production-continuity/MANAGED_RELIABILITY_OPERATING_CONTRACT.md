# Managed Reliability — Operating Contract

## Purpose

Managed Reliability begins after rescue and stabilization.

Its purpose is not merely to keep a service running.

Its purpose is to maintain confidence that the system remains observable,
verifiable, recoverable, and operationally understood.

## Operating loop

OBSERVE
? VERIFY
? DETECT
? TRIAGE
? RECOVER
? VERIFY RECOVERY
? HARDEN
? EVIDENCE
? CONTINUE

## Core controls

### Change verification

After meaningful production changes:

- build/release verification;
- critical-path smoke checks;
- artifact/integrity checks where applicable;
- live surface verification;
- evidence capture.

### Operational health

Periodically verify appropriate signals such as:

- critical endpoints;
- deployment state;
- dependency health;
- background processing where applicable;
- integrity/reconciliation controls;
- backup/recovery readiness where applicable.

### Recovery assurance

Recovery capability must be tested rather than assumed.

Testing must be bounded and must not manufacture an unnecessary production
outage merely to create evidence.

### Incident handling

When a meaningful failure occurs:

DETECT
? CONTAIN
? PRESERVE
? DIAGNOSE
? RECOVER
? VERIFY
? HARDEN
? DOCUMENT

### Evidence

Record material findings, recovery results, residual risks, and verification
improvements.

## Commercial boundary

Managed Reliability is operational engineering support.

It must not be represented as insurance, an uptime guarantee, an SLA, or
guaranteed disaster recovery unless those obligations are explicitly scoped,
contracted, operationally supported, and evidenced.
