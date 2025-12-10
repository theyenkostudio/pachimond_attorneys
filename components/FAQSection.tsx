import React from "react";
import FAQAccordion from "./FAQAccordion";
import Image from "next/image";

export default function FAQSection() {
  return (
    <section className="my-14 md:my-28">
      <div className="max-w-7xl mx-auto py-10 md:py-20 ">
        <div className="px-4 lg:grid lg:grid-cols-8">
          <div className="lg:col-span-5">
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl mb-10 lg:mb-14">
              Frequently Asked Questions
            </p>
            <FAQAccordion/>
          </div>
          <Image className="hidden lg:block rounded-xl lg:col-span-3 place-self-end" src='/faq.jpg' height={567} width={380} alt="faq-image" />
        </div>
      </div>
    </section>
  );
}
