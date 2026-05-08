import { practiceAreas } from '@/constants/practiceAreas'
import PracticeAreaHero from '@/components/practice-areas/PracticeAreaHero'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import WhatWeHandle from '@/components/practice-areas/WhatWeHandle'
import AnimatedSection from '@/components/motion/AnimatedSection'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pachimond-attorneys.vercel.app'

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = practiceAreas.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: area.title,
    description: area.tagline,
    openGraph: {
      title: `${area.title} | Pachimond Attorneys`,
      description: area.tagline,
      url: `${siteUrl}/practice-areas/${area.slug}`,
      images: [{ url: area.image, alt: area.title }],
    },
  }
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = practiceAreas.find((a) => a.slug === slug)
  if (!area) notFound()

  return (
    <>
      <PracticeAreaHero area={area} />

      {/* Overview */}
      <AnimatedSection className="bg-cream py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
              Overview
            </span>
          </div>
          <p className="text-navy text-xl lg:text-2xl leading-relaxed font-display">
            {area.overview}
          </p>
        </div>
      </AnimatedSection>

      <WhatWeHandle items={area.keyServices} />

      <AnimatedSection className="bg-cream py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
              Our Approach
            </span>
          </div>
          <p className="text-navy text-xl lg:text-2xl leading-relaxed font-display">
            {area.approach}
          </p>
        </div>
      </AnimatedSection>

    </>
  )
}
