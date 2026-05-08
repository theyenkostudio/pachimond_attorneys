'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ManagingDirectorMsg({ message }: { message: string }) {
  return (
    <section className="bg-white py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl">

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="w-5 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
            A Word From Our Founder
          </span>
        </motion.div>

        {/* Large opening mark */}
        <motion.span
          className="block font-display text-gold text-[7rem] leading-none mb-2 select-none"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          aria-hidden
        >
          &ldquo;
        </motion.span>

        {/* Message */}
        <motion.p
          className="text-navy text-xl lg:text-2xl leading-relaxed font-display"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {message}
        </motion.p>

      </div>

      {/* Full-width divider */}
      <div className="border-t border-navy/10 mt-12" />

      {/* Attribution */}
      <motion.div
        className="flex items-center gap-4 pt-10 max-w-3xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
      >
        <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/testimonials/amarachi.jpg"
            fill
            alt="Glory Ovia Ovrampor"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="font-bold text-navy text-base leading-tight tracking-[-0.01em]">
            Glory Ovia Ovrampor
          </p>
          <p className="text-navy/45 text-sm font-sans-ui mt-0.5">
            Managing Partner &amp; Founder
          </p>
        </div>
      </motion.div>

    </section>
  )
}
