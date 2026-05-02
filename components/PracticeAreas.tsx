"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PRACTICE_AREAS = [
  {
    id: "01",
    title: "Litigation & Dispute Resolution",
    description:
      "Formidable courtroom representation and strategic alternative dispute resolution mechanisms tailored to complex legal challenges.",
  },
  {
    id: "02",
    title: "Corporate & Commercial Law",
    description:
      "Expert guidance through the intricacies of business formation, regulatory compliance, and cross-border commercial transactions.",
  },
  {
    id: "03",
    title: "Intellectual Property",
    description:
      "Safeguarding your innovations and creative assets through robust registration, enforcement, and portfolio management.",
  },
  {
    id: "04",
    title: "Data Protection & Cyber Security",
    description:
      "Navigating the evolving landscape of digital privacy and security in compliance with the NDPR and international standards.",
  },
];

export default function PracticeAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-navy py-24 lg:py-40 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans-ui font-bold mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight">
              Specialized Legal <br /> Solutions in Nigeria
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/40 max-w-xs text-sm leading-relaxed font-sans-ui"
          >
            We provide sophisticated advice across diverse sectors, ensuring
            your interests are protected with precision.
          </motion.p>
        </div>

        {/* Practice Areas List */}
        <div className="border-t border-white/10">
          {PRACTICE_AREAS.map((area, index) => (
            <Link
              key={area.id}
              href={`/practice-areas#${area.id}`}
              className="block group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-10 lg:py-14 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-20 transition-all duration-500 relative z-10">
                {/* Index */}
                <span className="text-gold font-sans-ui text-sm font-bold tracking-widest block">
                  {area.id}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display transition-transform duration-500 group-hover:translate-x-4">
                  {area.title}
                </h3>

                {/* Description - reveals on desktop hover, always visible on mobile */}
                <p
                  className={`text-white/40 max-w-md text-sm lg:text-base leading-relaxed transition-all duration-500 font-sans-ui
                  ${hoveredIndex === index ? "opacity-100" : "lg:opacity-0"}`}
                >
                  {area.description}
                </p>

                {/* Arrow Icon */}
                <div className="ml-auto hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-8 h-8 text-gold" />
                </div>
              </div>

              {/* Animated Divider */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-white/10 w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />

              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
