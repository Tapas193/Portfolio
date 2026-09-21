export interface ExperienceItem {
  role: string
  org: string
  period: string
  type: "leadership" | "education"
  points: string[]
  badges?: string[]
}

export const leadership: ExperienceItem[] = [
  {
    role: "Technical Lead \u2014 AWS Cloud Club",
    org: "AWS Cloud Club \u2014 GEHU",
    period: "2025 \u2014 Present",
    type: "leadership",
    badges: ["Cloud Community Lead"],
    points: [
      "Technical leadership of the AWS Cloud Club",
      "Leading cloud-focused technical initiatives",
      "Mentoring and supporting club members",
      "Organizing technical sessions and workshops",
      "Driving AWS and cloud learning initiatives",
      "Coordinating technical activities and projects",
    ],
  },
  {
    role: "SIH Team Leader",
    org: "Smart India Hackathon (SIH) 2026",
    period: "2026 \u2014 Shortlisted",
    type: "leadership",
    badges: ["Team Leadership", "IBVAP Project"],
    points: [
      "Leading the team for Smart India Hackathon 2026",
      "Our IBVAP project has been shortlisted for SIH 2026",
      "Coordinating development, research and problem-solving",
      "Collaborating with team members to build an impactful solution",
      "Preparing for the final round and further development",
      "Representing GEHU at the national level",
    ],
  },
]

export const education: ExperienceItem[] = [
  {
    role: "BTech Computer Science Engineering",
    org: "Graphic Era Hill University",
    period: "2024 \u2014 Present",
    type: "education",
    points: ["CGPA: 8.1", "3rd Year"],
  },
  {
    role: "Class XII",
    org: "Evergreen Senior Secondary School",
    period: "2024",
    type: "education",
    points: ["79%"],
  },
  {
    role: "Class X",
    org: "Evergreen Senior Secondary School",
    period: "2022",
    type: "education",
    points: ["81%"],
  },
]
