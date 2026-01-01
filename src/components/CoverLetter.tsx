"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { IconSparkles, IconHeart, IconGift } from "@tabler/icons-react";
import gsap from "gsap";

interface CoverLetterProps {
  onOpen: () => void;
}

export default function CoverLetter({ onOpen }: CoverLetterProps) {
  const [isOpening, setIsOpening] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cardRef.current || !buttonRef.current) return;

    // Entrance animation
    gsap.from(cardRef.current, {
      scale: 0.5,
      opacity: 0,
      rotateY: -180,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    // Button pulse animation
    gsap.to(buttonRef.current, {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(255, 107, 157, 0.6)",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleOpen = () => {
    setIsOpening(true);
    
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.1,
        rotateY: 15,
        z: 100,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(cardRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power2.in",
          });
        },
      });
    }
    
    setTimeout(() => onOpen(), 1800);
  };

  // Floating icons animation
  const floatingIcons = [
    { Icon: IconSparkles, delay: 0, duration: 3 },
    { Icon: IconHeart, delay: 0.5, duration: 3.5 },
    { Icon: IconGift, delay: 1, duration: 4 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#ff6b9d] via-[#c44569] to-[#a8336a] animate-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
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
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        {/* Floating icons around the card */}
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute text-white/30"
            style={{
              left: index === 0 ? "10%" : index === 1 ? "85%" : "50%",
              top: index === 0 ? "20%" : index === 1 ? "30%" : "10%",
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          >
            <Icon size={48} stroke={1.5} />
          </motion.div>
        ))}

        {/* Main card */}
        <motion.div
          ref={cardRef}
          animate={isOpening ? { scale: 1.05, y: -20 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl scale-105" />
          
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 md:p-16">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#ff6b9d] rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#ff6b9d] rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#ff6b9d] rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#ff6b9d] rounded-br-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <div className="w-20 h-20 mx-auto bg-linear-to-br from-[#ff6b9d] to-[#c44569] rounded-2xl flex items-center justify-center shadow-lg">
                  <IconGift size={40} stroke={2} className="text-white" />
                </div>
              </motion.div>

              {/* Text */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#c44569] font-[family-name:var(--font-playfair)]">
                  A Special Message
                </h1>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                  This isn&apos;t just a birthday wish...
                </p>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                  it&apos;s a heartfelt celebration of{" "}
                  <span className="font-semibold text-[#ff6b9d]">
                    an extraordinary leader
                  </span>
                </p>
              </div>

              {/* Button */}
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={handleOpen}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-linear-to-r from-[#ff6b9d] to-[#c44569] text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Open Your Gift
                  <IconSparkles size={20} className="group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

