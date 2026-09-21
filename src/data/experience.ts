export interface ExperienceItem {
  role: string
  org: string
  period: string
  type: "leadership" | "education"
  points: string[]
  badge?: string
}

export const leadership: ExperienceItem[] = [
  {
    role: "Technical Lead \u2014 AWS Cloud Club",
    org: "AWS Cloud Club \u2014 GEHU",
    period: "2025 \u2014 Present",
    type: "leadership",
    badge: "Cloud Community Lead",
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
    role: "President",
    org: "WE CODE CLUB \u2014 GEHU",
    period: "Aug 2025 \u2014 Present",
    type: "leadership",
    badge: "20+ member team",
    points: [
      "Leading a team of 20+ student developers",
      "Technical leadership and community coordination",
      "Supporting student developers on first projects",
      "Organizing technical sessions and workshops",
      "Driving collaborative open project work",
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