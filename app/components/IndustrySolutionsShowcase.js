// app/components/IndustryCapabilitiesShowcase.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck, Building, Plane, Ship, Tractor, Users, Zap, Shield,
  BarChart3, Clock, MapPin, Settings, ArrowRight, Database,
  Camera, Wrench, Thermometer, Lock, GitCommit, Fuel, Route,
  UserCheck, ChevronRight,
} from "lucide-react";

// ─── Brand tokens ────────────────────────────────────────────────
const B = {
  darkBlue:  "#003366",
  green:     "#58C15D",
  greenDark: "#4aa54e",
};

// ─── Background images ───────────────────────────────────────────
const BG = {
  logistics:      "/images/backgrounds/logistics_hub_bg.png",
  construction:   "/images/backgrounds/construction_bg.png",
  healthcare:     "/images/backgrounds/healthcare_bg.png",
  agriculture:    "/images/backgrounds/agriculture_bg.png",
  transportation: "/images/backgrounds/transport_bg.png",
  aviation:       "/images/backgrounds/aviation_bg.png",
};

// ─── Industry definitions ────────────────────────────────────────
const INDUSTRIES = {
  logistics: {
    label: "Logistics",
    fullName: "Logistics & Transportation",
    Icon: Truck,
    accentColor: "#38bdf8",   // sky
    tagline: "From warehouse to last mile — full visibility, zero blind spots.",
    description:
      "Optimize routes, reduce fuel spend, and deliver on time every time with end-to-end fleet intelligence for freight and distribution operations.",
    challenges: [
      "Fuel-efficient route planning across dynamic networks",
      "Multi-level live tracking for managers, shippers & passengers",
      "Driver behaviour monitoring and safety enforcement",
      "BLE pallet / cargo identification in transit",
      "Cold-chain temperature & humidity compliance",
      "Preventive maintenance to eliminate unplanned downtime",
      "Accurate fuel consumption and hidden-cost reporting",
    ],
    capabilities: [
      { Icon: Route,       title: "Smart Route Optimisation",      desc: "AI-driven routing reduces mileage, saves fuel, and guarantees SLA-compliant delivery windows." },
      { Icon: MapPin,      title: "Multi-Access Live Tracking",     desc: "Role-gated portals give managers, shippers and passengers exactly the visibility they need." },
      { Icon: GitCommit,   title: "BLE Cargo Identification",       desc: "Track loaded pallets anywhere with BLE tags — know what's on board and where it is at all times." },
      { Icon: Thermometer, title: "Cold-Chain Assurance",           desc: "Continuous sensor logging with threshold alerts and one-click compliance exports." },
      { Icon: Fuel,        title: "Fuel & Cost Analytics",          desc: "Real-time consumption data, drain detection, and trend-based cost forecasting." },
      { Icon: Wrench,      title: "Predictive Maintenance",         desc: "Automate service intervals from CAN/OBD-II data — fix issues before they stop your trucks." },
    ],
  },

  construction: {
    label: "Construction",
    fullName: "Construction & Heavy Equipment",
    Icon: Building,
    accentColor: "#fb923c",   // orange
    tagline: "Every machine accounted for. Every hour justified.",
    description:
      "Protect high-value assets, track engine hours for billing, and keep heavy equipment healthy across multiple job sites — day and night.",
    challenges: [
      "Equipment theft and unauthorised usage across remote sites",
      "Engine-hour tracking for accurate billing and payroll",
      "Multi-site visibility and asset allocation",
      "Loading / unloading verification at job sites",
      "Tire pressure and temperature health monitoring",
      "Idle time reduction and operator accountability",
      "Predictive maintenance for heavy machinery",
    ],
    capabilities: [
      { Icon: Shield,      title: "Asset Protection",              desc: "Geofence alerts and motion detection prevent theft or misuse of any machine, 24 / 7." },
      { Icon: BarChart3,   title: "Usage & Hour Analytics",        desc: "Full CAN / J1939 data — engine hours, idle periods, and productivity trends per machine." },
      { Icon: Wrench,      title: "Maintenance Management",        desc: "Service reminders based on hours, days, or sensor thresholds. Full parts-lifecycle logs." },
      { Icon: GitCommit,   title: "BLE Load / Unload Detection",   desc: "Geo-triggered BLE events confirm equipment loading and job-site attendance automatically." },
      { Icon: Thermometer, title: "Tire & Environment Sensors",    desc: "Wireless BLE tire sensors plus air / temperature alerts for operators and fleet managers." },
      { Icon: Route,       title: "Driver Safety Scoring",         desc: "Acceleration, braking, and cornering analytics with AI behaviour scoring and coaching." },
    ],
  },

  healthcare: {
    label: "Healthcare",
    fullName: "Healthcare & Emergency Services",
    Icon: Thermometer,
    accentColor: "#f472b6",   // pink
    tagline: "Every second counts. Every shipment matters.",
    description:
      "Support rapid emergency dispatch, protect medical cold chains, and deliver safe patient transport with compliant, audit-ready telematics.",
    challenges: [
      "Fastest possible emergency routing and dispatch accuracy",
      "Cold-chain integrity for vaccines, blood, and medications",
      "Safe, comfortable patient transport monitoring",
      "Audit-ready compliance reporting for regulators",
      "Privacy-controlled location sharing with families",
    ],
    capabilities: [
      { Icon: Zap,         title: "Emergency Response Routing",    desc: "Priority routing, live dispatch coordination, and SLA-targeting ETA accuracy." },
      { Icon: Thermometer, title: "Medical Cold-Chain",            desc: "Continuous temperature logging with alert thresholds and exportable audit trails." },
      { Icon: Shield,      title: "Patient Transport Safety",      desc: "Behaviour analysis ensures smooth, safe rides — event detection flags every incident." },
      { Icon: Clock,       title: "Privacy-Safe Location Sharing", desc: "Time-limited share links with full access auditing for family updates." },
      { Icon: Database,    title: "Compliance Reporting",          desc: "Automated logs and data-retention policies meet international healthcare transport standards." },
    ],
  },

  agriculture: {
    label: "Agriculture",
    fullName: "Agriculture & Farming",
    Icon: Tractor,
    accentColor: "#86efac",   // light-green
    tagline: "Cover more ground. Waste less of everything.",
    description:
      "Track machinery across vast farmlands, verify field coverage, control fuel, and ensure only authorised operators start your equipment.",
    challenges: [
      "Wide-area coverage with limited connectivity",
      "Harvest progress and field-coverage verification",
      "Fuel consumption monitoring and wastage prevention",
      "Remote equipment security in isolated locations",
      "Operator attendance, ID, and shift tracking",
      "Preventing off-site equipment misuse",
      "Maintenance scheduling from engine-hour data",
    ],
    capabilities: [
      { Icon: MapPin,      title: "Field Mapping & Coverage",      desc: "Trail heatmaps and area-computation show exactly which blocks have been worked." },
      { Icon: BarChart3,   title: "Harvest Analytics",             desc: "Shift analytics, utilisation KPIs, and operator assignment records per equipment unit." },
      { Icon: Fuel,        title: "Fuel Management",               desc: "Real-time consumption sensors with anomaly detection and trip-based fuel audits." },
      { Icon: Shield,      title: "Remote Security",               desc: "Battery-powered trackers, RFID / iButton access control, and geofence ignition blocking." },
      { Icon: UserCheck,   title: "Operator Authorisation",        desc: "RFID / iButton authenticated start — time logs and access restrictions enforced automatically." },
      { Icon: Wrench,      title: "Predictive Maintenance",        desc: "CAN / OBD-II service reminders based on engine hours and sensor thresholds." },
    ],
  },

  transportation: {
    label: "Public Transit",
    fullName: "Public Transportation",
    Icon: Users,
    accentColor: "#a78bfa",   // violet
    tagline: "Reliable service. Safe passengers. Every route.",
    description:
      "Improve on-time performance, protect passengers, and reduce downtime with smart telematics designed for bus, shuttle, and corporate-transit operations.",
    challenges: [
      "Accurate real-time arrival data for passengers",
      "Driver safety and incident reduction",
      "Dynamic routing and headway optimisation",
      "Predictive maintenance to maximise uptime",
      "Passenger attendance verification for corporate shuttles",
      "Vehicle health and diagnostics monitoring",
    ],
    capabilities: [
      { Icon: Clock,       title: "Real-Time Arrivals",            desc: "ML-based ETAs per stop — integrated with GTFS / SIRI and passenger-facing apps." },
      { Icon: Camera,      title: "AI Safety Monitoring",          desc: "Dashcam AI detects incidents in real time; multi-camera recording with automatic event tagging." },
      { Icon: UserCheck,   title: "Passenger Attendance",          desc: "RFID / NFC card readers verify boarding for corporate shuttles and school transit services." },
      { Icon: MapPin,      title: "Dynamic Route Optimisation",    desc: "Live traffic and passenger-load adjustments keep headways consistent and service reliable." },
      { Icon: Wrench,      title: "Predictive Maintenance",        desc: "CAN / OBD-II alerts automate service scheduling before faults cause delays." },
      { Icon: Shield,      title: "Vehicle Health & Diagnostics",  desc: "Continuous engine, fuel, and electrical monitoring with fault-code alerting." },
    ],
  },

  aviation: {
    label: "Aviation & Maritime",
    fullName: "Aviation & Maritime",
    Icon: Plane,
    accentColor: "#67e8f9",   // cyan
    tagline: "Global coverage. Zero cargo blind spots.",
    description:
      "Airside ground-fleet management, global vessel tracking, smart cargo security, and compliance-ready analytics — all in one platform.",
    challenges: [
      "Global vessel visibility across international waters",
      "End-to-end cargo integrity and chain of custody",
      "Airside ground-support fleet coordination",
      "Cross-border compliance and audit documentation",
      "Tamper detection for high-value containerised cargo",
    ],
    capabilities: [
      { Icon: Plane,       title: "Airport Ground Operations",     desc: "Real-time tracking of tugs, loaders, and GSE — turnaround analytics and operator assignment." },
      { Icon: Ship,        title: "Maritime Vessel Tracking",      desc: "Iridium + Inmarsat + AIS hybrid tracking for continuous global maritime coverage." },
      { Icon: Lock,        title: "Smart Cargo Locks",             desc: "IoT electronic seals with GPS, remote commands, and tamper alerts for every container." },
      { Icon: Shield,      title: "Compliance & Audit Support",    desc: "Automated retention policies, international compliance reports, and role-gated data access." },
      { Icon: BarChart3,   title: "Operations Analytics",          desc: "Cargo-handling KPIs, satellite-linked efficiency metrics, and sea-vs-ground dwell analysis." },
    ],
  },
};

