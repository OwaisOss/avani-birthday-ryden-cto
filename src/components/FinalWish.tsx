"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { IconSparkles, IconHeart, IconStar } from "@tabler/icons-react";

export default function FinalWish() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Particle animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#ff6b9d] via-[#c44569] to-[#a8336a] animate-gradient" />

      {/* Floating particles with variety */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-110vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* Sparkle icons floating */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-white/20"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <IconSparkles size={24} />
        </motion.div>
      ))}

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full relative z-10"
      >
        {/* Photo section with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="flex justify-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Multiple glow layers */}
            <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-110 animate-pulse" />
            <div className="absolute inset-0 bg-[#ffa3bb]/40 rounded-full blur-2xl scale-105" />

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-4"
            >
              <div className="w-full h-full rounded-full border-4 border-dashed border-white/30" />
            </motion.div>

            {/* Photo frame */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/90 backdrop-blur-xl">
              <Image
                src="/a.jfif"
                alt="Avani"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative hearts */}
          </motion.div>
        </motion.div>

        {/* Birthday message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Main title */}
          <div className="space-y-4">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl font-[family-name:var(--font-playfair)]">
                Happy Birthday
              </h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl font-[family-name:var(--font-playfair)]"
            >
              Avani! 🎉
            </motion.h2>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="h-1 bg-white/50 mx-auto max-w-md rounded-full"
          />

          {/* Blessings card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="space-y-6 text-white text-xl md:text-2xl leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="flex items-center gap-3 justify-center"
              >
                <IconStar size={28} className="text-yellow-300 flex-shrink-0" />
                <span>May God guide you in every step you take</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2.1, duration: 0.6 }}
                className="flex items-center gap-3 justify-center"
              >
                <IconStar size={28} className="text-yellow-300 flex-shrink-0" />
                <span>
                  May He bless you with wisdom, strength, and boundless joy
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="flex items-center gap-3 justify-center"
              >
                <IconStar size={28} className="text-yellow-300 flex-shrink-0" />
                <span>May He help you achieve even greater goals ahead</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-4">
              Here&apos;s to another year of{" "}
              <span className="font-bold">success</span>,{" "}
              <span className="font-bold">happiness</span>, and making{" "}
              <span className="font-bold">dreams come true</span>! 🎂
            </p>
            <p className="text-white/80 text-lg mt-6">
              Thank you for being an extraordinary leader and an even more
              extraordinary person.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-12 space-y-2"
          >
            <p className="text-xl text-white/90 font-light">
              With gratitude and respect,
            </p>
            <p className="text-4xl font-bold text-white drop-shadow-lg font-[family-name:var(--font-playfair)]">
              Owais
            </p>
            <p className="text-lg text-white/70 italic">
              Your Faithful Developer
            </p>
            <p className="text-sm text-white/70 italic">From Aasma</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
