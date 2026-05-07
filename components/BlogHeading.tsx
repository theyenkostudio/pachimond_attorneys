'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HEADING_LINES = ['From the', 'legal desk.']

export default function BlogHeading() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
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
          Insights
        </span>
      </motion.div>

      <h2 className="text-[12vw] sm:text-[9vw] lg:text-[7vw] font-bold text-navy leading-[0.95] tracking-[-0.03em]">
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
  )
}
