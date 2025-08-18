import BlogHeader from "@/components/blog/BlogHeader";
import TrendingCard from "@/components/blog/TrendingCard";
import React from "react";
import BlogTopics from "@/components/blog/BlogTopics";

export default function BlogHome() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <BlogHeader
          title={"Insights, Opinions & Legal Perspectives"}
          author={"Glory Ovia"}
          timePosted={"11:00am "}
          excerpt={`At Pachimond Attorneys, we believe that knowledge is power — especially when it comes to the law. Our blog is here to empower you with easy-to-understand articles that break down complex legal issues into practical advice you can use. Whether you're starting a business, protecting your brand, or simply trying to make sense of your legal options, we’ve got you covered with insights that are clear, helpful, and relevant.
We cover everything from resolving disputes and staying compliant, to understanding your rights in the digital space. Written by our team of experienced professionals, each post is designed to help you feel more confident and informed when facing legal decisions. Think of this space as your personal legal guide — available anytime you need it.`}
          imageUrl={"/blog-header.jpg"}
          jobTitle="Chief Editor"
        />
        <div className="mt-10">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Trending[3]
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
