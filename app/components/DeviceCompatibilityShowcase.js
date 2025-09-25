// app/components/DeviceCompatibilityShowcase.js
import React from "react";
import { deviceCategories, realDevices } from "../../data/deviceDatabase";
import { getIcon } from "../../utils/iconMapping";

const RealDeviceCompatibilityShowcase = () => {
  console.log("Categories:", deviceCategories);
  console.log("Devices:", realDevices);
  console.log("Categories length:", deviceCategories?.length);
  console.log("Devices length:", realDevices?.length);

  return (
    <section className="py-24 bg-blue-500">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Data Loading Test
        </h2>

        <div className="text-center">
          <p>Categories loaded: {deviceCategories?.length || "NONE"}</p>
          <p>Devices loaded: {realDevices?.length || "NONE"}</p>

          {deviceCategories?.length > 0 && (
            <div className="mt-4">
              <h3>First category: {deviceCategories[0].name}</h3>
            </div>
          )}

          {realDevices?.length > 0 && (
            <div className="mt-4">
              <h3>First device: {realDevices[0].name}</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RealDeviceCompatibilityShowcase;
