"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedCounter } from "./motion/AnimatedCounter";

const HEADING_LINES = [
  "More than",
  "representation —",
  "strategic legal",
  "support.",
];

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-cream py-24 lg:py-36 overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-14 lg:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="w-5 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.28em] uppercase font-sans-ui">
            The Firm
          </span>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-28 xl:gap-36 items-start">
          {/* Left — image slides in from left, bubble overlaps the gap */}
          <div ref={imageRef} className="relative">
            {/* Image — slides from left with subtle scale */}
            <motion.div
              className="relative w-full h-[440px] lg:h-[680px] overflow-hidden"
              initial={{ x: -64, opacity: 0, scale: 0.97 }}
              animate={imageInView ? { x: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Image
                src="/about.jpg"
                fill
                alt="Pachimond Attorneys — strategic legal support"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>

            {/* Circular bubble — breaks out into the column gap */}
            <motion.div
              className="absolute -bottom-10 -right-2 lg:-right-10 w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-cream border border-gold/50 flex flex-col items-center justify-center z-20 shadow-sm"
              initial={{ opacity: 0, scale: 0.72 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.75,
                delay: 1.05,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <p className="text-[2rem] lg:text-[2.4rem] font-bold text-navy tabular-nums leading-none">
                <AnimatedCounter value={100} suffix="%" duration={1600} />
              </p>
              <p className="text-[6.5px] lg:text-[7.5px] text-gray-400 tracking-[0.22em] uppercase mt-1.5 text-center font-sans-ui leading-snug px-2">
                Confidential
                <br />
                Consultations
              </p>
            </motion.div>
          </div>

          {/* Right — text column, offset down to clear the bubble below */}
          <div className="mt-16 lg:mt-20 pb-10">
            {/* Masked heading reveal */}
            <div ref={headingRef} className="mb-8">
              <h2 className="text-[11vw] sm:text-[8vw] lg:text-[5.2vw] font-bold text-navy leading-[1.0] tracking-[-0.02em]">
                {HEADING_LINES.map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: "105%" }}
                      animate={headingInView ? { y: 0 } : { y: "105%" }}
                      transition={{
                        duration: 1.05,
                        delay: 0.08 + i * 0.1,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </div>
                ))}
              </h2>
            </div>

            {/* Body copy */}
            <motion.p
              className="text-gray-500 leading-relaxed max-w-md font-sans-ui text-lg"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            >
              At Pachimond Attorneys, we know that behind every case is a story
              that matters. We combine sharp legal strategy with a client-first
              approach, ensuring you feel supported, informed, and fiercely
              represented at every step.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
