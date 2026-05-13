"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  "99.9% Uptime SLA",
  "151+ Compatible Devices",
  "Hardware Agnostic",
  "API-First Architecture",
];

export function HeroSection() {
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

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(88,193,93,0.24),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.28),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_46%,_#003366_100%)]"
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
              className="mb-5 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200"
              variants={itemVariants}
            >
              Unified fleet intelligence platform
            </motion.p>

            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              One Platform. Every Asset.{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                Total Control.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
              variants={itemVariants}
            >
              From live GPS and driver behaviour to fuel analytics, maintenance,
              and a full white-label partner portal — FleetInfinity delivers
              every layer of fleet intelligence in a single, API-first platform.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              variants={itemVariants}
            >
              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-brand-green-dark sm:w-auto"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#platform-modules"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto"
              >
                Explore Modules ↓
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl"
              variants={itemVariants}
            >
              {stats.map((stat) => (
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
            <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-emerald-950/30 backdrop-blur">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <Image
                  src="/dashboard-screenshot.png"
                  alt="FleetInfinity live fleet web dashboard"
                  width={1400}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <p className="px-2 pt-3 text-center text-sm text-slate-300">
                Live fleet view — web dashboard
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
