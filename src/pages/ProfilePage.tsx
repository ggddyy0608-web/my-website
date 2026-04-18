import { motion } from 'framer-motion'
import profileImage from '../assets/profile_image.JPG'

const education = [
  { degree: '박사과정', school: '청주대학교 대학원', major: '물리치료학' },
  { degree: '석사', school: '청주대학교 대학원', major: '물리치료학' },
  { degree: '학사', school: '청주대학교', major: '물리치료학과' },
]

const career = [
  { org: '중앙대학교병원', dept: '재활치료실' },
  { org: '충주 위담통합병원', dept: '운동치료실' },
  { org: '트레보 재활운동센터', dept: '' },
]

const certificates = [
  '물리치료사 면허',
  '중추신경계재활발달치료',
  'BLS instructor (심폐소생)',
  '스포츠 마사지 1급',
  '스포츠 테이핑 1급',
  '노인스포츠지도사 1급',
  '고유신경근촉진법학회 정회원',
  '한국보바스협회 정회원',
  '대한메이틀랜드 학회 정회원',
]

export function ProfilePage() {
  return (
    <div>

      {/* ── 히어로 ── */}
      <section className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-8 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              물리치료사 출신 운동지도사
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4">강동윤</h1>
            <div className="w-14 h-1 bg-amber-400 mb-15" />
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              물리치료학 전공 박사과정 · 재활 전문 운동지도사<br />
              신체 기능 회복과 건강한 삶을 위한 맞춤형 운동 프로그램 제공
            </p>
          </motion.div>

          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-64 h-80 rounded-2xl border-2 border-amber-400 overflow-hidden">
              <img src={profileImage} alt="강동윤" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 학력 + 경력 ── */}
      <section className="max-w-5xl mx-auto px-8 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-400 px-3 py-1 rounded-sm">
                <span className="text-black font-black text-sm tracking-wider">학 력</span>
              </div>
              <span className="text-zinc-600 text-sm">Education</span>
            </div>
            <div>
              {education.map((item, i) => (
                <div key={i} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                    {i < education.length - 1 && <div className="w-px flex-1 bg-zinc-800 mt-1" />}
                  </div>
                  <div>
                    <p className="text-xs text-amber-400 font-bold mb-1">{item.degree}</p>
                    <p className="text-zinc-100 font-semibold">{item.school}</p>
                    <p className="text-zinc-500 text-sm">{item.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-400 px-3 py-1 rounded-sm">
                <span className="text-black font-black text-sm tracking-wider">경 력</span>
              </div>
              <span className="text-zinc-600 text-sm">Career</span>
            </div>
            <div>
              {career.map((item, i) => (
                <div key={i} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 shrink-0 mt-1" />
                    {i < career.length - 1 && <div className="w-px flex-1 bg-zinc-800 mt-1" />}
                  </div>
                  <div>
                    <p className="text-zinc-100 font-semibold">{item.org}</p>
                    {item.dept && <p className="text-zinc-500 text-sm">{item.dept}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 자격증 ── */}
      <section className="border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-8 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-400 px-3 py-1 rounded-sm">
                <span className="text-black font-black text-sm tracking-wider">자격증</span>
              </div>
              <span className="text-zinc-600 text-sm">Certificates</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {certificates.map((cert, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-zinc-900 border border-zinc-700 hover:border-amber-400/50 text-zinc-300 text-sm px-4 py-2 rounded-full transition-colors"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 연락처 CTA ── */}
      <section className="border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-8 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p className="text-zinc-400 text-sm mb-2">운동과 치료, 함께 시작하세요.</p>
              <h3 className="text-2xl font-black text-zinc-100">반반운동센터 블로그에서<br />더 많은 이야기를 만나보세요.</h3>
            </div>
            <a
              href="https://blog.naver.com/banbanex"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-amber-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-amber-300 transition-colors text-sm"
            >
              네이버 블로그 보기 →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
