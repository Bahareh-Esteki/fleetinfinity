"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Plane,
  Ship,
  Lock,
  Shield,
  BarChart3,
} from "lucide-react";

const accent = "#67e8f9";

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

export default function AviationMaritimePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <Image
          src="/images/backgrounds/aviation_bg.png"
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
                  Aviation & Maritime
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Global coverage.{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to right, ${accent}, #99f6e4)` }}
                >
                  Zero cargo blind spots.
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Airside ground-fleet management, global vessel tracking, smart cargo security,
                and compliance-ready analytics — all in one platform.
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
                  onMouseEnter={e => (e.currentTarget.style.color = "#0f172a")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#global-tracking"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
                >
                  Explore Global Tracking ↓
                </Link>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { v: "10K+", l: "Vessels Tracked" },
                  { v: "50+", l: "Airports Connected" },
                  { v: "99.9%", l: "Satellite Uptime" },
                  { v: "24/7", l: "Global Support" },
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
                    alt="Aviation and maritime fleet dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-2 pt-3 text-center text-sm text-slate-300">
                  Unified air and maritime operations view
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AIRPORT GROUND OPERATIONS ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 70% 30%, ${accent}06, transparent 60%)` }} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Airport Ground Operations
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Every ground vehicle, every turn, every minute.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                The airside environment is the most demanding fleet operation in existence —
                tight turnaround windows, dense vehicle traffic, and zero tolerance for delays.
                FleetInfinity brings real-time visibility to every ground support vehicle.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <FadeIn delay={0.05}>
              <div className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg" style={{ borderColor: accent + "22" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: accent, color: "#0f172a" }}>
                  <Plane className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">GSE Fleet Tracking</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Every tug, belt loader, stairs unit, fuel truck, and baggage cart is tracked in
                  real time across the apron. Geofences around each gate alert supervisors when the
                  correct equipment is in position for an arrival — and flag any vehicle that enters
                  a restricted area. Historical playback shows exactly which vehicles serviced each
                  turnaround, providing data for performance analysis and SLA verification.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg" style={{ borderColor: accent + "22" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: accent, color: "#0f172a" }}>
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">Turnaround Analytics</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Every aircraft turnaround generates a precise timeline: when the first vehicle
                  arrived, when each service was completed, and when the last unit cleared the
                  gate. The platform measures turn time per airline, per gate, per time of day —
                  and flags any delay at the individual vehicle level. Pattern analysis identifies
                  chronic bottlenecks, whether it is a specific fuel truck that is consistently late
                  or a gate where congestion is building during peak hours.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg" style={{ borderColor: accent + "22" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: accent, color: "#0f172a" }}>
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">Operator & Safety Compliance</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Airside driving requires rigorous credentialing. FleetInfinity links operator
                  authentication to airside permits, expiry dates, and vehicle-specific
                  certifications. Only authorised operators can start a vehicle, and the platform
                  logs every trip against the operator's credentials. Expired or non-compliant
                  permits are flagged before the operator can begin a shift, and a complete audit
                  trail of airside movements is maintained for regulatory inspection.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MARITIME & GLOBAL TRACKING ═══════════════════ */}
      <section
        id="global-tracking"
        className="scroll-mt-24 relative py-20 sm:py-24 lg:py-28"
        style={{ clipPath: "inset(0)" }}
      >
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "#ecfeff",
            backgroundImage: `url('/images/elements/aviation-maritime.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem bottom 2rem",
            backgroundSize: "clamp(160px, 28vw, 380px)",
          }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Maritime & Global Tracking
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Vessels don't disappear when they leave the shore.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Once a vessel passes beyond cellular range, most tracking systems go silent.
                FleetInfinity uses a hybrid satellite mesh — Iridium, Inmarsat, and AIS — to
                maintain continuous visibility across every major shipping lane and anchorage
                worldwide.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Position reports arrive at configurable intervals — every 10 minutes in busy
                shipping channels, hourly on open-ocean crossings — so fleet managers always know
                where each vessel is, its speed, heading, and estimated time of arrival. When a
                vessel deviates from its planned route or enters a high-risk area, the platform
                alerts the operations team immediately.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                For inland waterways and coastal operations, the system seamlessly switches
                between cellular and satellite modes based on availability — ensuring continuous
                coverage without manual intervention or multiple logins.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Iridium + Inmarsat", "AIS Integration", "Global Coverage Map", "Route Deviation Alerts"].map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: accent + "33", color: "#0e7490", background: accent + "22" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border bg-white/80 p-3 shadow-2xl backdrop-blur" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-50">
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "15", background: "#ecfeff" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · global fleet
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { name: "MV Pacific Star", type: "Container", pos: "28°N 124°E", status: "Under Way", eta: "4d 6h", flag: "🇸🇬" },
                      { name: "MT Atlantic Spirit", type: "Tanker", pos: "14°S 76°W", status: "Under Way", eta: "2d 18h", flag: "🇵🇦" },
                      { name: "MV Northern Trader", type: "Bulk", pos: "52°N 4°E", status: "At Anchor", eta: "—", flag: "🇱🇷" },
                      { name: "CS Southern Star", type: "Container", pos: "36°N 12°W", status: "Under Way", eta: "5d 2h", flag: "🇲🇹" },
                      { name: "MT Gulf Venture", type: "Tanker", pos: "26°N 56°E", status: "Moored", eta: "—", flag: "🇦🇪" },
                    ].map((v) => (
                      <div key={v.name} className="flex items-center justify-between border-b pb-2 text-sm" style={{ borderColor: accent + "10" }}>
                        <div className="flex items-center gap-3">
                          <span className="text-base">{v.flag}</span>
                          <div>
                            <p className="font-semibold text-slate-900">{v.name}</p>
                            <p className="text-[10px] text-slate-400">{v.type} · {v.pos}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className={`font-semibold ${
                            v.status === "Under Way" ? "text-emerald-600" :
                            v.status === "At Anchor" ? "text-amber-600" : "text-slate-500"
                          }`}>{v.status}</span>
                          <span className="text-slate-500">{v.eta}</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-400 text-center pt-1">5 vessels · hybrid satellite + AIS · last sync 3m ago</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SMART CARGO SECURITY ═══════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <div className="rounded-[2rem] border bg-white p-3 shadow-2xl" style={{ borderColor: accent + "33" }}>
                <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <Image
                    src="/dashboard-screenshot.png"
                    alt="Smart cargo security dashboard"
                    width={1100}
                    height={760}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Smart Cargo Security
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Every container, lock, and movement — verified and recorded.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                High-value cargo crossing international borders faces risk at every handoff.
                FleetInfinity's IoT electronic seals replace traditional plastic or metal seals
                with tamper-proof devices that report their status in real time.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Each seal continuously monitors the container door: if it is opened without
                authorisation, the seal generates an immediate alert with GPS coordinates and
                timestamp. Seals can be locked and unlocked remotely, eliminating the need for
                physical key management across global supply chains. Authorisation chains ensure
                that only designated parties at specific locations can open a container.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                The complete chain of custody — every open and close event, by whom, at what
                location, and for how long — is recorded in an immutable audit log. Customs
                authorities and insurers can access the history on demand, reducing inspection
                delays and supporting cargo insurance claims with objective data.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["IoT Electronic Seals", "Remote Lock/Unlock", "Tamper Alerts", "Chain of Custody Log"].map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: accent + "33", color: "#0e7490", background: accent + "22" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMPLIANCE & ANALYTICS ═══════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#042f2e" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 70% 30%, ${accent}10, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Compliance & Analytics
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Documentation that crosses borders as easily as your cargo.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                International aviation and maritime operations generate more paperwork than any
                other transport sector. FleetInfinity automates compliance documentation so your
                team can focus on moving cargo rather than filing forms.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                Automated retention policies keep data for the required duration per jurisdiction —
                and no longer. Compliance reports for customs authorities, port state control, and
                aviation regulators can be generated with a single click, drawing on position logs,
                cargo events, operator records, and maintenance history.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                Operations analytics convert raw tracking data into actionable intelligence:
                port dwell time analysis, fuel consumption trends per vessel, turnaround
                efficiency benchmarks, and route performance comparisons. Dashboards are
                configurable per role — fleet managers see cost and utilisation, operations
                teams see real-time status, and executives see strategic KPIs.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
                {[
                  { v: "ISO", l: "Compliant Reporting" },
                  { v: "Auto", l: "Data Retention" },
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
                  <div className="border-b px-5 py-3 flex items-center gap-2" style={{ borderColor: accent + "22", background: "#0f3d3a" }}>
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-mono font-semibold tracking-wide text-slate-400">
                      fleet-infinity.io · operations
                    </span>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      { metric: "Avg Vessel Dwell", value: "3.2 days", change: "-12% vs Q1", dir: "down" },
                      { metric: "Turnaround Time", value: "47 min", change: "-8% vs Q1", dir: "down" },
                      { metric: "Cargo Events", value: "1,247", change: "+22% vs Q1", dir: "up" },
                      { metric: "Fleet Utilisation", value: "84%", change: "+6% vs Q1", dir: "up" },
                    ].map((k) => (
                      <div key={k.metric} className="flex items-center justify-between border-b pb-2 text-sm" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                        <p className="font-semibold text-white">{k.metric}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-300">{k.value}</span>
                          <span className={`text-xs font-semibold ${k.dir === "up" ? "text-emerald-400" : "text-rose-400"}`}>{k.change}</span>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] font-mono text-slate-500 text-center pt-1">Q2 2026 · consolidated operations</p>
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
                Measurable impact across air and sea operations.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <FadeIn delay={0.05}>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Aviation and maritime operators using FleetInfinity report measurable gains in
                turnaround efficiency, cargo security, and global fleet visibility.
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">-20%</p>
                  <p className="mt-1 font-bold text-slate-900">Turnaround Time</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Real-time GSE tracking and bottleneck analysis reduce aircraft ground time.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">99.9%</p>
                  <p className="mt-1 font-bold text-slate-900">Tracking Uptime</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Hybrid satellite + cellular architecture ensures continuous global coverage.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border p-6" style={{ borderColor: accent + "22" }}>
                  <p className="text-3xl font-black text-slate-900">-35%</p>
                  <p className="mt-1 font-bold text-slate-900">Cargo Incidents</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    IoT seals and tamper detection reduce theft and unauthorised access events.
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
                Metrics based on aggregate data from aviation and maritime deployments globally.
                Your results may vary based on fleet size, routes, and operational profile.
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
              Ready to connect your global fleet?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              See how FleetInfinity can help you manage ground-support equipment, track vessels
              across international waters, and secure high-value cargo from departure to delivery.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 font-bold shadow-lg transition"
                style={{ background: accent, color: "#0f172a" }}
                onMouseEnter={e => { e.currentTarget.style.filter = "brightness(0.9)"; e.currentTarget.style.color = "#0f172a" }}
                onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.color = "#0f172a" }}
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
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
