"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, ShieldCheck, Satellite, Activity } from "lucide-react";
import React from "react";

const FleetInfinityHero = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background image (full bleed). Replace with your fleet background: logistics hub / highway interchange */}
      <Image
        src="/images/hero_bg.png" // e.g., your generated logistics/command image
        alt="Fleet manager overlooking organized logistics hub at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/15"
        aria-hidden="true"
      />

      {/* Content wrapper (left-aligned, left third) */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6">
          <div className="flex h-full">
            {/* Left column: text area ~35% */}
            <div className="w-full md:w-5/12 lg:w-4/12 flex items-center">
              <div className="py-28 md:py-0">
                {/* Small brand context icon */}
                <div className="mb-4 inline-flex items-center gap-2 text-white/90">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm tracking-wide">
                    GPS Fleet Intelligence
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl leading-tight md:text-6xl font-extrabold text-white">
                  Track. Manage. Optimize.
                  <br className="hidden md:block" />
                  Fleet operations made simple.
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base md:text-lg text-white/85 max-w-md">
                  Real-time GPS tracking, smart routing, and actionable
                  analytics—built for reliable, scalable fleet performance.
                </p>

                {/* Single CTA */}
                <div className="mt-8 flex items-center gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-green text-brand-dark-blue font-semibold px-6 py-3 text-base hover:brightness-[1.1] hover:shadow-lg hover:shadow-purple-400/25 transition-all"
                  >
                    Get a Free Demo
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-6 py-3 text-base hover:bg-white/10 transition-all"
                  >
                    Explore Solutions
                  </Link>
                </div>

                {/* Trust indicators (minimal row) */}
                <div className="mt-6 flex items-center gap-5 text-white/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm">99.9% uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Satellite className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm">±3m accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm">151+ devices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column left empty for imagery breathing room */}
            <div className="hidden md:block md:w-7/12 lg:w-8/12" />
          </div>
        </div>
      </div>

      {/* Accessibility: hero label */}
      <h2 className="sr-only">
        FleetInfinity GPS fleet management platform hero section
      </h2>
    </header>
  );
};

export default FleetInfinityHero;
