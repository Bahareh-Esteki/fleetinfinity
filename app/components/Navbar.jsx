"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Video,
  Database,
  Wrench,
  Cpu,
  Truck,
  Building,
  UserCheck,
  BookOpen,
  FileText,
  Rss,
  Info,
  Mail,
  Users,
  Plane,
  Ship,
  Tractor,
  Thermometer,
  ArrowRight,
} from "lucide-react";

// ─── Mega Menu Link Helper ────────────────────────────────────────
// Reusable component for links within the mega menus for consistency.
const MegaMenuLink = ({ Icon, href, title, desc }) => (
  <Link
    href={href}
    className="group flex items-start gap-3.5 p-3 -m-3 rounded-lg hover:bg-gray-50 transition-colors"
  >
    <div className="flex items-center justify-center w-10 h-10 mt-0.5 rounded-lg bg-gray-50 text-brand-green-dark group-hover:bg-brand-green/10 transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-brand-green transition-colors">
        {title}
      </h4>
      <p className="text-xs text-gray-500 leading-snug mt-0.5">{desc}</p>
    </div>
  </Link>
);

// ─── 1. Platform Mega Menu ────────────────────────────────────────
const PlatformMegaMenu = () => (
  <div
    className={`
      absolute top-full left-1/2 -translate-x-1/2 mt-2
      w-[800px] max-w-[90vw] p-4
      bg-white rounded-xl shadow-xl border border-gray-100
      z-[200] origin-top animate-dropdown
    `}
  >
    <div className="grid grid-cols-3 gap-4">
      {/* Col 1: Promotional Image */}
      <div className="p-4 flex flex-col justify-between rounded-lg bg-gray-50 overflow-hidden">
        <div className="flex-grow">
          <h3 className="text-base font-bold text-gray-900">
            The All-in-One Fleet Platform
          </h3>
          <p className="text-xs text-gray-500 mt-1.5 leading-snug">
            Discover a unified solution for safety, efficiency, and compliance.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/platform"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:underline"
          >
            See the Platform
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <Image
          src="/images/navbar/platform-promo.png" // Update with your image
          alt="Platform Dashboard Mockup"
          width={400}
          height={300}
          className="w-full h-auto mt-auto -mb-16 -mr-8"
        />
      </div>

      {/* Col 2: Core & Capabilities */}
      <div className="p-2 flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1 pb-2">
          Core
        </div>
        <MegaMenuLink
          Icon={LayoutDashboard}
          href="/platform"
          title="Platform Overview"
          desc="The complete picture of your fleet."
        />
        <MegaMenuLink
          Icon={Video}
          href="/platform/video-telematics"
          title="Video Telematics"
          desc="AI dashcams and live streaming."
        />
        <MegaMenuLink
          Icon={Cpu}
          href="/platform/ai"
          title="AI Integration"
          desc="Proactive safety and driver coaching."
        />
      </div>

      {/* Col 3: More Capabilities & Integrations */}
      <div className="p-2 flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1 pb-2">
          More
        </div>
        <MegaMenuLink
          Icon={Wrench}
          href="/platform/maintenance"
          title="Maintenance Hub"
          desc="Predictive alerts and service logs."
        />
        <MegaMenuLink
          Icon={Database}
          href="/hardware/integrations"
          title="Hardware Integration"
          desc="Connect any telematics device."
        />
        <MegaMenuLink
          Icon={FileText}
          href="/hardware/supported"
          title="Supported Devices"
          desc="200+ compatible GPS devices."
        />
      </div>
    </div>
  </div>
);

