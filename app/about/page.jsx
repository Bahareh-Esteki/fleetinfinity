"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Users, ShieldCheck, Globe, Code, ArrowRight } from "lucide-react";

// Custom hook for detecting when an element is in view
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const PageHeader = () => (
  <div className="relative bg-brand-dark-blue text-white pt-40 pb-20 text-center overflow-hidden">
    <div
      className="absolute inset-0 bg-opacity-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(169,192,209,0.5)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        Unburdened by Legacy.
        <br />
        <span className="text-brand-green">Driven by Innovation.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-brand-light-blue">
        We didn't set out to fix the old way of fleet management. We started
        fresh to build the future of it.
      </p>
    </div>
  </div>
);

const TimelineSection = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.5 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.5 });

  const timelineItemClass = (isVisible) =>
    `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-light-blue hidden md:block"></div>

          {/* Timeline Item 1: The Past */}
          <div
            ref={ref1}
            className={`${timelineItemClass(
              isVisible1
            )} md:grid md:grid-cols-2 md:gap-12 items-center mb-24`}
          >
            <div className="md:text-right md:pr-12 mb-8 md:mb-0">
              <p className="text-brand-green font-semibold">THE OLD WAY</p>
              <h3 className="text-3xl font-bold text-brand-dark-blue mb-2">
                Complexity & Clutter
              </h3>
              <p className="text-slate-600">
                Legacy platforms were powerful, but became weighed down by
                decades of patches and features. The result? Data overload,
                clunky interfaces, and rigid systems that couldn't adapt.
              </p>
            </div>
            <div className="relative md:pl-12">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-dark-blue rounded-full hidden md:block"></div>
              <Image
                src="oldway.png"
                alt="Old, cluttered technology interface"
                width={600}
                height={400}
                className="rounded-lg shadow-xl grayscale opacity-70"
              />
            </div>
          </div>

          {/* Timeline Item 2: The Need */}
          <div
            ref={ref2}
            className={`${timelineItemClass(
              isVisible2
            )} md:grid md:grid-cols-2 md:gap-12 items-center mb-24`}
          >
            <div className="md:order-2 md:pl-12 mb-8 md:mb-0">
              <p className="text-brand-green font-semibold">THE OPPORTUNITY</p>
              <h3 className="text-3xl font-bold text-brand-dark-blue mb-2">
                A Blank Slate
              </h3>
              <p className="text-slate-600">
                We saw a clear need for a new approach. A platform built from
                the ground up using modern architecture, designed for today's
                user, and powered by the potential of AI and real-time data.
              </p>
            </div>
            <div className="relative md:order-1 md:pr-12 md:text-right">
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-dark-blue rounded-full hidden md:block"></div>
              <Image
                src="newway.png"
                alt="A spark of an idea"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Timeline Item 3: The Now */}
          <div
            ref={ref3}
            className={`${timelineItemClass(
              isVisible3
            )} md:grid md:grid-cols-2 md:gap-12 items-center`}
          >
            <div className="md:text-right md:pr-12 mb-8 md:mb-0">
              <p className="text-brand-green font-semibold">THE NEW WAY</p>
              <h3 className="text-3xl font-bold text-brand-dark-blue mb-2">
                FleetInfinity is Born
              </h3>
              <p className="text-slate-600">
                In 2025, from the global innovation hub of Dubai, FleetInfinity
                was launched. Not as an update, but as a revolution. Our newness
                is our greatest strength—it means we're faster, smarter, and
                more agile than anyone else.
              </p>
            </div>
            <div className="relative md:pl-12">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-green rounded-full ring-4 ring-white hidden md:block"></div>
              <Image
                src="Screenshot 2025-07-31 114917.png"
                alt="Clean and modern FleetInfinity UI"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurDnaSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
          Our DNA
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Being new allows us to be different. Our principles are built for the
          modern world, not adapted from the old one.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Zap className="mx-auto w-12 h-12 text-brand-green mb-4" />
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            Agile Engineering
          </h4>
          <p className="text-slate-600">
            We're not slowed by bureaucracy. We build, test, and deploy features
            fast, responding to your needs in weeks, not years.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Users className="mx-auto w-12 h-12 text-brand-green mb-4" />
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            User-Obsessed Design
          </h4>
          <p className="text-slate-600">
            We designed our platform for the person using it today, creating an
            intuitive experience that doesn't require a manual.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <ShieldCheck className="mx-auto w-12 h-12 text-brand-green mb-4" />
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            Security by Default
          </h4>
          <p className="text-slate-600">
            Built from scratch with the latest security protocols, we protect
            your data without compromise from day one.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Globe className="mx-auto w-12 h-12 text-brand-green mb-4" />
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            Global from Day One
          </h4>
          <p className="text-slate-600">
            Our Dubai HQ gives us a unique, international perspective to build
            solutions that work seamlessly, everywhere.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <div className="bg-white py-20">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <Code className="mx-auto w-12 h-12 text-brand-dark-blue mb-4" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
          Join the New Standard
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          We're not just another platform; we're the future of fleet
          intelligence. If you're ready for a solution built for today's
          challenges and tomorrow's opportunities, let's talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Contact Our Team <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <TimelineSection />
      <OurDnaSection />
      <CtaSection />
    </>
  );
}
