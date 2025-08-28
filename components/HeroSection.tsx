"use client"
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";

const playFair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export default function HeroSection() {
  const router = useRouter();
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
            <Button
              onClick={() => router.push("/contact")}
              className="bg-gradient-to-r from-[#093F61] to-[#009CFF] text-white p-5 text-base font-semibold rounded-lg inline-flex items-center gap-2"
            >
              Book a Consultation
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
