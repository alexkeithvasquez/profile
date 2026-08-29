import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import { email, socials } from '../data/content.js'

export default function Contact() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" />

        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lilac">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-violet to-lilac bg-clip-text text-transparent">
                together
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-mist">
              Whether it's a collaboration, an internship, or just a conversation about
              design and code — my inbox is open.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={`mailto:${email}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-violet px-8 py-4 text-sm font-medium text-white shadow-lg shadow-violet/25 transition-all duration-300 hover:bg-lilac hover:shadow-violet/40"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m3 6 9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {email}
            </a>
            <p className="mt-4 text-sm text-mist/70">Cabuyao, Laguna, Philippines</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-mist transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mx-auto mt-16 max-w-md rounded-2xl border border-white/5 bg-ink/60 p-6 text-sm text-mist">
              <p>
                This site is frontend-only for now — no backend yet. That changes once I
                learn <span className="text-lilac">Laravel</span>. Meanwhile, email works best.
              </p>
              <Link
                to="/"
                className="mt-4 inline-block text-lilac transition-colors duration-300 hover:text-white"
              >
                ← Back to home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
