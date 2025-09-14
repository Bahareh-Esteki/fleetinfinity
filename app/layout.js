"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css"; // ensure Tailwind is imported

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentNavPaths = ["/", "/platform-overview", "/about"];
  const hasTransparentNav = transparentNavPaths.includes(pathname);
  const isTransparent = hasTransparentNav && !scrolled && !isOpen;

  const navTextColor = isTransparent ? "text-white" : "text-gray-800";
  const logoTextColor = isTransparent ? "text-white" : "text-brand-dark-blue";
  const iconColor = isTransparent ? "text-white" : "text-brand-dark-blue";
  const logoSrc = isTransparent
    ? "https://i.imgur.com/your-white-logo.png"
    : "https://i.imgur.com/uN1914k.png";
  const ctaButtonClass = isTransparent
    ? "bg-white text-brand-dark-blue hover:bg-gray-200"
    : "bg-brand-green text-white hover:bg-brand-green-dark";

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "For Business",
      dropdown: [
        { name: "Platform Overview", href: "/platform-overview" },
        { name: "Fleet Solutions", href: "/fleet-solutions" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className={`flex items-center gap-2 text-2xl font-bold transition-colors ${logoTextColor}`}
          >
            <Image
              src={logoSrc}
              alt="FleetInfinity Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span>FleetInfinity</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="group relative h-full flex items-center"
                >
                  <button
                    className={`flex items-center gap-1 font-medium ${navTextColor} hover:text-brand-green transition-colors h-full px-2`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-5 w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible">
                    <div className="bg-white rounded-lg shadow-lg py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-brand-green"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium ${navTextColor} hover:text-brand-green transition-colors flex items-center h-full px-2`}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="flex items-center h-full ml-4">
              <Link
                href="/demo"
                className={`${ctaButtonClass} font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg`}
              >
                Request Demo
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${iconColor}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white pb-8 absolute top-full left-0 w-full shadow-lg">
          <div className="container mx-auto px-4 flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {link.name}
                    </h3>
                    <div className="flex flex-col pl-4 gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-gray-600 hover:text-brand-green"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="font-bold text-gray-800 hover:text-brand-green"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/demo"
              className="mt-4 text-center bg-brand-green text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">FleetInfinity</h4>
            <p className="text-brand-light-blue text-sm">
              Global tracking solutions powered by Dubai innovation.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Business</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/platform-overview"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet-solutions"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Fleet Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900/50">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-brand-light-blue">
          <p>
            &copy; {new Date().getFullYear()} FleetInfinity DMCC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main Root Layout ---
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          FleetInfinity - Total Visibility. Global Control. One Platform.
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>
          {children || (
            <div className="pt-24 h-96 text-center">
              Page content would appear here.
            </div>
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
