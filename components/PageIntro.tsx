import React from "react";

type PageIntroProps = {
  heading: string;
  text: string;
};

export default function PageIntro({ heading, text }: PageIntroProps) {
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{heading}</h2>
      <p className="text-[#6E6E6E] italic lg:text-lg mt-2">{text}</p>
    </div>
  );
}
