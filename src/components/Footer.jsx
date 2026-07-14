import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[rgba(10,11,14,0.8)] backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-[#64748b]">
            © 2026 <span className="text-[#f8fafc] font-medium">Yash Joshi</span>. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b] mt-0.5">
            Built with React, Tailwind CSS & Framer Motion ✨
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.07]
                       text-[#64748b] hover:text-[#ff5722] hover:border-[rgba(255,87,34,0.3)]
                       hover:bg-[rgba(255,87,34,0.05)] transition-all duration-200"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.07]
                       text-[#64748b] hover:text-[#ff5722] hover:border-[rgba(255,87,34,0.3)]
                       hover:bg-[rgba(255,87,34,0.05)] transition-all duration-200"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
