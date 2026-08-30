import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function CaseStudyCard({ study, index }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border border-line bg-surface/70 transition-colors duration-500 hover:border-violet/40 hover:bg-surface"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full gap-6 p-6 text-left md:p-8"
      >
        <span
          aria-hidden="true"
          className="font-display text-3xl font-bold text-title/15 transition-colors duration-500 group-hover:text-violet md:text-4xl"
        >
          0{index + 1}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-title transition-colors duration-300 group-hover:text-lilac md:text-xl">
            {study.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">{study.excerpt}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-mist">
            <span className="rounded-full border border-line px-3 py-1">{study.focus}</span>
            <span>{study.readTime}</span>
            <span className="ml-auto inline-flex items-center gap-1 text-lilac">
              {open ? 'Hide details' : 'Read case study'}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 border-t border-line px-6 py-6 text-sm leading-relaxed text-mist md:px-8 md:pl-[5.5rem]">
              {study.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
