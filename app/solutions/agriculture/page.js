"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Map,
  Fuel,
  BarChart3,
} from "lucide-react";

const accent = "#22c55e";

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

export default function AgriculturePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <Image
          src="/images/backgrounds/agriculture_bg.png"
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
                  Agriculture
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Cover more ground.{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${accent}, #86efac)` }}
                >
                  Waste less of everything.
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Track machinery across vast farmlands, verify field coverage, control fuel,
                and ensure only authorised operators start your equipment.
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
                  href="#field-command"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  See Field Command ↓
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { v: "500K+", l: "Acres Covered" },
                  { v: "15K+", l: "Machines Tracked" },
                  { v: "12M L", l: "Fuel Saved Annually" },
                  { v: "98%", l: "Connectivity Uptime" },
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
                    alt="Agriculture fleet management dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-2 pt-3 text-center text-sm text-slate-300">
                  Real-time field and machinery overview
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FIELD OPERATIONS ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 30% 70%, ${accent}06, transparent 60%)` }} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Field Operations
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Know what is happening in every field, every shift.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                FleetInfinity brings the farm office into the cab and onto your screen —
                connecting machinery, operators, and field data in a single platform.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <FadeIn delay={0.05}>
              <div className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg" style={{ borderColor: accent + "22" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: accent }}>
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">Field Mapping & Coverage</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Every pass a tractor makes is recorded. Trail overlay on satellite imagery shows exactly
                  which blocks have been worked, at what speed, and by which machine. No more guessing
                  whether a field was fully sprayed or whether a section was missed in the dark.
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Coverage heatmaps are generated automatically after each shift, and the platform flags
                  gaps or overlaps in real time — so the operator can correct course before leaving the field.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg" style={{ borderColor: accent + "22" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: accent }}>
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">Harvest Analytics</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Shift-by-shift yield data, operator productivity, and machine utilisation are captured
                  automatically. See which fields are producing, which operators are most efficient, and
                  which machines are under-performing — all without manual logbooks or spreadsheets.
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Historical comparisons across seasons help identify long-term trends in field performance
                  and equipment reliability, giving farm managers the data they need for planning.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg" style={{ borderColor: accent + "22" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: accent }}>
                  <Fuel className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">Fuel Management</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Fuel is one of the largest variable costs in agriculture. FleetInfinity monitors
                  consumption in real time — per machine, per field, per operator — and flags anomalies
                  the moment they appear.
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Unexpected draws, overnight consumption, or deviation from expected usage patterns
                  trigger alerts. Trip-based fuel audits reconcile every litre purchased against engine
                  hours and distance travelled, exposing waste and preventing theft.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FIELD COMMAND CENTER ═══════════════════ */}
      <section
        id="field-command"
        className="scroll-mt-24 relative py-20 sm:py-24 lg:py-28"
        style={{ clipPath: "inset(0)" }}
      >
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "#f0fdf4",
            backgroundImage: `url('/images/elements/agriculture.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem bottom 2rem",
            backgroundSize: "clamp(160px, 28vw, 380px)",
          }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Field Command Center
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                One screen for every machine in the field.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                The Field Command view gives farm managers a live picture of every tractor,
                harvester, sprayer, and support vehicle — regardless of whether it is operating
                in the next paddock or 50 kilometres away.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-10 max-w-4xl">
              <div className="rounded-[2rem] border bg-white/80 p-3 shadow-2xl backdrop-blur" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-50">
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "15", background: "#f0fdf4" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · field command
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    {[
                      { name: "John Deere 8R 410",     field: "North Block", status: "Operating", hrs: "1,842h", fuel: "73%", op: "M. Torres" },
                      { name: "Case IH Axial-Flow 9250", field: "West Fields", status: "Harvesting",  hrs: "2,106h", fuel: "58%", op: "J. Chen" },
                      { name: "Fendt 1050 Vario",       field: "South Ridge", status: "Idle",        hrs: "976h",  fuel: "34%", op: "—" },
                      { name: "New Holland SP.400F",    field: "East Lot",    status: "Operating", hrs: "654h",  fuel: "91%", op: "K. Patel" },
                      { name: "John Deere 9620RX",      field: "North Block", status: "Offline",     hrs: "3,211h", fuel: "—",  op: "—" },
                    ].map((eq) => (
                      <div key={eq.name} className="flex items-center justify-between border-b pb-3 text-sm flex-wrap gap-2" style={{ borderColor: accent + "10" }}>
                        <div className="flex items-center gap-3">
                          <span className={`h-2 w-2 rounded-full ${
                            eq.status === "Operating" || eq.status === "Harvesting" ? "bg-emerald-500" :
                            eq.status === "Idle" ? "bg-amber-400" : "bg-slate-300"
                          }`} />
                          <span className="font-semibold text-slate-900">{eq.name}</span>
                        </div>
                        <div className="flex gap-3 text-xs text-slate-500">
                          <span className="hidden sm:inline">{eq.field}</span>
                          <span>{eq.status}</span>
                          <span>{eq.hrs}</span>
                          <span>{eq.fuel}</span>
                          <span className="hidden sm:inline">{eq.op}</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-400 text-center pt-1">5 assets · live data · last sync 8s ago</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-3 max-w-4xl">
            <FadeIn delay={0.15}>
              <div className="rounded-xl border bg-white/60 p-4 backdrop-blur" style={{ borderColor: accent + "22" }}>
                <p className="text-lg font-black" style={{ color: accent }}>±3m</p>
                <p className="text-sm font-semibold text-slate-900">RTK-GPS Accuracy</p>
                <p className="mt-1 text-xs text-slate-500">Sub-metre positioning for precision guidance and coverage verification.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-xl border bg-white/60 p-4 backdrop-blur" style={{ borderColor: accent + "22" }}>
                <p className="text-lg font-black" style={{ color: accent }}>Offline</p>
                <p className="text-sm font-semibold text-slate-900">Store-and-Forward</p>
                <p className="mt-1 text-xs text-slate-500">Data buffers locally when signal drops and syncs automatically on reconnection.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="rounded-xl border bg-white/60 p-4 backdrop-blur" style={{ borderColor: accent + "22" }}>
                <p className="text-lg font-black" style={{ color: accent }}>24/7</p>
                <p className="text-sm font-semibold text-slate-900">Field Alerts</p>
                <p className="mt-1 text-xs text-slate-500">Push notifications for equipment movement outside hours, low fuel, or service due.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ REMOTE SECURITY ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <div className="rounded-[2rem] border bg-white p-3 shadow-2xl" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <Image
                    src="/dashboard-screenshot.png"
                    alt="Remote equipment security dashboard"
                    width={1100}
                    height={760}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Remote Security
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Equipment left in a remote paddock is not unprotected equipment.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Agricultural machinery is often parked in isolated fields for days or weeks at a time.
                FleetInfinity turns every tractor and harvester into a connected, monitored asset that
                reports any unauthorised movement or attempted start.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Battery-powered trackers with long-life cells keep reporting even on parked equipment.
                Geofences drawn around field boundaries fire alerts the moment a machine moves outside
                its authorised area. Ignition blocking via RFID or relay cut-off prevents unauthorised
                operation — even if the keys are in the cab.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                The result: equipment theft is not eliminated entirely, but it becomes extremely difficult
                to steal a machine that reports its location, requires authentication to start, and alerts
                the owner the moment it is moved.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Geofence Alerts", "Ignition Blocking", "Motion Detection", "Battery-Powered Trackers"].map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: accent + "33", color: accent, background: accent + "0a" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ OPERATOR MANAGEMENT ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#052e16" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 70% 30%, ${accent}12, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Operator Management
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Know who is operating every machine, every shift.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                With multiple operators sharing equipment across shifts and seasons, knowing who was
                behind the wheel is critical for accountability, payroll, and safety.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                FleetInfinity uses RFID and iButton authentication to enforce operator identification
                before the engine can start. The platform logs every start and stop event against the
                authenticated operator, creating an auditable record of who ran which machine, for how
                long, and where they went.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                Shift reports show total engine hours, field coverage, fuel consumption, and any
                harsh-driving events per operator — making performance reviews, training needs, and
                incentive programs data-driven rather than anecdotal.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                {[
                  { v: "RFID", l: "Operator Auth" },
                  { v: "Auto", l: "Shift Logging" },
                  { v: "Real-Time", l: "Attendance" },
                  { v: "Audit", l: "Ready Reports" },
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
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "22", background: "#0a3d1a" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · operator log
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { name: "M. Torres", machine: "John Deere 8R 410", start: "06:32", end: "14:15", hrs: "7.7", field: "North Block" },
                      { name: "J. Chen",   machine: "Case IH 9250",      start: "06:45", end: "15:00", hrs: "8.3", field: "West Fields" },
                      { name: "K. Patel",  machine: "New Holland SP.400F", start: "07:10", end: "13:50", hrs: "6.7", field: "East Lot" },
                    ].map((op) => (
                      <div key={op.name} className="flex items-center justify-between border-b pb-2 text-sm" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <div className="flex items-center gap-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                            {op.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <span className="font-semibold text-white">{op.name}</span>
                        </div>
                        <div className="flex gap-3 text-xs text-slate-400">
                          <span className="hidden sm:inline">{op.machine}</span>
                          <span>{op.start}-{op.end}</span>
                          <span className="font-semibold" style={{ color: accent }}>{op.hrs}h</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-500 text-center pt-1">Today · 3 operators active · 22.7 total hours</p>
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
                Tangible returns from the first season.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <FadeIn delay={0.05}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Agricultural operations using FleetInfinity report measurable improvements in
                fuel economy, equipment utilisation, and operational security within the first season.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">-18%</p>
                  <p className="mt-1 font-bold text-slate-900">Fuel Consumption</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Real-time monitoring and anomaly detection reduce waste and discourage misuse.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">+15%</p>
                  <p className="mt-1 font-bold text-slate-900">Machine Utilisation</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Visibility into idle equipment enables better allocation during peak seasons.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">90%</p>
                  <p className="mt-1 font-bold text-slate-900">Theft Reduction</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Geofence alerts and ignition blocking make unauthorised movement nearly impossible.
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
                Metrics based on aggregate data from agricultural deployments across Australia, Brazil,
                and the United States. Your results may vary based on operation size and crop type.
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
              Ready to connect your farm?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              See how FleetInfinity can help you track machinery, reduce fuel costs,
              and protect your equipment with real-time agricultural telematics.
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
