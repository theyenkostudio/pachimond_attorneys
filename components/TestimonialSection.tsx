import React from "react";
import MobileCarousel from "./MobileCarousel";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Amarachi B.",
      job_title: "Data Scientist",
      message:
        "The firm handled my case with professionalism and care. I always felt informed and confident in their strategy.",
      img: "/testimonials/amarachi.jpg",
    },
    {
      name: "Chinedu T.",
      job_title: "Civil servant",
      message:
        "They didn’t just provide legal advice, They became my advocate when I needed it most. Highly recommended!",
      img: "/testimonials/chinedu.jpg",
    },
    {
      name: "Aisha Hamzat A.",
      job_title: "Civil servant",
      message:
        "Exceptional service from start to finish. Their attention to detail and client care made all the difference.",
      img: "/testimonials/aisha.jpg",
    },
  ];
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
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={i}
                  img={testimonial.img}
                  name={testimonial.name}
                  message={testimonial.message}
                  job_title={testimonial.job_title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
