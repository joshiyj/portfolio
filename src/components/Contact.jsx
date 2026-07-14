import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { personal } from '../data/portfolio'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error')
      setErrorMsg('Please fill out all fields.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection.')
    } finally {
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[#f8fafc] text-sm placeholder-[#64748b] ' +
    'focus:outline-none focus:border-[#ff5722] focus:bg-[rgba(255,87,34,0.04)] transition-all duration-200'

  return (
    <section id="contact" className="section-py relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Get In <span className="text-[#ff5722]">Touch</span>
          </h2>
          <div className="w-14 h-1 bg-[#ff5722] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-[#f8fafc] mb-4">Let's talk about a project</h3>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              I am currently seeking opportunities to contribute, learn, and grow as a software engineer.
              If you have an open role, want to collaborate on a project, or just want to connect, feel free to drop a message!
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: <Phone size={18} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s|-/g, '')}` },
                { icon: <MapPin size={18} />, label: 'Location', value: personal.location, href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(255,87,34,0.1)] border border-[rgba(255,87,34,0.15)]
                                  flex items-center justify-center text-[#ff5722] flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#64748b] font-medium uppercase tracking-wide mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-[#f8fafc] hover:text-[#ff5722] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-[#f8fafc]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { href: personal.github, label: 'GitHub', icon: <GithubIcon size={18} /> },
                { href: personal.linkedin, label: 'LinkedIn', icon: <LinkedinIcon size={18} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08]
                             bg-white/[0.02] text-[#94a3b8] hover:text-[#ff5722] hover:border-[#ff5722]
                             hover:bg-[rgba(255,87,34,0.05)] hover:-translate-y-1 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-[rgba(22,27,34,0.65)] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl p-7 sm:p-8"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#94a3b8] mb-1.5 uppercase tracking-wide">Name</label>
                  <input id="name" name="name" type="text" required placeholder="John Doe" value={form.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#94a3b8] mb-1.5 uppercase tracking-wide">Email</label>
                  <input id="email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs font-medium text-[#94a3b8] mb-1.5 uppercase tracking-wide">Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="Let's build something amazing!" value={form.subject} onChange={handleChange} className={inputClass} />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-medium text-[#94a3b8] mb-1.5 uppercase tracking-wide">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Your message details..." value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#ff5722] text-white font-medium
                           shadow-[0_4px_14px_rgba(255,87,34,0.3)] hover:bg-[#ff784e] hover:-translate-y-0.5
                           hover:shadow-[0_6px_20px_rgba(255,87,34,0.45)] disabled:opacity-60 disabled:cursor-not-allowed
                           disabled:transform-none transition-all duration-200"
              >
                {status === 'loading' ? (
                  <><Loader size={16} className="animate-spin" /> Sending…</>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>

              {/* Status feedback */}
              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 flex items-center gap-2 text-sm px-4 py-3 rounded-xl border ${
                      status === 'success'
                        ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                        : 'text-red-400 bg-red-400/10 border-red-400/20'
                    }`}
                  >
                    {status === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {status === 'success'
                      ? 'Message sent successfully! I\'ll get back to you soon.'
                      : errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
