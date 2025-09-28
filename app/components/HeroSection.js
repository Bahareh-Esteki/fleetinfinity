"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin, BarChart3, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 5 Platform screenshots - mix of mobile and web
  const platformScreenshots = [
    {
      id: 1,
      type: "web",
      title: "Fleet Dashboard",
      src: "/images/screenshots/dashboard-overview.png",
      description: "Live fleet overview with real-time tracking",
    },
    {
      id: 2,
      type: "mobile",
      title: "Driver Mobile App",
      src: "/images/screenshots/mobile-driver.png",
      description: "Driver interface with route navigation",
    },
    {
      id: 3,
      type: "web",
      title: "Live GPS Tracking",
      src: "/images/screenshots/live-tracking.png",
      description: "Real-time vehicle locations and routes",
    },
    {
      id: 4,
      type: "mobile",
      title: "Mobile Analytics",
      src: "/images/screenshots/mobile-analytics.png",
      description: "Fleet performance on the go",
    },
    {
      id: 5,
      type: "web",
      title: "Reports & Analytics",
      src: "/images/screenshots/analytics-dashboard.png",
      description: "Comprehensive fleet insights",
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

      <div className="container mx-auto px-4 pt-20 pb-32 relative z-20">
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
          className="text-center max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-white">Smart Fleet,</span>{" "}
            <span className="bg-gradient-to-r from-lime-400 to-brand-green bg-clip-text text-transparent">
              Less Work
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your fleet operations with intelligent GPS tracking,
            automated reporting, and comprehensive management tools that save
            time and reduce costs.
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="/demo"
              className="group bg-gradient-to-r from-lime-400 to-brand-green text-brand-dark-blue font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 flex items-center gap-2"
            >
              Take Control of Your Fleet Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Large Screenshot Showcase - Like the Image */}
        <motion.div
          className="relative max-w-7xl mx-auto mt-24"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <div className="flex justify-center items-end gap-4 overflow-hidden">
            {platformScreenshots.map((screenshot, index) => {
              const isMobile = screenshot.type === "mobile";
              // Create gentle arc like in the image
              const rotation = (index - 2) * 6; // Less rotation for subtlety
              const yOffset = Math.abs(index - 2) * 15; // Gentle curve
              const scale = 1 - Math.abs(index - 2) * 0.05; // Minimal size variation

              return (
                <motion.div
                  key={screenshot.id}
                  className={`relative ${
                    isMobile ? "w-64 h-96" : "w-80 h-64"
                  } rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm`}
                  style={{
                    transform: `rotate(${rotation}deg) translateY(${yOffset}px) scale(${scale})`,
                    zIndex: 5 - Math.abs(index - 2),
                  }}
                  whileHover={{
                    scale: scale + 0.03,
                    rotate: rotation * 0.3,
                    y: -10,
                    zIndex: 20,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Placeholder for screenshot - replace with actual platform images */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-gray-100 flex flex-col items-center justify-center p-6 text-gray-700">
                    <div className="text-center">
                      <div className="text-lg font-bold mb-2 text-brand-dark-blue">
                        {screenshot.title}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        {screenshot.description}
                      </div>
                      <div className="text-xs px-3 py-1 bg-brand-green/10 text-brand-green rounded-full font-medium">
                        {isMobile ? "📱 Mobile App" : "💻 Web Platform"}
                      </div>
                    </div>
                  </div>

                  {/* Subtle glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none"></div>

                  {/* Pulsing indicator for live features */}
                  {screenshot.title.includes("Live") && (
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 bg-lime-400 rounded-full shadow-lg"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Screenshot frame effect */}
                  <div className="absolute inset-2 border border-white/30 rounded-xl pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Large glow effect beneath screenshots */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-r from-transparent via-lime-400/15 to-transparent blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
