import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // <-- NEW: Import Next.js Image component
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
  Zap,
  Lock,
  Database,
  Briefcase,
  GitCommit,
  User,
} from "lucide-react";

// Wrap Next.js Image component with motion for animation support
const MotionImage = motion(Image);

// --- IMAGE DATA (Use relative paths for Next.js optimization) ---
// Note: You must place your screenshots in the public folder, e.g., /public/images/screenshots/
const IMAGE_DATA = {
  // Business (Desktop Screenshots - 16:9 aspect)
  "dashboard-analytics": {
    src: "/images/screenshots/dashboard-analytics.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-driver-score": {
    src: "/images/screenshots/dashboard-driver-score.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-live-video": {
    src: "/images/screenshots/dashboard-live-video.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-route-replay": {
    src: "/images/screenshots/dashboard-route-replay.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-maintenance": {
    src: "/images/screenshots/dashboard-maintenance.jpg",
    width: 1200,
    height: 675,
  },
  "dashboard-user-roles": {
    src: "/images/screenshots/dashboard-user-roles.jpg",
    width: 1200,
    height: 675,
  },

  // Personal (Mobile Screenshots - 9:16 aspect)
  "mobile-live-map": {
    src: "/images/screenshots/mobile-live-map.png",
    width: 350,
    height: 650,
  },
  "mobile-geofence-alert": {
    src: "/images/screenshots/mobile-geofence-alert.png",
    width: 350,
    height: 650,
  },
  "mobile-remote-control": {
    src: "/images/screenshots/mobile-remote-control.png",
    width: 350,
    height: 650,
  },
  "mobile-phone-tracker": {
    src: "/images/screenshots/mobile-phone-tracker.png",
    width: 350,
    height: 650,
  },
  "mobile-alerts-log": {
    src: "/images/screenshots/mobile-alerts-log.png",
    width: 350,
    height: 650,
  },
  "mobile-performance": {
    src: "/images/screenshots/mobile-performance.png",
    width: 350,
    height: 650,
  },
};

// --- PLATFORM DATA (Unchanged features, now referencing IMAGE_DATA) ---
const PLATFORM_DATA = {
  business: {
    tagline: "Enterprise-grade fleet management without enterprise complexity",
    defaultScreenshotKey: "dashboard-analytics",
    features: [
      {
        icon: <BarChart3 />,
        title: "Deep Operational Intelligence",
        desc: "Comprehensive charts for fuel, speed, and weight analysis to drive predictive maintenance and cost reduction.",
        screenshotKey: "dashboard-analytics",
      },
      {
        icon: <Users />,
        title: "AI-Powered Driver Coaching",
        desc: "Detailed reports on top/high-risk drivers, aggressive event detection, and custom behavior scenario controls.",
        screenshotKey: "dashboard-driver-score",
      },
      {
        icon: <Camera />,
        title: "Real-Time Visual Monitoring",
        desc: "Integration with camera devices for live image/video streaming and immediate visual confirmation of events.",
        screenshotKey: "dashboard-live-video",
      },
      {
        icon: <Route />,
        title: "Smart Route Compliance & Replay",
        desc: "Create authorized/unauthorized zones and replay travel history as a film, complete with all associated alerts.",
        screenshotKey: "dashboard-route-replay",
      },
      {
        icon: <Zap />,
        title: "Proactive Maintenance Planner",
        desc: "Automated reminders for insurance renewal, oil changes, brake pads, and custom service reminders to minimize downtime.",
        screenshotKey: "dashboard-maintenance",
      },
      {
        icon: <Shield />,
        title: "Modular User Access (RBAC)",
        desc: "Group vehicles and users, define project access, and granularly activate/deactivate modules for specific team members.",
        screenshotKey: "dashboard-user-roles",
      },
    ],
    cta: {
      text: "Start Fleet Demo",
      color: "bg-blue-600 hover:bg-blue-700",
      href: "/demo",
    },
    bgColor: "from-blue-50 to-slate-100",
    accentColor: "text-blue-600",
  },
  personal: {
    tagline: "Family safety and vehicle security, simple and privacy-first.",
    defaultScreenshotKey: "mobile-live-map",
    features: [
      {
        icon: <MapPin />,
        title: "Always-On Vehicle Security",
        desc: "Instant monitoring of location, vehicle status (on/off/moving), and anti-theft alert toggles right in the app.",
        screenshotKey: "mobile-live-map",
      },
      {
        icon: <Lock />,
        title: "Secure Remote Immobilization",
        desc: "Remotely turn the ignition on/off and lock/unlock doors using the app for quick security response (hardware dependent).",
        screenshotKey: "mobile-remote-control",
      },
      {
        icon: <GitCommit />,
        title: "Safe Zone & Towing Alerts",
        desc: "Receive immediate push notifications for illegal towing, battery disconnects, or unauthorized movement outside geofences.",
        screenshotKey: "mobile-geofence-alert",
      },
      {
        icon: <Smartphone />,
        title: "Mobile-as-a-Tracker (Mobotrack)",
        desc: "Convert any Android phone into a GPS device to track children, elderly family members, or field employees.",
        screenshotKey: "mobile-phone-tracker",
      },
      {
        icon: <Database />,
        title: "High-Speed, Low-Data Design",
        desc: "Built for quick response time and optimized for low internet traffic consumption across all iOS and Android versions.",
        screenshotKey: "mobile-performance",
      },
      {
        icon: <Heart />,
        title: "Full Event Log History",
        desc: "Review a comprehensive log of all vehicle events, including speeding, dangerous driving, and alert history.",
        screenshotKey: "mobile-alerts-log",
      },
    ],
    cta: {
      text: "Download Apps",
      color: "bg-green-600 hover:bg-green-700",
      href: "/personal-app",
    },
    bgColor: "from-green-50 to-emerald-100",
    accentColor: "text-green-600",
  },
};

// --- COMPONENT IMPLEMENTATION ---

const MorphingPlatformShowcase = () => {
  const [activeMode, setActiveMode] = useState("business");
  const [activeScreenshot, setActiveScreenshot] = useState(
    PLATFORM_DATA.business.defaultScreenshotKey
  );
  const [userInteracted, setUserInteracted] = useState(false);

  const currentData = PLATFORM_DATA[activeMode];
  const featureKeys = useMemo(
    () => currentData.features.map((f) => f.screenshotKey),
    [activeMode]
  );
  const currentImageData = IMAGE_DATA[activeScreenshot];

  // Handle auto-cycling of screenshots when user hasn't interacted
  useEffect(() => {
    if (!userInteracted) {
      const cycleScreenshots = () => {
        setActiveScreenshot((prevKey) => {
          const currentIndex = featureKeys.indexOf(prevKey);
          const nextIndex = (currentIndex + 1) % featureKeys.length;
          return featureKeys[nextIndex];
        });
      };

      const interval = setInterval(cycleScreenshots, 5000);

      return () => clearInterval(interval);
    }
  }, [activeMode, featureKeys, userInteracted]);

  // Reset screenshot state when mode changes
  useEffect(() => {
    setActiveScreenshot(currentData.defaultScreenshotKey);
    setUserInteracted(false);
  }, [activeMode, currentData.defaultScreenshotKey]);

  // Helper function for user interaction (hover/tap)
  const handleFeatureInteraction = useCallback((key, type) => {
    setActiveScreenshot(key);
    if (type === "enter") {
      setUserInteracted(true);
    }
  }, []);

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setUserInteracted(false);
  };

  const MockupFrame = ({ mode, children }) => {
    if (mode === "business") {
      // Desktop Monitor Mockup
      return (
        // The container manages the responsive aspect ratio using padding-top
        <div className="w-full h-auto bg-gray-900 border-[10px] border-gray-800 rounded-xl shadow-2xl relative p-3">
          <div
            className="relative w-full overflow-hidden rounded-md"
            style={{ paddingTop: "56.25%" }}
          >
            {" "}
            {/* 16:9 Aspect Ratio */}
            <div className="absolute inset-0">{children}</div>
          </div>
          <div className="h-4 w-1/3 mx-auto mt-2 bg-gray-700 rounded-sm"></div>
        </div>
      );
    } else {
      // Mobile Phone Mockup
      return (
        <div className="w-72 h-[600px] lg:w-80 lg:h-[700px] bg-black border-[12px] lg:border-[16px] border-gray-900 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative flex items-center justify-center">
          <div className="w-[calc(100%-4px)] h-[calc(100%-4px)] overflow-hidden rounded-[2.5rem] bg-gray-100 relative">
            {children}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-20"></div>
        </div>
      );
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-600/20 rounded-full px-4 py-2 text-sm font-medium text-indigo-600 mb-4">
            <Zap className="w-4 h-4" />
            Total Visibility. Global Control. One Platform.
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            FleetInfinity Adapts to Your World
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're managing a commercial fleet or protecting your
            family, FleetInfinity provides the perfect tracking solution. See
            our technology in action.
          </p>
        </motion.div>

        {/* Interactive Toggle Switch */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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
                onClick={() => handleModeChange("business")}
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
                onClick={() => handleModeChange("personal")}
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
            className={`rounded-3xl p-8 md:p-12 ${currentData.bgColor} border border-white/50 shadow-xl backdrop-blur-sm`}
          >
            {/* Tagline */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p
                className={`text-xl font-semibold ${currentData.accentColor} italic`}
              >
                "{currentData.tagline}"
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* LEFT COLUMN (FEATURES & CTA) - 5/12 width */}
              <motion.div
                className="lg:col-span-5 space-y-6 order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold text-gray-800 text-center lg:text-left">
                  Key Features & Capabilities
                </h4>

                <div className="grid gap-4">
                  {currentData.features.map((feature, index) => (
                    <motion.div
                      key={feature.screenshotKey}
                      className={`flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 border transition-all duration-200 cursor-pointer ${
                        activeScreenshot === feature.screenshotKey
                          ? `${currentData.accentColor} border-4 border-current shadow-lg` // Highlight active
                          : "border-white/50 hover:bg-white/90"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.4, duration: 0.4 }}
                      // Split-Screen Interaction Logic
                      onMouseEnter={() =>
                        handleFeatureInteraction(feature.screenshotKey, "enter")
                      }
                      onMouseLeave={() =>
                        activeMode === "business"
                          ? setActiveScreenshot(
                              currentData.defaultScreenshotKey
                            )
                          : null
                      } // Keep active on mobile for tap
                      onClick={() =>
                        handleFeatureInteraction(feature.screenshotKey, "click")
                      } // Mobile Tap interaction
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0 border-2 border-white ${currentData.accentColor}`}
                      >
                        <div className="w-6 h-6">{feature.icon}</div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-bold text-gray-800 mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-snug">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={currentData.cta.href}
                  className={`${currentData.cta.color} text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 text-center block mt-8`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentData.cta.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* RIGHT COLUMN (DYNAMIC MOCKUP) - 7/12 width */}
              <motion.div
                className="lg:col-span-7 flex justify-center items-center relative min-h-[400px] lg:min-h-[500px] order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <MockupFrame mode={activeMode}>
                  <AnimatePresence mode="wait">
                    <MotionImage
                      key={activeScreenshot}
                      className="object-cover"
                      src={currentImageData.src}
                      alt={`FleetInfinity Platform Screenshot - ${activeScreenshot}`}
                      width={currentImageData.width}
                      height={currentImageData.height}
                      layout={activeMode === "business" ? "responsive" : "fill"} // Use fill for mobile container, responsive for desktop
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                </MockupFrame>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MorphingPlatformShowcase;
