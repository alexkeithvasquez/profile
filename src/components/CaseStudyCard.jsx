import { motion } from 'framer-motion'

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
      className="group flex cursor-pointer gap-6 rounded-2xl border border-white/5 bg-ink/60 p-6 transition-colors duration-500 hover:border-violet/40 hover:bg-ink md:p-8"
    >
      <span className="font-display text-3xl font-bold text-white/15 transition-colors duration-500 group-hover:text-violet md:text-4xl">
        0{index + 1}
      </span>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-lilac md:text-xl">
          {study.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">{study.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-mist/70">
          <span className="rounded-full border border-white/10 px-3 py-1">{study.focus}</span>
          <span>{study.readTime}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-lilac opacity-0 transition-all duration-300 group-hover:opacity-100">
            Read case study
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
