"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Satellite, Activity } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const ParallaxLayer = ({ bgImage, speed, priority, overlayOpacity = 0.55, imageClassName = "", className = "", children }) => {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setOffsetY(rect.top * speed);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden flex items-center justify-center ${className}`}
    >
      <div
        className="parallax-bg absolute left-0 w-full"
        style={{
          top: "-40%",
          height: "180%",
          transform: `translate3d(0px, ${offsetY}px, 0px)`,
        }}
      >
        <Image
          src={bgImage}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover object-center ${imageClassName}`}
        />
      </div>

      <div
        className="absolute inset-0 z-[2]"
        style={{ background: `rgba(10, 13, 20, ${overlayOpacity})` }}
      />

      <div className="relative z-[3] max-w-4xl px-4 text-center">
        {children}
      </div>
    </section>
  );
};

const FleetInfinityHero = () => {
  return (
    <div>
      {/* Layer 1: Highway — main headline */}
      <ParallaxLayer
        bgImage="/images/hero_bg_highway.png"
        speed={0.4}
        priority
        className="h-screen"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Track. Manage. Optimize.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mt-4">
          Fleet operations made simple.
        </p>
      </ParallaxLayer>

      {/* Layer 2: Dashboard — value proposition + stats */}
      <ParallaxLayer
        bgImage="/images/hero_bg_dashboard.png"
        speed={0.25}
        overlayOpacity={0.85}
        imageClassName="blur-sm"
        className="h-[60vh]"
      >
        <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
          The advanced, reliable, and API-first platform for fleet operators
          and service providers. Built for scalable performance.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/85">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            <span className="text-sm md:text-base">99.9% uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Satellite className="w-5 h-5 text-emerald-300" />
            <span className="text-sm md:text-base">hours-scale deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-300" />
            <span className="text-sm md:text-base">151+ devices</span>
          </div>
        </div>
      </ParallaxLayer>

      {/* Layer 3: Globe — CTA */}
      <ParallaxLayer
        bgImage="/images/hero_bg_globe.png"
        speed={0.35}
        className="h-[70vh]"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Ready to Transform Your Fleet?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Join industry leaders who trust our platform.
        </p>
        <Link
          href="/demo"
          className="inline-block bg-brand-green text-brand-dark-blue font-semibold px-10 py-4 rounded-lg text-lg hover:brightness-[1.1] hover:shadow-lg transition-all"
        >
          Request a Live Demo
        </Link>
      </ParallaxLayer>
    </div>
  );
};

export default FleetInfinityHero;
