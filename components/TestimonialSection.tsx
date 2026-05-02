import { getTestimonials } from '@/sanity/lib/server-api'
import TestimonialSlider from './TestimonialSlider'

type Testimonial = {
  imageUrl: string
  name: string
  text: string
  title: string
}

export default async function TestimonialSection() {
  const result = await getTestimonials()
  const testimonials: Testimonial[] = result?.data ?? []
  return <TestimonialSlider testimonials={testimonials} />
}
