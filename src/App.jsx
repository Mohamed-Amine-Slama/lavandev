import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Background from "./components/Background"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Process from "./components/Process"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import "./style/global.css"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Background />
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        <Stats />
        <Services />
        <Process />
        <About />
        <section id="projects" className="section-padding">
          <Projects />
        </section>
        <section id="skills" className="section-padding">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

