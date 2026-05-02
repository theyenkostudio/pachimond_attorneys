"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu
              className={`h-6 w-6 transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 md:hidden transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Image
            src="/logo.png"
            width={52}
            height={52}
            alt="Pachimond Attorneys logo"
          />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5 text-navy" />
          </button>
        </div>
        <nav className="p-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium text-navy hover:text-gold transition-colors border-b border-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
