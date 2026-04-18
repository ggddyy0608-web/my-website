import { motion } from 'framer-motion'
import profileImage from '../assets/profile_image.JPG'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const education = [
  '청주대학교 대학원 물리치료학 박사과정',
  '청주대학교 대학원 물리치료학 석사',
  '청주대학교 물리치료학과',
]

const career = [
  '중앙대학교병원 재활치료실',
  '충주 위담통합병원 운동치료실',
  '트레보 재활운동센터',
]

const certificates = [
  '물리치료사 면허',
  '중추신경계재활발달치료 자격',
  'BLS instructor (심폐소생)',
  '스포츠 마사지 1급',
  '스포츠 테이핑 1급',
  '노인스포츠지도사 1급',
  '고유신경근촉진법학회 정회원',
  '한국보바스협회 정회원',
  '대한메이틀랜드 학회 정회원',
]

function SectionTitle({ ko, en }: { ko: string; en: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-amber-400 px-4 py-1.5 rounded-sm whitespace-nowrap">
        <span className="text-black font-bold text-xl tracking-wider">{ko}</span>
      </div>
      <span className="text-amber-400 font-semibold text-lg">{en}</span>
    </div>
  )
}

export function ProfilePage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-400 text-lg font-medium mb-2">운동지도사</p>
          <h1 className="text-6xl font-bold tracking-tight mb-4">강 동 윤</h1>
          <div className="w-16 h-1 bg-amber-400 mb-6" />
          <p className="text-zinc-400 text-base leading-relaxed">
            물리치료학 전공 박사과정 · 재활 전문 운동지도사<br />
            신체 기능 회복과 건강한 삶을 위한 맞춤형 운동 프로그램 제공
          </p>
        </motion.div>

        <motion.div
          className="w-52 h-64 rounded-lg border-2 border-amber-400 overflow-hidden shrink-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={profileImage} alt="강동윤" className="w-full h-full object-cover object-top" />
        </motion.div>
      </section>

      {/* Sections */}
      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        <motion.section
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle ko="학  력" en="Educational" />
          <ul className="space-y-3">
            {education.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 text-zinc-200 text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle ko="경  력" en="Professional" />
          <ul className="space-y-3">
            {career.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 text-zinc-200 text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle ko="자 격 증" en="Certificate" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificates.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle ko="연 락 처" en="Contact" />
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://blog.naver.com/banbanex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              네이버 블로그
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
