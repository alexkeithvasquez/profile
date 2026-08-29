import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink transition-colors duration-500 hover:border-violet/40"
    >
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-violet/25 blur-2xl" />
        <div className="absolute bottom-6 right-6 h-20 w-32 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2" />
        <span className="absolute bottom-2 left-6 font-display text-7xl font-bold text-white/10 transition-colors duration-500 group-hover:text-white/20">
          0{index + 1}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium uppercase tracking-widest text-lilac">{project.category}</span>
          <span className="text-mist/60">{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist transition-colors duration-300 group-hover:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
