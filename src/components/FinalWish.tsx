"use client";

import Image from "next/image";
import { IconStar } from "@tabler/icons-react";

export default function FinalWish() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#ff6b9d] via-[#c44569] to-[#a8336a]" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />

      <div className="max-w-5xl w-full relative z-10">
        {/* Photo section with enhanced styling */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* Glow layers */}
            <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-110" />
            <div className="absolute inset-0 bg-[#ffa3bb]/40 rounded-full blur-2xl scale-105" />

            {/* Photo frame */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/90 backdrop-blur-xl">
              <Image
                src="/a.jpg"
                alt="Avani"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Birthday message */}
        <div className="text-center space-y-8">
          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl font-[family-name:var(--font-playfair)]">
              Happy Birthday
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl font-[family-name:var(--font-playfair)]">
              Avani! 🎉
            </h2>
          </div>

          <div className="h-1 bg-white/50 mx-auto max-w-md rounded-full" />

          {/* Blessings card */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl max-w-3xl mx-auto">
            <div className="space-y-6 text-white text-xl md:text-2xl leading-relaxed">
              <p className="flex items-center gap-3 justify-center">
                <IconStar size={28} className="text-yellow-300 flex-shrink-0" />
                <span>May God guide you in every step you take</span>
              </p>

              <p className="flex items-center gap-3 justify-center">
                <IconStar size={28} className="text-yellow-300 flex-shrink-0" />
                <span>
                  May He bless you with wisdom, strength, and boundless joy
                </span>
              </p>

              <p className="flex items-center gap-3 justify-center">
                <IconStar size={28} className="text-yellow-300 flex-shrink-0" />
                <span>May He help you achieve even greater goals ahead</span>
              </p>
            </div>
          </div>

          {/* Final message */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 max-w-3xl mx-auto">
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
          </div>

          {/* Signature */}
          <div className="mt-12 space-y-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
