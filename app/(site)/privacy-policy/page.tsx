import PageIntro from "@/components/PageIntro";
import React from "react";
import HeadingAndText from "@/components/HeadingAndText";
import { getPrivacy } from "@/sanity/lib/server-api";

export default async function PrivacyPolicy() {
  const content = await getPrivacy();
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <div>
          <PageIntro
            heading=" Privacy policy"
            text="  At Pachimond Attorneys, your privacy is important to us. This policy
          explains how we collect, use, and protect your personal information
          when you interact with our website or services."
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
