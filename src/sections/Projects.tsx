import { useState } from "react"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"
import { SectionHeading } from "../components/SectionHeading"
import { projects } from "../data/projects"

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = projects.find((p) => p.id === openId) ?? null

  return (
    <section id="projects" className="relative py-24 bg-beigewarm sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Projects</>}
          description="A selection of things I have built."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenId} />
          ))}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  )
}