'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const HEADER_LINES = ['When the stakes', 'are high,', 'we deliver.']

const services = [
  {
    number: '01',
    title: 'Litigation',
    description: 'Representation in civil and commercial disputes, with a focus on achieving practical and efficient outcomes.',
    image: '/services/litigation.jpg',
  },
  {
    number: '02',
    title: 'Corporate Law',
    description: 'Advisory on company formation, governance, compliance, and regulatory matters.',
    image: '/services/corporate.jpg',
  },
  {
    number: '03',
    title: 'Commercial Law',
    description: 'Structuring, reviewing, and advising on business transactions and agreements.',
    image: '/services/commercial.jpg',
  },
  {
    number: '04',
    title: 'Intellectual Property',
    description: 'Protection of trademarks, copyrights, and other proprietary rights.',
    image: '/services/ip.jpg',
  },
  {
    number: '05',
    title: 'Ethics & Professional Responsibility',
    description: 'Advisory on ethical compliance, professional standards, and best practices in legal and corporate environments.',
    image: '/services/corporate.jpg',
  },
  {
    number: '06',
    title: 'Data Protection & Cybersecurity',
    description: 'Guidance on data privacy, regulatory compliance, and risk management in an increasingly digital environment.',
    image: '/services/ip.jpg',
  },
]

export default function Services() {
  const [active, setActive] = useState<number>(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16">

        {/* Header — mask reveal + subtitle */}
        <div className="mb-16 lg:mb-24 lg:flex lg:items-end lg:justify-between gap-16">
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
                Practice Areas
              </span>
            </motion.div>

            <h2 className="text-[12vw] sm:text-[9vw] lg:text-[7vw] font-bold text-navy leading-[0.95] tracking-[-0.03em]">
              {HEADER_LINES.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: '105%' }}
                    animate={headerInView ? { y: 0 } : { y: '105%' }}
                    transition={{
                      duration: 1.05,
                      delay: 0.08 + i * 0.11,
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
            className="text-navy/45 text-sm max-w-xs leading-relaxed font-sans-ui mt-6 lg:mt-0 shrink-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Specialised legal expertise across every dimension of your challenge.
          </motion.p>
        </div>

        {/* Desktop: split-screen list + sticky portal */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-20 xl:gap-28 items-start">

          {/* Left — typography-first service list */}
          <div>
            {services.map((service, i) => {
              const isActive = active === i
              return (
                <div
                  key={service.number}
                  className="border-t border-navy/10 cursor-pointer"
                  onMouseEnter={() => setActive(i)}
                >
                  <div className="py-7 flex items-center gap-6">
                    <span
                      className={`font-mono text-xs w-8 shrink-0 transition-colors duration-500 ${
                        isActive ? 'text-gold' : 'text-navy/20'
                      }`}
                    >
                      {service.number}
                    </span>

                    <h3
                      className={`font-bold flex-1 text-5xl xl:text-6xl leading-none tracking-[-0.02em] transition-colors duration-500 ${
                        isActive ? 'text-navy' : 'text-navy/18'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <motion.div
                      animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                      className="shrink-0 w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center"
                    >
                      <ArrowUpRight className="h-4 w-4 text-gold" />
                    </motion.div>
                  </div>
                </div>
              )
            })}
            <div className="border-t border-navy/10" />
          </div>

          {/* Right — sticky cinematic portal */}
          <div className="sticky top-24">

            {/* Image portal */}
            <div className="relative w-full h-[60vh] overflow-hidden bg-cream">
              <AnimatePresence>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.07 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  <Image
                    src={services[active].image}
                    fill
                    className="object-cover object-center"
                    alt={services[active].title}
                    sizes="45vw"
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description — cross-fades below the portal */}
            <div className="mt-5 min-h-[4rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  className="text-navy/55 text-sm leading-relaxed font-sans-ui max-w-sm"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {services[active].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile — light divider list */}
        <div className="lg:hidden divide-y divide-navy/10">
          {services.map((service) => (
            <div key={service.number} className="py-7">
              <span className="text-gold font-mono text-xs">{service.number}</span>
              <h3 className="text-navy font-bold text-3xl mt-1 tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="text-navy/50 text-sm mt-3 leading-relaxed font-sans-ui">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
