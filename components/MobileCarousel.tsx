'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import TestimonialCard from './TestimonialCard'

type Testimonial = {
  imageUrl: string
  name: string
  text: string
  title: string
}

export default function MobileCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselContent>
        {testimonials.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2">
            <TestimonialCard image={t.imageUrl} name={t.name} text={t.text} title={t.title} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
