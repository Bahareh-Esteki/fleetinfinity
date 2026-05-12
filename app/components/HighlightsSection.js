"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Shield,
  ClipboardCheck,
  Route,
  BarChart3,
  Plug,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────

const COST_BARS = [
  { label: "Fuel waste",    pct: 72, color: "#003366" },
  { label: "Maintenance",   pct: 48, color: "#58C15D" },
  { label: "Idle time",     pct: 31, color: "#A9C0D1" },
  { label: "Violations",    pct: 18, color: "#fb923c" },
];

const KPIS = [
  {
    label: "Active vehicles",
    value: "142 / 148",
    delta: "↑ 96% uptime",
    deltaColor: "#58C15D",
  },
  {
    label: "Avg driver score",
    value: "87.4",
    delta: "↑ +4.2 this month",
    deltaColor: "#58C15D",
  },
];

const FEATURES = [
  {
    Icon: DollarSign,
    iconBg: "#003366",
    iconColor: "#A9C0D1",
    title: "ROI & Cost Control",
    metric: "Save up to 25%",
    metricBg: "#EAF3DE",
    metricColor: "#27500A",
    desc: "Fuel waste, unauthorized trips, and unplanned repairs — all surfaced, quantified, and reduced from one dashboard.",
  },
  {
    Icon: Shield,
    iconBg: "#EAF3DE",
    iconColor: "#27500A",
    title: "Safety & Liability",
    metric: "70% fewer incidents",
    metricBg: "#E6F1FB",
    metricColor: "#0C447C",
    desc: "AI dashcam scoring coaches every driver in real time. Every event is logged, timestamped, and ready for legal defense.",
  },
  {
    Icon: ClipboardCheck,
    iconBg: "#EEEDFE",
    iconColor: "#3C3489",
    title: "Regulatory Compliance",
    metric: "100% audit-ready",
    metricBg: "#EEEDFE",
    metricColor: "#3C3489",
    desc: "HOS, DVIR, and ELD reporting automated end-to-end. Walk into any audit with every document pre-generated.",
  },
  {
    Icon: Route,
    iconBg: "#FFF8E1",
    iconColor: "#8a5200",
    title: "Operational Efficiency",
    metric: "50% faster routing",
    metricBg: "#FFF8E1",
    metricColor: "#8a5200",
    desc: "Traffic-aware AI plans multi-stop routes in seconds. Dispatch focuses on exceptions — not spreadsheets.",
  },
  {
    Icon: BarChart3,
    iconBg: "#FFEBEE",
    iconColor: "#7f1d1d",
    title: "Actionable Intelligence",
    metric: "Real-time KPIs",
    metricBg: "#FFEBEE",
    metricColor: "#7f1d1d",
    desc: "Custom dashboards surface driver leaderboards, cost trends, and maintenance forecasts — not raw data dumps.",
  },
  {
    Icon: Plug,
    iconBg: "#E0F2F1",
    iconColor: "#00504a",
    title: "Future-Proof Platform",
    metric: "API-first",
    metricBg: "#E0F2F1",
    metricColor: "#00504a",
    desc: "Add hardware, integrate existing tools, or expand regions — without touching your current setup or paying for rebuilds.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Mini dashboard widget shown in the left column
const DashboardAnchor = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm"
      style={{ fontFamily: "'DM Mono', 'IBM Plex Mono', monospace" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[10px] text-gray-400 tracking-wide">
          fleet-infinity · live overview
        </span>
      </div>

      {/* Headline stats */}
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        {[
          { val: "25%", label: "Cost saved",     color: "#003366" },
          { val: "70%", label: "Safer drivers",  color: "#58C15D" },
          { val: "50%", label: "Faster routing", color: "#555"    },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="px-4 py-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          >
            <div className="text-xl font-bold leading-none" style={{ color: s.color }}>
              {s.val}
            </div>
            <div className="text-[10px] text-gray-400 mt-1 leading-snug">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="px-4 pt-4 pb-3 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 mb-3 tracking-wide uppercase">
          Fleet cost breakdown · this month
        </p>
        <div className="space-y-2.5">
          {COST_BARS.map((bar, i) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="text-[10px] text-gray-500 w-20 text-right flex-shrink-0">
                {bar.label}
              </span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: bar.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${bar.pct}%` } : {}}
                  transition={{ duration: 0.7, delay: 0.55 + i * 0.08, ease: "easeOut" }}
                />
              </div>
              <span className="text-[10px] text-gray-400 w-7 flex-shrink-0">{bar.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
        {KPIS.map((k) => (
          <div key={k.label} className="px-4 py-3">
            <p className="text-[10px] text-gray-400 mb-0.5">{k.label}</p>
            <p className="text-sm font-semibold text-gray-800">{k.value}</p>
            <p className="text-[10px] mt-0.5" style={{ color: k.deltaColor }}>
              {k.delta}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Single feature row (right column)
const FeatureRow = ({ feature, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { Icon } = feature;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-start gap-4 py-5 border-b border-gray-100 last:border-b-0 first:pt-0"
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: feature.iconBg }}
      >
        <Icon className="w-5 h-5" style={{ color: feature.iconColor }} strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug">
            {feature.title}
          </h3>
          <span
            className="text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap"
            style={{ background: feature.metricBg, color: feature.metricColor }}
          >
            {feature.metric}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
};

// ─── Main component ───────────────────────────────────────────────

const BusinessOutcomesFocus = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col gap-8">

            {/* Heading block */}
            <FadeUp delay={0}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="h-px flex-1 max-w-[40px]"
                    style={{ background: "#58C15D" }}
                  />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#58C15D" }}
                  >
                    Why operators choose us
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                  Strategic outcomes.{" "}
                  <span
                    className="relative inline-block"
                    style={{ color: "#003366" }}
                  >
                    Not just tracking.
                    {/* Underline accent */}
                    <span
                      className="absolute left-0 -bottom-1 w-full h-0.5 rounded-full"
                      style={{ background: "#58C15D" }}
                    />
                  </span>
                </h2>

                <p className="text-base text-gray-500 leading-relaxed max-w-md">
                  Most fleet platforms show you where vehicles are. Fleet Infinity
                  shows you what that data costs you — and exactly where to cut it.
                </p>
              </div>
            </FadeUp>

            {/* Dashboard anchor */}
            <DashboardAnchor />

            {/* CTA */}
            <FadeUp delay={0.15}>
              <a
                href="/price-calculator"
                className="inline-flex items-center gap-2.5 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 group"
                style={{ background: "#003366", color: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#002244")}
                onMouseLeave={e => (e.currentTarget.style.background = "#003366")}
              >
                Calculate your ROI
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </FadeUp>
          </div>

          {/* ══ RIGHT COLUMN — Feature rows ══ */}
          <div className="flex flex-col">
            {FEATURES.map((feature, i) => (
              <FeatureRow key={feature.title} feature={feature} index={i} />
            ))}

            {/* Footer note */}
            <motion.p
              className="mt-6 text-xs text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Metrics based on aggregate data from fleet operations across logistics,
              construction, and public transportation deployments.{" "}
              <a
                href="/platform-overview"
                className="underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                View technical details
              </a>
            </motion.p>
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 rounded-2xl border border-gray-100 bg-gray-50 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Ready to see the numbers for your fleet?
            </p>
            <p className="text-sm text-gray-500">
              Enter your fleet size and get a projected cost reduction in 60 seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/price-calculator"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              style={{ background: "#58C15D", color: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#4aa54e")}
              onMouseLeave={e => (e.currentTarget.style.background = "#58C15D")}
            >
              Start ROI Calculation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-white transition-all duration-200"
            >
              Schedule Free Demo
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BusinessOutcomesFocus;