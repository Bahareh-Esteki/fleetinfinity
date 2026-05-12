"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Import shadcn/ui navigation menu components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const transparentNavPaths = [
    "/",
    "/platform",
    "/about",
    "/solutions",
    "/contact",
    "/price-calculator",
  ];
  const hasTransparentNav = transparentNavPaths.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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
      name: "Platform",
      dropdown: [
        { name: "Platform Overview", href: "/platform" },
        { name: "Video Telematics", href: "/platform/dashcam" },
        { name: "Maintanance Hub", href: "/platform/maintanance" },
        { name: "AI Integration", href: "/platform/ai" },
        { name: "Apps", href: "/platform/apps" },
      ],
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "By industry", href: "/solutions" },
        { name: "By Role", href: "/solutions/roles" },
      ],
    },
    {
      name: "For Partners",
      dropdown: [
        { name: "White-Lable & Partner Partner Plans", href: "/partners" },
      ],
    },
    {
      name: "Hardware & Integrations",
      dropdown: [
        { name: "Hardware Integration", href: "/hardware/integrations" },
        { name: "Supported Devices", href: "/hardware/supported" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "White-papers", href: "/resources/documents" },
        { name: "API Documentation", href: "/resources/api" },
        { name: "Blog", href: "/resources/b;og" },
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
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 text-2xl font-bold transition-colors ${logoTextColor}`}
          >
            <Image
              src={logoSrc}
              alt="FleetInfinity Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation (Mega Menu) */}
          <div className="hidden lg:flex items-center h-full">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.dropdown ? (
                      <>
                        <NavigationMenuTrigger
                          className={`bg-transparent hover:bg-transparent hover:text-brand-green data-[state=open]:bg-transparent data-[active]:bg-transparent focus:bg-transparent font-medium text-base ${navTextColor}`}
                        >
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {/* Mega menu grid layout */}
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-lg rounded-md border">
                            {link.dropdown.map((item) => (
                              <ListItem
                                key={item.name}
                                title={item.name}
                                href={item.href}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={`px-4 py-2 font-medium bg-transparent hover:bg-transparent hover:text-brand-green transition-colors flex items-center h-full ${navTextColor}`}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop CTA */}
            <div className="flex items-center h-full ml-6">
              <Link
                href="/demo"
                className={`${ctaButtonClass} font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg`}
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Navigation (Kept as standard accordion/list) */}
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
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable ListItem component for the Mega Menu
const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={`block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-slate-50 hover:text-brand-green focus:bg-slate-50 focus:text-brand-green ${className}`}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-gray-900">
              {title}
            </div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-2">
                {children}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
