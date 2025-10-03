"use client";

import DeviceCompatibilitySearchBar from "../components/DeviceCompatibilitySearchBar";

export default function DeviceCompatibilityLanding() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-dark-blue/5 to-slate-50 py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            Device Compatibility
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            Fleet Hardware Compatibility Database
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Search our verified database of GPS devices, dash cameras, sensors,
            and trackers—handpicked and tested by our technical team.
          </p>
        </div>
        <DeviceCompatibilitySearchBar />
      </div>
    </section>
  );
}
