import Link from "next/link";
import {
  Shield,
  Truck,
  BrainCircuit,
  Lock,
  Globe,
  Share2,
  Car,
  Package,
  Smartphone,
} from "lucide-react";

const GeotabInspiredHero = () => (
  <section className="bg-brand-dark-blue text-white pt-32 pb-16 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-opacity-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(169,192,209,0.5)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
      }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            One platform for optimal fleet performance.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-brand-light-blue mb-8 mx-auto lg:mx-0">
            Connect your entire fleet seamlessly, unlock AI-powered insights,
            and drive safety, efficiency, and savings with our comprehensive
            solutions.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4 flex-col sm:flex-row">
            <Link
              href="/demo"
              className="w-full sm:w-auto text-center bg-brand-green text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Request a Demo
            </Link>
            <Link
              href="/platform-overview"
              className="w-full sm:w-auto text-center bg-transparent border-2 border-brand-light-blue text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-brand-dark-blue transition-all duration-300"
            >
              Platform Overview
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Element */}
        <div className="relative h-96 w-96 mx-auto hidden lg:flex items-center justify-center">
          {/* Globe */}
          <div className="absolute w-full h-full bg-white/10 rounded-full animate-pulse-custom"></div>
          <div className="absolute w-4/5 h-4/5 bg-white/5 rounded-full"></div>
          <Globe className="w-1/2 h-1/2 text-brand-light-blue opacity-50" />

          {/* Orbiting Icons */}
          <div
            className="absolute w-full h-full animate-spin"
            style={{ animationDuration: "20s" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green p-3 rounded-full shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
          </div>
          <div
            className="absolute w-4/5 h-4/5 animate-spin"
            style={{ animationDuration: "15s" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
              <Package className="w-6 h-6 text-brand-dark-blue" />
            </div>
          </div>
          <div
            className="absolute w-2/3 h-2/3 animate-spin"
            style={{ animationDuration: "25s" }}
          >
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-brand-light-blue p-2 rounded-full shadow-lg">
              <Smartphone className="w-5 h-5 text-brand-dark-blue" />
            </div>
          </div>
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
          Whether you're managing a business fleet or protecting what matters
          personally, FleetInfinity has you covered.
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

// Other homepage sections...
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
            High-precision tracking that works anywhere in the world, 24/7, with
            99.9% uptime.
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
            "FleetInfinity transformed our logistics. We reduced fuel costs by
            23% and improved delivery times across all routes."
          </p>
          <p className="font-bold text-brand-dark-blue">
            — Sarah Johnson, Fleet Manager
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <p className="text-slate-600 italic mb-4">
            "I never worry about my daughter's drive home from university
            anymore. The peace of mind is invaluable."
          </p>
          <p className="font-bold text-brand-dark-blue">— Sarah K., Parent</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md relative">
          <p className="text-slate-600 italic mb-4">
            "The real-time analytics and driver scorecards have significantly
            improved our team's safety performance."
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
      <GeotabInspiredHero />
      <SolutionSelector />
      <PlatformTrust />
      <SocialProof />
    </>
  );
}
