import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Smartphone,
  Truck,
  Camera,
  Thermometer,
  Fuel,
  DoorOpen,
  Package,
  Tractor,
  Building,
  Car,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Cpu,
  Battery,
  Wrench,
  Settings,
} from "lucide-react";

const DeviceCompatibilityShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);

  // Device categories with modern icons and colors
  const categories = [
    {
      id: "all",
      name: "All Devices",
      icon: <Globe className="w-5 h-5" />,
      color: "text-gray-600",
      count: "3,800+",
    },
    {
      id: "gps",
      name: "GPS Trackers",
      icon: <Car className="w-5 h-5" />,
      color: "text-blue-600",
      count: "2,100+",
    },
    {
      id: "cameras",
      name: "Dash Cameras",
      icon: <Camera className="w-5 h-5" />,
      color: "text-purple-600",
      count: "450+",
    },
    {
      id: "sensors",
      name: "Sensors",
      icon: <Thermometer className="w-5 h-5" />,
      color: "text-green-600",
      count: "800+",
    },
    {
      id: "mobile",
      name: "Mobile Devices",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-orange-600",
      count: "200+",
    },
    {
      id: "specialized",
      name: "Specialized",
      icon: <Tractor className="w-5 h-5" />,
      color: "text-red-600",
      count: "250+",
    },
  ];

  // Comprehensive device database
  const devices = [
    // GPS Trackers
    {
      id: 1,
      name: "Teltonika FMB920",
      category: "gps",
      type: "OBD Tracker",
      manufacturer: "Teltonika",
      image: "/images/devices/teltonika-fmb920.jpg",
      features: [
        "Real-time tracking",
        "OBD-II diagnostics",
        "Geofencing",
        "Driver behavior",
      ],
      connectivity: ["2G/3G/4G", "Bluetooth", "GPS/GLONASS"],
      installation: "Plug & Play",
      battery: "12-24V vehicle power",
      rating: 4.8,
      popular: true,
      industries: ["Fleet Management", "Logistics", "Construction"],
      price: "Mid-range",
    },
    {
      id: 2,
      name: "Queclink GL300W",
      category: "gps",
      type: "Portable Tracker",
      manufacturer: "Queclink",
      image: "/images/devices/queclink-gl300w.jpg",
      features: [
        "Long battery life",
        "Waterproof IP67",
        "SOS button",
        "Compact design",
      ],
      connectivity: ["2G/3G", "GPS", "Wi-Fi"],
      installation: "No installation",
      battery: "5000mAh rechargeable",
      rating: 4.6,
      popular: false,
      industries: ["Personal Tracking", "Asset Protection", "Field Services"],
      price: "Budget",
    },
    {
      id: 3,
      name: "CalAmp LMU-5530",
      category: "gps",
      type: "Hardwired Tracker",
      manufacturer: "CalAmp",
      image: "/images/devices/calamp-lmu5530.jpg",
      features: [
        "Advanced telematics",
        "CAN bus integration",
        "Driver ID",
        "Maintenance alerts",
      ],
      connectivity: ["4G LTE", "GPS/GLONASS", "CAN J1939"],
      installation: "Professional required",
      battery: "12-24V hardwired",
      rating: 4.9,
      popular: true,
      industries: ["Heavy Fleet", "Public Transport", "Emergency Services"],
      price: "Premium",
    },

    // Dash Cameras
    {
      id: 4,
      name: "Samsara CM32",
      category: "cameras",
      type: "AI Dash Camera",
      manufacturer: "Samsara",
      image: "/images/devices/samsara-cm32.jpg",
      features: [
        "AI-powered safety",
        "Dual-facing cameras",
        "Live streaming",
        "Driver coaching",
      ],
      connectivity: ["4G LTE", "Wi-Fi", "GPS"],
      installation: "Professional recommended",
      battery: "12-24V vehicle power",
      rating: 4.7,
      popular: true,
      industries: ["Fleet Safety", "Logistics", "Delivery"],
      price: "Premium",
    },
    {
      id: 5,
      name: "Mobileye 8 Connect",
      category: "cameras",
      type: "ADAS Camera",
      manufacturer: "Mobileye",
      image: "/images/devices/mobileye-8.jpg",
      features: [
        "Collision warning",
        "Lane departure",
        "Speed limit alerts",
        "Pedestrian detection",
      ],
      connectivity: ["4G", "GPS", "CAN bus"],
      installation: "Professional required",
      battery: "12-24V vehicle power",
      rating: 4.8,
      popular: true,
      industries: ["Commercial Fleet", "Public Transport", "Trucking"],
      price: "Premium",
    },

    // Sensors
    {
      id: 6,
      name: "FuelTech Pro Sensor",
      category: "sensors",
      type: "Fuel Level Sensor",
      manufacturer: "FuelTech",
      image: "/images/devices/fueltech-sensor.jpg",
      features: [
        "Precise fuel monitoring",
        "Anti-theft alerts",
        "Consumption tracking",
        "Tank level alerts",
      ],
      connectivity: ["RS485", "Analog output"],
      installation: "Professional required",
      battery: "Vehicle powered",
      rating: 4.5,
      popular: false,
      industries: ["Fleet Management", "Construction", "Mining"],
      price: "Mid-range",
    },
    {
      id: 7,
      name: "TempGuard Wireless",
      category: "sensors",
      type: "Temperature Sensor",
      manufacturer: "TempGuard",
      image: "/images/devices/tempguard-sensor.jpg",
      features: [
        "Cold chain monitoring",
        "Wireless connectivity",
        "Alert notifications",
        "Data logging",
      ],
      connectivity: ["Bluetooth", "LoRaWAN"],
      installation: "Easy mount",
      battery: "2-year battery life",
      rating: 4.4,
      popular: false,
      industries: ["Food Transport", "Pharmaceuticals", "Retail"],
      price: "Mid-range",
    },

    // Mobile Devices
    {
      id: 8,
      name: "Rugged Tablet RT-10",
      category: "mobile",
      type: "Industrial Tablet",
      manufacturer: "RuggedTech",
      image: "/images/devices/rugged-tablet.jpg",
      features: [
        "IP68 waterproof",
        "Drop resistant",
        "Long battery",
        "GPS navigation",
      ],
      connectivity: ["4G LTE", "Wi-Fi", "Bluetooth", "GPS"],
      installation: "Vehicle mount",
      battery: "10-hour operation",
      rating: 4.6,
      popular: false,
      industries: ["Field Services", "Construction", "Delivery"],
      price: "Premium",
    },

    // Specialized Equipment
    {
      id: 9,
      name: "AgriTrack Combine Monitor",
      category: "specialized",
      type: "Agricultural Tracker",
      manufacturer: "AgriTrack",
      image: "/images/devices/agritrack-monitor.jpg",
      features: [
        "Harvest monitoring",
        "Field mapping",
        "Yield tracking",
        "Equipment diagnostics",
      ],
      connectivity: ["4G", "GPS", "CAN J1939", "ISOBUS"],
      installation: "Professional required",
      battery: "Equipment powered",
      rating: 4.7,
      popular: false,
      industries: ["Agriculture", "Farming", "Harvesting"],
      price: "Premium",
    },
    {
      id: 10,
      name: "Construction Pro Tracker",
      category: "specialized",
      type: "Heavy Equipment",
      manufacturer: "BuildTech",
      image: "/images/devices/construction-tracker.jpg",
      features: [
        "Asset tracking",
        "Usage monitoring",
        "Theft prevention",
        "Maintenance scheduling",
      ],
      connectivity: ["4G LTE", "GPS", "Accelerometer"],
      installation: "Professional required",
      battery: "Equipment powered",
      rating: 4.5,
      popular: true,
      industries: ["Construction", "Mining", "Heavy Equipment"],
      price: "Premium",
    },
  ];

  // Filter devices based on category and search
  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesCategory =
        activeCategory === "all" || device.category === activeCategory;
      const matchesSearch =
        device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getInstallationIcon = (installation) => {
    switch (installation) {
      case "Plug & Play":
        return <Zap className="w-4 h-4 text-green-500" />;
      case "Professional required":
        return <Wrench className="w-4 h-4 text-orange-500" />;
      case "Professional recommended":
        return <Settings className="w-4 h-4 text-blue-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getPriceColor = (price) => {
    switch (price) {
      case "Budget":
        return "text-green-600 bg-green-50";
      case "Mid-range":
        return "text-blue-600 bg-blue-50";
      case "Premium":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            <Cpu className="w-4 h-4" />
            Hardware Compatibility
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            3,800+ Compatible Devices
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            FleetInfinity works with virtually every GPS tracker, dash camera,
            and sensor on the market. From basic OBD trackers to advanced
            AI-powered cameras — we've got you covered.
          </p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-green">700+</div>
              <div className="text-sm text-gray-600">Manufacturers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-green">3,800+</div>
              <div className="text-sm text-gray-600">Device Models</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-green">160+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Interface */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search devices, manufacturers, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-brand-green text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-green hover:text-brand-green"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={
                    activeCategory === category.id
                      ? "text-white"
                      : category.color
                  }
                >
                  {category.icon}
                </span>
                {category.name}
                <span className="text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Device Grid */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredDevices.map((device, index) => (
                <motion.div
                  key={device.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedDevice(device)}
                >
                  {/* Device Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">
                          {device.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {device.manufacturer} • {device.type}
                        </p>
                      </div>
                      {device.popular && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {device.rating}
                        </span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getPriceColor(
                          device.price
                        )}`}
                      >
                        {device.price}
                      </span>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 mb-4">
                      {device.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Installation and Battery */}
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1">
                        {getInstallationIcon(device.installation)}
                        <span>{device.installation}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Battery className="w-4 h-4" />
                        <span>
                          {device.battery.includes("battery")
                            ? "Battery"
                            : "Powered"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-1">
                      {device.industries.slice(0, 2).map((industry, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {industry}
                        </span>
                      ))}
                      {device.industries.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{device.industries.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="px-6 pb-6">
                    <button className="w-full bg-gray-50 hover:bg-brand-green hover:text-white text-gray-600 font-medium py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredDevices.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No devices found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or category filter
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-brand-green/10 to-blue-500/10 rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Can't Find Your Device?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly adding new devices to our platform. Send us your
            device specifications and we'll explore integration options for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors flex items-center gap-2 group">
              Request Device Integration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-green text-brand-green px-8 py-3 rounded-lg font-semibold hover:bg-brand-green hover:text-white transition-colors">
              Contact Technical Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceCompatibilityShowcase;
