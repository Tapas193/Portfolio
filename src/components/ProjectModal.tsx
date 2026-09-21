import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import type { Project } from "../data/projects"
import { GithubIcon } from "./icons"
import { EASE } from "../lib/motion"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-black/60 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} project details`}
        >
          <motion.div
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: EASE.out }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-fog">
                  Project {project.number}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-snow">
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fog transition-colors hover:text-snow"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              <p className="text-lg font-medium text-snow">{project.tagline}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                {project.description}
              </p>

              {project.tech.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-1.5">
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
            </div>

            <div className="flex items-center gap-3 border-t border-line px-6 py-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-snow transition-colors hover:bg-offwhite"
              >
                <GithubIcon className="h-4 w-4" />
                Code
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-softblack px-4 py-2 text-sm font-semibold text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}