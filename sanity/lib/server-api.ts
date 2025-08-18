import { serverClient } from './client'
import { 
  aboutQuery, 
  blogPostsQuery, 
  faqQuery, 
  singleBlogPostQuery,
  testimonialsQuery,
} from './queries'
import { cache } from 'react'

export const getAbout = cache(() => serverClient.fetch(aboutQuery))

export const getBlogPosts = cache(() => serverClient.fetch(blogPostsQuery))

export const getFaqs = cache(() => serverClient.fetch(faqQuery))

export const getTestimonials = cache(()=> serverClient.fetch(testimonialsQuery))

export const getBlogPost = cache((slug: string) => 
  serverClient.fetch(singleBlogPostQuery, { slug })
)

