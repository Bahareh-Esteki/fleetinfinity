"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  Lock,
  Database,
  GitCommit,
  Globe,
  Layers,
  Bell,
  Wifi,
} from "lucide-react";

// ---- IMAGE DATA ----
const IMAGE_DATA = {
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
};

// ---- FEATURE DATA ----
// Max 5-6 features per mode as requested
const FEATURES = {
  web: [
    {
      key: "dashboard-analytics",
      icon: <BarChart3 className="w-4 h-4" />,
      label: "Operational Intelligence",
      desc: "Comprehensive analytics for fuel, speed, temperature, and weight — enabling predictive maintenance and measurable cost reduction across your entire fleet.",
      whitelabelNote: "Hosted on your custom domain (e.g. track.yourcompany.com)",
    },
    {
      key: "dashboard-driver-score",
      icon: <Users className="w-4 h-4" />,
      label: "Driver Coaching",
      desc: "AI-generated risk profiles, aggressive event detection, and custom coaching scenarios. Surface your top and highest-risk drivers at a glance.",
      whitelabelNote: "Branded with your company name in every report header",
    },
    {
      key: "dashboard-live-video",
      icon: <Camera className="w-4 h-4" />,
      label: "Live Video Monitoring",
      desc: "Camera integration for live streaming and on-demand footage replay. Immediate visual confirmation of incidents, with full audit trails.",
      whitelabelNote: "Video portal served under your branded subdomain",
    },
    {
      key: "dashboard-report-builder",
      icon: <Database className="w-4 h-4" />,
      label: "Advanced Report Builder",
      desc: "Dozens of ready-made templates or fully custom reports. Generate analytics across thousands of vehicles in seconds — export to Excel, PDF, or via API.",
      whitelabelNote: "Reports carry your logo and client's company identity",
    },
    {
      key: "dashboard-user-roles",
      icon: <Shield className="w-4 h-4" />,
      label: "Role-Based Access Control",
      desc: "Group vehicles and users, define project-level access, and granularly activate or deactivate modules per team member. Full multi-tenant architecture.",
      whitelabelNote: "Each of your clients sees only their own data and branding",
    },
    {
      key: "dashboard-maintenance",
      icon: <Zap className="w-4 h-4" />,
      label: "Proactive Maintenance",
      desc: "Automated reminders for insurance renewal, oil changes, and custom service intervals based on mileage, engine hours, or calendar date.",
      whitelabelNote: "Maintenance alerts sent from your email domain",
    },
  ],

  mobile: [
    {
      key: "mobile-live-map",
      icon: <MapPin className="w-4 h-4" />,
      label: "Live Vehicle Tracking",
      desc: "Real-time location, ignition status, and instant movement alerts — all delivered to your customers' phones within seconds of any event.",
      whitelabelNote: "Published under your developer account on App Store & Google Play",
    },
    {
      key: "mobile-remote-control",
      icon: <Lock className="w-4 h-4" />,
      label: "Remote Immobilization",
      desc: "Customers can remotely cut ignition, lock doors, or trigger alarms directly from the app — hardware dependent, zero latency commands.",
      whitelabelNote: "App icon, name, and splash screen fully match your brand",
    },
    {
      key: "mobile-geofence-alert",
      icon: <Bell className="w-4 h-4" />,
      label: "Geofence & Towing Alerts",
      desc: "Instant push notifications for illegal towing, battery disconnection, or movement outside defined safe zones. Sub-second alert delivery.",
      whitelabelNote: "Push notifications sent from your branded app identity",
    },
    {
      key: "mobile-phone-tracker",
      icon: <Smartphone className="w-4 h-4" />,
      label: "Phone-as-Tracker (Mobotrack)",
      desc: "Transform any Android device into a GPS tracker — ideal for field teams, delivery riders, or personal use without dedicated hardware.",
      whitelabelNote: "Feature can be enabled or disabled per your product tier",
    },
    {
      key: "mobile-alerts-log",
      icon: <Wifi className="w-4 h-4" />,
      label: "High-Speed, Low-Data",
      desc: "Engineered for maximum responsiveness on minimal mobile data. Compatible with all iOS and Android versions from the last 5 years.",
      whitelabelNote: "One codebase, your brand — zero development overhead for you",
    },
  ],
};

// ---- DEVICE MOCKUP FRAMES ----
const MonitorMockup = ({ children }) => (
  <div className="w-full max-w-2xl mx-auto">
    {/* Screen */}
    <div className="relative bg-gray-900 rounded-2xl p-2.5 shadow-2xl border border-gray-700/60">
      {/* Top bar dots */}
      <div className="flex items-center gap-1.5 mb-2 px-1">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 bg-gray-700/60 rounded-sm h-4 flex items-center px-2">
          <span className="text-gray-400 text-[9px] font-mono">track.yourcompany.com</span>
        </div>
      </div>
      {/* Screen content */}
      <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
    {/* Stand */}
    <div className="flex flex-col items-center">
      <div className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-b-sm" />
      <div className="w-36 h-2 bg-gray-200 dark:bg-gray-600 rounded-sm" />
    </div>
  </div>
);

const PhoneMockup = ({ children }) => (
  <div className="mx-auto relative" style={{ width: 230, height: 460 }}>
    {/* Outer shell */}
    <div
      className="absolute inset-0 rounded-[2.4rem] border-[10px] border-gray-800 shadow-2xl bg-black"
      style={{ boxShadow: "0 24px 60px 0 rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)" }}
    />
    {/* Screen */}
    <div className="absolute inset-[10px] rounded-[1.8rem] overflow-hidden bg-gray-100">
      {children}
    </div>
    {/* Notch */}
    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-800 rounded-b-xl z-10" />
    {/* Side buttons */}
    <div className="absolute left-[-14px] top-20 w-1.5 h-8 bg-gray-700 rounded-l-sm" />
    <div className="absolute left-[-14px] top-32 w-1.5 h-6 bg-gray-700 rounded-l-sm" />
    <div className="absolute right-[-14px] top-24 w-1.5 h-10 bg-gray-700 rounded-r-sm" />
  </div>
);

// ---- WHITELABEL BADGE ----
const WhitelabelBadge = ({ text }) => (
  <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium">
    <Layers className="w-3 h-3 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

// ---- PROGRESS BAR ----
const AutoplayBar = ({ duration, isPlaying }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!isPlaying) { setWidth(0); return; }
    setWidth(0);
    const start = performance.now();
    let raf;
    const step = (now) => {
      const pct = Math.min(((now - start) / duration) * 100, 100);
      setWidth(pct);
      if (pct < 100) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying, duration]);

  return (
    <div className="h-0.5 w-full bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-400 rounded-full transition-none"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

// ---- MAIN COMPONENT ----
const MorphingPlatformShowcase = () => {
  const [activeMode, setActiveMode] = useState("web");
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const AUTOPLAY_DURATION = 8000;

  const features = FEATURES[activeMode];
  const activeFeature = features[activeIdx];
  const imageData = IMAGE_DATA[activeFeature.key];

  const next = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % features.length);
  }, [features.length]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(next, AUTOPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [activeIdx, activeMode, isPlaying, next]);

  // Reset on mode change
  const switchMode = (mode) => {
    setActiveMode(mode);
    setActiveIdx(0);
    setIsPlaying(true);
  };

  const handleTabClick = (i) => {
    setActiveIdx(i);
    setIsPlaying(false); // pause autoplay on manual interaction
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* ── Section Header ── */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-600/8 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-600 mb-5">
            <Globe className="w-4 h-4" />
            White-label Ready · Your Brand. Your Domain.
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            One Platform.{" "}
            <span className="text-indigo-600">Every Device.</span>{" "}
            Your Brand.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Deliver a seamless experience to your customers — from powerful
            web dashboards for fleet managers to fast native mobile apps for
            drivers and owners. Fully white-labeled with your logo, colors,
            and domain.
          </p>
        </div>

        {/* ── Mode Toggle ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
            <button
              onClick={() => switchMode("web")}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeMode === "web"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Monitor className="w-4 h-4" />
              Web Dashboard
            </button>
            <button
              onClick={() => switchMode("mobile")}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeMode === "mobile"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile Apps
            </button>
          </div>
        </div>

        {/* ── Feature Tabs ── */}
        <nav aria-label="Platform feature tabs" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-2">
            {features.map((feature, i) => (
              <li key={feature.label}>
                <button
                  onClick={() => handleTabClick(i)}
                  aria-current={i === activeIdx ? "true" : undefined}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    i === activeIdx
                      ? activeMode === "web"
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
                  }`}
                >
                  {feature.icon}
                  {feature.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Device Mockup ── */}
        <div className="flex justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeMode}-${activeFeature.key}-${activeIdx}`}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full"
            >
              {activeMode === "web" ? (
                <MonitorMockup>
                  <Image
                    src={imageData.src}
                    alt={activeFeature.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </MonitorMockup>
              ) : (
                <PhoneMockup>
                  <Image
                    src={imageData.src}
                    alt={activeFeature.label}
                    fill
                    className="object-cover"
                    sizes="230px"
                    priority
                  />
                </PhoneMockup>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Feature Description ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="max-w-xl mx-auto text-center mb-3"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {activeFeature.label}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed px-2">
              {activeFeature.desc}
            </p>
            <WhitelabelBadge text={activeFeature.whitelabelNote} />
          </motion.div>
        </AnimatePresence>

        {/* ── Autoplay progress & controls ── */}
        <div className="max-w-xl mx-auto mt-6">
          <AutoplayBar duration={AUTOPLAY_DURATION} isPlaying={isPlaying} key={`${activeMode}-${activeIdx}-${isPlaying}`} />
          <div className="flex justify-center mt-4 gap-1.5">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                aria-label={`Go to feature ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === activeIdx
                    ? activeMode === "web"
                      ? "w-5 h-1.5 bg-indigo-500"
                      : "w-5 h-1.5 bg-emerald-500"
                    : "w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
            <button
              onClick={() => setIsPlaying((v) => !v)}
              className="ml-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <rect x="2" y="2" width="3.5" height="10" rx="1" />
                  <rect x="8.5" y="2" width="3.5" height="10" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M3 2.5l9 4.5-9 4.5V2.5z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Bottom Whitelabel CTA Strip ── */}
        <div className="mt-14 rounded-2xl bg-gray-50 border border-gray-100 px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-0.5">
              Both platforms — fully white-labeled.
            </p>
            <p className="text-sm text-gray-500">
              Your partners get a web dashboard on their domain and native apps
              under their brand on both stores.
            </p>
          </div>
          <a
            href="/demo"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Request a Demo
            <Route className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MorphingPlatformShowcase;