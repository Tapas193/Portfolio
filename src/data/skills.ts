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
    skills: ["Node.js", "Express"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git/GitHub", "DevOps"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
]