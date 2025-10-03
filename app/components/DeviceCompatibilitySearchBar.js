"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function DeviceCompatibilitySearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchClick = () => {
    const trimmed = searchQuery.trim();
    router.push(
      trimmed
        ? `/device-compatibility/results?query=${encodeURIComponent(trimmed)}`
        : "/device-compatibility/results"
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearchClick();
  };

  return (
    <div className="relative max-w-3xl mx-auto mb-10">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search devices, manufacturers, or features..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full pl-12 pr-24 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-green focus:border-transparent text-base"
      />
      <button
        onClick={handleSearchClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-green text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-green-dark transition-colors text-sm"
      >
        Search
      </button>
    </div>
  );
}
