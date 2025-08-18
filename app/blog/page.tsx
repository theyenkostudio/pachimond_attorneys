import BlogHeader from "@/components/blog/BlogHeader";
import TrendingCard from "@/components/blog/TrendingCard";
import React from "react";
import BlogTopics from "@/components/blog/BlogTopics";
import { getBlogPosts } from "@/sanity/lib/server-api";

export default async function BlogHome() {
  const posts = await getBlogPosts()
  console.log(posts[0].excerpt)
  const headerPost = posts[0]
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <BlogHeader
          title={headerPost.title}
          author={headerPost.author.name}
          timePosted={"11:00am "}
          excerpt={headerPost.excerpt}
          imageUrl={headerPost.mainImage.url}
          jobTitle={headerPost.author.role}
        />
        <div className="mt-10">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Trending
          </h3>
          <div className="mt-3 space-y-5">
            <TrendingCard
              title={
                "How Businesses Can Safeguard Intellectual Property in the Digital Age"
              }
              author={"Amaka Eze"}
              timePosted={"10:30pm"}
              imageUrl={"/trending-img.jpg"}
              excerpt={
                "As the digital economy grows, so does the risk of unauthorized use, copying, and theft of creative assets. From brand logos and product designs to software and online content, intellectual property is increasingly under threat — and too many businesses only act after damage has been done"
              }
            />
            <TrendingCard
              title={
                "How Businesses Can Safeguard Intellectual Property in the Digital Age"
              }
              author={"Amaka Eze"}
              timePosted={"10:30pm"}
              imageUrl={"/trending-img.jpg"}
              excerpt={
                "As the digital economy grows, so does the risk of unauthorized use, copying, and theft of creative assets. From brand logos and product designs to software and online content, intellectual property is increasingly under threat — and too many businesses only act after damage has been done"
              }
            />
          </div>
          <BlogTopics/>
        </div>
      </div>
    </section>
  );
}
