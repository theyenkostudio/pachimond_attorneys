import PageIntro from "@/components/PageIntro";
import HeadingAndText from "@/components/HeadingAndText";
import { getTerms } from "@/sanity/lib/server-api";

export default async function TermsOfUse() {
  const contentRes = await getTerms();
  const content = contentRes.data

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
