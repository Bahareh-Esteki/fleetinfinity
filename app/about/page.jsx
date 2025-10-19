"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Globe,
  Code,
  BarChart3,
  SatelliteDish,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

// --- Animated Stats Section ---
const AnimatedStats = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            icon: <Globe className="w-12 h-12 text-brand-green mb-2" />,
            stat: "60+",
            desc: "Countries Served Worldwide",
          },
          {
            icon: <BarChart3 className="w-12 h-12 text-brand-dark-blue mb-2" />,
            stat: "5M+",
            desc: "Trips Monitored",
          },
          {
            icon: <ShieldCheck className="w-12 h-12 text-brand-green mb-2" />,
            stat: "99.99%",
            desc: "Average Uptime",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-slate-100 rounded-lg shadow-md px-8 py-8 min-w-[220px] flex flex-col items-center"
          >
            {s.icon}
            <span className="text-4xl font-extrabold text-brand-dark-blue">
              {s.stat}
            </span>
            <span className="text-slate-600 mt-1 font-medium">{s.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Vision/Mission Section ---
const VisionMissionSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-slate-50">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4"
        >
          Vision & Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg text-slate-700 mb-6 max-w-xl"
        >
          Our vision is to redefine fleet and asset management for a connected,
          intelligent world. <br />
          Our mission is to empower organizations of every size with secure,
          scalable, and intuitive technology that transforms vehicles, assets,
          and operations into sources of actionable insight and sustainable
          growth.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          className="space-y-3 text-brand-dark-blue font-semibold"
        >
          {[
            "AI-driven automation & analytics",
            "Enterprise-grade security",
            "Effortless user experience",
            "Mission-critical reliability",
            "Global interoperability",
          ].map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.24 + idx * 0.06 }}
              className="flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-brand-green rounded-full mr-2" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="rounded-2xl shadow-2xl overflow-hidden"
      >
        <Image
          src="/images/vision-mission-illustration.jpg"
          alt="Vision and Mission Illustration"
          width={560}
          height={370}
          className="object-cover"
        />
      </motion.div>
    </div>
  </section>
);

// --- Product Innovation Section ---
const InnovationSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-8 text-center">
        Technology That Sets You Free
      </h2>
      <p className="text-lg text-slate-700 mb-16 max-w-2xl mx-auto text-center">
        Forget rigid, legacy platforms. Our technology is cloud-native,
        future-proofed, and relentlessly user-focused—so you can focus on what
        matters, not on managing software.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            Icon: SatelliteDish,
            title: "Seamless Real-Time Data",
            desc: "Instantly collect and process millions of touchpoints from vehicles, assets, and environments across the globe—with zero data silos.",
          },
          {
            Icon: HeartHandshake,
            title: "Proven Impact",
            desc: "Trusted by enterprises, startups, and public sector fleets on five continents to drive measurable safety, savings, and sustainability.",
          },
          {
            Icon: BarChart3,
            title: "Intelligent Insights",
            desc: "Transform raw data into reliable, actionable intelligence tailored to your operation—with powerful automations and intuitive dashboards.",
          },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 + idx * 0.12 }}
            className="bg-slate-50 rounded-lg shadow-lg p-8 text-center hover:scale-[1.025] transition-transform"
          >
            <item.Icon className="mx-auto w-12 h-12 text-brand-green mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-brand-dark-blue">
              {item.title}
            </h3>
            <p className="text-base text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Values/Culture Section ---
const ValuesSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-8 text-center">
        What Makes Us Different
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          {
            icon: <Zap className="mx-auto w-12 h-12 text-brand-green mb-2" />,
            title: "Relentless Innovation",
            desc: "We build, test, and launch at the speed of your needs. Never standing still, always one step ahead.",
          },
          {
            icon: (
              <ShieldCheck className="mx-auto w-12 h-12 text-brand-green mb-2" />
            ),
            title: "Security by Default",
            desc: "Zero compromise on your data—every feature is designed with global-grade security architecture from the start.",
          },
          {
            icon: <Code className="mx-auto w-12 h-12 text-brand-green mb-2" />,
            title: "Open, Flexible Platform",
            desc: "Integrate, customize, and extend your experience through open APIs, modern SDKs, and a modular design.",
          },
          {
            icon: <Globe className="mx-auto w-12 h-12 text-brand-green mb-2" />,
            title: "Global Perspective",
            desc: "Solutions built to empower organizations everywhere, fit for local nuances and international demands.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow text-center"
          >
            {item.icon}
            <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
              {item.title}
            </h4>
            <p className="text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Social Proof / Testimonials ---
const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-extrabold mb-8 text-center">
        Hear from Our Clients
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-slate-50 p-8 rounded-lg shadow-md max-w-md"
        >
          “FleetInfinity makes every aspect of vehicle management smarter. Their
          platform reclaimed my team’s time and improved safety overnight.”
          <span className="block mt-3 text-brand-green font-semibold">
            – North America Fleet Operations Manager
          </span>
        </motion.blockquote>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bg-slate-50 p-8 rounded-lg shadow-md max-w-md"
        >
          “Powerful, easy-to-use APIs and the security standards we require.
          It's a real catalyst for digital transformation.”
          <span className="block mt-3 text-brand-green font-semibold">
            – European Systems Integration Lead
          </span>
        </motion.blockquote>
      </div>
    </div>
  </section>
);

// --- Call To Action ---
const CtaSection = () => (
  <section className="bg-brand-dark-blue py-20 text-white text-center">
    <div className="container mx-auto px-4">
      <Code className="mx-auto w-12 h-12 text-brand-green mb-4" />
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Ready to Experience a New Standard?
      </h2>
      <p className="text-lg text-brand-light-blue mb-8 max-w-2xl mx-auto">
        See why forward-thinking organizations trust FleetInfinity for
        mission-critical visibility and automation.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
      >
        Request a Demo <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
);

// --- Main About Page ---
export default function AboutPage() {
  return (
    <>
      {/* Modern, impactful hero with animation */}
      <header className="relative z-10 bg-brand-dark-blue text-white text-center py-32 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Unburdened by Legacy.
            <br />
            <span className="text-brand-green">Driven by Innovation.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-light-blue">
            Welcome to FleetInfinity: The new standard for secure, intelligent,
            and truly effortless fleet management.
          </p>
        </motion.div>
        {/* Animated SVG background grid, optional */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(169,192,209,0.4)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
          }}
        />
      </header>
      <AnimatedStats />
      <VisionMissionSection />
      <InnovationSection />
      <ValuesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
