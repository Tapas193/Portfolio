import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { education } from "../data/experience"

export function Education() {
  return (
    <section id="education" className="relative py-24 bg-beigewarm sm:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic background</>}
        />

        <div className="flex flex-col gap-4">
          {education.map((item, i) => (
            <motion.div
              key={`${item.role}-${item.period}`}
              className="rounded-xl border border-line bg-white p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-snow">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-fog">{item.org}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-offwhite px-3 py-1 text-xs text-fog">
                  <Calendar className="h-3 w-3" />
                  {item.period}
                </span>
              </div>
              {item.points.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-md border border-line bg-offwhite px-2.5 py-1 text-sm font-medium text-snow"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}