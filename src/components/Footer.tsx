import { Mail } from "lucide-react"
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./icons"
import { profile } from "../data/profile"
import { socials } from "../data/socials"

const links = [
  { label: "GitHub", href: socials.github.href, icon: GithubIcon },
  { label: "LinkedIn", href: socials.linkedin.href, icon: LinkedinIcon },
  { label: "LeetCode", href: socials.leetcode.href, icon: LeetcodeIcon },
  { label: "Email", href: socials.email.href, icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-softblack py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between md:px-8">
        <div>
          <p className="font-display text-base font-semibold text-white">{profile.name}</p>
          <p className="mt-0.5 text-sm text-ashgrey">
            BTech CSE · Developer · Problem Solver
          </p>
        </div>

        <div className="flex items-center gap-5">
          {links.map((link) => {
            const Icon = link.icon
            const isExternal =
              link.href.startsWith("http") || link.href.startsWith("mailto:")
            return (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                aria-label={link.label}
                className="flex items-center gap-2 text-sm text-beige-light transition-colors hover:text-white"
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            )
          })}
        </div>

        <p className="text-sm text-ashgrey">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}