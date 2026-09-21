import { useEffect } from "react"
import { MotionConfig } from "framer-motion"
import { IntroLoader } from "./components/IntroLoader"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Hero } from "./sections/Hero"
import { Currently } from "./sections/Currently"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Projects } from "./sections/Projects"
import { Competitive } from "./sections/Competitive"
import { Leadership } from "./sections/Leadership"
import { Education } from "./sections/Education"
import { Achievements } from "./sections/Achievements"
import { Contact } from "./sections/Contact"

export default function App() {
  useEffect(() => {
    const timer = window.setTimeout(
      () => document.documentElement.classList.remove("theme-loading"),
      60,
    )
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <IntroLoader />
      <div className="relative min-h-screen overflow-x-clip bg-background">
        <Navbar />
        <main>
          <Hero />
          <Currently />
          <About />
          <Skills />
          <Projects />
          <Competitive />
          <Leadership />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
