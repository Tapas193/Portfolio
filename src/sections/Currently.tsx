import { motion } from "framer-motion"
import { EASE } from "../lib/motion"

export function Currently() {
  return (
    <section id="currently" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-12">
        <motion.div
          className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE.out }}
        >
          <span className="shrink-0 text-[11px] font-semibold tracking-[0.3em] text-fog uppercase">
            Currently
          </span>
          <p className="max-w-3xl text-base leading-relaxed text-body sm:text-lg">
            {"Building full-stack systems, exploring AWS & DevOps, and leading technical initiatives through AWS Cloud Club."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
