import HeadingAndText from "@/components/HeadingAndText";
import PageIntro from "@/components/PageIntro";
import React from "react";

export default function TermsOfUse() {
  const content = [
    {
      title:"Use of Website",
      text: "This website is intended for informational purposes only. The content does not constitute legal advice, nor does it create an attorney-client relationship. To receive tailored legal assistance, please contact us directly."
    },
    {
      title:"User Responsibilities",
      text: "Visitors are expected to use the website in a respectful, lawful manner. Any attempt to interfere with the website’s security, functionality, or accessibility may result in restricted access or legal action."
    },
    {
      title:"Content Ownership",
      text: "All written content, visual elements, and branding on this site are owned by Pachimond Attorneys unless otherwise stated. Unauthorized reproduction or redistribution of content is prohibited without explicit permission."
    },
    {
      title:"Revision to Terms",
      text: "We may update these terms periodically. Continued use of the website implies acceptance of any changes. We encourage users to review this page regularly for updates."
    },
  ]
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <div>
          <PageIntro
            heading="Terms of Use"
            text="Welcome to the Pachimond Attorneys website. By accessing or using our website, you agree to be bound by the terms outlined below. These terms govern your use of our digital services and resources."
          />
        </div>
        <div className="mt-5 mb-10 lg:mb-20 xl:mb-32">
          {content.map((cont, i)=> (
            <HeadingAndText key={i} heading={cont.title} subText={cont.text} />
          ))}

        </div>
      </div>
    </section>
  );
}
