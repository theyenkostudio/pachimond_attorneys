import Image from "next/image";
import React from "react";

export default function WhyUs() {
  const whyus = [
    "Proven legal expertise",
    "Tailored approach",
    "Transparent communication",
    "Results-oriented methods",
  ];
  return (
    <section className="bg-[#E8F5FDB2] my-14 md:my-32">
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        <div className="px-4">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Why choose us?
          </p>
          <p className="text-sm mt-2 max-w-xl">
            Choosing the right legal partner can change everything. We combine
            sharp legal insight with a client-first mindset to deliver solutions
            that work — in the courtroom, the boardroom, and beyond.
          </p>
          <div className="space-y-3 mt-5">
            {whyus.map((item, i) => (
              <div key={i} className="bg-[#009CFF] rounded-md flex gap-2 p-3 ">
                <Image src="/verify.png" width={24} height={24} alt="verify" />
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
