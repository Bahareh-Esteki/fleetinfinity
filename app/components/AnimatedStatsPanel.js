import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Smartphone, DollarSign, Brain, Shield } from "lucide-react";
import Image from "next/image";

const AnimatedStatsPanel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden"
      whileHover={{
        scale: 1.02,
        shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.2 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/bg-1.png"
          alt="Background pattern"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
          priority={false}
        />
      </motion.div>

      <div className="relative z-10">
        {/* Title */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-brand-dark-blue mb-8 text-center"
        >
          Why Modern Matters
        </motion.h3>

        <div className="space-y-6">
          {/* Implementation Time */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between py-4 border-b border-gray-100 rounded-lg px-2"
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(34, 197, 94, 0.02)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Clock className="w-5 h-5 text-brand-green" />
              </motion.div>
              <span className="font-medium text-gray-800">
                Implementation Time
              </span>
            </div>
            <div className="text-right">
              <motion.div
                variants={numberVariants}
                className="font-bold text-2xl text-brand-green"
                whileHover={{ scale: 1.1 }}
              >
                &lt; 48hrs
              </motion.div>
              <div className="text-sm text-gray-600">
                vs 2-6 weeks industry avg
              </div>
            </div>
          </motion.div>

          {/* Mobile Experience */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between py-4 border-b border-gray-100 rounded-lg px-2"
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(34, 197, 94, 0.02)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                whileHover={{
                  y: -2,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <Smartphone className="w-5 h-5 text-brand-green" />
              </motion.div>
              <span className="font-medium text-gray-800">
                Mobile Experience
              </span>
            </div>
            <div className="text-right">
              <motion.div
                variants={numberVariants}
                className="font-bold text-2xl text-brand-green"
                whileHover={{ scale: 1.1 }}
              >
                Native
              </motion.div>
              <div className="text-sm text-gray-600">iOS & Android apps</div>
            </div>
          </motion.div>

          {/* Cost Advantage */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between py-4 border-b border-gray-100 rounded-lg px-2"
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(34, 197, 94, 0.02)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <DollarSign className="w-5 h-5 text-brand-green" />
              </motion.div>
              <span className="font-medium text-gray-800">Cost Advantage</span>
            </div>
            <div className="text-right">
              <motion.div
                variants={numberVariants}
                className="font-bold text-2xl text-brand-green"
                whileHover={{ scale: 1.1 }}
              >
                40%
              </motion.div>
              <div className="text-sm text-gray-600">
                less than legacy providers
              </div>
            </div>
          </motion.div>

          {/* AI Features */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between py-4 rounded-lg px-2"
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(34, 197, 94, 0.02)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.4 },
                }}
              >
                <Brain className="w-5 h-5 text-brand-green" />
              </motion.div>
              <span className="font-medium text-gray-800">AI Features</span>
            </div>
            <div className="text-right">
              <motion.div
                variants={numberVariants}
                className="font-bold text-2xl text-brand-green"
                whileHover={{ scale: 1.1 }}
              >
                Built-in
              </motion.div>
              <div className="text-sm text-gray-600">
                not an expensive add-on
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Badge */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-4 bg-brand-green/10 rounded-lg backdrop-blur-sm"
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(34, 197, 94, 0.15)",
            transition: { duration: 0.2 },
          }}
        >
          <motion.p
            className="text-sm text-brand-dark-blue text-center font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
                transition: { repeat: Infinity, duration: 2 },
              }}
              className="inline-block"
            >
              <Shield className="w-4 h-4 inline mr-2" />
            </motion.span>
            Enterprise security from day one
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedStatsPanel;
