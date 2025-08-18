import React from "react";
import Image from "next/image";
import Link from "next/link";
import {MoveUpRight} from "lucide-react";

type BlogHeaderProps = {
  title: string;
  author: string;
  jobTitle?: string;
  timePosted: string;
  excerpt: string;
  imageUrl: string;
};

export default function BlogHeader({
  title,
  author,
  jobTitle,
  timePosted,
  excerpt,
  imageUrl,
}: BlogHeaderProps) {
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
          {author} - {jobTitle} | {timePosted}
        </p>
      </div>
      <p className="mb-2 text-sm">{excerpt}</p>
      <Link href='' className="text-[#093F61] flex items-center gap-1 font-bold">Read more <MoveUpRight/></Link>

    </div>
  );
}
