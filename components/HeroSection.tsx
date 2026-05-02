"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RouterButton from "./RouterButton";

const LINES = [
  "Strategic Legal",
  "Solutions for",
  "Individuals &",
  "Businesses.",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-navy">
      {/* Background — Ken Burns slow zoom out */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: "easeOut" }}
      >
        <Image
          src="/hero-bg.jpg"
          fill
          priority
          className="object-cover object-center"
          alt="Pachimond Attorneys — strategic legal counsel in Nigeria"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/25" />
      </motion.div>

      {/* Top editorial bar */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-28 lg:pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-px bg-gold" />
          <span className="text-white/40 text-[10px] tracking-[0.28em] uppercase font-sans-ui">
            Lagos, Nigeria
          </span>
        </div>
        <span className="text-white/40 text-[10px] tracking-[0.28em] uppercase font-sans-ui">
          Est. 2018
        </span>
      </motion.div>

      {/* Headline — mask reveal */}
      <div className="relative z-10 flex-1 flex items-end px-6 sm:px-10 lg:px-16 pb-6">
        <h1 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-bold text-white leading-[0.88] tracking-[-0.03em]">
          {LINES.map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.55 + i * 0.13,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {text}
              </motion.span>
            </div>
          ))}
        </h1>
      </div>

      {/* Divider line — draws left to right */}
      <motion.div
        className="relative z-10 mx-6 sm:mx-10 lg:mx-16 h-px bg-white/15 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.9,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      />

      {/* Bottom bar */}
      <motion.div
        className="relative z-10 px-6 sm:px-10 lg:px-16 py-7 lg:py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-white/50 text-lg max-w-sm leading-relaxed font-sans-ui">
          We provide practical, results-driven legal support across litigation,
          corporate, commercial, and emerging areas such as data protection and
          cybersecurity.
        </p>
        <RouterButton path="/contact" variant="light" />
      </motion.div>

      {/* Vertical scroll cue — right edge */}
      <motion.div
        className="absolute right-6 bottom-10 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        aria-hidden
      >
        <motion.div
          className="w-px h-10 bg-white/25 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <span
          className="text-white/25 text-[9px] tracking-[0.3em] uppercase font-sans-ui"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
