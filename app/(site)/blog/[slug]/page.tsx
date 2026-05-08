import { defaultSEO } from '@/constants/seo'
import { getBlogPost } from '@/sanity/lib/server-api'
import OtherPosts from '@/components/blog/OtherPosts'
import ArticleHero from '@/components/blog/ArticleHero'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/blog/PortableTextComponents'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const postRes = await getBlogPost(slug)
  const post = postRes.data

  if (!post) {
    return {
      title: `Not found | ${defaultSEO.title}`,
      description: defaultSEO.description,
    }
  }

  const title = post.title || defaultSEO.title
  const description = post.excerpt || defaultSEO.description
  const image = post.mainImage?.url || defaultSEO.image

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${defaultSEO.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : [],
      images: [{ url: image, alt: post.mainImage?.alt || title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const postRes = await getBlogPost(slug)
  const post = postRes.data

  if (!post) {
    return (
      <section className="bg-cream py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
        <p className="text-navy/50 font-sans-ui">Article not found.</p>
      </section>
    )
  }

  return (
    <div>

      {/* Hero — main image as background */}
      {post.mainImage?.url && (
        <ArticleHero
          title={post.title}
          author={post.author?.name ?? ''}
          role={post.author?.role}
          date={post.publishedAt}
          category={post.categories?.[0]?.title}
          imageUrl={post.mainImage.url}
        />
      )}

      {/* Article body */}
      <section className="bg-white py-16 lg:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </section>

      {/* More articles */}
      <OtherPosts slug={slug} />

    </div>
  )
}
