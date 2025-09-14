"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scan,
  Smartphone,
  MapPin,
  Shield,
  Car,
  Package,
  Heart,
} from "lucide-react";

// Reusable PageHeader component for consistency
const PageHeader = ({ title, subtitle }) => (
  <div className="bg-slate-50 pt-32 pb-16 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-600">{subtitle}</p>
    </div>
  </div>
);

// How It Works Section Component
const HowItWorks = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
          Peace of mind in 3 simple steps
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Getting started with FleetInfinity Personal is quick and effortless.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {/* Step 1 */}
        <div className="p-6">
          <div className="mx-auto w-20 h-20 mb-6 bg-brand-green text-white rounded-full flex items-center justify-center">
            <Scan size={40} />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">
            1. Choose Your Tracker
          </h3>
          <p className="text-slate-600">
            Select from our range of small, powerful GPS trackers for your car,
            valuables, or loved ones.
          </p>
        </div>
        {/* Step 2 */}
        <div className="p-6">
          <div className="mx-auto w-20 h-20 mb-6 bg-brand-green text-white rounded-full flex items-center justify-center">
            <Smartphone size={40} />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">
            2. Activate The App
          </h3>
          <p className="text-slate-600">
            Download our intuitive mobile app and connect your tracker in
            minutes with a simple setup process.
          </p>
        </div>
        {/* Step 3 */}
        <div className="p-6">
          <div className="mx-auto w-20 h-20 mb-6 bg-brand-green text-white rounded-full flex items-center justify-center">
            <MapPin size={40} />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">
            3. Stay Connected
          </h3>
          <p className="text-slate-600">
            Get real-time location updates, set custom alerts, and view location
            history from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Solutions Section Component
const PersonalSolutions = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
          Solutions for what you value most
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Whatever you need to protect, FleetInfinity provides a tailored
          solution for your peace of mind.
        </p>
      </div>

      <div className="space-y-20">
        {/* Vehicle Security */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-brand-green" />
              <h3 className="text-2xl font-bold text-brand-dark-blue">
                Vehicle Security
              </h3>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Protect your car from theft with instant movement alerts and
              real-time tracking. Whether it's parked on the street or in a
              garage, you'll always know it's safe.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Get instant push notifications if your vehicle moves without
                  your knowledge.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Track your car's exact location in real-time for quick
                  recovery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Set "safe zones" and get alerted if your car enters or leaves
                  them.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400/003366/FFFFFF?text=Vehicle+Security"
              alt="A car parked safely in a driveway"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Asset & Valuables Tracking */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <div className="inline-flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-brand-green" />
              <h3 className="text-2xl font-bold text-brand-dark-blue">
                Asset & Valuables Tracking
              </h3>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Never lose your luggage, camera bag, or expensive equipment again.
              Place a small FleetInfinity tracker with your valuables and always
              know where they are.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Perfect for travel, expensive hobbies, or professional gear.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Long-lasting battery means you can set it and forget it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Share the location with family or colleagues temporarily.
                </span>
              </li>
            </ul>
          </div>
          <div className="md:order-1">
            <Image
              src="https://placehold.co/600x400/58C15D/FFFFFF?text=Asset+Tracking"
              alt="A backpack with a tracker attached"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Family & Loved Ones Safety */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-brand-green" />
              <h3 className="text-2xl font-bold text-brand-dark-blue">
                Family & Loved Ones Safety
              </h3>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Gain peace of mind knowing your loved ones are safe. Receive
              alerts when your teen driver arrives at their destination or when
              an elderly parent leaves a designated "safe zone".
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Get arrival and departure notifications for places like school
                  or home.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  Monitor driving habits like speeding for new teen drivers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span>
                  An easy-to-use SOS button on portable trackers for
                  emergencies.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400/A9C0D1/003366?text=Family+Safety"
              alt="A person smiling while looking at their phone"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <div className="bg-white py-20">
    <div className="container mx-auto px-4">
      <div className="bg-brand-dark-blue text-white text-center p-12 rounded-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to feel secure?</h2>
        <p className="max-w-xl mx-auto text-brand-light-blue mb-8">
          Find the perfect tracker and plan for your needs. Get started today
          and experience true peace of mind.
        </p>
        <Link
          href="/pricing"
          className="bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Explore Plans & Trackers
        </Link>
      </div>
    </div>
  </div>
);

// Main Page Component
export default function PersonalSolutionsPage() {
  return (
    <>
      <PageHeader
        title="Protecting Your World"
        subtitle="Simple, powerful, and reliable GPS tracking that gives you peace of mind for the people and things you value most."
      />
      <HowItWorks />
      <PersonalSolutions />
      <CtaSection />
    </>
  );
}
