'use client'

import { useState, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { useCursor } from './providers/CursorContext'

type Testimonial = {
  imageUrl: string
  name: string
  text: string
  title: string
}

const HEADING_LINES = ['What our clients', 'say about us.']

const BG_TINTS = ['#f5f3ef', '#f0ece4', '#e8e2d6']

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const { setMode } = useCursor()
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const dividersInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const go = (next: number, dir: number) => {
    setDirection(dir)
    setActive(next)
  }
  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1, -1)
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1, 1)

  const t = testimonials[active]

  const lines = useMemo(() => {
    if (!t) return []
    return t.text.split(/\.\s+/).map((s, i, arr) => (i < arr.length - 1 ? s + '.' : s)).filter(Boolean)
  }, [t])

  if (!testimonials.length) return null

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      animate={{ backgroundColor: BG_TINTS[active % BG_TINTS.length] }}
      transition={{ duration: 1, ease: 'easeOut' }}
      onMouseEnter={() => setMode('drag')}
      onMouseLeave={() => setMode('default')}
    >
      {/* Vertical dividers */}
      <motion.div
        className="absolute left-6 sm:left-10 lg:left-16 top-0 bottom-0 w-px bg-navy/8 origin-top"
        animate={dividersInView ? { scaleY: 1 } : { scaleY: 0 }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 1.4, ease: [0.215, 0.61, 0.355, 1] }}
      />
      <motion.div
        className="absolute right-6 sm:right-10 lg:right-16 top-0 bottom-0 w-px bg-navy/8 origin-top"
        animate={dividersInView ? { scaleY: 1 } : { scaleY: 0 }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      />

      <div className="px-6 sm:px-10 lg:px-16">

        {/* Header row */}
        <div className="flex items-end justify-between gap-10 mb-16 lg:mb-24">
          <div ref={headerRef}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="w-5 h-px bg-gold" />
              <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
                Client Stories
              </span>
            </motion.div>

            <h2 className="text-[12vw] sm:text-[9vw] lg:text-[7vw] font-bold text-navy leading-[0.95] tracking-[-0.03em]">
              {HEADING_LINES.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: '105%' }}
                    animate={headerInView ? { y: 0 } : { y: '105%' }}
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

          {/* Counter + progress */}
          <motion.div
            className="flex flex-col items-end gap-4 shrink-0 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-navy/30 text-xs font-mono tracking-widest hidden sm:block">
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-px transition-all duration-500 ${
                    i === active ? 'w-10 bg-gold' : 'w-5 bg-navy/20'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Draggable content */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, { offset, velocity }) => {
            if (offset.x < -60 || velocity.x < -400) next()
            if (offset.x > 60 || velocity.x > 400) prev()
          }}
          className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-20 xl:gap-28 select-none"
        >
          {/* Left — large grayscale portrait with curtain reveal */}
          <div className="relative h-[70vw] max-h-[520px] lg:h-[680px] overflow-hidden mb-10 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t.imageUrl ? (
                  <Image
                    src={t.imageUrl}
                    fill
                    className="object-cover object-top grayscale contrast-110"
                    alt={t.name}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-navy/10" />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Curtain reveal on slide change */}
            <AnimatePresence>
              <motion.div
                key={`curtain-${active}`}
                className="absolute inset-0 z-10 origin-right bg-[#f5f3ef]"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1], delay: 0.05 }}
              />
            </AnimatePresence>
          </div>

          {/* Right — staggered text reveal */}
          <div className="relative flex flex-col justify-center">
            {/* Massive low-opacity quote mark */}
            <span
              className="absolute -top-6 lg:-top-12 -left-2 lg:-left-4 text-[38vw] lg:text-[18vw] font-display text-navy/[0.04] leading-none select-none pointer-events-none"
              aria-hidden
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${active}`}
                className="relative z-10"
                exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
              >
                {/* Staggered line reveal */}
                <div className="mb-10 lg:mb-14">
                  {lines.map((line, i) => (
                    <div key={i} className="overflow-hidden">
                      <motion.p
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold text-navy leading-[1.25] tracking-[-0.02em]"
                        initial={{ y: '105%' }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.85,
                          delay: i * 0.12,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                      >
                        {line}
                      </motion.p>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: lines.length * 0.12 + 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <div className="w-8 h-px bg-gold shrink-0" />
                  <div>
                    <p className="text-navy font-semibold text-sm leading-none">{t.name}</p>
                    <p className="text-navy/40 text-[10px] tracking-[0.22em] uppercase font-sans-ui mt-1.5">
                      {t.title}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile swipe hint */}
        <motion.p
          className="lg:hidden text-center text-[10px] tracking-[0.28em] uppercase font-sans-ui text-navy/30 mt-5"
          animate={{ opacity: [0.3, 0.65, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          aria-hidden
        >
          ← swipe →
        </motion.p>

      </div>
    </motion.section>
  )
}
