import { motion } from "framer-motion"
import { SectionHeading } from "../components/SectionHeading"

const achievements = [
  {
    title: "Hackathon Finalist",
    text: "Made it to the final round of a hackathon — taking ideas from problem statement to demo.",
  },
  {
    title: "350+ LeetCode Problems",
    text: "Consistent competitive programming practice with DSA as the core focus.",
  },
  {
    title: "Technical Leadership",
    text: "Leading a 20+ member student developer club and technical community at GEHU.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading eyebrow="Highlights" title={<>Achievements</>} align="center" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              className="rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(17,17,17,0.3)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <h3 className="font-display text-lg font-bold tracking-tight text-snow">
                {achievement.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}