const KEYS = Object.keys(INDUSTRIES);

// ─── Capability card ─────────────────────────────────────────────
const CapCard = ({ item, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.28, delay: index * 0.055 }}
    className="group flex gap-3 p-4 rounded-xl border transition-all duration-200 cursor-default"
    style={{
      background: "rgba(255,255,255,0.035)",
      borderColor: "rgba(255,255,255,0.08)",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = accent + "55"; e.currentTarget.style.background = accent + "0d"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.035)"; }}
  >
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200"
      style={{ background: accent + "22" }}
    >
      <item.Icon size={17} style={{ color: accent }} />
    </div>
    <div>
      <p className="text-sm font-semibold text-white leading-snug mb-0.5">{item.title}</p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
    </div>
  </motion.div>
);

// ─── Challenge pill ───────────────────────────────────────────────
const ChallengePill = ({ text, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.22, delay: index * 0.045 }}
    className="flex items-start gap-2.5 py-2 border-b last:border-b-0"
    style={{ borderColor: "rgba(255,255,255,0.07)" }}
  >
    <ChevronRight size={13} className="flex-shrink-0 mt-0.5" style={{ color: B.green }} />
    <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.72)" }}>{text}</span>
  </motion.div>
);

// ─── Main component ───────────────────────────────────────────────
const IndustryCapabilitiesShowcase = () => {
  const [active, setActive]         = useState("logistics");
  const [autoRotate, setAutoRotate] = useState(true);
  const timerRef = useRef(null);

  const industry = INDUSTRIES[active];

  const select = useCallback((key) => {
    setActive(key);
    setAutoRotate(false);
    clearInterval(timerRef.current);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (!autoRotate) return;
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const i = KEYS.indexOf(prev);
        return KEYS[(i + 1) % KEYS.length];
      });
    }, 12000);
    return () => clearInterval(timerRef.current);
  }, [autoRotate]);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#07111f" }}>

      {/* ── Background image (blurred, dimmed) ── */}
      <AnimatePresence>
        <motion.div
          key={active + "-bg"}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={BG[active]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "blur(3px) brightness(0.4) saturate(0.6)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent glow behind active tab color */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none z-0 transition-all duration-700"
        style={{ background: industry.accentColor + "18" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-5"
              style={{ color: B.green, borderColor: B.green + "44", background: B.green + "12" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: B.green }} />
              Industry-Ready Platform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Built for the Industries<br className="hidden sm:block" />
              <span style={{ color: B.green }}> That Keep the World Moving</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              One platform. Six industries. Tailored capabilities out of the box —
              no custom development required.
            </p>
          </motion.div>
        </div>

        {/* ── Layout: sidebar + panel ── */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── SIDEBAR (desktop) / PILL STRIP (mobile) ── */}
          <nav aria-label="Industry selector" className="lg:w-52 flex-shrink-0">
            {/* Mobile: horizontal scrollable pills */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-1 no-scrollbar">
              {KEYS.map(k => {
                const ind = INDUSTRIES[k];
                const isActive = k === active;
                return (
                  <button
                    key={k}
                    onClick={() => select(k)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border"
                    style={{
                      background:   isActive ? industry.accentColor + "22" : "rgba(255,255,255,0.06)",
                      borderColor:  isActive ? industry.accentColor + "66" : "rgba(255,255,255,0.1)",
                      color:        isActive ? ind.accentColor : "rgba(255,255,255,0.6)",
                    }}
                  >
                    <ind.Icon size={13} />
                    {ind.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:flex flex-col gap-1">
              {KEYS.map(k => {
                const ind = INDUSTRIES[k];
                const isActive = k === active;
                return (
                  <button
                    key={k}
                    onClick={() => select(k)}
                    className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left group"
                    style={{
                      background:  isActive ? ind.accentColor + "18" : "transparent",
                      color:       isActive ? ind.accentColor : "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                  >
                    {/* Active bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                        style={{ background: ind.accentColor }}
                      />
                    )}
                    <ind.Icon size={17} className="flex-shrink-0" />
                    <span>{ind.fullName}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* ── MAIN PANEL ── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  background:  "rgba(8,18,32,0.75)",
                  borderColor: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Panel header */}
                <div
                  className="px-6 py-5 border-b flex flex-col sm:flex-row sm:items-center gap-4"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  {/* Icon + title */}
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: industry.accentColor + "22" }}
                    >
                      <industry.Icon size={22} style={{ color: industry.accentColor }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: industry.accentColor }}>
                        {industry.label}
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {industry.fullName}
                      </h3>
                    </div>
                  </div>
                  {/* Tagline badge */}
                  <span
                    className="hidden sm:inline-block text-xs font-medium px-3 py-1.5 rounded-full border flex-shrink-0"
                    style={{ color: industry.accentColor, borderColor: industry.accentColor + "44", background: industry.accentColor + "11" }}
                  >
                    {industry.tagline}
                  </span>
                </div>

                {/* Description */}
                <div className="px-6 pt-5 pb-4">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {industry.description}
                  </p>
                </div>

                {/* Two-col: Challenges | Capabilities */}
                <div className="px-6 pb-6 grid lg:grid-cols-2 gap-6">

                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Settings size={14} style={{ color: "rgba(255,255,255,0.35)" }} />
                      <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Operational challenges
                      </span>
                    </div>
                    <div>
                      {industry.challenges.map((c, i) => (
                        <ChallengePill key={i} text={c} index={i} />
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={14} style={{ color: industry.accentColor }} />
                      <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Platform capabilities
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {industry.capabilities.map((cap, i) => (
                        <CapCard key={i} item={cap} accent={industry.accentColor} index={i} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Panel footer — CTAs */}
                <div
                  className="px-6 py-4 border-t flex flex-col sm:flex-row gap-3"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.2)" }}
                >
                  <a
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                    style={{ background: B.green, color: "#fff" }}
                  >
                    Schedule a Demo
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border hover:bg-white/5 active:scale-[0.98]"
                    style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}
                  >
                    Explore {industry.label} Solutions
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Industry count strip */}
            <div className="flex items-center gap-3 mt-4 px-1">
              <div className="flex gap-1.5">
                {KEYS.map(k => (
                  <button
                    key={k}
                    onClick={() => select(k)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:  k === active ? 20 : 6,
                      height: 6,
                      background: k === active ? industry.accentColor : "rgba(255,255,255,0.2)",
                    }}
                    aria-label={`View ${INDUSTRIES[k].label}`}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                {KEYS.indexOf(active) + 1} / {KEYS.length} industries
              </span>
              {autoRotate && (
                <span className="ml-auto text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: B.green }} />
                  Auto-rotating
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Suppress scrollbar on mobile pill strip */}
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </section>
  );
};

export default IndustryCapabilitiesShowcase;