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
  Database,
  GitCommit,
  Building,
} from "lucide-react";

// ---- IMAGE DATA ----
const IMAGE_DATA = {
  // Business
  "dashboard-analytics": {
    src: "/images/screenshots/dashboard-analytics.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-driver-score": {
    src: "/images/screenshots/dashboard-driver-score.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-live-video": {
    src: "/images/screenshots/dashboard-live-video.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-route-replay": {
    src: "/images/screenshots/dashboard-route-replay.jpg",
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
  "dashboard-user-roles": {
    src: "/images/screenshots/dashboard-user-roles.jpg",
    width: 1200,
    height: 675,
  },

  // Personal
  "mobile-live-map": {
    src: "/images/screenshots/mobile-live-map.png",
    width: 350,
    height: 550,
  },
  "mobile-geofence-alert": {
    src: "/images/screenshots/mobile-geofence-alert.png",
    width: 350,
    height: 550,
  },
  "mobile-remote-control": {
    src: "/images/screenshots/mobile-remote-control.png",
    width: 350,
    height: 550,
  },
  "mobile-phone-tracker": {
    src: "/images/screenshots/mobile-phone-tracker.png",
    width: 350,
    height: 550,
  },
  "mobile-alerts-log": {
    src: "/images/screenshots/mobile-alerts-log.png",
    width: 350,
    height: 550,
  },
  "mobile-report": {
    src: "/images/screenshots/mobile-report.png",
    width: 350,
    height: 550,
  },
  "mobile-performance": {
    src: "/images/screenshots/mobile-performance.png",
    width: 350,
    height: 550,
  },
};

// ---- FEATURE DATA ----
const FEATURES = {
  business: [
    {
      key: "dashboard-analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Deep Operational Intelligence",
      desc: "Comprehensive charts for temperature, moisture, fuel, speed, and weight analysis to drive predictive maintenance and cost reduction.",
    },
    {
      key: "dashboard-driver-score",
      icon: <Users className="w-5 h-5" />,
      label: "AI-Powered Driver Coaching",
      desc: "Detailed reports on top/high-risk drivers, aggressive event detection, and custom behavior scenario controls.",
    },
    {
      key: "dashboard-live-video",
      icon: <Camera className="w-5 h-5" />,
      label: "Real-Time Visual Monitoring",
      desc: "Integration with camera devices for storing and live image/video streaming, enabling immediate visual confirmation of events and reporting functionalities.",
    },
    {
      key: "dashboard-route-replay",
      icon: <Route className="w-5 h-5" />,
      label: "Smart Route Compliance & Replay",
      desc: "Create authorized/unauthorized zones and replay travel history as a film, complete with all associated alerts.",
    },
    {
      key: "dashboard-maintenance",
      icon: <Zap className="w-5 h-5" />,
      label: "Proactive Maintenance Planner",
      desc: "Automated reminders for insurance renewal, oil changes, brake pads, and custom service reminders based on mileage, working hour, and date, to minimize downtime.",
    },
    {
      key: "dashboard-report-builder",
      icon: <Database className="w-5 h-5" />,
      label: "Advanced Report Builder",
      desc: "Select from dozens of ready-made report templates or build fully custom fleet, trip, maintenance, and compliance reports. Generate deep analytics from hundreds or thousands of vehicles in just seconds, export to Excel, PDF, or via API.",
    },
    {
      key: "dashboard-user-roles",
      icon: <Shield className="w-5 h-5" />,
      label: "Modular User Access (RBAC)",
      desc: "Group vehicles and users, define project access, and granularly activate/deactivate modules for specific team members.",
    },
    {
      key: "dashboard-analytics",
      icon: <Monitor className="w-5 h-5" />,
      label: "CAN & OBD-II Data Analytics",
      desc: "Live access to vehicle CAN-bus and OBD-II data with real-time alarms, analytics, and in-depth reporting. Supports SAE-J1939, J1708 protocols for maximum compatibility.",
    },
    {
      key: "dashboard-route-replay",
      icon: <MapPin className="w-5 h-5" />,
      label: "Advanced Geofence & Presence Monitoring",
      desc: "Create custom geofences to receive instant alarms on vehicle entrance or exit. Automatically check passenger or cargo presence, and generate detailed, customized geofence reports.",
    },
    {
      key: "dashboard-live-video",
      icon: <Smartphone className="w-5 h-5" />,
      label: "Remote Diagnostics & Control",
      desc: "Run remote diagnostics, clear DTCs (fault codes), and activate remote engine cutoff—securely control your entire fleet from the cloud dashboard.",
    },
  ],

  personal: [
    {
      key: "mobile-live-map",
      icon: <MapPin className="w-5 h-5" />,
      label: "Always-On Vehicle Security",
      desc: "Instant location monitoring, vehicle status, and anti-theft alerts right in your app.",
    },
    {
      key: "mobile-remote-control",
      icon: <Lock className="w-5 h-5" />,
      label: "Secure Remote Immobilization",
      desc: "Remotely turn ignition on/off and lock/unlock doors for fast, reliable security (hardware dependent).",
    },
    {
      key: "mobile-geofence-alert",
      icon: <GitCommit className="w-5 h-5" />,
      label: "Safe Zone & Towing Alerts",
      desc: "Immediate push notifications about illegal towing, battery disconnects, or unauthorized movement outside geofences.",
    },
    {
      key: "mobile-phone-tracker",
      icon: <Smartphone className="w-5 h-5" />,
      label: "Mobile-as-a-Tracker (Mobotrack)",
      desc: "Convert any Android phone into a GPS device to track kids, elders, or field employees.",
    },
    {
      key: "mobile-report",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Customizable Trip & History Reports",
      desc: "Instant export of journey, event, and driving reports—fully personalized for household or personal use.",
    },
    {
      key: "mobile-performance",
      icon: <Database className="w-5 h-5" />,
      label: "High-Speed, Low-Data Design",
      desc: "Enjoy fastest response and minimal mobile data use, compatible with all recent iOS & Android versions.",
    },
    {
      key: "mobile-alerts-log",
      icon: <Heart className="w-5 h-5" />,
      label: "Full Event Log History",
      desc: "See a full timeline of speed, movement, and safety-related events for your car or family.",
    },
    {
      key: "mobile-live-map",
      icon: <Route className="w-5 h-5" />,
      label: "Easy Car Recovery",
      desc: "After switching off your car remotely, navigate there instantly with one-tap directions.",
    },
  ],
};

// ---- DEVICE MOCKUP FRAMES ----
const MockupFrame = ({ mode, children }) => {
  // Monitor for business, phone for personal
  if (mode === "business") {
    return (
      <div className="w-full max-w-2xl mx-auto h-auto bg-gray-900 border-[10px] border-gray-800 rounded-2xl shadow-2xl relative p-3 mb-5">
        <div
          className="relative w-full overflow-hidden rounded-md"
          style={{ paddingTop: "56.25%" }}
        >
          <div className="absolute inset-0">{children}</div>
        </div>
        <div className="h-4 w-1/3 mx-auto mt-3 bg-gray-700 rounded-sm"></div>
      </div>
    );
  } else {
    return (
      <div className="w-[340px] h-[620px] bg-black border-[14px] border-gray-900 rounded-[2rem] shadow-[0_16px_40px_0_rgba(0,0,0,0.25)] relative flex items-center justify-center mb-5 mx-auto">
        <div className="w-[calc(100%-6px)] h-[calc(100%-6px)] overflow-hidden rounded-[1.7rem] bg-gray-100 relative">
          {children}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-xl z-20"></div>
      </div>
    );
  }
};

// ---- MAIN COMPONENT ----
const MorphingPlatformShowcase = () => {
  const [activeMode, setActiveMode] = useState("business");
  const [activeIdx, setActiveIdx] = useState(0);
  const features = FEATURES[activeMode];
  const activeFeature = features[activeIdx];
  const imageData = IMAGE_DATA[activeFeature.key];

  // Auto-play carousel logic (disable if needed)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeMode, features.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div
            className={`inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-600/20 rounded-full px-4 py-2 text-sm font-medium text-indigo-600 mb-4`}
          >
            <Building className="w-4 h-4" />
            Total Visibility. Effortless Control.
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            FleetInfinity Adapts to Your Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade for fleets and secure, friendly for families. All
            the advanced automation you need, in one clear platform.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => {
              setActiveMode("business");
              setActiveIdx(0);
            }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeMode === "business"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-50"
            }`}
          >
            For Business
          </button>
          <button
            onClick={() => {
              setActiveMode("personal");
              setActiveIdx(0);
            }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeMode === "personal"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-50"
            }`}
          >
            For Personal
          </button>
        </div>

        {/* Horizontal Tab Bar */}
        <nav
          className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
          aria-label="Platform Capabilities Tabs"
        >
          <ul className="flex gap-2 min-w-[600px] sm:min-w-0 items-center justify-left pb-4">
            {features.map((feature, i) => (
              <li key={feature.label}>
                <button
                  onClick={() => setActiveIdx(i)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-all ${
                    i === activeIdx
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-indigo-50"
                  }`}
                  aria-current={i === activeIdx}
                >
                  {feature.icon}
                  {feature.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Device Mockup with Screenshot */}
        <MockupFrame mode={activeMode}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.key}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
            >
              <Image
                src={imageData.src}
                alt={activeFeature.label}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </MockupFrame>

        {/* Explanation below */}
        <motion.div
          key={activeFeature.label}
          className="max-w-2xl mx-auto mb-8 mt-3 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {activeFeature.label}
          </h3>
          <p className="text-gray-600 px-2">{activeFeature.desc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MorphingPlatformShowcase;
