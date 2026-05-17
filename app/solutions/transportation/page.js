"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MapPin,
  UserCheck,
  Camera,
  Shield,
  Wrench,
} from "lucide-react";

const accent = "#a78bfa";

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

export default function TransportationPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <Image
          src="/images/backgrounds/transport_bg.png"
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
                  Public Transportation
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Reliable service.{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${accent}, #c4b5fd)` }}
                >
                  Safe passengers. Every route.
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Improve on-time performance, protect passengers, and reduce downtime with smart
                telematics designed for bus, shuttle, and corporate-transit operations.
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
                  href="#ai-safety"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  See AI Safety in Action ↓
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { v: "98%", l: "On-Time Performance" },
                  { v: "5K+", l: "Vehicles Connected" },
                  { v: "12M+", l: "Annual Passengers" },
                  { v: "24/7", l: "Operations Support" },
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
                    alt="Public transit fleet management dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-2 pt-3 text-center text-sm text-slate-300">
                  Live route and vehicle overview
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICE OPERATIONS ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 70% 30%, ${accent}06, transparent 60%)` }} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Service Operations
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Every route on time. Every passenger informed.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                FleetInfinity connects transit operators, vehicles, and passengers into a single
                real-time network — so service runs smoother and everyone stays informed.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 space-y-10 max-w-4xl mx-auto">
            <FadeIn delay={0.05}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Real-Time Arrivals</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Passengers expect to know exactly when the next bus or shuttle will arrive.
                    FleetInfinity feeds live vehicle positions through ML-based ETA models that
                    account for traffic, dwell time at stops, and route conditions. The result is
                    arrival predictions accurate to within seconds — delivered to passenger-facing
                    apps, digital signage at stops, and via GTFS or SIRI feeds for third-party
                    integration.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Real-Time Service Monitoring</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Service conditions change by the hour — traffic congestion, road closures,
                    special events, and fluctuating passenger demand. FleetInfinity gives
                    dispatchers a live view of every vehicle's position, speed, and adherence
                    to schedule. Alerts fire automatically when a vehicle falls behind or deviates
                    from its planned route, so the team can intervene before passengers feel the delay.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Passenger Attendance Verification</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    For corporate shuttles, school buses, and on-demand transit services,
                    knowing who is on board matters for safety, billing, and operational planning.
                    RFID and NFC card readers at boarding doors verify each passenger automatically.
                    The platform maintains a live manifest for every trip, with check-in and
                    check-out timestamps linked to the vehicle and route. Unauthorised boardings
                    or passengers who fail to alight at their stop trigger alerts immediately.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AI SAFETY & MONITORING ═══════════════════ */}
      <section
        id="ai-safety"
        className="scroll-mt-24 relative py-20 sm:py-24 lg:py-28"
        style={{ clipPath: "inset(0)" }}
      >
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "#f5f3ff",
            backgroundImage: `url('/images/elements/transportation.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem bottom 2rem",
            backgroundSize: "clamp(160px, 28vw, 380px)",
          }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                AI Safety & Monitoring
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                AI that watches the road so drivers can focus on passengers.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                FleetInfinity's AI dashcam system provides continuous monitoring of the road ahead
                and the driver's behaviour — detecting incidents, distractions, and unsafe conditions
                in real time. Every event is recorded with GPS location, timestamp, and video footage,
                creating an objective record that accelerates investigations, supports coaching, and
                reduces liability.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                The AI detects hard braking, rapid acceleration, swerving, tailgating, and lane
                departures — plus driver-specific events like phone use, yawning, or loss of
                attention. Alerts reach the fleet manager in seconds, and aggregated scoring per
                driver makes it easy to identify who needs additional training and who deserves
                recognition.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Multi-camera configurations capture the full environment: forward-facing for road
                incidents, cabin-facing for driver behaviour, and door-facing for passenger boarding
                and alighting safety. All footage is securely stored and automatically tagged with
                event metadata for instant retrieval during post-incident review.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["AI Incident Detection", "Driver Behaviour Scoring", "Multi-Camera Recording", "Real-Time Alerts"].map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: accent + "33", color: accent, background: accent + "0a" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border bg-white/80 p-3 shadow-2xl backdrop-blur" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-900">
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "22", background: "#2e1065" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · safety monitor
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { event: "Hard Braking", severity: "High", location: "Route 7 · Stop 12", time: "08:23:15", driver: "S. Williams" },
                      { event: "Lane Departure", severity: "Medium", location: "Main St. & 5th Ave", time: "09:47:02", driver: "A. Garcia" },
                      { event: "Phone Use Detected", severity: "High", location: "Highway 101 N", time: "10:12:44", driver: "R. Johnson" },
                      { event: "Harsh Acceleration", severity: "Low", location: "Elm St. Terminal", time: "11:05:30", driver: "T. Lee" },
                    ].map((inc) => (
                      <div key={inc.event + inc.time} className="flex items-center justify-between border-b pb-2 text-sm" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <div className="flex items-center gap-3">
                          <span className={`h-2 w-2 rounded-full ${
                            inc.severity === "High" ? "bg-red-500" :
                            inc.severity === "Medium" ? "bg-amber-400" : "bg-slate-400"
                          }`} />
                          <div>
                            <p className="font-semibold text-white">{inc.event}</p>
                            <p className="text-[10px] text-slate-500">{inc.driver} · {inc.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className={`font-semibold ${
                            inc.severity === "High" ? "text-red-400" :
                            inc.severity === "Medium" ? "text-amber-400" : "text-slate-400"
                          }`}>{inc.severity}</span>
                          <span className="text-slate-500">{inc.time}</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-500 text-center pt-1">Today · 4 events · 2 high severity</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PASSENGER EXPERIENCE ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <div className="rounded-[2rem] border bg-white p-3 shadow-2xl" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <Image
                    src="/dashboard-screenshot.png"
                    alt="Passenger information dashboard"
                    width={1100}
                    height={760}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Passenger Experience
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Information that travels as fast as the vehicle.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Modern transit passengers expect real-time information at their fingertips — and
                FleetInfinity delivers it. Live vehicle positions, accurate arrival predictions,
                and service disruption alerts flow directly to mobile apps, website widgets, and
                digital signage at stops.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                For corporate shuttle and school bus operators, privacy-safe location sharing
                lets families and employees see exactly when the vehicle will arrive — without
                revealing its precise position. Time-limited share links can be sent via SMS or
                email, and every access is logged for privacy compliance.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Predictive occupancy modelling uses historical data and current boardings to
                estimate passenger load on each vehicle, helping operators deploy additional
                capacity before routes become overcrowded — not after passengers complain.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FLEET HEALTH ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#1c0a38" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 70%, ${accent}12, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Fleet Health
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Downtime is not an option when people are waiting at the stop.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                A broken-down bus or shuttle does not just disrupt one route — it creates a ripple
                effect across the entire network. FleetInfinity's predictive maintenance engine
                monitors every vehicle's CAN bus, engine diagnostics, and sensor data to catch
                issues before they become roadside failures.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                Battery voltage, coolant temperature, brake wear, tyre pressure, and fault codes
                are tracked continuously. When a parameter drifts outside the normal range, the
                platform recommends a service window based on the vehicle's schedule — so
                maintenance happens when the bus is already parked for the night, not during
                peak service hours.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                The result is fewer breakdowns, longer vehicle life, and a fleet that spends more
                time on the road serving passengers and less time in the workshop.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
                {[
                  { v: "CAN/OBD-II", l: "Real-Time Diagnostics" },
                  { v: "Predictive", l: "Service Scheduling" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border px-4 py-3" style={{ borderColor: accent + "22", background: accent + "0a" }}>
                    <p className="text-sm font-black" style={{ color: accent }}>{s.v}</p>
                    <p className="text-xs font-medium text-slate-300">{s.l}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border p-3 shadow-2xl" style={{ borderColor: accent + "33", background: accent + "12" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-900">
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "22", background: "#2e1065" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · fleet health
                    </span>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      { vehicle: "Bus 2047", route: "Route 7", health: "Good", batt: "12.4V", coolant: "89°C", miles: "142K" },
                      { vehicle: "Bus 3102", route: "Express 12", health: "Warning", batt: "11.8V", coolant: "94°C", miles: "189K" },
                      { vehicle: "Shuttle 08", route: "Corporate Loop", health: "Good", batt: "12.6V", coolant: "87°C", miles: "67K" },
                      { vehicle: "Bus 1895", route: "Route 22", health: "Critical", batt: "10.2V", coolant: "102°C", miles: "256K" },
                    ].map((v) => (
                      <div key={v.vehicle} className="flex items-center justify-between border-b pb-2 text-sm" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <div className="flex items-center gap-3">
                          <span className={`h-2 w-2 rounded-full ${
                            v.health === "Good" ? "bg-emerald-500" :
                            v.health === "Warning" ? "bg-amber-400" : "bg-red-500"
                          }`} />
                          <div>
                            <p className="font-semibold text-white">{v.vehicle}</p>
                            <p className="text-[10px] text-slate-500">{v.route}</p>
                          </div>
                        </div>
                        <div className="flex gap-3 text-xs text-slate-400">
                          <span>{v.batt}</span>
                          <span>{v.coolant}</span>
                          <span>{v.miles}</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-500 text-center pt-1">4 vehicles · 1 critical · 1 warning</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ REAL RESULTS ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Real Results
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Measurable improvements across the transit network.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <FadeIn delay={0.05}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Transit authorities and shuttle operators using FleetInfinity consistently report
                gains in on-time performance, passenger satisfaction, and fleet reliability.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">+12%</p>
                  <p className="mt-1 font-bold text-slate-900">On-Time Performance</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Real-time schedule monitoring and adjustments keep headways consistent across the network.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">-40%</p>
                  <p className="mt-1 font-bold text-slate-900">Incident Rate</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    AI dashcam monitoring and driver coaching reduce collisions and harsh driving events.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">-25%</p>
                  <p className="mt-1 font-bold text-slate-900">Unplanned Downtime</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Predictive maintenance catches issues before they cause roadside breakdowns.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.25}>
            <div
              className="mx-auto mt-10 max-w-2xl rounded-2xl border px-6 py-5 text-center"
              style={{ borderColor: accent + "22", background: accent + "06" }}
            >
              <p className="text-sm text-slate-500">
                Metrics based on aggregate data from transit deployments across North America and
                Europe. Your results may vary based on fleet size, service area, and route complexity.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Ready to improve your transit service?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              See how FleetInfinity can help you improve on-time performance, enhance passenger
              safety, and reduce downtime with intelligent transit telematics.
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