// ─── 2. Solutions Mega Menu ───────────────────────────────────────
const SolutionsMegaMenu = () => (
  <div
    className={`
      absolute top-full left-1/2 -translate-x-1/2 mt-2
      w-[740px] max-w-[90vw] p-4
      bg-white rounded-xl shadow-xl border border-gray-100
      z-[200] origin-top animate-dropdown
    `}
  >
    <div className="grid grid-cols-[220px_1fr_200px] gap-4">
      {/* Col 1: Promotional Image */}
      <div className="p-4 rounded-lg bg-gray-50 overflow-hidden flex flex-col">
        <h3 className="text-base font-bold text-gray-900">
          Solutions for Every Fleet
        </h3>
        <p className="text-xs text-gray-500 mt-1.5 leading-snug">
          Tailored for your industry, built for your role.
        </p>
        <Link
          href="/solutions"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:underline mt-4"
        >
          Find Your Solution
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
        <div className="mt-auto pt-4">
          <Image
            src="/images/navbar/solutions-promo.png"
            alt="Fleet vehicles"
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Col 2: By Industry */}
      <div className="flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1 pb-2">
          By Industry
        </div>
        <MegaMenuLink
          Icon={Truck}
          href="/solutions/logistics"
          title="Logistics & Trucking"
          desc="Long-haul and last-mile."
        />
        <MegaMenuLink
          Icon={Building}
          href="/solutions/construction"
          title="Construction & Heavy Equipment"
          desc="Heavy equipment and assets."
        />
        <MegaMenuLink
          Icon={Thermometer}
          href="/solutions/healthcare"
          title="Healthcare & Emergency Services"
          desc="Long-haul and last-mile."
        />
        <MegaMenuLink
          Icon={Tractor}
          href="/solutions/construction"
          title="Agriculture & Farming"
          desc="Heavy equipment and assets."
        />
        <MegaMenuLink
          Icon={Users}
          href="/solutions/logistics"
          title="Public Transportation"
          desc="Long-haul and last-mile."
        />
        <MegaMenuLink
          Icon={Plane}
          href="/solutions/construction"
          title="Aviation & Maritime"
          desc="Heavy equipment and assets."
        />
      </div>

      {/* Col 3: By Role */}
      <div className="flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1 pb-2">
          By Role
        </div>
        <MegaMenuLink
          Icon={UserCheck}
          href="/solutions/fleet-managers"
          title="For Fleet Managers"
          desc="Optimize operations."
        />
        <MegaMenuLink
          Icon={Users}
          href="/solutions/partners"
          title="For Hardware Suppliers"
          desc="Expand your offerings."
        />
        <div className="flex-1" />
        <div className="mt-2 rounded-lg bg-brand-green/5 border border-brand-green/20 p-3 text-center">
          <p className="text-xs font-semibold text-brand-dark-blue">
            White-label Partner?
          </p>
          <Link
            href="/partners"
            className="text-xs font-medium text-brand-green hover:underline inline-flex items-center gap-1 mt-1"
          >
            Learn more <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// ─── 3. Resources Mega Menu ───────────────────────────────────────
const ResourcesMegaMenu = () => (
  <div
    className={`
      absolute top-full left-1/2 -translate-x-1/2 mt-2
      w-[600px] max-w-[90vw] p-4
      bg-white rounded-xl shadow-xl border border-gray-100
      z-[200] origin-top animate-dropdown
    `}
  >
    <div className="grid grid-cols-2 gap-4">
      {/* Col 1: Learn & Develop */}
      <div className="p-2 flex flex-col gap-1">
        <MegaMenuLink
          Icon={Rss}
          href="/resources/blog"
          title="Blog"
          desc="Insights, tips, and industry news."
        />
        <MegaMenuLink
          Icon={BookOpen}
          href="/resources/documents"
          title="White Papers"
          desc="In-depth guides for fleets."
        />
        <MegaMenuLink
          Icon={FileText}
          href="/resources/api"
          title="API Documentation"
          desc="For developers and integrators."
        />
      </div>

      {/* Col 2: Featured Post */}
      <div className="p-2">
        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1 pb-2">
          Featured
        </div>
        <Link href="/resources/blog/some-featured-post" className="block group">
          <div className="relative w-full h-32 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/images/navbar/resources-promo.png" // Update with your image
              alt="Featured post"
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h4 className="text-sm font-semibold text-gray-800 mt-3 group-hover:text-brand-green transition-colors">
            The Future of AI in Fleet Management
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Explore how artificial intelligence is revolutionizing safety and...
          </p>
        </Link>
      </div>
    </div>
  </div>
);

// ─── 4. Company Mega Menu ─────────────────────────────────────────
const CompanyMegaMenu = () => (
  <div
    className={`
      absolute top-full left-1/2 -translate-x-1/2 mt-2
      w-[550px] max-w-[90vw] p-4
      bg-white rounded-xl shadow-xl border border-gray-100
      z-[200] origin-top animate-dropdown
    `}
  >
    <div className="grid grid-cols-[220px_1fr] gap-4">
      {/* Col 1: Promotional Image */}
      <div className="p-4 rounded-lg bg-gray-50 overflow-hidden flex flex-col text-center">
        <Image
          src="/images/navbar/company-promo.jpg" // Update with your image
          alt="Team photo"
          width={150}
          height={150}
          className="w-24 h-24 rounded-full mx-auto ring-4 ring-white/50"
        />
        <h3 className="text-base font-bold text-gray-900 mt-3">Our Mission</h3>
        <p className="text-xs text-gray-500 mt-1.5 leading-snug">
          To create the most integrated and intuitive telematics platform.
        </p>
        <Link
          href="/about"
          className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-green hover:underline mt-4"
        >
          Meet the Team
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Col 2: Connect With Us */}
      <div className="p-2 flex flex-col gap-1">
        <MegaMenuLink
          Icon={Info}
          href="/about"
          title="About Us"
          desc="Our story and our values."
        />
        <MegaMenuLink
          Icon={Mail}
          href="/contact"
          title="Contact Us"
          desc="Get in touch with our team."
        />
        <MegaMenuLink
          Icon={Users}
          href="/partners"
          title="Partnership"
          desc="Offer our platform under your brand."
        />
      </div>
    </div>
  </div>
);

