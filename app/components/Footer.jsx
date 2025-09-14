import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">FleetInfinity</h4>
            <p className="text-brand-light-blue text-sm">
              Global tracking solutions powered by Dubai innovation.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Business</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/platform-overview"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet-solutions"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Fleet Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900/50">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-brand-light-blue">
          <p>
            &copy; {new Date().getFullYear()} FleetInfinity DMCC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
