"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin, BarChart3, Shield, Zap } from "lucide-react";

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Platform screenshots - 5 cards like in the reference image
  const platformScreenshots = [
    {
      id: 1,
      type: "web",
      title: "Fleet Dashboard",
      src: "/images/screenshots/dashboard-overview.png",
    },
    {
      id: 2,
      type: "mobile",
      title: "Driver Mobile App",
      src: "/images/screenshots/mobile-driver.png",
    },
    {
      id: 3,
      type: "web",
      title: "Live GPS Tracking",
      src: "/images/screenshots/live-tracking.png",
    },
    {
      id: 4,
      type: "mobile",
      title: "Route Navigation",
      src: "/images/screenshots/mobile-navigation.png",
    },
    {
      id: 5,
      type: "web",
      title: "Analytics & Reports",
      src: "/images/screenshots/analytics-dashboard.png",
    },
  ];

  const floatingElements = [
    {
      id: 1,
      icon: <MapPin className="w-6 h-6" />,
      x: "10%",
      y: "20%",
      delay: 0,
    },
    {
      id: 2,
      icon: <BarChart3 className="w-6 h-6" />,
      x: "85%",
      y: "15%",
      delay: 1,
    },
    {
      id: 3,
      icon: <Shield className="w-6 h-6" />,
      x: "15%",
      y: "70%",
      delay: 2,
    },
    { id: 4, icon: <Zap className="w-6 h-6" />, x: "90%", y: "65%", delay: 3 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-dark-blue via-slate-900 to-brand-dark-blue overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-brand-green/20 to-lime-400/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.02 + "px",
            top: mousePosition.y * 0.02 + "px",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-to-l from-lime-400/20 to-brand-green/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <div className="text-white/70">{element.icon}</div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 pt-20 pb-8 relative z-20">
        {/* Professional Badge */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            Next-Gen Fleet Intelligence Platform
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="text-center max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-white">Smarter Fleet,</span>{" "}
            <span className="bg-gradient-to-r from-lime-400 to-brand-green bg-clip-text text-transparent">
              Better Business
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your fleet operations with real-time GPS tracking,
            intelligent analytics, and comprehensive management tools.
          </p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-lime-400">151+</div>
              <div className="text-sm">Compatible Devices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-lime-400">99.9%</div>
              <div className="text-sm">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-lime-400">24/7</div>
              <div className="text-sm">Expert Support</div>
            </div>
          </motion.div>

          {/* Dual CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="/demo"
              className="group bg-gradient-to-r from-lime-400 to-brand-green text-brand-dark-blue font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="group border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Platform Demo
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Large Screenshot Showcase - Similar to reference image */}
      <motion.div
        className="relative w-full mt-8 pb-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex justify-center items-end gap-4 px-4 overflow-x-auto">
          {platformScreenshots.map((screenshot, index) => {
            const isMobile = screenshot.type === "mobile";
            // Create curved arrangement
            const rotation = (index - 2) * 6; // Reduced rotation for subtler effect
            const yOffset = Math.abs(index - 2) * 15; // Creates gentle curve
            const scale = 1 - Math.abs(index - 2) * 0.05; // Minimal size variation

            return (
              <motion.div
                key={screenshot.id}
                className={`relative ${
                  isMobile
                    ? "w-48 h-80 md:w-56 md:h-96"
                    : "w-64 h-40 md:w-80 md:h-48"
                } rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/10 flex-shrink-0`}
                style={{
                  transform: `rotate(${rotation}deg) translateY(${yOffset}px) scale(${scale})`,
                  zIndex: 5 - Math.abs(index - 2),
                }}
                whileHover={{
                  scale: scale + 0.05,
                  rotate: rotation * 0.3,
                  y: -20,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Placeholder for screenshot - replace with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 flex flex-col items-center justify-center p-4">
                  <div className="text-center text-slate-600">
                    <div className="text-sm font-bold mb-2">
                      {screenshot.title}
                    </div>
                    <div className="text-xs opacity-70 mb-4">
                      {isMobile ? "Mobile App" : "Web Platform"}
                    </div>

                    {/* Mock UI elements */}
                    {isMobile ? (
                      <div className="w-full space-y-2">
                        <div className="h-2 bg-slate-400 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-slate-400 rounded w-1/2 mx-auto"></div>
                        <div className="h-8 bg-brand-green/60 rounded mx-auto mt-4 w-5/6"></div>
                      </div>
                    ) : (
                      <div className="w-full space-y-2">
                        <div className="flex gap-1 mb-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="h-1.5 bg-slate-400 rounded w-full"></div>
                        <div className="h-1.5 bg-slate-400 rounded w-4/5"></div>
                        <div className="h-1.5 bg-slate-400 rounded w-3/5"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>

                {/* Pulsing GPS indicators for tracking screenshots */}
                {screenshot.title.includes("Tracking") && (
                  <motion.div
                    className="absolute top-3 right-3 w-3 h-3 bg-lime-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Screenshot label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <div className="text-white text-xs font-medium text-center">
                    {screenshot.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle glow beneath screenshots */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-20 bg-gradient-to-r from-transparent via-lime-400/20 to-transparent blur-2xl"></div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
