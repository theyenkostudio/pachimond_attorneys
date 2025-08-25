import React from "react";
import Image from "next/image";
import Link from "next/link";
import {MoveUpRight} from "lucide-react";
import { formatDate } from "@/utils/formatDate";

type BlogHeaderProps = {
  title: string;
  author: string;
  jobTitle?: string;
  timePosted: string;
  excerpt: string;
  imageUrl: string;
  link:string
};

export default function BlogHeader({
  title,
  author,
  jobTitle,
  timePosted,
  excerpt,
  imageUrl,
  link
}: BlogHeaderProps) {
    const truncatedExcerpt =
    excerpt.length > 500 ? excerpt.slice(0, 500).trim() + "…" : excerpt;

  return (
    <div>
      <div className="relative w-full h-96 lg:h-[400px] xl:h-[610px] mb-3">
        <Image
          src={imageUrl}
          fill
          alt={`${title} main image`}
          className="rounded-xl object-cover "
        />
      </div>
      <div>
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h3>
        <p className="text-[#6E6E6E] text-sm mt-2 mb-5">
          {author} - {jobTitle} | {formatDate(timePosted)}
        </p>
      </div>
      <p className="mb-2 text-sm">{truncatedExcerpt}</p>
      <Link href={`/blog/${link}`} className="text-[#093F61] flex items-center gap-1 font-bold">Read more <MoveUpRight height={16} /></Link>

    </div>
  );
}
