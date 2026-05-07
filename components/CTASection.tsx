"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <div>
      {/* Image section — overflow hidden scoped only here */}
      <section className="relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/whyus.jpg"
            fill
            className="object-cover object-center"
            alt="Pachimond Attorneys — book a consultation"
            sizes="100vw"
          />
          {/* subtle gradient only behind the text for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Get In Touch
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ready to protect what matters most?
              </h2>
            </motion.div>

            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-sm">
                Book a free consultation with our team today. No obligations —
                just clear legal advice tailored to your situation.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/10 border border-white/25 text-white placeholder:text-white/40 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gold text-white px-7 py-4 text-sm font-medium uppercase tracking-wide overflow-hidden shrink-0"
                >
                  <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative group-hover:text-navy transition-colors duration-300">
                    Get Started
                  </span>
                  <ArrowRight className="relative h-4 w-4 group-hover:text-navy transition-colors duration-300" />
                </button>
              </form>

              <p className="text-white/35 text-xs mt-4">
                Or call us directly — no obligations, just clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom bar — solid background, fully outside the image overlay */}
      <div className="bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Pachimond Attorneys — Strategic Legal Counsel in Nigeria
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="text-sm text-white/70 hover:text-gold transition-colors uppercase tracking-wide font-medium flex items-center gap-2"
          >
            Schedule a consultation <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
