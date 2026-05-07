'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Mail, Phone } from 'lucide-react'
import type { TeamMemberDetail } from '@/constants/team'

type Props = {
  member: (TeamMemberDetail & { imageUrl: string; title: string }) | null
  onClose: () => void
}

export default function TeamDrawer({ member, onClose }: Props) {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Overlay — desktop only */}
          <motion.div
            className="hidden lg:block fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel — desktop only */}
          <motion.div
            className="hidden lg:block fixed top-0 right-0 z-50 h-full w-[42vw] max-w-[560px] bg-white overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center hover:border-navy/40 transition-colors duration-300"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-navy/50" />
            </button>

            {/* Photo */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-cream">
              {member.imageUrl && (
                <Image
                  src={member.imageUrl}
                  fill
                  alt={member.name}
                  className="object-cover object-top"
                  sizes="560px"
                />
              )}
            </div>

            {/* Content */}
            <div className="px-8 lg:px-10 py-8">

              {/* Name + title */}
              <div className="mb-5">
                <h2 className="font-bold text-navy text-2xl lg:text-3xl leading-tight tracking-[-0.02em]">
                  {member.name}
                </h2>
                <p className="text-navy/45 text-sm font-sans-ui mt-1">
                  {member.title}
                </p>
              </div>

              <div className="h-px bg-navy/10 mb-5" />

              {/* Bio */}
              <p className="text-navy/65 text-sm leading-relaxed font-sans-ui mb-6">
                {member.bio || <span className="text-navy/30 ">Unknown</span>}
              </p>

              {/* Practice areas */}
              <div className="mb-6">
                <p className="text-navy font-bold text-xs uppercase tracking-[0.15em] font-sans-ui mb-3">
                  Practice Areas
                </p>
                {member.practiceAreas.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {member.practiceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/practice-areas/${area.slug}`}
                        className="group relative inline-flex border border-navy/15 px-4 py-2 text-xs font-sans-ui text-navy/60 overflow-hidden hover:border-navy/40 transition-colors duration-300"
                      >
                        <span className="absolute inset-0 bg-navy translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        <span className="relative group-hover:text-white transition-colors duration-300">
                          {area.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-navy/30  text-sm font-sans-ui">Unknown</p>
                )}
              </div>

              {/* Contact */}
              <div>
                <p className="text-navy font-bold text-xs uppercase tracking-[0.15em] font-sans-ui mb-3">
                  Contact
                </p>
                <div className="space-y-2">
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="group flex items-center gap-3 text-sm font-sans-ui text-navy/50 hover:text-navy transition-colors duration-300"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="group-hover:underline underline-offset-4">{member.email}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-sm font-sans-ui text-navy/30">
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="">Unknown</span>
                    </div>
                  )}
                  {member.phone ? (
                    <a
                      href={`tel:${member.phone}`}
                      className="group flex items-center gap-3 text-sm font-sans-ui text-navy/50 hover:text-navy transition-colors duration-300"
                    >
                      <Phone className="h-4 w-4 shrink-0" />
                      <span className="group-hover:underline underline-offset-4">{member.phone}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-sm font-sans-ui text-navy/30">
                      <Phone className="h-4 w-4 shrink-0" />
                      <span className="">Unknown</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
