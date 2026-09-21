import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "../data/projects"
import { EASE } from "../lib/motion"

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (id: string) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex flex-col gap-5 rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-24px_rgba(17,17,17,0.35)]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: EASE.out }}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(project.id)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open project ${project.name}`}
    >
      {project.featured ? (
        <span className="inline-flex w-fit rounded-full border border-line bg-offwhite px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-fog">
          Featured
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-snow">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-fog">{project.tagline}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-fog transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="text-[15px] leading-relaxed text-body">{project.description}</p>

      {project.tech.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-offwhite px-2.5 py-1 text-xs text-snow"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </motion.article>
  )
}