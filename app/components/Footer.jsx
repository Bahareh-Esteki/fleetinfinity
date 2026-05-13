import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  Award,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-dark-blue via-slate-900 to-brand-dark-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3e%3cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='rgba(169,192,209,0.1)' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e\")",
        }}
      ></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info - Spans 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-brand-light-blue bg-clip-text text-transparent">
                  FleetInfinity
                </h3>
                <p className="text-brand-light-blue text-lg leading-relaxed mb-6">
                  Transforming fleet operations worldwide with AI-powered
                  tracking solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-light-blue">
                  <div className="bg-brand-green/20 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-brand-green" />
                  </div>
                  <span>Muscat, Oman - Global Operations</span>
                </div>
                <div className="flex items-center gap-3 text-brand-light-blue">
                  <div className="bg-brand-green/20 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-brand-green" />
                  </div>
                  <span> </span>
                </div>
                <div className="flex items-center gap-3 text-brand-light-blue">
                  <div className="bg-brand-green/20 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-brand-green" />
                  </div>
                  <span>hello@fleetinfinity.com</span>
                </div>
              </div>

              {/* Trust Badges */}
              {/*<div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-brand-light-blue">
                  <Shield className="w-5 h-5 text-brand-green" />
                  <span className="text-sm">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-brand-light-blue">
                  <Award className="w-5 h-5 text-brand-green" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
              </div>*/}
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/platform"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Platform Overview</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/video-telematics"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Video Telematics</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>AI Integration</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maintanance"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Maintanance Hub</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roi-calculator"
                    className="group flex items-center text-brand-green hover:text-white transition-all duration-300 font-medium"
                  >
                    <span>Pricing Calculator</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Blog</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/white-papers"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>White papers</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/supported-devices"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Supported Devices</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>API Reference</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>About Us</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="group flex items-center text-brand-light-blue hover:text-brand-green transition-all duration-300"
                  >
                    <span>Partner with Us</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-brand-light-blue/20 mt-16 pt-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-brand-light-blue mb-6">
                Get the latest fleet management insights and product updates
                delivered to your inbox.
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-brand-light-blue/30 text-white placeholder-brand-light-blue/70 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-light-blue/20 bg-brand-dark-blue/50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-brand-light-blue text-sm">
                <p>
                  &copy; {new Date().getFullYear()} FleetInfinity DMCC. All
                  rights reserved.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-brand-green p-2 rounded-lg transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-brand-light-blue group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-brand-green p-2 rounded-lg transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-brand-light-blue group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-brand-green p-2 rounded-lg transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-brand-light-blue group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 hover:bg-brand-green p-2 rounded-lg transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-brand-light-blue group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
