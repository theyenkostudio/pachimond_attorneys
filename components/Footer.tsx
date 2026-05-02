import { getFooterDetails } from "@/sanity/lib/server-api";
import Image from "next/image";
import Link from "next/link";
import FooterContactForm from "./FooterContactForm";

export async function Footer() {
  const footerDetails = await getFooterDetails();

  const fallback = {
    phone: "+234 XXX - XX - XXX",
    email: "pachimondattorneys@gmail.com",
    location: "Port Harcourt, Nigeria",
    facebook: "",
    instagram: "",
    twitter: "",
  };

  const d = footerDetails?.data ?? {};

  return (
    <footer className="bg-[#101010] text-white relative overflow-hidden">
      {/* Contact form — shares the same dark background */}
      <FooterContactForm />

      {/* Footer grid */}
      <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image src="/logo-white.png" width={64} height={60} alt="Pachimond Attorneys" />
            </div>
            <p className="text-white/35 text-sm leading-relaxed font-sans-ui mb-8 max-w-[200px]">
              Providing trusted legal solutions with integrity and dedication.
            </p>
            <div className="flex gap-3">
              {[
                { href: d.facebook || fallback.facebook || '#', src: '/icons/fb.png', alt: 'Facebook' },
                { href: d.instagram || fallback.instagram || '#', src: '/icons/ig.png', alt: 'Instagram' },
                { href: d.twitter || fallback.twitter || '#', src: '/icons/x.png', alt: 'X' },
              ].map(({ href, src, alt }) => (
                <Link key={alt} href={href} target="_blank">
                  <div className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center hover:border-gold transition-colors duration-300">
                    <Image src={src} width={16} height={16} alt={alt} className="object-contain opacity-60" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-6">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/blog', label: 'Blog' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-white transition-colors duration-300 text-sm font-sans-ui">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-6">
              Legal
            </p>
            <ul className="space-y-3">
              {[
                { href: '/terms-of-use', label: 'Terms of Use' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/legal-notice', label: 'Legal Notice' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 hover:text-white transition-colors duration-300 text-sm font-sans-ui">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans-ui mb-6">
              Contact
            </p>
            <div className="space-y-4">
              <p className="text-white/40 text-sm font-sans-ui leading-relaxed">
                {d.phone || fallback.phone}
              </p>
              <p className="text-white/40 text-sm font-sans-ui leading-relaxed">
                {d.location || fallback.location}
              </p>
              <Link
                href={`mailto:${d.email || fallback.email}`}
                target="_blank"
                className="text-white/40 hover:text-gold transition-colors duration-300 text-sm font-sans-ui leading-relaxed block"
              >
                {d.email || fallback.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/8 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-sans-ui">
            © {new Date().getFullYear()} Pachimond Attorneys — Nigeria, West Africa
          </p>
          <p className="text-white/25 text-xs font-sans-ui">
            Designed and Built by{' '}
            <Link href="https://yenko.studio/" target="_blank" className="text-white/40 hover:text-gold transition-colors duration-300 underline underline-offset-2">
              Yenko Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
