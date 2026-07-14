import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { personal } from '../data/portfolio'

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const codeWindowVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.97 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
}

function CodeWindow() {
  return (
    <div className="relative z-10 bg-[rgba(22,27,34,0.75)] backdrop-blur-[14px] border border-white/[0.07] rounded-xl
                    shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden
                    hover:border-[rgba(255,87,34,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4),0_0_50px_rgba(255,87,34,0.08)]
                    transition-all duration-300">
      {/* Window chrome */}
      <div className="h-11 bg-[rgba(10,11,14,0.8)] border-b border-white/[0.05] flex items-center px-4 gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="mx-auto text-xs font-mono text-[#64748b]">developer.js</span>
      </div>

      {/* Code body */}
      <div className="code-body flex p-5 text-[0.82rem] leading-[1.7] overflow-x-auto">
        {/* Line numbers */}
        <div className="flex flex-col text-right text-[#64748b] pr-4 border-r border-white/[0.05] select-none min-w-[2rem]">
          {Array.from({ length: 13 }, (_, i) => (
            <span key={i + 1}>{i + 1}</span>
          ))}
        </div>

        {/* Syntax-highlighted code */}
        <pre className="pl-4 text-[#abb2bf] overflow-x-auto">
          <code>
            <span className="syn-keyword">const </span>
            <span className="syn-variable">developer</span>
            {' = {\n'}
            {'  '}<span className="syn-property">name</span>
            {': '}<span className="syn-string">"Yash Joshi"</span>{',\n'}
            {'  '}<span className="syn-property">role</span>
            {': '}<span className="syn-string">"Full Stack Developer"</span>{',\n'}
            {'  '}<span className="syn-property">skills</span>
            {': ['}<span className="syn-string">"React"</span>{', '}
            <span className="syn-string">"Node.js"</span>{', '}
            <span className="syn-string">"Express"</span>{', '}
            <span className="syn-string">"MongoDB"</span>
            {'],\n'}
            {'  '}<span className="syn-property">passion</span>
            {': '}<span className="syn-string">"Building impactful products"</span>{',\n'}
            {'  '}<span className="syn-property">currentlyLearning</span>
            {': '}<span className="syn-string">"System Design & DevOps"</span>{',\n'}
            {'  '}<span className="syn-property">getInTouch</span>{'() {\n'}
            {'    '}<span className="syn-keyword">return </span>
            <span className="syn-string">"Let\'s build something amazing! 🚀"</span>{';\n'}
            {'  }\n'}
            {'};\n\n'}
            <span className="syn-variable">console</span>
            {'.'}<span className="syn-method">log</span>
            {'('}<span className="syn-variable">developer</span>
            {'.'}<span className="syn-method">getInTouch</span>{'());\n'}
            <motion.span
              className="syn-comment"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
            >
              {'// Let\'s build something amazing! 🚀'}
            </motion.span>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{ top: '8%', right: '12%', width: '420px', height: '420px', background: '#ff5722' }}
      />
      <div
        className="glow-orb"
        style={{ bottom: '15%', left: '5%', width: '300px', height: '300px', background: '#ff5722', opacity: 0.06 }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Role badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                               bg-[rgba(255,87,34,0.1)] text-[#ff5722] border border-[rgba(255,87,34,0.15)] mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] shadow-[0_0_8px_#ff5722] animate-pulse" />
                Full Stack Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold leading-[1.13] tracking-tight mb-6"
            >
              I build{' '}
              <span className="accent-gradient-text">web apps</span>
              <br />
              that solve real problems.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#94a3b8] text-lg leading-relaxed max-w-[500px] mb-10"
            >
              Full Stack Developer skilled in the MERN stack and AI-powered applications.
              Turning ideas into scalable, efficient & user-friendly solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => handleScroll('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff5722] text-white font-medium
                           shadow-[0_4px_14px_rgba(255,87,34,0.3)] hover:bg-[#ff784e] hover:-translate-y-0.5
                           hover:shadow-[0_6px_20px_rgba(255,87,34,0.45)] transition-all duration-200"
              >
                View My Work <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08]
                           bg-white/[0.03] text-[#f8fafc] font-medium backdrop-blur-sm
                           hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Me <MessageSquare size={16} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { href: personal.github, label: 'GitHub', icon: <GithubIcon size={18} /> },
                { href: personal.linkedin, label: 'LinkedIn', icon: <LinkedinIcon size={18} /> },
                { href: `mailto:${personal.email}`, label: 'Email', icon: <Mail size={18} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08]
                             bg-white/[0.02] text-[#94a3b8] hover:text-[#ff5722] hover:border-[#ff5722]
                             hover:bg-[rgba(255,87,34,0.05)] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,87,34,0.15)]
                             transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Code Window ── */}
          <motion.div
            variants={codeWindowVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Dot grid decoration */}
            <div
              className="dot-grid absolute -top-5 -right-5 w-28 h-28 z-0 pointer-events-none rounded-sm"
            />
            <CodeWindow />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
