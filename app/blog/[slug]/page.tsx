import OtherPosts from "@/components/blog/OtherPosts";
import { getBlogPost } from "@/sanity/lib/server-api";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

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
            />
          </div>
        )}
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          {post.title}
        </h1>

        <p className="text-[#6E6E6E] text-sm pb-3">
          {post.author?.name} - {post.author?.role} |
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
