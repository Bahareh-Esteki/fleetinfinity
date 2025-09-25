import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Truck,
  Heart,
  Users,
  Shield,
  Smartphone,
  Monitor,
  ArrowRight,
} from "lucide-react";

const MorphingPlatformShowcase = () => {
  const [activeMode, setActiveMode] = useState("business"); // 'business' or 'personal'

  // Content data for morphing
  const platformData = {
    business: {
      persona: {
        icon: <Users className="w-8 h-8" />,
        title: "Fleet Manager",
        subtitle: "Managing 50+ vehicles",
        avatar: "/images/business-user.jpg",
      },
      platform: {
        device: <Monitor className="w-6 h-6" />,
        type: "Web Dashboard",
        description: "Comprehensive fleet management platform",
      },
      features: [
        {
          icon: <Truck />,
          title: "Fleet Tracking",
          desc: "Real-time vehicle monitoring",
        },
        {
          icon: <Shield />,
          title: "Driver Safety",
          desc: "AI-powered safety analytics",
        },
        {
          icon: <Users />,
          title: "Team Management",
          desc: "Driver assignments & reports",
        },
      ],
      cta: {
        text: "Start Fleet Demo",
        color: "bg-blue-600 hover:bg-blue-700",
      },
      bgColor: "from-blue-50 to-slate-100",
      accentColor: "text-blue-600",
    },
    personal: {
      persona: {
        icon: <Heart className="w-8 h-8" />,
        title: "Family User",
        subtitle: "Protecting loved ones",
        avatar: "/images/family-user.jpg",
      },
      platform: {
        device: <Smartphone className="w-6 h-6" />,
        type: "Mobile Apps",
        description: "Simple tracking for personal use",
      },
      features: [
        {
          icon: <Heart />,
          title: "Family Safety",
          desc: "Track family members easily",
        },
        {
          icon: <Smartphone />,
          title: "Mobile First",
          desc: "Beautiful iOS & Android apps",
        },
        {
          icon: <Shield />,
          title: "Privacy Focus",
          desc: "Your data stays private",
        },
      ],
      cta: {
        text: "Download Apps",
        color: "bg-green-600 hover:bg-green-700",
      },
      bgColor: "from-green-50 to-emerald-100",
      accentColor: "text-green-600",
    },
  };

  const currentData = platformData[activeMode];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16" layout>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
            One Platform, Two Worlds
          </h2>
          <p className="text-lg text-gray-600">
            FleetInfinity adapts to your needs — whether you're managing a
            commercial fleet or tracking personal assets.
          </p>
        </motion.div>

        {/* Interactive Toggle Switch */}
        <motion.div className="flex justify-center mb-12" layout>
          <div className="relative bg-gray-100 p-2 rounded-full shadow-inner">
            {/* Animated Background Slider */}
            <motion.div
              className="absolute top-2 bottom-2 rounded-full bg-white shadow-md"
              animate={{
                left: activeMode === "business" ? "8px" : "calc(50% - 4px)",
                width: "calc(50% - 4px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Toggle Buttons */}
            <div className="relative flex">
              <button
                onClick={() => setActiveMode("business")}
                className={`px-8 py-3 rounded-full font-semibold text-sm transition-colors z-10 flex items-center gap-2 ${
                  activeMode === "business" ? "text-blue-600" : "text-gray-500"
                }`}
              >
                <Users className="w-4 h-4" />
                For Business
              </button>
              <button
                onClick={() => setActiveMode("personal")}
                className={`px-8 py-3 rounded-full font-semibold text-sm transition-colors z-10 flex items-center gap-2 ${
                  activeMode === "personal" ? "text-green-600" : "text-gray-500"
                }`}
              >
                <Heart className="w-4 h-4" />
                For Personal
              </button>
            </div>
          </div>
        </motion.div>

        {/* Morphing Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`rounded-3xl p-12 bg-gradient-to-br ${currentData.bgColor} border border-gray-200`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Persona & Platform */}
              <motion.div className="space-y-8" layout>
                {/* User Persona */}
                <motion.div
                  className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${currentData.accentColor} bg-white flex items-center justify-center shadow-md`}
                  >
                    {currentData.persona.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {currentData.persona.title}
                    </h3>
                    <p className="text-gray-600">
                      {currentData.persona.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Platform Type */}
                <motion.div
                  className="bg-white/80 rounded-2xl p-6 border border-white/60"
                  layout
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${currentData.accentColor}`}>
                      {currentData.platform.device}
                    </div>
                    <span className="font-semibold text-gray-800">
                      {currentData.platform.type}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {currentData.platform.description}
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className={`${currentData.cta.color} text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2 group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentData.cta.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Right: Features */}
              <motion.div className="space-y-6" layout>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">
                  Key Features
                </h4>

                {currentData.features.map((feature, index) => (
                  <motion.div
                    key={`${activeMode}-${index}`}
                    className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${currentData.accentColor} bg-white flex items-center justify-center shadow-sm`}
                    >
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6",
                      })}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">
                        {feature.title}
                      </h5>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
          layout
        >
          <div>
            <div className="text-3xl font-bold text-brand-dark-blue">
              2,700+
            </div>
            <div className="text-gray-600">Business Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-dark-blue">500K+</div>
            <div className="text-gray-600">Personal Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-dark-blue">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MorphingPlatformShowcase;
