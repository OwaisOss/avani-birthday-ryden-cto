"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoverLetter from "@/components/CoverLetter";

// Lazy load components for better performance
const GratitudeLetter = lazy(() => import("@/components/GratitudeLetter"));
const LeadershipLetter = lazy(() => import("@/components/LeadershipLetter"));
const VisionLetter = lazy(() => import("@/components/VisionLetter"));
const FinalWish = lazy(() => import("@/components/FinalWish"));

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Detect user's motion preference and mobile device
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches || window.innerWidth < 768);
    
    const handleChange = () => {
      setReducedMotion(mediaQuery.matches || window.innerWidth < 768);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!showContent) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      if (target.scrollTop > 100) {
        setShowScrollIndicator(false);
      }
    };

    const scrollContainer = document.querySelector(".snap-y");
    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, [showContent]);

  const handleOpenGift = () => {
    setShowContent(true);

    // Play the audio
    if (!audioRef.current) {
      audioRef.current = new Audio("/HBD song.mp3");
      audioRef.current.loop = true;
    }
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  if (!showContent) {
    return <CoverLetter onOpen={handleOpenGift} />;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.3 : 0.8 }}
        className="overflow-x-hidden"
      >
        {/* Smooth scroll container */}
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth motion-safe">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#ffeef8]"><div className="text-[#ff6b9d] text-xl">Loading...</div></div>}>
            {/* Section 1: Gratitude Letter */}
            <section className="snap-start">
              <GratitudeLetter />
            </section>

            {/* Section 2: Leadership Letter */}
            <section className="snap-start">
              <LeadershipLetter />
            </section>

            {/* Section 3: Vision Letter */}
            <section className="snap-start">
              <VisionLetter />
            </section>

            {/* Section 4: Final Wish */}
            <section className="snap-start">
              <FinalWish />
            </section>
          </Suspense>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[#8b4545] text-sm font-medium flex flex-col items-center gap-2"
              >
                <span className="text-xs uppercase tracking-wider">
                  Scroll to continue
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
