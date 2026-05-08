import BlogHero from '@/components/blog/BlogHero'
import BlogArticlesSection from '@/components/blog/BlogArticlesSection'
import { getBlogPosts } from '@/sanity/lib/server-api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Blog',
}

export default async function BlogHome() {
  const postsResp = await getBlogPosts()
  const posts = postsResp?.data

  if (!posts || posts.length === 0) {
    return (
      <section className="bg-cream py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
        <p className="text-navy/50 font-sans-ui">No blog posts available.</p>
      </section>
    )
  }

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div>

      {/* Hero — featured post */}
      <BlogHero
        title={featured.title}
        slug={featured.slug}
        category={featured.categories?.title}
        author={featured.author.name}
        role={featured.author.role}
        date={featured.publishedAt}
        imageUrl={featured.mainImage.url}
      />

      {/* All other posts */}
      {rest.length > 0 && <BlogArticlesSection posts={rest} />}

    </div>
  )
}
