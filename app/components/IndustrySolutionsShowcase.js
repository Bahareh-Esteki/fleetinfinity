// components/IndustrySolutionsShowcase.js
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
} from "lucide-react";

const IndustrySolutionsShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState("logistics");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  // Industry data with real solutions
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
        "Optimize delivery routes, reduce fuel costs, and ensure on-time deliveries with real-time fleet visibility.",
      challenges: [
        "Route optimization for fuel efficiency",
        "Real-time delivery tracking",
        "Driver behavior monitoring",
        "Cargo security and temperature control",
      ],
      solutions: [
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Smart Route Optimization",
          description: "AI-powered routing reduces fuel costs by up to 25%",
          benefit: "25% fuel savings",
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Real-Time ETA Updates",
          description: "Automatic customer notifications and delivery tracking",
          benefit: "40% fewer calls",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Cargo Security",
          description: "Door sensors and geo-fence alerts for theft prevention",
          benefit: "90% theft reduction",
        },
        {
          icon: <Thermometer className="w-5 h-5" />,
          title: "Cold Chain Monitoring",
          description:
            "Temperature tracking for pharmaceutical and food delivery",
          benefit: "100% compliance",
        },
      ],
      stats: [
        { value: "2,500+", label: "Logistics Companies" },
        { value: "45%", label: "Cost Reduction" },
        { value: "98%", label: "On-time Delivery" },
      ],
      testimonial: {
        quote:
          "FleetInfinity helped us reduce delivery costs by 30% while improving customer satisfaction.",
        author: "Sarah Chen",
        position: "Operations Director",
        company: "Express Logistics",
      },
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
        "Track heavy machinery, monitor equipment usage, and prevent theft with rugged GPS solutions.",
      challenges: [
        "Equipment theft prevention",
        "Usage hours tracking",
        "Maintenance scheduling",
        "Job site security monitoring",
      ],
      solutions: [
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Asset Protection",
          description: "Advanced theft alerts and recovery systems",
          benefit: "95% recovery rate",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Usage Analytics",
          description: "Track equipment hours and productivity metrics",
          benefit: "30% efficiency gain",
        },
        {
          icon: <Wrench className="w-5 h-5" />,
          title: "Predictive Maintenance",
          description: "Automated maintenance scheduling based on usage",
          benefit: "50% less downtime",
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Job Site Monitoring",
          description: "Geo-fence alerts and equipment location tracking",
          benefit: "24/7 security",
        },
      ],
      stats: [
        { value: "800+", label: "Construction Companies" },
        { value: "$2M+", label: "Equipment Protected" },
        { value: "95%", label: "Theft Prevention" },
      ],
      testimonial: {
        quote:
          "We've eliminated equipment theft and reduced maintenance costs by 40% since implementing FleetInfinity.",
        author: "Mike Rodriguez",
        position: "Fleet Manager",
        company: "BuildTech Construction",
      },
    },
    healthcare: {
      id: "healthcare",
      name: "Healthcare & Emergency",
      icon: <Heart className="w-6 h-6" />,
      color: "red",
      bgGradient: "from-red-500/10 to-red-600/5",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      description:
        "Ensure critical medical deliveries and emergency response with reliable tracking solutions.",
      challenges: [
        "Emergency response optimization",
        "Medical supply chain tracking",
        "Patient transport safety",
        "Compliance monitoring",
      ],
      solutions: [
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Emergency Dispatch",
          description: "Fastest route calculation for emergency response",
          benefit: "3min faster response",
        },
        {
          icon: <Thermometer className="w-5 h-5" />,
          title: "Medical Cold Chain",
          description: "Temperature monitoring for vaccines and medicines",
          benefit: "100% FDA compliance",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Patient Safety",
          description: "Driver behavior monitoring for patient transport",
          benefit: "60% safer driving",
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Real-Time Tracking",
          description: "Live location sharing for families and staff",
          benefit: "Peace of mind",
        },
      ],
      stats: [
        { value: "150+", label: "Healthcare Providers" },
        { value: "2min", label: "Faster Response" },
        { value: "99.9%", label: "Uptime SLA" },
      ],
      testimonial: {
        quote:
          "FleetInfinity's reliable tracking gives our patients' families peace of mind during emergency transports.",
        author: "Dr. Amanda Williams",
        position: "Operations Chief",
        company: "City Medical Center",
      },
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
        "Monitor farm equipment, track harvest progress, and optimize agricultural operations.",
      challenges: [
        "Equipment location across large farms",
        "Harvest progress monitoring",
        "Fuel consumption optimization",
        "Theft prevention in remote areas",
      ],
      solutions: [
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Field Mapping",
          description: "Track equipment across large agricultural areas",
          benefit: "Complete visibility",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Harvest Analytics",
          description: "Monitor crop yields and equipment efficiency",
          benefit: "20% yield increase",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Fuel Management",
          description: "Optimize fuel consumption for farm equipment",
          benefit: "25% fuel savings",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Remote Security",
          description: "Theft protection for equipment in remote locations",
          benefit: "24/7 monitoring",
        },
      ],
      stats: [
        { value: "500+", label: "Farms Protected" },
        { value: "15%", label: "Productivity Gain" },
        { value: "30%", label: "Cost Reduction" },
      ],
      testimonial: {
        quote:
          "FleetInfinity transformed our farm operations. We can now track every piece of equipment across 5,000 acres.",
        author: "John Martinez",
        position: "Farm Owner",
        company: "Martinez Family Farms",
      },
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
        "Enhance passenger safety, optimize routes, and improve service reliability for public transit.",
      challenges: [
        "Real-time passenger information",
        "Driver safety monitoring",
        "Route optimization",
        "Maintenance scheduling",
      ],
      solutions: [
        {
          icon: <Clock className="w-5 h-5" />,
          title: "Real-Time Arrivals",
          description: "Accurate ETAs for passengers at bus stops",
          benefit: "95% accuracy",
        },
        {
          icon: <Camera className="w-5 h-5" />,
          title: "Driver Safety Systems",
          description: "AI-powered driver monitoring and alerts",
          benefit: "70% fewer incidents",
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Route Optimization",
          description: "Dynamic routing based on traffic and demand",
          benefit: "20% faster trips",
        },
        {
          icon: <Wrench className="w-5 h-5" />,
          title: "Fleet Maintenance",
          description: "Predictive maintenance for public vehicles",
          benefit: "40% less downtime",
        },
      ],
      stats: [
        { value: "50+", label: "Transit Agencies" },
        { value: "1M+", label: "Daily Passengers" },
        { value: "25%", label: "Improved On-Time" },
      ],
      testimonial: {
        quote:
          "Our passengers love the real-time updates, and we've reduced maintenance costs significantly.",
        author: "Lisa Thompson",
        position: "Transit Director",
        company: "Metro City Transit",
      },
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
        "Track aircraft ground support equipment and marine vessels with specialized GPS solutions.",
      challenges: [
        "Ground support equipment tracking",
        "Vessel monitoring in remote waters",
        "Cargo handling optimization",
        "Safety compliance",
      ],
      solutions: [
        {
          icon: <Plane className="w-5 h-5" />,
          title: "Ground Equipment",
          description: "Track tugs, baggage carts, and support vehicles",
          benefit: "50% faster turnaround",
        },
        {
          icon: <Ship className="w-5 h-5" />,
          title: "Marine Tracking",
          description: "Satellite tracking for vessels in international waters",
          benefit: "Global coverage",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Safety Compliance",
          description: "Automated compliance reporting for regulations",
          benefit: "100% compliance",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Operations Analytics",
          description: "Optimize cargo handling and equipment usage",
          benefit: "30% efficiency gain",
        },
      ],
      stats: [
        { value: "25+", label: "Airports & Ports" },
        { value: "99.9%", label: "Satellite Coverage" },
        { value: "35%", label: "Efficiency Increase" },
      ],
      testimonial: {
        quote:
          "FleetInfinity's satellite tracking keeps our vessels connected even in the most remote waters.",
        author: "Captain James Wilson",
        position: "Fleet Operations",
        company: "Global Shipping Lines",
      },
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
    }, 5000); // Change every 5 seconds

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
            Industry-Specific Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            Solutions Tailored for{" "}
            <span className="text-brand-green">Your Industry</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            We understand that every industry has unique challenges. Our
            platform is flexible and powerful enough to meet the specific needs
            of your business.
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
                  setAutoRotate(false); // Stop auto-rotate when user interacts
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

            {/* Solutions Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Challenges & Solutions */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-600" />
                  Industry Challenges
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

                {/* Customer Testimonial */}
                <motion.div
                  className="bg-white/80 rounded-xl p-6 border border-white/60"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {currentIndustry.testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-3">
                        "{currentIndustry.testimonial.quote}"
                      </p>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {currentIndustry.testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {currentIndustry.testimonial.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {currentIndustry.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Our Solutions */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Our Solutions
                </h4>
                <div className="space-y-4">
                  {currentIndustry.solutions.map((solution, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/70 rounded-xl p-4 border border-white/40 hover:bg-white/90 transition-all duration-200 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onMouseEnter={() => setHoveredFeature(solution.title)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 ${currentIndustry.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <span className={currentIndustry.iconColor}>
                            {solution.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-800">
                              {solution.title}
                            </h5>
                            <span
                              className={`text-xs px-2 py-1 rounded-full bg-${currentIndustry.color}-100 text-${currentIndustry.color}-700 font-medium`}
                            >
                              {solution.benefit}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Stats */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {currentIndustry.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center bg-white/60 rounded-xl p-6 border border-white/40"
                >
                  <div
                    className={`text-3xl font-bold text-${currentIndustry.color}-600 mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.button
                className={`bg-${currentIndustry.color}-600 hover:bg-${currentIndustry.color}-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 mx-auto group transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Industry-Specific Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Trust Indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" />
              <span>Industry certified solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Compliance ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>24/7 industry support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutionsShowcase;
