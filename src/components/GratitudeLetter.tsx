"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IconHeart, IconSparkles } from "@tabler/icons-react";

export default function GratitudeLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-linear-to-br from-[#ffeef8] via-[#fff0f5] to-[#ffe4f1] relative overflow-hidden">
      {/* Animated background shapes - simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {!isMobile && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-[#ff6b9d]/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#c44569]/10 rounded-full blur-3xl"
            />
          </>
        )}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full relative z-10"
      >
        {/* Modern card design */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-16 relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-[#ff6b9d] via-[#c44569] to-[#ff6b9d]" />

          {/* Header with icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-linear-to-br from-[#ff6b9d] to-[#c44569] rounded-2xl flex items-center justify-center shadow-lg">
                <IconHeart size={32} className="text-white" fill="white" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#c44569] mb-4 font-[family-name:var(--font-playfair)]">
              A Letter of Gratitude
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-1 bg-linear-to-r from-transparent via-[#ff6b9d] to-transparent mx-auto max-w-xs rounded-full"
            />
          </motion.div>

          {/* Letter content with modern styling */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-2xl font-semibold text-[#c44569] font-[family-name:var(--font-playfair)]"
            >
              Dear Avani,
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="bg-linear-to-r from-[#ff6b9d]/10 to-[#c44569]/10 rounded-2xl p-6 border-l-4 border-[#ff6b9d]"
              >
                <p className="text-xl font-medium text-[#c44569] italic">
                  Today we celebrate not just your birthday, but the incredible
                  leader, mentor, and visionary you are. Thank you for
                  everything.
                </p>
              </motion.div>

              <p className="flex items-start gap-3">
                <IconSparkles
                  size={24}
                  className="text-[#ff6b9d] flex-shrink-0 mt-1"
                />
                <span>
                  Your{" "}
                  <span className="font-semibold text-[#c44569]">
                    approachability
                  </span>{" "}
                  and consistency create an environment where teams feel
                  confident, aligned, and focused on shared goals.
                </span>
              </p>

              <p className="flex items-start gap-3">
                <IconSparkles
                  size={24}
                  className="text-[#ff6b9d] flex-shrink-0 mt-1"
                />
                <span>
                  The{" "}
                  <span className="font-semibold text-[#c44569]">support</span>{" "}
                  you provide goes beyond guidance it empowers us to take
                  ownership, solve problems, and push boundaries with
                  confidence.
                </span>
              </p>

              <p className="flex items-start gap-3">
                <IconSparkles
                  size={24}
                  className="text-[#ff6b9d] flex-shrink-0 mt-1"
                />
                <span>
                  You&apos;ve built a culture where clarity, trust, and
                  ownership come first enabling us to{" "}
                  <span className="font-semibold text-[#c44569]">
                    collaborate effectively
                  </span>
                  ,{" "}
                  <span className="font-semibold text-[#c44569]">
                    take responsibility
                  </span>
                  , and consistently{" "}
                  <span className="font-semibold text-[#c44569]">
                    deliver meaningful results
                  </span>
                  .
                </span>
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2, duration: 0.8 }}
                className="bg-linear-to-r from-[#ff6b9d]/10 to-[#c44569]/10 rounded-2xl p-6 border-l-4 border-[#ff6b9d]"
              >
                <p className="text-xl font-medium text-[#c44569] italic">
                  Thank you for setting a clear direction and empowering teams
                  to perform at their best.
                </p>
              </motion.div>
            </motion.div>

            {/* Signature with style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="mt-12 text-right space-y-2"
            >
              <p className="text-gray-600 text-lg italic">With deep respect,</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#c44569] font-[family-name:var(--font-playfair)]">
                Owais
              </p>
              <p className="text-sm text-gray-500">Your Faithful Developer</p>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 opacity-10">
            <IconHeart size={100} className="text-[#ff6b9d]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
