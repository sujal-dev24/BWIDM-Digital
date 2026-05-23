"use client";

import { cn } from "../lib/utils";

function FallbackHeroScene() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,43,31,0.16),transparent_48%)]" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffb29f]/25 bg-[radial-gradient(circle,rgba(255,43,31,0.32)_0%,rgba(255,43,31,0.12)_34%,rgba(255,43,31,0.02)_66%,transparent_100%)] opacity-80 blur-[1px]" />
      <div className="absolute left-[14%] top-[16%] h-24 w-24 rounded-[28px] border border-[#ffe0dd]/30 bg-[#ff2b1f]/18 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
      <div className="absolute right-[14%] top-[22%] h-20 w-20 rounded-full border border-[#ffe0dd]/25 bg-[#ffb29f]/14" />
      <div className="absolute bottom-[18%] left-[20%] h-16 w-16 rounded-[18px] border border-[#ffe0dd]/25 bg-[#ff2b1f]/14" />
      <div className="absolute bottom-[22%] right-[18%] h-28 w-28 rounded-full border border-[#ffe0dd]/20 bg-[#ff2b1f]/10" />
    </div>
  );
}

export default function HomeHeroScene({ className }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <FallbackHeroScene />
    </div>
  );
}
