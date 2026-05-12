// app/device-search/page.jsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DeviceSearchResults from '@/components/DeviceSearchResults';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";

  return (
    <DeviceSearchResults initialQuery={query} initialCategory={category} />
  );
}

export default function DeviceSearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading devices...</p>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
