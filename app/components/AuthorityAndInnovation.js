import React from "react";
import {
  Shield,
  Activity,
  Globe,
  Code,
  Zap,
} from "lucide-react";

const AuthorityAndInnovation = () => {
  // Unified professional styling for all cards
  const authorityPoints = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Performance, Zero Compromise",
      description:
        "Our proprietary microservice architecture guarantees absolute high availability and unmatched speed. This standard ensures real-time data is delivered with true zero-latency, achieving location accuracy down to ±3m.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Sovereignty and Security Assured",
      description:
        "We operate under the world's most stringent data residency and privacy standards. This commitment ensures superior data sovereignty and protection for your critical fleet and driver information.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Platform Agility and Continuous Innovation",
      description:
        "We utilize an API-first design philosophy, providing seamless support for the latest advancements—from AI cameras and edge computing to 5G integration. Your investment remains future-proof.",
    },
  ];

  const foundationalMetrics = [
    {
      title: "Platform Uptime SLA",
      value: "99.9%",
      icon: <Activity className="w-4 h-4" />,
    },
    {
      title: "Real-Time Accuracy",
      value: "±3m",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      title: "Deployment Speed",
      value: "A Day, Not Weeks",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
            Foundational Excellence
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-6">
            The Platform You Can Build On.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            FleetInfinity is the result of over 15 years of R&D in fleet telematics and tracking infrastructure, built to solve the problems legacy systems never could. Not an upgrade. A complete technological shift.
          </p>
        </div>

        {/* Authority Points Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-20">
          {authorityPoints.map((point, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-700 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sleek Foundational Metrics Bar */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-50 px-4 text-sm font-medium text-slate-500 uppercase tracking-wider">
              Core Metrics
            </span>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 gap-y-8">
            {foundationalMetrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-6">
                <div className="flex items-center text-slate-500 mb-2 gap-2">
                  {metric.icon}
                  <span className="text-sm font-medium">{metric.title}</span>
                </div>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AuthorityAndInnovation;
