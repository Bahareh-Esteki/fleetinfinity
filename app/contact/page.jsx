"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Users,
  Handshake,
  Info,
  ArrowRight,
  MapPin,
} from "lucide-react";

// Reusable PageHeader component for consistency
const PageHeader = ({ title, subtitle }) => (
  <div className="bg-brand-dark-blue text-white pt-40 pb-20 text-center relative overflow-hidden">
    <div
      className="absolute inset-0 bg-opacity-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(169,192,209,0.5)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
      <p className="max-w-2xl mx-auto text-lg text-brand-light-blue">
        {subtitle}
      </p>
    </div>
  </div>
);

// Main Page Component
export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("sales");

  const contactOptions = [
    {
      id: "sales",
      icon: Phone,
      title: "Talk to Sales",
      desc: "For B2B demos and pricing.",
    },
    {
      id: "support",
      icon: Users,
      title: "Get Support",
      desc: "For existing customers.",
    },
    {
      id: "partner",
      icon: Handshake,
      title: "Partnerships",
      desc: "Explore partner opportunities.",
    },
    {
      id: "general",
      icon: Info,
      title: "General Inquiry",
      desc: "For everything else.",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "sales":
        return (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-brand-dark-blue mb-4">
                Let's Grow Your Business
              </h3>
              <p className="text-slate-600 mb-6 text-lg">
                Our experts are ready to show you how FleetInfinity can reduce
                your costs, improve safety, and drive efficiency. Schedule a
                personalized demo to see our platform in action.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Schedule a Free Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="font-semibold text-brand-dark-blue">
                  Or contact our sales team directly:
                </p>
                <a
                  href="mailto:sales@fleetinfinity.com"
                  className="flex items-center gap-2 mt-2 text-slate-600 hover:text-brand-green"
                >
                  <Mail className="w-5 h-5" /> sales@fleetinfinity.com
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img
                src="https://placehold.co/150x150/003366/FFFFFF?text=Expert"
                alt="Sales Expert 1"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
              />
              <img
                src="https://placehold.co/150x150/58C15D/FFFFFF?text=Expert"
                alt="Sales Expert 2"
                width={150}
                height={150}
                className="rounded-full shadow-lg -translate-y-4"
              />
            </div>
          </div>
        );
      case "support":
        return (
          <div>
            <h3 className="text-3xl font-bold text-brand-dark-blue mb-4">
              How can we support you?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              For the fastest answers, check our Help Center. If you still need
              assistance, our 24/7 support team is here for you.
            </p>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="font-semibold text-brand-dark-blue mb-2">
                Have you checked our Help Center?
              </p>
              <p className="text-slate-600 mb-4">
                Find answers to common questions about trackers, the mobile app,
                and billing.
              </p>
              <a
                href="/help-center"
                className="text-brand-green font-semibold inline-flex items-center gap-2"
              >
                Visit Help Center <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="font-semibold text-brand-dark-blue">
                Contact support directly:
              </p>
              <a
                href="mailto:support@fleetinfinity.com"
                className="flex items-center gap-2 mt-2 text-slate-600 hover:text-brand-green"
              >
                <Mail className="w-5 h-5" /> support@fleetinfinity.com
              </a>
            </div>
          </div>
        );
      default: // partner & general
        return (
          <div>
            <h3 className="text-3xl font-bold text-brand-dark-blue mb-4">
              Let's Connect
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              We're excited to hear from you. Please fill out the form below or
              email us directly, and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              {/* Simplified Form */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-green text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300"
              >
                Submit Message
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Or email us at:{" "}
                <a
                  href={`mailto:${
                    activeSection === "partner" ? "partners" : "info"
                  }@fleetinfinity.com`}
                  className="text-brand-green font-semibold"
                >{`${
                  activeSection === "partner" ? "partners" : "info"
                }@fleetinfinity.com`}</a>
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <PageHeader
        title="Let's Talk"
        subtitle="Whatever your question or idea, our global team is ready to connect. Choose an option below to get started."
      />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Triage Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {contactOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveSection(opt.id)}
                className={`p-6 rounded-lg text-center transition-all duration-300 transform hover:-translate-y-1 ${
                  activeSection === opt.id
                    ? "bg-brand-dark-blue text-white shadow-xl"
                    : "bg-slate-50 hover:bg-white hover:shadow-lg"
                }`}
              >
                <opt.icon
                  className={`mx-auto w-10 h-10 mb-3 ${
                    activeSection === opt.id
                      ? "text-brand-green"
                      : "text-brand-green"
                  }`}
                />
                <h4
                  className={`font-bold ${
                    activeSection === opt.id
                      ? "text-white"
                      : "text-brand-dark-blue"
                  }`}
                >
                  {opt.title}
                </h4>
                <p
                  className={`text-sm ${
                    activeSection === opt.id
                      ? "text-brand-light-blue"
                      : "text-slate-600"
                  }`}
                >
                  {opt.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-xl">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Global Offices Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
              Our Global Presence
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              We're a global company with our roots in the future-focused city
              of Dubai.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-brand-green" />
                <div>
                  <h4 className="font-bold text-brand-dark-blue text-lg">
                    HQ: Dubai, UAE
                  </h4>
                  <p className="text-slate-600">
                    DMCC, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-dashed">
              <div className="flex items-center gap-4 opacity-60">
                <MapPin className="w-8 h-8 text-slate-400" />
                <div>
                  <h4 className="font-bold text-slate-500 text-lg">
                    London, UK (Coming Soon)
                  </h4>
                  <p className="text-slate-500">
                    Europe, Middle East & Africa Hub
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-dashed">
              <div className="flex items-center gap-4 opacity-60">
                <MapPin className="w-8 h-8 text-slate-400" />
                <div>
                  <h4 className="font-bold text-slate-500 text-lg">
                    Singapore (Coming Soon)
                  </h4>
                  <p className="text-slate-500">Asia-Pacific Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
