import React from "react"
import Background from "./components/Background"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Diplomas from "./components/Diplomas"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style/global.css"

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0a192f] overflow-x-hidden">
      <Background />
      <Navbar />
      <main className="container mx-auto px-4">
        <section id="home">
          <Hero />
        </section>
        <section id="education" className="pt-20">
          <Education />
        </section>
        <section id="projects" className="pt-20">
          <Projects />
        </section>
        <section id="skills" className="pt-20">
          <Skills />
        </section>
        <section id="diplomas" className="pt-20">
          <Diplomas />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

