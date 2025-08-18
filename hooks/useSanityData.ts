import { useQuery } from '@tanstack/react-query'
import { clientAPI } from '@/sanity/lib/client-api'

export const queryKeys = {
  testimonials: ['testimonials'],
  faqs: ['faqs'],
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: queryKeys.testimonials,
    queryFn: clientAPI.getTestimonials,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}

export const useFaqs = () => {
  return useQuery({
    queryKey: queryKeys.faqs,
    queryFn: clientAPI.getFaqs,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}