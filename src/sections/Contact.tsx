import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "../components/icons"
import { profile } from "../data/profile"
import { socials } from "../data/socials"

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white sm:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.span>

        <motion.h2
          className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-snow sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's work together.
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-fog sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          Have an interesting idea, project or opportunity? Let's talk.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href={socials.email.href}
            className="inline-flex items-center gap-2 rounded-[10px] bg-softblack px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href={socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-6 py-3 text-sm font-medium text-snow transition-transform duration-200 hover:-translate-y-0.5"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={socials.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-6 py-3 text-sm font-medium text-snow transition-transform duration-200 hover:-translate-y-0.5"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={socials.leetcode.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-6 py-3 text-sm font-medium text-snow transition-transform duration-200 hover:-translate-y-0.5"
          >
            <LeetcodeIcon className="h-4 w-4" />
            LeetCode ↗
          </a>
        </motion.div>

        <motion.a
          href={`mailto:${profile.email}`}
          className="mt-12 inline-block text-sm text-fog transition-colors hover:text-snow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ArrowRight className="mr-1 inline h-3.5 w-3.5" />
          {profile.email}
        </motion.a>
      </div>
    </section>
  )
}