"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  IconRocket,
  IconTarget,
  IconTrophy,
  IconBolt,
} from "@tabler/icons-react";

export default function VisionLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const commitments = [
    {
      icon: IconBolt,
      text: "Unwavering Dedication",
      color: "from-[#ff6b9d] to-[#ff8fab]",
    },
    {
      icon: IconRocket,
      text: "Relentless Innovation",
      color: "from-[#c44569] to-[#d55a7e]",
    },
    {
      icon: IconTarget,
      text: "Focused Excellence",
      color: "from-[#a8336a] to-[#c44569]",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-gradient" />

      {/* Parallax background elements - disabled on mobile */}
      {!isMobile && (
        <>
          <motion.div
            style={{ y, opacity }}
            className="absolute top-1/4 left-10 w-96 h-96 bg-[#ff6b9d]/20 rounded-full blur-3xl"
          />
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
              opacity,
            }}
            className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#c44569]/20 rounded-full blur-3xl"
          />
        </>
      )}

      {/* Floating particles - reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 10 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full relative z-10"
      >
        {/* Main content card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-16 shadow-2xl border border-white/20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-linear-to-br from-[#ff6b9d] to-[#c44569] rounded-3xl flex items-center justify-center shadow-2xl">
                <IconTrophy size={48} className="text-white" stroke={2} />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              Our Vision for Ryden
            </h2>

            {/* Animated divider */}
            <div className="relative h-1 w-full max-w-md mx-auto overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ x: "-100%" }}
                animate={isInView ? { x: "200%" } : {}}
                transition={{
                  delay: 0.8,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#ff6b9d] to-transparent"
              />
            </div>
          </motion.div>

          {/* Core message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-linear-to-r from-[#ff6b9d]/20 to-[#c44569]/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/30"
            >
              <p className="text-2xl md:text-3xl text-white/90 leading-relaxed text-center mb-6">
                Under your leadership, I have witnessed how Ryden has grown not
                just as a company, but as a{" "}
                <span className="font-bold text-[#ffa3bb]">
                  family of dreamers and achievers
                </span>
                .
              </p>
              <p className="text-2xl md:text-3xl text-white/90 leading-relaxed text-center">
                Your vision has been our{" "}
                <span className="font-bold text-[#ffa3bb]">compass</span>, and
                your belief in us has been our{" "}
                <span className="font-bold text-[#ffa3bb]">fuel</span>.
              </p>
            </motion.div>

            {/* Supporting text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto text-center"
            >
              <p className="text-2xl md:text-3xl font-semibold">
                I want you to know that I am deeply committed to giving my{" "}
                <span className="font-bold text-[#ffa3bb]">absolute best</span>{" "}
                alongside my incredible team to help Ryden reach{" "}
                <span className="font-bold text-[#ffa3bb]">new heights</span>.
              </p>

              <p>
                Every line of code, every late night, every challenge we
                overcome together is fueled by the{" "}
                <span className="font-bold text-[#ff6b9d]">
                  confidence you&apos;ve instilled in us
                </span>
                .
              </p>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#ffa3bb] italic font-[family-name:var(--font-playfair)] mt-8"
              >
                We believe in the future you&apos;re building, and we&apos;re
                honored to build it with you.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Commitment badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center h-full">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <Icon size={32} className="text-white" stroke={2} />
                    </motion.div>
                    <p className="text-white font-semibold text-lg">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20">
              <p className="text-white/80 text-lg">
                Together, we&apos;ll make it happen 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
