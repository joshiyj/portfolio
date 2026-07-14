import { motion } from 'framer-motion'
import { Terminal, MessageSquare, FileSpreadsheet, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects, personal } from '../data/portfolio'
import { SectionHeader } from './About'

const iconMap = {
  Terminal,
  MessageSquare,
  FileSpreadsheet,
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

function ProjectCard({ project, index }) {
  const Icon = iconMap[project.icon] || Terminal

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative bg-[rgba(22,27,34,0.65)] backdrop-blur-[10px] border border-white/[0.08]
                 rounded-2xl p-7 flex flex-col h-full overflow-hidden
                 hover:border-[rgba(255,87,34,0.4)] hover:shadow-[0_15px_35px_rgba(255,87,34,0.08)] transition-all duration-300"
    >
      {/* Top gradient bar — reveals on hover */}
      <div
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff5722] to-[#ff8a50]
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Card header */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-[rgba(255,87,34,0.1)] border border-[rgba(255,87,34,0.15)]
                        flex items-center justify-center text-[#ff5722]">
          <Icon size={22} />
        </div>

        <div className="flex items-center gap-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 text-[#94a3b8] hover:text-[#ff5722] hover:scale-110 transition-all duration-150 rounded-md hover:bg-white/5"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 text-[#94a3b8] hover:text-[#ff5722] hover:scale-110 transition-all duration-150 rounded-md hover:bg-white/5"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 mb-6">
        <h3 className="text-xl font-bold text-[#f8fafc] mb-1">{project.title}</h3>
        <p className="text-xs font-medium text-[#ff5722] mb-3 tracking-wide uppercase">{project.subtitle}</p>
        <p className="text-[#94a3b8] text-sm leading-[1.65]">{project.description}</p>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full border border-white/[0.05] bg-white/[0.03] text-[#94a3b8]
                       group-hover:border-[rgba(255,87,34,0.15)] group-hover:bg-[rgba(255,87,34,0.03)]
                       group-hover:text-[#f8fafc] transition-all duration-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-py relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Featured <span className="text-[#ff5722]">Projects</span>
            </h2>
            <div className="w-14 h-1 bg-[#ff5722] rounded-full" />
          </motion.div>

          <motion.a
            href={`${personal.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#94a3b8] hover:text-[#ff5722] transition-colors duration-200 group"
          >
            View All Projects
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
