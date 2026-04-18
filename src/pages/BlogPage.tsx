import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRssFeed, type RssItem } from '../hooks/useRssFeed'

const PER_PAGE = 9

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

function BlogCard({ item, index }: { item: RssItem; index: number }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-400/60 transition-colors"
    >
      <div className="h-44 bg-zinc-800 overflow-hidden">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
            이미지 없음
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-xs text-amber-400">{formatDate(item.pubDate)}</p>
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3 mt-auto">
          {stripHtml(item.description)}
        </p>
      </div>
    </motion.a>
  )
}

function SkeletonCard() {
  return (
    <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden animate-pulse">
      <div className="h-44 bg-zinc-800" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-3 w-24 bg-zinc-700 rounded" />
        <div className="h-4 w-full bg-zinc-700 rounded" />
        <div className="h-4 w-3/4 bg-zinc-700 rounded" />
        <div className="h-3 w-full bg-zinc-800 rounded mt-1" />
        <div className="h-3 w-5/6 bg-zinc-800 rounded" />
      </div>
    </div>
  )
}

function ErrorFallback() {
  return (
    <div className="col-span-full flex flex-col items-center gap-4 py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-3xl">
        ⚠️
      </div>
      <p className="text-zinc-400 text-sm">
        블로그 포스트를 불러오지 못했어요.<br />
        잠시 후 다시 시도하거나 블로그를 직접 방문해 주세요.
      </p>
      <a
        href="https://blog.naver.com/banbanex"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-400 text-black font-semibold px-5 py-2 rounded-lg text-sm hover:bg-amber-300 transition-colors"
      >
        네이버 블로그 방문
      </a>
    </div>
  )
}

function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number
  totalPages: number
  onChange: (p: number) => void
}) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        ← 이전
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${
            p === page
              ? 'bg-amber-400 text-black'
              : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        다음 →
      </button>
    </div>
  )
}

export function BlogPage() {
  const { items, loading, error } = useRssFeed()
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(items.length / PER_PAGE)
  const pageItems = items.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function handlePageChange(p: number) {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pb-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">블로그</h2>
        <p className="text-zinc-500 text-sm">
          네이버 블로그에서 가져온 최신 포스트
          {!loading && !error && items.length > 0 && (
            <span className="ml-2 text-zinc-600">· 총 {items.length}개</span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading && Array.from({ length: PER_PAGE }).map((_, i) => <SkeletonCard key={i} />)}
        {error && <ErrorFallback />}
        {!loading && !error && pageItems.map((item, i) => (
          <BlogCard key={item.link} item={item} index={i} />
        ))}
        {!loading && !error && items.length === 0 && (
          <p className="col-span-full text-zinc-500 text-sm text-center py-20">
            포스트가 없습니다.
          </p>
        )}
      </div>

      {!loading && !error && (
        <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
      )}
    </div>
  )
}
