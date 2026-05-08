import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type TrendingCardProps = {
  title: string
  author: string
  timePosted: string
  imageUrl: string
  excerpt: string
  slug: string
  category?: string
  authorImageUrl?: string
}

export default function TrendingCard({
  title,
  author,
  timePosted,
  imageUrl,
  excerpt,
  slug,
  category,
}: TrendingCardProps) {
  const formatted = timePosted
    ? new Date(timePosted).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden mb-6 aspect-[3/2] w-full">
        <Image
          src={imageUrl}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Category */}
      {category && (
        <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-3">
          {category}
        </p>
      )}

      {/* Title */}
      <h3 className="text-navy font-bold text-2xl lg:text-3xl leading-tight tracking-[-0.02em] mb-4 group-hover:text-gold transition-colors duration-300 flex-1">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-navy/50 text-base leading-relaxed font-sans-ui line-clamp-2 mb-6">
        {excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-navy/30 text-xs font-sans-ui tracking-wide">{formatted}</p>
        <span className="relative w-11 h-11 rounded-full border border-gold overflow-hidden flex items-center justify-center shrink-0">
          <span className="absolute inset-0 bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          <ArrowUpRight className="relative h-3.5 w-3.5 text-gold group-hover:text-white transition-colors duration-300" />
        </span>
      </div>

    </Link>
  )
}
