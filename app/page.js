"use client";

import React from "react";

import {
  ArrowRight,
  BarChart,
  CheckCircle,
  Cpu,
  Leaf,
  Shield,
  Truck,
  Users,
  SatelliteDish,
  BarChart3,
  Wrench,
  Building,
  Bus,
  Play,
  MapPin,
  Tractor,
  Newspaper,
  // Add these new imports:
  Zap,
  Clock,
  Smartphone,
  DollarSign,
  Brain,
  Heart,
  Car,
  PawPrint,
  Briefcase,
  Camera,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedHeroBackground from "./components/AnimatedHeroBackground"; // Adjust path if needed
import FaqSection from "./components/FaqSection";
import GPSFleetSolutions from "./components/HighlightsSection";
import AnimatedStatsPanel from "./components/AnimatedStatsPanel";
import MorphingPlatformShowcase from "./components/MorphingPlatformShowcase";
import RealDeviceCompatibilityShowcase from "./components/DeviceCompatibilityShowcase";
import IndustryCapabilitiesShowcase from "./components/IndustrySolutionsShowcase";
// Helper component for Stat Items
const StatItem = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl md:text-6xl font-extrabold text-white">{value}</p>
    <p className="text-lg text-gray-300 mt-2">{label}</p>
  </div>
);

