import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"
import { aboutText } from "../data/profile"

const facts = [
  ["CGPA", "8.1"],
  ["Class XII", "79%"],
  ["Class X", "81%"],
  ["LeetCode", "350+"],
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

          <div className="grid grid-cols-2 self-start overflow-hidden rounded-[20px] border border-line bg-card shadow-[0_18px_45px_-30px_rgba(17,17,17,0.3)]">
            {facts.map(([label, value], i) => (
              <motion.div
                key={label}
                className={[
                  "flex flex-col gap-1.5 p-6",
                  i % 2 === 0 ? "border-r border-line" : "",
                  i < 2 ? "border-b border-line" : "",
                ].join(" ")}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-fog">
                  {label}
                </span>
                <span className="text-xl font-semibold text-snow">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}