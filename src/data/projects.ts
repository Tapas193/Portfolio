export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  tech: string[]
  github: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "ibvap",
    number: "01",
    name: "IBVAP",
    tagline: "Intelligent Border Video Analytics Platform",
    description:
      "An intelligent video analytics platform that transforms existing IP-based CCTV infrastructure into a real-time surveillance system.",
    tech: ["React", "Node.js", "Python", "Computer Vision", "MongoDB", "Redis", "AWS"],
    github: "https://github.com/alive7z/IBVAP",
    featured: true,
  },
  {
    id: "civic-issues",
    number: "02",
    name: "CIVIC ISSUES",
    tagline: "Civic Issue Reporting Platform",
    description:
      "A web platform for reporting and tracking civic issues, connecting residents with the right department to get problems resolved.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "React Router", "Leaflet"],
    github: "https://github.com/Tapas193/CrowdSouced-civic-issues",
    demo: "https://crowd-souced-civic-issues.vercel.app",
  },
  {
    id: "career-track",
    number: "03",
    name: "CAREER TRACK",
    tagline: "Student Career Lifecycle Tracking System",
    description:
      "A student career lifecycle platform that tracks the journey from admission and academics through skills, certifications, projects, internships, placement and alumni career history.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/Tapas193/CAREER-TRACKER",
  },
]