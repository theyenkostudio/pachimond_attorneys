'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'

const HEADING_LINES = ["Let's talk."]

export default function FooterContactForm() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' })
  const [agreed, setAgreed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    const params = new URLSearchParams({
      name: form.name,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    })
    router.push(`/contact?${params.toString()}`)
  }

  const fieldClass =
    'w-full bg-transparent border-b border-white/15 text-white placeholder:text-white/25 py-5 text-sm font-sans-ui focus:outline-none focus:border-gold/50 transition-colors duration-300'

  return (
    <div className="px-6 sm:px-10 lg:px-16 pt-24 pb-20">

      {/* Header */}
      <div className="lg:flex lg:items-end lg:justify-between gap-16 mb-16 lg:mb-20">
        <div ref={ref}>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-5 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-[13vw] sm:text-[9vw] lg:text-[7vw] font-bold text-white leading-[0.95] tracking-[-0.03em]">
            {HEADING_LINES.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={inView ? { y: 0 } : { y: '105%' }}
                  transition={{
                    duration: 1.05,
                    delay: 0.08 + i * 0.12,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h2>
        </div>

        <motion.p
          className="text-white/35 text-base max-w-xs leading-relaxed font-sans-ui mt-6 lg:mt-0 shrink-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Fill out the form below and we will get back to you as soon as possible.
          No obligations — just clear legal advice.
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-16 mb-0">
          <input
            type="text"
            required
            placeholder="Name*"
            value={form.name}
            onChange={set('name')}
            className={fieldClass}
          />
          <input
            type="tel"
            required
            placeholder="Phone*"
            value={form.phone}
            onChange={set('phone')}
            className={fieldClass}
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={set('subject')}
          className={`${fieldClass} mt-0`}
        />

        {/* Message */}
        <textarea
          rows={5}
          placeholder="Message"
          value={form.message}
          onChange={set('message')}
          className={`${fieldClass} resize-none mt-0`}
        />

        {/* Checkbox */}
        <div className="flex items-center gap-3 mt-10">
          <button
            type="button"
            onClick={() => setAgreed((v) => !v)}
            className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-colors duration-200 ${
              agreed ? 'border-gold bg-gold' : 'border-white/25'
            }`}
            aria-checked={agreed}
            role="checkbox"
          >
            {agreed && (
              <svg viewBox="0 0 10 8" className="w-2.5 h-2 fill-none stroke-white stroke-[1.5]">
                <polyline points="1 4 3.5 6.5 9 1" />
              </svg>
            )}
          </button>
          <span className="text-white/35 text-xs font-sans-ui">
            I agree with the{' '}
            <a href="/privacy-policy" className="text-white/55 hover:text-gold transition-colors underline underline-offset-2">
              Privacy Policy
            </a>
          </span>
        </div>

        {/* Circular submit */}
        <div className="mt-12">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative w-36 h-36 rounded-full border border-white/20 hover:border-gold overflow-hidden flex items-center justify-center transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative text-white/45 group-hover:text-white text-sm tracking-[0.2em] uppercase font-sans-ui transition-colors duration-300">
              Submit
            </span>
          </motion.button>
        </div>
      </motion.form>
    </div>
  )
}
