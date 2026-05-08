import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type BlogHeaderProps = {
  title: string
  author: string
  jobTitle?: string
  timePosted: string
  excerpt: string
  imageUrl: string
  link: string
  category?: string
}

export default function BlogHeader({
  title,
  author,
  jobTitle,
  timePosted,
  excerpt,
  imageUrl,
  link,
  category,
}: BlogHeaderProps) {
  const formatted = timePosted
    ? new Date(timePosted).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:gap-24 items-center">

      {/* Image */}
      <Link href={`/blog/${link}`} className="group block relative overflow-hidden aspect-[4/3] w-full mb-8 lg:mb-0">
        <Image
          src={imageUrl}
          fill
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
      </Link>

      {/* Content */}
      <div>
        {category && (
          <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-5">
            {category}
          </p>
        )}

        <Link href={`/blog/${link}`} className="group">
          <h2 className="text-navy font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-[-0.025em] mb-6 group-hover:text-gold transition-colors duration-300">
            {title}
          </h2>
        </Link>

        <p className="text-navy/50 text-base leading-relaxed font-sans-ui mb-8 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-navy text-sm font-medium">{author}</p>
            {jobTitle && <p className="text-navy/40 text-xs font-sans-ui mt-0.5">{jobTitle}</p>}
            <p className="text-navy/30 text-xs font-sans-ui mt-1">{formatted}</p>
          </div>

          <Link
            href={`/blog/${link}`}
            className="group/btn relative overflow-hidden shrink-0 border border-navy text-navy px-6 py-3 text-[10px] font-sans-ui tracking-[0.2em] uppercase inline-flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-gold -translate-x-[101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]" />
            <span className="relative group-hover/btn:text-white transition-colors duration-300 flex items-center gap-2">
              Read Article <ArrowUpRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>

    </div>
  )
}
