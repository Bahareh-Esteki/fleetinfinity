"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Newspaper,
  Cpu,
  Camera,
  MapPin,
  BookOpenCheck,
  Route,
  Fuel,
  UserCheck,
} from "lucide-react";

// Reusable component for the smaller info cards
const InfoCard = ({ icon, title, text, linkText, href }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-brand-dark-blue mb-3 flex-grow">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 flex-grow">{text}</p>
    <Link
      href={href}
      className="font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-2 group"
    >
      {linkText}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

// Reusable component for the solution items list
const SolutionItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-lg text-brand-dark-blue">{title}</h4>
      <p className="text-gray-600 mt-1">{text}</p>
    </div>
  </div>
);

const HighlightsSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* --- Top Solutions List --- */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-brand-dark-blue mb-4">
            Top Fleet Management Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Fleet operations powered by AI and data intelligence to solve your
            biggest challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          <SolutionItem
            icon={<Camera className="w-8 h-8 text-brand-green" />}
            title="Fleet Dash Cams"
            text="Take the guesswork out of collisions with our seamlessly integrated AI-powered dash camera solutions."
          />
          <SolutionItem
            icon={<MapPin className="w-8 h-8 text-brand-green" />}
            title="Asset Tracking"
            text="Gain peace of mind knowing where all your high-value assets are, from trailers to equipment."
          />
          <SolutionItem
            icon={<BookOpenCheck className="w-8 h-8 text-brand-green" />}
            title="ELD Compliance"
            text="Our FMCSA-certified ELD automates data collection to minimize violations and simplify reporting."
          />
          <SolutionItem
            icon={<Route className="w-8 h-8 text-brand-green" />}
            title="Routing & Dispatching"
            text="Improve productivity and lower costs by leading your fleet down the right path with optimized routing."
          />
          <SolutionItem
            icon={<Fuel className="w-8 h-8 text-brand-green" />}
            title="Fuel Management"
            text="Monitor and control your fleet’s fuel consumption. Use reports to develop fuel-efficient driving behaviors."
          />
          <SolutionItem
            icon={<UserCheck className="w-8 h-8 text-brand-green" />}
            title="Driver Tracking"
            text="Track and evaluate driver performance with our fleet tracking device and software to build a culture of safety."
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
