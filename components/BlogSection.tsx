import { getBlogPosts } from '@/sanity/lib/server-api'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import BlogHeading from './BlogHeading'

type Post = {
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  categories: { title: string } | null
  author: { name: string; role: string; image: string } | null
  mainImage: { url: string; alt: string } | null
}

export default async function BlogSection() {
  const result = await getBlogPosts()
  const posts: Post[] = (result?.data ?? []).slice(0, 3)

  if (!posts.length) return null

  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-14 lg:mb-20 lg:flex lg:items-end lg:justify-between gap-16">
          <BlogHeading />
          <Link
            href="/blog"
            className="shrink-0 group relative w-36 h-36 rounded-full border border-navy/20 overflow-hidden flex items-center justify-center mt-6 lg:mt-0 hover:border-gold transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative text-navy/50 group-hover:text-white text-sm tracking-[0.2em] uppercase font-sans-ui transition-colors duration-300">
              View All
            </span>
          </Link>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-navy/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border-b md:last:border-b-0 lg:border-b-0 lg:border-r border-navy/10 last:border-r-0 pt-8 pb-10 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col"
            >
              {/* Image */}
              {post.mainImage?.url && (
                <div className="relative overflow-hidden mb-6 aspect-[3/2] w-full">
                  <Image
                    src={post.mainImage.url}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={post.mainImage.alt || post.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Category */}
              {post.categories?.title && (
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-3">
                  {post.categories.title}
                </p>
              )}

              {/* Title */}
              <h3 className="text-navy font-bold text-2xl lg:text-3xl leading-tight tracking-[-0.02em] mb-4 group-hover:text-gold transition-colors duration-300 flex-1">
                {post.title}
              </h3>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-navy/50 text-base leading-relaxed font-sans-ui line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
              )}

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto">
                <p className="text-navy/30 text-xs font-sans-ui tracking-wide">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })
                    : ''}
                </p>
                <span className="relative w-11 h-11 rounded-full border border-navy/20 overflow-hidden flex items-center justify-center shrink-0">
                  <span className="absolute inset-0 bg-navy translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <ArrowUpRight className="relative h-3.5 w-3.5 text-navy/30 group-hover:text-white transition-colors duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
