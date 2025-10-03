import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import {
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
import { deviceCategories, realDevices } from "../data/deviceDatabase";
import { getIcon } from "../utils/iconMapping";

// Optionally factor out Card UI into a subcomponent

const DeviceResults = () => {
  const router = useRouter();
  const searchQuery = (router.query.q || "").toString();

  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [devicesPerPage] = useState(15);
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
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Filters, Sorting, View Modes */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
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

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-lg p-4 border border-gray-200 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Sort:</span>
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
            <span className="text-sm font-medium text-gray-600">View:</span>
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

        <div className="max-w-5xl mx-auto mb-6">
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-600">
              <span className="font-medium">
                {(currentPage - 1) * devicesPerPage + 1}-
                {Math.min(currentPage * devicesPerPage, filteredDevices.length)}
              </span>{" "}
              of <span className="font-medium">{filteredDevices.length}</span>{" "}
              devices
            </p>
            <div className="flex items-center gap-4">
              <button className="text-brand-green hover:text-brand-green-dark flex items-center gap-1 text-sm">
                <Download className="w-4 h-4" /> Export
              </button>
            </div>
          </div>
        </div>

        {/* Device cards grid/list */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {currentDevices.map((device, index) => {
            const isExpanded = expandedCards.has(device.id);
            return (
              <div
                key={device.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Card code exactly like in your original */}
                {/* ... keep your detailed card content here */}
                {/* Expansion, icons, and details as per your original code */}
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm"
            >
              Previous
            </button>
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
          </div>
        )}

        {filteredDevices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No devices found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setCurrentPage(1);
              }}
              className="bg-brand-green text-white px-6 py-3 rounded-lg text-sm hover:bg-brand-green-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeviceResults;
