// app/components/DeviceCompatibilityShowcase.js - ENHANCED COMPACT VERSION
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Cpu,
  Battery,
  Wrench,
  Settings,
  Grid,
  List,
  Eye,
  Download,
  ExternalLink,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Import the device database
import { deviceCategories, realDevices } from "../../data/deviceDatabase";
import { getIcon } from "../../utils/iconMapping";

const RealDeviceCompatibilityShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(15);
  const [sortBy, setSortBy] = useState("verified");
  const [showResults, setShowResults] = useState(false); // NEW: Control results visibility
  const [expandedCards, setExpandedCards] = useState(new Set()); // NEW: Track expanded cards

  // Use imported device data with icons
  const categories = deviceCategories.map((cat) => ({
    ...cat,
    icon: getIcon(cat.icon, { className: "w-5 h-5" }), // Increased icon size
  }));

  // Filter and sort devices
  const filteredDevices = useMemo(() => {
    let filtered = realDevices.filter((device) => {
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

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "verified":
          if (a.verified && !b.verified) return -1;
          if (!a.verified && b.verified) return 1;
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return (b.marketRating || 0) - (a.marketRating || 0);
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return (b.marketRating || 0) - (a.marketRating || 0);
        case "newest":
          return (b.releaseYear || 0) - (a.releaseYear || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDevices.length / devicesPerPage);
  const currentDevices = filteredDevices.slice(
    (currentPage - 1) * devicesPerPage,
    currentPage * devicesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // NEW: Handle search button click
  const handleSearchClick = () => {
    setShowResults(true);
    setCurrentPage(1);
  };

  // NEW: Handle search input enter key
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  // NEW: Toggle card expansion
  const toggleCardExpansion = (deviceId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(deviceId)) {
      newExpanded.delete(deviceId);
    } else {
      newExpanded.add(deviceId);
    }
    setExpandedCards(newExpanded);
  };

  const getInstallationIcon = (installation) => {
    if (installation.includes("plug"))
      return <Zap className="w-4 h-4 text-green-500" />;
    if (installation.includes("Professional"))
      return <Wrench className="w-4 h-4 text-orange-500" />;
    if (installation.includes("recommended"))
      return <Settings className="w-4 h-4 text-blue-500" />;
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      {" "}
      {/* Increased padding */}
      <div className="container mx-auto px-4">
        {/* Enhanced Header with larger fonts */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16" // Increased margin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            <Shield className="w-4 h-4" />
            Hardware Compatibility Database
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            {" "}
            {/* Increased font size */}
            {realDevices.length}+ Compatible Devices
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {" "}
            {/* Increased font size */}
            Comprehensive database of tested and verified GPS trackers, dash
            cameras, and sensors. All specifications verified by our technical
            team.
          </p>

          {/* Enhanced Stats with larger fonts */}
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">15+</div>{" "}
              {/* Increased font size */}
              <div className="text-sm text-gray-600">Manufacturers</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">
                {realDevices.length}+
              </div>
              <div className="text-sm text-gray-600">Devices</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">100%</div>
              <div className="text-sm text-gray-600">Verified</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Search Interface */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Enhanced Search Bar */}
          <div className="relative mb-6">
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-col sm:flex-row gap-2 sm:gap-0"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search devices, manufacturers, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-24 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent text-base"
                />
              </div>
              <button
                type="submit"
                className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 bg-brand-green text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-green-dark transition-colors text-sm"
                style={{ minWidth: "96px" }}
              >
                Search
              </button>
            </form>
          </div>

          {/* Show search prompt when no results are displayed */}
          {!showResults && (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Search Our Device Database
              </h3>
              <p className="text-gray-600 mb-4">
                Enter a search term or click search to browse all{" "}
                {realDevices.length}+ compatible devices
              </p>
            </div>
          )}

          {/* Show filters only when results are visible */}
          {showResults && (
            <>
              {/* Enhanced Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-brand-green text-white shadow-md"
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
                    <span className="text-xs opacity-75">
                      ({category.count})
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Controls */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">
                    Sort:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-brand-green focus:border-transparent"
                  >
                    <option value="verified">Popular & Verified</option>
                    <option value="name">Name A-Z</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">
                    View:
                  </span>
                  <div className="flex border border-gray-200 rounded-md overflow-hidden">
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
            </>
          )}
        </motion.div>

        {/* Results Summary - only show when results are visible */}
        {showResults && (
          <div className="max-w-5xl mx-auto mb-6">
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-600">
                <span className="font-medium">
                  {(currentPage - 1) * devicesPerPage + 1}-
                  {Math.min(
                    currentPage * devicesPerPage,
                    filteredDevices.length
                  )}
                </span>{" "}
                of <span className="font-medium">{filteredDevices.length}</span>{" "}
                devices
              </p>
              <div className="flex items-center gap-4">
                <button className="text-brand-green hover:text-brand-green-dark flex items-center gap-1 text-sm">
                  <Download className="w-4 h-4" />
                  Export
                </button>
                <button
                  onClick={() => setShowResults(false)}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Hide Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ENHANCED DEVICE CARDS - only show when results are visible */}
        {showResults && (
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${searchQuery}-${currentPage}-${viewMode}`}
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" // Increased gap
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentDevices.map((device, index) => {
                  const isExpanded = expandedCards.has(device.id);

                  return (
                    <motion.div
                      key={device.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      layout // Enable layout animations for expansion
                    >
                      {/* Enhanced Header */}
                      <div className="p-4 border-b border-gray-50">
                        <div className="flex items-start justify-between mb-2">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-base text-gray-800 truncate">
                              {device.name}
                            </h3>{" "}
                            {/* Increased font size */}
                            <p className="text-gray-500 text-sm truncate">
                              {device.manufacturer}
                            </p>
                          </div>
                          <div className="flex gap-1 ml-2 flex-shrink-0">
                            {device.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                <Shield className="w-3 h-3 inline" />
                              </span>
                            )}
                            {device.popular && (
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                <Star className="w-3 h-3 fill-current inline" />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Enhanced Rating & Info */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">
                              {device.marketRating}
                            </span>
                            <span className="text-gray-400">
                              ({device.releaseYear})
                            </span>
                          </div>
                          {device.port && (
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              Port: {device.port}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Content */}
                      <div className="p-4">
                        {/* Device Type */}
                        <div className="mb-3">
                          <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                            {device.type}
                          </span>
                        </div>

                        {/* Features - Show 2 by default, more when expanded */}
                        <div className="space-y-2 mb-4">
                          {device.features
                            .slice(0, isExpanded ? device.features.length : 2)
                            .map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600 leading-tight">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          {!isExpanded && device.features.length > 2 && (
                            <div className="text-sm text-blue-600 ml-5">
                              +{device.features.length - 2} more features
                            </div>
                          )}
                        </div>

                        {/* Compact Technical Info - Show more when expanded */}
                        <div
                          className={`space-y-2 mb-4 text-sm ${
                            isExpanded ? "" : "space-y-1"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Installation:</span>
                            <div className="flex items-center gap-1">
                              {getInstallationIcon(device.installation)}
                              <span className="text-gray-700 text-sm">
                                {device.installation.includes("Professional")
                                  ? "Pro Install"
                                  : device.installation.includes("plug")
                                  ? "Plug & Play"
                                  : "Easy"}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">Power:</span>
                            <span className="text-gray-700 text-sm">
                              {device.powerSupply.includes("battery")
                                ? "Battery"
                                : device.powerSupply.includes("12V")
                                ? "12V"
                                : "Vehicle"}
                            </span>
                          </div>

                          {/* Show additional details when expanded */}
                          {isExpanded && (
                            <>
                              {device.operatingTemp && (
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-500">
                                    Operating Temp:
                                  </span>
                                  <span className="text-gray-700 text-sm">
                                    {device.operatingTemp}
                                  </span>
                                </div>
                              )}
                              {device.certifications && (
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-500">
                                    Certifications:
                                  </span>
                                  <span className="text-gray-700 text-sm">
                                    {device.certifications
                                      .slice(0, 2)
                                      .join(", ")}
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        {/* Connectivity Tags */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {device.connectivity
                              .slice(
                                0,
                                isExpanded ? device.connectivity.length : 2
                              )
                              .map((conn, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                                >
                                  {conn}
                                </span>
                              ))}
                            {!isExpanded && device.connectivity.length > 2 && (
                              <span className="text-xs text-gray-400">
                                +{device.connectivity.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Industries */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {device.industries
                              .slice(
                                0,
                                isExpanded ? device.industries.length : 2
                              )
                              .map((industry, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                >
                                  {industry}
                                </span>
                              ))}
                            {!isExpanded && device.industries.length > 2 && (
                              <span className="text-xs text-gray-400">
                                +{device.industries.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Show pros/cons when expanded */}
                        {isExpanded && device.pros && (
                          <div className="grid grid-cols-1 gap-3 mb-4">
                            <div>
                              <h5 className="font-medium text-green-700 mb-2 flex items-center gap-1 text-sm">
                                <CheckCircle className="w-4 h-4" />
                                Advantages
                              </h5>
                              <ul className="space-y-1">
                                {device.pros.map((pro, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600"
                                  >
                                    • {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {device.considerations && (
                              <div>
                                <h5 className="font-medium text-orange-700 mb-2 flex items-center gap-1 text-sm">
                                  <Settings className="w-4 h-4" />
                                  Considerations
                                </h5>
                                <ul className="space-y-1">
                                  {device.considerations.map(
                                    (consideration, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm text-gray-600"
                                      >
                                        • {consideration}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Enhanced Actions */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleCardExpansion(device.id)}
                            className="flex-1 bg-gray-50 hover:bg-brand-green hover:text-white text-gray-600 font-medium py-2.5 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
                          >
                            {isExpanded ? (
                              <>
                                Show Less
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                              </>
                            ) : (
                              <>
                                See Details
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                              </>
                            )}
                          </button>
                          {device.documentationUrl && (
                            <button className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredDevices.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-5xl mb-4">🔍</div>
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
                  className="bg-brand-green text-white px-6 py-3 rounded-lg text-sm hover:bg-brand-green-dark transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}

            {/* Enhanced Pagination */}
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
                  className="px-4 py-2 border border-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm"
                >
                  Previous
                </button>

                {/* Simplified Page Numbers */}
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  const pageNum =
                    Math.max(
                      1,
                      Math.min(totalPages - 6, Math.max(1, currentPage - 3))
                    ) + i;
                  if (pageNum > totalPages) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-4 py-2 rounded-md transition-colors text-sm ${
                        currentPage === pageNum
                          ? "bg-brand-green text-white"
                          : "border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm"
                >
                  Next
                </button>
              </motion.div>
            )}
          </div>
        )}

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-brand-green/10 to-blue-500/10 rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-brand-green" />
            <h3 className="text-2xl font-bold text-gray-800">
              {" "}
              {/* Increased font size */}
              Need Device Support?
            </h3>
          </div>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-base">
            {" "}
            {/* Increased font size */}
            Can't find your device? Our technical team can help you integrate
            almost any GPS tracker or sensor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-green-dark transition-colors flex items-center gap-2 group text-base">
              {" "}
              {/* Increased font size */}
              Request Integration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-green text-brand-green px-8 py-3 rounded-lg font-medium hover:bg-brand-green hover:text-white transition-colors text-base">
              Technical Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealDeviceCompatibilityShowcase;
