import { defaultSEO} from "@/constants/seo";
import { getBlogPost } from "@/sanity/lib/server-api";
import OtherPosts from "@/components/blog/OtherPosts";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: `Not found | ${defaultSEO.title}`,
      description: defaultSEO.description,
    };
  }

  const title = post.title || defaultSEO.title;
  const description = post.excerpt || defaultSEO.description;
  const image = post.mainImage?.url || defaultSEO.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${defaultSEO.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : [],
      images: [
        {
          url: image,
          alt: post.mainImage?.alt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = await getBlogPost(slug);

  if (!post) return <div>Not found</div>;

  return (
    <div className="max-w-7xl mx-auto">
      <article className="mx-4">
        {post.mainImage?.url && (
          <div className="w-full aspect-square lg:aspect-video relative my-3 lg:my-6 ">
            <Image
              src={post.mainImage.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="rounded-xl object-cover"
              sizes="100vw"
            />
          </div>
        )}
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          {post.title}
        </h1>

        <p className="text-[#6E6E6E] text-sm pb-3">
          {post.author?.name} - {post.author?.role} |{" "}
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({ value }) => (
                <Image
                  src={value.url}
                  alt={value.alt || ""}
                  width={700}
                  height={500}
                  className="rounded-lg my-4"
                />
              ),
            },
          }}
        />
        <OtherPosts slug={slug} />
      </article>
    </div>
  );
}
