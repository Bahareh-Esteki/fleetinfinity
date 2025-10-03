"use client";

import { useSearchParams } from "next/navigation";
import RealDeviceCompatibilityShowcase from "../../components/DeviceCompatibilityShowcase";

export default function DeviceResultsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <RealDeviceCompatibilityShowcase initialSearch={searchQuery} />
      </div>
    </main>
  );
}
