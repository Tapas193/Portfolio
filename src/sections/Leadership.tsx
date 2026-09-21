import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { leadership } from "../data/experience"

export function Leadership() {
  return (
    <section id="leadership" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={<>Leadership & Experience</>}
          description="Building communities and helping other student developers get started."
        />

        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-4 bottom-4 left-[3px] hidden w-px bg-line lg:block"
          />
          <div className="flex flex-col gap-6">
            {leadership.map((item, idx) => (
              <motion.div
                key={item.role}
                className="relative rounded-xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(17,17,17,0.3)] sm:p-10 lg:ml-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-10 -left-10 hidden h-[7px] w-[7px] rounded-full bg-taupe lg:block"
                />
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-md">
                    <span className="font-mono text-xs font-medium tracking-[0.18em] text-fog uppercase">
                      {item.period}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-snow sm:text-3xl">
                      {item.role}
                    </h3>
                    <p className="mt-1.5 text-base text-fog">{item.org}</p>
                    {item.badges && item.badges.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center rounded-full border border-line bg-offwhite px-3.5 py-1.5 text-xs font-medium text-snow"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <ul className="flex w-full max-w-md flex-col gap-3">
                    {item.points.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-body"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fog" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
