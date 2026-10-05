import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, INTERNAL_DISCLOSURE, REVIEW_MAILTO } from '../site'

const NAV = [
  { to: '/#capabilities', label: 'Capabilities' },
  { to: '/recovery-resilience', label: 'Recovery' },
  { to: '/proof/production-rescue', label: 'Evidence' },
  { to: '/#how-we-work', label: 'How We Work' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="ZUHAYR SYSTEMS — home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            Z
          </span>
          <span className="brand-word">ZUHAYR&nbsp;SYSTEMS</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="menu-icon">
            <i />
            <i />
            <i />
          </span>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-nav"
          className={open ? 'site-nav open' : 'site-nav'}
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            to="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">ZUHAYR SYSTEMS</p>
          <p className="footer-note">
            Engineering brand of PT ZUHAYR SYSTEM TEKNOLOGI
            <br />
            Indonesia
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-heading">Explore</p>
          <ul className="footer-list">
            <li>
              <Link to="/saas-production-rescue">Production rescue</Link>
            </li>
            <li>
              <Link to="/recovery-resilience">Recovery &amp; resilience</Link>
            </li>
            <li>
              <Link to="/proof/production-rescue">Proof</Link>
            </li>
            <li>
              <Link to="/production-reliability-review">
                Reliability review
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="footer-heading">Contact</p>
          <p className="footer-note">
            <a href={REVIEW_MAILTO}>{CONTACT_EMAIL}</a>
          </p>
          <p className="footer-note small">
            &copy; 2026 PT ZUHAYR SYSTEM TEKNOLOGI
          </p>
        </div>
      </div>
    </footer>
  )
}

export function PageHero({
  eyebrow,
  titleId,
  title,
  lede,
  children,
}: {
  eyebrow: string
  titleId: string
  title: ReactNode
  lede: string
  children?: ReactNode
}) {
  return (
    <section className="page-hero" aria-labelledby={titleId}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p className="lede">{lede}</p>
        {children && <div className="actions">{children}</div>}
      </div>
    </section>
  )
}

export function CtaBand({
  title,
  note,
  mailto,
  buttonLabel,
}: {
  title: string
  note: string
  mailto: string
  buttonLabel: string
}) {
  return (
    <section className="section cta-band" aria-label={title}>
      <div className="container cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{note}</p>
        </div>
        <div className="cta-band-action">
          <a className="btn btn-large" href={mailto}>
            {buttonLabel}
          </a>
          <p className="engage-mail">{CONTACT_EMAIL}</p>
        </div>
      </div>
    </section>
  )
}

export function Disclosure({ children }: { children?: ReactNode }) {
  return (
    <p className="boundary disclosure">
      {children ?? INTERNAL_DISCLOSURE}
    </p>
  )
}
