import React from "react";
import BlogTopicCard from "./BlogTopicCard";

type BlogTopicsProps = {
  posts: {
    title: string;
    mainImage: { url: string };
    excerpt: string;
    categories: {title:string};
    slug: string;
  }[];
};

export default function BlogTopics({ posts }: BlogTopicsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mb-20">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl my-12">
        Blog topics
      </h3>
      <div className="space-y-3">
        {posts.map((post) => (
          <BlogTopicCard
            key={post.slug}
            title={post.title}
            imageUrl={post.mainImage.url}
            excerpt={post.excerpt}
            subject={post.categories.title || "General"}
            link={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
