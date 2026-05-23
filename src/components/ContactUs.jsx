import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative w-full px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10"
    >
      {/* 🔥 TOP FADE (BLACK → TRANSPARENT) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* 🔥 MAIN BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#220708_0%,#160607_55%,#120405_100%)] -z-10" />

      <div className="mx-auto w-full max-w-[1200px] text-center relative z-20">
        <p className="text-[20px] sm:text-[26px] lg:text-[30px] font-semibold text-[#ff8b7f] tracking-wide">
          Contact Us
        </p>

        <h2 className="mx-auto mt-5 max-w-[900px] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white">
          Let’s build your brand’s success story together! Get in touch today to explore how we can help you grow.
        </h2>
      </div>

      <div className="mt-8 flex justify-center sm:mt-10 relative z-20">
        <Button
          asChild
          className="h-12 rounded-full bg-red-900 border border-red-900 px-6 text-[16px] font-medium 
          hover:bg-[linear-gradient(180deg,#220708_0%,#160607_55%,#120405_100%)] hover:border-white transition-all duration-300 sm:h-14 sm:px-8 sm:text-[18px]"
        >
          <Link href="/contact-us" className="flex items-center gap-3">
            Let’s Connect
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#ff2b1f]">
              <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}