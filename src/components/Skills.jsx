import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { SKILL_ICON_MAP } from './SkillIcons'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function SkillItem({ name }) {
  const icon = SKILL_ICON_MAP[name]

  return (
    <motion.div
      whileHover={{ y: -3, backgroundColor: 'rgba(255,87,34,0.05)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06]
                 bg-white/[0.02] hover:border-[rgba(255,87,34,0.2)] transition-colors duration-200 cursor-default"
    >
      {icon && (
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-[#94a3b8]">{name}</span>
    </motion.div>
  )
}

function CategoryCard({ category, items }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-[rgba(22,27,34,0.65)] backdrop-blur-[10px] border border-white/[0.08] rounded-2xl p-6
                 hover:border-[rgba(255,87,34,0.2)] transition-colors duration-300"
    >
      <h3 className="text-base font-bold text-[#f8fafc] mb-5 flex items-center gap-2">
        <span className="w-1.5 h-4 rounded-sm bg-[#ff5722]" />
        {category}
      </h3>
      <div className="grid grid-cols-1 gap-2.5">
        {items.map((skill) => (
          <SkillItem key={skill} name={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-py relative overflow-hidden">
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{ bottom: '10%', left: '5%', width: '350px', height: '350px', background: '#ff5722' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Tech <span className="text-[#ff5722]">Stack</span>
          </h2>
          <div className="w-14 h-1 bg-[#ff5722] rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {skills.map((cat) => (
            <CategoryCard key={cat.category} category={cat.category} items={cat.items} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
