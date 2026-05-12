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
  DollarSign,
  Fuel,
} from "lucide-react";

// --- Reusable Components ---
// Removed to keep the main code block smaller and focus on the main component
const PageHeader = ({ title, subtitle }) => (
  <div className="bg-gradient-to-br from-blue-900 to-slate-800 pt-32 pb-20 text-center relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(169,192,209,0.3)' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex justify-center mb-6">
        <div className="bg-green-600/10 border border-green-600/20 rounded-full p-4">
          <Calculator className="w-12 h-12 text-green-600" />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
        {title}
      </h1>
      <p className="max-w-3xl mx-auto text-xl text-blue-300 leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);

const ModuleCard = ({ module, isSelected, onToggle, disabled }) => {
  const IconComponent = module.icon;
  const accentColor = isSelected ? "text-green-600" : "text-blue-900";
  const bgColor = isSelected ? "bg-green-50" : "bg-white";

  return (
    <div
      onClick={() => !disabled && onToggle(module.id)}
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
        isSelected
          ? "border-green-600 bg-green-50 shadow-lg shadow-green-600/10"
          : disabled
          ? "border-slate-300 bg-slate-50 opacity-50 cursor-not-allowed"
          : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
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
            isSelected ? "bg-green-600 text-white" : "bg-blue-900 text-white"
          }`}
        >
          <IconComponent className="w-7 h-7" />
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isSelected
              ? "bg-green-600 border-green-600"
              : "border-slate-300 group-hover:border-blue-300"
          }`}
        >
          {isSelected && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>

      <h3
        className={`font-bold text-lg ${accentColor} mb-2 group-hover:text-green-600 transition-colors`}
      >
        {module.name}
      </h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        {module.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-blue-900 text-lg">
          {module.included ? (
            <span className="text-green-600">Included</span>
          ) : (
            `+$${module.price}/vehicle`
          )}
        </span>
        {module.popular && (
          <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
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
  // State for user inputs
  const [fleetSize, setFleetSize] = useState(50);
  const [avgFuelPrice, setAvgFuelPrice] = useState(0.8); // $/liter
  const [avgMaintCost, setAvgMaintCost] = useState(3500); // $/vehicle/year
  const [selectedModules, setSelectedModules] = useState(["core_tracking"]);

  // State for outputs
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerVehicle, setPricePerVehicle] = useState(0);
  const [annualCost, setAnnualCost] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [netROI, setNetROI] = useState(0);
  const [paybackPeriodMonths, setPaybackPeriodMonths] = useState(0);

  // Base feature modules (Pricing and Savings Drivers)
  const modules = [
    {
      id: "core_tracking",
      name: "Core GPS & Visibility",
      price: 18, // $/vehicle/month
      icon: MapPin,
      description:
        "Real-time location, trip history, geofencing, and core dashboard access.",
      included: true,
      savings: { fuel: 0.0, maint: 0.05, prod: 0.03 }, // Core savings: 5% Maint, 3% Productivity
    },
    {
      id: "advanced_analytics",
      name: "Advanced Analytics & AI",
      price: 12,
      icon: BarChart3,
      description:
        "Fuel efficiency analysis, predictive maintenance alerts, and driver scorecards.",
      popular: true,
      savings: { fuel: 0.1, maint: 0.1, prod: 0.05 }, // Additional 10% Fuel/Maint savings
    },
    {
      id: "driver_safety",
      name: "Driver Safety Suite",
      price: 9,
      icon: Shield,
      description:
        "Harsh event alerts, speed monitoring, fatigue detection, and safety coaching tools.",
      savings: { fuel: 0.05, maint: 0.02, prod: 0.03 }, // Safety saves fuel/maint due to less wear, increases prod
    },
    {
      id: "maintenance",
      name: "Maintenance Management",
      price: 7,
      icon: Wrench,
      description:
        "Automated service scheduling, engine diagnostics, and maintenance cost tracking.",
      savings: { fuel: 0.0, maint: 0.15, prod: 0.02 }, // Significant Maint saving
    },
    {
      id: "compliance",
      name: "Compliance & Reporting",
      price: 8,
      icon: FileText,
      description:
        "HOS compliance, IFTA reporting, DOT inspection readiness, and automated alerts.",
      savings: { fuel: 0.0, maint: 0.0, prod: 0.08 }, // Significant Productivity saving (avoiding fines/paperwork)
    },
    {
      id: "dispatch",
      name: "Dispatch & Optimization",
      price: 10,
      icon: Zap,
      description:
        "AI-powered route optimization, job dispatching, and delivery confirmation tools.",
      savings: { fuel: 0.15, maint: 0.0, prod: 0.1 }, // Significant Fuel and Productivity saving
    },
  ];

  // Logic to toggle modules
  const handleModuleToggle = (moduleId) => {
    if (moduleId === "core_tracking") return;
    setSelectedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Logic to calculate price and ROI
  useEffect(() => {
    const calculatePriceAndROI = () => {
      let basePricePerVehicle = 0;
      let totalFuelSavingsPercent = 0;
      let totalMaintSavingsPercent = 0;
      let totalProdSavingsPercent = 0;

      // 1. Calculate Base Cost and Savings Potential
      selectedModules.forEach((moduleId) => {
        const module = modules.find((m) => m.id === moduleId);
        if (module) {
          basePricePerVehicle += module.price;
          // Accumulate savings percentages (additive up to a cap)
          totalFuelSavingsPercent += module.savings.fuel;
          totalMaintSavingsPercent += module.savings.maint;
          totalProdSavingsPercent += module.savings.prod;
        }
      });

      // Cap the total savings percentages to prevent exaggeration
      const MAX_FUEL_SAVINGS = 0.25; // 25% max fuel savings (due to route/idling)
      const MAX_MAINT_SAVINGS = 0.2; // 20% max maintenance savings (due to predictive/safety)
      const MAX_PROD_SAVINGS = 0.15; // 15% max productivity savings (due to HOS/dispatch)

      const fuelSavingsRate = Math.min(
        totalFuelSavingsPercent,
        MAX_FUEL_SAVINGS
      );
      const maintSavingsRate = Math.min(
        totalMaintSavingsPercent,
        MAX_MAINT_SAVINGS
      );
      const prodSavingsRate = Math.min(
        totalProdSavingsPercent,
        MAX_PROD_SAVINGS
      );

      // 2. Apply Volume Discounts
      let discount = 0;
      if (fleetSize >= 500) discount = 0.2;
      else if (fleetSize >= 200) discount = 0.15;
      else if (fleetSize >= 100) discount = 0.12;
      else if (fleetSize >= 50) discount = 0.08;
      else if (fleetSize >= 25) discount = 0.05;

      const discountedPrice = basePricePerVehicle * (1 - discount);
      const monthlyTotal = discountedPrice * fleetSize;
      const annualTotalCost = monthlyTotal * 12;

      // 3. Calculate Annual Savings (ROI Drivers)

      // --- Assumptions for Savings Calculation ---
      const AVG_ANNUAL_DISTANCE = 80000; // km/vehicle/year
      const AVG_FUEL_CONSUMPTION = 0.12; // liters/km (Rough estimate for commercial vehicles)
      const AVG_DRIVER_WAGE = 25; // $/hour (for productivity saving estimate)
      const AVG_WORK_HOURS_PER_YEAR = 2000; // hours/driver/year

      // A. Fuel Savings
      const annualFuelExpense =
        fleetSize * AVG_ANNUAL_DISTANCE * AVG_FUEL_CONSUMPTION * avgFuelPrice;
      const fuelSavings = annualFuelExpense * fuelSavingsRate;

      // B. Maintenance Savings
      const maintSavings = fleetSize * avgMaintCost * maintSavingsRate;

      // C. Productivity Savings (avoiding fines, faster dispatch, less idling/traffic)
      const annualWageExpense =
        fleetSize * AVG_WORK_HOURS_PER_YEAR * AVG_DRIVER_WAGE;
      const prodSavings = annualWageExpense * prodSavingsRate;

      const totalAnnualSavings = fuelSavings + maintSavings + prodSavings;

      // 4. Calculate Net ROI and Payback Period
      const netAnnualROI = totalAnnualSavings - annualTotalCost;
      const paybackPeriod =
        annualTotalCost > 0 && totalAnnualSavings > 0
          ? annualTotalCost / (totalAnnualSavings / 12)
          : Infinity;

      // 5. Update State
      setTotalPrice(monthlyTotal);
      setPricePerVehicle(discountedPrice);
      setAnnualCost(annualTotalCost);
      setAnnualSavings(totalAnnualSavings);
      setNetROI(netAnnualROI);
      setPaybackPeriodMonths(paybackPeriod);
    };

    calculatePriceAndROI();
  }, [fleetSize, selectedModules, avgFuelPrice, avgMaintCost]);

  const getDiscountPercentage = () => {
    if (fleetSize >= 500) return 20;
    if (fleetSize >= 200) return 15;
    if (fleetSize >= 100) return 12;
    if (fleetSize >= 50) return 8;
    if (fleetSize >= 25) return 5;
    return 0;
  };

  const formatCurrency = (value) =>
    value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const formatMetric = (value, unit) => {
    if (value === Infinity) return "N/A";
    if (unit === "month") return `${Math.min(value, 12).toFixed(1)} months`;
    return `$${formatCurrency(value)}`;
  };

  // Custom Styles for the input range to show progress
  const sliderStyle = {
    background: `linear-gradient(to right, #10B981 0%, #10B981 ${
      (fleetSize / 1000) * 100
    }%, #e2e8f0 ${(fleetSize / 1000) * 100}%, #e2e8f0 100%)`,
  };

  return (
    <>
      <PageHeader
        title="Fleet Management ROI Calculator"
        subtitle="Configure your optimal fleet intelligence solution and see your potential return on investment (ROI) instantly."
      />

      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Configuration */}
            <div className="lg:col-span-2 space-y-10">
              {/* Fleet Size Selector */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600/10 p-3 rounded-xl">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">
                      Fleet Size
                    </h2>
                    <p className="text-slate-600">
                      How many vehicles do you need to manage?
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-600/5 to-blue-300/5 p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <label
                        htmlFor="fleetSize"
                        className="font-semibold text-blue-900"
                      >
                        Number of Vehicles:
                      </label>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-green-600">
                          {fleetSize}
                        </span>
                        {getDiscountPercentage() > 0 && (
                          <div className="text-sm text-green-600 font-medium flex items-center justify-end gap-1">
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
                      style={sliderStyle}
                    />

                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>1 vehicle</span>
                      <span>1000+ vehicles</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Inputs (New) */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-600/10 p-3 rounded-xl">
                    <DollarSign className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">
                      ROI Drivers
                    </h2>
                    <p className="text-slate-600">
                      Enter your average operational costs to calculate
                      personalized savings.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Fuel Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="avgFuelPrice"
                      className="text-sm font-medium text-slate-700 flex items-center gap-2"
                    >
                      <Fuel className="w-4 h-4" /> Avg. Fuel Price ($/Liter):
                    </label>
                    <input
                      type="number"
                      id="avgFuelPrice"
                      value={avgFuelPrice}
                      onChange={(e) =>
                        setAvgFuelPrice(parseFloat(e.target.value) || 0)
                      }
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      step="0.01"
                      min="0"
                    />
                  </div>
                  {/* Maintenance Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="avgMaintCost"
                      className="text-sm font-medium text-slate-700 flex items-center gap-2"
                    >
                      <Wrench className="w-4 h-4" /> Avg. Annual Unscheduled
                      Maint. Cost ($):
                    </label>
                    <input
                      type="number"
                      id="avgMaintCost"
                      value={avgMaintCost}
                      onChange={(e) =>
                        setAvgMaintCost(parseInt(e.target.value) || 0)
                      }
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Module Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-300/10 p-3 rounded-xl">
                    <BarChart3 className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">
                      Select Your Modules
                    </h2>
                    <p className="text-slate-600">
                      Core GPS Tracking is included. Add advanced features to
                      unlock greater savings and operational control.
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

            {/* Right Column: Price & ROI Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Main ROI Card */}
                <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-extrabold border-b border-blue-300/20 pb-4">
                      Your FleetInfinity ROI
                    </h3>
                  </div>

                  {/* Savings & Investment Metrics */}
                  <div className="space-y-4">
                    {/* Investment */}
                    <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg">
                      <span className="text-lg font-semibold text-blue-300">
                        Monthly Investment:
                      </span>
                      <span className="text-xl font-extrabold text-white">
                        {formatMetric(totalPrice, "currency")}/mo
                      </span>
                    </div>

                    {/* Savings */}
                    <div className="flex justify-between items-center bg-white/10 p-3 rounded-lg">
                      <span className="text-lg font-semibold text-blue-300">
                        Annual Estimated Savings:
                      </span>
                      <span className="text-xl font-extrabold text-green-500">
                        {formatMetric(annualSavings, "currency")}
                      </span>
                    </div>

                    {/* NET ROI */}
                    <div className="border-t border-blue-300/20 pt-4">
                      <div className="flex justify-between items-center text-2xl font-bold">
                        <span>Net Annual ROI:</span>
                        <span
                          className={
                            netROI >= 0 ? "text-green-500" : "text-red-500"
                          }
                        >
                          {formatMetric(netROI, "currency")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="mt-6 p-4 rounded-xl bg-green-600 text-white text-center">
                    <p className="text-sm font-medium">
                      Estimated Payback Period
                    </p>
                    <p className="text-3xl font-extrabold mt-1">
                      {formatMetric(paybackPeriodMonths, "month")}
                    </p>
                  </div>

                  {/* Final CTAs */}
                  <div className="mt-8 space-y-3">
                    <Link
                      href="/contact"
                      className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-green-500/30"
                    >
                      Request Personalized Proposal
                    </Link>
                    <Link
                      href="/demo"
                      className="w-full block text-center bg-transparent border-2 border-blue-300/30 text-blue-300 hover:bg-blue-800 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                    >
                      Schedule a Platform Demo
                    </Link>
                  </div>
                </div>

                {/* Always Included Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Always Included
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      24/7 technical support
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      Enterprise-grade security & global compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
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
