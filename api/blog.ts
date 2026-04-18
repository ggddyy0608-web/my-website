import type { VercelRequest, VercelResponse } from '@vercel/node'
import { XMLParser } from 'fast-xml-parser'

const RSS_URL = 'https://rss.blog.naver.com/banbanex.xml'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=1800')

  try {
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS reader)',
      },
    })

    if (!response.ok) throw new Error(`RSS fetch failed: ${response.status}`)

    const xml = await response.text()
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
    const parsed = parser.parse(xml)

    const channel = parsed?.rss?.channel
    if (!channel) throw new Error('Invalid RSS structure')

    const rawItems = Array.isArray(channel.item) ? channel.item : [channel.item].filter(Boolean)

    const items = rawItems.map((item: Record<string, unknown>) => {
      const description = String(item.description ?? '')
      const thumbnail = extractThumbnail(description)

      return {
        title: String(item.title ?? '').trim(),
        link: String(item.link ?? ''),
        pubDate: String(item.pubDate ?? ''),
        description: stripHtml(description).slice(0, 200),
        thumbnail,
      }
    })

    res.status(200).json({ status: 'ok', items })
  } catch (err) {
    res.status(500).json({ status: 'error', message: String(err) })
  }
}

function extractThumbnail(html: string): string {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/)
  return match?.[1] ?? ''
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}
