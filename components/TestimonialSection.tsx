import React from "react";
import MobileCarousel from "./MobileCarousel";
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from "@/sanity/lib/server-api";

export default async function TestimonialSection() {
  const testimonials = await getTestimonials()
  console.log(testimonials)

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="px-4">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
            What our clients say about us
          </p>
          <div className="mt-5 lg:mt-10">
            {/* Mobile section and small tabs*/}
            <div className="lg:hidden">
              <MobileCarousel />
            </div>
            {/* Large tabs and PCs section */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10">
              {testimonials.map((testimonial:{imageUrl:string; name:string; text:string; title:string}, i:number) => (
                <TestimonialCard
                  key={i}
                  image={testimonial.imageUrl}
                  name={testimonial.name}
                  text={testimonial.text}
                  title={testimonial.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