// Helper component for Industry Cards
const IndustryCard = ({ icon, title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
    {React.cloneElement(icon, { className: "w-10 h-10 text-brand-green mb-4" })}
    <h4 className="font-bold text-lg text-brand-dark-blue">{title}</h4>
  </div>
);

// Helper component for Insight/Blog Cards
const InsightCard = ({ imageUrl, title, excerpt }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl text-brand-dark-blue mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link
        href="#"
        className="font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-2"
      >
        Read More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-brand-dark-blue text-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(169,192,209,0.3)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Clean Content */}
            <div className="space-y-8 max-w-2xl">
              {/* Simple Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green">
                Fleet Management Platform
              </div>

              {/* Clean Headlines */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Intelligent Fleet
                  <span className="block text-brand-green">Operations</span>
                </h1>
                <p className="text-xl text-brand-light-blue leading-relaxed">
                  Transform your fleet with real-time tracking, AI-powered
                  insights, and automated operations.
                  <span className="text-brand-green font-semibold">
                    {" "}
                    Reduce costs by 30%.
                  </span>
                </p>
              </div>

              {/* Simple CTAs */}
              <div className="flex gap-4 pt-4">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/platform-overview"
                  className="inline-flex items-center gap-2 text-brand-light-blue hover:text-white font-semibold px-8 py-4 rounded-xl border border-brand-light-blue/30 hover:border-brand-light-blue transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Platform Overview</span>
                </Link>
              </div>

              {/* Minimal Social Proof */}
              <div className="flex items-center gap-8 pt-8 border-t border-brand-light-blue/20">
                <div className="text-brand-light-blue">
                  <span className="font-bold text-white text-2xl">10,000+</span>
                  <div className="text-sm">vehicles managed</div>
                </div>
                <div className="text-brand-light-blue">
                  <span className="font-bold text-white text-2xl">500+</span>
                  <div className="text-sm">companies</div>
                </div>
                <div className="text-brand-light-blue">
                  <span className="font-bold text-white text-2xl">99.9%</span>
                  <div className="text-sm">uptime</div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Screenshot */}
            <div className="relative">
              {/* Simple Screenshot Container */}
              <div className="relative group">
                {/* Subtle Glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-brand-green/10 to-brand-light-blue/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                {/* Screenshot Frame */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-brand-light-blue/20 rounded-2xl p-3 shadow-2xl">
                  {/* Minimal Browser Bar */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-brand-light-blue/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-brand-green rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-brand-dark-blue/50 rounded-lg px-3 py-1.5 ml-4">
                      <span className="text-xs text-brand-light-blue/70">
                        app.fleetinfinity.com
                      </span>
                    </div>
                  </div>

                  {/* Screenshot Content */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-brand-dark-blue rounded-xl overflow-hidden">
                    {/* Replace with actual screenshot */}
                    <Image
                      src="/dashboard-screenshot.png"
                      alt="FleetInfinity Dashboard"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />

                    {/* Elegant Fallback */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-brand-green/20 rounded-2xl mx-auto flex items-center justify-center">
                          <div className="w-10 h-10 bg-brand-green rounded-lg"></div>
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold text-white text-lg">
                            Fleet Dashboard
                          </p>
                          <p className="text-brand-light-blue">
                            Real-time fleet monitoring and analytics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Single Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-brand-green text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Live Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Logo Cloud / Trusted By Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold uppercase text-gray-500 tracking-widest">
            Trusted by over 50,000 businesses worldwide
          </h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {/* Replace with actual client logos */}
            <Users className="w-24 h-auto text-gray-400" />
            <Truck className="w-24 h-auto text-gray-400" />
            <BarChart className="w-24 h-auto text-gray-400" />
            <Cpu className="w-24 h-auto text-gray-400" />
            <Shield className="w-24 h-auto text-gray-400" />
            <Leaf className="w-24 h-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* --- Trust Builder / Innovation Advantage Section --- */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Innovation Message */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green">
                <Zap className="w-4 h-4" />
                Built for 2025 and Beyond
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue">
                Fresh Innovation Without Legacy Limitations
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                While established players are constrained by decades-old
                architecture, FleetInfinity was built from the ground up with
                today's technology.
                <span className="text-brand-green font-semibold">
                  {" "}
                  Cloud-native, AI-first, mobile-ready
                </span>{" "}
                — designed for the way businesses actually work in 2025.
              </p>

              {/* Key Differentiators */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark-blue">
                      Modern Architecture
                    </h4>
                    <p className="text-gray-600">
                      Built with cloud-native microservices for 99.9% uptime and
                      instant global scaling
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark-blue">
                      AI-Native Platform
                    </h4>
                    <p className="text-gray-600">
                      Machine learning integrated into every feature — not
                      bolted on as an afterthought
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark-blue">
                      Competitive Pricing
                    </h4>
                    <p className="text-gray-600">
                      No legacy infrastructure costs means enterprise features
                      at startup-friendly prices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AnimatedStatsPanel />
          </div>
        </div>
      </section>
      <MorphingPlatformShowcase />
      <RealDeviceCompatibilityShowcase />
      {/* --- EXPANDED Core Solutions Sections --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
              A Complete Fleet Management Ecosystem
            </h2>
            <p className="text-lg text-gray-600">
              Go beyond simple GPS tracking. Our integrated solutions provide
              deep insights into every corner of your operations, empowering you
              to make smarter, data-backed decisions.
            </p>
          </div>

          {/* Solution 1: Optimization */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-brand-green font-bold uppercase tracking-wider">
                Productivity
              </span>
              <h3 className="text-3xl font-bold text-brand-dark-blue mt-4 mb-6">
                Maximize Efficiency and Uptime
              </h3>
              <p className="text-gray-700 mb-4">
                In today's competitive landscape, every minute and every gallon
                of fuel counts. Our platform transforms your fleet's raw data
                into a powerful engine for productivity. Monitor vehicle health
                to prevent costly breakdowns, optimize routes to cut fuel
                consumption, and automate workflows to give your team more time
                to focus on what matters.
              </p>
              <p className="text-gray-700">
                With real-time visibility, you can dispatch the nearest vehicle,
                provide customers with accurate ETAs, and ensure your assets are
                always where they need to be.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/feature-optimization.png"
                alt="Fleet Optimization Graphic"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Solution 2: Safety */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center lg:order-2">
              <Image
                src="/images/feature-safety.png"
                alt="Driver Safety Graphic"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="lg:order-1">
              <span className="text-brand-green font-bold uppercase tracking-wider">
                Safety
              </span>
              <h3 className="text-3xl font-bold text-brand-dark-blue mt-4 mb-6">
                Build a World-Class Safety Culture
              </h3>
              <p className="text-gray-700 mb-4">
                Your drivers are your most valuable asset. Protect them and
                reduce risk with a proactive safety program powered by AI and
                video telematics. Identify risky behaviors like speeding or
                harsh braking, and use in-cab voice coaching to correct them in
                real-time.
              </p>
              <p className="text-gray-700">
                In the event of a collision, instant alerts and high-fidelity
                video footage give you the context you need to exonerate
                innocent drivers, streamline insurance claims, and prevent
                future incidents.
              </p>
            </div>
          </div>

          {/* Solution 3: Sustainability */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-green font-bold uppercase tracking-wider">
                Sustainability
              </span>
              <h3 className="text-3xl font-bold text-brand-dark-blue mt-4 mb-6">
                Drive Toward a Greener Future
              </h3>
              <p className="text-gray-700 mb-4">
                Meet your corporate sustainability goals and reduce your
                environmental impact. Our platform provides the tools to monitor
                fuel consumption, track engine idling, and reduce your fleet's
                overall carbon footprint.
              </p>
              <p className="text-gray-700">
                Planning your transition to electric vehicles? We offer
                comprehensive EV suitability assessments, real-time battery
                health monitoring, and smart charging solutions to ensure your
                electrification journey is smooth and cost-effective.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/feature-sustainability.png"
                alt="Fleet Sustainability Graphic"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- NEW: How It Works Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-brand-dark-blue mb-4">
            Getting Started is Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            In three easy steps, you can start transforming your fleet
            operations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6">
                <Wrench className="w-12 h-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                1. Install Your Device
              </h3>
              <p className="text-gray-600">
                Our plug-and-play hardware takes minutes to install, with no
                special tools or expertise required.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6">
                <SatelliteDish className="w-12 h-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                2. Collect Real-Time Data
              </h3>
              <p className="text-gray-600">
                The device instantly begins collecting rich data from your
                vehicle and transmitting it to our secure cloud.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6">
                <BarChart3 className="w-12 h-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                3. Gain Actionable Insights
              </h3>
              <p className="text-gray-600">
                Log into the FleetInfinity platform from any device to access
                dashboards, reports, and alerts.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- NEW: Solutions by Industry Section --- */}
      <IndustryCapabilitiesShowcase />

      {/* ---Highlights Section--- */}
      <GPSFleetSolutions />

      {/* ---  Customer Story Section --- */}
      <section className="relative py-28 bg-gray-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/customer-background.png"
            alt="Customer background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Image
            src="/images/client-logo-white.png"
            alt="Client Logo"
            width={150}
            height={50}
            className="mx-auto mb-8"
          />
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              "With FleetInfinity, we reduced our fuel costs by 15% and cut
              accident rates by half in the first year alone. The platform paid
              for itself in six months. It's an essential part of our
              operation."
            </p>
            <footer className="mt-8">
              <p className="text-xl font-bold">Jane Doe</p>
              <p className="text-gray-300">
                Director of Operations, Global Logistics Inc.
              </p>
            </footer>
          </blockquote>
        </div>
      </section>
      {/* --- Stats Section --- */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <StatItem value="4M+" label="Connected Vehicles" />
            <StatItem value="60B+" label="Data Points Processed Daily" />
            <StatItem value="150+" label="Countries Supported" />
          </div>
        </div>
      </section>
      {/* --- NEW: Latest Insights Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-brand-dark-blue text-center mb-16">
            Latest Insights from Our Experts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InsightCard
              imageUrl="/images/blog-1.png"
              title="The 2025 Guide to Fleet Electrification"
              excerpt="Is your fleet ready for an electric future? Our comprehensive guide covers everything from TCO..."
            />
            <InsightCard
              imageUrl="/images/blog-2.png"
              title="How AI is Revolutionizing Driver Safety"
              excerpt="Learn how artificial intelligence and machine vision are creating a new paradigm in fleet safety..."
            />
            <InsightCard
              imageUrl="/images/blog-3.png"
              title="Data-Driven Maintenance: Predicting Downtime"
              excerpt="Move from reactive repairs to proactive maintenance with predictive analytics. Here’s how to get started..."
            />
          </div>
        </div>
      </section>
      {/*  FAQ SECTION HERE */}
      <FaqSection />
      {/* --- Final CTA Section --- */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            Ready to Transform Your Fleet?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            See how FleetInfinity can help you achieve your business goals. Our
            experts are ready to build a solution tailored to your needs.
          </p>
          <Link
            href="/demo"
            className="bg-brand-green text-white font-semibold px-10 py-4 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
