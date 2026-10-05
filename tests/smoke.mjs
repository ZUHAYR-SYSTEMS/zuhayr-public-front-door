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
  'Discuss a production problem', // primary CTA
  'GOVERNED LIFECYCLE', // lifecycle visualization
  'BUILD', 'RECOVER', 'PROVE', // signature
  'not from a client engagement', // disclosure intact
  'INTERNAL VALIDATION', // evidence maturity badge
  'Find your problem', // problem paths
  'The rescue sequence', // method
  'refuses to gamble', // trust bridge
  'No production credentials needed', // engagement
  'admin@zuhayrsystems.com', // contact intact
  '/recovery-resilience', // routes intact
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
  'sitemap lists 7 routes',
  existsSync(join(dist, 'sitemap.xml')) &&
    (readFileSync(join(dist, 'sitemap.xml'), 'utf8').match(/<loc>/g) || []).length === 7,
)

if (failures > 0) {
  console.error(`\n${failures} smoke check(s) failed`)
  process.exit(1)
}
console.log('\nAll G4.1 smoke checks passed')
