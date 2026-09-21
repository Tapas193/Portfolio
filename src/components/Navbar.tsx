import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navbarLinks } from "../data/socials"
import { profile } from "../data/profile"
import { ThemeToggle } from "./ThemeToggle"

const sectionIds = navbarLinks.map((l) => l.target.replace("#", ""))

function useActiveSection(): string {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= offset && rect.bottom >= offset
      })
      if (current) setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return active
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    >
      <nav
        className={[
          "flex items-center justify-between border-b px-6 transition-all duration-300 md:px-10",
          scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background",
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="flex h-16 items-center">
          <a
            href="#home"
            className="flex items-center gap-2.5"
            aria-label="Tapas Mishra — home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-softblack font-mono text-xs font-bold text-white">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold tracking-tight text-snow">
              {profile.name}
            </span>
          </a>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navbarLinks.map((link) => {
            const isActive = active === link.target.replace("#", "")
            return (
              <a
                key={link.target}
                href={link.target}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-snow" : "text-fog hover:text-snow",
                ].join(" ")}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-lg bg-softblack px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Let’s Talk →
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-snow"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-background px-6 pb-8 pt-24 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col">
              {navbarLinks.map((link, i) => (
                <motion.a
                  key={link.target}
                  href={link.target}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 text-xl font-semibold text-snow"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-softblack py-3.5 text-sm font-semibold text-white"
              >
                Let’s Talk →
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}