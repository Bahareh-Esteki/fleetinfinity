import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Heart,
  Users,
  Shield,
  Smartphone,
  Monitor,
  ArrowRight,
  Building,
  MapPin,
  Camera,
  BarChart3,
  Route,
  Car,
  PawPrint,
  Lock,
  Clock,
  Zap,
  Award,
} from "lucide-react";

const MorphingPlatformShowcase = () => {
  const [activeMode, setActiveMode] = useState("business"); // 'business' or 'personal'

  // Complete content data for morphing
  const platformData = {
    business: {
      persona: {
        icon: <Building className="w-8 h-8" />,
        title: "Fleet Operations Manager",
        subtitle: "Managing 50+ commercial vehicles",
        avatar: "/images/business-user.jpg",
      },
      platform: {
        device: <Monitor className="w-6 h-6" />,
        type: "Web Dashboard Platform",
        description:
          "Complete fleet control center with AI-powered insights and real-time monitoring",
      },
      features: [
        {
          icon: <MapPin />,
          title: "Real-Time GPS Tracking",
          desc: "30-second location updates with breadcrumb history and geofencing alerts",
        },
        {
          icon: <Camera />,
          title: "AI Dash Camera Integration",
          desc: "Dual-facing cameras with instant incident detection and driver coaching",
        },
        {
          icon: <BarChart3 />,
          title: "Advanced Fleet Analytics",
          desc: "Fuel consumption analysis, driver scorecards, and predictive maintenance",
        },
        {
          icon: <Shield />,
          title: "ELD Compliance & Safety",
          desc: "FMCSA-certified hours of service tracking with automated DVIR reporting",
        },
        {
          icon: <Route />,
          title: "Route Optimization",
          desc: "AI-powered routing with traffic analysis and multi-stop planning",
        },
        {
          icon: <Users />,
          title: "Driver Management",
          desc: "Performance tracking, safety scoring, and automated coaching programs",
        },
      ],
      cta: {
        text: "Start Fleet Demo",
        color: "bg-blue-600 hover:bg-blue-700",
        href: "/fleet-demo",
      },
      bgColor: "from-blue-50 to-slate-100",
      accentColor: "text-blue-600",
      tagline:
        "Enterprise-grade fleet management without enterprise complexity",
    },
    personal: {
      persona: {
        icon: <Heart className="w-8 h-8" />,
        title: "Family Safety Coordinator",
        subtitle: "Protecting loved ones and assets",
        avatar: "/images/family-user.jpg",
      },
      platform: {
        device: <Smartphone className="w-6 h-6" />,
        type: "Mobile-First Apps",
        description:
          "Intuitive tracking apps for iOS and Android with family-focused features",
      },
      features: [
        {
          icon: <Heart />,
          title: "Family Member Tracking",
          desc: "Safe arrival notifications and location sharing with privacy controls",
        },
        {
          icon: <Car />,
          title: "Vehicle Security",
          desc: "Anti-theft alerts, speed monitoring, and unauthorized movement detection",
        },
        {
          icon: <PawPrint />,
          title: "Pet & Asset Tracking",
          desc: "Compact GPS trackers for pets, elderly relatives, and valuable items",
        },
        {
          icon: <MapPin />,
          title: "Safe Zone Alerts",
          desc: "Custom geofences for home, school, work with instant notifications",
        },
        {
          icon: <Smartphone />,
          title: "User-Friendly Design",
          desc: "Simple interface designed for all ages with one-tap emergency features",
        },
        {
          icon: <Lock />,
          title: "Privacy Protection",
          desc: "End-to-end encryption with granular sharing controls and data ownership",
        },
      ],
      cta: {
        text: "Download Apps",
        color: "bg-green-600 hover:bg-green-700",
        href: "/personal-apps",
      },
      bgColor: "from-green-50 to-emerald-100",
      accentColor: "text-green-600",
      tagline: "Family safety made simple with privacy-first design",
    },
  };

  const currentData = platformData[activeMode];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-4">
            <Zap className="w-4 h-4" />
            One Platform, Unlimited Possibilities
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            FleetInfinity Adapts to Your World
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're managing a commercial fleet or protecting your
            family, FleetInfinity provides the perfect tracking solution. Same
            powerful technology, tailored for your specific needs.
          </p>
        </motion.div>

        {/* Interactive Toggle Switch */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative bg-gray-100 p-2 rounded-full shadow-lg border border-gray-200">
            {/* Animated Background Slider */}
            <motion.div
              className="absolute top-2 bottom-2 rounded-full bg-white shadow-md border border-gray-100"
              animate={{
                left: activeMode === "business" ? "8px" : "calc(50% - 4px)",
                width: "calc(50% - 4px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Toggle Buttons */}
            <div className="relative flex">
              <motion.button
                onClick={() => setActiveMode("business")}
                className={`px-8 py-4 rounded-full font-semibold text-sm transition-all z-10 flex items-center gap-2 ${
                  activeMode === "business"
                    ? "text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Building className="w-4 h-4" />
                For Business
              </motion.button>

              <motion.button
                onClick={() => setActiveMode("personal")}
                className={`px-8 py-4 rounded-full font-semibold text-sm transition-all z-10 flex items-center gap-2 ${
                  activeMode === "personal"
                    ? "text-green-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-4 h-4" />
                For Personal
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Morphing Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${currentData.bgColor} border border-white/50 shadow-xl backdrop-blur-sm`}
          >
            {/* Tagline */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p
                className={`text-lg font-medium ${currentData.accentColor} italic`}
              >
                "{currentData.tagline}"
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Persona & Platform Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* User Persona Card */}
                <motion.div
                  className="flex items-center gap-6 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-md"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.85)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${currentData.accentColor} bg-white flex items-center justify-center shadow-lg border-2 border-white`}
                  >
                    {currentData.persona.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {currentData.persona.title}
                    </h3>
                    <p className="text-gray-600">
                      {currentData.persona.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Platform Type Card */}
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`${currentData.accentColor} bg-white rounded-lg p-2 shadow-sm`}
                    >
                      {currentData.platform.device}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {currentData.platform.type}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          Real-time updates
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {currentData.platform.description}
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.a
                  href={currentData.cta.href}
                  className={`${currentData.cta.color} text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 text-center block`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentData.cta.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Right: Features Grid */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                  Key Features & Capabilities
                </h4>

                <div className="grid gap-4">
                  {currentData.features.map((feature, index) => (
                    <motion.div
                      key={`${activeMode}-${index}`}
                      className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.85)",
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg ${currentData.accentColor} bg-white flex items-center justify-center shadow-sm flex-shrink-0 border-2 border-white`}
                      >
                        <div className="w-6 h-6">{feature.icon}</div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Industry Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">
            Trusted Worldwide
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From enterprise fleets to family safety, FleetInfinity delivers
            results across industries and continents.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                2,700+
              </div>
              <div className="text-gray-800 font-medium mb-1">
                Business Partners
              </div>
              <div className="text-sm text-gray-500">
                Fleet operators globally
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                500K+
              </div>
              <div className="text-gray-800 font-medium mb-1">
                Personal Users
              </div>
              <div className="text-sm text-gray-500">
                Families protected daily
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-brand-dark-blue mb-2">
                160+
              </div>
              <div className="text-gray-800 font-medium mb-1">Countries</div>
              <div className="text-sm text-gray-500">Global coverage</div>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-brand-green mb-2">
                40%
              </div>
              <div className="text-gray-800 font-medium mb-1">Cost Savings</div>
              <div className="text-sm text-gray-500">vs legacy providers</div>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            className="mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 px-6 py-3 rounded-full border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Award className="w-5 h-5 text-brand-green" />
            <span className="text-sm font-medium text-gray-700">
              ISO 27001 Certified • SOC 2 Compliant • 99.9% Uptime SLA
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MorphingPlatformShowcase;
