"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Route,
  MapPin,
  Thermometer,
  Globe,
  Package,
  BarChart3,
  Warehouse,
  Navigation,
  Radio,
} from "lucide-react";

const accent = "#38bdf8";

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

export default function LogisticsPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <Image
          src="/images/backgrounds/logistics_hub_bg.png"
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
                  Logistics & Trucking
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                From warehouse to last mile —{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${accent}, #a5f3fc)` }}
                >
                  full visibility, zero blind spots.
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Optimize routes, reduce fuel spend, and deliver on time every time with
                end-to-end fleet intelligence for freight and distribution operations.
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
                  href="#command-center"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  Explore the Command Center ↓
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
                  { v: "151+", l: "Devices" },
                  { v: "24/7", l: "Support" },
                  { v: "±3m", l: "Accuracy" },
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
                    alt="Logistics fleet dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-2 pt-3 text-center text-sm text-slate-300">
                  Live fleet view with route optimisation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTROL TOWER ═══════════════════ */}
      <section id="command-center" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 30% 20%, ${accent}06, transparent 60%)` }} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                The Logistics Control Tower
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                One screen. Every operation.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                FleetInfinity replaces the stack of disconnected tools most logistics teams juggle
                with a single command center that covers every part of the operation.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 space-y-10 max-w-4xl mx-auto">
            <FadeIn delay={0.05}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">AI route optimisation and live tracking</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Build the most efficient multi-stop routes in seconds — factoring in traffic,
                    delivery windows, vehicle specs, and driver hours. Every vehicle streams its
                    location to a live map with role-based access so dispatchers see everything,
                    customers see their deliveries, and drivers see their route.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <Radio className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Cargo intelligence and asset monitoring</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    BLE pallet tags identify what is on each truck and reconcile deliveries
                    automatically. Temperature sensors on refrigerated units report continuously and
                    alert the moment cold-chain integrity is at risk. Fuel-flow monitors track every
                    litre, and maintenance sensors flag component health before it becomes a roadside breakdown.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Unified alerts and performance management</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Driver scores, fuel trends, and maintenance forecasts sit alongside the live map.
                    Geofence breaches, behaviour events, and service due dates route to the right
                    person instantly — no more alerts buried in email or missed between systems.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ JOURNEY ═══════════════════ */}
      <section className="relative py-20 sm:py-24 lg:py-28" style={{ clipPath: "inset(0)" }}>
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "#f0f9ff",
            backgroundImage: `url('/images/elements/logistics.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem bottom 2rem",
            backgroundSize: "clamp(160px, 28vw, 380px)",
          }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                From Pickup to Delivery
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Every stage of the journey, covered.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                One platform tracks every phase — from the moment a truck leaves the yard
                until the cargo is signed for.
              </p>
            </div>
          </FadeIn>

          <div className="relative mt-16">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: accent + "33" }} />

            <div className="space-y-12 max-w-4xl mx-auto">
              <FadeIn delay={0.05}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <Warehouse className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <Warehouse className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">Departure</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Loading Bay</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Every trip is documented before the wheels turn. RFID verifies the driver and vehicle,
                      BLE tags register every item of cargo, and the optimised route is pushed to the in-cab
                      tablet. Temperature sensors on reefers start reporting before the truck leaves the yard.
                      The system knows exactly what left, on which truck, driven by whom, and where it is going.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <Route className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <Route className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">In Transit</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>On the Road</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Live GPS streams to a customer portal so recipients track shipments without calling
                      your dispatcher. AI dashcams monitor driver fatigue and phone use — delivering in-cab
                      alerts the moment a risk is detected. Fuel consumption is cross-referenced against the
                      planned route, and geofences at waypoints trigger alerts when a truck is early, late,
                      or off-route.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">Delivery</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Drop-off Point</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      The driver captures proof of delivery in the FleetInfinity app, performs a BLE scan to
                      confirm cargo integrity matches what left the warehouse, and the recipient signs
                      digitally. The entire transaction — time-stamped, geo-tagged, and photo-verified —
                      syncs to the cloud before the truck pulls away.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <BarChart3 className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <BarChart3 className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">Review</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Back Office</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      A trip report assembles itself — fuel vs. planned route variance, driver safety
                      events flagged by the dashcam, maintenance needs scheduled into the workshop calendar.
                      The trip data is archived against that vehicle and driver, and the next dispatch
                      starts with full knowledge of the fleet's current state.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LIVE FLEET DASHBOARD ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Live Fleet Dashboard
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                What your operations team sees right now.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-10 max-w-4xl mx-auto space-y-6">
            <FadeIn delay={0.05}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                The dashboard answers the questions that matter most without a single click: how many trucks
                are on the road, how the fleet is performing, and what needs attention right now.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Live counters show 142 active vehicles, an average driver score of 87.4 that has climbed
                4.2 points this month, and three active alerts — two for scheduled maintenance and one for
                a geofence breach. Every metric refreshes every 30 seconds, and every number is clickable.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Below the summary, a full-screen map plots every vehicle colour-coded by status: moving,
                idling, stopped, or off-route. Clicking any vehicle opens its driver, speed, heading, fuel
                level, last maintenance date, and dashcam feed — all from one screen, no tab-switching required.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Data refreshes every 30 seconds
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ REAL RESULTS ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#0c1929" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 70%, ${accent}12, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Real Results
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Numbers that move your business forward.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <FadeIn delay={0.05}>
              <p className="text-lg leading-8 text-slate-300">
                Across logistics deployments in the MENA region, FleetInfinity customers consistently
                achieve measurable improvements in three areas that define profitability.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border p-6 backdrop-blur" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                  <p className="text-3xl font-black text-white">Up to 25%</p>
                  <p className="mt-1 font-bold text-white">Fuel Savings</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Smart routing and driver coaching cut consumption across every vehicle, every day.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl border p-6 backdrop-blur" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                  <p className="text-3xl font-black text-white">70% Fewer</p>
                  <p className="mt-1 font-bold text-white">Incidents</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    AI dashcams and driver scoring reduce preventable collisions across the fleet.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border p-6 backdrop-blur" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                  <p className="text-3xl font-black text-white">50% Faster</p>
                  <p className="mt-1 font-bold text-white">Route Planning</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Multi-stop optimisation turns hours of dispatch work into minutes.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.25}>
            <div
              className="mx-auto mt-10 max-w-2xl rounded-2xl border px-6 py-5 text-center backdrop-blur"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-sm text-slate-400">
                Metrics based on aggregate data from logistics deployments across the MENA region.
                Your results may vary based on fleet size, routes, and operational profile.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ VIDEO TELEMATICS SPOTLIGHT ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Safety & Compliance
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Dashcams that watch the road <em>and</em> the driver.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                AI dashcams detect collision risks, driver fatigue, and distracted driving in real time.
                When a risk event triggers, the system sounds an in-cab alert immediately and uploads a
                clip to the cloud — linked to GPS position, speed, and timestamp.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Continuous loop recording stays on the vehicle SD card for later review, while violation
                footage is accessible from the office within seconds. Every incident becomes a learning
                data point rather than a dispute.
              </p>
              <div className="mt-8">
                <Link
                  href="/platform/video-telematics"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition"
                  style={{ background: accent }}
                  onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.9)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                >
                  Explore Video Telematics
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div
                className="rounded-[2rem] border bg-white p-3 shadow-2xl"
                style={{ borderColor: accent + "33" }}
              >
                <Image
                  src="/dashboard-screenshot.png"
                  alt="Video telematics for logistics"
                  width={1100}
                  height={760}
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FLEET TYPES ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#f0f9ff" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Built for Every Fleet Type
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                One platform. Every trucking operation.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                No two fleets run the same way. FleetInfinity adapts to each operation — long-haul,
                last-mile, refrigerated, heavy haul, or full-scale fleet management.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <FadeIn delay={0.05}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: accent + "15", color: accent }}>
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950">Long-Haul Trucking</h3>
                  <p className="mt-1 text-base leading-7 text-slate-600">
                    Fatigue monitoring, HOS compliance across jurisdictions, and multi-day route
                    planning that factors in border delays and mandatory rest stops.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: accent + "15", color: accent }}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950">Last-Mile Delivery</h3>
                  <p className="mt-1 text-base leading-7 text-slate-600">
                    Real-time ETAs, proof-of-delivery capture, and customer tracking links that reduce
                    "where is my delivery?" calls. Route optimisation for stop density and delivery windows.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: accent + "15", color: accent }}>
                  <Thermometer className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950">Refrigerated Transport</h3>
                  <p className="mt-1 text-base leading-7 text-slate-600">
                    Continuous temperature monitoring with threshold alerts. Cold-chain compliance
                    reports generated automatically for audits and regulatory inspection.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: accent + "15", color: accent }}>
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950">Flatbed, Heavy Haul & Intermodal</h3>
                  <p className="mt-1 text-base leading-7 text-slate-600">
                    Load-securement verification, route restrictions based on axle weight and bridge
                    clearances, and unified tracking across truck, rail, and vessel.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: accent + "15", color: accent }}>
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-950">Full-Scale Fleet Management</h3>
                  <p className="mt-1 text-base leading-7 text-slate-600">
                    Maintenance scheduling, fuel management, driver performance, compliance, and
                    real-time operations — all delivered through a single dashboard.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
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
                Offer logistics telematics under your own brand.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                White-label the full FleetInfinity platform — route optimisation, live tracking,
                video telematics, and driver management — under your domain and your logo.
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
              Ready to transform your logistics operation?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              See how FleetInfinity can help you reduce fuel costs, improve delivery performance,
              and gain total visibility across your fleet.
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
