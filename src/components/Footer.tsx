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
    <footer className="bg-footer pt-16 pb-8 sm:pt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-footer-heading sm:text-5xl lg:text-6xl">
          LET’S BUILD
          <br />
          SOMETHING
          <br />
          USEFUL.
        </h2>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-footer-heading">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-footer-muted">
              {"Full-Stack Developer & Cloud Enthusiast"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
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
                  className="flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-footer-heading"
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        <p className="mt-8 text-sm text-footer-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
