"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Camera,
  MapPin,
  BookOpenCheck,
  Route,
  Fuel,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Clock,
  Smartphone,
  Zap,
} from "lucide-react";

const GPSFleetSolutions = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const solutions = [
    {
      id: "dashcams",
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: "Fleet Dash Cams",
      description:
        "AI-powered collision detection and driver behavior monitoring for enhanced safety.",
      metric: "70% fewer incidents",
      metricColor: "bg-blue-50 text-blue-700",
      features: [
        "HD video recording with night vision",
        "AI-powered incident detection",
        "Real-time driver coaching alerts",
        "Cloud storage and evidence management",
        "Integration with fleet management system",
      ],
      technicalSpecs: {
        "Video Quality": "1080p HD front/rear cameras",
        Storage: "Local + cloud backup",
        "AI Features": "Collision, distraction, fatigue detection",
        Integration: "Seamless fleet platform sync",
      },
    },
    {
      id: "tracking",
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      title: "Real-Time GPS Tracking",
      description:
        "Precise location monitoring with 30-second updates and comprehensive fleet visibility.",
      metric: "±3m accuracy",
      metricColor: "bg-purple-50 text-purple-700",
      features: [
        "Real-time location with 30s updates",
        "Multi-constellation GNSS support",
        "Historical route playback",
        "Geofencing with custom alerts",
        "Live traffic integration",
      ],
      technicalSpecs: {
        Accuracy: "±3 meters under open sky",
        "Update Rate": "10-30 seconds (configurable)",
        Satellites: "GPS, GLONASS, Galileo, BeiDou",
        Coverage: "Global with detailed local maps",
      },
    },
    {
      id: "compliance",
      icon: <BookOpenCheck className="w-8 h-8 text-emerald-600" />,
      title: "ELD & Compliance",
      description:
        "FMCSA-certified electronic logging with automated reporting and violation prevention.",
      metric: "100% compliant",
      metricColor: "bg-emerald-50 text-emerald-700",
      features: [
        "FMCSA-certified ELD solution",
        "Automated HOS tracking",
        "Driver vehicle inspection reports",
        "Compliance violation alerts",
        "Audit-ready reporting",
      ],
      technicalSpecs: {
        Certification: "FMCSA registered and certified",
        "HOS Rules": "All US and Canada regulations",
        Reports: "Automated DVIR, logs, violations",
        Integration: "DOT inspection ready",
      },
    },
    {
      id: "routing",
      icon: <Route className="w-8 h-8 text-orange-600" />,
      title: "Smart Route Optimization",
      description:
        "AI-powered routing that reduces fuel costs and improves delivery efficiency.",
      metric: "25% fuel savings",
      metricColor: "bg-orange-50 text-orange-700",
      features: [
        "Multi-stop route optimization",
        "Real-time traffic integration",
        "Dynamic re-routing capabilities",
        "Delivery time window management",
        "Driver workload balancing",
      ],
      technicalSpecs: {
        Algorithm: "Advanced AI optimization",
        Stops: "Up to 200 stops per route",
        "Traffic Data": "Real-time traffic integration",
        Calculation: "Sub-second route planning",
      },
    },
    {
      id: "fuel",
      icon: <Fuel className="w-8 h-8 text-red-600" />,
      title: "Fuel Management",
      description:
        "Monitor consumption, detect theft, and optimize fuel efficiency across your fleet.",
      metric: "20% cost reduction",
      metricColor: "bg-red-50 text-red-700",
      features: [
        "Real-time fuel level monitoring",
        "Theft and unusual consumption alerts",
        "Fuel efficiency reporting",
        "Driver behavior impact analysis",
        "Cost tracking and budgeting",
      ],
      technicalSpecs: {
        Sensors: "Compatible fuel level sensors",
        Accuracy: "±2% fuel level measurement",
        Alerts: "Real-time theft detection",
        Reports: "Consumption trends and analysis",
      },
    },
    {
      id: "driver",
      icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
      title: "Driver Performance",
      description:
        "Comprehensive driver monitoring with safety scoring and coaching tools.",
      metric: "40% safer driving",
      metricColor: "bg-indigo-50 text-indigo-700",
      features: [
        "Driver safety scoring system",
        "Harsh driving event detection",
        "Coaching and training integration",
        "Driver identification via RFID",
        "Performance leaderboards",
      ],
      technicalSpecs: {
        Scoring: "Comprehensive safety algorithms",
        Events: "Speed, acceleration, braking, cornering",
        "ID Methods": "RFID, iButton, mobile app",
        Coaching: "Real-time and post-trip feedback",
      },
    },
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
            GPS Fleet Management Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive fleet operations powered by real-time data and AI
            intelligence to solve your biggest operational challenges.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header - Always Visible */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-dark-blue mb-1">
                        {solution.title}
                      </h3>
                      <div
                        className={`inline-flex items-center px-2 py-1 ${solution.metricColor} text-xs font-medium rounded-full`}
                      >
                        {solution.metric}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCard(solution.id)}
                    className="p-2 hover:bg-gray-50 rounded-lg transition-colors ml-2"
                    aria-label={
                      expandedCard === solution.id
                        ? "Collapse details"
                        : "Expand details"
                    }
                  >
                    {expandedCard === solution.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {solution.description}
                </p>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleCard(solution.id)}
                  className="w-full text-left font-medium text-gray-700 hover:text-gray-900 flex items-center gap-2 group text-sm"
                >
                  {expandedCard === solution.id ? "Show Less" : "View Details"}
                  <ArrowRight
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      expandedCard === solution.id
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {expandedCard === solution.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="p-6 pt-4 bg-gray-50/50">
                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-600" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Specs */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-gray-600" />
                          Technical Specifications
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(solution.technicalSpecs).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between items-center text-sm"
                              >
                                <span className="text-gray-600 font-medium">
                                  {key}:
                                </span>
                                <span className="text-gray-800">{value}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark-blue mb-3">
              Ready to Transform Your Fleet?
            </h3>
            <p className="text-gray-600 mb-6">
              Get started with our comprehensive GPS fleet management platform.
              Custom pricing based on your fleet size and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors flex items-center gap-2 justify-center">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
                <Smartphone className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GPSFleetSolutions;
