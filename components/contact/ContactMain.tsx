'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactForm from './ContactForm'

const HEADING_LINES = ["Let's start", "the conversation."]

export default function ContactMain() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-24 lg:py-36 px-6 sm:px-10 lg:px-16">

      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="w-5 h-px bg-gold" />
        <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          Contact Us
        </span>
      </motion.div>

      {/* Heading — mask reveal */}
      <div ref={ref} className="mb-14 lg:mb-20">
        <h1 className="text-[11vw] sm:text-[8.5vw] lg:text-[6.5vw] font-bold text-navy leading-[0.92] tracking-[-0.03em]">
          {HEADING_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : { y: '105%' }}
                transition={{
                  duration: 1.05,
                  delay: 0.1 + i * 0.12,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h1>
      </div>

      {/* Divider */}
      <motion.div
        className="h-px bg-navy/10 origin-left mb-14 lg:mb-20"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
      />

      {/* Two-column layout */}
      <motion.div
        className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-20 xl:gap-28 items-start"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
      >
        {/* Left — context copy */}
        <div className="mb-14 lg:mb-0">
          <p className="text-navy/60 text-lg leading-relaxed font-sans-ui mb-12">
            Take the first step with Pachimond Attorneys. Your consultation is
            free — no obligations, just clear legal advice and a strategy focused
            on protecting your interests.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-sans-ui tracking-[0.22em] uppercase text-navy/40 mb-2">
                Customer Support
              </p>
              <p className="text-navy/60 text-base font-sans-ui leading-relaxed">
                Our support team is ready to help with any inquiries or concerns
                you may have.
              </p>
            </div>

            <div className="h-px bg-navy/8" />

            <div>
              <p className="text-[10px] font-sans-ui tracking-[0.22em] uppercase text-navy/40 mb-2">
                Feedback &amp; Questions
              </p>
              <p className="text-navy/60 text-base font-sans-ui leading-relaxed">
                Have feedback or a question? Share your thoughts and we&apos;ll
                respond promptly.
              </p>
            </div>
          </div>
        </div>

        {/* Right — form card */}
        <div className="bg-white px-8 py-10 lg:px-10 lg:py-12">
          <ContactForm />
        </div>
      </motion.div>

    </section>
  )
}
