"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hasDarkHero =
    pathname === "/" ||
    pathname.startsWith("/practice-areas") ||
    pathname === "/blog";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasDarkHero) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="px-6 sm:px-10 lg:px-16 flex items-center justify-between">

          <Link href="/" aria-label="Pachimond Attorneys — Home">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="Pachimond Attorneys logo"
              className={`transition-all duration-500 ${
                scrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-navy hover:text-gold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className={`group relative hidden md:inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-medium uppercase tracking-wide overflow-hidden ${
              scrolled ? "border-navy text-navy" : "border-white text-white"
            }`}
          >
            <span
              className={`absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out ${
                scrolled ? "bg-navy" : "bg-white"
              }`}
            />
            <span
              className={`relative transition-colors duration-300 ${
                scrolled ? "group-hover:text-white" : "group-hover:text-navy"
              }`}
            >
              Get a Quote
            </span>
          </Link>

          {/* Mobile — circle hamburger, morphs to X */}
          <button
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              scrolled ? "border-navy text-navy" : "border-white/60 text-white"
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="relative w-[18px] h-[18px] flex items-center justify-center">
              <motion.span
                className="absolute block w-[18px] h-[1.5px] bg-current"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              />
              <motion.span
                className="absolute block w-[18px] h-[1.5px] bg-current"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              />
            </div>
          </button>

        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
            className="fixed inset-0 bg-navy z-[60] flex flex-col md:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 sm:px-10 py-5">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  width={52}
                  height={52}
                  alt="Pachimond Attorneys logo"
                  className="brightness-0 invert"
                />
              </Link>

              {/* Circle X — matches the hamburger */}
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center"
              >
                <div className="relative w-[18px] h-[18px] flex items-center justify-center">
                  <span className="absolute block w-[18px] h-[1.5px] bg-white rotate-45" />
                  <span className="absolute block w-[18px] h-[1.5px] bg-white -rotate-45" />
                </div>
              </button>
            </div>

            <div className="h-px bg-white/10 mx-6 sm:mx-10" />

            {/* Nav items */}
            <nav className="flex-1 flex flex-col justify-center px-6 sm:px-10">
              {navItems.map((item, i) => (
                <div key={item.name} className="overflow-hidden border-b border-white/8">
                  <motion.div
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "105%" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + i * 0.07,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-5 py-6"
                    >
                      <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-4xl sm:text-5xl text-white tracking-[-0.02em] leading-none group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 sm:px-10 pb-10 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="group relative overflow-hidden flex w-full justify-center border border-white/25 text-white px-8 py-4 text-[10px] font-sans-ui tracking-[0.22em] uppercase"
                >
                  <span className="absolute inset-0 bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]" />
                  <span className="relative group-hover:text-white transition-colors duration-300 w-full text-center">
                    Get a Quote
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
