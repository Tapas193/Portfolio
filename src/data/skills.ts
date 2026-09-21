export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Languages I use for problem solving and application development.",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    description: "Interfaces I build with a focus on clarity, accessibility and performance.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Server-side systems, APIs and the logic that powers applications.",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    description: "Data modelling, storage and the layers that keep information reliable.",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    description: "Building, shipping and running applications in production.",
    skills: ["AWS", "Docker", "Git", "GitHub", "DevOps"],
  },
]
