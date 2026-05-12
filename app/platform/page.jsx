import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { platformFeatures } from '@/data/platformFeatures';
import { HeroSection } from './HeroSection';

// The component for the "Trust Metrics" banner
function TrustMetrics() {
  const metrics = [
    { value: '99.99%', label: 'Uptime Guarantee' },
    { value: 'Hardware', label: 'Agnostic' },
    { value: '24/7', label: 'Premium Support' },
    
  ];

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 py-8 text-center md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// The main page component
export default function PlatformOverviewPage() {
  return (
    // 1. Removed the global `bg-slate-900 text-white` from this container
    <main>
      <HeroSection />
      <TrustMetrics />

      {/* 2. Added a new <section> wrapper for a light theme */}
      <section className="bg-white py-20 sm:py-32">
        <div className="space-y-20 sm:space-y-32">
          {platformFeatures.map((feature, index) => (
            <div key={feature.id} className="container mx-auto max-w-7xl px-4">
              <div
                className={`grid items-center gap-12 md:grid-cols-2 md:gap-24 ${
                  index % 2 === 1 ? 'md:grid-flow-row-dense' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {/* 3. Simplified the image styling for a light background */}
                  <Image
                    src={feature.imageSrc} // FIX: Was `imageUrl`, but your data uses `imageSrc`
                    alt={feature.imageAlt} // FIX: Using the more descriptive alt text from your data
                    width={1000}
                    height={800}
                    className="rounded-lg shadow-2xl"
                  />
                </div>

                {/* Text Column */}
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  {/* 4. Updated text colors for readability on a light background */}
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="mt-6 text-lg text-slate-600">
                    {feature.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
