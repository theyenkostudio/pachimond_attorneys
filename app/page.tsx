import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Services/>
      <WhyUs/>
    </div>
  );
}
