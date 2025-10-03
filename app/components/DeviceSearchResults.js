// app/components/DeviceSearchResults.js
"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Settings,
  Grid,
  List,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Home,
} from "lucide-react";

import { deviceCategories, realDevices } from "../../data/deviceDatabase";
import { getIcon } from "../../utils/iconMapping";

const DeviceSearchResults = ({
  initialQuery = "",
  initialCategory = "all",
}) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(20);
  const [sortBy, setSortBy] = useState("verified");
  const [expandedCards, setExpandedCards] = useState(new Set());

  const categories = deviceCategories.map((cat) => ({
    ...cat,
    icon: getIcon(cat.icon, { className: "w-5 h-5" }),
  }));

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

  const totalPages = Math.ceil(filteredDevices.length / devicesPerPage);
  const currentDevices = filteredDevices.slice(
    (currentPage - 1) * devicesPerPage,
    currentPage * devicesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    setCurrentPage(1);
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (activeCategory !== "all") params.set("category", activeCategory);
    router.push(`/device-search?${params.toString()}`);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (installation.includes("Professional"))
      return <Settings className="w-4 h-4 text-orange-500" />;
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header with back button */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Device Search Results
              </h1>
              <p className="text-gray-600">
                Browse {realDevices.length}+ compatible devices
              </p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-emerald-600"
            >
              <Home className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mb-6 max-w-4xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search devices, manufacturers, or features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearchKeyPress}
            className="w-full pl-12 pr-24 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-base"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
          >
            Search
          </button>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(1);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-600"
              }`}
            >
              <span
                className={
                  activeCategory === category.id ? "text-white" : category.color
                }
              >
                {category.icon}
              </span>
              {category.name}
              <span className="text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-lg p-4 border border-gray-200 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-emerald-600"
            >
              <option value="verified">Popular & Verified</option>
              <option value="name">Name A-Z</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">View:</span>
            <div className="flex border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-emerald-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-emerald-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="flex items-center justify-between text-sm mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * devicesPerPage + 1}-
              {Math.min(currentPage * devicesPerPage, filteredDevices.length)}
            </span>{" "}
            of <span className="font-medium">{filteredDevices.length}</span>{" "}
            devices
          </p>
          <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1 text-sm">
            <Download className="w-4 h-4" />
            Export Results
          </button>
        </div>

        {/* Device cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}-${currentPage}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ y: -3 }}
                  layout
                >
                  <div className="p-4 border-b border-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-base text-gray-800 truncate">
                          {device.name}
                        </h3>
                        <p className="text-gray-500 text-sm truncate">
                          {device.manufacturer}
                        </p>
                      </div>
                      <div className="flex gap-1 ml-2">
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

                  <div className="p-4">
                    <div className="mb-3">
                      <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {device.type}
                      </span>
                    </div>

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
                          +{device.features.length - 2} more
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleCardExpansion(device.id)}
                        className="flex-1 bg-gray-50 hover:bg-emerald-600 hover:text-white text-gray-600 font-medium py-2.5 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
                      >
                        {isExpanded ? (
                          <>
                            Less
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Details
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      {device.documentationUrl && (
                        <button className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
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

        {/* No results */}
        {filteredDevices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No devices found
            </h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-50"
            >
              Previous
            </button>

            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              const pageNum =
                Math.max(1, Math.min(totalPages - 6, currentPage - 3)) + i;
              if (pageNum > totalPages) return null;

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === pageNum
                      ? "bg-emerald-600 text-white"
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
              className="px-4 py-2 border border-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceSearchResults;
