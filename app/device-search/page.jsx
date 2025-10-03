// app/device-search/page.jsx
"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { realDevices, deviceCategories } from "../../data/deviceDatabase";
// ... import Lucide icons, etc.

export default function DeviceSearchResults() {
  const params = useSearchParams();
  const searchQuery = params.get("q") || "";
  const activeCategory = params.get("cat") || "all";
  const [sortBy, setSortBy] = useState("verified");

  // Filter devices just like before
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
        default:
          return 0;
      }
    });
    return filtered;
  }, [activeCategory, searchQuery, sortBy]);

  // ... rest of the code: display filters, sort, categories, and device grid.
  // Use the same card display/UX you already have.

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-3xl text-brand-dark-blue mb-8">
          Device Compatibility Results
        </h1>
        {/* Your previous filters/sorting/category display here */}
        {/* Render filteredDevices as cards/paginated just like before */}
      </div>
    </div>
  );
}
