import type { Transition, Variants } from "framer-motion"

// Shared motion language for the whole site.
// One ease palette keeps every animation feeling like part of the same system.

export type Bezier = [number, number, number, number]

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  soft: [0.33, 1, 0.68, 1],
} as Record<string, Bezier>

export const SPRING = {
  snap: { type: "spring", stiffness: 400, damping: 32 } as Transition,
  stiff: { type: "spring", stiffness: 260, damping: 24 } as Transition,
  smooth: { type: "spring", stiffness: 120, damping: 20 } as Transition,
  bouncy: { type: "spring", stiffness: 300, damping: 18, mass: 0.8 } as Transition,
}

export const reveal = ({
  delay = 0,
  y = 32,
  blur = 8,
  duration = 0.8,
  ease = EASE.out,
}: {
  delay?: number
  y?: number
  blur?: number | null
  duration?: number
  ease?: Bezier
} = {}): Variants => ({
  hidden: {
    opacity: 0,
    y,
    ...(blur === null || blur === 0 ? {} : { filter: `blur(${blur}px)` }),
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration, ease, delay },
  },
})

export const lineReveal = (delay = 0): Variants => ({
  hidden: { y: "110%", opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay,
      ease: EASE.out,
    },
  },
})