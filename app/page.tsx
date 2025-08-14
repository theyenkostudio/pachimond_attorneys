import About from "@/components/About";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Services/>
      <WhyUs/>
      <TestimonialSection/>
      <FAQSection/>
    </div>
  );
}
