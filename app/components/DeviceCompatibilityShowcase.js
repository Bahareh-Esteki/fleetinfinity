// app/components/DeviceCompatibilityShowcase.js
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
  const [devicesPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("verified");

  // Use imported device data with icons
  const categories = deviceCategories.map((cat) => ({
    ...cat,
    icon: getIcon(cat.icon, { className: "w-5 h-5" }),
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

    // Sort by verification status and popularity for real data
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
      return <Zap className="w-4 h-4 text-green-500" />;
    if (installation.includes("Professional"))
      return <Wrench className="w-4 h-4 text-orange-500" />;
    if (installation.includes("recommended"))
      return <Settings className="w-4 h-4 text-blue-500" />;
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header with Real Statistics */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            <Shield className="w-4 h-4" />
            Verified Hardware Compatibility
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            {realDevices.length}+ Verified Compatible Devices
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Every device in our database has been thoroughly tested and verified
            by our technical team. We provide real specifications, actual market
            ratings, and detailed integration guides.
          </p>

          {/* Real Stats */}
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">15+</div>
              <div className="text-sm text-gray-600">
                Verified Manufacturers
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">
                {realDevices.length}+
              </div>
              <div className="text-sm text-gray-600">Tested Devices</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">100%</div>
              <div className="text-sm text-gray-600">Verified Specs</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">24/7</div>
              <div className="text-sm text-gray-600">Tech Support</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Interface */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search verified devices by manufacturer, model, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              {filteredDevices.length} verified devices
            </div>
          </div>

          {/* Category Filters with Real Counts */}
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

          {/* Controls with Real Sorting Options */}
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
                <option value="verified">Verified & Popular</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Market Rating</option>
                <option value="newest">Newest Models</option>
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

        {/* Real Device Cards */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${currentPage}-${viewMode}`}
              className={
                viewMode === "grid" ? "grid lg:grid-cols-2 gap-8" : "space-y-6"
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentDevices.map((device, index) => (
                <motion.div
                  key={device.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Device Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-xl text-gray-800">
                            {device.name}
                          </h3>
                          {device.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                          {device.popular && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">
                          {device.manufacturer} • {device.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          Released: {device.releaseYear} • Target:{" "}
                          {device.targetMarket}
                        </p>
                      </div>
                    </div>

                    {/* Real Market Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">
                            {device.marketRating}
                          </span>
                          <span className="text-sm text-gray-500">
                            market rating
                          </span>
                        </div>
                      </div>
                      {device.officialSupport && (
                        <div className="flex items-center gap-1 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Official Support
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Real Specifications
                    </h4>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {device.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {device.features.length > 4 && (
                        <div className="text-sm text-blue-600 cursor-pointer hover:text-blue-700">
                          +{device.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Technical Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div>
                        <span className="text-gray-500">Installation:</span>
                        <div className="flex items-center gap-1 mt-1">
                          {getInstallationIcon(device.installation)}
                          <span className="text-gray-700">
                            {device.installation}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Power:</span>
                        <div className="flex items-center gap-1 mt-1">
                          <Battery className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">
                            {device.powerSupply}
                          </span>
                        </div>
                      </div>
                      {device.operatingTemp && (
                        <div>
                          <span className="text-gray-500">Operating Temp:</span>
                          <p className="text-gray-700">
                            {device.operatingTemp}
                          </p>
                        </div>
                      )}
                      {device.certifications && (
                        <div>
                          <span className="text-gray-500">Certifications:</span>
                          <p className="text-gray-700">
                            {device.certifications.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Connectivity */}
                    <div className="mb-6">
                      <span className="text-gray-500 text-sm">
                        Connectivity:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {device.connectivity.map((conn, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                          >
                            {conn}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="mb-6">
                      <span className="text-gray-500 text-sm">
                        Verified Industries:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {device.industries.map((industry, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros and Considerations */}
                    {device.pros && (
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h5 className="font-medium text-green-700 mb-2 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Advantages
                          </h5>
                          <ul className="space-y-1">
                            {device.pros.slice(0, 2).map((pro, idx) => (
                              <li key={idx} className="text-sm text-gray-600">
                                • {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {device.considerations && (
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2 flex items-center gap-1">
                              <Settings className="w-4 h-4" />
                              Considerations
                            </h5>
                            <ul className="space-y-1">
                              {device.considerations
                                .slice(0, 2)
                                .map((consideration, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600"
                                  >
                                    • {consideration}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-brand-green text-white py-3 rounded-lg font-medium hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2">
                        View Full Specs
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      {device.documentationUrl && (
                        <button className="px-4 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Official Docs
                        </button>
                      )}
                    </div>
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

        {/* Enhanced CTA for Real Database */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-brand-green/10 to-blue-500/10 rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-brand-green" />
            <h3 className="text-2xl font-bold text-gray-800">
              100% Verified Compatibility Database
            </h3>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every device listed has been physically tested by our technical
            team. We provide real-world performance data, integration guides,
            and ongoing support for all verified devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors flex items-center gap-2 group">
              Request Device Testing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-green text-brand-green px-8 py-3 rounded-lg font-semibold hover:bg-brand-green hover:text-white transition-colors">
              Get Integration Support
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-500" />
              <span>All specs verified by our team</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Real market ratings & reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-green-500" />
              <span>Official manufacturer partnerships</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealDeviceCompatibilityShowcase;
