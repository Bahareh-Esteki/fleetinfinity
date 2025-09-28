"use client";

import Link from "next/link";
import Image from "next/image";
import { Plane } from "lucide-react";
import React from "react";

const ModernHero = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background image (full bleed) */}
      <Image
        src="/images/hero_bg.png" // replace with your landscape photo
        alt="Traveler overlooking mountain landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/20"
        aria-hidden="true"
      />

      {/* Top navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          {/* Logo left */}
          <Link
            href="/"
            className="text-white text-xl font-extrabold tracking-tight"
          >
            Wanderly
          </Link>

          {/* Menu right */}
          <ul className="hidden md:flex items-center gap-8 text-white/80">
            <li>
              <Link
                href="/destinations"
                className="hover:text-white transition-colors"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="/experiences"
                className="hover:text-white transition-colors"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                href="/stories"
                className="hover:text-white transition-colors"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu placeholder (optional) */}
          <button
            className="md:hidden text-white/90 hover:text-white"
            aria-label="Open menu"
          >
            {/* You can place a hamburger icon here */}☰
          </button>
        </div>
      </nav>

      {/* Content wrapper (left-aligned, left third) */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6">
          <div className="flex h-full">
            {/* Left column: text area occupies ~35% on desktop */}
            <div className="w-full md:w-5/12 lg:w-4/12 flex items-center">
              <div className="py-28 md:py-0">
                {/* Small brand icon */}
                <div className="mb-4 inline-flex items-center gap-2 text-white/90">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm tracking-wide">
                    Explore with confidence
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl leading-tight md:text-6xl font-extrabold text-white">
                  Find your path.
                  <br className="hidden md:block" />
                  Travel with purpose.
                </h1>

                {/* Subtitle (single supporting line) */}
                <p className="mt-5 text-base md:text-lg text-white/80 max-w-md">
                  Plan meaningful journeys with curated routes, local insights,
                  and trips crafted for real discovery.
                </p>

                {/* Single CTA */}
                <div className="mt-8">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center rounded-lg bg-[#B89CFF] text-brand-dark-blue font-semibold px-6 py-3 text-base hover:brightness-[1.1] hover:shadow-lg hover:shadow-purple-400/25 transition-all"
                  >
                    Start Planning
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column: left empty to let imagery breathe (asymmetrical balance) */}
            <div className="hidden md:block md:w-7/12 lg:w-8/12" />
          </div>
        </div>
      </div>

      {/* Accessibility: non-visual label for the hero */}
      <h2 className="sr-only">Adventure travel planning for explorers</h2>
    </header>
  );
};

export default ModernHero;
