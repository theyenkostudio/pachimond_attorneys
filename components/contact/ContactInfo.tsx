'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const details = [
  {
    number: '01',
    icon: Mail,
    label: 'Email',
    value: 'pachimondattorneys@gmail.com',
    href: 'mailto:pachimondattorneys@gmail.com',
  },
  {
    number: '02',
    icon: Phone,
    label: 'Phone',
    value: '09111447064',
    href: 'tel:+2349111447064',
  },
  {
    number: '03',
    icon: Phone,
    label: 'Phone',
    value: '07036608832',
    href: 'tel:+2347036608832',
  },
  {
    number: '04',
    icon: MapPin,
    label: 'Address',
    value: 'No. 15 Iriebe Street, D/Line, Port Harcourt',
    href: null,
  },
]

export default function ContactInfo() {
  return (
    <section className="bg-white py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-28 items-stretch">

        {/* Left — contact details */}
        <div className="mb-14 lg:mb-0 flex flex-col justify-between">

          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-5 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
              Our Office
            </span>
          </motion.div>

          {/* Detail rows */}
          <div className="flex-1">
            {details.map((item, i) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  key={item.number}
                  className="border-t border-navy/10 py-8 flex items-start gap-6 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  <span className="font-mono text-xs text-navy/20 w-6 shrink-0 pt-1">{item.number}</span>
                  <div className="flex-1">
                    <p className="text-[10px] font-sans-ui tracking-[0.22em] uppercase text-navy/40 mb-2">
                      {item.label}
                    </p>
                    <p className="text-navy font-bold text-lg leading-snug">
                      {item.value}
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full border border-navy/15 flex items-center justify-center mt-1">
                    <Icon className="h-3.5 w-3.5 text-navy/40" />
                  </div>
                </motion.div>
              )

              return item.href ? (
                <a key={item.number} href={item.href} className="block hover:opacity-70 transition-opacity duration-300">
                  {content}
                </a>
              ) : (
                <div key={item.number}>{content}</div>
              )
            })}
            <div className="border-t border-navy/10" />
          </div>
        </div>

        {/* Right — map */}
        <motion.div
          className="relative w-full h-[340px] lg:h-auto min-h-[400px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9!2d7.0134!3d4.7780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d17b67ee907f%3A0x8c73ff97fb786c0!2sD-Line%2C%20Port%20Harcourt%2C%20Rivers%20State!5e0!3m2!1sen!2sng!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.05) brightness(1.02)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  )
}
