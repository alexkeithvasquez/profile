import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/10"
    >
      <div className={`relative h-52 shrink-0 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-line-strong transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-violet/25 blur-2xl" />
        <div className="absolute bottom-6 right-6 h-20 w-32 rounded-xl border border-line-strong bg-surface/40 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2" />
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-6 font-display text-7xl font-bold text-title/10 transition-colors duration-500 group-hover:text-title/20"
        >
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium uppercase tracking-widest text-lilac">{project.category}</span>
          <span className="text-mist">{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-title">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-mist transition-colors duration-300 group-hover:border-line-strong"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
