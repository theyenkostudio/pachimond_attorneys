import { serverClient } from './client'
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
} from './queries'
import { cache } from 'react'

export const getAbout = cache(() => serverClient.fetch(aboutQuery))

export const getBlogPosts = cache(() => serverClient.fetch(blogPostsQuery))

export const getOtherPosts = cache((slug:string)=> serverClient.fetch(otherPostsQuery, {slug}))

export const getFaqs = cache(() => serverClient.fetch(faqQuery))

export const getTestimonials = cache(()=> serverClient.fetch(testimonialsQuery))

export const getLegal = cache(() => serverClient.fetch(legalQuery))

export const getTerms = cache(() => serverClient.fetch(termsQuery))

export const getPrivacy = cache(() => serverClient.fetch(privacyQuery))

export const getBlogPost = cache((slug: string) => 
  serverClient.fetch(singleBlogPostQuery, { slug })
)

