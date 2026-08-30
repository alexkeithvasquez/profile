import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CaseStudyCard from '../components/CaseStudyCard.jsx'
import { projects, caseStudies } from '../data/content.js'

export default function Projects() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Projects"
            title="Work I'm proud of"
            sub="Products designed end-to-end — research, flows, visual design, and the code to ship them."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Case studies"
            title="Behind the scenes"
            sub="Long-form looks at the process, decisions, and trade-offs behind each project."
          />
          <div className="mt-12 flex flex-col gap-4">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.title} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
