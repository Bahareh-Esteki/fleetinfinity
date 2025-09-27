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

const industryBackgrounds = {
  logistics: {
    src: "/images/backgrounds/logistics_hub_bg.png",
    overlay: "from-slate-900/70 via-slate-900/45 to-slate-900/25",
  },
  construction: {
    src: "/images/backgrounds/construction_site_bg.png",
    overlay: "from-amber-950/65 via-amber-950/40 to-amber-950/20",
  },
  healthcare: {
    src: "/images/backgrounds/healthcare_emergency_bg.png",
    overlay: "from-rose-950/65 via-rose-950/40 to-rose-950/20",
  },
  agriculture: {
    src: "/images/backgrounds/agriculture_farming_bg.png",
    overlay: "from-emerald-950/65 via-emerald-950/40 to-emerald-950/20",
  },
  transportation: {
    src: "/images/backgrounds/public_transit_bg.png",
    overlay: "from-violet-950/65 via-violet-950/40 to-violet-950/20",
  },
  aviation: {
    src: "/images/backgrounds/aviation_maritime_bg.png",
    overlay: "from-indigo-950/65 via-indigo-950/40 to-indigo-950/20",
  },
};

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

const previewCount = 2;

const IndustryCapabilitiesShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState("logistics");
  const [showMoreChallenges, setShowMoreChallenges] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // ... industries object data exactly as before ...

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

  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative w-full min-h-[70vh]">
        <Image
          src={bg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${bg.overlay}`} />
      </div>
      <div className="container mx-auto px-4 -mt-[55vh] pb-10 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-4">
            <Target className="w-4 h-4" /> Industry-Ready Solutions
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
                  setShowMoreChallenges(false);
                  setShowMoreFeatures(false);
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

        {/* MAIN */}
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

            {/* Responsive col layout */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Challenges - summary for mobile */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-600" /> Industry
                  Challenges We Address
                </h4>
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
                  {current.challenges.slice(0, previewCount).map((c, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{c}</span>
                    </div>
                  ))}
                  {current.challenges.length > previewCount &&
                    !showMoreChallenges && (
                      <button
                        onClick={() => setShowMoreChallenges(true)}
                        className="px-2 py-1 text-emerald-600 text-sm font-medium underline"
                      >
                        Show {current.challenges.length - previewCount} more...
                      </button>
                    )}
                  {showMoreChallenges &&
                    current.challenges.slice(previewCount).map((c, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{c}</span>
                      </div>
                    ))}
                </div>

                {/* Ready Features - summary for mobile */}
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mt-3">
                  <h5 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />{" "}
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
                  <div className="md:hidden space-y-1">
                    {current.readyFeatures
                      .slice(0, previewCount)
                      .map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                          <span className="text-emerald-900/90 text-sm">
                            {f}
                          </span>
                        </div>
                      ))}
                    {current.readyFeatures.length > previewCount &&
                      !showMoreFeatures && (
                        <button
                          onClick={() => setShowMoreFeatures(true)}
                          className="px-2 py-1 text-emerald-600 text-sm font-medium underline"
                        >
                          Show {current.readyFeatures.length - previewCount}{" "}
                          more...
                        </button>
                      )}
                    {showMoreFeatures &&
                      current.readyFeatures
                        .slice(previewCount)
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

              {/* Capabilities - swipeable/flexible for mobile */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" /> Our Platform
                  Capabilities
                </h4>
                {/* DESKTOP */}
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
                {/* MOBILE: swipeable/flex cards */}
                <div className="md:hidden flex flex-nowrap gap-3 px-1 overflow-x-auto pb-2 -mx-1">
                  {current.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex-none w-72 bg-white rounded-xl p-4 border border-gray-100"
                      style={{ minWidth: "15rem", maxWidth: "18rem" }}
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
                {/* Optionally, swap 'flex' with 'flex-col' above if you want vertical stack instead on mobile */}
              </div>
            </div>

            {/* Bottom highlight row: grid on desktop, summary on mobile */}
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

            {/* CTAs */}
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
