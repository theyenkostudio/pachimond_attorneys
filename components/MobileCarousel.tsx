"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

export default function MobileCarousel() {
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
    <Carousel>
      <CarouselContent>
        {testimonials.map((testimonial, i) => (
          <CarouselItem key={i} className="md:basis-1/2">
            <TestimonialCard
              img={testimonial.img}
              name={testimonial.name}
              message={testimonial.message}
              job_title={testimonial.job_title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
