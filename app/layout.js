"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// --- Components defined within the same file to resolve import errors ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  const transparentNavPaths = ["/", "/platform-overview", "/about", "/contact"];

  const hasTransparentNav = transparentNavPaths.includes(pathname);

  useEffect(() => {
    // In a non-Next.js environment, we use the window object to determine the path.
    setIsHomePage(window.location.pathname === "/");

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on scroll position, page, and mobile menu state
  const isTransparentOnHome = hasTransparentNav && !scrolled && !isOpen;

  const navTextColor = isTransparentOnHome ? "text-white" : "text-gray-800";
  const logoTextColor = isTransparentOnHome
    ? "text-white"
    : "text-brand-dark-blue";
  const iconColor = isTransparentOnHome ? "text-white" : "text-brand-dark-blue";
  const logoSrc = isTransparentOnHome ? "logo-white.png" : "logo.png"; // Placeholder for white logo
  const ctaButtonClass = isTransparentOnHome
    ? "bg-white text-brand-dark-blue hover:bg-gray-200"
    : "bg-brand-green text-white hover:bg-brand-green-dark";

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "For Business",
      dropdown: [
        { name: "Platform Overview", href: "/platform-overview" },
        { name: "Fleet Solutions", href: "/fleet-solutions" },
        { name: "Industries", href: "/industries" },
      ],
    },
    {
      name: "For Personal Use",
      dropdown: [
        { name: "How It Works", href: "/personal-app" },
        { name: "Personal Solutions", href: "/personal-solutions" },
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
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className={`flex items-center gap-2 text-2xl font-bold transition-colors ${logoTextColor}`}
          >
            <Image
              src={logoSrc}
              alt="FleetInfinity Logo"
              width="40"
              height="40"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="group relative">
                  <button
                    className={`flex items-center gap-1 font-medium ${navTextColor} hover:text-brand-green transition-colors`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible pt-2 pb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-green"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium ${navTextColor} hover:text-brand-green transition-colors`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/demo"
              className={`${ctaButtonClass} font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg`}
            >
              Request Demo
            </Link>
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

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">FleetInfinity</h4>
            <p className="text-brand-light-blue text-sm">
              Global tracking solutions powered by Dubai innovation. Serving
              businesses and individuals worldwide.
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
              <li>
                <Link
                  href="/industries"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Personal Use</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/personal-app"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/personal-solutions"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Personal Solutions
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
            reserved. Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          FleetInfinity - Total Visibility. Global Control. One Platform.
        </title>
        <meta
          name="description"
          content="Intelligent tracking solutions for your business fleet and the things you value most."
        />
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
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          {`
                tailwind.config = {
                  theme: {
                    extend: {
                      fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                      },
                      colors: {
                        'brand-dark-blue': '#003366',
                        'brand-light-blue': '#A9C0D1',
                        'brand-green': '#58C15D',
                        'brand-green-dark': '#4aa54e',
                      }
                    }
                  }
                }
              `}
        </script>
        <style>
          {`
                body { font-family: 'Inter', sans-serif; }
                .animate-float { animation: float 20s ease-in-out infinite; }
                @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
                
                .animate-ping-custom { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
                @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
                
                .animate-pulse-custom { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes pulse { 50% { opacity: .5; } }
              `}
        </style>
      </head>
      <body>
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
