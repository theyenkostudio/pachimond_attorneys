
import { Playfair_Display } from "next/font/google";
import RouterButton from "./RouterButton";

const playFair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export default function HeroSection() {

  return (
    <section className="overflow-hidden">
      <div className="max-w-7xl 2xl:rounded-xl bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hero-bg.jpg')] bg-cover bg-center mx-auto px-4 sm:px-6 lg:px-14 py-12 lg:py-20">
        <div className="max-w-xl">
          <div className="text-white space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold leading-none lg:leading-tight">
                Legal support you can rely on when it{" "}
                <span className={`${playFair.className} font-light italic`}>
                  matters
                </span>{" "}
                most.
              </h1>
              <p className="lg:text-lg text-white max-w-lg">
                Experienced legal counsel dedicated to protecting your rights
                and securing the best outcomes.
              </p>
            </div>
            
            <RouterButton path="/contact"/>
          </div>
        </div>
      </div>
    </section>
  );
}
