import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../assets/profile_bare.png'

const BANBAN_MAP_URL = 'https://map.naver.com/p/entry/place/2014106715'
const HANUIWON_MAP_URL = 'https://map.naver.com/p/entry/place/1066721063'


export function LocationSection() {
  return (
    <>
      {/* ── 반반운동센터 히어로 (화면 꽉 채움) ── */}
      <section className="relative min-h-[calc(100vh-56px)] flex flex-col justify-center overflow-hidden border-b border-zinc-800">

        {/* 배경 사진 */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={profileImage}
            alt=""
            className="absolute right-[14%] bottom-0 h-[88%] w-auto object-contain object-bottom"
            style={{ opacity: 1 }}
          />
          {/* 모바일 전용 어두운 오버레이 */}
          <div className="absolute inset-0 bg-zinc-950/60 md:hidden" />
          {/* 왼쪽 페이드 */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 from-[30%] via-zinc-950/45 via-[48%] to-transparent" />
          {/* 오른쪽 페이드 */}
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 from-[5%] via-zinc-950/35 via-[18%] to-transparent" />
          {/* 상단 페이드 */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent" />
          {/* 하단 페이드 */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative w-full max-w-5xl mx-auto px-8 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                물리치료 기반 1:1 재활 PT
              </span>
              <span className="inline-flex items-center gap-2 bg-zinc-800/60 border border-zinc-700 text-zinc-400 text-xs font-bold px-3 py-1.5 rounded-full">
                한의원 협진으로 더 안전하게
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-zinc-100">
              운동과 치료의<br />
              <span className="text-amber-400">공백을 없애다</span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed max-w-lg mb-10">
              운동지도사 강동윤이 직접 설계·지도하는 재활형 PT 센터.<br />
              통증이 생기거나 치료가 필요한 순간,<br />
              같은 건물 365반반한의원에서 바로 케어받을 수 있습니다.<br />
              <span className="text-zinc-300 font-medium">운동과 치료의 공백을 없앤 반반만의 안전장치입니다.</span>
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BANBAN_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-black font-bold px-6 py-3 rounded-xl text-sm hover:bg-amber-300 transition-colors"
              >
                운동센터 위치 보기
              </a>
              <a
                href="#map-section"
                className="flex items-center gap-2 text-zinc-400 text-sm hover:text-white transition-colors"
              >
                <span className="w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center text-xs">↓</span>
                한의원 협진 알아보기
              </a>
            </div>

            <div className="h-px w-24 bg-zinc-800 mt-8" />

            <Link
              to="/profile"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-amber-400 text-xs transition-colors mt-4 group w-fit"
            >
              강동윤 운동지도사 프로필 보기
              <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
            </Link>
          </motion.div>
        </div>

        {/* 스크롤 유도 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 text-xs"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <span>scroll</span>
          <span>↓</span>
        </motion.div>
      </section>

      {/* ── 위치 섹션 ── */}
      <section id="map-section" className="py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-12">

          {/* 섹션 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Location</p>
            <h3 className="text-3xl font-black text-zinc-100">찾아오시는 길</h3>
            <p className="text-zinc-500 text-sm mt-2">운동센터와 한의원이 같은 건물에 있습니다</p>
          </motion.div>

          {/* 카드 2열 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* 반반운동센터 */}
            <motion.a
              href={BANBAN_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-zinc-900 border border-zinc-700/60 hover:border-amber-400/40 rounded-2xl p-8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full mb-5">
                  운동 · PT
                </span>
                <h4 className="text-2xl font-black text-zinc-100 mb-1">반반운동센터</h4>
                <p className="text-zinc-500 text-sm mb-8">서울 서대문구 · 재활운동 전문 PT</p>
                <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                  <span>네이버 지도에서 보기</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </motion.a>

            {/* 365반반한의원 */}
            <motion.a
              href={HANUIWON_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-zinc-900 border border-zinc-700/60 hover:border-emerald-500/40 rounded-2xl p-8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full mb-5">
                  한의원 · 협진
                </span>
                <h4 className="text-2xl font-black text-zinc-100 mb-1">365반반한의원</h4>
                <p className="text-zinc-500 text-sm mb-8">서울 서대문구 · 한의원</p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <span>네이버 지도에서 보기</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </motion.a>
          </div>

          {/* 같은 건물 안내 배너 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4 flex items-center gap-4"
          >
            <span className="text-amber-400 text-xl shrink-0">📍</span>
            <p className="text-zinc-400 text-sm leading-relaxed">
              두 곳 모두 <span className="text-zinc-200 font-semibold">같은 건물</span>에 위치해 있어,
              운동 중 통증이 생기거나 치료가 필요한 순간 바로 한의원에서 케어받을 수 있습니다.
            </p>
          </motion.div>

        </div>
      </section>

    </>
  )
}
