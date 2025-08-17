import React from "react";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export default function HeadingSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Your{" "}
          <span className={`${playFair.className} font-light italic`}>
            trusted partner
          </span>{" "}
          in every legal journey, from challenges to opportunities
        </h2>
        <p className="lg:text-lg mt-3">
          At our legal firm, we believe that legal representation is more than
          resolving disputes, it’s about protecting your future, unlocking
          opportunities, and providing clarity when it’s needed most. Every
          client we serve benefits from a personalized approach, guided by
          expertise, integrity, and a deep commitment to meaningful results.
        </p>
      </div>
    </section>
  );
}
