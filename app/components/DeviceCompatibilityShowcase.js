// app/components/DeviceCompatibilityShowcase.js
import React from "react";

const RealDeviceCompatibilityShowcase = () => {
  console.log("DeviceCompatibilityShowcase component is rendering"); // Add this line

  return (
    <section className="py-24 bg-red-500">
      {" "}
      {/* Make it visible with red background */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center">
          Device Compatibility Test - This Should Be Visible
        </h2>
        <p className="text-white text-center mt-4">
          If you see this red section, the component is working!
        </p>
      </div>
    </section>
  );
};

export default RealDeviceCompatibilityShowcase;
