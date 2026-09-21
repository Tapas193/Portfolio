import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "../components/icons"
import { heroStack, profile } from "../data/profile"

export function Hero() {
  const [firstName = "", lastName = ""] = profile.name.split(" ")

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-background pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:px-8 lg:grid-cols-2 lg:gap-12">
        {/* left */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.eyebrow}
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-snow sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {firstName.toUpperCase()}
            <br />
            {lastName.toUpperCase()}
          </motion.h1>

          <motion.p
            className="mt-6 text-xl font-semibold text-snow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.headline}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-fog"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profile.intro}
          </motion.p>

          <motion.p
            className="mt-5 text-sm font-medium text-snow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {profile.role}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[10px] bg-softblack px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-lightash bg-white px-5 py-3 text-sm font-medium text-snow transition-transform duration-200 hover:-translate-y-0.5"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-fog">
              Technologies
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm text-snow">
              {heroStack.map((tech, i) => (
                <li key={tech} className="flex items-center gap-2.5">
                  {i > 0 ? (
                    <span className="text-muted" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* right — profile photo */}
        <motion.div
          className="mx-auto w-full max-w-[400px] lg:max-w-[460px]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-beigewarm p-3 shadow-[0_24px_60px_-30px_rgba(17,17,17,0.35)]">
            <img
              src="/SHIVANG.PNG"
              alt={`${profile.name} — profile photo`}
              className="h-full w-full rounded-xl object-cover"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}