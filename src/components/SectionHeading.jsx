import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lilac">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {sub && (
        <p className={`mt-4 max-w-2xl text-mist ${center ? 'mx-auto' : ''}`}>{sub}</p>
      )}
    </Reveal>
  )
}
