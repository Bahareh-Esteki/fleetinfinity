"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building,
  User,
  Mail,
  Phone,
  Users,
  Truck,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-slate-50 pt-32 pb-16 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-600">{subtitle}</p>
    </div>
  </div>
);

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    email: "",
    phone: "",
    fleetSize: "",
    industry: "",
    interests: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: newInterests };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the formData to your API here
    alert(
      "Thank you! Your demo request has been submitted. We will contact you shortly."
    );
    console.log(formData);
  };

  const interestsList = [
    "Real-time Tracking",
    "Fleet Analytics",
    "Driver Safety",
    "Maintenance",
  ];

  return (
    <>
      <PageHeader
        title="Request a Personalized Demo"
        subtitle="See FleetInfinity in action. Let our experts show you how to unlock savings and efficiency for your fleet."
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: The Form */}
            <div className="bg-slate-50 p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Step Indicator */}
                <div className="flex justify-center items-center mb-8">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      step >= 1
                        ? "bg-brand-green text-white"
                        : "bg-brand-light-blue text-brand-dark-blue"
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`flex-grow h-1 transition-colors mx-4 ${
                      step > 1 ? "bg-brand-green" : "bg-brand-light-blue"
                    }`}
                  ></div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      step >= 2
                        ? "bg-brand-green text-white"
                        : "bg-brand-light-blue text-brand-dark-blue"
                    }`}
                  >
                    2
                  </div>
                </div>

                {/* Step 1: Company Information */}
                <div style={{ display: step === 1 ? "block" : "none" }}>
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-6">
                    Tell us about you
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="yourName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="yourName"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                      />
                    </div>
                  </div>
                  <div className="mt-8 text-right">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 bg-brand-dark-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-300"
                    >
                      Next Step <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Step 2: Fleet Details */}
                <div style={{ display: step === 2 ? "block" : "none" }}>
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-6">
                    About your fleet
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fleetSize"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Fleet Size
                      </label>
                      <select
                        id="fleetSize"
                        name="fleetSize"
                        value={formData.fleetSize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 vehicles</option>
                        <option value="11-50">11-50 vehicles</option>
                        <option value="51-200">51-200 vehicles</option>
                        <option value="200+">200+ vehicles</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
                      >
                        <option value="">Select industry</option>
                        <option>Logistics & Delivery</option>
                        <option>Construction</option>
                        <option>Field Services</option>
                        <option>Rental & Leasing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What interests you most?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {interestsList.map((interest) => (
                          <label
                            key={interest}
                            className={`flex items-center gap-2 p-3 border rounded-md cursor-pointer transition-colors ${
                              formData.interests.includes(interest)
                                ? "bg-brand-green/10 border-brand-green"
                                : "bg-white border-gray-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              onChange={() => handleInterestChange(interest)}
                              checked={formData.interests.includes(interest)}
                              className="h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
                            />
                            <span className="text-sm">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-brand-dark-blue transition-all duration-300"
                    >
                      <ArrowLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 shadow-lg"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Value Proposition */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">
                  What to expect in your demo:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <span>
                      A personalized 1-on-1 walkthrough of the FleetInfinity
                      Command platform.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <span>
                      Solutions tailored to your industry's unique challenges
                      and fleet size.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <span>
                      Clear answers to all your specific questions from a fleet
                      expert.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <span>
                      No pressure, no commitment required. Just valuable
                      insights.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-dark-blue text-white p-8 rounded-lg">
                <p className="text-lg italic text-brand-light-blue mb-4">
                  "The demo was incredibly insightful. It wasn't just a sales
                  pitch; it was a genuine consultation on how we could improve
                  our operations. We saw the value immediately."
                </p>
                <p className="font-bold">— David Chen, Operations Director</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">
                  TRUSTED BY INDUSTRY LEADERS
                </p>
                {/* Replace with actual partner logos */}
                <div className="flex justify-center items-center gap-8 grayscale opacity-60">
                  <Building className="w-20 h-20" />
                  <Truck className="w-24 h-24" />
                  <Users className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
