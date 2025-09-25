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
  ChevronDown,
  Grid,
  List,
  Eye,
  Download,
} from "lucide-react";

const DeviceCompatibilityShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("popular"); // 'popular', 'name', 'rating'

  // Comprehensive device categories
  const categories = [
    {
      id: "all",
      name: "All Devices",
      icon: <Globe className="w-5 h-5" />,
      color: "text-gray-600",
      count: "3,847",
    },
    {
      id: "gps",
      name: "GPS Trackers",
      icon: <Car className="w-5 h-5" />,
      color: "text-blue-600",
      count: "2,156",
    },
    {
      id: "cameras",
      name: "Dash Cameras",
      icon: <Camera className="w-5 h-5" />,
      color: "text-purple-600",
      count: "487",
    },
    {
      id: "sensors",
      name: "Sensors",
      icon: <Thermometer className="w-5 h-5" />,
      color: "text-green-600",
      count: "834",
    },
    {
      id: "mobile",
      name: "Mobile Devices",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-orange-600",
      count: "218",
    },
    {
      id: "specialized",
      name: "Specialized",
      icon: <Tractor className="w-5 h-5" />,
      color: "text-red-600",
      count: "152",
    },
  ];

  // Generate comprehensive device database
  const generateDevices = () => {
    const manufacturers = [
      "Teltonika",
      "Queclink",
      "CalAmp",
      "Samsara",
      "Mobileye",
      "Geotab",
      "Verizon Connect",
      "Garmin",
      "TomTom",
      "Concox",
      "Coban",
      "Ruptela",
      "BCE",
      "Globalstar",
      "Iridium",
      "Laird",
      "Neomatica",
      "Aplicom",
      "Suntech",
      "Meitrack",
      "Jointech",
      "Telematic Solutions",
      "Trackimo",
      "SpyTec",
      "Americaloc",
      "LandAirSea",
      "Optimus",
      "BlackVue",
      "Thinkware",
      "Nextbase",
      "Dash Cam Pro",
      "Vantrue",
      "APEMAN",
      "AZDOME",
      "Crosstour",
    ];

    const gpsModels = [
      "FMB920",
      "FMB640",
      "FMT100",
      "TMT250",
      "FMB125",
      "FMC125",
      "FMB010",
      "GL300W",
      "GV300W",
      "GV500MA",
      "GV600MG",
      "GT301",
      "GV20MG",
      "ST901L",
      "LMU-5530",
      "LMU-4220",
      "LMU-3030",
      "TTU-1230",
      "TTU-2830",
      "SC-1004",
      "GO9",
      "GO7",
      "GO6",
      "MyGeotab GO",
      "Drive",
      "Keystone IoT Gateway",
    ];

    const cameraModels = [
      "CM32",
      "CM31",
      "AI-12",
      "DashCam Pro",
      "SmartCam HD",
      "VisionAI",
      "8 Connect",
      "630",
      "Shield+",
      "EyeQ4",
      "SuperVision",
      "REM-220",
      "622GW",
      "522GW",
      "422GW",
      "320GW",
      "DR900X",
      "DR750X",
      "F800PRO",
      "N4",
      "T700",
      "S1P",
      "A129",
      "N2 Pro",
      "T2",
    ];

    const sensorTypes = [
      "Fuel Level",
      "Temperature",
      "Door Status",
      "Cargo Weight",
      "Tire Pressure",
      "Engine Hours",
      "PTO Status",
      "Refrigeration",
      "Humidity",
      "Shock/Impact",
      "Light Sensor",
      "Driver ID",
      "Panic Button",
      "Trailer Connection",
      "Load Status",
    ];

    const deviceTypes = {
      gps: [
        "OBD Tracker",
        "Hardwired Tracker",
        "Portable Tracker",
        "Asset Tracker",
        "Personal Tracker",
      ],
      cameras: [
        "AI Dash Camera",
        "Dual Camera",
        "Fleet Camera",
        "ADAS Camera",
        "Security Camera",
      ],
      sensors: [
        "Fuel Sensor",
        "Temperature Sensor",
        "Door Sensor",
        "Weight Sensor",
        "Environmental Sensor",
      ],
      mobile: [
        "Rugged Tablet",
        "Smartphone",
        "Driver Display",
        "Navigation Device",
        "Communication Device",
      ],
      specialized: [
        "Agricultural Tracker",
        "Construction Monitor",
        "Mining Equipment",
        "Marine Tracker",
        "Aviation GPS",
      ],
    };

    const industries = [
      "Fleet Management",
      "Logistics",
      "Construction",
      "Agriculture",
      "Public Transport",
      "Emergency Services",
      "Food Delivery",
      "Waste Management",
      "Field Services",
      "Mining",
      "Maritime",
      "Aviation",
      "Rental Cars",
      "School Bus",
      "Medical Transport",
      "Personal Use",
      "Family Safety",
      "Pet Tracking",
      "Asset Protection",
      "Elderly Care",
    ];

    const devices = [];
    let deviceId = 1;

    // Generate devices for each category
    Object.keys(deviceTypes).forEach((category) => {
      const categoryCount =
        category === "gps"
          ? 2156
          : category === "cameras"
          ? 487
          : category === "sensors"
          ? 834
          : category === "mobile"
          ? 218
          : 152;

      for (let i = 0; i < categoryCount; i++) {
        const manufacturer =
          manufacturers[Math.floor(Math.random() * manufacturers.length)];
        const deviceTypeList = deviceTypes[category];
        const deviceType =
          deviceTypeList[Math.floor(Math.random() * deviceTypeList.length)];

        let modelName;
        if (category === "gps") {
          modelName =
            gpsModels[Math.floor(Math.random() * gpsModels.length)] +
            (i > gpsModels.length
              ? `-${Math.floor(i / gpsModels.length)}`
              : "");
        } else if (category === "cameras") {
          modelName =
            cameraModels[Math.floor(Math.random() * cameraModels.length)] +
            (i > cameraModels.length
              ? `-${Math.floor(i / cameraModels.length)}`
              : "");
        } else {
          modelName = `${deviceType.split(" ")[0]}-${1000 + i}`;
        }

        const features = [];
        const baseFeatures = {
          gps: [
            "Real-time tracking",
            "Geofencing",
            "Driver behavior",
            "Route history",
            "Speed alerts",
            "Anti-theft",
          ],
          cameras: [
            "HD video",
            "Night vision",
            "Live streaming",
            "Event recording",
            "Driver coaching",
            "Cloud storage",
          ],
          sensors: [
            "Real-time monitoring",
            "Alert notifications",
            "Data logging",
            "Wireless connectivity",
            "Long battery",
            "Weather resistant",
          ],
          mobile: [
            "GPS navigation",
            "Communication",
            "App integration",
            "Rugged design",
            "Long battery",
            "Vehicle mount",
          ],
          specialized: [
            "Industry specific",
            "Heavy duty",
            "Advanced diagnostics",
            "Custom integration",
            "Professional grade",
            "Specialized mounting",
          ],
        };

        const categoryFeatures = baseFeatures[category];
        const numFeatures = Math.floor(Math.random() * 3) + 3; // 3-5 features
        for (let f = 0; f < numFeatures; f++) {
          const feature =
            categoryFeatures[
              Math.floor(Math.random() * categoryFeatures.length)
            ];
          if (!features.includes(feature)) features.push(feature);
        }

        const deviceIndustries = [];
        const numIndustries = Math.floor(Math.random() * 4) + 2; // 2-5 industries
        for (let ind = 0; ind < numIndustries; ind++) {
          const industry =
            industries[Math.floor(Math.random() * industries.length)];
          if (!deviceIndustries.includes(industry))
            deviceIndustries.push(industry);
        }

        const connectivity =
          category === "gps"
            ? ["4G LTE", "GPS/GLONASS", "Bluetooth"]
            : category === "cameras"
            ? ["4G LTE", "Wi-Fi", "GPS"]
            : category === "sensors"
            ? ["Bluetooth", "LoRaWAN", "RS485"]
            : category === "mobile"
            ? ["4G LTE", "Wi-Fi", "Bluetooth", "GPS"]
            : ["4G LTE", "GPS", "CAN J1939"];

        const installations = [
          "Plug & Play",
          "Professional required",
          "Professional recommended",
          "Easy mount",
          "No installation",
        ];
        const prices = ["Budget", "Mid-range", "Premium"];
        const batteryTypes = [
          "12-24V vehicle power",
          "12V vehicle power",
          "Rechargeable battery",
          "Equipment powered",
          "2-year battery life",
        ];

        devices.push({
          id: deviceId++,
          name: `${manufacturer} ${modelName}`,
          category: category,
          type: deviceType,
          manufacturer: manufacturer,
          image: `/images/devices/${category}-${deviceId}.jpg`,
          features: features,
          connectivity: connectivity,
          installation:
            installations[Math.floor(Math.random() * installations.length)],
          battery:
            batteryTypes[Math.floor(Math.random() * batteryTypes.length)],
          rating: Number((3.5 + Math.random() * 1.5).toFixed(1)), // 3.5-5.0 rating
          popular: Math.random() > 0.85, // 15% are popular
          industries: deviceIndustries,
          price: prices[Math.floor(Math.random() * prices.length)],
          releaseYear: 2020 + Math.floor(Math.random() * 5), // 2020-2024
          certifications:
            Math.random() > 0.7 ? ["FCC", "CE", "IC"] : ["FCC", "CE"],
        });
      }
    });

    return devices;
  };

  const [allDevices] = useState(() => generateDevices());

  // Filter and sort devices
  const filteredDevices = useMemo(() => {
    let filtered = allDevices.filter((device) => {
      const matchesCategory =
        activeCategory === "all" || device.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.features.some((feature) =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });

    // Sort devices
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.releaseYear - a.releaseYear;
        default:
          return 0;
      }
    });

    return filtered;
  }, [allDevices, activeCategory, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredDevices.length / devicesPerPage);
  const currentDevices = filteredDevices.slice(
    (currentPage - 1) * devicesPerPage,
    currentPage * devicesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get installation icon (previous implementation)
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
            Hardware Compatibility Database
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            3,847 Compatible Devices
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The world's most comprehensive fleet hardware database. From budget
            OBD trackers to enterprise-grade telematics solutions — find the
            perfect device for your needs.
          </p>

          {/* Enhanced Stats */}
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">750+</div>
              <div className="text-sm text-gray-600">Manufacturers</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">3,847</div>
              <div className="text-sm text-gray-600">Device Models</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">160+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">24/7</div>
              <div className="text-sm text-gray-600">Integration Support</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Search and Filter Interface */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Search Bar with Advanced Options */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search 3,847 devices by name, manufacturer, features, or model number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              {filteredDevices.length} results
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
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

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">View:</span>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-brand-green text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-brand-green text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <div className="max-w-6xl mx-auto mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * devicesPerPage + 1}-
                {Math.min(currentPage * devicesPerPage, filteredDevices.length)}
              </span>{" "}
              of <span className="font-medium">{filteredDevices.length}</span>{" "}
              devices
            </p>
            <div className="flex items-center gap-2">
              <button className="text-brand-green hover:text-brand-green-dark flex items-center gap-1 text-sm">
                <Download className="w-4 h-4" />
                Export Results
              </button>
            </div>
          </div>
        </div>

        {/* Device Grid/List */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${currentPage}-${viewMode}`}
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentDevices.map((device, index) => (
                <motion.div
                  key={device.id}
                  className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    viewMode === "list" ? "flex items-center p-4 gap-6" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {viewMode === "grid" ? (
                    // Grid View (previous implementation)
                    <>
                      <div className="p-6 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">
                              {device.name}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              {device.manufacturer} • {device.type}
                            </p>
                          </div>
                          {device.popular && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 ml-2 flex-shrink-0">
                              <Star className="w-3 h-3 fill-current" />
                              Popular
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {device.rating}
                            </span>
                            <span className="text-xs text-gray-400">
                              ({device.releaseYear})
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

                        <div className="space-y-2 mb-4">
                          {device.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600 truncate">
                                {feature}
                              </span>
                            </div>
                          ))}
                          {device.features.length > 3 && (
                            <div className="text-xs text-gray-400">
                              +{device.features.length - 3} more features
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-1">
                            {getInstallationIcon(device.installation)}
                            <span className="truncate">
                              {device.installation}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Battery className="w-4 h-4 flex-shrink-0" />
                            <span>
                              {device.battery.includes("battery")
                                ? "Battery"
                                : "Powered"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 pb-4">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {device.industries
                            .slice(0, 2)
                            .map((industry, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded truncate"
                              >
                                {industry}
                              </span>
                            ))}
                          {device.industries.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{device.industries.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="px-6 pb-6">
                        <button className="w-full bg-gray-50 hover:bg-brand-green hover:text-white text-gray-600 font-medium py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">
                              {device.name}
                            </h3>
                            <p className="text-gray-500">
                              {device.manufacturer} • {device.type}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {device.popular && (
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" />
                                Popular
                              </span>
                            )}
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium ${getPriceColor(
                                device.price
                              )}`}
                            >
                              {device.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {device.rating}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          {getInstallationIcon(device.installation)}
                          <span className="text-sm text-gray-500">
                            {device.installation}
                          </span>
                        </div>

                        <button className="bg-brand-green text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-green-dark transition-colors flex items-center gap-2">
                          View Details
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  )}
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
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setCurrentPage(1);
                }}
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
              const pageNum =
                Math.max(
                  1,
                  Math.min(totalPages - 9, Math.max(1, currentPage - 5))
                ) + i;
              if (pageNum > totalPages) return null;

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === pageNum
                      ? "bg-brand-green text-white"
                      : "border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 10 && currentPage < totalPages - 5 && (
              <span className="px-2 text-gray-400">...</span>
            )}

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-brand-green/10 to-blue-500/10 rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Choosing the Right Device?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our hardware specialists can recommend the perfect devices for your
            specific use case, budget, and technical requirements. Get
            personalized recommendations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors flex items-center gap-2 group">
              Get Device Recommendations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-green text-brand-green px-8 py-3 rounded-lg font-semibold hover:bg-brand-green hover:text-white transition-colors">
              Download Full Compatibility List
            </button>
            <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Request Custom Integration
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceCompatibilityShowcase;
