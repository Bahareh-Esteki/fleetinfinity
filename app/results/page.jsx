"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  Grid,
  List,
  Download,
  Star,
  Shield,
  Wrench,
  Zap,
  Settings,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { deviceCategories, realDevices } from "../../data/deviceDatabase";
import { getIcon } from "../../utils/iconMapping";

export default function ResultsPage() {
  const params = useSearchParams();
  const initialSearch = params.get("q")?.trim() ?? "";

  // State
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("verified");
  const [expandedCards, setExpandedCards] = useState(new Set());

  const devicesPerPage = 15;

  // Prepare category data (with icon rendered)
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
        !searchQuery ||
        device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.features.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
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

  const toggleCardExpansion = useCallback((deviceId) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(deviceId)) {
        next.delete(deviceId);
      } else {
        next.add(deviceId);
      }
      return next;
    });
  }, []);

  const getInstallationIcon = (installation) => {
    if (installation?.toLowerCase().includes("plug"))
      return <Zap className="w-4 h-4 text-green-500" />;
    if (installation?.toLowerCase().includes("professional"))
      return <Wrench className="w-4 h-4 text-orange-500" />;
    if (installation?.toLowerCase().includes("recommended"))
      return <Settings className="w-4 h-4 text-blue-500" />;
    return <CheckCircle className="w-4 h-4 text-green-500" />;
  };

  return (
    <section className="py-10 min-h-[70vh] bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Search bar */}
        <form
          className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0 mb-10"
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentPage(1);
          }}
        >
          <div className="relative flex-1">
            <input
              type="text"
              autoFocus
              placeholder="Search devices, manufacturers, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent text-base"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-green text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-green-dark transition-colors text-sm"
            style={{ minWidth: "96px" }}
          >
            Search
          </button>
        </form>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(1);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-brand-green text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-brand-green hover:text-brand-green"
              }`}
              type="button"
            >
              {category.icon}
              {category.name}
              <span className="text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Sort and view mode */}
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
                type="button"
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
                type="button"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-600">
              <span className="font-medium">
                {(currentPage - 1) * devicesPerPage + 1}-
                {Math.min(currentPage * devicesPerPage, filteredDevices.length)}
              </span>
              {" of "}
              <span className="font-medium">{filteredDevices.length}</span>{" "}
              devices
            </p>
            <button className="text-brand-green hover:text-brand-green-dark flex items-center gap-1 text-sm">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Device cards */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {currentDevices.map((device) => {
            const isExpanded = expandedCards.has(device.id);
            return (
              <div
                key={device.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
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
                  {/* Rating & Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{device.marketRating}</span>
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
                {/* Content */}
                <div className="p-4">
                  {/* Device Type */}
                  <div className="mb-3">
                    <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {device.type}
                    </span>
                  </div>
                  {/* Features */}
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
                  {/* Technical info */}
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
                          {device.installation?.includes("Professional")
                            ? "Pro Install"
                            : device.installation?.includes("plug")
                            ? "Plug & Play"
                            : "Easy"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Power:</span>
                      <span className="text-gray-700 text-sm">
                        {device.powerSupply?.includes("battery")
                          ? "Battery"
                          : device.powerSupply?.includes("12V")
                          ? "12V"
                          : "Vehicle"}
                      </span>
                    </div>
                    {isExpanded && device.operatingTemp && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Operating Temp:</span>
                        <span className="text-gray-700 text-sm">
                          {device.operatingTemp}
                        </span>
                      </div>
                    )}
                    {isExpanded && device.certifications && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Certifications:</span>
                        <span className="text-gray-700 text-sm">
                          {device.certifications.slice(0, 2).join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Connectivity */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {(isExpanded
                      ? device.connectivity
                      : device.connectivity?.slice(0, 2)
                    ).map((conn, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {conn}
                      </span>
                    ))}
                    {!isExpanded && device.connectivity?.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{device.connectivity.length - 2}
                      </span>
                    )}
                  </div>
                  {/* Industries */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {(isExpanded
                      ? device.industries
                      : device.industries?.slice(0, 2)
                    ).map((industry, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {industry}
                      </span>
                    ))}
                    {!isExpanded && device.industries?.length > 2 && (
                      <span className="text-xs text-gray-400">
                        +{device.industries.length - 2}
                      </span>
                    )}
                  </div>
                  {/* Pros/Considerations if expanded */}
                  {isExpanded && device.pros && (
                    <div className="grid grid-cols-1 gap-3 mb-4">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2 flex items-center gap-1 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Advantages
                        </h5>
                        <ul className="space-y-1">
                          {device.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
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
                            {device.considerations.map((consideration, idx) => (
                              <li key={idx} className="text-sm text-gray-600">
                                • {consideration}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleCardExpansion(device.id)}
                      className="flex-1 bg-gray-50 hover:bg-brand-green hover:text-white text-gray-600 font-medium py-2.5 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
                      type="button"
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
                      <a
                        href={device.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
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
              type="button"
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
                  type="button"
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
              type="button"
            >
              Next
            </button>
          </div>
        )}
        {/* No Results */}
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
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="bg-brand-green text-white px-6 py-3 rounded-lg text-sm hover:bg-brand-green-dark transition-colors"
              type="button"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
