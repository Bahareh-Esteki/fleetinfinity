// components/IndustryCapabilitiesShowcase.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Building,
  Plane,
  Ship,
  Tractor,
  Zap,
  Users,
  Shield,
  BarChart3,
  Clock,
  MapPin,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
  Wrench,
  Heart,
  Smartphone,
  Camera,
  Thermometer,
  Code,
  Database,
  Globe,
  Wifi,
  Lock,
  TrendingUp,
} from "lucide-react";

const IndustryCapabilitiesShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState("logistics");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  // Real industry solutions based on your platform capabilities
  const industries = {
    logistics: {
      id: "logistics",
      name: "Logistics & Transportation",
      icon: <Truck className="w-6 h-6" />,
      color: "blue",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description:
        "Optimize delivery routes, reduce fuel costs, and ensure on-time deliveries with comprehensive fleet visibility.",
      challenges: [
        "Route optimization for fuel efficiency",
        "Real-time delivery tracking and ETAs",
        "Driver behavior monitoring and safety",
        "Cargo security and temperature control",
        "Fleet maintenance scheduling",
        "Fuel consumption management",
      ],
      capabilities: [
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Advanced Route Planning",
          description:
            "Multi-stop optimization with traffic and road condition analysis",
          technical: "Real-time traffic integration, dynamic re-routing",
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Live Tracking & ETAs",
          description:
            "Precise location tracking with automated customer notifications",
          technical: "GPS accuracy ±3m, automatic ETA updates",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Comprehensive Security",
          description: "Geo-fence alerts, door sensors, and anti-theft systems",
          technical: "Real-time alerts, recovery assistance",
        },
        {
          icon: <Thermometer className="w-5 h-5" />,
          title: "Cold Chain Monitoring",
          description: "Temperature logging with compliance reporting",
          technical: "Multiple sensor support, automated alerts",
        },
      ],
      readyFeatures: [
        "Multi-device compatibility (151+ supported devices)",
        "Real-time GPS tracking with 30-second updates",
        "Advanced reporting and analytics",
        "Mobile app for drivers and dispatchers",
        "API integration capabilities",
        "Multi-language interface support",
      ],
    },
    construction: {
      id: "construction",
      name: "Construction & Heavy Equipment",
      icon: <Building className="w-6 h-6" />,
      color: "orange",
      bgGradient: "from-orange-500/10 to-orange-600/5",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      description:
        "Protect valuable assets, monitor equipment usage, and optimize construction operations.",
      challenges: [
        "Equipment theft prevention and recovery",
        "Usage hours tracking and billing",
        "Maintenance scheduling optimization",
        "Job site security monitoring",
        "Equipment utilization analysis",
        "Operator behavior monitoring",
      ],
      capabilities: [
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Asset Protection System",
          description:
            "Advanced theft prevention with immediate recovery alerts",
          technical: "Motion detection, geo-fence violations, recovery mode",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Usage Analytics",
          description:
            "Detailed equipment utilization and productivity reports",
          technical: "Engine hours tracking, idle time analysis",
        },
        {
          icon: <Wrench className="w-5 h-5" />,
          title: "Maintenance Management",
          description:
            "Automated scheduling based on usage hours and conditions",
          technical: "Customizable maintenance intervals, alert system",
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Site Monitoring",
          description:
            "Complete job site visibility with equipment location tracking",
          technical: "Real-time location, historical movement data",
        },
      ],
      readyFeatures: [
        "Heavy-duty device compatibility",
        "Rugged hardware support (-40°C to +85°C)",
        "CAN bus integration for equipment data",
        "Customizable maintenance alerts",
        "Multi-site management dashboard",
        "Equipment sharing and allocation tools",
      ],
    },
    healthcare: {
      id: "healthcare",
      name: "Healthcare & Emergency Services",
      icon: <Heart className="w-6 h-6" />,
      color: "red",
      bgGradient: "from-red-500/10 to-red-600/5",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      description:
        "Ensure critical medical deliveries and emergency response with reliable, compliant tracking.",
      challenges: [
        "Emergency response time optimization",
        "Medical supply chain compliance",
        "Patient transport safety monitoring",
        "Regulatory compliance reporting",
        "Critical delivery tracking",
        "Staff and vehicle safety",
      ],
      capabilities: [
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Emergency Response",
          description:
            "Fastest route calculation with priority dispatch support",
          technical: "Sub-second route calculation, emergency mode",
        },
        {
          icon: <Thermometer className="w-5 h-5" />,
          title: "Medical Cold Chain",
          description: "Continuous temperature monitoring for pharmaceuticals",
          technical: "Multiple sensor support, compliance logging",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Patient Safety",
          description: "Driver behavior monitoring for safe patient transport",
          technical: "Smooth driving analysis, safety scoring",
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Family Communication",
          description: "Secure location sharing with family members",
          technical: "Privacy-protected sharing, real-time updates",
        },
      ],
      readyFeatures: [
        "HIPAA-compliant data handling",
        "Emergency alert systems",
        "Sensor integration for medical equipment",
        "Secure communication channels",
        "Compliance reporting tools",
        "99.9% uptime SLA ready",
      ],
    },
    agriculture: {
      id: "agriculture",
      name: "Agriculture & Farming",
      icon: <Tractor className="w-6 h-6" />,
      color: "green",
      bgGradient: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description:
        "Monitor farm equipment across vast areas, optimize operations, and protect valuable machinery.",
      challenges: [
        "Equipment tracking across large farms",
        "Harvest progress monitoring",
        "Fuel consumption optimization",
        "Remote area connectivity",
        "Equipment sharing coordination",
        "Weather-resistant monitoring",
      ],
      capabilities: [
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Large Area Coverage",
          description: "Reliable tracking across thousands of acres",
          technical: "Satellite communication support, long-range connectivity",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Harvest Analytics",
          description: "Field coverage analysis and productivity monitoring",
          technical: "GPS trail mapping, area calculation tools",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Fuel Management",
          description: "Consumption tracking and optimization recommendations",
          technical: "Fuel sensor integration, efficiency reporting",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Remote Security",
          description: "Equipment protection in isolated farming areas",
          technical: "Battery-powered trackers, satellite alerts",
        },
      ],
      readyFeatures: [
        "Long-life battery tracker support (5-7 years)",
        "Weather-resistant device compatibility",
        "Offline data synchronization",
        "Large-scale mapping capabilities",
        "Equipment sharing management",
        "Agricultural sensor integration",
      ],
    },
    transportation: {
      id: "transportation",
      name: "Public Transportation",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      bgGradient: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description:
        "Enhance passenger experience, improve safety, and optimize public transit operations.",
      challenges: [
        "Real-time passenger information systems",
        "Driver safety and behavior monitoring",
        "Route efficiency optimization",
        "Predictive maintenance scheduling",
        "Passenger safety and security",
        "Service reliability improvement",
      ],
      capabilities: [
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Passenger Information",
          description: "Accurate real-time arrival predictions for stops",
          technical: "Machine learning ETA calculation, API integration",
        },
        {
          icon: <Camera className="w-5 h-5" />,
          title: "Safety Systems",
          description: "AI-powered driver monitoring and incident detection",
          technical: "Dash cam integration, behavior analysis",
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Route Optimization",
          description: "Dynamic routing based on traffic and demand patterns",
          technical: "Traffic integration, passenger load analysis",
        },
        {
          icon: <Wrench className="w-5 h-5" />,
          title: "Fleet Maintenance",
          description: "Predictive maintenance for public transit vehicles",
          technical: "Engine diagnostics, maintenance scheduling",
        },
      ],
      readyFeatures: [
        "Public API for passenger apps",
        "Multi-route management dashboard",
        "Driver performance analytics",
        "Passenger capacity monitoring",
        "Service disruption alerts",
        "Accessibility compliance tools",
      ],
    },
    aviation: {
      id: "aviation",
      name: "Aviation & Maritime",
      icon: <Plane className="w-6 h-6" />,
      color: "indigo",
      bgGradient: "from-indigo-500/10 to-indigo-600/5",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      description:
        "Specialized tracking for ground support equipment and marine vessels with global connectivity.",
      challenges: [
        "Ground support equipment coordination",
        "Global vessel tracking requirements",
        "Cargo handling optimization",
        "International compliance standards",
        "Remote area connectivity",
        "High-value asset protection",
      ],
      capabilities: [
        {
          icon: <Plane className="w-5 h-5" />,
          title: "Airport Operations",
          description: "Ground support equipment tracking and coordination",
          technical: "Aircraft turnaround optimization, equipment allocation",
        },
        {
          icon: <Ship className="w-5 h-5" />,
          title: "Maritime Tracking",
          description: "Global vessel monitoring with satellite connectivity",
          technical: "Iridium satellite support, international waters coverage",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Compliance Ready",
          description: "International aviation and maritime regulation support",
          technical: "Automated compliance reporting, audit trails",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Operations Analytics",
          description:
            "Cargo handling efficiency and asset utilization analysis",
          technical: "Turnaround time analysis, capacity optimization",
        },
      ],
      readyFeatures: [
        "Satellite communication device support",
        "International compliance reporting",
        "Maritime-grade hardware compatibility",
        "Airport security integration ready",
        "Global timezone handling",
        "Multi-currency cost tracking",
      ],
    },
  };

  // Auto-rotate through industries
  useEffect(() => {
    if (!autoRotate) return;

    const industryKeys = Object.keys(industries);
    let currentIndex = industryKeys.indexOf(activeIndustry);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % industryKeys.length;
      setActiveIndustry(industryKeys[currentIndex]);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndustry, autoRotate]);

  const currentIndustry = industries[activeIndustry];
  const industryKeys = Object.keys(industries);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            <Target className="w-4 h-4" />
            Industry-Ready Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            Solutions Tailored for{" "}
            <span className="text-brand-green">Your Industry</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            We understand that every industry has unique challenges. Our
            platform is built with the flexibility and power to meet the
            specific needs of your business from day one.
          </p>
        </motion.div>

        {/* Interactive Industry Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {industryKeys.map((key) => {
            const industry = industries[key];
            const isActive = key === activeIndustry;

            return (
              <motion.button
                key={key}
                onClick={() => {
                  setActiveIndustry(key);
                  setAutoRotate(false);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-${industry.color}-500 text-white shadow-lg transform scale-105`
                    : `bg-white text-gray-600 border border-gray-200 hover:border-${industry.color}-300 hover:text-${industry.color}-600`
                }`}
                whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setAutoRotate(false)}
                onMouseLeave={() => setAutoRotate(true)}
              >
                <span className={isActive ? "text-white" : industry.iconColor}>
                  {industry.icon}
                </span>
                <span className="hidden sm:inline">{industry.name}</span>
                <span className="sm:hidden">{industry.name.split(" ")[0]}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${currentIndustry.bgGradient} border border-white/50 shadow-xl backdrop-blur-sm`}
          >
            {/* Industry Header */}
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${currentIndustry.iconBg} rounded-2xl mb-4`}
              >
                <span className={currentIndustry.iconColor}>
                  {currentIndustry.icon}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {currentIndustry.name}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {currentIndustry.description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Industry Challenges */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-600" />
                  Industry Challenges We Address
                </h4>
                <div className="space-y-3 mb-8">
                  {currentIndustry.challenges.map((challenge, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white/60 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Platform Readiness */}
                <motion.div
                  className="bg-white/80 rounded-xl p-6 border border-white/60"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Platform Ready Features
                  </h5>
                  <div className="space-y-2">
                    {currentIndustry.readyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Our Capabilities */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Our Platform Capabilities
                </h4>
                <div className="space-y-4">
                  {currentIndustry.capabilities.map((capability, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/70 rounded-xl p-4 border border-white/40 hover:bg-white/90 transition-all duration-200 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onMouseEnter={() => setHoveredFeature(capability.title)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 ${currentIndustry.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <span className={currentIndustry.iconColor}>
                            {capability.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800 mb-2">
                            {capability.title}
                          </h5>
                          <p className="text-sm text-gray-600 mb-2">
                            {capability.description}
                          </p>
                          <p className="text-xs text-gray-500 italic">
                            Technical: {capability.technical}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className={`bg-${currentIndustry.color}-600 hover:bg-${currentIndustry.color}-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 group transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Platform Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-xl flex items-center gap-3 group transition-all duration-300 bg-white/60"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Technical Specs
                <Database className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Platform Highlights */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 rounded-xl p-6 border border-white/40">
              <Database className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="font-bold text-gray-800 mb-2">151+ Devices</div>
              <div className="text-sm text-gray-600">
                Verified compatible hardware
              </div>
            </div>
            <div className="bg-white/60 rounded-xl p-6 border border-white/40">
              <Globe className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="font-bold text-gray-800 mb-2">Global Ready</div>
              <div className="text-sm text-gray-600">
                Multi-region deployment
              </div>
            </div>
            <div className="bg-white/60 rounded-xl p-6 border border-white/40">
              <Lock className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="font-bold text-gray-800 mb-2">
                Enterprise Security
              </div>
              <div className="text-sm text-gray-600">Bank-grade encryption</div>
            </div>
            <div className="bg-white/60 rounded-xl p-6 border border-white/40">
              <Code className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="font-bold text-gray-800 mb-2">API First</div>
              <div className="text-sm text-gray-600">
                Full integration support
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCapabilitiesShowcase;
