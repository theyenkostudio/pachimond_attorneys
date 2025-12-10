import BlogHeader from "@/components/blog/BlogHeader";
import TrendingCard from "@/components/blog/TrendingCard";
import React from "react";
import BlogTopics from "@/components/blog/BlogTopics";
import { getBlogPosts } from "@/sanity/lib/server-api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Blog',
};


export default async function BlogHome() {
  const postsResp = await getBlogPosts();

  const posts = postsResp?.data;

  if (!posts || posts.length === 0) {
    return <p className="text-center mt-10">No blog posts available.</p>;
  }

  const headerPost = posts[0];
  const trendingPosts = posts?.slice(1, 3);
  const topicPosts = posts?.slice(3);

  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        {/* Header post */}
        <BlogHeader
          title={headerPost.title}
          author={headerPost.author.name}
          timePosted={headerPost.publishedAt}
          excerpt={headerPost.excerpt}
          imageUrl={headerPost.mainImage.url}
          jobTitle={headerPost.author.role}
          link={headerPost.slug}
        />

        {/* Trending */}
        {trendingPosts.length > 0 && (
          <div className="my-10">
            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Trending
            </h3>
            <div className="mt-3 space-y-5">
              {trendingPosts?.map(
                (post: {
                  title: string;
                  mainImage: { url: string };
                  excerpt: string;
                  subject: string;
                  slug: string;
                  publishedAt: string;
                  author: { name: string, image: string };
                }) => (
                  <TrendingCard
                    key={post.slug}
                    title={post.title}
                    author={post.author.name}
                    timePosted={post.publishedAt}
                    imageUrl={post.mainImage.url}
                    authorImageUrl={post.author.image}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                )
              )}
            </div>
          </div>
        )}

        {/* Topics */}
        {topicPosts.length > 0 && <BlogTopics posts={topicPosts} />}
      </div>
    </section>
  );
}
