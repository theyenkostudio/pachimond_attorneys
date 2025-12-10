
import { sanityFetch } from './live'
import {
  aboutQuery,
  blogPostsQuery,
  faqQuery,
  legalQuery,
  otherPostsQuery,
  privacyQuery,
  singleBlogPostQuery,
  termsQuery,
  testimonialsQuery,
  footerDetails
} from './queries'

// No "cache()" anymore

export const getAbout = () => sanityFetch({ query: aboutQuery })
export const getFooterDetails = () => sanityFetch({ query: footerDetails })
export const getBlogPosts = () => sanityFetch({ query: blogPostsQuery })
export const getFaqs = () => sanityFetch({ query: faqQuery })
export const getTestimonials = () => sanityFetch({ query: testimonialsQuery })
export const getLegal = () => sanityFetch({ query: legalQuery })
export const getTerms = () => sanityFetch({ query: termsQuery })
export const getPrivacy = () => sanityFetch({ query: privacyQuery })

export const getOtherPosts = (slug: string) =>
  sanityFetch({ query: otherPostsQuery, params: { slug } })

export const getBlogPost = (slug: string) =>
  sanityFetch({ query: singleBlogPostQuery, params: { slug } })
