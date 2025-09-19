"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calculator,
  Truck,
  MapPin,
  BarChart3,
  Shield,
  Wrench,
  FileText,
  Users,
  Clock,
  Check,
  ArrowRight,
  Star,
  TrendingDown,
  Zap,
} from "lucide-react";

// --- Reusable Components ---
const PageHeader = ({ title, subtitle }) => (
  <div className="bg-gradient-to-br from-brand-dark-blue to-slate-800 pt-32 pb-20 text-center relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(169,192,209,0.3)' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex justify-center mb-6">
        <div className="bg-brand-green/10 border border-brand-green/20 rounded-full p-4">
          <Calculator className="w-12 h-12 text-brand-green" />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
        {title}
      </h1>
      <p className="max-w-3xl mx-auto text-xl text-brand-light-blue leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);

const ModuleCard = ({ module, isSelected, onToggle, disabled }) => {
  const IconComponent = module.icon;
  return (
    <div
      onClick={() => !disabled && onToggle(module.id)}
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
        isSelected
          ? "border-brand-green bg-brand-green/5 shadow-lg shadow-brand-green/10"
          : disabled
          ? "border-slate-300 bg-slate-50 opacity-50 cursor-not-allowed"
          : "border-slate-200 bg-white hover:border-brand-light-blue hover:shadow-md"
      }`}
    >
      {disabled && (
        <div className="absolute inset-0 bg-white/50 rounded-xl flex items-center justify-center z-10">
          <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Core Feature
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
            isSelected
              ? "bg-brand-green text-white"
              : "bg-brand-dark-blue text-white"
          }`}
        >
          <IconComponent className="w-7 h-7" />
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isSelected
              ? "bg-brand-green border-brand-green"
              : "border-slate-300 group-hover:border-brand-light-blue"
          }`}
        >
          {isSelected && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>

      <h3 className="font-bold text-lg text-brand-dark-blue mb-2 group-hover:text-brand-green transition-colors">
        {module.name}
      </h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        {module.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-brand-dark-blue text-lg">
          {module.included ? (
            <span className="text-brand-green">Included</span>
          ) : (
            `+$${module.price}/vehicle`
          )}
        </span>
        {module.popular && (
          <span className="bg-brand-green text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Star className="w-3 h-3" />
            Popular
          </span>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function PricingCalculator() {
  const [fleetSize, setFleetSize] = useState(50);
  const [selectedModules, setSelectedModules] = useState(["core_tracking"]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerVehicle, setPricePerVehicle] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);

  const modules = [
    {
      id: "core_tracking",
      name: "Core GPS Tracking",
      price: 18,
      icon: MapPin,
      description:
        "Real-time vehicle location, trip history, geofencing alerts, and basic reporting dashboard.",
      included: true,
      popular: false,
    },
    {
      id: "advanced_analytics",
      name: "Advanced Analytics & AI",
      price: 12,
      icon: BarChart3,
      description:
        "Fuel efficiency analysis, predictive maintenance alerts, driver scorecards, and custom reporting.",
      popular: true,
    },
    {
      id: "driver_safety",
      name: "Driver Safety Suite",
      price: 9,
      icon: Shield,
      description:
        "Harsh braking/acceleration alerts, speed monitoring, fatigue detection, and safety coaching tools.",
    },
    {
      id: "maintenance",
      name: "Maintenance Management",
      price: 7,
      icon: Wrench,
      description:
        "Automated service scheduling, engine diagnostics, maintenance cost tracking, and vendor management.",
    },
    {
      id: "compliance",
      name: "Compliance & Reporting",
      price: 8,
      icon: FileText,
      description:
        "HOS compliance, IFTA reporting, DOT inspection readiness, and automated compliance alerts.",
    },
    {
      id: "dispatch",
      name: "Dispatch & Optimization",
      price: 10,
      icon: Zap,
      description:
        "Route optimization, job dispatching, customer notifications, and delivery confirmation tools.",
    },
  ];

  const handleModuleToggle = (moduleId) => {
    if (moduleId === "core_tracking") return; // Core module cannot be deselected
    setSelectedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  useEffect(() => {
    const calculatePrice = () => {
      let basePrice = 0;
      selectedModules.forEach((moduleId) => {
        const module = modules.find((m) => m.id === moduleId);
        if (module) basePrice += module.price;
      });

      // Volume discounts
      let discount = 0;
      if (fleetSize >= 500) {
        discount = 0.2; // 20% for 500+
      } else if (fleetSize >= 200) {
        discount = 0.15; // 15% for 200+
      } else if (fleetSize >= 100) {
        discount = 0.12; // 12% for 100+
      } else if (fleetSize >= 50) {
        discount = 0.08; // 8% for 50+
      } else if (fleetSize >= 25) {
        discount = 0.05; // 5% for 25+
      }

      const discountedPrice = basePrice * (1 - discount);
      const monthlyTotal = discountedPrice * fleetSize;

      // Calculate annual savings compared to typical fleet costs
      const estimatedSavings = fleetSize * 85 * 12; // $85/vehicle/month average savings

      setTotalPrice(monthlyTotal);
      setPricePerVehicle(discountedPrice);
      setAnnualSavings(estimatedSavings);
    };

    calculatePrice();
  }, [fleetSize, selectedModules]);

  const getDiscountPercentage = () => {
    if (fleetSize >= 500) return 20;
    if (fleetSize >= 200) return 15;
    if (fleetSize >= 100) return 12;
    if (fleetSize >= 50) return 8;
    if (fleetSize >= 25) return 5;
    return 0;
  };

  return (
    <>
      <PageHeader
        title="Fleet Management Pricing Calculator"
        subtitle="Configure your perfect fleet management solution. Select your fleet size and modules to get an instant estimate with volume discounts applied automatically."
      />

      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Configuration */}
            <div className="lg:col-span-2 space-y-10">
              {/* Fleet Size Selector */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-green/10 p-3 rounded-xl">
                    <Truck className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-dark-blue">
                      Fleet Size
                    </h2>
                    <p className="text-slate-600">
                      How many vehicles do you need to manage?
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-brand-green/5 to-brand-light-blue/5 p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <label
                        htmlFor="fleetSize"
                        className="font-semibold text-brand-dark-blue"
                      >
                        Number of Vehicles:
                      </label>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-brand-green">
                          {fleetSize}
                        </span>
                        {getDiscountPercentage() > 0 && (
                          <div className="text-sm text-brand-green font-medium flex items-center justify-end gap-1">
                            <TrendingDown className="w-4 h-4" />
                            {getDiscountPercentage()}% Volume Discount
                          </div>
                        )}
                      </div>
                    </div>

                    <input
                      type="range"
                      id="fleetSize"
                      min="1"
                      max="1000"
                      step="1"
                      value={fleetSize}
                      onChange={(e) => setFleetSize(parseInt(e.target.value))}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #58C15D 0%, #58C15D ${
                          (fleetSize / 1000) * 100
                        }%, #e2e8f0 ${
                          (fleetSize / 1000) * 100
                        }%, #e2e8f0 100%)`,
                      }}
                    />

                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>1 vehicle</span>
                      <span>1000+ vehicles</span>
                    </div>
                  </div>

                  {/* Quick Select Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[10, 25, 50, 100].map((size) => (
                      <button
                        key={size}
                        onClick={() => setFleetSize(size)}
                        className={`py-3 px-4 rounded-lg font-medium transition-all ${
                          fleetSize === size
                            ? "bg-brand-green text-white shadow-md"
                            : "bg-white border border-slate-200 text-brand-dark-blue hover:border-brand-light-blue hover:shadow-sm"
                        }`}
                      >
                        {size} vehicles
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-light-blue/10 p-3 rounded-xl">
                    <BarChart3 className="w-6 h-6 text-brand-light-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-dark-blue">
                      Select Your Modules
                    </h2>
                    <p className="text-slate-600">
                      Core GPS Tracking is included. Add advanced features to
                      enhance your fleet operations.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {modules.map((module) => (
                    <ModuleCard
                      key={module.id}
                      module={module}
                      isSelected={selectedModules.includes(module.id)}
                      onToggle={handleModuleToggle}
                      disabled={module.included}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Price Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Main Price Card */}
                <div className="bg-gradient-to-br from-brand-dark-blue to-slate-800 text-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold border-b border-brand-light-blue/20 pb-4">
                      Your Custom Quote
                    </h3>
                  </div>

                  {/* Selected Modules */}
                  <div className="space-y-3 mb-6">
                    {selectedModules.map((moduleId) => {
                      const module = modules.find((m) => m.id === moduleId);
                      return (
                        <div
                          key={moduleId}
                          className="flex justify-between items-center text-brand-light-blue"
                        >
                          <span className="text-sm">{module.name}</span>
                          <span className="font-medium">
                            {module.included ? "Included" : `$${module.price}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Price Breakdown */}
                  <div className="border-t border-brand-light-blue/20 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-light-blue">Fleet Size:</span>
                      <span className="font-bold">{fleetSize} vehicles</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-brand-light-blue">
                        Price per vehicle:
                      </span>
                      <span className="font-bold">
                        ${pricePerVehicle.toFixed(2)}/month
                      </span>
                    </div>

                    {getDiscountPercentage() > 0 && (
                      <div className="flex justify-between items-center text-brand-green">
                        <span className="text-sm">
                          Volume Discount ({getDiscountPercentage()}%):
                        </span>
                        <span className="font-medium">Applied ✓</span>
                      </div>
                    )}

                    <div className="border-t border-brand-light-blue/20 pt-4">
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span>Monthly Total:</span>
                        <span className="text-brand-green">
                          $
                          {totalPrice.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-brand-light-blue mt-1">
                        <span>Annual Cost:</span>
                        <span>
                          $
                          {(totalPrice * 12).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Link
                      href="/demo"
                      className="w-full block text-center bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Get Custom Quote
                    </Link>
                    <Link
                      href="/demo-video"
                      className="w-full block text-center bg-transparent border-2 border-brand-light-blue/30 text-brand-light-blue hover:bg-brand-light-blue hover:text-brand-dark-blue font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                    >
                      Schedule Demo
                    </Link>
                  </div>
                </div>

                {/* Savings Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <div className="text-center">
                    <div className="bg-brand-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingDown className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-bold text-brand-dark-blue mb-2">
                      Estimated Annual Savings
                    </h4>
                    <p className="text-3xl font-bold text-brand-green mb-2">
                      ${annualSavings.toLocaleString()}
                    </p>
                    <p className="text-sm text-slate-600">
                      Based on fuel efficiency, reduced maintenance costs, and
                      improved productivity
                    </p>
                  </div>
                </div>

                {/* Features Included */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <h4 className="font-bold text-brand-dark-blue mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-green" />
                    Always Included
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-green" />
                      24/7 customer support
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-brand-green" />
                      Enterprise-grade security
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand-green" />
                      Unlimited user accounts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
