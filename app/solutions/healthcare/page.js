"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Thermometer,
  Shield,
  Clock,
  Database,
  Zap,
} from "lucide-react";

const accent = "#f472b6";

function FadeIn({ children, delay = 0, className = "" }) {
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
}

export default function HealthcarePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <Image
          src="/images/backgrounds/healthcare_bg.png"
          alt=""
          fill
          className="object-cover -z-20"
          priority
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10"
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className="mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-semibold"
                  style={{ borderColor: accent + "44", background: accent + "18", color: accent }}
                >
                  Healthcare & Emergency Services
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Every second counts.{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${accent}, #f9a8d4)` }}
                >
                  Every shipment matters.
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Support rapid emergency dispatch, protect medical cold chains, and deliver safe
                patient transport with compliant, audit-ready telematics.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/demo"
                  className="inline-flex w-full items-center justify-center rounded-xl px-7 py-4 text-base font-bold text-white shadow-lg transition sm:w-auto"
                  style={{ background: accent }}
                  onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.9)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#vital-response"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  Explore Vital Response ↓
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { v: "99.9%", l: "Uptime SLA" },
                  { v: "15K+", l: "Transports" },
                  { v: "24/7", l: "Support" },
                  { v: "±3m", l: "ETA Accuracy" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-4 text-center backdrop-blur"
                  >
                    <p className="text-lg font-black" style={{ color: accent }}>{s.v}</p>
                    <p className="mt-0.5 text-xs font-semibold text-slate-300">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                className="rounded-3xl border p-3 shadow-2xl backdrop-blur"
                style={{ borderColor: accent + "33", background: accent + "12" }}
              >
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                  <Image
                    src="/dashboard-screenshot.png"
                    alt="Healthcare fleet dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-2 pt-3 text-center text-sm text-slate-300">
                  Live dispatch and cold-chain monitoring
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VITAL RESPONSE HUB ═══════════════════ */}
      <section id="vital-response" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Vital Response Hub
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Dispatch, routing, and coordination — unified.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                When every second matters, your dispatch team needs a single screen that shows vehicle
                readiness, crew status, and the fastest route to the incident — not a stack of
                disconnected tools. FleetInfinity gives emergency fleet operators a unified view of
                every resource, updated in real time.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Priority routing factors in traffic, road closures, and vehicle capability to deliver
                the fastest possible ETA. Dispatchers can assign the closest available unit, monitor
                its progress on a live map, and share a secure tracking link with the receiving
                facility — all without leaving the response screen.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                For non-emergency patient transport, the platform optimises scheduling and routing to
                minimise wait times and maximise fleet utilisation. Every trip is logged, every ETA
                is tracked, and every delay is visible to the operations team before the patient feels it.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border p-3 shadow-2xl" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "15", background: "#fdf2f8" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide" style={{ color: accent }}>
                      fleet-infinity.io · dispatch monitor
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { label: "Available Units", value: "8", sub: "of 12 in service", color: "#22c55e" },
                      { label: "Avg Response", value: "6m 42s", sub: "against 8m SLA", color: accent },
                      { label: "Active Calls", value: "3", sub: "2 emergency, 1 transport", color: "#eab308" },
                      { label: "Cold Chain Alerts", value: "0", sub: "all clear", color: "#22c55e" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between border-b pb-3" style={{ borderColor: accent + "10" }}>
                        <div>
                          <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                          <p className="text-xs text-slate-400">{item.sub}</p>
                        </div>
                        <p className="text-lg font-black" style={{ color: item.color }}>{item.value}</p>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-400 text-center pt-1">live data · last sync 6s ago</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ COLD CHAIN & PATIENT CARE ═══════════════════ */}
      <section className="relative py-20 sm:py-24 lg:py-28" style={{ clipPath: "inset(0)" }}>
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "#fdf2f8",
            backgroundImage: `url('/images/elements/ambulance.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem bottom 2rem",
            backgroundSize: "clamp(160px, 28vw, 380px)",
          }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Cold Chain & Patient Care
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Protect what matters most — cargo and people.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <h3 className="text-xl font-extrabold text-slate-950">Medical Cold-Chain Integrity</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Vaccines, blood products, and temperature-sensitive medications cannot tolerate
                deviation from their specified range. FleetInfinity monitors every refrigerated compartment
                with calibrated sensors that log temperature continuously — from the moment the
                shipment is loaded until it reaches its destination. Threshold alerts trigger
                immediately if the temperature drifts outside the safe band, and the complete
                audit trail is exportable for regulatory review at any time.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The platform supports multi-zone refrigeration monitoring, so a vehicle carrying
                vaccines at 2-8°C and medications at 15-25°C in separate compartments can track
                both zones independently. Alerts are configurable per zone, per shipment, or per
                regulatory standard — WHO, CDC, or local health authority requirements.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h3 className="text-xl font-extrabold text-slate-950">Patient Transport Safety</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Patient transport vehicles require a different standard of driving than general
                freight. Smooth acceleration, gentle cornering, and steady braking are not just
                comfort factors — they are clinical requirements for patients with spinal injuries,
                post-operative conditions, or fragile medical equipment on board.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                FleetInfinity's driver behaviour monitoring captures every harsh event and scores
                drivers on ride quality. When an incident occurs — hard braking, sharp turn, or
                rough road — the system logs it against the trip and flags it for review. Families
                receive privacy-safe location sharing links that show estimated arrival time without
                revealing the vehicle's exact position, and every share is access-logged for
                patient confidentiality compliance.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMPLIANCE & AUDIT READINESS ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Compliance & Audit Readiness
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Documentation that arrives before the inspector does.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Healthcare transport is one of the most regulated sectors in logistics.
                FleetInfinity automates the compliance workflow so your team can focus on patient
                care rather than paperwork.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { Icon: Thermometer, title: "Temperature Audit Trails", desc: "Continuous cold-chain logs with configurable thresholds per regulatory standard." },
              { Icon: Shield, title: "Incident Documentation", desc: "Every driving event, trip deviation, and patient-care incident logged with GPS and timestamp." },
              { Icon: Clock, title: "Privacy-Controlled Sharing", desc: "Time-limited location links with full audit trail of who viewed what and when." },
              { Icon: Database, title: "Automated Reporting", desc: "Export-ready compliance reports for DOH, CDC, WHO, and local health authority inspections." },
            ].map((item) => {
              const Icon = item.Icon;
              return (
                <FadeIn key={item.title} delay={0.05}>
                  <div className="flex items-start gap-4 rounded-xl border px-5 py-4" style={{ borderColor: accent + "20", background: accent + "06" }}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: accent + "15", color: accent }}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-slate-950">{item.title}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ VITAL SIGNS ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#0c1929" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 70%, ${accent}12, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Vital Signs
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Metrics that measure what matters.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-px rounded-2xl overflow-hidden border" style={{ borderColor: accent + "22", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {[
              { value: "< 8 min", label: "Avg Response Time", sub: "Emergency dispatch SLA" },
              { value: "99.7%", label: "Cold Chain Compliance", sub: "Temperature within range" },
              { value: "15K+", label: "Patient Transports", sub: "Annual trips logged" },
              { value: "100%", label: "Audit Readiness", sub: "Reports always exportable" },
            ].map((m) => (
              <div key={m.label} className="px-6 py-8 text-center" style={{ background: accent + "08" }}>
                <p className="text-3xl font-black" style={{ color: accent }}>{m.value}</p>
                <p className="mt-2 text-sm font-bold text-white">{m.label}</p>
                <p className="mt-1 text-xs text-slate-400">{m.sub}</p>
              </div>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div
              className="mx-auto mt-10 max-w-2xl rounded-2xl border px-6 py-5 text-center backdrop-blur"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-sm text-slate-400">
                Metrics based on aggregate data from healthcare transport deployments. Your results
                may vary based on fleet size, service area, and operational profile.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ PARTNER ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#0c1929" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 80%, ${accent}12, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Partner With Us
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Offer healthcare telematics under your own brand.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                White-label the full FleetInfinity platform — emergency dispatch, cold-chain
                monitoring, patient transport safety, and compliance reporting — under your domain
                and your logo.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold text-white shadow-lg transition"
                  style={{ background: accent }}
                  onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.9)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                >
                  Become a Partner
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Ready to transform your healthcare transport?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              See how FleetInfinity can help you reduce response times, protect cold-chain
              integrity, and maintain audit-ready compliance across your fleet.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold text-white shadow-lg transition"
                style={{ background: accent }}
                onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.9)"}
                onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
              >
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-slate-50"
              >
                Talk to an Expert
              </Link>
            </div>
            <div className="mt-6 flex flex-col justify-center gap-3 text-sm font-bold sm:flex-row" style={{ color: accent }}>
              <Link href="/hardware/device-search" className="hover:underline">
                Browse compatible devices
              </Link>
              <span className="hidden text-slate-300 sm:inline">·</span>
              <Link href="/platform" className="hover:underline">
                View Platform Overview
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
