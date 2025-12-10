import { getOtherPosts } from "@/sanity/lib/server-api";
import React from "react";
import BlogTopicCard from "./BlogTopicCard";

type Post = {
  title: string;
  excerpt: string;
  slug: string;
  mainImage: {
    url: string;
  };
  subject: string;
};

export default async function OtherPosts({ slug }: { slug: string }) {
  const otherPostsRes = await getOtherPosts(slug);
  const otherPosts = otherPostsRes.data
  if (!otherPosts || otherPosts.length === 0) {
    return <div>No other posts available</div>;
  }
  return (
    <div className="my-14">
      <h2 className="font-bold text-2xl md:text-3xl mt-12 mb-6">Blog topics</h2>
      <div className="space-y-3">
        {otherPosts?.map((post: Post, i: number) => (
          <BlogTopicCard
            link={post.slug}
            key={i}
            title={post.title}
            imageUrl={post.mainImage.url}
            subject={post.subject}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
