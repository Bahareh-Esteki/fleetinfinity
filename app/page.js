import Link from "next/link";
import { Shield, Truck, BrainCircuit, Lock, Globe, Share2 } from "lucide-react";

const HeroSection = () => (
  <section className="bg-brand-dark-blue text-white text-center pt-32 pb-16 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-opacity-20 animate-float"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(169,192,209,0.5)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        Total Visibility. Global Control.{" "}
        <span className="text-brand-green">One Platform.</span>
      </h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl text-brand-light-blue mb-8">
        Intelligent tracking solutions for your business fleet and the things
        you value most.
      </p>
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <Link
          href="/demo"
          className="w-full sm:w-auto text-center bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Request a Demo
        </Link>
        <Link
          href="/personal-app"
          className="w-full sm:w-auto text-center bg-transparent border-2 border-brand-light-blue text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-brand-dark-blue transition-all duration-300"
        >
          Explore Personal Plans
        </Link>
      </div>
      <div className="mt-16 mx-auto max-w-4xl h-72 bg-white/5 border border-brand-light-blue/30 rounded-2xl backdrop-blur-sm flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/20 via-transparent to-transparent bg-[length:30px_30px] animate-pulse-custom"></div>
        <div className="w-full h-full relative">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-brand-green border-2 border-white rounded-full animate-ping-custom"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 0.4}s`,
                }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

const SolutionSelector = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
          Choose Your Solution
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          {
            "Whether you're managing a business fleet or protecting what matters personally, FleetInfinity has you covered."
          }
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link
          href="/platform-overview"
          className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-brand-green"
        >
          <div className="mx-auto w-16 h-16 mb-6 bg-gradient-to-br from-brand-green to-green-400 rounded-2xl flex items-center justify-center">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark-blue text-center mb-4">
            Powering Your Fleet
          </h3>
          <p className="text-slate-600 text-center">
            Reduce costs, increase efficiency, and enhance safety with our
            comprehensive business platform for fleets of any size.
          </p>
        </Link>
        <Link
          href="/personal-solutions"
          className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-brand-green"
        >
          <div className="mx-auto w-16 h-16 mb-6 bg-gradient-to-br from-brand-green to-green-400 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark-blue text-center mb-4">
            Protecting Your World
          </h3>
          <p className="text-slate-600 text-center">
            Peace of mind for your personal vehicles, valuables, and loved ones
            with simple, secure tracking that keeps you connected.
          </p>
        </Link>
      </div>
    </div>
  </section>
);

const PlatformTrust = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue mb-4">
          Why FleetInfinity?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Built on cutting-edge technology with global reliability
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 mb-4 bg-gradient-to-br from-brand-dark-blue to-blue-900 rounded-2xl flex items-center justify-center">
            <BrainCircuit className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            AI-Powered Intelligence
          </h4>
          <p className="text-slate-600">
            Our platform turns complex data into simple, actionable insights
            that drive real results.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 mb-4 bg-gradient-to-br from-brand-dark-blue to-blue-900 rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            Bank-Grade Security
          </h4>
          <p className="text-slate-600">
            End-to-end data encryption ensures your information is always
            protected and secure.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 mb-4 bg-gradient-to-br from-brand-dark-blue to-blue-900 rounded-2xl flex items-center justify-center">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            Global Reliability
          </h4>
          <p className="text-slate-600">
            {
              "High-precision tracking that works anywhere in the world, 24/7, with 99.9% uptime."
            }
          </p>
        </div>
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 mb-4 bg-gradient-to-br from-brand-dark-blue to-blue-900 rounded-2xl flex items-center justify-center">
            <Share2 className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-brand-dark-blue mb-2">
            Open & Expandable
          </h4>
          <p className="text-slate-600">
            Integrate with our API to connect FleetInfinity to your existing
            systems and workflows.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-blue">
          Trusted by Businesses and Individuals Worldwide
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <p className="text-slate-600 italic mb-4">
            {
              "FleetInfinity transformed our logistics. We reduced fuel costs by 23% and improved delivery times across all routes."
            }
          </p>
          <p className="font-bold text-brand-dark-blue">
            — Sarah Johnson, Fleet Manager
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <p className="text-slate-600 italic mb-4">
            {
              "I never worry about my daughter's drive home from university anymore. The peace of mind is invaluable."
            }
          </p>
          <p className="font-bold text-brand-dark-blue">— Sarah K., Parent</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <p className="text-slate-600 italic mb-4">
            {
              "The real-time analytics and driver scorecards have significantly improved our team's safety performance."
            }
          </p>
          <p className="font-bold text-brand-dark-blue">
            — Michael Chen, Operations Director
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionSelector />
      <PlatformTrust />
      <SocialProof />
    </>
  );
}
