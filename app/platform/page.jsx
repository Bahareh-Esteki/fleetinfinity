import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bell,
  Brain,
  CheckCircle2,
  Code2,
  Fuel,
  Gauge,
  Lock,
  Map,
  MapPin,
  Network,
  Smartphone,
  Truck,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import RealDeviceCompatibilityShowcase from "../components/DeviceCompatibilityShowcase";
import { platformFeatures } from "@/data/platformFeatures";
import { HeroSection } from "./HeroSection";

const architectureLayers = [
  {
    title: "Hardware Layer",
    description: "GPS trackers, dashcams, sensors, equipment, trailers, and cargo.",
    items: ["GPS trackers", "Dashcams", "Sensors", "Assets"],
  },
  {
    title: "Intelligence Engine",
    description: "Continuous tracking, alerts, analytics, automation, and AI insights.",
    items: ["Tracking", "Alerts", "Analytics", "AI insights"],
  },
  {
    title: "Applications",
    description: "Interfaces where teams, clients, and partners act on live intelligence.",
    items: ["Web dashboard", "Mobile app", "Partner portal", "API"],
  },
];

const modules = [
  {
    name: "Live GPS Tracking",
    icon: MapPin,
    description: "Real-time location visibility for vehicles, assets, and mixed fleets.",
    bullets: ["Real-time map", "History playback", "Configurable refresh rates"],
  },
  {
    name: "Geofencing & Zone Alerts",
    icon: Bell,
    description: "Create zones and trigger instant alerts when assets enter or exit.",
    bullets: ["Custom zones", "Entry and exit alerts", "Location-based workflows"],
  },
  {
    name: "Driver Behaviour Monitoring",
    icon: Gauge,
    description: "Score risky driving patterns and coach safer performance.",
    bullets: ["Harsh braking", "Speeding and idling", "Safety leaderboards"],
  },
  {
    name: "Video Telematics",
    icon: Video,
    description: "Connect dashcam events to the moments that matter.",
    bullets: ["Dashcam integration", "Incident clips", "In-cab event recording"],
  },
  {
    name: "Fuel Monitoring",
    icon: Fuel,
    description: "Track fuel usage, detect anomalies, and report cost trends.",
    bullets: ["Consumption analytics", "Anomaly detection", "Cost reporting"],
  },
  {
    name: "Maintenance Scheduling",
    icon: Wrench,
    description: "Prevent downtime with service alerts and maintenance history.",
    bullets: ["Mileage-based alerts", "Hour/time-based schedules", "Service history and DVIR"],
  },
  {
    name: "Asset Tracking",
    icon: Truck,
    description: "Track equipment, trailers, cargo, and non-vehicle assets.",
    bullets: ["Shared fleet map", "Asset status", "Zone alerts"],
  },
  {
    name: "Mobile App",
    icon: Smartphone,
    description: "Personal car and asset tracking for iOS and Android users.",
    bullets: ["Live location", "Trip history", "Zone alerts"],
  },
  {
    name: "Partner Management Portal",
    icon: Users,
    description: "White-label hub for client, branding, and subscription management.",
    bullets: ["Manage clients", "Branding controls", "Billing visibility"],
    badge: "Partner-ready",
  },
  {
    name: "API & Webhooks",
    icon: Code2,
    description: "Connect FleetInfinity to your own products and workflows.",
    bullets: ["REST API", "Webhook support", "Custom integrations"],
    badge: "API-first",
  },
  {
    name: "AI-Powered Insights",
    icon: Brain,
    description: "Detect patterns, anomalies, and risks before they become costs.",
    bullets: ["Anomaly detection", "Predictive alerts", "Usage pattern analysis"],
  },
];

const comparisonCards = [
  {
    title: "Web Platform",
    icon: Map,
    forText: "Fleet managers, dispatchers, operations teams.",
    access: "Browser-based, any device.",
    capabilities: [
      "Full fleet map",
      "Driver behaviour",
      "Reporting",
      "Partner portal",
      "API access",
    ],
  },
  {
    title: "Mobile App",
    icon: Smartphone,
    forText: "Individual users tracking personal vehicles or assets.",
    access: "iOS & Android.",
    capabilities: ["Live location", "Trip history", "Zone alerts", "Asset tracking"],
    note: "This is the personal tracking app.",
  },
];

const apiPills = [
  "REST API",
  "Webhooks",
  "Real-time data streams",
  "Asset management endpoints",
  "User & tenant management",
  "Rate-limited, authenticated access",
];

const infrastructurePillars = [
  {
    title: "Uptime",
    icon: Activity,
    text: "99.9% SLA",
  },
  {
    title: "Data Sovereignty",
    icon: Network,
    text: "Your data stays in your region. No cross-border transfers without consent.",
  },
  {
    title: "Security",
    icon: Lock,
    text: "Encrypted in transit and at rest. Role-based access control. Audit logs.",
  },
];

const maturitySignals = [
  { value: "15+", label: "Years of R&D" },
  { value: "151+", label: "Device integrations" },
  { value: "Microservices", label: "Horizontally scalable" },
  { value: "24/7", label: "Support" },
];

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

function ArchitectureSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Unified Architecture"
          title="One connected system — from hardware to intelligence to action."
          description="FleetInfinity is built on three layers: a device-agnostic data ingestion layer that works with 151+ hardware devices; a real-time intelligence layer where tracking, alerts, analytics, and AI insights run continuously; and an application layer — the web platform, mobile app, and white-label partner portal — where your teams and clients act on that intelligence."
        />

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-xl shadow-slate-200/70 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {architectureLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="relative rounded-3xl border border-white bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green/10 font-black text-brand-green">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">
                      {layer.title}
                    </h3>
                    <p className="text-sm text-slate-500">{layer.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section
      id="platform-modules"
      className="scroll-mt-24 bg-slate-50 py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything your fleet operation needs — in one place."
          description="Each module works standalone or as part of the full platform. All included in every partner deployment."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                    <Icon className="h-6 w-6" />
                  </div>
                  {module.badge ? (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {module.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl font-extrabold text-slate-950">
                  {module.name}
                </h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {module.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 flex-none text-brand-green" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-dashed border-brand-green/50 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
            Coming soon
          </p>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
            Driver App · Phone Tracker App
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            In development. Join the early access list.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Join early access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SpotlightSections() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-28">
          {platformFeatures.map((feature, index) => (
            <article
              key={feature.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-3 shadow-2xl shadow-slate-200/70">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={1100}
                  height={760}
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
                  {feature.label}
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {feature.description}
                </p>
                <ul className="mt-7 space-y-4">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-brand-green" />
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSplitSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Product Split
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Two products. One connected platform.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            FleetInfinity separates fleet operations from personal tracking, so
            every user gets the right experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {comparisonCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur sm:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold">{card.title}</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm font-bold text-emerald-200">For</p>
                    <p className="mt-2 text-slate-300">{card.forText}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm font-bold text-emerald-200">Access</p>
                    <p className="mt-2 text-slate-300">{card.access}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {card.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      {capability}
                    </li>
                  ))}
                </ul>
                {card.note ? (
                  <p className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100">
                    {card.note}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center">
          <p className="font-bold text-white">
            Driver App — for professional drivers (in development)
          </p>
          <p className="mt-2 font-bold text-white">
            Phone as Tracker — use a smartphone as a tracking device (in
            development)
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center text-sm font-bold text-emerald-300 hover:text-emerald-200"
          >
            Join early access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ApiSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-xl shadow-blue-100/70 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <Code2 className="h-10 w-10" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Built to connect. API-first by design.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Every feature in FleetInfinity is accessible via our REST API.
              Stream live tracking data, trigger alerts, manage users and
              assets, and build custom integrations — all via documented
              endpoints with webhook support.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {apiPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-bold text-blue-700"
                >
                  {pill}
                </span>
              ))}
            </div>
            <Link
              href="/api"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              View API Reference
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Enterprise-grade infrastructure. Built for reliability."
          description="Fleet buyers and partners need confidence before they connect critical operations. FleetInfinity is designed for uptime, controlled data movement, and secure access."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {infrastructurePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MaturitySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
              Product Depth
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              15+ years of R&D. Not a startup. Not a pivot.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              FleetInfinity is the result of over 15 years of telematics
              research and platform development. Every feature — from our
              real-time tracking engine to the AI anomaly detection layer — was
              built to solve real fleet problems at scale, not to check a
              feature-list box.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              That depth shows in the platform&apos;s reliability, the breadth
              of hardware support, and the partner management tools that
              enterprise resellers actually need.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {maturitySignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-3xl font-black text-brand-dark-blue">
                  {signal.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCtaSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(88,193,93,0.22),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.04))] p-6 text-center shadow-2xl shadow-black/20 sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Partner Program
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Launch your fleet business on FleetInfinity.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            White-label the full platform under your brand. Manage your clients
            from a dedicated partner portal. Set your own pricing. We handle the
            infrastructure — you own the revenue.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?type=partner"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-7 py-4 font-bold text-white transition hover:bg-brand-green-dark sm:w-auto"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact?type=partner"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/15 sm:w-auto"
            >
              Download Partner Deck
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          Ready to see FleetInfinity in action?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Book a walkthrough for your fleet operation or talk to our partner
          team about launching under your own brand.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-7 py-4 font-bold text-white transition hover:bg-brand-green-dark sm:w-auto"
          >
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contact?type=partner"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-slate-50 sm:w-auto"
          >
            Talk to Partner Team
          </Link>
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 text-sm font-bold text-brand-dark-blue sm:flex-row">
          <Link href="/hardware/device-search" className="hover:text-brand-green">
            Browse supported devices
          </Link>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <Link href="/api" className="hover:text-brand-green">
            View API Reference
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PlatformOverviewPage() {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />
      <ArchitectureSection />
      <ModulesSection />
      <SpotlightSections />
      <ProductSplitSection />
      
      <ApiSection />
      
      <MaturitySection />
     
      <FinalCtaSection />
    </main>
  );
}
