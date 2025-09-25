// Test version with icon mapping
import React from "react";
import { deviceCategories, realDevices } from "../../data/deviceDatabase";
import { getIcon } from "../../utils/iconMapping";

const RealDeviceCompatibilityShowcase = () => {
  const testIcon = getIcon("Globe", { className: "w-8 h-8 text-white" });

  return (
    <section className="py-24 bg-green-500">
      <div className="container mx-auto px-4 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Icon Mapping Test</h2>

        <div className="mb-4">
          <p>Test Icon (Globe): {testIcon}</p>
        </div>

        <div>
          <p>Categories with icons:</p>
          {deviceCategories?.slice(0, 3).map((category, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 mb-2"
            >
              {getIcon(category.icon, { className: "w-6 h-6" })}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealDeviceCompatibilityShowcase;
