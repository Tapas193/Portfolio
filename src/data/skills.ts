export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "Git"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
]