import { MotionConfig } from "framer-motion"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Projects } from "./sections/Projects"
import { Competitive } from "./sections/Competitive"
import { Leadership } from "./sections/Leadership"
import { Education } from "./sections/Education"
import { Achievements } from "./sections/Achievements"
import { Contact } from "./sections/Contact"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-clip bg-white">
        <Navbar />
        <main>
          <Hero />
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