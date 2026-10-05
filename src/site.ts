// Shared public-site constants. Buyer-safe only — no topology, no secrets.

export const REVIEW_MAILTO =
  'mailto:admin@zuhayrsystems.com?subject=Production%20Reliability%20Review&body=What%20system%20is%20it%3F%0AWhat%20is%20failing%3F%0ACurrent%20urgency%3F%0AStack%20%2F%20environment%3F%0AOutcome%20you%20need%3F%0A'

export const RECOVERY_MAILTO =
  'mailto:admin@zuhayrsystems.com?subject=Recovery%20Readiness%20Review&body=System%20%2F%20workload%3F%0ABackup%20mechanism%3F%0AStorage%20%2F%20provider%3F%0AApproximate%20data%20size%3F%0AHas%20a%20restore%20ever%20been%20tested%3F%0ARecovery%20urgency%3F%0AExisting%20RPO%20%2F%20RTO%20target%20(if%20any)%3F%0ADesired%20outcome%3F%0A'

export const CONTACT_EMAIL = 'admin@zuhayrsystems.com'

export const INTERNAL_DISCLOSURE =
  'This proof comes from our own internal production infrastructure — not from a client engagement, and no client data is involved.'

export const SITE_URL = 'https://zuhayrsystems.com'

export interface PageMeta {
  title: string
  description: string
  path: string
}
