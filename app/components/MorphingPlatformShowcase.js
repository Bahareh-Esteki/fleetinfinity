"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Monitor,
  Zap,
  Users,
  Camera,
  Route,
  MapPin,
  Smartphone,
  Shield,
  Heart,
  Lock,
  GitCommit,
  Database,
  Building,
} from "lucide-react";

// ---------- IMAGE DATA (Add all your real-image paths here) ----------
const IMAGE_DATA = {
  "dashboard-analytics": {
    src: "/images/screenshots/dashboard-analytics.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-report-builder": {
    src: "/images/screenshots/dashboard-report-builder.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-maintenance": {
    src: "/images/screenshots/dashboard-maintenance.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-geofence": {
    src: "/images/screenshots/dashboard-route-replay.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-video": {
    src: "/images/screenshots/dashboard-live-video.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-driver-score": {
    src: "/images/screenshots/dashboard-driver-score.jpg",
    width: 1200,
    height: 675,
  },
  "mobile-live-map": {
    src: "/images/screenshots/mobile-live-map.png",
    width: 350,
    height: 550,
  },
};

// ---------- BUSINESS/PERSONAL FEATURE SETS ----------
const FEATURES = {
  business: [
    {
      key: "dashboard-analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Deep Operational Intelligence",
      desc: "Comprehensive charts for temperature, fuel, speed, and weight analysis, driving predictive maintenance and cost optimization.",
    },
    {
      key: "dashboard-report-builder",
      icon: <Database className="w-5 h-5" />,
      label: "Advanced Report Builder",
      desc: "Generate detailed fleet, trip, and maintenance reports in seconds. Build custom templates or export instantly to Excel, PDF, or API.",
    },
    {
      key: "dashboard-maintenance",
      icon: <Zap className="w-5 h-5" />,
      label: "Proactive Maintenance Planner",
      desc: "Schedule maintenance based on mileage, engine hours, or date, minimizing downtime with automated reminders.",
    },
    {
      key: "dashboard-geofence",
      icon: <MapPin className="w-5 h-5" />,
      label: "Advanced Geofence & Presence Monitoring",
      desc: "Receive instant alerts for vehicle entrances/exits and presence checks. Generate accurate compliance reports.",
    },
    {
      key: "dashboard-video",
      icon: <Camera className="w-5 h-5" />,
      label: "Visual Monitoring & Video Telematics",
      desc: "Stream and store live video to validate incidents, improve accountability, and strengthen team safety culture.",
    },
    {
      key: "dashboard-driver-score",
      icon: <Users className="w-5 h-5" />,
      label: "AI-Based Driver Coaching",
      desc: "Identify top and high-risk drivers with event detection and automatic scoring to boost safety and reduce costs.",
    },
  ],

  personal: [
    {
      key: "mobile-live-map",
      icon: <Smartphone className="w-5 h-5" />,
      label: "Always-On Vehicle Security",
      desc: "Track your vehicle in real time, check engine status, and receive anti-theft alerts directly in your mobile app.",
    },
    {
      key: "mobile-live-map",
      icon: <Lock className="w-5 h-5" />,
      label: "Secure Remote Immobilization",
      desc: "Remotely disable the ignition and lock or unlock the car for full control and safety (compatible hardware required).",
    },
    {
      key: "mobile-live-map",
      icon: <GitCommit className="w-5 h-5" />,
      label: "Safe Zone & Towing Alerts",
      desc: "Get immediate alerts about illegal towing, battery disconnection, or unauthorized movement outside geofences.",
    },
  ],
};

// ---------- MAIN COMPONENT ----------
const MorphingPlatformShowcase = () => {
  const [activeMode, setActiveMode] = useState("business");
  const [activeIndex, setActiveIndex] = useState(0);
  const currentFeatures = FEATURES[activeMode];
  const activeFeature = currentFeatures[activeIndex];
  const imageData = IMAGE_DATA[activeFeature.key];

  // Auto-cycle unless user interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currentFeatures.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeMode, currentFeatures.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-600/20 rounded-full px-4 py-2 text-sm font-medium text-indigo-600 mb-4">
            <Building className="w-4 h-4" />
            Total Visibility. Effortless Control.
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            FleetInfinity Adapts to Your Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore powerful modules designed for both enterprises and families.
            Real-time visibility, instant data, and total command at your
            fingertips.
          </p>
        </div>

        {/* Switch between Business / Personal */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setActiveMode("business")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeMode === "business"
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-blue-50"
            }`}
          >
            For Business
          </button>
          <button
            onClick={() => setActiveMode("personal")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeMode === "personal"
                ? "bg-green-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-green-50"
            }`}
          >
            For Personal
          </button>
        </div>

        {/* Screen Image */}
        <div className="relative w-full max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.key}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video w-full"
            >
              <Image
                src={imageData.src}
                alt={activeFeature.label}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs Buttons for Features */}
        <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-2">
          {currentFeatures.map((feature, i) => (
            <button
              key={feature.key}
              onClick={() => setActiveIndex(i)}
              className={`whitespace-nowrap px-5 py-2 rounded-full flex items-center gap-2 text-sm transition-all ${
                i === activeIndex
                  ? "bg-indigo-600 text-white shadow font-semibold"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-50"
              }`}
            >
              {feature.icon}
              {feature.label}
            </button>
          ))}
        </div>

        {/* Active Feature Description */}
        <motion.div
          key={activeFeature.label}
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {activeFeature.label}
          </h3>
          <p className="text-gray-600">{activeFeature.desc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MorphingPlatformShowcase;
