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
  Globe,
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
      category: "Platform & Global Setup",
      questions: [
        {
          question:
            "Which GPS devices are compatible with FleetInfinity globally?",
          answer:
            "FleetInfinity supports 151+ verified GPS tracking devices from 15+ leading manufacturers including Teltonika, Suntech, Coban, Meitrack, and Queclink. Our devices work worldwide with multi-constellation GNSS support. We provide regional device recommendations and can source hardware globally through our international supplier network.",
        },
        {
          question: "How quickly can we deploy FleetInfinity internationally?",
          answer:
            "Global deployment typically takes 1-4 weeks depending on fleet size and geographic spread. Our cloud-based platform enables instant access worldwide, while local device installation can be coordinated through our international partner network or your local IT teams with our remote support.",
        },
        {
          question:
            "Do you support fleet operations across multiple countries?",
          answer:
            "Yes, FleetInfinity is designed for global fleet operations. Our platform handles multiple time zones, currencies, languages, and regional compliance requirements. You can manage fleets across different continents from a single unified dashboard with country-specific reporting and analytics.",
        },
      ],
    },
    {
      category: "Global Features & Capabilities",
      questions: [
        {
          question: "What's the GPS coverage and accuracy worldwide?",
          answer:
            "FleetInfinity provides ±3 meter GPS accuracy globally using multi-constellation GNSS (GPS, GLONASS, Galileo, BeiDou). Our platform works with satellite coverage worldwide, including remote areas. Real-time updates are configurable from 10-30 seconds with global map coverage and local traffic integration where available.",
        },
        {
          question:
            "Can FleetInfinity integrate with international business systems?",
          answer:
            "Absolutely. Our REST API and webhooks enable integration with global ERP systems, international accounting software, logistics platforms, and customer management systems. We support popular international standards and can accommodate region-specific integration requirements.",
        },
        {
          question: "What languages and regional features are supported?",
          answer:
            "FleetInfinity supports multiple languages including English, Arabic, and can be localized for specific markets. The platform handles different currencies, date/time formats, measurement units (metric/imperial), and can accommodate local regulatory requirements across different regions.",
        },
      ],
    },
    {
      category: "International Pricing & Support",
      questions: [
        {
          question: "How does international pricing work?",
          answer:
            "We offer flexible global pricing in major currencies (USD, EUR, AED, etc.) with volume discounts for large international fleets. Pricing is transparent with no hidden fees, and we can accommodate different regional billing requirements. Enterprise customers receive custom international pricing packages.",
        },
        {
          question: "What technical support do you provide globally?",
          answer:
            "We provide 24/7 technical support with multi-language capabilities and follow-the-sun support coverage. Our UAE Freezone headquarters coordinates with regional partners to provide local support where needed. Remote diagnostics and training are available worldwide via video conferencing and online platforms.",
        },
        {
          question:
            "Do you offer flexible contracts for international clients?",
          answer:
            "Yes, we understand international business requirements vary by region. We offer both month-to-month and annual contracts, with flexible terms for multi-national corporations. Our UAE Freezone structure enables efficient international contracting and invoicing across global markets.",
        },
      ],
    },
    {
      category: "Compliance & Global Operations",
      questions: [
        {
          question:
            "How do you handle international data privacy and compliance?",
          answer:
            "FleetInfinity complies with international data protection standards including GDPR, and regional privacy laws. Our UAE Freezone structure provides a strategic advantage for global operations while maintaining high security standards. We can accommodate specific regional compliance requirements and provide data residency options where required.",
        },
        {
          question:
            "Can we export our data for global reporting and compliance?",
          answer:
            "Yes, you maintain full ownership of your data with comprehensive export capabilities in multiple formats (CSV, Excel, JSON, API). Our platform supports international reporting standards and can generate region-specific compliance reports. Data can be accessed and exported from anywhere globally.",
        },
        {
          question: "What are the advantages of your UAE Freezone structure?",
          answer:
            "Our UAE Freezone setup provides strategic advantages for global operations: 100% foreign ownership, tax benefits, simplified international trade, strategic location bridging East and West markets, and streamlined global business setup. This structure enables us to serve international clients efficiently while maintaining competitive pricing.",
        },
      ],
    },
  ];

  const allQuestions = faqData.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      globalIndex: categoryIndex * 100 + questionIndex,
      category: category.category,
    }))
  );

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
            <Globe className="w-4 h-4" />
            Global Fleet Management FAQ
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-6">
            Everything You Need to Know
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about FleetInfinity's global GPS
            tracking platform, international deployment, and worldwide support
            services.
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
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">
              Ready for Global Fleet Management?
            </h3>
            <p className="text-gray-600 mb-6">
              Our international team is ready to help you deploy FleetInfinity
              across your global operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-brand-green text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-green-dark transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Global Team
              </Link>

              <Link
                href="/demo"
                className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Schedule Global Demo
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>
                🌍 Global Coverage | 📞 24/7 Support | 🏢 UAE Freezone
                Headquarters | 💬 Multi-Language Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
