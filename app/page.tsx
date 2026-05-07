import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import WhyUs from "@/components/WhyUs";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pachimond-attorneys.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${siteUrl}/#organization`,
      name: "Pachimond Attorneys",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/hero-bg.jpg`,
      description:
        "Pachimond Attorneys provides expert legal counsel to individuals and businesses in Nigeria — litigation, corporate law, commercial law, and IP law.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressLocality: "Lagos",
      },
      areaServed: "NG",
      serviceType: ["Litigation", "Corporate Law", "Commercial Law", "IP Law"],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Pachimond Attorneys",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Pachimond Attorneys — Strategic Legal Counsel in Nigeria",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />

      <About />
      <Services />
      <WhyUs />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
