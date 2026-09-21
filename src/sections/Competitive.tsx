import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { socials } from "../data/socials"

const metrics: { value: string; label: string }[] = [
  { value: "350+", label: "Problems Solved" },
  { value: "1624", label: "Max LeetCode Rating" },
  { value: "C++", label: "Primary Language" },
  { value: "DSA", label: "Focus Area" },
]

export function Competitive() {
  return (
    <section id="competitive" className="relative py-24 bg-background sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Problem Solving"
          title={<>Competitive Programming</>}
          description="I train on LeetCode with C++ and a focus on data structures and algorithms."
        />

        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-3xl">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="rounded-xl border border-line bg-white p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="font-display text-3xl font-bold tracking-tight text-snow">
                  {m.value}
                </div>
                <div className="mt-1.5 text-sm text-fog">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <a
            href={socials.leetcode.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-line bg-white px-5 py-3 text-sm font-medium text-snow transition-all duration-200 hover:-translate-y-0.5 hover:border-lightash"
          >
            View LeetCode
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}