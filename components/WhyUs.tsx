"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HEADING_LINES = ["The right partner", "changes everything."];

const reasons = [
  {
    number: "01",
    title: "Proven Legal Expertise",
    body: "Decades of combined experience navigating Nigeria's legal landscape — courts, boardrooms, and beyond.",
  },
  {
    number: "02",
    title: "Tailored Approach",
    body: "Every client receives a strategy built around their unique circumstances — no templates, no shortcuts.",
  },
  {
    number: "03",
    title: "Transparent Communication",
    body: "You'll always know where your matter stands. Clear updates, plain language, no surprises.",
  },
  {
    number: "04",
    title: "Results-Oriented",
    body: "We measure success by your outcomes — resolutions, protections won, and value delivered.",
  },
];

export default function WhyUs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-light py-24 lg:py-36 overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-20 lg:mb-28 lg:flex lg:items-end lg:justify-between gap-16">
          <div ref={headerRef}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="w-5 h-px bg-gold" />
              <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
                Why Choose Us
              </span>
            </motion.div>

            <h2 className="text-[12vw] sm:text-[9vw] lg:text-[7vw] font-bold text-navy leading-[0.95] tracking-[-0.03em]">
              {HEADING_LINES.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={headerInView ? { y: 0 } : { y: "105%" }}
                    transition={{
                      duration: 1.05,
                      delay: 0.08 + i * 0.12,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </h2>
          </div>

          <motion.p
            className="text-navy/45 text-base max-w-xs leading-relaxed font-sans-ui mt-6 lg:mt-0 shrink-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We combine sharp legal insight with a client-first mindset to deliver
            solutions that work — in the courtroom, the boardroom, and beyond.
          </motion.p>
        </div>

        {/* 4-column reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-navy/10">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              className="relative group p-8 lg:p-10 xl:p-12 border-b md:border-b-0 lg:border-r border-navy/10 last:border-r-0 transition-colors duration-500 hover:bg-white/50"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-500" />

              {/* Large number */}
              <span className="text-gold font-display text-6xl lg:text-7xl xl:text-8xl block mb-10 leading-none transition-transform duration-500 group-hover:-translate-y-1 origin-left">
                {reason.number}
              </span>

              <h3 className="text-navy font-bold text-xl lg:text-2xl mb-4 leading-tight tracking-[-0.01em] group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-navy/40 text-base leading-relaxed font-sans-ui">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
