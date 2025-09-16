// components/FaqSection.js (or place inside page.js)

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// You can move this data to a separate file if it gets too long
const faqData = [
  {
    question: "What does FleetInfinity do?",
    answer:
      "FleetInfinity provides a comprehensive telematics solution for managing vehicle fleets. We help businesses track their vehicles, monitor driver behavior, improve safety, reduce fuel costs, and increase overall operational efficiency through data-driven insights.",
  },
  {
    question: "What fleet management solutions does FleetInfinity offer?",
    answer:
      "We offer a suite of solutions including real-time GPS fleet tracking, driver safety monitoring with AI-powered cameras, vehicle maintenance scheduling, fuel management, ELD compliance, and sustainability reporting for EV and traditional fleets.",
  },
  {
    question:
      "What are the advantages of using FleetInfinity's tracking solutions?",
    answer:
      "The main advantages include increased productivity through route optimization, significant cost savings from reduced fuel consumption and maintenance, improved driver safety and lower insurance premiums, and enhanced customer satisfaction with accurate ETAs.",
  },
  {
    question: "What is telematics?",
    answer:
      "Telematics is a field that combines telecommunications and informatics. In fleet management, it refers to the technology of sending, receiving, and storing information relating to remote objects, such as vehicles, via telecommunication devices.",
  },
  {
    question: "Does FleetInfinity use GPS?",
    answer:
      "Yes, our GO vehicle tracking device uses high-sensitivity GPS to provide fast, accurate location data for your entire fleet. This is the foundation of our real-time tracking, geofencing, and route optimization features.",
  },
];

const FaqSection = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked question is already open, close it. Otherwise, open it.
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-brand-dark-blue text-center mb-16">
          Commonly Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-6">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-semibold text-brand-dark-blue">
                  {faq.question}
                </h3>
                <span>
                  {openQuestionIndex === index ? (
                    <Minus className="w-6 h-6 text-brand-green" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-500" />
                  )}
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  openQuestionIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
