'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, X } from 'lucide-react'
import StaffMember from './StaffMember'
import TeamDrawer from './TeamDrawer'
import { practiceAreas as allAreas } from '@/constants/practiceAreas'

type SanityMember = {
  name: string
  title: string
  imageUrl: string
  bio?: string
  email?: string
  phone?: string
  practiceAreas?: string[]
}

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

function resolvePracticeAreas(slugs?: string[]) {
  if (!slugs?.length) return []
  return slugs.map((slug) => {
    const match = allAreas.find((a) => a.slug === slug)
    return { label: match?.title ?? slug, slug }
  })
}

export default function StaffMembersSection({ staffMembers }: { staffMembers: SanityMember[] }) {
  const [selected, setSelected] = useState<SanityMember | null>(null)

  const rows = chunk(staffMembers, 2)

  const handleSelect = (member: SanityMember) => {
    setSelected((prev) => (prev?.name === member.name ? null : member))
  }

  const resolvedPracticeAreas = selected ? resolvePracticeAreas(selected.practiceAreas) : []

  return (
    <section className="bg-white py-24 lg:py-36 px-6 sm:px-10 lg:px-16">

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
          Our Team
        </span>
      </motion.div>

      {/* Grid — mobile: 2-col rows with inline expansion | desktop: 4-col staggered */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-10">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="contents">
            {row.map((member, colIdx) => {
              const globalIdx = rowIdx * 2 + colIdx
              const isOdd = globalIdx % 2 === 1
              return (
                <motion.div
                  key={member.name}
                  className={`mb-10 lg:mb-0 ${isOdd ? 'lg:mt-24' : ''}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: globalIdx * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  <StaffMember
                    image={member.imageUrl}
                    job={member.title}
                    name={member.name}
                    bio={member.bio}
                    practiceAreas={resolvePracticeAreas(member.practiceAreas)}
                    onClick={() => handleSelect(member)}
                    isSelected={selected?.name === member.name}
                  />
                </motion.div>
              )
            })}

            {/* Mobile inline expansion */}
            <AnimatePresence>
              {selected && row.some((m) => m.name === selected.name) && (
                <motion.div
                  className="col-span-2 lg:hidden overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  <div className="bg-cream px-6 py-8 mb-10 relative">
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4 text-navy/40" />
                    </button>

                    <p className="font-bold text-navy text-xl leading-tight mb-1">{selected.name}</p>
                    <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans-ui mb-5">{selected.title}</p>

                    {selected.bio ? (
                      <p className="text-navy/60 text-sm leading-relaxed font-sans-ui mb-6">{selected.bio}</p>
                    ) : (
                      <p className="text-navy/30 italic text-sm font-sans-ui mb-6">Unknown</p>
                    )}

                    {resolvedPracticeAreas.length > 0 && (
                      <div className="mb-6">
                        <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-3">Practice Areas</p>
                        <div className="flex flex-wrap gap-2">
                          {resolvedPracticeAreas.map((area) => (
                            <Link
                              key={area.slug}
                              href={`/practice-areas/${area.slug}`}
                              className="border border-navy/15 px-3 py-1.5 text-xs font-sans-ui text-navy/60 hover:text-navy transition-colors"
                            >
                              {area.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      {selected.email ? (
                        <a href={`mailto:${selected.email}`} className="flex items-center gap-2 text-sm font-sans-ui text-navy/50 hover:text-navy transition-colors">
                          <Mail className="h-3.5 w-3.5 shrink-0" />
                          {selected.email}
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-sm font-sans-ui text-navy/30">
                          <Mail className="h-3.5 w-3.5 shrink-0" />
                          <span className="italic">Unknown</span>
                        </div>
                      )}
                      {selected.phone ? (
                        <a href={`tel:${selected.phone}`} className="flex items-center gap-2 text-sm font-sans-ui text-navy/50 hover:text-navy transition-colors">
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          {selected.phone}
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-sm font-sans-ui text-navy/30">
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          <span className="italic">Unknown</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Desktop slide-in drawer */}
      <TeamDrawer
        member={
          selected
            ? {
                name: selected.name,
                title: selected.title,
                imageUrl: selected.imageUrl,
                bio: selected.bio ?? '',
                email: selected.email ?? '',
                phone: selected.phone ?? '',
                practiceAreas: resolvedPracticeAreas,
              }
            : null
        }
        onClose={() => setSelected(null)}
      />

    </section>
  )
}
