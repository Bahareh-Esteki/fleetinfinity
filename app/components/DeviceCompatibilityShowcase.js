"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function DeviceCompatibilityShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/results?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex flex-col sm:flex-row gap-2 sm:gap-0 relative"
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
  );
}
