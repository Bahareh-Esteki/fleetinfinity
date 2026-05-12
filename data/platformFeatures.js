import { CheckCircle2, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export const platformFeatures = [
  {
    id: "analytics",
    subtitle: "Actionable Intelligence",
    title: "Advanced Fleet Analytics",
    description: "Move beyond raw location data. Access rich, customizable dashboards for deep fleet analytics, driver performance leaderboards, and maintenance trend forecasting.",
    points: [
      "Customizable dashboards for real-time fleet metrics",
      "Driver behavior and safety performance leaderboards",
      "Predictive maintenance and cost-saving forecasting"
    ],
    imageAlt: "Fleet analytics dashboard mockup",
    imageSrc: "/images/analytics-dashboard.webp", // Update with your actual image path
  },
  {
    id: "maintenance",
    subtitle: "Preventative Care",
    title: "Automated Maintenance",
    description: "Keep your vehicles on the road and out of the shop. Schedule automated maintenance alerts based on mileage, engine hours, or customized time intervals.",
    points: [
      "Automated alerts for oil changes, inspections, and rotations",
      "Digital Vehicle Inspection Reports (DVIR) for compliance",
      "Historical maintenance logs and lifecycle cost tracking"
    ],
    imageAlt: "Maintenance scheduling interface",
    imageSrc: "/images/maintenance-app.webp",
  },
  {
    id: "reporting",
    subtitle: "Compliance & Efficiency",
    title: "Comprehensive Reporting",
    description: "Generate detailed reports for compliance, payroll, and efficiency audits with a single click. Export seamlessly or sync directly to your ERP.",
    points: [
      "IFTA fuel tax reporting automation",
      "Driver Hours of Service (HOS) tracking logs",
      "Custom report builder with automated scheduled delivery"
    ],
    imageAlt: "Reporting and compliance tool",
    imageSrc: "/images/reporting-tool.webp",
  }
];
