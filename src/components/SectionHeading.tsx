import { memo } from "react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { EASE } from "../lib/motion"

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  id?: string
}

export const SectionHeading = memo(function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left"

  return (
    <div className={`${alignClasses} mb-12 max-w-2xl flex flex-col gap-4`} id={id}>
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: EASE.out }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-snow sm:text-5xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.08, ease: EASE.out }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="text-base leading-relaxed text-fog"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE.out }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
})