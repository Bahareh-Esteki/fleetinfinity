"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";
import axios from 'axios';

const FaqSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // Set loading to true right before the fetch
        setIsLoading(true);
        const response = await axios.get('/api/faqs'); // Fetch from the relative API route
        setFaqData(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Could not load FAQs. Please try again later.");
      } finally {
        // Set loading to false after the fetch completes (or fails)
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []); // Empty dependency array means this runs once on component mount

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 text-sm font-medium text-brand-green mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            Common Questions Answered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about FleetInfinity's GPS
            tracking platform, setup process, and support services.
          </p>
        </motion.div>

        {/* Conditional Rendering for Loading and Error states */}
        {isLoading && (
          <div className="text-center text-gray-600">Loading questions...</div>
        )}
        
        {error && (
          <div className="text-center text-red-600 bg-red-100 p-4 rounded-lg">{error}</div>
        )}
        
        {!isLoading && !error && faqData.length === 0 && (
          <div className="text-center text-gray-500">No FAQs found.</div>
        )}

        {/* FAQ Categories - Render only if data is loaded successfully */}
        {!isLoading && !error && faqData.length > 0 && (
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-brand-dark-blue mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.has(globalIndex);

                    return (
                      <motion.div
                        key={globalIndex}
                        className="border border-gray-100 rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                        >
                          <h4 className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 bg-white border-t border-gray-100">
                                <p className="text-gray-600 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