// ─── Nav Link Data (NEW STRUCTURE) ────────────────────────────────
const navLinks = [
  {
    name: "Platform",
    component: PlatformMegaMenu,
    mobileLinks: [
      { name: "Platform Overview", href: "/platform" },
      { name: "Video Telematics", href: "/platform/video-telematics" },
      { name: "AI Integration", href: "/platform/ai" },
      { name: "Maintenance Hub", href: "/platform/maintenance" },
      { name: "Hardware Integration", href: "/hardware/integrations" },
      { name: "Supported Devices", href: "/hardware/supported" },
    ],
  },
  {
    name: "Solutions",
    component: SolutionsMegaMenu,
    mobileLinks: [
      { name: "Logistics & Trucking", href: "/solutions/logistics" },
      { name: "Construction", href: "/solutions/construction" },
      { name: "For Fleet Managers", href: "/solutions/fleet-managers" },
      { name: "For Hardware Suppliers", href: "/solutions/partners" },
    ],
  },
  {
    name: "Resources",
    component: ResourcesMegaMenu,
    mobileLinks: [
      { name: "Blog", href: "/resources/blog" },
      { name: "White Papers", href: "/resources/documents" },
      { name: "API Documentation", href: "/resources/api" },
    ],
  },
  {
    name: "Company",
    component: CompanyMegaMenu,
    mobileLinks: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Partnership", href: "/partners" },
    ],
  },
];

// ─── Single nav item (handles its own hover state) ────────────────
const NavItem = ({ link, isTransparent }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const textColor = isTransparent
    ? "text-white hover:text-white/80"
    : "text-gray-700 hover:text-brand-green";

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  // Render a simple link if there's no dropdown component
  if (!link.component) {
    return (
      <Link
        href={link.href}
        className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${textColor}`}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer select-none ${textColor}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {link.name}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Render the associated mega menu component when open */}
      {open && link.component && React.createElement(link.component)}
    </div>
  );
};

// ─── Mobile accordion item ────────────────────────────────────────
const MobileNavItem = ({ link, onClose }) => {
  const [open, setOpen] = useState(false);

  // Simple link for items without a dropdown
  if (!link.mobileLinks) {
    return (
      <Link
        href={link.href}
        className="block font-semibold text-gray-800 hover:text-brand-green py-2 transition-colors"
        onClick={onClose}
      >
        {link.name}
      </Link>
    );
  }

  // Accordion for items with dropdowns
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-3 font-semibold text-gray-800"
      >
        {link.name}
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-3 flex flex-col gap-1 pl-3 border-l-2 border-brand-green ml-1">
          {link.mobileLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="py-1.5 text-sm text-gray-600 hover:text-brand-green transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Navbar ──────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const transparentNavPaths = [
    "/",
    "/platform",
    "/solutions",
    "/about",
    "/contact",
  ];
  const hasTransparentNav = transparentNavPaths.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = hasTransparentNav && !scrolled && !mobileOpen;
  const logoSrc = isTransparent ? "/logo-white.png" : "/logo.png";
  const ctaClass = isTransparent
    ? "bg-white text-brand-dark-blue hover:bg-gray-100"
    : "bg-brand-green text-white hover:bg-brand-green-dark";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || mobileOpen || !hasTransparentNav
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        style={{ overflow: "visible" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src={logoSrc}
                alt="Your Company Name"
                width={130}
                height={40}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  isTransparent={isTransparent}
                />
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/demo"
                className={`${ctaClass} font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px`}
              >
                Request Demo
              </Link>
            </div>

            <button
              className={`lg:hidden transition-colors p-1 ${isTransparent ? "text-white" : "text-brand-dark-blue"}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <MobileNavItem
                  key={link.name}
                  link={link}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/demo"
                className="mt-5 text-center bg-brand-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-green-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Animation Styles */}
      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)    scale(1);    }
        }
        .animate-dropdown {
          animation: dropdownIn 0.18s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </>
  );
}
