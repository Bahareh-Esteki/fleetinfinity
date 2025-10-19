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
  GitCommit,
  Fuel,
  Route,
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
          "Complex route planning for fuel efficiency",
          "Real-time tracking with multi-level access for managers, shippers, and passengers",
          "Driver behavior and safety monitoring",
          "Cargo tracking with BLE pallet sensors",
          "Security and environmental control (temperature/humidity)",
          "Preventive maintenance planning",
          "Accurate fuel and cost management",
        ],
        capabilities: [
          {
            icon: <Route className="w-5 h-5" />,
            title: "Smart Route Optimization",
            description:
              "AI-powered route planning reduces mileage, saves fuel, and ensures on-time deliveries.",
            technical:
              "Dynamic rerouting with live traffic and SLA constraints",
          },
          {
            icon: <MapPin className="w-5 h-5" />,
            title: "Real-Time Multi-Access Tracking",
            description:
              "Individualized live tracking portals for fleet managers, shippers, and passengers.",
            technical: "Role-based access, live map view, ETA synchronization",
          },
          {
            icon: <GitCommit className="w-5 h-5" />,
            title: "BLE Cargo Identification",
            description:
              "Monitor which pallets are loaded and track them anywhere using BLE tags.",
            technical: "BLE sensor integration and pallet mapping dashboard",
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Cargo Security & Compliance",
            description:
              "Immediate alerts for route or geo-fence violations, door access, or unauthorized stops.",
            technical:
              "Encrypted sensor communication and configurable alert rules",
          },
          {
            icon: <Thermometer className="w-5 h-5" />,
            title: "Cold Chain Assurance",
            description:
              "Monitor temperature, humidity, and environmental readings in real-time.",
            technical:
              "Multi-sensor input, threshold-triggered alerts, compliance exports",
          },
          {
            icon: <Wrench className="w-5 h-5" />,
            title: "Predictive Maintenance",
            description:
              "Automate maintenance scheduling based on mileage, engine hours, or usage time.",
            technical:
              "Data-driven diagnostics integrated with vehicle CAN/OBD inputs",
          },
          {
            icon: <Fuel className="w-5 h-5" />,
            title: "Fuel & Cost Analytics",
            description:
              "Get real-time visibility of consumption, detect drain, and eliminate hidden costs.",
            technical:
              "CAN data analytics, fuel level sensors, trend-based forecasting",
          },
        ],
      },
      construction: {
        id: "construction",
        name: "Construction & Heavy Equipment",
        description:
          "Protect assets, monitor operations, and minimize downtime with rugged, job-site-ready telematics for heavy machinery and fleets.",
        challenges: [
          "Equipment theft and unauthorized usage",
          "Usage hours tracking and billing",
          "Predictive maintenance scheduling",
          "Multi-site visibility and control",
          "Loading/unloading time and location verification",
          "Presence check at assigned job sites",
          "Tire health and pressure monitoring",
          "Surrounding environment visibility for operators",
          "Idle or waste time and vehicle health status",
          "Risky driver behavior and safety issues",
        ],

        capabilities: [
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Asset Protection",
            description:
              "Geofence-based alerts and motion detection prevent theft or misuse of heavy equipment.",
            technical: "Customized recovery workflows, 24/7 asset monitoring",
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Usage Analytics",
            description:
              "Track engine hours, idle time, and productivity trends across machines.",
            technical:
              "Full CAN/J1939 data support for telematics-enabled equipment",
          },
          {
            icon: <Wrench className="w-5 h-5" />,
            title: "Maintenance Management",
            description:
              "Automate maintenance planning based on engine hours, operating days, or sensor-based alerts.",
            technical:
              "Service logs, part lifecycle tracking, and scheduled service reminders",
          },
          {
            icon: <MapPin className="w-5 h-5" />,
            title: "Site Visibility",
            description:
              "Monitor real-time asset positions, loading/unloading events, and movement between job sites.",
            technical:
              "Multi-site dashboards, BLE event tracking, and configurable access levels",
          },
          {
            icon: <GitCommit className="w-5 h-5" />,
            title: "BLE Load & Unload Monitoring",
            description:
              "BLE sensors detect equipment loading/unloading and enforce geofence-based workflows.",
            technical:
              "Geo-triggered BLE event detection and job-site attendance tracking",
          },
          {
            icon: <Thermometer className="w-5 h-5" />,
            title: "Tire & Environment Sensors",
            description:
              "Monitor tire pressure, temperature, and surrounding environmental factors for both driver and fleet management.",
            technical:
              "Wireless BLE tire sensors, air/temperature/pressure alerts for driver and operator dashboards",
          },
          {
            icon: <Fuel className="w-5 h-5" />,
            title: "Vehicle Health & Diagnostics",
            description:
              "Gain diagnostic insights from vehicle systems to prevent unexpected breakdowns.",
            technical:
              "CAN and OBD-II data analytics, alert rules for fault codes and engine parameters",
          },
          {
            icon: <Route className="w-5 h-5" />,
            title: "Driver Behavior & Safety",
            description:
              "Detect risky driving patterns and enforce safety standards across vehicles and operators.",
            technical:
              "Acceleration, braking, cornering analytics with AI-based behavior scoring",
          },
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
    }, 15000);
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
                <div className="md:hidden flex flex-col gap-3 mt-2">
                  {current.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 border border-gray-100"
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
                          <p className="text-xs text-gray-500 italic mt-1">
                            Technical: {cap.technical}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
