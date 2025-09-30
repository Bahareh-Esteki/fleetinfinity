import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  BarChart3,
  Shield,
  Zap,
  DollarSign,
  UserCheck,
} from "lucide-react";

const BusinessOutcomesFocus = () => {
  const outcomes = [
    {
      id: "roi",
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Maximized ROI & Cost Control",
      description:
        "Translate real-time data into immediate savings. Reduce fuel spend, eliminate unauthorized use, and extend vehicle lifespan through predictive maintenance scheduling.",
      metric: "Save up to 25%",
      metricColor: "bg-green-50 text-green-700",
      link: "/price-calculator",
    },
    {
      id: "safety",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Safety & Risk Mitigation",
      description:
        "Utilize AI-powered driver scoring and dash cam integration to actively coach safer driving behavior, reduce collision frequency, and protect your company against liability.",
      metric: "70% Fewer Incidents",
      metricColor: "bg-blue-50 text-blue-700",
      link: "/fleet-solutions#safety",
    },
    {
      id: "compliance",
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      title: "Assured Regulatory Compliance",
      description:
        "Simplify complex global mandates, HOS (Hours of Service) tracking, and regulatory reporting with automated, audit-ready ELD and DVIR processes.",
      metric: "100% Audit Ready",
      metricColor: "bg-purple-50 text-purple-700",
      link: "/fleet-solutions#compliance",
    },
    {
      id: "efficiency",
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Operational Efficiency & Speed",
      description:
        "Optimize multi-stop routes with traffic-aware AI, slash planning time, and ensure guaranteed on-time arrivals for every delivery or service call.",
      metric: "50% Faster Route Planning",
      metricColor: "bg-orange-50 text-orange-700",
      link: "/fleet-solutions#routing",
    },
    {
      id: "data",
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Actionable Intelligence",
      description:
        "Move beyond raw location data. Access rich, customizable dashboards for deep fleet analytics, driver performance leaderboards, and maintenance trend forecasting.",
      metric: "Real-Time ROI Metrics",
      metricColor: "bg-red-50 text-red-700",
      link: "/platform-overview",
    },
    {
      id: "future",
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Future-Proof Technology",
      description:
        "Invest in a cloud-native platform that adapts instantly to new hardware, regulatory changes, and AI features without requiring expensive, disruptive overhauls.",
      metric: "API First Architecture",
      metricColor: "bg-indigo-50 text-indigo-700",
      link: "/platform-overview",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Transform Your P&L
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Strategic Outcomes for Fleet Owners
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            FleetInfinity delivers measurable business impact across every facet
            of your operations, turning tracking data into sustainable
            competitive advantage.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-xl shadow-inner">
                  {outcome.icon}
                </div>
                <div
                  className={`inline-flex items-center px-3 py-1 ${outcome.metricColor} text-xs font-bold uppercase rounded-full tracking-wide`}
                >
                  {outcome.metric}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                {outcome.title}
              </h3>

              <p className="text-gray-600 text-base mb-6">
                {outcome.description}
              </p>

              <a
                href={outcome.link}
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group transition-colors"
              >
                Learn How It Works
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-blue-600/5 rounded-2xl p-6 md:p-10 shadow-lg border border-blue-600/20 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Ready to See the ROI?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Calculate your potential cost savings based on your fleet size and
              operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/price-calculator"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-extrabold hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center shadow-lg shadow-blue-500/30"
              >
                Start ROI Calculation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/demo"
                className="border border-blue-500 text-blue-600 px-8 py-3 rounded-xl font-extrabold hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
              >
                Schedule Free Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessOutcomesFocus;
