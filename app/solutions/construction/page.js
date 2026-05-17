"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  HardHat,
  Drill,
  Cone,
  Map,
  Wrench,
  BarChart3,
  Radio,
} from "lucide-react";

const accent = "#ea580c";

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

export default function ConstructionPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <Image
          src="/images/backgrounds/construction_bg.png"
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
                  Construction
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                From foundation to handover —{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${accent}, #fdba74)` }}
                >
                  equipment, crew, and site fully connected.
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Track heavy equipment, monitor site safety, and protect your assets with
                rugged telematics built for the construction environment.
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
                  href="#job-site"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  See the Connected Job Site ↓
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { v: "50K+", l: "Assets Tracked" },
                  { v: "99.5%", l: "Uptime SLA" },
                  { v: "24/7", l: "Support" },
                  { v: "±2m", l: "Location Accuracy" },
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
                    alt="Construction equipment tracking dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-2 pt-3 text-center text-sm text-slate-300">
                  Live equipment view with site boundaries
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONNECTED JOB SITE ═══════════════════ */}
      <section id="job-site" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 70% 30%, ${accent}06, transparent 60%)` }} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                The Connected Job Site
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Visibility across every corner of the site.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                FleetInfinity connects the people, equipment, and environment of your construction
                site into a single operational view.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 space-y-10 max-w-4xl mx-auto">
            <FadeIn delay={0.05}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <HardHat className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Personnel and site access</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Every person carries a connected credential — RFID badge, wearable tag, or mobile app —
                    that registers their presence the moment they arrive. Site managers see who is on site,
                    how long they have been there, and which zones they can access. Paper sign-in sheets
                    are replaced by a live register linked to induction records and safety certifications.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <Cone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Equipment location and utilisation</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Every machine — excavators, bulldozers, generators, compaction rollers — carries a
                    rugged GPS tracker reporting its location, engine hours, and movement status. The site
                    map shows whether the crane is on the right pad, which dozer is idling, and if any
                    equipment has moved outside its authorised zone after hours.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: accent + "15", color: accent }}>
                  <Radio className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">Site-wide telemetry</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Fuel levels in on-site storage tanks, temperature in material storage areas, and
                    security camera feeds at access points — all feeding into the same timeline. When a
                    tank drops below threshold or a camera detects motion after hours, the alert reaches
                    the right person immediately.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SITE LIFECYCLE ═══════════════════ */}
      <section className="relative py-20 sm:py-24 lg:py-28" style={{ clipPath: "inset(0)" }}>
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "#fff7ed",
            backgroundImage: `url('/images/elements/construction.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem bottom 2rem",
            backgroundSize: "clamp(160px, 28vw, 380px)",
          }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                From Site Prep to Project Close
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                The full construction lifecycle, connected.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Construction projects evolve fast — FleetInfinity adapts to each phase, from the
                moment the first excavator arrives to the final inspection sign-off.
              </p>
            </div>
          </FadeIn>

          <div className="relative mt-16">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: accent + "33" }} />

            <div className="space-y-12 max-w-4xl mx-auto">
              <FadeIn delay={0.05}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <Map className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <Map className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">Site Preparation</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Mobilisation</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Before the first foundation is poured, the digital perimeter of the site is established.
                      Geofences are drawn around work areas, material storage zones, and equipment parking.
                      Every asset arriving on site is registered with a tracker, and crew credentials are
                      verified against induction records. By the time the first machine starts, the platform
                      already knows who and what is on site.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <Drill className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <Drill className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">Active Construction</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Build Phase</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Equipment utilisation is tracked continuously — the site manager sees which machines are
                      running, which are idle, and which have been left running unnecessarily. Fuel consumption
                      is monitored per asset, and unexpected draws trigger alerts. Geofences around active work
                      zones ensure only authorised personnel and equipment enter areas where excavation, lifting,
                      or demolition is under way.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="relative md:pl-20">
                  <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: accent }}>
                    <Wrench className="h-7 w-7" />
                  </div>
                  <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: accent + "22" }}>
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: accent }}>
                        <Wrench className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">Maintenance and Servicing</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Throughout the Project</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Engine hours drive maintenance scheduling based on actual usage, not calendar intervals.
                      When an excavator approaches its service threshold, the platform alerts the team and can
                      recommend a window based on the project schedule — so servicing happens when the machine
                      would otherwise be idle, not when it is needed for a critical pour or lift.
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
                        <h3 className="text-xl font-extrabold text-slate-950">Project Close and Demobilisation</h3>
                        <p className="text-sm font-medium" style={{ color: accent }}>Handover</p>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      Equipment is signed out as it leaves the site geofence. The platform generates a
                      project-level report summarising total machine hours, fuel consumption, safety events,
                      and personnel access logs — serving as documentation for client handover, internal cost
                      analysis, and equipment readiness for the next project.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HEAVY EQUIPMENT INTELLIGENCE ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Heavy Equipment Intelligence
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Know what every machine is doing, every hour of the day.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Equipment is one of the largest capital investments on any construction site. FleetInfinity
                tracks engine hours, movement, fuel consumption, and location for every asset — from a
                compact track loader to a 50-tonne excavator.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Utilisation reports show which assets are working, which are idle, and which are under-used.
                The platform flags machines running outside working hours, equipment moved without
                authorisation, and fuel consumption patterns that suggest a maintenance issue before it
                becomes a breakdown. For rental fleets, automated hour tracking ensures billing matches
                actual usage.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                The result: site managers know whether the crane is available, how many hours are on that
                dozer, when the generator was last serviced, and where the compactor is — all on screen,
                without a phone call to the site.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border bg-white p-3 shadow-2xl" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "15", background: "#fffaf5" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · equipment status
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { name: "CAT 320 Excavator", status: "Operating", hours: "1,247h", fuel: "68%", loc: "Sector A" },
                      { name: "D6 Dozer", status: "Idle", hours: "892h", fuel: "42%", loc: "Sector B" },
                      { name: "RT335 Crane", status: "Operating", hours: "534h", fuel: "81%", loc: "Sector A" },
                      { name: "CS56 Compactor", status: "Offline", hours: "2,103h", fuel: "—", loc: "Sector C" },
                    ].map((eq) => (
                      <div key={eq.name} className="flex items-center justify-between border-b pb-3 text-sm" style={{ borderColor: accent + "10" }}>
                        <div className="flex items-center gap-3">
                          <span className={`h-2 w-2 rounded-full ${
                            eq.status === "Operating" ? "bg-emerald-500" :
                            eq.status === "Idle" ? "bg-amber-400" : "bg-slate-300"
                          }`} />
                          <span className="font-semibold text-slate-900">{eq.name}</span>
                        </div>
                        <div className="flex gap-4 text-xs text-slate-500">
                          <span>{eq.status}</span>
                          <span>{eq.hours}</span>
                          <span>{eq.fuel}</span>
                          <span>{eq.loc}</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-400 text-center pt-1">4 assets · live data · last sync 12s ago</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SAFETY & COMPLIANCE ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#0c1929" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 60% 40%, ${accent}10, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <div className="rounded-[2rem] border p-3 shadow-2xl" style={{ borderColor: accent + "33", background: accent + "12" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-900">
                  <Image
                    src="/dashboard-screenshot.png"
                    alt="Construction safety and compliance dashboard"
                    width={1100}
                    height={760}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Safety & Compliance
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Built-in safety that does not rely on a clipboard.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Construction safety is too important for paper checklists that might or might not get filled
                in. FleetInfinity makes site safety a continuous data stream — who is on site, whether they
                are in an authorised zone, and whether the site itself is secure.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                Geofences around hazardous zones — excavation edges, crane swing radii, demolition areas —
                fire an alert if personnel or equipment enters without authorisation. Wearable tags can include
                man-down sensors. The platform maintains a searchable record of inductions, certifications,
                and site access history, exportable for audit or regulatory inspection at any time.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                When an incident occurs, the platform provides a complete timeline of who was on site, which
                equipment was operating, and where everything was located — turning a chaotic investigation
                into a data-driven review that is faster, more accurate, and more defensible.
              </p>
              <div className="mt-8">
                <Link
                  href="/platform/video-telematics"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition"
                  style={{ background: accent }}
                  onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.9)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                >
                  Explore Safety Features
                  <ArrowRight className="h-5 w-5" />
                </Link>
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
                Measurable impact across the construction lifecycle.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <FadeIn delay={0.05}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Construction firms using FleetInfinity consistently report improvements in three areas that
                directly affect project profitability and risk.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">+20%</p>
                  <p className="mt-1 font-bold text-slate-900">Equipment Utilisation</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Site managers can see idle machines and redeploy them. Visibility alone changes behaviour.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">Dramatic Drop</p>
                  <p className="mt-1 font-bold text-slate-900">Theft & Unauthorised Use</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Geofence alerts fire the moment equipment leaves the site boundary after hours.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">Fewer</p>
                  <p className="mt-1 font-bold text-slate-900">Unplanned Breakdowns</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Usage-based maintenance replaces calendar intervals. Issues are caught before they
                    become project crises.
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
                Metrics based on aggregate data from construction deployments across the MENA region.
                Your results may vary based project type, fleet size, and operational profile.
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
                Offer construction telematics under your own brand.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                White-label the full FleetInfinity platform — equipment tracking, site safety,
                fuel monitoring, and maintenance management — under your domain and your logo.
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
              Ready to connect your construction site?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              See how FleetInfinity can help you track equipment, improve site safety,
              and reduce project costs with real-time construction telematics.
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
