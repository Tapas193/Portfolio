import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { aboutText, profile } from "../data/profile"

const facts = [
  ["Degree", "BTech CSE"],
  ["College", profile.college],
  ["CGPA", "8.1"],
  ["LeetCode", "350+ Problems"],
  ["Max LeetCode Rating", "1624"],
  ["Location", profile.location],
]

export function About() {
  return (
    <section id="about" className="relative py-24 bg-beigewarm sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading eyebrow="About" title={<>ABOUT ME</>} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="max-w-prose text-lg leading-relaxed text-snow">{aboutText}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {facts.map(([label, value], i) => (
              <motion.div
                key={label}
                className="flex flex-col gap-1 bg-beige-light p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <span className="text-[11px] font-medium uppercase tracking-wider text-fog">
                  {label}
                </span>
                <span className="text-lg font-semibold text-snow">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}