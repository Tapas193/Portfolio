import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const SESSION_KEY = "portfolio-intro-shown"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function IntroLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false
    try {
      return sessionStorage.getItem(SESSION_KEY) !== "1"
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!visible) return

    document.body.style.overflow = "hidden"

    const finish = window.setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ""
      try {
        sessionStorage.setItem(SESSION_KEY, "1")
      } catch {
        /* ignore */
      }
    }, 2000)

    return () => {
      window.clearTimeout(finish)
      document.body.style.overflow = ""
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE } }}
          aria-hidden="true"
        >
          <motion.span
            className="font-display text-3xl font-extrabold tracking-[0.08em] text-heading sm:text-5xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            TAPAS MISHRA
          </motion.span>
          <motion.span
            className="mt-4 text-[11px] font-semibold uppercase tracking-[0.5em] text-muted sm:text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            PORTFOLIO
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
