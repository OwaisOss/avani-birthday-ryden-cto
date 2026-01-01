"use client";

import { useState, useEffect, useRef } from "react";
import CoverLetter from "@/components/CoverLetter";
import GratitudeLetter from "@/components/GratitudeLetter";
import LeadershipLetter from "@/components/LeadershipLetter";
import VisionLetter from "@/components/VisionLetter";
import FinalWish from "@/components/FinalWish";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    <div className="overflow-x-hidden">
      {/* Smooth scroll container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
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
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="text-[#8b4545] text-sm font-medium flex flex-col items-center gap-2">
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
          </div>
        </div>
      )}
    </div>
  );
}
