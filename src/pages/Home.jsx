import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CaseStudyCard from '../components/CaseStudyCard.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { projects, caseStudies, philosophy, stats, stack } from '../data/content.js'

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet/15 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-navy-soft/60 blur-[140px]" />
        <div className="animate-float pointer-events-none absolute right-[18%] top-32 h-3 w-3 rounded-full bg-lilac/60" />
        <div className="animate-float-slow pointer-events-none absolute left-[12%] top-64 h-2 w-2 rounded-full bg-violet/70" />

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_1fr]">
          <motion.div variants={heroStagger} initial="hidden" animate="show">
            <motion.div variants={heroItem} className="flex items-center gap-3">
              <span className="animate-pulse-soft h-2 w-2 rounded-full bg-violet" />
              <p className="text-sm text-mist">Open to collaborations & internships</p>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-title md:text-7xl"
            >
              Alex Keith
              <br />
              <span className="bg-gradient-to-r from-violet via-lilac to-mist bg-clip-text text-transparent">
                Vasquez
              </span>
            </motion.h1>

            <motion.p variants={heroItem} className="mt-6 font-display text-lg text-lilac md:text-xl">
              Product Designer · Computer Science Student
            </motion.p>

            <motion.p variants={heroItem} className="mt-4 max-w-xl leading-relaxed text-mist">
              I craft minimal, dark, thoughtful interfaces — then bring them to life
              with code. Designing the product, building the product.
            </motion.p>

            <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet/25 transition-all duration-300 hover:bg-lilac hover:shadow-violet/40"
              >
                View my work
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-frost transition-all duration-300 hover:border-violet/50 hover:bg-surface-soft"
              >
                About me
              </Link>
            </motion.div>

            <motion.dl variants={heroItem} className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.2em] text-mist">{stat.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-title">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet/25 via-transparent to-lilac/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/80 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-lilac/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-mist/30" />
                <span className="ml-3 font-display text-xs text-mist">designing-in-code.jsx</span>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface-soft/60 p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-lilac font-display text-lg font-bold text-white">
                    A
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-title">Alex Keith Vasquez</p>
                    <p className="text-xs text-mist">Cabuyao, Laguna · Philippines</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stack.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-line px-3 py-2.5 text-center text-xs text-mist transition-colors duration-300 hover:border-violet/40 hover:text-title"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-violet/25 bg-plum/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-lilac">Currently</p>
                  <p className="mt-2 text-sm text-frost">
                    Building this portfolio in React & Tailwind — backend with Laravel is next.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected projects"
            sub="Three products I designed end-to-end — from first sketch to shipped interface."
          />
          <Reveal delay={0.15}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm text-lilac transition-colors duration-300 hover:text-title"
            >
              All projects
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Design philosophy"
            title="How I think about design"
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12} className="h-full">
                <div className="group h-full rounded-2xl border border-line bg-surface/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-violet/40">
                  <span className="font-display text-sm font-semibold text-violet">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-title">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Case studies"
          title="The process behind the pixels"
          sub="Previews of how problems became products — the research, the dead ends, the decisions."
        />
        <div className="mt-12 flex flex-col gap-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Testimonials"
            title="What collaborators say"
            center
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-title md:text-5xl">
              Have an idea?{' '}
              <span className="bg-gradient-to-r from-violet to-lilac bg-clip-text text-transparent">
                Let's make it real.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-mist">
              I'm open to collaborations, internships, and student projects.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet/25 transition-all duration-300 hover:bg-lilac hover:shadow-violet/40"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
