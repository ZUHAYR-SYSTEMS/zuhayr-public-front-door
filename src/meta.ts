import { useEffect } from 'react'
import { SITE_URL, type PageMeta } from './site'

const MANAGED = 'data-managed-meta'

function upsertMeta<T extends Element>(selector: string, create: () => T) {
  let el = document.head.querySelector<T>(selector)
  if (!el) {
    el = create()
    el.setAttribute(MANAGED, 'true')
    document.head.appendChild(el)
  }
  return el
}

/** Sets per-route title, description, canonical, and OG/Twitter basics. No new deps. */
export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title
    const url = `${SITE_URL}${meta.path}`

    upsertMeta('meta[name="description"]', () => {
      const el = document.createElement('meta')
      el.setAttribute('name', 'description')
      return el
    }).setAttribute('content', meta.description)

    upsertMeta('link[rel="canonical"]', () => {
      const el = document.createElement('link')
      el.setAttribute('rel', 'canonical')
      return el
    }).setAttribute('href', url)

    const ogTitle = upsertMeta('meta[property="og:title"]', () => {
      const el = document.createElement('meta')
      el.setAttribute('property', 'og:title')
      return el
    })
    ogTitle.setAttribute('content', meta.title)

    const ogDesc = upsertMeta('meta[property="og:description"]', () => {
      const el = document.createElement('meta')
      el.setAttribute('property', 'og:description')
      return el
    })
    ogDesc.setAttribute('content', meta.description)

    const ogUrl = upsertMeta('meta[property="og:url"]', () => {
      const el = document.createElement('meta')
      el.setAttribute('property', 'og:url')
      return el
    })
    ogUrl.setAttribute('content', url)
  }, [meta.title, meta.description, meta.path])
}
