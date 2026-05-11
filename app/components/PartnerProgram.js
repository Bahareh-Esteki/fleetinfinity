import React from "react";
import {
  Palette,
  TerminalSquare,
  Rocket,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const PartnerProgram = () => {
  const partnerFeatures = [
    {
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      title: "100% Whitelabel Ready",
      description:
        "Complete brand control. Launch the platform using your own domain, custom logos, and brand color schemes.",
      bg: "bg-indigo-50",
    },
    {
      icon: <TerminalSquare className="w-6 h-6 text-blue-600" />,
      title: "Developer-Friendly API",
      description:
        "Seamlessly integrate telematics data into your existing ERP, CRM, or billing software with our extensive REST APIs.",
      bg: "bg-blue-50",
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-600" />,
      title: "Months to Market? No, Days.",
      description:
        "Skip years of expensive R&D. Deploy a fully functional, enterprise-grade platform to your clients almost immediately.",
      bg: "bg-orange-50",
    },
    {
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      title: "Built for Scalability",
      description:
        "Focus on growing your sales. Our infrastructure handles the heavy lifting, scaling effortlessly from 100 to 100,000+ assets.",
      bg: "bg-emerald-50",
    },
  ];

  const highlights = [
    "Dedicated Tier-2 Technical Support",
    "Flexible Volume-Based Pricing",
    "Bring Your Own Hardware (Agnostic)",
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content & CTA */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Whitelabel & Partnership
            </p>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Build Your Business on Our Engine.
            </h2>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Launch a world-class fleet management and tracking service under
              your own brand. We provide the robust, enterprise-grade
              infrastructure; you own the customer relationships and the profits.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#contact" // در آینده می‌توانید این را به مسیر صفحه /partners متصل کنید
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Discuss Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnerFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${feature.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
