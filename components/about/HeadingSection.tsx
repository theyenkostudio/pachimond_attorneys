import React from "react";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export default function HeadingSection({about}:{about:string}) {
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
         {about}
        </p>
      </div>
    </section>
  );
}
