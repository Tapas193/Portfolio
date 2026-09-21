import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { skillCategories } from "../data/skills"

export function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title={<>Skills</>}
          description="The languages, frameworks and infrastructure I work with to ship full-stack products."
        />

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="border-b border-line pb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-fog">
                {cat.title}
              </h3>
              <p className="mt-3 text-xl font-medium text-snow">
                {cat.skills.join("  ·  ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}