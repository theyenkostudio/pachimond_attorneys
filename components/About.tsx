import React from "react";
import Image from "next/image";
import StatCard from "./StatCard";

export default function About() {
  const stats = [
    {
      rating: "100%",
      text: "Confidential consultations",
    },
    {
      rating: "92%",
      text: "Client satisfaction",
    },
    {
      rating: "85%",
      text: "Referral rate",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto my-14 md:my-32">
      <div className="lg:flex lg:gap-4 mx-4">
        <div className="relative w-full h-[350px] lg:w-[483px] lg:h-[404px]">
          <Image
            src="/about.jpg"
            fill
            alt="about"
            className="rounded-xl lg:rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-between mt-5 lg:mt-0">
          <div>
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
              More than representation,
              <br className="hidden md:block" /> we’re your legal partners.
            </p>
            <p className="text-sm mt-2 max-w-xl">
              At Pachimond Attorneys, we know that behind every case is a story
              that matters. We combine sharp legal strategy with a client-first
              approach, ensuring you feel supported, informed, and fiercely
              represented at every step.{" "}
            </p>
          </div>
          <div className="mt-5 space-y-3 md:flex md:gap-4 md:space-y-0">
            <StatCard rating="100%" text="Confidential consultations" />
            <StatCard rating="92%" text="Client satisfaction" />
            <StatCard rating="85%" text="Referral rate" />
          </div>
        </div>
      </div>
    </section>
  );
}
