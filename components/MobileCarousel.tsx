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
import { useTestimonials } from "@/hooks/useSanityData";

export default function MobileCarousel() {


const { data: testimonials, isLoading, error } = useTestimonials()

  if (isLoading) return <div>Loading testimonials...</div>
  if (error) return <div>Error loading testimonials</div>
  if (!testimonials) return null


  return (
    <Carousel>
      <CarouselContent>
        {testimonials.map((testimonial: { imageUrl: string; name: string; text: string; title: string; }, i: React.Key | null | undefined) => (
          <CarouselItem key={i} className="md:basis-1/2">
            <TestimonialCard
              image={testimonial.imageUrl}
              name={testimonial.name}
              text={testimonial.text}
              title={testimonial.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
