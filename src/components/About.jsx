import { motion } from 'framer-motion'
import { about } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function SectionHeader({ title, accent }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-14"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
        {title} <span className="text-[#ff5722]">{accent}</span>
      </h2>
      <div className="w-14 h-1 bg-[#ff5722] rounded-full" />
    </motion.div>
  )
}

export { SectionHeader }

export default function About() {
  return (
    <section id="about" className="section-py relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader title="About" accent="Me" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">

          {/* Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[rgba(22,27,34,0.65)] backdrop-blur-[10px] border border-white/[0.08] rounded-2xl p-8
                       hover:border-[rgba(255,87,34,0.2)] transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Who I Am
              <span className="absolute left-0 -bottom-1.5 w-7 h-0.5 bg-[#ff5722] rounded-full" />
            </h3>
            <div className="space-y-4">
              {about.bio.map((para, i) => (
                <p key={i} className="text-[#94a3b8] leading-relaxed">{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-[rgba(22,27,34,0.65)] backdrop-blur-[10px] border border-white/[0.08] rounded-2xl p-8
                       hover:border-[rgba(255,87,34,0.2)] transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Education
              <span className="absolute left-0 -bottom-1.5 w-7 h-0.5 bg-[#ff5722] rounded-full" />
            </h3>

            <div className="pl-5 border-l-2 border-[rgba(255,87,34,0.2)] mt-2">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <span className="font-semibold text-[#f8fafc] text-[0.97rem]">
                  {about.education.degree}
                </span>
                <span className="text-xs font-semibold text-[#ff5722] bg-[rgba(255,87,34,0.08)] px-2 py-0.5 rounded whitespace-nowrap">
                  {about.education.duration}
                </span>
              </div>
              <div className="text-[#94a3b8] text-sm mb-1">{about.education.institution}</div>
              <div className="text-[#64748b] text-sm mb-2">{about.education.location}</div>
              <div className="text-sm text-[#94a3b8]">
                <strong className="text-[#f8fafc]">CGPA:</strong> {about.education.cgpa}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
