import React from "react";
import Image from "next/image";

export default function ManagingDirectorMsg() {
  return (
    <section className="max-w-7xl mx-4 md:mx-auto my-10 md:my-12 lg:my-28">
      <div className="w-full bg-[#E8F5FDB2] rounded-xl p-8">
        <div className="flex flex-col items-center pt-5">
          <div className="w-20 h-12 relative">
            <Image
              src="/icons/quotes.png"
              alt="quotes"
              fill
              className="object-contain"
            />
          </div>
          <p className="lg:max-w-3xl md:max-w-md text-center my-5 italic text-lg lg:text-xl">
            Every case we take on is a promise — a promise to advocate fiercely,
            think strategically, and stand with our clients through every
            challenge. That’s the standard we uphold at Pachimond Attorneys.
          </p>
          <div className="flex gap-2 items-center">
            <div className="border rounded-full p-1 w-fit border-[#0C5380]">
              <Image
                src="/testimonials/amarachi.jpg"
                width={56}
                height={56}
                alt="managing-director"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-[#009CFF]">
                Glory Ovia Ovrampor
              </p>
              <p className="text-gray-600">Managing Partner & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
