import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/content.js'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [paused])

  const go = (i) => setIndex((i + testimonials.length) % testimonials.length)
  const current = testimonials[index]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mx-auto max-w-3xl"
    >
      <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-plum via-ink to-navy p-8 md:p-12">
        <span className="pointer-events-none absolute -top-4 left-6 font-display text-8xl font-bold text-violet/15">
          "
        </span>
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col justify-center"
          >
            <blockquote className="text-center text-lg leading-relaxed text-frost md:text-xl">
              {current.quote}
            </blockquote>
            <figcaption className="mt-8 text-center">
              <p className="font-display font-semibold text-white">{current.name}</p>
              <p className="mt-1 text-sm text-lilac">{current.role}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:border-violet/50 hover:text-white hover:shadow-lg hover:shadow-violet/20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M19 12H5m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-violet' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-mist transition-all duration-300 hover:border-violet/50 hover:text-white hover:shadow-lg hover:shadow-violet/20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
