import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const SESSION_KEY = "portfolio-intro-shown"
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type Scene = {
  step: string
  text: string
  kind: "rise" | "clip" | "soft" | "final"
}

const SCENES: readonly Scene[] = [
  { step: "01", text: "TAPAS MISHRA", kind: "rise" },
  { step: "02", text: "FULL-STACK DEVELOPER", kind: "clip" },
  { step: "03", text: "CLOUD \u2022 CODE \u2022 BUILD", kind: "soft" },
  { step: "04", text: "PORTFOLIO", kind: "final" },
]

// Cinematic timeline (ms): 0.0s -> 3.4s scenes, then fade into the site.
const SCENE_AT = [500, 1300, 2000, 2700]
const EXIT_AT = 3400
const LINE_DURATION = 0.5
const PROGRESS_DURATION = 3.4

// Resolved once per page load (module scope) so React StrictMode remounts and
// Vite HMR updates never replay the intro within the same browser session.
let cachedDecision: boolean | null = null

function shouldShowLoader(): boolean {
  if (cachedDecision !== null) return cachedDecision
  let show = true
  try {
    show = sessionStorage.getItem(SESSION_KEY) !== "1"
    if (show) sessionStorage.setItem(SESSION_KEY, "1")
  } catch {
    show = true
  }
  cachedDecision = show
  return show
}

function SceneView({ scene }: { scene: Scene }) {
  const base = "block font-display text-heading"

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: EASE } }}
    >
      <motion.span
        className="mb-4 text-[10px] font-semibold tracking-[0.5em] text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {scene.step}
      </motion.span>

      {scene.kind === "rise" ? (
        <span className="overflow-hidden">
          <motion.span
            className={`${base} text-3xl font-extrabold tracking-[0.06em] sm:text-5xl md:text-6xl`}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            {scene.text}
          </motion.span>
        </span>
      ) : null}

      {scene.kind === "clip" ? (
        <motion.span
          className={`${base} text-2xl font-bold tracking-[0.02em] sm:text-4xl md:text-5xl`}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {scene.text}
        </motion.span>
      ) : null}

      {scene.kind === "soft" ? (
        <motion.span
          className={`${base} text-lg font-semibold text-muted sm:text-2xl md:text-3xl`}
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.22em" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {scene.text}
        </motion.span>
      ) : null}

      {scene.kind === "final" ? (
        <motion.span
          className={`${base} text-4xl font-extrabold tracking-[0.14em] sm:text-6xl md:text-7xl`}
          initial={{ opacity: 0, y: 22, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {scene.text}
        </motion.span>
      ) : null}
    </motion.div>
  )
}

export function IntroLoader() {
  const [active, setActive] = useState(shouldShowLoader)
  const [sceneIndex, setSceneIndex] = useState(-1)

  useEffect(() => {
    if (!active) return

    document.body.style.overflow = "hidden"

    const sceneTimers = SCENE_AT.map((at, i) =>
      window.setTimeout(() => setSceneIndex(i), at),
    )
    const exitTimer = window.setTimeout(() => setActive(false), EXIT_AT)

    return () => {
      sceneTimers.forEach(window.clearTimeout)
      window.clearTimeout(exitTimer)
      document.body.style.overflow = ""
    }
  }, [active])

  const current = sceneIndex >= 0 ? SCENES[sceneIndex] : null

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {active ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: EASE } }}
          role="presentation"
          aria-hidden="true"
        >
          {/* subtle editorial grid lines */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-1/4 w-px bg-border/40" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-border/40" />
            <div className="absolute inset-y-0 left-3/4 w-px bg-border/40" />
          </div>

          {/* corner metadata */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 sm:p-7 md:p-9">
            <div className="flex items-start justify-between gap-4 text-[9px] font-semibold tracking-[0.18em] text-muted uppercase sm:text-[10px] sm:tracking-[0.28em]">
              <span className="truncate">TAPAS MISHRA / 2026</span>
              <span className="truncate">PORTFOLIO</span>
            </div>
            <div className="flex items-end justify-between gap-4 text-[9px] font-semibold tracking-[0.18em] text-muted uppercase sm:text-[10px] sm:tracking-[0.28em]">
              <span className="truncate">{"BTECH CSE \u2022 GEHU"}</span>
              <span className="truncate">{"01 \u2014 04"}</span>
            </div>
          </div>

          {/* expanding rule + scene stage */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-2xl">
              <motion.div
                className="h-px w-full origin-left bg-border"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: LINE_DURATION, ease: EASE }}
              />
              <div className="relative mt-8 h-28 sm:h-32 md:h-36">
                <AnimatePresence initial={false}>
                  {current ? <SceneView key={current.step} scene={current} /> : null}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* minimal progress indicator */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-heading/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: PROGRESS_DURATION, ease: "linear" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
