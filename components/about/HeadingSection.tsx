'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const HEADING_LINES = ['Your trusted partner', 'in every legal journey.']

export default function HeadingSection({ about }: { about: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-cream py-24 lg:py-36 px-6 sm:px-10 lg:px-16">

      {/* Editorial bar */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="w-5 h-px bg-gold" />
        <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          About Us
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

      {/* About text */}
      <motion.p
        className="text-navy/60 text-lg lg:text-xl leading-relaxed font-sans-ui max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
      >
        {about}
      </motion.p>

    </section>
  )
}
