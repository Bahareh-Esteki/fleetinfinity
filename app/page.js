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
  Settings,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedHeroBackground from "./components/AnimatedHeroBackground"; // Adjust path if needed
import FaqSection from "./components/FaqSection";
import BusinessOutcomesFocus from "./components/HighlightsSection";
import AnimatedStatsPanel from "./components/AnimatedStatsPanel";
import MorphingPlatformShowcase from "./components/MorphingPlatformShowcase";
import RealDeviceCompatibilityShowcase from "./components/DeviceCompatibilityShowcase";
import IndustryCapabilitiesShowcase from "./components/IndustrySolutionsShowcase";
import ModernHero from "./components/HeroSection";
import AuthorityAndInnovation from "./components/AuthorityAndInnovation";
import PartnerProgram from "./components/PartnerProgram";


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
      <ModernHero />
      <AuthorityAndInnovation />
      <PartnerProgram />  
      <MorphingPlatformShowcase />
      <RealDeviceCompatibilityShowcase />

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-brand-dark-blue mb-4">
            Getting Started is Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Just four steps to transform and automate your fleet management.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="group flex flex-col items-center transition-transform hover:-translate-y-2">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Wrench className="w-12 h-12 text-brand-green animate-fadeIn" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                1. Install Device
              </h3>
              <p className="text-gray-600">
                Quick plug-and-play set up, or professional installation for
                advanced devices.
              </p>
            </div>
            {/* Step 2 */}
            <div className="group flex flex-col items-center transition-transform hover:-translate-y-2">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Settings className="w-12 h-12 text-brand-green animate-fadeIn" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                2. Configure Platform
              </h3>
              <p className="text-gray-600">
                Connect and personalize your device in the FleetInfinity app or
                web dashboard.
              </p>
            </div>
            {/* Step 3 */}
            <div className="group flex flex-col items-center transition-transform hover:-translate-y-2">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <SatelliteDish className="w-12 h-12 text-brand-green animate-fadeIn" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                3. Collect Real-Time Data
              </h3>
              <p className="text-gray-600">
                Instantly stream actionable vehicle data to your secure cloud
                dashboard.
              </p>
            </div>
            {/* Step 4 */}
            <div className="group flex flex-col items-center transition-transform hover:-translate-y-2">
              <div className="bg-brand-green/10 p-6 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <BarChart3 className="w-12 h-12 text-brand-green animate-fadeIn" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
                4. Improve Efficiency
              </h3>
              <p className="text-gray-600">
                Track KPIs, reduce costs, and boost performance with real-time
                analytics and alerts.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-brand-green text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:bg-brand-dark-green transition-colors">
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* --- NEW: Solutions by Industry Section --- */}
      <IndustryCapabilitiesShowcase />

      {/* ---Highlights Section--- */}
      <BusinessOutcomesFocus />

      {/* --- Stats Section --- */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Platform Ready for Global Operations
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Built on proven technology with the infrastructure and
              capabilities to support fleets across the Middle East and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <StatItem value="151+" label="Verified Compatible Devices" />
            <StatItem value="24/7" label="Technical Support Coverage" />
            <StatItem value="99.9%" label="Platform Uptime SLA" />
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
