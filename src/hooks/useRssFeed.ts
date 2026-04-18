import { useState, useEffect } from 'react'

export interface RssItem {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail: string
}

interface RssFeedState {
  items: RssItem[]
  loading: boolean
  error: boolean
}

const API_URL = '/api/blog'
const CACHE_KEY = 'rss_cache'
const CACHE_TTL = 1000 * 60 * 10 // 10분

function getCache(): RssItem[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { items, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return items
  } catch {
    return null
  }
}

function setCache(items: RssItem[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ items, ts: Date.now() }))
  } catch {}
}

export function useRssFeed(): RssFeedState {
  const cached = getCache()
  const [state, setState] = useState<RssFeedState>({
    items: cached ?? [],
    loading: cached === null,
    error: false,
  })

  useEffect(() => {
    if (cached !== null) return

    const controller = new AbortController()

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((data) => {
        if (data.status !== 'ok') throw new Error('rss error')
        const items = data.items ?? []
        setCache(items)
        setState({ items, loading: false, error: false })
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setState({ items: [], loading: false, error: true })
      })

    return () => controller.abort()
  }, [])

  return state
}
