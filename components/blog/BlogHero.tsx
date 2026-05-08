'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  slug: string
  category?: string
  author: string
  role?: string
  date: string
  imageUrl: string
}

export default function BlogHero({ title, slug, category, author, role, date, imageUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const formatted = date
    ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden">

      {/* Background image */}
      <Image
        src={imageUrl}
        fill
        alt={title}
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-navy/10" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-32 pb-16 lg:pb-24">

        {/* Top — label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="w-5 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
            {category || 'Our Blog'}
          </span>
        </motion.div>

        {/* Bottom — title + divider + meta */}
        <div>
          {/* Title */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-white font-bold text-[8.5vw] sm:text-[6vw] lg:text-[4.5vw] leading-[0.95] tracking-[-0.03em] max-w-4xl"
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : { y: '105%' }}
              transition={{ duration: 1.05, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {title}
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-white/20 origin-left mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          />

          {/* Meta + CTA */}
          <motion.div
            className="flex items-end justify-between gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <div>
              <p className="text-white/80 text-sm font-medium">{author}</p>
              {role && <p className="text-white/40 text-xs font-sans-ui mt-0.5">{role}</p>}
              <p className="text-white/40 text-xs font-sans-ui mt-1">{formatted}</p>
            </div>

            <Link
              href={`/blog/${slug}`}
              className="group relative overflow-hidden shrink-0 border border-white/30 text-white px-8 py-4 text-[10px] font-sans-ui tracking-[0.22em] uppercase inline-flex items-center"
            >
              <span className="absolute inset-0 bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                Read Full Article
              </span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
