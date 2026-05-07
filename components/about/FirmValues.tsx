'use client'

import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'Integrity',
    body: 'We hold ourselves to the highest ethical standards — in how we advise, how we act, and how we represent our clients.',
  },
  {
    number: '02',
    title: 'Precision',
    body: 'Every detail matters. We approach each matter with rigour, care, and an eye for what others miss.',
  },
  {
    number: '03',
    title: 'Client-First',
    body: 'Your outcome is our priority. We tailor our approach to your specific circumstances — no templates, no shortcuts.',
  },
  {
    number: '04',
    title: 'Results',
    body: 'We measure success by what we deliver, not by effort alone. Practical outcomes, every time.',
  },
]

export default function FirmValues() {
  return (
    <section className="bg-cream py-24 lg:py-36 px-6 sm:px-10 lg:px-16">

      {/* Label */}
      <motion.div
        className="flex items-center gap-3 mb-14 lg:mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="w-5 h-px bg-gold" />
        <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          Our Values
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-navy/10">
        {values.map((value, i) => (
          <motion.div
            key={value.number}
            className="relative group border-b md:border-b-0 lg:border-r border-navy/10 last:border-r-0 p-8 lg:p-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
          >
            {/* Gold top line on hover */}
            <div className="absolute top-0 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-500" />

            <span className="font-mono text-navy/20 text-xs block mb-8 group-hover:text-gold transition-colors duration-500">
              {value.number}
            </span>
            <h3 className="font-bold text-navy text-2xl lg:text-3xl mb-4 leading-tight tracking-[-0.02em]">
              {value.title}
            </h3>
            <p className="text-navy/45 text-sm leading-relaxed font-sans-ui">
              {value.body}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
