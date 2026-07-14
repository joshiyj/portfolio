import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personal } from '../data/portfolio'
import { cn } from '../lib/utils'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(10,11,14,0.85)] backdrop-blur-[14px] border-b border-white/[0.07] h-[70px]'
          : 'bg-transparent h-[80px]'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 font-bold text-[1.3rem] tracking-tight group"
        >
          <span className="font-mono text-[#ff5722] text-xl group-hover:scale-110 transition-transform duration-200">&lt;/&gt;</span>
          <span className="text-text-primary">
            Yash{' '}
            <span className="text-[#ff5722]">Joshi</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'relative text-sm font-medium py-1 transition-colors duration-200',
                  isActive ? 'text-[#f8fafc]' : 'text-[#94a3b8] hover:text-[#f8fafc]'
                )}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#ff5722] rounded-full"
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                />
              </a>
            )
          })}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={personal.resumeUrl}
            download={personal.resumeFilename}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#ff5722] text-white text-sm font-medium
                       hover:bg-[#ff784e] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(255,87,34,0.3)]
                       hover:shadow-[0_6px_20px_rgba(255,87,34,0.45)]"
          >
            Resume <Download size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#f8fafc] p-2 rounded-md hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[rgba(10,11,14,0.95)] backdrop-blur-xl border-b border-white/[0.07]"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item, i) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className={cn(
                      'py-3 px-3 rounded-md text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-[#ff5722] bg-[rgba(255,87,34,0.08)]'
                        : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </motion.a>
                )
              })}
              <div className="mt-3 pt-3 border-t border-white/[0.07]">
                <a
                  href={personal.resumeUrl}
                  download={personal.resumeFilename}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-[#ff5722] text-white text-sm font-medium hover:bg-[#ff784e] transition-colors"
                >
                  Resume <Download size={14} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
