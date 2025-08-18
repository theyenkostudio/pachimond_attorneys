import { groq } from "next-sanity";

// About page query
export const aboutQuery = groq`
  *[_type == "about"][0]{
    about,
    message,
    team[]->{
      name,
      title,
      "imageUrl": image.asset->url,
      image{
        alt
      }
    }
  }
`;

export const blogPostsQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
"excerpt": (body)[0].children[0].text, 
  categories[]->{
    title
  },
  author->{
    name,
    role,
    "image": image.asset->url
  },
  mainImage{
    "url": asset->url,
    alt
  }
}
`;

export const singleBlogPostQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    author->{
      name,
      role,
      bio,
      "image": image.asset->url
    },
    mainImage{
      "url": asset->url,
      alt
    },
    categories[]->{
      title
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        alt
      }
    }
  }
`;

export const testimonialsQuery = groq`
 *[_type == "testimonial"] | order(_createdAt desc) {
  name,
  title,
  text,
  "imageUrl": image.asset->url,
}
`;

export const faqQuery = groq`
  *[_type == "faq"] | order(_createdAt asc) {
    _id,
    question,
    answer
  }
`;
