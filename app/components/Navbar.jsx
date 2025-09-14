"use client";
import React, { useState, useEffect } from "react";
// Note: next/link, next/image, and next/navigation are replaced with standard browser APIs
// and tags for compatibility with the preview environment.
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    // In a non-Next.js environment, we use the window object to determine the path on the client side.
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define all paths that should have a transparent navbar at the top
  const transparentNavPaths = [
    "/",
    "/platform-overview",
    "/about",
    "/personal-solutions",
  ];
  const hasTransparentNav = transparentNavPaths.includes(pathname);

  // Determine styles based on scroll position, current page, and mobile menu state
  const isTransparent = hasTransparentNav && !scrolled && !isOpen;

  const navTextColor = isTransparent ? "text-white" : "text-gray-800";
  const logoTextColor = isTransparent ? "text-white" : "text-brand-dark-blue";
  const iconColor = isTransparent ? "text-white" : "text-brand-dark-blue";
  const logoSrc = isTransparent ? "/logo-white.png" : "/logo.png";
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
        <div className="flex justify-between items-center h-20">
          {" "}
          {/* Set a fixed height */}
          <a
            href="/"
            className={`flex items-center gap-2 text-2xl font-bold transition-colors ${logoTextColor}`}
          >
            <img
              src={logoSrc}
              alt="FleetInfinity Logo"
              width="40"
              height="40"
            />
            <span>FleetInfinity</span>
          </a>
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
                  {/* This wrapper with padding-top creates an invisible "bridge" for the cursor */}
                  <div className="absolute top-full left-0 pt-5 w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible">
                    <div className="bg-white rounded-lg shadow-lg py-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-brand-green"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium ${navTextColor} hover:text-brand-green transition-colors flex items-center h-full px-2`}
                >
                  {link.name}
                </a>
              )
            )}
            <div className="flex items-center h-full ml-4">
              <a
                href="/demo"
                className={`${ctaButtonClass} font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg`}
              >
                Request Demo
              </a>
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

      {/* Mobile Menu */}
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
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-600 hover:text-brand-green"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="font-bold text-gray-800 hover:text-brand-green"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/demo"
              className="mt-4 text-center bg-brand-green text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
