import React from "react";
import {
  Truck,
  Shield,
  Activity,
  TrendingUp,
  Globe,
  Code,
  Zap,
} from "lucide-react";

const AuthorityAndInnovation = () => {
  // Data structure for the key authority points
  const authorityPoints = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Performance, Zero Compromise",
      description:
        "Our proprietary microservice architecture guarantees absolute high availability and unmatched speed. This standard ensures real-time data is delivered with true zero-latency, achieving location accuracy down to **±3m**.",
      accent: "text-blue-600 bg-blue-50",
      bg: "hover:shadow-blue-200",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Sovereignty and Security Assured",
      description:
        "We operate under the world's most stringent data residency and privacy standards. This commitment ensures superior data sovereignty and protection for your critical fleet and driver information.",
      accent: "text-green-600 bg-green-50",
      bg: "hover:shadow-green-200",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Platform Agility and Continuous Innovation",
      description:
        "We utilize an API-first design philosophy, providing seamless support for the latest advancements—from AI cameras and edge computing to 5G integration. Your investment remains future-proof.",
      accent: "text-purple-600 bg-purple-50",
      bg: "hover:shadow-purple-200",
    },
  ];

  // Data for the foundational metrics displayed at the bottom
  const foundationalMetrics = [
    {
      title: "Platform Uptime SLA",
      value: "99.99%",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      title: "Real-Time Accuracy",
      value: "±3m",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Deployment Speed",
      value: "Hours, Not Weeks",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Foundational Excellence
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Architected for Tomorrow. Delivering Results Today.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            FleetInfinity is not an upgrade; it is a **complete technological
            shift**. Our platform is the culmination of years of intensive
            domain expertise, rigorously engineered to overcome the complexities
            that bottleneck legacy systems.
          </p>
        </div>

        {/* Authority Points Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {authorityPoints.map((point, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${point.bg}`}
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full ${point.accent} bg-opacity-80 mb-6 shadow-md`}
              >
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Foundational Metrics Bar */}
        <div className="mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl shadow-blue-500/10 border border-gray-100">
            <h4 className="text-center text-xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Core Foundational Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {foundationalMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-50/50 border border-gray-200"
                >
                  <div className="flex items-center justify-center text-gray-500 mb-1">
                    {metric.icon}
                    <p className="text-sm font-medium ml-2">{metric.title}</p>
                  </div>
                  <p className="text-3xl font-extrabold text-gray-900 mt-1">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityAndInnovation;
