import React from "react";

type HeadingAndTextProps = {
  heading: string;
  subText: string;
};

export default function HeadingAndText({heading, subText}: HeadingAndTextProps) {
  return <div>
    <h4 className="lg:text-lg font-bold text-sm mb-4 lg:mb-6">
      {heading}
    </h4>
    <p className="text-sm lg:text-lg">{subText}</p>
    <div className="my-4 lg:my-6 h-[1px] w-full bg-black"></div>

  </div>;
}
