import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Shield, Award, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";

const DeviceCompatibilityShowcase = ({ totalDevices, totalManufacturers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // On search, go to results page
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/results",
      query: { q: searchQuery },
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            <Shield className="w-4 h-4" />
            Hardware Compatibility Database
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            {totalDevices}+ Compatible Devices
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Comprehensive database of tested and verified GPS trackers, dash
            cameras, and sensors. All specifications verified by our technical
            team.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">
                {totalManufacturers}+
              </div>
              <div className="text-sm text-gray-600">Manufacturers</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">
                {totalDevices}+
              </div>
              <div className="text-sm text-gray-600">Devices</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">100%</div>
              <div className="text-sm text-gray-600">Verified</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-brand-green">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Responsive Search Bar */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
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
          {/* Prompt below search */}
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200 mt-8">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Search Our Device Database
            </h3>
            <p className="text-gray-600 mb-4">
              Enter a search term or click search to browse all {totalDevices}+
              compatible devices
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-brand-green/10 to-blue-500/10 rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-brand-green" />
            <h3 className="text-2xl font-bold text-gray-800">
              Need Device Support?
            </h3>
          </div>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-base">
            Can't find your device? Our technical team can help you integrate
            almost any GPS tracker or sensor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-green-dark transition-colors flex items-center gap-2 group text-base">
              Request Integration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-green text-brand-green px-8 py-3 rounded-lg font-medium hover:bg-brand-green hover:text-white transition-colors text-base">
              Technical Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceCompatibilityShowcase;
