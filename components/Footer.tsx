import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
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
              <div className="p-1 border border-[#009CFF] rounded-full hover:cursor-pointer">
                <Image
                  height={24}
                  width={24}
                  alt="facebook-logo"
                  src="/icons/fb.png"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="p-1 border border-[#009CFF] rounded-full hover:cursor-pointer">
                <Image
                  height={24}
                  width={24}
                  alt="facebook-logo"
                  src="/icons/ig.png"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="p-1 border border-[#009CFF] rounded-full hover:cursor-pointer">
                <Image
                  height={24}
                  width={24}
                  alt="facebook-logo"
                  src="/icons/x.png"
                  className="h-6 w-6 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#009CFF] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#009CFF] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Legal notice
                </a>
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
                    alt="facebook-logo"
                    src="/icons/call.png"
                    className="h-6 w-6 object-contain"
                  />{" "}
                  <p>+234 XXX - XX -XXX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-100 flex gap-2 text-sm">
                  <Image
                    height={24}
                    width={24}
                    alt="facebook-logo"
                    src="/icons/location.png"
                    className="h-6 w-6 object-contain"
                  />{" "}
                  <p>Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-gray-100 flex gap-2 text-sm">
                  <Image
                    height={24}
                    width={24}
                    alt="facebook-logo"
                    src="/icons/sms.png"
                    className="h-6 w-6 object-contain"
                  />
                  <p>pachimondattorneys@gmail.com</p>
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
        </div>
      </div>
    </footer>
  );
}
