"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <>
      <nav className="bg-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 lg:py-10 xl:py-14 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Image width={73} height={73} alt="logo" src="/logo.png" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between ">
          <div className="p-4">
            <Image
              width={73}
              height={73}
              alt="logo"
              src="/logo.png"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
