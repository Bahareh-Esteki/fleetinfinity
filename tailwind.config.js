/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "brand-dark-blue": "#003366",
        "brand-light-blue": "#A9C0D1",
        "brand-green": "#58C15D",
        "brand-green-dark": "#4aa54e",
        "slate-50": "#f8fafc",
        "slate-600": "#475569",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        pulse: {
          "50%": { opacity: ".5" },
        },
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "ping-custom": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-custom": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
