import React from "react";
import Image from "next/image";

const SectionBackground = ({
  src,
  overlay = "from-black/50 to-black/20",
  heightClass = "min-h-[60vh]",
  children,
  priority = false,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full ${heightClass} overflow-hidden ${className}`}
    >
      {/* Background image */}
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      />

      {/* Overlay for contrast */}
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SectionBackground;
