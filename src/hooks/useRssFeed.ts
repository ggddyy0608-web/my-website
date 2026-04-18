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

const RSS_URL = 'https://rss.blog.naver.com/banbanex.xml'
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=12`

export function useRssFeed(): RssFeedState {
  const [state, setState] = useState<RssFeedState>({
    items: [],
    loading: true,
    error: false,
  })

  useEffect(() => {
    const controller = new AbortController()

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((data) => {
        if (data.status !== 'ok') throw new Error('rss error')
        setState({ items: data.items ?? [], loading: false, error: false })
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setState({ items: [], loading: false, error: true })
      })

    return () => controller.abort()
  }, [])

  return state
}
