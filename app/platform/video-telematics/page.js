"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Video,
  Eye,
  Shield,
  Bell,
  Car,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  Play,
  Clock,
  Zap,
  BarChart3,
  MapPin,
  ChevronDown,
  Users,
  Truck,
  Building,
  Fuel,
  Route,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

function FadeInSection({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(88,193,93,0.2),_transparent_34%),radial-gradient(circle_at_20%_80%,_rgba(0,51,102,0.35),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_46%,_#003366_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.p
              className="mb-5 inline-flex rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green"
              variants={itemVariants}
            >
              Video Telematics
            </motion.p>

            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              See Every Road.{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-light-blue bg-clip-text text-transparent">
                Know Every Driver. Protect Every Asset.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
              variants={itemVariants}
            >
              FleetInfinity's video telematics module combines AI-powered
              dashcam intelligence with live fleet data — giving you irrefutable
              visibility into what happens inside and outside your vehicles, in
              real time.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              variants={itemVariants}
            >
              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-7 py-4 text-base font-bold text-white shadow-lg shadow-brand-green/30 transition hover:bg-brand-green-dark sm:w-auto"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#why-it-matters"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
              >
                Explore Features ↓
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-2xl"
              variants={itemVariants}
            >
              {[
                "Up to 8 Camera Channels per vehicle",
                "Continuous Recording on SD Card",
                "Violation Footage Uploaded to Cloud",
              ].map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-4 text-center text-sm font-semibold text-slate-100 backdrop-blur"
                >
                  {stat}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-brand-green/10 backdrop-blur">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <Image
                  src="/dashboard-screenshot.png"
                  alt="Multi-camera live view dashboard screenshot"
                  width={1400}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <p className="px-2 pt-3 text-center text-sm text-slate-300">
                Multi-camera live view dashboard
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  const cards = [
    {
      problem: "Accidents and near-misses go unverified",
      solution:
        "Incident clips automatically saved and linked to GPS events for instant review.",
      icon: AlertTriangle,
    },
    {
      problem: "Risky driver behaviour is invisible until it's too late",
      solution:
        "AI detects fatigue, distraction, and harsh driving in real time — with in-cab audio alerts.",
      icon: Eye,
    },
    {
      problem: "False claims expose your business to liability",
      solution:
        "Violation footage is automatically uploaded to the cloud, providing irrefutable evidence to protect drivers and operators.",
      icon: Shield,
    },
  ];

  return (
    <section id="why-it-matters" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why it matters"
          title="GPS tracking tells you where. Video telematics tells you why."
          description="Location data alone leaves critical gaps. A vehicle arrived late — but why? An accident occurred — but who was at fault? A driver's score dropped — but what exactly happened on that trip?"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-600">
          Video telematics closes the gap. By combining continuous video
          recording with GPS, speed, acceleration, and AI event detection,
          FleetInfinity gives fleet operators a complete picture of every
          journey — not just the coordinates.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-600">
          For fleet businesses in the Gulf region, where road safety compliance,
          cargo liability, and driver accountability are central concerns, the
          value is immediate and measurable.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeInSection key={card.problem} delay={i * 0.1}>
                <article className="group relative h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-500">
                    Problem
                  </p>
                  <h3 className="text-base font-bold text-slate-950">
                    {card.problem}
                  </h3>
                  <div className="my-4 h-px bg-slate-100" />
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-green">
                    Solution
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    {card.solution}
                  </p>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      icon: Camera,
      description:
        "Dual-channel dashcams record continuously onto the vehicle's SD card — the road ahead and the driver simultaneously. G-sensor events trigger automatic clip saves. Up to 8 camera channels supported per vehicle for full-surround coverage.",
    },
    {
      number: "02",
      title: "Detect",
      icon: Zap,
      description:
        "AI algorithms analyse the live video feed in real time. ADAS monitors road-facing risks — forward collisions, lane departure, tailgating. DMS monitors the driver — fatigue, distraction, phone use, seatbelt status. Alerts fire instantly, in-cab and to the platform.",
    },
    {
      number: "03",
      title: "Act",
      icon: MapPin,
      description:
        "Fleet managers see alerts on the live tracking map the moment they trigger. Violation clips are automatically uploaded to the cloud, tagged, and linked to the relevant trip. Review, download, or share footage directly from the platform. Continuous recording remains on the vehicle's SD card for local access.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Three layers. One unified view."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeInSection key={step.title} delay={i * 0.12}>
                <div className="relative flex flex-col items-center text-center">
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-[2.75rem] left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-px z-0"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 border-t border-dashed border-slate-300" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <ArrowRight className="h-4 w-4 text-brand-light-blue" />
                      </div>
                    </div>
                  )}
                  <div className="relative z-10 mb-6">
                    <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-dark-blue text-[11px] font-bold text-white shadow">
                      {i + 1}
                    </span>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-brand-dark-blue group-hover:ring-brand-dark-blue">
                      <Icon className="h-9 w-9 text-brand-dark-blue" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const capabilityModules = [
  {
    id: "live-video",
    label: "Live Video Monitoring",
    headline: "Watch your fleet in real time. From anywhere.",
    body: "Monitor live camera feeds directly from the FleetInfinity dashboard — no separate app, no switching screens. View multiple vehicles simultaneously with a centralised multi-camera display. Live audio streaming is supported where hardware permits.",
    points: [
      "Multi-camera live view (up to 8 channels per vehicle)",
      "Real-time video streaming over 4G/LTE",
      "Live audio monitoring",
      "Centralized monitoring across your entire fleet",
      "Camera health status — online, offline, or malfunctioning flagged instantly",
    ],
    icon: Monitor,
    image: "/dashboard-screenshot.png",
  },
  {
    id: "adas",
    label: "ADAS — Road Safety Intelligence",
    headline: "Catch road risks before they become accidents.",
    body: "The Advanced Driver Assistance System (ADAS) layer analyses the road-facing camera feed continuously. When a potentially dangerous situation is detected, the system triggers an in-cab audio alert — giving the driver a chance to correct their behaviour on the spot, before an incident occurs.",
    points: [
      "Forward collision warning",
      "Lane departure warning",
      "Tailgating / unsafe following distance",
      "Pedestrian detection in danger zone",
      "Overspeeding (linked to GPS speed data)",
      "Traffic sign recognition (speed limit, stop signs)",
    ],
    icon: Car,
    image: "/dashboard-screenshot.png",
  },
  {
    id: "dms",
    label: "DMS — Driver Monitoring System",
    headline: "Know when your driver needs intervention — before it's too late.",
    body: "The Driver Monitoring System (DMS) watches the driver-facing camera for signs of compromised attention or fitness to drive. AI detects subtle cues — eye closure, head position, phone in hand — and triggers immediate alerts. This is particularly critical for long-haul routes, night-time driving, and high-value cargo operations common across the Gulf region.",
    points: [
      "Driver fatigue / microsleep detection",
      "Distracted driving (looking away from road)",
      "Mobile phone usage while driving",
      "Seatbelt non-compliance",
      "Smoking detection",
      "Driver face recognition (log who is driving each vehicle)",
    ],
    icon: Eye,
    image: "/dashboard-screenshot.png",
  },
  {
    id: "incident",
    label: "Incident Management & Playback",
    headline: "Every incident, verified in seconds.",
    body: "When an event is flagged — whether by an ADAS/DMS alert, a G-sensor impact, or a manual review request — FleetInfinity lets you access the relevant footage instantly. Continuous video recording is stored locally on the vehicle's SD card. When a violation or incident is detected, the relevant clip is automatically uploaded to the cloud, tagged to the trip, and linked to GPS position and speed data at the time of the event.",
    points: [
      "60-second instant replay on any flagged event",
      "Violation clips automatically uploaded to cloud storage",
      "Video playback accessible directly from trip and ignition reports",
      "TF/SD card removal alerts to protect stored footage",
      "Downloadable clips for legal, insurance, or HR use",
    ],
    icon: Play,
    image: "/dashboard-screenshot.png",
  },
  {
    id: "driver-scoring",
    label: "Driver Performance & Scoring",
    headline: "Turn data into coaching. Coaching into culture.",
    body: "FleetInfinity aggregates ADAS and DMS events alongside harsh driving data into per-driver safety scores. Fleet managers can identify top performers, spot repeated risk patterns, and prioritise coaching for the drivers who need it most. Video evidence makes the coaching conversation specific and fair — not subjective.",
    points: [
      "Per-driver safety score and ranking",
      "Alert type distribution (which events occur most frequently)",
      "Harsh event timeline — braking, acceleration, cornering",
      "Event heat map — where unsafe driving happens most on your network",
      "Fleet-wide average score for partner-level reporting",
      "Top risky driver visibility — immediate flag for follow-up",
    ],
    icon: BarChart3,
    image: "/dashboard-screenshot.png",
  },
  {
    id: "analytics",
    label: "Fleet Analytics Dashboard",
    headline: "The operational view your management team needs.",
    body: "Beyond individual incidents, FleetInfinity's video telematics dashboard gives operations and safety managers a fleet-wide view — customisable, exportable, and integrated with all other platform data.",
    points: [
      "Alert vs distance graph (risk relative to kilometres driven)",
      "Seatbelt compliance rate across fleet",
      "Alert type distribution breakdown",
      "Overspeeding frequency by vehicle and driver",
      "Customisable widget layout per user role",
    ],
    icon: BarChart3,
    image: "/dashboard-screenshot.png",
  },
];

function CoreCapabilitiesSection() {
  return (
    <section id="capabilities" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core capabilities"
          title="Everything you need to run a safer, more accountable fleet."
        />

        <div className="mt-12 space-y-20 lg:space-y-28">
          {capabilityModules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <FadeInSection key={mod.id} delay={index * 0.05}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-3 shadow-2xl shadow-slate-200/70">
                    <Image
                      src={mod.image}
                      alt={mod.label}
                      width={1100}
                      height={760}
                      className="h-auto w-full rounded-[1.4rem] object-cover"
                    />
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
                      {mod.label}
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                      {mod.headline}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                      {mod.body}
                    </p>
                    <ul className="mt-7 space-y-4">
                      {mod.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-brand-green" />
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HardwareSection() {
  const supportedTypes = [
    "Single-channel forward-facing dashcams",
    "Dual-channel dashcams (road + driver facing)",
    "Multi-camera MDVR systems (up to 8 channels)",
    "AI-enabled cameras with on-device ADAS/DMS processing",
    "4G/LTE connected devices for live streaming",
  ];

  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
            Hardware
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Works with the cameras you have — or the ones you choose.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            FleetInfinity is hardware agnostic. The video telematics module
            integrates with dashcams and MDVRs from a wide range of
            manufacturers. Whether you're equipping a new fleet or adding video
            capability to existing vehicles, there's no forced hardware purchase
            and no proprietary lock-in.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
            <p className="mb-6 text-sm font-bold uppercase tracking-wider text-brand-green">
              We support
            </p>
            <ul className="space-y-4">
              {supportedTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-green" />
                  <span className="text-slate-200">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/hardware/device-search"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
          >
            Browse Full Device Compatibility List
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndustryUseCasesSection() {
  const industries = [
    {
      title: "Logistics & Freight",
      icon: Truck,
      description:
        "Long-haul drivers, high-value cargo, and multiple handoff points create accountability gaps. Video telematics records every leg, verifies cargo condition at loading and unloading, and provides instant evidence in case of damage claims.",
    },
    {
      title: "Construction & Heavy Equipment",
      icon: Building,
      description:
        "Site access, reversing incidents, and unauthorised vehicle use are common risks. Multi-camera MDVR coverage gives visibility around blind spots and protects against false liability claims.",
    },
    {
      title: "Passenger Transport & Bus Fleets",
      icon: Users,
      description:
        "Driver fatigue on fixed routes is a serious risk. DMS alerts keep drivers engaged, and in-cab footage protects operators in the event of passenger complaints or incidents.",
    },
    {
      title: "Oil & Gas / Energy",
      icon: Fuel,
      description:
        "High-value, high-risk operations where driver behaviour and vehicle safety are non-negotiable. Video evidence supports regulatory compliance and internal safety audits.",
    },
    {
      title: "Cash-in-Transit & Security",
      icon: Shield,
      description:
        "Continuous in-cab and exterior recording provides an auditable record of every journey — critical for insurance, regulatory requirements, and internal accountability.",
    },
    {
      title: "Delivery & Last-Mile",
      icon: Route,
      description:
        "Prove delivery, verify driver conduct, and protect against fraudulent damage claims. Link video clips to delivery events for a complete operational record.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industry use cases"
          title="Built for the sectors where it matters most."
          description="Video telematics delivers different value in different operations. Here's where FleetInfinity's solution makes the biggest impact across Gulf and regional industries."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeInSection key={ind.title} delay={i * 0.06}>
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {ind.description}
                  </p>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerAdvantageSection() {
  const partnerBenefits = [
    "Video telematics presented under your white-label platform — no FleetInfinity branding visible to your clients",
    "Per-client configuration of camera channels, alert thresholds, and storage settings",
    "Multi-tenant dashboard to monitor video health and alert activity across all your client fleets",
    "API access to stream event data and clips into your own reporting tools",
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeInSection>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
              For partners
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              White-label video telematics. Your brand, your clients.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              FleetInfinity's video telematics module is fully included in every
              white-label partner deployment. Your clients get the full
              capability — live monitoring, ADAS/DMS alerts, incident playback,
              driver scoring — all under your brand and domain.
            </p>
            <ul className="mt-7 space-y-4">
              {partnerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-brand-green" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-7 py-4 font-bold text-white transition hover:bg-brand-green-dark"
              >
                Become a Partner
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
              <Image
                src="/dashboard-screenshot.png"
                alt="Partner portal showing multi-client video dashboard"
                width={1100}
                height={760}
                className="h-auto w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {
      value: "Up to 82%",
      label: "Improvement in driver safety scores",
      source: "Industry benchmark (Automotive Fleet research)",
    },
    {
      value: "60%",
      label: "Reduction in speeding-related fines",
      source: "Customer outcome across MENA region deployments",
    },
    {
      value: "94%",
      label: "Of accidents involve driver error",
      source: "NHTSA — underpins the case for DMS/ADAS",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The impact"
          title="The numbers behind safer fleets."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.1}>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-4xl font-black text-brand-dark-blue sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg font-bold text-slate-900">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {stat.source}
                </p>
              </article>
            </FadeInSection>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-400">
          Use these as placeholder stats — replace with your own data or
          verified industry figures when available. Do not publish unverified
          statistics.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "What is the difference between ADAS and DMS?",
      a: "ADAS (Advanced Driver Assistance System) monitors the road ahead — detecting collision risks, lane departures, tailgating, and speed violations using the forward-facing camera. DMS (Driver Monitoring System) monitors the driver — detecting fatigue, distraction, phone use, and seatbelt compliance using the driver-facing camera. FleetInfinity supports both simultaneously.",
    },
    {
      q: "How long is footage stored?",
      a: "Continuous video recording is stored locally on the vehicle's SD card and can be accessed directly from the device. Violation and incident clips are automatically uploaded to the cloud — storage duration depends on your subscription tier. Clips can be downloaded at any time for legal, insurance, or HR purposes.",
    },
    {
      q: "Can I download incident clips for insurance or legal use?",
      a: "Yes. Any flagged incident clip can be downloaded directly from the platform. Clips are linked to GPS data, speed at the time of the event, and driver identity — providing a complete, legally usable record.",
    },
    {
      q: "Does FleetInfinity support live video streaming?",
      a: "Yes. Live streaming is available for connected cameras directly from the fleet dashboard. Multiple feeds can be viewed simultaneously. Data usage depends on stream quality and connection type.",
    },
    {
      q: "What cameras and dashcams are compatible?",
      a: "FleetInfinity is hardware agnostic — we integrate with a wide range of dashcam and MDVR manufacturers. Check our supported device list or contact us if you have specific hardware already deployed.",
    },
    {
      q: "Can we use video telematics through the API?",
      a: "Yes. Video event data, alert feeds, and clip metadata are accessible via the FleetInfinity REST API. Partners can pipe this data into their own platforms, reporting tools, or third-party integrations.",
    },
    {
      q: "Is the video telematics module included in the white-label platform?",
      a: "Yes. The full video telematics module is available to all FleetInfinity white-label partners. Your clients access it under your brand with no FleetInfinity branding.",
    },
    {
      q: "What happens if a camera goes offline or the SD card is removed?",
      a: "FleetInfinity monitors camera health in real time. If a camera goes offline, malfunctions, or the storage card is removed, the platform immediately flags the issue on the dashboard and can trigger an alert to the fleet manager. This ensures you're always aware if continuous recording has been interrupted or if critical violation evidence may have been compromised.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
            Frequently asked questions
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Everything you need to know about video telematics.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
              >
                <span className="pr-4 text-base font-bold text-slate-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-100 px-6 py-5">
                      <p className="text-base leading-7 text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          Ready to see your fleet in a new light?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Book a demo and we'll walk you through the full video telematics
          module — live monitoring, ADAS/DMS alerts, incident playback, and
          driver scoring — in your own environment.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-7 py-4 font-bold text-white transition hover:bg-brand-green-dark sm:w-auto"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contact?type=partner"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-slate-50 sm:w-auto"
          >
            Talk to Our Partner Team
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          For resellers and white-label enquiries
        </p>
      </div>
    </section>
  );
}

export default function VideoTelematicsPage() {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <CoreCapabilitiesSection />
      <HardwareSection />
      <IndustryUseCasesSection />
      <PartnerAdvantageSection />
      <StatsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
