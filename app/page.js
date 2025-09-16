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
  Tractor,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedHeroBackground from "./components/AnimatedHeroBackground"; // Adjust path if needed
import FaqSection from "./components/FaqSection";
import HighlightsSection from "./components/HighlightsSection";

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
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <AnimatedHeroBackground />
        <div className="absolute inset-0 bg-brand-dark-blue/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Unlock the Power of Your Fleet's Data
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
            One platform for all your fleet management needs. Increase
            productivity, enhance safety, and drive sustainability with
            data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-brand-green text-white font-semibold px-8 py-4 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Request a Demo
            </Link>
            <Link
              href="/platform-overview"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-brand-dark-blue transition-all duration-300"
            >
              Explore the Platform
            </Link>
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
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-brand-dark-blue mb-4">
              Solutions Tailored for Your Industry
            </h2>
            <p className="text-lg text-gray-600">
              We understand that every industry has unique challenges. Our
              platform is flexible and powerful enough to meet the specific
              needs of your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <IndustryCard icon={<Truck />} title="Long-Haul Trucking" />
            <IndustryCard
              icon={<Building />}
              title="Construction & Heavy Eq."
            />
            <IndustryCard icon={<Wrench />} title="Field Services" />
            <IndustryCard icon={<Bus />} title="Government & Public Transit" />
            <IndustryCard icon={<Tractor />} title="Agriculture" />
            <IndustryCard icon={<Users />} title="Passenger Fleets" />
            <IndustryCard icon={<Shield />} title="Emergency Services" />
            <IndustryCard icon={<Leaf />} title="Waste Management" />
          </div>
        </div>
      </section>

      {/* ---Highlights Section--- */}
      <HighlightsSection />

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
      {/* --- Footer --- */}
      <footer className="bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-2xl font-bold"
              >
                <Image
                  src="/logo-white.png"
                  alt="FleetInfinity Logo"
                  width={40}
                  height={40}
                />
                <span>FleetInfinity</span>
              </Link>
              <p className="mt-4 text-gray-400 max-w-sm">
                The global leader in IoT and connected transportation solutions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Fleet Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} FleetInfinity. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
