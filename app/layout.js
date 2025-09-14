import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// This sets up the Inter font for the entire application in an optimized way
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // This makes the font available as a CSS variable
});

// This exports metadata for SEO purposes, which Next.js will use
export const metadata = {
  title: "FleetInfinity - Total Visibility. Global Control. One Platform.",
  description:
    "Intelligent tracking solutions for your business fleet and the things you value most.",
};

// This is the main layout component that wraps every page in your application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The font variable is applied to the body tag */}
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
