import PageIntro from "@/components/PageIntro";
import React from "react";
import HeadingAndText from "@/components/HeadingAndText";
import { getLegal } from "@/sanity/lib/server-api";

export default async function LegalNotice() {
  const content = await getLegal();
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <div>
          <PageIntro
            heading="Legal notice"
            text="This legal notice outlines the identity of Pachimond Attorneys, the nature of our services, and important disclaimers regarding your use of our website."
          />
        </div>
        <div className="mt-5 mb-10 lg:mb-20 xl:mb-32">
          {content?.map((cont: any) => (
            <HeadingAndText
              key={cont._id}
              heading={cont.title}
              subText={cont.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
