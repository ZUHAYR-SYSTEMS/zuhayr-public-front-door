# G4.1 VISUAL FOUNDATION — EVIDENCE RECORD

Date (UTC): 2026-10-05. Scope: visual foundation only (system, header, hero,
lifecycle viz, signature, responsive/motion). No evidence rewrite, no new routes,
no deployment/DNS/Cloudflare changes. Baseline: 76ace92, clean tree, 0/0.

## Implementation

- Tokens (`src/index.css`): added `--amber` (recovering), `--alert` (blocked),
  `--mono` stack. State color never carries meaning alone — every state has a text chip.
- Header (`src/components/layout.tsx`): IA → Capabilities (/#capabilities),
  Recovery (/recovery-resilience), Evidence (/proof/production-rescue),
  How We Work (/#how-we-work), Contact CTA (/#contact). Company omitted: no
  destination exists yet; corporate identity stays in footer + JSON-LD.
- Hero (`src/pages/Home.tsx`): exact 3-line headline, concise buyer sub-copy,
  primary CTA "Discuss a production problem" → /production-reliability-review,
  secondary "Explore how we work" → /#how-we-work. Two-column hero grid with viz.
- Lifecycle (`src/components/lifecycle.tsx`): station-rail viz, nominal 5 stations
  vs failure 7 stations via Steady/Failure toggle (aria-pressed). Pulse is
  decorative-only; full meaning static. SVG separators, zero Unicode arrows in
  source (enforced by smoke test). Caption renamed off "LIVE SYSTEM" to avoid
  implying real-time data.
- Signature: reusable `Signature` component (mono, SVG chevrons), hero placement.
- Motion: single restrained pulse; `prefers-reduced-motion` kills all animation
  (verified: computed animation-name == none, stations intact).
- Responsive: hero stacks ≤900px; viz/toggle verified at 390px; zero overflow both.

## Validation

- `npm run build` PASS (35 modules; css 16.5 kB / js 313 kB, no new deps).
- `npm run lint` PASS (oxlint clean, including new files).
- `npm run test:smoke` PASS (14 checks: hero/CTA/viz/signature/disclosure/contact/
  routes in bundle, no Unicode arrows repo-wide, _redirects rule, 7-route sitemap).
  New script `tests/smoke.mjs` wired as `test:smoke`. e2e NOT_RUNNABLE (no suite).
- Headless Chromium QA (18 checks) PASS: desktop + mobile + reduced-motion +
  direct route; toggle steady/failure swaps; keyboard focus visible; zero console
  and page errors; screenshots inspected (desktop + mobile first viewports).
- Public-safety: secret/topology scan CLEAN (src/public/dist); claim scan CLEAN
  (no live-data/real-time/guarantee/SLA/uptime/API-SDK-MCP language); all Link
  targets resolve to real routes; `git diff --check` PASS.
- Truth preserved: disclosures (CL-18 ×3), CL-21 boundaries, facts, numbers, mailto
  templates untouched; metric arrows reworded to "to" (render safety, same numbers).

## Defects found + fixed during pass

1. TS generic error in meta.ts helper (link vs meta element) — fixed with generic.
2. Smoke script Windows path bugs (fileURLToPath) — fixed.
3. Batch-edit BOM insertion (7 files) — stripped, diffs verified minimal.
4. "LIVE SYSTEM" caption implying live data — renamed "GOVERNED LIFECYCLE / TWO PATHS".
5. Unicode arrows (link suffixes, CSS marker, comments, metrics) — converted to
   › / SVG / "to" wording; enforced by smoke test.
