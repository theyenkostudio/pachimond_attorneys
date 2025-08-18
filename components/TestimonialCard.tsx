
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ subsets: ["latin"], style: "normal" });

type TestimonialCardProps = {
  name: string;
  image: string;
  title: string;
  text: string;
};

export default function TestimonialCard({
  name,
  image,
  title,
  text,
}: TestimonialCardProps) {
  return (
    <div className="border  rounded-xl p-6 md:pt-12">
      <div className="flex flex-col">
        <p className={`${playFair.className} text-8xl rotate-180 w-fit text-[#232323] `}>,,</p>
        <p className="text-[#232323] lg:text-lg">{text}</p>
        <div className="flex gap-2 items-center mt-10">
          <div className="border rounded-full p-1 w-fit border-[#0C5380]">
            <Image
              src={image}
              width={56}
              height={56}
              alt={name}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
