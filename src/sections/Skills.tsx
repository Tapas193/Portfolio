import { motion } from "framer-motion"
import { Braces, Cloud, Database, Layout, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { skillCategories } from "../data/skills"
import { EASE } from "../lib/motion"

// Asymmetric bento spans: 5/7 then 7/5 then a full-width closer.
const CARD_SPAN = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
  "md:col-span-2 lg:col-span-12",
]

const CATEGORY_ICONS: LucideIcon[] = [Braces, Layout, Server, Database, Cloud]

export function Skills() {
  return (
    <section id="skills" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title={"Tools & Technologies"}
          description="Technologies I use to build, deploy and scale real-world applications."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[i]
            const wide = i === skillCategories.length - 1

            return (
              <motion.article
                key={cat.title}
                className={[
                  "group flex flex-col rounded-[22px] border border-line bg-card p-7 sm:p-8",
                  "shadow-[0_1px_2px_rgba(17,17,17,0.04)]",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:border-taupe/60 hover:shadow-[0_22px_45px_-28px_rgba(17,17,17,0.32)]",
                  CARD_SPAN[i],
                ].join(" ")}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: EASE.out }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-fog">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="h-4 w-4 text-fog transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold tracking-[0.03em] text-snow uppercase sm:text-2xl">
                  {cat.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-fog">
                  {cat.description}
                </p>

                <ul
                  className={[
                    "mt-6",
                    wide
                      ? "grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
                      : "flex flex-col",
                  ].join(" ")}
                >
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 border-t border-line/70 py-3 transition-transform duration-300 group-hover:translate-x-0.5 sm:py-3.5"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-taupe/70"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] font-medium text-body">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
