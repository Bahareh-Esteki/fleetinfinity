// components/AnimatedHeroBackground.js (or place inside page.js)

const AnimatedHeroBackground = () => (
  <>
    <style jsx global>{`
      @keyframes draw-line {
        to {
          stroke-dashoffset: 0;
        }
      }
      @keyframes pulse {
        0%,
        100% {
          opacity: 0.8;
          transform: scale(0.9);
        }
        50% {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    `}</style>
    <svg
      className="absolute z-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Background Gradient */}
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "#001a3d", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#000d23", stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#grad1)" />

      {/* Simplified World Map Path (subtle background) */}
      <path
        d="M236.5 596.1s2.6-11.3 11.7-13.8 28.5-4.4 31-18.1 4.4-44.1 27.8-49.8 40.6-4.4 46.2-13.8 15.6-26.2 32.9-28.7 54.4-1.9 60-11.9 14.4-40.6 34.3-43.1 36.9-1.9 44.3-8.8 13.8-21.9 28.5-23.7 34.4-1.2 38.8-11.2 8.1-27.5 28.8-28.7 35-1.9 40-10 11.2-31.2 33.1-32.5 30-1.9 33.1-13.8 5-38.1 26.2-40 23.7-1.9 28.1-10.6 8.8-25.6 28.1-27.5 28.1-1.2 33.1-11.9 6.9-29.4 34.4-31.2 27.5-1.9 30-16.2-4.4-36.2 11.9-41.9 20-2.5 25-13.8 9.4-23.7 28.8-25 32.5-1.2 35-12.5 10-30 35-31.2 30.6-2.5 35-16.2 5.6-32.5 25.6-35 30-2.5 35.6-13.8 10-27.5 31.9-28.7 25.6-1.9 28.1-13.1 3.1-26.2 23.1-27.5 25.6-2.5 29.4-15 4.4-26.2 23.1-28.1 22.5-2.5 25-14.4 4.4-26.2 22.5-27.5 20.6-2.5 23.1-13.8 3.8-24.4 22.5-25.6 21.2-1.9 23.7-12.5M1683.5 586.2s-2.6 11.3-11.7 13.8-28.5 4.4-31 18.1-4.4 44.1-27.8 49.8-40.6 4.4-46.2 13.8-15.6 26.2-32.9 28.7-54.4 1.9-60 11.9-14.4 40.6-34.3 43.1-36.9 1.9-44.3 8.8-13.8 21.9-28.5 23.7-34.4 1.2-38.8 11.2-8.1 27.5-28.8 28.7-35 1.9-40 10-11.2 31.2-33.1 32.5-30 1.9-33.1 13.8-5 38.1-26.2 40-23.7 1.9-28.1 10.6-8.8 25.6-28.1 27.5-28.1 1.2-33.1 11.9-6.9 29.4-34.4 31.2-27.5 1.9-30 16.2 4.4 36.2-11.9 41.9-20 2.5-25 13.8-9.4 23.7-28.8 25-32.5 1.2-35 12.5-10 30-35 31.2-30.6 2.5-35 16.2-5.6 32.5-25.6 35-30 2.5-35.6 13.8-10 27.5-31.9 28.7-25.6 1.9-28.1 13.1-3.1 26.2-23.1 27.5-25.6 2.5-29.4 15-4.4 26.2-23.1 28.1-22.5 2.5-25 14.4-4.4 26.2-22.5 27.5-20.6 2.5-23.1 13.8-3.8 24.4-22.5 25.6-21.2 1.9-23.7 12.5"
        stroke="#003d7a"
        strokeWidth="2"
      />

      {/* Animated Data Paths & Dots */}
      <g stroke="#00A86B" strokeWidth="3">
        {/* Path 1 */}
        <path
          d="M400 600 Q 960 300 1520 600"
          strokeDasharray="15 15"
          style={{
            strokeDashoffset: 300,
            animation: "draw-line 10s linear infinite reverse",
          }}
        />
        <circle r="8" fill="#00A86B">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M400 600 Q 960 300 1520 600"
          />
        </circle>

        {/* Path 2 */}
        <path
          d="M550 800 Q 960 1000 1370 800"
          strokeDasharray="10 20"
          style={{
            strokeDashoffset: 400,
            animation: "draw-line 12s linear infinite",
          }}
        />
        <circle r="6" fill="#34D399">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M550 800 Q 960 1000 1370 800"
          />
        </circle>

        {/* Path 3 */}
        <path
          d="M300 450 Q 800 750 1620 400"
          strokeDasharray="5 15"
          style={{
            strokeDashoffset: 500,
            animation: "draw-line 15s linear infinite reverse",
          }}
        />
        <circle r="7" fill="#6EE7B7">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M300 450 Q 800 750 1620 400"
          />
        </circle>
      </g>

      {/* Pulsing City/Node markers */}
      <g fill="#00A86B" style={{ animation: "pulse 3s ease-in-out infinite" }}>
        <circle cx="400" cy="600" r="10" />
        <circle cx="1520" cy="600" r="12" />
        <circle cx="550" cy="800" r="8" />
        <circle cx="1370" cy="800" r="10" />
        <circle cx="300" cy="450" r="9" />
        <circle cx="1620" cy="400" r="11" />
      </g>
    </svg>
  </>
);
