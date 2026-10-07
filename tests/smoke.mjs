// G4.1 bounded smoke test: asserts production build output carries the
// visual-foundation essentials and no blocked patterns. Run: npm run test:smoke
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')
let failures = 0

function check(label, cond) {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}`)
  if (!cond) failures += 1
}

const jsFiles = existsSync(join(dist, 'assets'))
  ? readdirSync(join(dist, 'assets')).filter((f) => f.endsWith('.js'))
  : []
check('dist bundle exists', jsFiles.length === 1)
const bundle = jsFiles.length === 1 ? readFileSync(join(dist, 'assets', jsFiles[0]), 'utf8') : ''

for (const s of [
  'that can prove', // hero headline
  'Explore ZUHAYR', // primary CTA
  'GOVERNED LIFECYCLE', // lifecycle visualization
  'BUILD', 'RECOVER', 'PROVE', // signature
  'not from a client engagement', // disclosure intact
  'INTERNAL VALIDATION', // evidence maturity badge
  'WHAT BRINGS YOU HERE', // problem navigator heading
  'The rescue sequence', // method
  'refuses to gamble', // trust bridge
  'No production credentials needed', // engagement
  'MATURITY', // evidence object
  'Controlled recovery witness', // evidence source/type
  'Target destroyed; production unchanged', // rehearsal fact
  'not disaster recovery with guaranteed times', // limitation visible
  'admin@zuhayrsystems.com', // contact intact
  '/recovery-resilience', // routes intact
  'Application & Business Recovery Assurance', // Customer #0 evidence title
  'Customer #0 controlled benchmark', // Customer #0 disclosure
  'Measured reconciliation benchmark', // Customer #0 evidence type
  '30 admitted', // Customer #0 reconciliation metric
  '30 reconciled', // Customer #0 reconciliation metric
  '0 unresolved', // Customer #0 reconciliation metric
  '0 lost', // Customer #0 reconciliation metric
  'Lead intake that validates and routes', // Governed Automation evidence title
  'Simulated automation lab using synthetic data', // lab disclosure
  'Reproducible local verification (n8n 2.36.9)', // automation evidence type
  '3/3 scenarios via verification script', // automation verified result
  '/proof/lead-intake-automation', // automation proof route
  'not a production deployment', // lab boundary
]) {
  check(`bundle contains "${s}"`, bundle.includes(s))
}

// No fragile Unicode arrows anywhere in source (SVG/CSS/ASCII only)
import { readdirSync as listDir } from 'node:fs'
function walk(dir, out = []) {
  for (const e of listDir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (/\.(tsx|ts|css)$/.test(e.name)) out.push(p)
  }
  return out
}
let arrowFound = false
for (const f of walk(join(root, 'src'))) {
  const text = readFileSync(f, 'utf8')
  const m = text.match(/[→←↑↓⇒⇄]/)
  if (m) {
    arrowFound = true
    console.log(`FAIL  Unicode arrow ${m[0]} in ${f.slice(root.length + 1)}`)
  }
}
check('no Unicode arrows in source', !arrowFound)

// SPA fallback + sitemap intact
check(
  '_redirects SPA rule present',
  existsSync(join(dist, '_redirects')) &&
    readFileSync(join(dist, '_redirects'), 'utf8').includes('/* /index.html 200'),
)
check(
  'sitemap lists 8 routes',
  existsSync(join(dist, 'sitemap.xml')) &&
    (readFileSync(join(dist, 'sitemap.xml'), 'utf8').match(/<loc>/g) || []).length === 8,
)

// Recovery assurance hardening derived from Customer #0 controlled failure tests.
// Generated sitemap must preserve the governed source exactly.
const sourceSitemapPath = join(root, 'public', 'sitemap.xml')
const productionSitemapPath = join(dist, 'sitemap.xml')
check(
  'production sitemap matches governed source',
  existsSync(sourceSitemapPath) &&
    existsSync(productionSitemapPath) &&
    readFileSync(productionSitemapPath, 'utf8') ===
      readFileSync(sourceSitemapPath, 'utf8'),
)

// Generated production shell must retain the React mount point.
const productionHtmlPath = join(dist, 'index.html')
check(
  'production artifact contains React root mount',
  existsSync(productionHtmlPath) &&
    readFileSync(productionHtmlPath, 'utf8').includes('<div id="root"></div>'),
)
if (failures > 0) {
  console.error(`\n${failures} smoke check(s) failed`)
  process.exit(1)
}
console.log('\nAll smoke checks passed')
