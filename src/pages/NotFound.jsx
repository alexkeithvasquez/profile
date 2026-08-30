import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
          <Reveal>
            <p className="font-display text-7xl font-bold text-title/15 md:text-9xl">404</p>
            <h1 className="mt-4 font-display text-3xl font-semibold text-title md:text-4xl">
              This page slipped through the grid
            </h1>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-mist">
              The link is broken or the page moved. Everything else is still one click away.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="rounded-full bg-violet px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet/25 transition-all duration-300 hover:bg-lilac hover:shadow-violet/40"
              >
                Back to home
              </Link>
              <Link
                to="/projects"
                className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-frost transition-all duration-300 hover:border-violet/50 hover:bg-surface-soft"
              >
                See my work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
