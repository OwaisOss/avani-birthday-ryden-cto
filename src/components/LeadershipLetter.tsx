"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  IconHeart,
  IconUsers,
  IconBulb,
  IconRocket,
  IconEye,
  IconSparkles,
} from "@tabler/icons-react";

export default function LeadershipLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const qualities = [
    {
      title: "Supportive",
      description:
        "Always there when we need guidance, never making us feel alone in challenges",
      icon: IconHeart,
      gradient: "from-[#ff6b9d] to-[#ff8fab]",
    },
    {
      title: "Approachable",
      description:
        "Creating a space where ideas flow freely and concerns are heard with care",
      icon: IconUsers,
      gradient: "from-[#c44569] to-[#d55a7e]",
    },
    {
      title: "Inspiring",
      description:
        "Leading by example, showing us what dedication and excellence truly mean",
      icon: IconBulb,
      gradient: "from-[#ff6b9d] to-[#c44569]",
    },
    {
      title: "Empowering",
      description:
        "Establishing trust, clear ownership, and accountability that enable teams to operate autonomously and deliver impact",
      icon: IconRocket,
      gradient: "from-[#a8336a] to-[#c44569]",
    },
    {
      title: "Visionary",
      description:
        "Anticipating opportunities ahead of the curve and aligning teams toward long-term, meaningful outcomes",
      icon: IconEye,
      gradient: "from-[#ff8fab] to-[#ffa3bb]",
    },

    {
      title: "Compassionate",
      description: "Understanding that we're human first, professionals second",
      icon: IconSparkles,
      gradient: "from-[#d55a7e] to-[#ff6b9d]",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-br from-[#fff5f9] via-[#ffe8f0] to-[#ffd4e5] relative overflow-hidden">
      {/* Animated background - reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 5 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0
                  ? "rgba(255, 107, 157, 0.1)"
                  : "rgba(196, 69, 105, 0.1)"
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-6xl w-full relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-linear-to-br from-[#ff6b9d] to-[#c44569] rounded-2xl flex items-center justify-center shadow-xl">
              <IconSparkles size={40} className="text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#c44569] mb-4 font-[family-name:var(--font-playfair)]">
            Why You Matter
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            The qualities that make you an{" "}
            <span className="font-semibold text-[#ff6b9d]">
              exceptional leader
            </span>
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-linear-to-br ${quality.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon size={32} className="text-white" stroke={2} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold mb-4 bg-linear-to-r ${quality.gradient} bg-clip-text text-transparent font-[family-name:var(--font-playfair)]`}
                  >
                    {quality.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {quality.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`mt-6 h-1 bg-linear-to-r ${quality.gradient} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.2 + qualities.length * 0.1 + 0.3,
            duration: 0.8,
          }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 text-center">
            <p className="text-2xl md:text-3xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed">
              These aren&apos;t just words they&apos;re the{" "}
              <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#c44569]">
                lived experience
              </span>{" "}
              of everyone who has the privilege of working with you.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
