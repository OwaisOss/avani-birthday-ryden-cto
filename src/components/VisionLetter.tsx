"use client";

import {
  IconRocket,
  IconTarget,
  IconTrophy,
  IconBolt,
} from "@tabler/icons-react";

export default function VisionLetter() {

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
      <div className="absolute inset-0 bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

      <div className="max-w-5xl w-full relative z-10">
        {/* Main content card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-16 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-linear-to-br from-[#ff6b9d] to-[#c44569] rounded-3xl flex items-center justify-center shadow-2xl">
                <IconTrophy size={48} className="text-white" stroke={2} />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              Our Vision for Ryden
            </h2>

            {/* Divider */}
            <div className="h-1 w-full max-w-md mx-auto rounded-full bg-white/20" />
          </div>

          {/* Core message */}
          <div className="space-y-8">
            {/* Main statement */}
            <div className="bg-linear-to-r from-[#ff6b9d]/20 to-[#c44569]/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/30">
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
            </div>

            {/* Supporting text */}
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto text-center">
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

              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ff6b9d] to-[#ffa3bb] italic font-[family-name:var(--font-playfair)] mt-8">
                We believe in the future you&apos;re building, and we&apos;re
                honored to build it with you.
              </p>
            </div>
          </div>

          {/* Commitment badges */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all text-center h-full">
                    <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon size={32} className="text-white" stroke={2} />
                    </div>
                    <p className="text-white font-semibold text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing statement */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20">
              <p className="text-white/80 text-lg">
                Together, we&apos;ll make it happen 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
