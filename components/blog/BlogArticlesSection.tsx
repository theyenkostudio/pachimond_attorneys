'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Post = {
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  categories: { title: string } | null
  author: { name: string; role: string; image: string } | null
  mainImage: { url: string; alt: string } | null
}

const SORT_OPTIONS = [
  { key: 'newest', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
] as const

type SortKey = typeof SORT_OPTIONS[number]['key']

export default function BlogArticlesSection({ posts }: { posts: Post[] }) {
  const [sort, setSort] = useState<SortKey>('newest')

  const sorted = sort === 'oldest' ? [...posts].reverse() : posts

  return (
    <section className="bg-white py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
      <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16 xl:gap-24 items-start">

        {/* Left — label + sort */}
        <div className="flex flex-row items-center justify-between mb-12 lg:mb-0 lg:flex-col lg:items-start lg:sticky lg:top-32">
          <div className="flex items-center gap-3">
            <div className="w-5 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
              All Articles
            </span>
          </div>

          <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-3 lg:mt-10">
            {SORT_OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSort(key)}
                className="flex items-center gap-2.5 group"
              >
                <div className={`w-4 h-px transition-colors duration-300 ${sort === key ? 'bg-gold' : 'bg-transparent'}`} />
                <span className={`text-[10px] font-sans-ui tracking-[0.2em] uppercase transition-colors duration-300 ${sort === key ? 'text-navy' : 'text-navy/30 group-hover:text-navy/55'}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right — article list */}
        <div>
          {sorted.map((post) => {
            const formatted = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })
              : ''

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-t border-navy/10 py-8"
              >
                {post.categories?.title && (
                  <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-3">
                    {post.categories.title}
                  </p>
                )}
                <h3 className="text-navy font-bold text-2xl lg:text-3xl leading-tight tracking-[-0.02em] mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-navy/50 text-sm leading-relaxed font-sans-ui line-clamp-2 mb-5">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-navy/30 text-xs font-sans-ui">{formatted}</p>

                  {/* Mobile — text link */}
                  <span className="lg:hidden inline-flex items-center gap-1.5 text-[10px] font-sans-ui text-gold tracking-[0.2em] uppercase">
                    Read Article <ArrowUpRight className="h-3 w-3" />
                  </span>

                  {/* Desktop — circle arrow */}
                  <span className="hidden lg:flex relative w-11 h-11 rounded-full border border-gold overflow-hidden items-center justify-center shrink-0">
                    <span className="absolute inset-0 bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <ArrowUpRight className="relative h-3.5 w-3.5 text-gold group-hover:text-white transition-colors duration-300" />
                  </span>
                </div>
              </Link>
            )
          })}
          <div className="border-t border-navy/10" />
        </div>

      </div>
    </section>
  )
}
