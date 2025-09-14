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
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "brand-dark-blue": "#003366",
        "brand-light-blue": "#A9C0D1",
        "brand-green": "#58C15D",
        "brand-green-dark": "#4aa54e",
        "slate-50": "#f8fafc",
        "slate-600": "#475569",
      },
    },
  },
  plugins: [],
};
