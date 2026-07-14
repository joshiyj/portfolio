import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Scroll-spy using IntersectionObserver
  useEffect(() => {
    const observers = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f8fafc]">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
