import React from "react";
import BlogTopicCard from "./BlogTopicCard";

export default function BlogTopics() {
  return (
    <section className="mb-20">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl my-12">
        Blog topics
      </h3>
      <div>
        <div className="space-y-3">
          <BlogTopicCard
            title="Understanding Attorney-Client Privilege"
            imageUrl="/trending-img.jpg"
            excerpt="Attorney-client privilege is one of the most important protections in legal relationships — but many clients don’t fully understand what it means. This post breaks down how privilege works, what it covers, and how to maintain it when communicating with your lawyer, both in and out of court."
            subject="General Legal Insights"
          />
          <BlogTopicCard
            title="Understanding Attorney-Client Privilege"
            imageUrl="/trending-img.jpg"
            excerpt="Attorney-client privilege is one of the most important protections in legal relationships — but many clients don’t fully understand what it means. This post breaks down how privilege works, what it covers, and how to maintain it when communicating with your lawyer, both in and out of court."
            subject="General Legal Insights"
          />
        </div>
      </div>
    </section>
  );
}
