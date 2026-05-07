'use client'

import { motion } from 'framer-motion'
import type { KeyService } from '@/constants/practiceAreas'

export default function WhatWeHandle({ items }: { items: KeyService[] }) {
  return (
    <section className="bg-white py-24 lg:py-36 px-6 sm:px-10 lg:px-16">

      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-16 lg:mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="w-5 h-px bg-gold" />
        <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          What We Handle
        </span>
      </motion.div>

      {/* List */}
      <div>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative group border-t border-navy/10 last:border-b"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {/* Gold top-line reveal on hover */}
            <div className="absolute top-0 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-500" />

            <div className="py-8 lg:py-10 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-0">

              {/* Number */}
              <span className="font-mono text-gold text-xs shrink-0 lg:w-16 pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="font-bold text-navy text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[-0.02em] flex-1 group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-navy/45 text-sm leading-relaxed font-sans-ui lg:max-w-xs xl:max-w-sm lg:text-right shrink-0">
                {item.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
