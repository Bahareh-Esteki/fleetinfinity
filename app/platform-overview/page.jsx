"use client"; // This component uses client-side interactivity (useState)

import React, { useState } from "react";
// Note: 'next/image' and 'next/link' are replaced with standard HTML tags for environment compatibility.
import {
  LayoutDashboard,
  BarChart3,
  Wrench,
  FileText,
  Smartphone,
  Code2,
  CheckCircle2,
} from "lucide-react";

// Reusable PageHeader component for consistency
const PageHeader = ({ title, subtitle }) => (
  <div className="bg-brand-dark-blue text-white text-center pt-32 pb-40 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-opacity-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(169,192,209,0.1)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
      <p className="max-w-2xl mx-auto text-lg text-brand-light-blue">
        {subtitle}
      </p>
    </div>
  </div>
);

// Main component for the Platform Overview Page
export default function PlatformOverviewPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const features = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      title: "Real-Time Dashboard",
      desc: "Monitor your entire fleet at a glance.",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Turn data into actionable insights.",
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance",
      desc: "Automate schedules and reduce downtime.",
    },
    {
      id: "reporting",
      icon: FileText,
      title: "Reporting",
      desc: "Generate detailed performance reports.",
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile Access",
      desc: "Manage your fleet from anywhere.",
    },
    {
      id: "api",
      icon: Code2,
      title: "API Integration",
      desc: "Connect with your existing systems.",
    },
  ];

  const featureContent = {
    dashboard: {
      title: "See Your Entire Operation in Real Time",
      description:
        "Monitor your entire fleet from a single, intuitive web dashboard. With live map updates, customizable widgets, and instant alerts, you always have the pulse of your operations at your fingertips.",
      points: [
        "Live GPS tracking on a dynamic map.",
        "Customizable widgets for key metrics.",
        "Instant alerts for critical events.",
      ],
      image: "Screenshot 2025-07-31 121520.png",
    },
    analytics: {
      title: "Unlock AI-Powered Insights",
      description:
        "Go beyond simple tracking. Our advanced analytics engine processes billions of data points to help you optimize routes, reduce fuel consumption by identifying idling and speeding, and improve overall fleet efficiency.",
      points: [
        "AI-driven route optimization.",
        "Fuel and idling reduction reports.",
        "Driver behavior scorecards.",
      ],
      image: "Screenshot 2025-07-31 121637.png",
    },
    maintenance: {
      title: "Proactive Maintenance, Zero Downtime",
      description:
        "Prevent costly repairs and unexpected downtime. FleetInfinity allows you to automate maintenance scheduling based on mileage, engine hours, or time. Receive timely alerts for upcoming service to keep your fleet healthy and on the road.",
      points: [
        "Automated service scheduling based on usage.",
        "Customizable maintenance alerts.",
        "Digital vehicle inspection reports (DVIR).",
      ],
      image: "Screenshot 2025-07-31 121746.png",
    },
    reporting: {
      title: "Comprehensive, Customizable Reporting",
      description:
        "Make data-driven decisions with ease. Generate detailed reports on every aspect of your fleet, from individual vehicle performance and driver behavior to overall operational metrics. Schedule reports to be delivered to your inbox automatically.",
      points: [
        "Dozens of pre-built report templates.",
        "Custom report builder for specific needs.",
        "Automated email delivery scheduling.",
      ],
      image: "Screenshot 2025-07-31 122257.png",
    },
    mobile: {
      title: "Full Control, From Your Pocket",
      description:
        "Manage your fleet on the go. Our native mobile apps for iOS and Android provide full platform access from any device, anywhere in the world. Even with intermittent connectivity, our offline capabilities ensure you never lose critical data.",
      points: [
        "Native apps for iOS and Android.",
        "Real-time alerts via push notifications.",
        "Offline sync for low-connectivity areas.",
      ],
      image: "Screenshot 2025-07-31 121605.png",
    },
    api: {
      title: "Seamlessly Integrated with Your Business",
      description:
        "FleetInfinity is built to be the central hub of your operations. Our robust, well-documented RESTful API allows you to seamlessly integrate our platform data with your existing systems like payroll, billing, or ERP software.",
      points: [
        "Robust and well-documented RESTful API.",
        "Webhook support for real-time data push.",
        "Connect to hundreds of third-party apps.",
      ],
      image: "Screenshot 2025-07-31 114917.png",
    },
  };

  return (
    <>
      <PageHeader
        title="FleetInfinity Command Platform"
        subtitle="Comprehensive fleet management with real-time insights and advanced analytics to drive your business forward."
      />

      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
          <img
            src="\Screenshot 2025-07-31 114917.png"
            alt="FleetInfinity Dashboard Mockup"
            width="900"
            height="500"
            className="w-full"
          />
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Tab Buttons */}
            <div className="lg:col-span-1 space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 transform ${
                    activeTab === feature.id
                      ? "bg-slate-50 border-l-4 border-brand-green shadow-md -translate-x-2"
                      : "hover:bg-slate-50 hover:translate-x-1"
                  }`}
                >
                  <feature.icon
                    className={`w-8 h-8 flex-shrink-0 ${
                      activeTab === feature.id
                        ? "text-brand-green"
                        : "text-brand-dark-blue"
                    }`}
                  />
                  <div>
                    <h4 className="font-bold text-brand-dark-blue">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-white rounded-lg min-h-[400px]">
                <h3 className="text-3xl font-bold text-brand-dark-blue mb-4">
                  {featureContent[activeTab].title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {featureContent[activeTab].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {featureContent[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={featureContent[activeTab].image}
                    alt={featureContent[activeTab].title}
                    width="600"
                    height="350"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="bg-brand-dark-blue text-white text-center p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Command of Your Fleet?
          </h2>
          <p className="max-w-xl mx-auto text-brand-light-blue mb-8">
            Schedule a personalized, no-obligation demo with one of our fleet
            experts today.
          </p>
          <a
            href="/demo"
            className="bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Request a Free Demo
          </a>
        </div>
      </div>
    </>
  );
}
