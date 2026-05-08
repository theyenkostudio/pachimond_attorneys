'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  title: string
  author: string
  role?: string
  date: string
  category?: string
}

export default function ArticleHeader({ title, author, role, date, category }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const formatted = date
    ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <div>
      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="w-5 h-px bg-gold" />
        <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          {category || 'Article'}
        </span>
      </motion.div>

      {/* Title */}
      <div ref={ref} className="mb-10">
        <h1 className="text-[9vw] sm:text-[7vw] lg:text-[5.2vw] font-bold text-navy leading-[0.95] tracking-[-0.025em]">
          <div className="overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '105%' }}
              animate={inView ? { y: 0 } : { y: '105%' }}
              transition={{ duration: 1.05, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {title}
            </motion.span>
          </div>
        </h1>
      </div>

      {/* Meta */}
      <motion.div
        className="flex items-center gap-5"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div>
          <p className="text-navy font-medium text-sm">{author}</p>
          {role && <p className="text-navy/40 text-xs font-sans-ui mt-0.5">{role}</p>}
        </div>
        <div className="w-px h-8 bg-navy/15 shrink-0" />
        <p className="text-navy/40 text-xs font-sans-ui">{formatted}</p>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="h-px bg-navy/10 origin-left mt-12"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      />
    </div>
  )
}
