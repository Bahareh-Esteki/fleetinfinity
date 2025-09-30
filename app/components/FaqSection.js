"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Phone,
} from "lucide-react";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      category: "Platform & Compatibility",
      questions: [
        {
          question: "Which GPS devices work with FleetInfinity?",
          answer:
            "FleetInfinity supports 151+ verified GPS tracking devices from leading manufacturers including Teltonika, Suntech, Coban, Meitrack, and Queclink. We maintain detailed compatibility lists and can recommend the best device based on your specific fleet requirements and budget.",
        },
        {
          question: "How long does implementation take?",
          answer:
            "Implementation typically takes 1-3 weeks depending on fleet size. Small fleets (1-10 vehicles) can be up and running within 48-72 hours. We handle device configuration, platform setup, and provide comprehensive training to ensure your team is ready to go.",
        },
        {
          question: "Can I manage fleets in different locations?",
          answer:
            "Yes, FleetInfinity handles multi-location fleet management seamlessly. You can monitor vehicles across different cities or countries from a single dashboard, with support for multiple time zones, currencies, and regional settings as needed.",
        },
      ],
    },
    {
      category: "Technical Specifications",
      questions: [
        {
          question: "What's the GPS accuracy and update frequency?",
          answer:
            "Our platform provides ±3 meter GPS accuracy using multi-constellation GNSS (GPS, GLONASS, Galileo, BeiDou). Real-time updates are configurable from 10-30 seconds based on your needs, with live tracking and complete historical route playback.",
        },
        {
          question: "Does FleetInfinity integrate with existing software?",
          answer:
            "Yes, we offer comprehensive API integration. FleetInfinity can connect with ERP systems, accounting software, dispatch platforms, and customer management systems through our REST API and webhooks, enabling seamless data flow with your existing workflows.",
        },
        {
          question: "What about data security and backup?",
          answer:
            "FleetInfinity uses enterprise-grade security with 256-bit SSL encryption and secure cloud infrastructure. Your data is automatically backed up with 99.9% uptime SLA. We comply with international data protection standards and provide audit trails for compliance requirements.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "How is FleetInfinity priced?",
          answer:
            "Pricing is based on the number of vehicles and features selected. We offer flexible monthly or annual plans with volume discounts for larger fleets. Contact us for a customized quote - we work with businesses of all sizes from single vehicle operations to enterprise fleets.",
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer:
            "No hidden fees. Our pricing is transparent and includes platform access, basic support, and regular updates. Optional services like professional installation, advanced training, or premium support packages are clearly outlined with separate pricing.",
        },
        {
          question: "Can I change my plan as my fleet grows?",
          answer:
            "Absolutely. FleetInfinity scales with your business. You can easily upgrade or modify your plan as you add vehicles or need additional features. Changes take effect immediately, and we'll prorate any billing adjustments.",
        },
      ],
    },
    {
      category: "Support & Training",
      questions: [
        {
          question: "What support do you provide?",
          answer:
            "We provide comprehensive technical support via phone, email, and live chat. Our support team can help with device troubleshooting, platform training, and technical questions. Enterprise customers get dedicated account management and priority support.",
        },
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes, we include platform training with every implementation. This covers basic operation, reporting, and administrative functions. We also offer advanced training sessions and can create custom training materials for larger teams.",
        },
        {
          question: "What if I need help with device installation?",
          answer:
            "We can connect you with certified installation partners in your area, or provide detailed installation guides and remote support for DIY installation. For complex setups or large deployments, we recommend professional installation to ensure optimal performance.",
        },
      ],
    },
  ];

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

        {/* FAQ Categories */}
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

        {/* Contact Section */}
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
