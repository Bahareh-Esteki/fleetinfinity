// app/components/DeviceCompatibilityShowcase.js - COMPACT VERSION
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
} from "lucide-react";

// Import the device database
import { deviceCategories, realDevices } from "../../data/deviceDatabase";
import { getIcon } from "../../utils/iconMapping";

const RealDeviceCompatibilityShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(15); // Show more devices per page
  const [sortBy, setSortBy] = useState("verified");

  // Use imported device data with icons
  const categories = deviceCategories.map((cat) => ({
    ...cat,
    icon: getIcon(cat.icon, { className: "w-4 h-4" }),
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

  const getInstallationIcon = (installation) => {
    if (installation.includes("plug"))
      return <Zap className="w-3 h-3 text-green-500" />;
    if (installation.includes("Professional"))
      return <Wrench className="w-3 h-3 text-orange-500" />;
    if (installation.includes("recommended"))
      return <Settings className="w-3 h-3 text-blue-500" />;
    return <CheckCircle className="w-3 h-3 text-green-500" />;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-3 py-1.5 text-xs font-medium text-brand-green mb-4">
            <Shield className="w-3 h-3" />
            Hardware Compatibility Database
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
            {realDevices.length}+ Compatible Devices
          </h2>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Comprehensive database of tested and verified GPS trackers, dash
            cameras, and sensors. All specifications verified by our technical
            team.
          </p>

          {/* Compact Stats */}
          <div className="grid md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-brand-green">15+</div>
              <div className="text-xs text-gray-600">Manufacturers</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-brand-green">
                {realDevices.length}+
              </div>
              <div className="text-xs text-gray-600">Devices</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-brand-green">100%</div>
              <div className="text-xs text-gray-600">Verified</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-brand-green">24/7</div>
              <div className="text-xs text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Compact Search and Filter */}
        <motion.div
          className="max-w-5xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search devices, manufacturers, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
              {filteredDevices.length} results
            </div>
          </div>

          {/* Compact Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
                <span className="text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* Compact Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-gray-600">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-md px-2 py-1 text-xs focus:ring-1 focus:ring-brand-green focus:border-transparent"
              >
                <option value="verified">Popular & Verified</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-gray-600">View:</span>
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 ${
                    viewMode === "grid"
                      ? "bg-brand-green text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 ${
                    viewMode === "list"
                      ? "bg-brand-green text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <List className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <div className="max-w-5xl mx-auto mb-4">
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-600">
              <span className="font-medium">
                {(currentPage - 1) * devicesPerPage + 1}-
                {Math.min(currentPage * devicesPerPage, filteredDevices.length)}
              </span>{" "}
              of <span className="font-medium">{filteredDevices.length}</span>{" "}
              devices
            </p>
            <button className="text-brand-green hover:text-brand-green-dark flex items-center gap-1 text-xs">
              <Download className="w-3 h-3" />
              Export
            </button>
          </div>
        </div>

        {/* COMPACT DEVICE CARDS */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${currentPage}-${viewMode}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentDevices.map((device, index) => (
                <motion.div
                  key={device.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  {/* Compact Header */}
                  <div className="p-3 border-b border-gray-50">
                    <div className="flex items-start justify-between mb-1">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm text-gray-800 truncate">
                          {device.name}
                        </h3>
                        <p className="text-gray-500 text-xs truncate">
                          {device.manufacturer}
                        </p>
                      </div>
                      <div className="flex gap-1 ml-2 flex-shrink-0">
                        {device.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded-full">
                            <Shield className="w-2.5 h-2.5 inline" />
                          </span>
                        )}
                        {device.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full">
                            <Star className="w-2.5 h-2.5 fill-current inline" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Compact Rating & Info */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">
                          {device.marketRating}
                        </span>
                        <span className="text-gray-400">
                          ({device.releaseYear})
                        </span>
                      </div>
                      {device.port && (
                        <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-xs">
                          Port: {device.port}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Compact Content */}
                  <div className="p-3">
                    {/* Device Type */}
                    <div className="mb-2">
                      <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                        {device.type}
                      </span>
                    </div>

                    {/* Top 2 Features Only */}
                    <div className="space-y-1 mb-3">
                      {device.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1">
                          <CheckCircle className="w-2.5 h-2.5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-600 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {device.features.length > 2 && (
                        <div className="text-xs text-blue-600 ml-3.5">
                          +{device.features.length - 2} more
                        </div>
                      )}
                    </div>

                    {/* Compact Technical Info */}
                    <div className="space-y-1 mb-3 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Installation:</span>
                        <div className="flex items-center gap-1">
                          {getInstallationIcon(device.installation)}
                          <span className="text-gray-700">
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
                        <span className="text-gray-700">
                          {device.powerSupply.includes("battery")
                            ? "Battery"
                            : device.powerSupply.includes("12V")
                            ? "12V"
                            : "Vehicle"}
                        </span>
                      </div>
                    </div>

                    {/* Top Connectivity Tags */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {device.connectivity.slice(0, 2).map((conn, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded"
                          >
                            {conn}
                          </span>
                        ))}
                        {device.connectivity.length > 2 && (
                          <span className="text-xs text-gray-400">
                            +{device.connectivity.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Top Industries */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {device.industries.slice(0, 2).map((industry, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
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

                    {/* Compact Action */}
                    <button className="w-full bg-brand-green text-white py-2 px-2 rounded-md text-xs font-medium hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-1">
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredDevices.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                No devices found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or category filter
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setCurrentPage(1);
                }}
                className="bg-brand-green text-white px-4 py-2 rounded-md text-sm hover:bg-brand-green-dark transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Compact Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center gap-1 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm"
            >
              Prev
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
                  className={`px-3 py-1.5 rounded-md transition-colors text-sm ${
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
              className="px-3 py-1.5 border border-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Compact CTA */}
        <motion.div
          className="text-center mt-12 p-6 bg-gradient-to-r from-brand-green/10 to-blue-500/10 rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-brand-green" />
            <h3 className="text-xl font-bold text-gray-800">
              Need Device Support?
            </h3>
          </div>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto text-sm">
            Can't find your device? Our technical team can help you integrate
            almost any GPS tracker or sensor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-brand-green text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-green-dark transition-colors flex items-center gap-2 group text-sm">
              Request Integration
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-green text-brand-green px-6 py-2.5 rounded-lg font-medium hover:bg-brand-green hover:text-white transition-colors text-sm">
              Technical Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealDeviceCompatibilityShowcase;
