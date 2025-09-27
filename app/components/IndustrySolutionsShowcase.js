// app/components/IndustryCapabilitiesShowcase.js
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Building,
  Plane,
  Ship,
  Tractor,
  Users,
  Zap,
  Shield,
  BarChart3,
  Clock,
  MapPin,
  Settings,
  ArrowRight,
  CheckCircle,
  Database,
  Target,
  Camera,
  Wrench,
  Thermometer,
  Globe,
  Lock,
  Code,
} from "lucide-react";

// Background config (place files in public/images/backgrounds/)
const industryBackgrounds = {
  logistics: {
    src: "/images/backgrounds/logistics_hub_bg.png",
    overlay: "from-slate-900/70 via-slate-900/45 to-slate-900/25",
  },
  construction: {
    src: "/images/backgrounds/construction_bg.png",
    overlay: "from-amber-950/65 via-amber-950/40 to-amber-950/20",
  },
  healthcare: {
    src: "/images/backgrounds/healthcare_bg.png",
    overlay: "from-rose-950/65 via-rose-950/40 to-rose-950/20",
  },
  agriculture: {
    src: "/images/backgrounds/agriculture_bg.png",
    overlay: "from-emerald-950/65 via-emerald-950/40 to-emerald-950/20",
  },
  transportation: {
    src: "/images/backgrounds/transport_bg.png",
    overlay: "from-violet-950/65 via-violet-950/40 to-violet-950/20",
  },
  aviation: {
    src: "/images/backgrounds/aviation_bg.png",
    overlay: "from-indigo-950/65 via-indigo-950/40 to-indigo-950/20",
  },
};

// Icon helper for tabs
const IndustryIcon = ({ id }) => {
  const base = "w-6 h-6";
  switch (id) {
    case "logistics":
      return <Truck className={base} />;
    case "construction":
      return <Building className={base} />;
    case "healthcare":
      return <Thermometer className={base} />;
    case "agriculture":
      return <Tractor className={base} />;
    case "transportation":
      return <Users className={base} />;
    case "aviation":
      return <Plane className={base} />;
    default:
      return <Target className={base} />;
  }
};

const IndustryCapabilitiesShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState("logistics");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showMoreMobileChallenges, setShowMoreMobileChallenges] =
    useState(false);
  const [showMoreMobileFeatures, setShowMoreMobileFeatures] = useState(false);
  // Industry content (no testimonials, purely capabilities + readiness)
  const industries = useMemo(
    () => ({
      logistics: {
        id: "logistics",
        name: "Logistics & Transportation",
        description:
          "Optimize delivery routes, reduce fuel costs, and ensure on-time deliveries with comprehensive fleet visibility.",
        challenges: [
          "Route optimization for fuel efficiency",
          "Real-time delivery tracking and ETAs",
          "Driver behavior monitoring and safety",
          "Cargo security and temperature control",
          "Fleet maintenance scheduling",
          "Fuel consumption management",
        ],
        capabilities: [
          {
            icon: <MapPin className="w-5 h-5" />,
            title: "Advanced Route Planning",
            description:
              "Multi-stop optimization with traffic-aware dynamic re-routing",
            technical: "Traffic integration, configurable SLAs",
          },
          {
            icon: <Clock className="w-5 h-5" />,
            title: "Live Tracking & ETAs",
            description:
              "Precise location updates with automated ETA notifications",
            technical: "GPS accuracy ±3m, 30s updates",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Cargo Security",
            description:
              "Geo-fence violations, door sensors, and theft recovery mode",
            technical: "Real-time alerting, escalation rules",
          },
          {
            icon: <Thermometer className="w-5 h-5" />,
            title: "Cold Chain Monitoring",
            description:
              "Continuous temperature logging and compliance exports",
            technical: "Multi-sensor, configurable thresholds",
          },
        ],
        readyFeatures: [
          "151+ verified devices supported",
          "Real-time GPS tracking with 30s updates",
          "Driver and dispatch mobile apps",
          "Rich analytics and reporting suite",
          "REST API and webhooks integration",
          "Multi-language UI (including Arabic/English)",
        ],
      },
      construction: {
        id: "construction",
        name: "Construction & Heavy Equipment",
        description:
          "Protect assets, track usage, and reduce downtime with rugged, job-site-ready telematics.",
        challenges: [
          "Equipment theft and unauthorized usage",
          "Usage hours tracking and billing",
          "Predictive maintenance scheduling",
          "Multi-site visibility and control",
        ],
        capabilities: [
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Asset Protection",
            description:
              "Motion/tilt detection, geofencing, recovery workflows",
            technical: "Custom alerts, incident playbooks",
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Usage Analytics",
            description: "Engine hours, idle time, and productivity insights",
            technical: "CAN/J1939 support where available",
          },
          {
            icon: <Wrench className="w-5 h-5" />,
            title: "Maintenance Management",
            description: "Automated maintenance based on hours or calendar",
            technical: "Service logs, reminders, parts tracking",
          },
          {
            icon: <MapPin className="w-5 h-5" />,
            title: "Site Visibility",
            description: "Asset location and movement history across job sites",
            technical: "Multi-site dashboards, access control",
          },
        ],
        readyFeatures: [
          "Rugged devices (-40°C to +85°C)",
          "CAN bus and sensor integrations",
          "Multi-site role-based access",
          "Work-hour and idle-time reporting",
          "Offline caching and sync",
        ],
      },
      healthcare: {
        id: "healthcare",
        name: "Healthcare & Emergency Services",
        description:
          "Support emergency response, medical cold chain, and safe patient transport with reliable, compliant tracking.",
        challenges: [
          "Faster emergency dispatch and routing",
          "Cold chain integrity for vaccines and meds",
          "Patient transport safety and comfort",
          "Audit-ready compliance reporting",
        ],
        capabilities: [
          {
            icon: <Zap className="w-5 h-5" />,
            title: "Emergency Response",
            description:
              "Priority routing, dispatch coordination, ETA accuracy",
            technical: "Fast route recalculation, SLA targeting",
          },
          {
            icon: <Thermometer className="w-5 h-5" />,
            title: "Medical Cold Chain",
            description: "Continuous temperature monitoring and alerts",
            technical: "Multi-sensor logging, exportable audit trails",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Safety Monitoring",
            description: "Behavior analysis for safe patient transport",
            technical: "Event detection, safety scoring",
          },
          {
            icon: <Clock className="w-5 h-5" />,
            title: "Secure Sharing",
            description: "Privacy-controlled live location sharing",
            technical: "Time-limited links, access auditing",
          },
        ],
        readyFeatures: [
          "Compliance-ready data handling",
          "Sensor integrations for medical use",
          "High-availability infrastructure",
          "Role-based access and audit logs",
        ],
      },
      agriculture: {
        id: "agriculture",
        name: "Agriculture & Farming",
        description:
          "Track equipment across vast areas, optimize fuel usage, and protect assets in remote locations.",
        challenges: [
          "Large-area coverage and connectivity",
          "Harvest progress and field coverage",
          "Fuel usage monitoring and control",
          "Remote asset security",
        ],
        capabilities: [
          {
            icon: <MapPin className="w-5 h-5" />,
            title: "Field Mapping",
            description: "Coverage trails and task verification",
            technical: "Trail heatmaps, area computation",
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Harvest Analytics",
            description: "Equipment productivity and timing insights",
            technical: "Shift analytics, utilization KPIs",
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: "Fuel Management",
            description: "Consumption tracking and alerting",
            technical: "Fuel sensors, anomaly detection",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Remote Security",
            description: "Battery-powered trackers and alerts",
            technical: "Long-life devices, satcom-ready options",
          },
        ],
        readyFeatures: [
          "Long-life battery trackers (5–7 years)",
          "Weather-resistant hardware options",
          "Offline logging and syncing",
          "Multi-farm and contractor modes",
        ],
      },
      transportation: {
        id: "transportation",
        name: "Public Transportation",
        description:
          "Improve passenger experience, safety, and route reliability with real-time insights and automation.",
        challenges: [
          "Accurate real-time arrivals for passengers",
          "Driver safety and incident reduction",
          "Dynamic routing and headway management",
          "Predictive maintenance and uptime",
        ],
        capabilities: [
          {
            icon: <Clock className="w-5 h-5" />,
            title: "Real-Time Arrivals",
            description: "Accurate ETAs for stops and stations",
            technical: "ML ETA models, public API",
          },
          {
            icon: <Camera className="w-5 h-5" />,
            title: "Safety Systems",
            description: "Driver monitoring and incident tagging",
            technical: "Dashcam integrations, event sync",
          },
          {
            icon: <MapPin className="w-5 h-5" />,
            title: "Route Optimization",
            description: "Dynamic routing based on traffic and load",
            technical: "Headway control, load-aware routing",
          },
          {
            icon: <Wrench className="w-5 h-5" />,
            title: "Predictive Maintenance",
            description: "Diagnostics and service scheduling",
            technical: "CAN/OBD data, parts tracking",
          },
        ],
        readyFeatures: [
          "Public APIs for rider apps",
          "Multi-route, multi-agency dashboards",
          "Driver performance analytics",
          "Service disruption workflows",
        ],
      },
      aviation: {
        id: "aviation",
        name: "Aviation & Maritime",
        description:
          "Specialized tracking for ground support equipment and vessels with global connectivity and compliance.",
        challenges: [
          "GSE coordination and turnaround",
          "Global vessel visibility at sea",
          "Cargo handling optimization",
          "International compliance and audits",
        ],
        capabilities: [
          {
            icon: <Plane className="w-5 h-5" />,
            title: "Airport Operations",
            description: "Track tugs, loaders, and support vehicles",
            technical: "Turnaround analytics, allocation tools",
          },
          {
            icon: <Ship className="w-5 h-5" />,
            title: "Maritime Tracking",
            description: "Satellite coverage for international waters",
            technical: "Iridium-ready devices, global timezones",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Compliance Support",
            description: "Automated reports and audit trails",
            technical: "Retention policies, role-based access",
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Operations Analytics",
            description: "Cargo handling and utilization insights",
            technical: "Cycle analytics, KPI dashboards",
          },
        ],
        readyFeatures: [
          "Satellite communication support",
          "Maritime-grade hardware options",
          "Compliance-ready reporting",
          "Global timezone and currency handling",
        ],
      },
    }),
    []
  );

  useEffect(() => {
    if (!autoRotate) return;
    const keys = Object.keys(industries);
    let i = keys.indexOf(activeIndustry);
    const t = setInterval(() => {
      i = (i + 1) % keys.length;
      setActiveIndustry(keys[i]);
    }, 6000);
    return () => clearInterval(t);
  }, [activeIndustry, autoRotate, industries]);

  const keys = Object.keys(industries);
  const current = industries[activeIndustry];
  const bg = industryBackgrounds[activeIndustry];
  // Thresholds for how many lines to show before "Show More"
  const previewChallenges = 2;
  const previewFeatures = 2;

  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative w-full min-h-[70vh]">
        <Image
          src={bg?.src || "/images/backgrounds/logistics_hub_bg.png"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            bg?.overlay || "from-slate-900/65 to-slate-900/25"
          }`}
        />
      </div>

      {/* Foreground content */}
      <div className="container mx-auto px-4 -mt-[55vh] pb-10 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-4">
            <Target className="w-4 h-4" />
            Industry-Ready Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Solutions Tailored for{" "}
            <span className="text-emerald-300">Your Industry</span>
          </h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed">
            Built to meet the specific demands of modern operations from day
            one.
          </p>
        </motion.div>

        {/* TABS */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-7"
          initial={{ opacity: 0, y: 9 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.2 }}
        >
          {keys.map((k) => {
            const isActive = k === activeIndustry;
            return (
              <motion.button
                key={k}
                onClick={() => {
                  setActiveIndustry(k);
                  setShowMoreMobileChallenges(false);
                  setShowMoreMobileFeatures(false);
                  setAutoRotate(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-white/90 text-gray-700 border border-white/70 hover:bg-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setAutoRotate(false)}
                onMouseLeave={() => setAutoRotate(true)}
              >
                <IndustryIcon id={k} />
                <span className="hidden sm:inline">{industries[k].name}</span>
                <span className="sm:hidden">
                  {industries[k].name.split(" ")[0]}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* MAIN PANEL (Responsive) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl p-4 md:p-10 bg-white/90 backdrop-blur shadow-2xl border border-white"
          >
            {/* Intro */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-2xl mb-2">
                <IndustryIcon id={activeIndustry} />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                {current.name}
              </h3>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                {current.description}
              </p>
            </div>

            {/* GRID: Desktop side-by-side, Mobile stacked/summarized */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Challenges (Summary/Expand) */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-600" />
                  Industry Challenges We Address
                </h4>
                {/* PC: Full list, Mobile: Collapsed toggle */}
                <div className="hidden md:block space-y-2 mb-6">
                  {current.challenges.map((c, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{c}</span>
                    </div>
                  ))}
                </div>
                <div className="block md:hidden space-y-2 mb-2">
                  {current.challenges
                    .slice(0, previewChallenges)
                    .map((c, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{c}</span>
                      </div>
                    ))}
                  {current.challenges.length > previewChallenges &&
                    !showMoreMobileChallenges && (
                      <button
                        onClick={() => setShowMoreMobileChallenges(true)}
                        className="px-2 py-1 text-emerald-600 text-sm font-medium underline"
                      >
                        Show {current.challenges.length - previewChallenges}{" "}
                        more...
                      </button>
                    )}
                  {showMoreMobileChallenges &&
                    current.challenges
                      .slice(previewChallenges)
                      .map((c, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{c}</span>
                        </div>
                      ))}
                </div>

                {/* Ready Features */}
                {/* Desktop: grid; Mobile: summary/expand */}
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mt-3">
                  <h5 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Platform Ready Features
                  </h5>
                  <div className="hidden md:grid md:grid-cols-2 gap-2">
                    {current.readyFeatures.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span className="text-emerald-900/90 text-base">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Mobile: Show two, toggle rest */}
                  <div className="md:hidden space-y-1">
                    {current.readyFeatures
                      .slice(0, previewFeatures)
                      .map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                          <span className="text-emerald-900/90 text-sm">
                            {f}
                          </span>
                        </div>
                      ))}
                    {current.readyFeatures.length > previewFeatures &&
                      !showMoreMobileFeatures && (
                        <button
                          onClick={() => setShowMoreMobileFeatures(true)}
                          className="px-2 py-1 text-emerald-600 text-sm font-medium underline"
                        >
                          Show {current.readyFeatures.length - previewFeatures}{" "}
                          more...
                        </button>
                      )}
                    {showMoreMobileFeatures &&
                      current.readyFeatures
                        .slice(previewFeatures)
                        .map((f, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                            <span className="text-emerald-900/90 text-sm">
                              {f}
                            </span>
                          </div>
                        ))}
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  Our Platform Capabilities
                </h4>
                {/* Desktop: vertical list; Mobile: horizontal swipe */}
                <div className="hidden md:block space-y-4">
                  {current.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 border border-gray-100 hover:border-emerald-200 transition-all duration-200 cursor-default"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-700">{cap.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">
                            {cap.title}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1">
                            {cap.description}
                          </p>
                          <p className="text-xs text-gray-500 italic mt-2">
                            Technical: {cap.technical}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile: carousel */}
                <div className="md:hidden overflow-x-auto whitespace-nowrap -mx-2 px-2">
                  {current.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="inline-block align-top w-[18rem] mr-3 bg-white rounded-xl p-4 border border-gray-100"
                      style={{ minWidth: "16rem", maxWidth: "20rem" }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-700">{cap.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">
                            {cap.title}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1">
                            {cap.description}
                          </p>
                          <p className="text-[11px] text-gray-500 italic mt-1">
                            Technical: {cap.technical}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom highlights: PC grid, mobile summary */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
                <Database className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">151+ Devices</div>
                <div className="text-xs text-gray-600">
                  Verified compatibility
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
                <Globe className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Global Ready</div>
                <div className="text-xs text-gray-600">
                  Multi-region deployment
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
                <Lock className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">
                  Enterprise Security
                </div>
                <div className="text-xs text-gray-600">Encryption & RBAC</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 text-center">
                <Code className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">API First</div>
                <div className="text-xs text-gray-600">REST + webhooks</div>
              </div>
            </div>
            {/* Mobile: compact row */}
            <div className="md:hidden flex justify-between mt-6 gap-2 text-xs">
              <div className="flex flex-col items-center flex-1 py-4 bg-white border border-gray-100 rounded-lg mr-1">
                <Database className="w-6 h-6 text-emerald-600 mb-1" />
                151+ Devices
              </div>
              <div className="flex flex-col items-center flex-1 py-4 bg-white border border-gray-100 rounded-lg mx-1">
                <Globe className="w-6 h-6 text-emerald-600 mb-1" />
                Global Ready
              </div>
              <div className="flex flex-col items-center flex-1 py-4 bg-white border border-gray-100 rounded-lg mx-1">
                <Lock className="w-6 h-6 text-emerald-600 mb-1" />
                Security
              </div>
              <div className="flex flex-col items-center flex-1 py-4 bg-white border border-gray-100 rounded-lg ml-1">
                <Code className="w-6 h-6 text-emerald-600 mb-1" />
                API-First
              </div>
            </div>

            {/* CTAs (same style both views, stacked on mobile) */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md flex items-center gap-3 group transition-all duration-200"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Platform Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-gray-200 hover:border-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-xl flex items-center gap-3 group transition-all duration-200 bg-white"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Technical Specs
                <Database className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustryCapabilitiesShowcase;
