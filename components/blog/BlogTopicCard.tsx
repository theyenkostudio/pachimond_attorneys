import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

type BlogTopicCardProps = {
  title: string;
  imageUrl: string;
  excerpt: string;
  subject: string;
  link: string;
};

export default function BlogTopicCard({
  title,
  imageUrl,
  excerpt,
  subject,
  link,
}: BlogTopicCardProps) {
  const truncatedExcerpt =
    excerpt.length > 500 ? excerpt.slice(0, 500).trim() + "…" : excerpt;

  return (
    <div className="lg:grid lg:grid-cols-8">
      <div className="relative w-full h-64 lg:h-[303px] mb-3 lg:col-span-2">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="py-4 flex flex-col justify-between lg:col-span-5 lg:pl-6">
        <div>
          <p className="text-xs text-[#6E6E6E]">{subject}</p>
          <h5 className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">
            {title}
          </h5>
          <p className="text-sm">{truncatedExcerpt}</p>
        </div>
        <Link
          href={`/blog/${link}`}
          className="text-[#093F61] text-sm flex items-center gap-1 font-bold"
        >
          Read more <MoveUpRight />
        </Link>
      </div>
    </div>
  );
}
