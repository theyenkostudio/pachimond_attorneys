'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import RouterButton from '@/components/RouterButton'
import type { PracticeArea } from '@/constants/practiceAreas'

export default function PracticeAreaHero({ area }: { area: PracticeArea }) {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy">

      {/* Background — Ken Burns slow zoom out */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: 'easeOut' }}
      >
        <Image
          src={area.image}
          fill
          priority
          className="object-cover object-center"
          alt={area.title}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/25" />
      </motion.div>

      {/* Top editorial bar */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-28 lg:pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <ArrowLeft className="h-3.5 w-3.5 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
          <span className="text-white/40 group-hover:text-white text-[10px] tracking-[0.28em] uppercase font-sans-ui transition-colors duration-300">
            Practice Areas
          </span>
        </Link>
        <span className="text-white/40 text-[10px] tracking-[0.28em] uppercase font-sans-ui font-mono">
          {area.number}
        </span>
      </motion.div>

      {/* Headline — mask reveal */}
      <div className="relative z-10 flex-1 flex items-end px-6 sm:px-10 lg:px-16 pb-6">
        <h1 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-bold text-white leading-[0.88] tracking-[-0.03em]">
          {area.heroLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.55 + i * 0.13,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h1>
      </div>

      {/* Divider line — draws left to right */}
      <motion.div
        className="relative z-10 mx-6 sm:mx-10 lg:mx-16 h-px bg-white/15 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.9,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      />

      {/* Bottom bar */}
      <motion.div
        className="relative z-10 px-6 sm:px-10 lg:px-16 py-7 lg:py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-white/50 text-lg font-semibold max-w-sm leading-relaxed font-sans-ui">
          {area.tagline}
        </p>
        <RouterButton path="/contact" variant="light" />
      </motion.div>

    </section>
  )
}
