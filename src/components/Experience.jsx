import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-py relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Professional <span className="text-[#ff5722]">Experience</span>
          </h2>
          <div className="w-14 h-1 bg-[#ff5722] rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ff5722] via-[rgba(255,87,34,0.4)] to-transparent"
          />

          <div className="space-y-10 ml-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-1.5 w-4 h-4 rounded-full bg-[#ff5722]
                                shadow-[0_0_12px_rgba(255,87,34,0.5)] border-2 border-[#0a0b0e]" />

                {/* Date badge */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-[#ff5722] bg-[rgba(255,87,34,0.1)]
                                   border border-[rgba(255,87,34,0.2)] px-3 py-1 rounded-full">
                    {job.duration}
                  </span>
                </div>

                {/* Content card */}
                <div className="bg-[rgba(22,27,34,0.65)] backdrop-blur-[10px] border border-white/[0.08] rounded-2xl p-6 sm:p-8
                                hover:border-[rgba(255,87,34,0.2)] transition-colors duration-300">
                  <h3 className="text-xl font-bold text-[#f8fafc] mb-1">{job.title}</h3>
                  <div className="text-sm text-[#94a3b8] mb-5">
                    <span className="font-medium text-[#f8fafc]">{job.company}</span>
                    <span className="text-[#64748b]"> • {job.location}</span>
                  </div>

                  <ul className="space-y-3">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm text-[#94a3b8] leading-relaxed"
                      >
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff5722] opacity-80" />
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
