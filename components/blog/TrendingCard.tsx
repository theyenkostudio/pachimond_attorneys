import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "@/utils/formatDate";

type TrendingCardProps = {
  title: string;
  author: string;
  timePosted: string;
  imageUrl: string;
  excerpt: string;
  slug: string;
  authorImageUrl?: string;
};

export default function TrendingCard({
  title,
  author,
  timePosted,
  imageUrl,
  excerpt,
  authorImageUrl,
  slug,
}: TrendingCardProps) {
  const truncatedExcerpt =
    excerpt.length > 400 ? excerpt.slice(0, 400).trim() + "…" : excerpt;

  return (
    <div className="lg:grid lg:grid-cols-8">
      <div className="relative w-full h-64 lg:h-96 xl:h-[583px] mb-3 lg:col-span-3">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="lg:col-span-5 lg:pl-6">
        <h5 className="font-bold text-lg lg:text-xl xl:text-2xl">{title}</h5>
        <p className="my-3 text-sm">{truncatedExcerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-[#093F61] text-sm flex items-center font-bold"
        >
          Read more <MoveUpRight height={15} />
        </Link>
        <div className="mt-4">
          <div className="flex gap-2 items-center">
            <Image
              src={authorImageUrl || "/avatar.jpg"}
              width={56}
              height={56}
              alt={author}
              className="rounded-full object-cover w-10 h-10 lg:w-12 lg:h-12"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-[#093F61]">{author}</p>
              <p className="text-gray-600 text-xs lg:text-sm">
                Blogged @ {formatDate(timePosted)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
