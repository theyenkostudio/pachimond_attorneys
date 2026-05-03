'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HEADING_LINES = ['Common', 'questions.']

export default function FAQHeading() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="lg:sticky lg:top-32 mb-14 lg:mb-0">
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="w-5 h-px bg-gold" />
        <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          FAQs
        </span>
      </motion.div>

      <div ref={ref}>
        <h2 className="text-[13vw] sm:text-[10vw] lg:text-[7.5vw] font-bold text-navy leading-[0.92] tracking-[-0.03em] mb-8">
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
        className="text-navy/45 text-base leading-relaxed max-w-xs font-sans-ui"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Everything you need to know before you engage us. Don&apos;t see your
        question? Reach out directly.
      </motion.p>
    </div>
  )
}
