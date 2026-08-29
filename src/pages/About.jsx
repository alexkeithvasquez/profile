import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { skills, timeline } from '../data/content.js'

const born = new Date(2004, 9, 22)
const age = Math.floor((Date.now() - born.getTime()) / (365.25 * 24 * 60 * 60 * 1000))

const facts = [
  { label: 'Age', value: `${age} years old` },
  { label: 'Born', value: 'October 22, 2004' },
  { label: 'Year', value: '3rd Year, BS Computer Science' },
  { label: 'School', value: 'University of Cabuyao' },
]

export default function About() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="About me" title="Designer by eye, developer by training" />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal delay={0.1}>
              <div className="space-y-5 leading-relaxed text-mist">
                <p>
                  Hi — I'm <span className="font-medium text-white">Alex Keith Vasquez</span>, a{' '}
                  {age}-year-old product designer and 3rd year Computer Science student at the{' '}
                  <span className="font-medium text-white">University of Cabuyao</span>.
                </p>
                <p>
                  I started with code — Java, SQL, and C# — and somewhere along the way fell in
                  love with the part of software people actually see and feel. Now I spend my
                  time designing clean, dark, minimal interfaces and learning the frontend
                  stack to build them myself.
                </p>
                <p>
                  Right now I'm deep into JavaScript, React, and Tailwind — this portfolio is
                  my practice ground. Next stop: backend development with Laravel, so I can
                  ship entire products from database to pixel.
                </p>
                <p>
                  When I'm not designing or coding, I'm probably grinding mobile games — which,
                  honestly, is where most of my UI opinions come from.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/5 bg-ink p-5 transition-colors duration-300 hover:border-violet/40"
                  >
                    <p className="text-xs uppercase tracking-widest text-mist/60">{fact.label}</p>
                    <p className="mt-2 text-sm font-medium text-white">{fact.value}</p>
                  </div>
                ))}
                <div className="col-span-2 rounded-2xl border border-violet/20 bg-plum/60 p-5">
                  <p className="text-xs uppercase tracking-widest text-lilac">Off-screen</p>
                  <p className="mt-2 text-sm text-frost">
                    Mobile gamer. Great UI is often stolen from great games.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            sub="An honest map of where I am — and where I'm heading."
          />
          <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.06}>
                <div className="flex items-baseline justify-between">
                  <p className="font-display font-semibold text-white">{skill.name}</p>
                  <p className="text-xs text-mist/70">{skill.detail}</p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-violet to-lilac"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-violet/30 bg-plum/60 px-5 py-2.5 text-sm text-frost">
              <span className="animate-pulse-soft h-2 w-2 rounded-full bg-lilac" />
              Next up: backend development with Laravel
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Journey" title="The road so far" />
        <div className="mt-12 space-y-0">
          {timeline.map((step, i) => (
            <Reveal key={step.year + step.title} delay={i * 0.08}>
              <div className="group relative flex gap-6 pb-10 last:pb-0 md:gap-10">
                <div className="flex flex-col items-center">
                  <span className="flex h-3 w-3 shrink-0 translate-y-1.5 rounded-full bg-violet shadow-lg shadow-violet/50" />
                  {i < timeline.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-gradient-to-b from-violet/40 to-white/5" />
                  )}
                </div>
                <div className="flex-1 rounded-2xl border border-white/5 bg-ink/60 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-violet/40">
                  <p className="font-display text-sm font-semibold text-lilac">{step.year}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
