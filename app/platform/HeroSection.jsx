'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900/95 py-20 md:py-32">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.4),_transparent_60%)]" aria-hidden="true"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              The Future of Fleet Management is{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Unified
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-slate-300 md:text-xl"
              variants={itemVariants}
            >
              One platform to track, manage, and optimize every vehicle, asset,
              and driver. FleetInfinity gives you the clarity to make smarter
              decisions and the power to scale with confidence.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
              variants={itemVariants}
            >
              <Button size="lg" className="w-full sm:w-auto">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white sm:w-auto">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Overview
              </Button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
            // Add a subtle perspective effect
            style={{ perspective: '1000px' }}
          >
            <div className="rounded-xl bg-gradient-to-b from-slate-700 to-transparent p-px transition-all duration-300 hover:bg-slate-600">
                <div className="rounded-[11px] bg-slate-900 p-2">
                    <Image
                        src="/placeholder-dashboard.png" // IMPORTANT: Replace with your actual dashboard image
                        alt="FleetInfinity Dashboard"
                        width={1200}
                        height={900}
                        className="rounded-lg shadow-2xl shadow-blue-500/10"
                        priority
                    />
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
