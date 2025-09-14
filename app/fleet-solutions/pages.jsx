import { LineChart, Shield, PackageSearch, ClipboardCheck } from "lucide-react";

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-slate-50 pt-32 pb-16 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-600">{subtitle}</p>
    </div>
  </div>
);

export default function FleetSolutionsPage() {
  const solutions = [
    {
      icon: LineChart,
      title: "Productivity & Optimization",
      desc: "Maximize efficiency with AI-powered route planning, fuel monitoring, and idling reduction.",
    },
    {
      icon: Shield,
      title: "Driver Safety & Performance",
      desc: "Create a culture of safety with driver scorecards, in-cab alerts, and accident reconstruction.",
    },
    {
      icon: PackageSearch,
      title: "Asset & Equipment Tracking",
      desc: "Protect high-value assets with real-time location, geofencing, and utilization reports.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Security",
      desc: "Automate HOS logging and DVIRs, and ensure your fleet operates with end-to-end data security.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Targeted Solutions for Every Challenge"
        subtitle="FleetInfinity provides specialized tools to solve your most critical fleet management problems, turning challenges into competitive advantages."
      />
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <solution.icon className="w-10 h-10 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-dark-blue">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-slate-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
