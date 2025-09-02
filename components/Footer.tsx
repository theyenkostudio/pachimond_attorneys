import { getFooterDetails } from "@/sanity/lib/server-api";
import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  const footerDetails = await getFooterDetails()

  const fallBackDetails = {
    phone: "+234 XXX - XX -XXX",
    email: "pachimondattorneys@gmail.com",
    location: "Port Harcourt, Nigeria",
    facebook: "",
    instagram: "",
    twitter: "",}

  return (
    <footer
      className="bg-[#101010] text-white py-12 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/gradient.png")',
        backgroundPosition: "center calc(100% + 120px)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo-white.png"
                width={73}
                height={69}
                alt="pachimond-attorneys-logo"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Providing trusted legal solutions with integrity and dedication.
            </p>
            <div className="flex space-x-3">
            <Link href={footerDetails.facebook || fallBackDetails.facebook || "#"} target="_blank">
              <div className="p-1 border border-[#009CFF] rounded-full hover:cursor-pointer">
                <Image
                  height={24}
                  width={24}
                  alt="facebook-logo"
                  src="/icons/fb.png"
                  className="h-6 w-6 object-contain"
                />
              </div></Link>
             <Link href={footerDetails.instagram || fallBackDetails.instagram || "#"} target="_blank">
              <div className="p-1 border border-[#009CFF] rounded-full hover:cursor-pointer">
                <Image
                  height={24}
                  width={24}
                  alt="facebook-logo"
                  src="/icons/ig.png"
                  className="h-6 w-6 object-contain"
                />
              </div></Link>
              <Link target="_blank" href={footerDetails.twitter || fallBackDetails.twitter || "#"}>
              <div className="p-1 border border-[#009CFF] rounded-full hover:cursor-pointer">
                <Image
                  height={24}
                  width={24}
                  alt="x-logo"
                  src="/icons/x.png"
                  className="h-6 w-6 object-contain"
                />
              </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#009CFF] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#009CFF] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Legal notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[#009CFF] font-semibold mb-4">Contact us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="text-gray-100 flex gap-2 text-sm">
                  <Image
                    height={24}
                    width={24}
                    alt="phone-icon"
                    src="/icons/call.png"
                    className="h-6 w-6 object-contain"
                  />{" "}
                  <p>{footerDetails.phone || fallBackDetails.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-100 flex gap-2 text-sm">
                  <Image
                    height={24}
                    width={24}
                    alt="location-icon"
                    src="/icons/location.png"
                    className="h-6 w-6 object-contain"
                  />{" "}
                  <p>{footerDetails.location || fallBackDetails.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-100 flex gap-2 text-sm">
                  <Image
                    height={24}
                    width={24}
                    alt="email-icon"
                    src="/icons/sms.png"
                    className="h-6 w-6 object-contain"
                  />
                  <Link target="_blank" href={`mailto:${footerDetails.email || fallBackDetails.email}`}> {footerDetails.email || fallBackDetails.email}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <p className="text-center text-white text-sm">
            Copyright 2025 - Pachimond Attorneys - Nigeria, West Africa
          </p>
          <p className="text-center text-sm mt-8 text-[#009CFF]">Designed and Built by <Link target="_blank" href="https://yenko.studio/" className=" underline">Yenko Studio</Link></p>
        </div>
      </div>
    </footer>
  );
}
