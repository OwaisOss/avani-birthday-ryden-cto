"use client";

import { IconSparkles, IconGift } from "@tabler/icons-react";

interface CoverLetterProps {
  onOpen: () => void;
}

export default function CoverLetter({ onOpen }: CoverLetterProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#ff6b9d] via-[#c44569] to-[#a8336a]">
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Main card */}
        <div className="relative">
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 md:p-16">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#ff6b9d] rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#ff6b9d] rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#ff6b9d] rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#ff6b9d] rounded-br-2xl" />

            <div className="space-y-8">
              {/* Icon */}
              <div className="inline-block">
                <div className="w-20 h-20 mx-auto bg-linear-to-br from-[#ff6b9d] to-[#c44569] rounded-2xl flex items-center justify-center shadow-lg">
                  <IconGift size={40} stroke={2} className="text-white" />
                </div>
              </div>

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
              <button
                onClick={onOpen}
                className="group relative px-10 py-4 bg-linear-to-r from-[#ff6b9d] to-[#c44569] text-white rounded-full font-semibold text-lg shadow-xl transition-transform active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Open Your Gift
                  <IconSparkles size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
