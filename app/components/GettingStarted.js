"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, Settings, SatelliteDish, BarChart3, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Wrench,
    title: "Install Any Device",
    desc: "Plug-and-play setup or professional installation. Our platform is hardware-agnostic — works seamlessly with any GPS or telematics device.",
    accent: "Compatible with 200+ device brands",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure Operations",
    desc: "Set up your fleet hierarchy, define user roles, and establish safety protocols. Our flexible architecture adapts perfectly to your operational workflows.",
    accent: "Highly adaptable architecture",
  },
  {
    number: "03",
    icon: SatelliteDish,
    title: "Stream Live Data",
    desc: "Vehicles begin reporting instantly. Real-time location, driver events, fuel, video, and sensor data flow securely to your operational dashboards.",
    accent: "Sub-second data delivery to cloud",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyze & Optimize",
    desc: "Track KPIs, cut fuel costs, improve driver safety, and automate compliance with powerful AI-driven reports and actionable insights.",
    accent: "Measurable ROI from day one",
  },
];

const StepCard = ({ step, index, total }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Connector line (hidden on last item and on mobile) */}
      {index < total - 1 && (
        <div
          className="hidden md:block absolute top-[2.75rem] left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-px z-0"
          aria-hidden="true"
        >
          {/* Dashed track */}
          <div className="absolute inset-0 border-t border-dashed border-gray-200" />
          {/* Animated fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-green-300 h-px"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.4, ease: "easeOut" }}
          />
          {/* Arrow tip */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: -4 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.25, delay: index * 0.12 + 0.95 }}
          >
            <ArrowRight className="w-3 h-3 text-green-300" />
          </motion.div>
        </div>
      )}

      {/* Icon circle */}
      <div className="relative z-10 mb-6">
        {/* Step number badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center z-20 shadow">
          {index + 1}
        </span>
        <div className="w-20 h-20 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
          <Icon
            className="w-9 h-9 text-green-500 group-hover:text-white transition-colors duration-300"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Text */}
      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
        {step.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-[200px]">
        {step.desc}
      </p>

      {/* Accent pill */}
      <span className="inline-block text-[11px] font-medium text-green-600 bg-green-50 border border-green-100 rounded-full px-3 py-0.5">
        {step.accent}
      </span>
    </motion.div>
  );
};

const GettingStarted = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 text-sm font-medium text-green-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Up and running in under an hour
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Getting Started{" "}
            <span className="text-green-600">is Simple</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Four steps to deploy an enterprise-grade fleet management platform 
            and gain total control over your operations.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mb-16">
          {STEPS.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} total={STEPS.length} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors shadow-sm"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm px-7 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Talk to a Telematics Expert
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GettingStarted;
