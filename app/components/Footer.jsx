export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold mb-4">FleetInfinity</h4>
            <p className="text-brand-light-blue text-sm">
              Global tracking solutions powered by Dubai innovation. Serving
              businesses and individuals worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Business</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/platform-overview"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Platform Overview
                </a>
              </li>
              <li>
                <a
                  href="/fleet-solutions"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Fleet Solutions
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/demo"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Personal Use</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/personal-app"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/personal-solutions"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Personal Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-brand-light-blue hover:text-brand-green transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-900/50">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-brand-light-blue">
          <p>
            &copy; {new Date().getFullYear()} FleetInfinity DMCC. All rights
            reserved. Dubai, UAE.
          </p>
        </div>
      </div>
    </footer>
  );
}
