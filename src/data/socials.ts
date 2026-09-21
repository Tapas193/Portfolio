import { profile } from "./profile"

export interface SocialLink {
  label: string
  href: string
  note?: string
}

export const socials: Record<"github" | "linkedin" | "leetcode" | "email", SocialLink> = {
  github: {
    label: "GitHub",
    href: profile.github,
  },
  linkedin: {
    label: "LinkedIn",
    href: profile.linkedin,
  },
  leetcode: {
    label: "LeetCode",
    href: profile.leetcode,
  },
  email: {
    label: "Email",
    href: `mailto:${profile.email}`,
  },
}

export const navbarLinks = [
  { label: "Home", target: "#home" },
  { label: "About", target: "#about" },
  { label: "Projects", target: "#projects" },
  { label: "Skills", target: "#skills" },
  { label: "Experience", target: "#leadership" },
  { label: "Education", target: "#education" },
  { label: "Contact", target: "#contact" },
]