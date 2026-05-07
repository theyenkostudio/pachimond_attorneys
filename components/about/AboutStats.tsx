'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

const stats = [
  { value: 10, suffix: '+', label: 'Years in Practice' },
  { value: 200, suffix: '+', label: 'Clients Served' },
  { value: 6, suffix: '', label: 'Practice Areas' },
  { value: 500, suffix: '+', label: 'Matters Handled' },
]

export default function AboutStats() {
  return (
    <section className="bg-white border-y border-navy/8 px-6 sm:px-10 lg:px-16 py-14 lg:py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-navy/8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center px-6 py-4 lg:py-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className="font-bold text-navy text-4xl lg:text-5xl xl:text-6xl leading-none tracking-[-0.03em] tabular-nums">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1600} />
            </span>
            <span className="text-navy/40 text-xs font-sans-ui uppercase tracking-[0.2em] mt-3">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
