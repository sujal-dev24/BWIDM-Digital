"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/Button";
import ContactUs from "../components/ContactUs";
import { cn } from "../lib/utils";

const services = [
  {
    title: "SEO Mastery",
    description:
      "We leverage a full suite of SEO strategies to help your brand stand out and rank higher in search engine results. Our approach includes:",
    bullets: [
      "Boost ranking and visibility with keyword optimization.",
      "Enhance on-page elements like meta tags and headers.",
      "Improve technical SEO with faster site speeds and better mobile optimization.",
      "Create SEO-friendly content for better search performance.",
    ],
  },
  {
    title: "SEM Power",
    description:
      "Our Search Engine Marketing strategies are designed to drive conversions by targeting the right audience at the right time. Methods include:",
    bullets: [
      "Target high-converting keywords with strategic bidding.",
      "Craft compelling, action-driven ad copy.",
      "Use demographic data for precise audience targeting.",
      "A/B test ads for continuous improvement.",
    ],
  },
  {
    title: "Paid Media Growth",
    description:
      "We build and optimize paid campaigns that keep performance moving in the right direction. Methods include:",
    bullets: [
      "Plan ad structures around campaign goals.",
      "Refine audiences based on behavior and intent.",
      "Test visuals and messaging for stronger CTR.",
      "Monitor spend and conversions in real time.",
    ],
  },
  {
    title: "Conversion Strategy",
    description:
      "We connect creative and analytics so your marketing keeps improving after launch. Methods include:",
    bullets: [
      "Review funnel drop-off points.",
      "Improve landing page alignment.",
      "Track conversion paths across channels.",
      "Optimize calls to action for better results.",
    ],
  },
  {
    title: "SEM Power",
    description:
      "Our Search Engine Marketing strategies are designed to drive conversions by targeting the right audience at the right time. Methods include:",
    bullets: [
      "Target high-converting keywords with strategic bidding.",
      "Craft compelling, action-driven ad copy.",
      "Use demographic data for precise audience targeting.",
      "A/B test ads for continuous improvement.",
    ],
  },
  {
    title: "Online Reputation Management",
    description:
      "We safeguard your brand’s image and ensure a positive online presence through:",
    bullets: [
      "Manage reviews on platforms like Google and Facebook.",
      "Respond to crises with thoughtful communication.",
      "Push positive content higher in search results.",
      "Monitor social media for brand mentions.",
    ],
  },
  {
    title: "Music Production",
    description: "Stand out with custom music that adds soul to your content.",
    bullets: [
      "Compose custom music that reflects your brand.",
      "Add professional sound design to enhance your content.",
      "Secure music licensing for pre-existing tracks.",
      "Build a memorable sonic identity with audio branding.",
    ],
  },
];

const channels = [
  {
    title: "Laapta - Nashua Unforgetta",
    handle: "@abhishekthapa7394",
    image: "lapata-logo.png",
    url: "https://youtu.be/e4g92H2bUaw?si=TL3LQXOTy7FIyOss",
  },
  {
    title: "Classic Cafe",
    handle: "@classiccafechannel",
    image: "classic-cafe-logo.png",
    url: "https://www.youtube.com/@classiccafechannel/videos",
  },
  {
    title: "Workout Music",
    handle: "@WorkoutMusic6789",
    image:
      "https://i1-c.pinimg.com/1200x/8d/fd/67/8dfd67b65adcabe04381546528ef1203.jpg",
    url: "https://www.youtube.com/@workoutmusic6789",
  },
  {
    title: "Soul music for Monday working",
    handle: "The best of R&B Soul",
    image:
      "https://i.pinimg.com/736x/8e/6a/7b/8e6a7b2e22db37af14f67568ddcac19f.jpg",
    url: "https://www.youtube.com/watch?v=xCg0O2KClTE",
  },
];


const partnerNames = [
  "Amazon",
  "Nike",
  "J.Crew",
  "Saks",
  "Samsung",
  "Sainsbury’s",
  "Adobe",
  "Meta",
];

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const CAROUSEL_STEP = 1;
const serviceSlideMotion = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 72 : -72,
    scale: 0.985,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -72 : 72,
    scale: 0.985,
  }),
};

const getCarouselCardClassName = (index, visibleCount) => {
  const centerIndex = Math.floor(visibleCount / 2);

  if (index === centerIndex) {
    return "scale-100 z-20 opacity-100";
  }

  if (index === centerIndex - 1 || index === centerIndex + 1) {
    return "scale-90 opacity-70 z-10";
  }

  return "scale-75 opacity-40 z-0";
};

const heroFaceColumns = [
  {
    direction: "up",
    offsetClassName: "lg:pt-12",
    items: [
      {
        src: "https://i.pinimg.com/736x/58/04/93/5804938c23728a69b17cc1f6f4eee844.jpg",
        alt: "Portrait of a creator",
      },
      {
        src: "https://i1-c.pinimg.com/1200x/c3/35/d8/c335d8ee1f33e625ec4bc146bb9edc81.jpg",
        alt: "Portrait of a producer",
      },
      {
        src: "https://i.pinimg.com/736x/af/ec/5f/afec5fd5f1b41e103947872f46669be6.jpg",
        alt: "Portrait of a strategist",
      },
      {
        src: "https://i.pinimg.com/736x/7e/6f/82/7e6f824fc84569ede2e6aac4720dc630.jpg",
        alt: "Portrait of a collaborator",
      },
    ],
  },
  {
    direction: "down",
    offsetClassName: "lg:pt-0",
    items: [
      {
        src: "https://i1-c.pinimg.com/1200x/f7/70/c7/f770c7c8d3041bade2bf9e96efb974a8.jpg",
        alt: "Portrait of a creator",
      },
      {
        src: "https://i.pinimg.com/736x/cf/08/18/cf081847d441aeb9c5ed732da42804f1.jpg",
        alt: "Portrait of a producer",
      },
      {
        src: "https://i.pinimg.com/736x/06/d9/2c/06d92c5cc7867b9dd03650999e93fc0e.jpg",
        alt: "Portrait of a strategist",
      },
      {
        src: "https://i1-c.pinimg.com/1200x/de/1d/e4/de1de41c0918773191c7b5c529b1c5a0.jpg",
        alt: "Portrait of a collaborator",
      },
    ],
  },
];

const heroFadeMaskStyle = {
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

function HeroFaceCard({ face, index }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 0, y: 12 } : { opacity: 0.7, y: 8 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: [0.68, 1, 0.76, 0.98, 0.7],
              y: [0, -4, 0, 4, 0],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.45, delay: index * 0.08, ease: "easeOut" }
          : {
              duration: 5.2,
              delay: index * 0.18,
              repeat: Infinity,
              ease: "linear",
            }
      }
      className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/12 bg-[#160607] shadow-[0_14px_34px_rgba(0,0,0,0.26)]"
    >
      <img
        src={face.src}
        alt={face.alt}
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.22),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(8,2,3,0.72))]" />
    </motion.div>
  );
}

function HeroFaceColumn({ column }) {
  const shouldReduceMotion = useReducedMotion();
  const loopedFaces = [...column.items, ...column.items];

  return (
    <div
      className={cn(
        "relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[620px]",
        column.offsetClassName,
      )}
      style={heroFadeMaskStyle}
    >
      <motion.div
        className="flex flex-col gap-4 sm:gap-5"
        animate={
          shouldReduceMotion
            ? { y: 0 }
            : column.direction === "up"
              ? { y: ["0%", "-50%"] }
              : { y: ["-50%", "0%"] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.3 }
            : {
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        {loopedFaces.map((face, index) => (
          <HeroFaceCard
            key={`${face.src}-${index}`}
            face={face}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}

function HeroMosaic() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {heroFaceColumns.map((column) => (
        <HeroFaceColumn key={column.direction} column={column} />
      ))}
    </div>
  );
}

function CollageCard({ card }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border-[3px] border-[#ffe0dd]/80 shadow-[0_14px_30px_rgba(0,0,0,0.28)]",
        card.className,
      )}
    >
      <div className={cn("absolute inset-0", card.background)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.28))]" />
      <div className="absolute inset-0 p-4 sm:p-5">
        {card.id === "left" ? (
          <>
            <div className="absolute left-0 top-6 h-20 w-8 rounded-r-[18px] bg-[#ff3b2e] shadow-[0_0_0_4px_rgba(255,255,255,0.12)]" />
            <div className="absolute left-10 top-[32%] h-[56%] w-[58%] rounded-[34px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,96,110,0.95)_0%,rgba(255,40,58,0.9)_34%,rgba(52,0,10,0.92)_100%)] blur-[0.2px]" />
            <div className="absolute left-[18%] top-[42%] h-[34%] w-[56%] rounded-[36px] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.03))] opacity-18 blur-[14px]" />
          </>
        ) : null}

        {card.id === "top-left" ? (
          <>
            <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-[#120d0d]/80" />
            <div className="absolute left-2 top-3 h-18 w-18 rounded-full bg-[#f4c08f]" />
            <div className="absolute left-[24%] top-[38%] h-[38%] w-[42%] rounded-[999px] bg-[#e6ae74]" />
            <div className="absolute left-[30%] top-[46%] h-[34%] w-[32%] rounded-[999px] bg-[#7b3f2d]" />
          </>
        ) : null}

        {card.id === "bottom-left" ? (
          <>
            <div className="absolute left-[17%] top-[18%] h-[44%] w-[28%] rotate-[-6deg] rounded-[999px] bg-[#fff0f0]/70" />
            <div className="absolute right-[16%] top-[18%] h-[44%] w-[28%] rotate-[6deg] rounded-[999px] bg-[#fff0f0]/55" />
            <div className="absolute left-[15%] bottom-[12%] h-[38%] w-[34%] rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.08))] opacity-20" />
          </>
        ) : null}

        {card.id === "center" ? (
          <>
            <div className="absolute left-[10%] top-[15%] h-[42%] w-[42%] rounded-[36px] bg-[#17000a]" />
            <div className="absolute left-[28%] top-[18%] h-[50%] w-[36%] rounded-[34px] bg-[linear-gradient(180deg,rgba(255,236,219,0.96),rgba(247,106,71,0.9),rgba(194,44,11,0.92))]" />
            <div className="absolute right-[10%] bottom-[16%] h-[18%] w-[18%] rounded-full bg-[#ffccb0]/70 blur-[1px]" />
          </>
        ) : null}

        {card.id === "top-right" ? (
          <>
            <div className="absolute left-[24%] top-[12%] h-[44%] w-[52%] rounded-[30px] bg-[linear-gradient(180deg,rgba(131,103,255,0.72),rgba(57,36,145,0.88))] shadow-[0_0_0_10px_rgba(255,255,255,0.06)]" />
            <div className="absolute left-[16%] bottom-[12%] h-[22%] w-[70%] rounded-[999px] bg-[#0a103f]/70 blur-[10px]" />
          </>
        ) : null}

        {card.id === "bottom-right" ? (
          <>
            <div className="absolute left-[20%] top-[18%] h-[40%] w-[18%] rotate-12 rounded-[18px] bg-[#111] shadow-[0_0_0_6px_rgba(255,255,255,0.16)]" />
            <div className="absolute right-[18%] bottom-[16%] h-[44%] w-[42%] rounded-[34px] bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(255,255,255,0.08))] opacity-20" />
          </>
        ) : null}

        {card.id === "far-right" ? (
          <>
            <div className="absolute left-[20%] top-[18%] h-[18%] w-[58%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
            <div className="absolute left-[16%] top-[28%] h-[56%] w-[68%] rounded-[999px] bg-[linear-gradient(180deg,rgba(238,222,196,0.95),rgba(101,75,43,0.88))]" />
            <div className="absolute bottom-0 right-0 h-[48%] w-[46%] rounded-tl-[50px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] opacity-22" />
          </>
        ) : null}
      </div>
    </div>
  );
}

function ServiceCard({ service, isActive }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border bg-[#160607]/92 px-5 py-6 sm:px-6 sm:py-7",
        "transition-all duration-500 ease-out",
        isActive
          ? "border-[#ff4a3d] shadow-[0_20px_60px_rgba(255,74,61,0.35)]"
          : "border-[#6f1113] shadow-[0_10px_30px_rgba(0,0,0,0.2)]",
      )}
    >
      <h3 className="text-[24px] font-semibold tracking-[-0.04em] text-[#ffe0dd] sm:text-[28px]">
        {service.title}
      </h3>

      <p className="mt-5 text-[16px] leading-8 text-[#e2b3b0] sm:text-[17px]">
        {service.description}
      </p>

      <ul className="mt-6 space-y-3">
        {service.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-[16px] leading-8 text-[#f3c9c7] sm:text-[17px]"
          >
            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#ff3b2e]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChannelCard({ channel }) {
  return (
    <a
      href={channel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[20px]">
        <img
          src={channel.image}
          alt={channel.title}
          className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Optional overlay effect */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* Content */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-white leading-snug">
            {channel.title}
          </h3>

          {channel.handle && (
            <p className="mt-1 text-[15px] sm:text-[16px] text-gray-300">
              {channel.handle}
            </p>
          )}
        </div>

        {/* Arrow */}
        <div className="mt-1 shrink-0 text-white text-xl group-hover:translate-x-1 transition">
          →
        </div>
      </div>
    </a>
  );
}


function AutoScrollStrip() {
  const reducedMotion = useReducedMotion();
  const loopedPartners = [...partnerNames, ...partnerNames];

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] text-[#121212]">
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#000000_0%,rgba(248,243,239,0)_100%)]" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#000000_0%,rgba(248,243,239,0)_100%)]" />
      <div className="flex w-full items-center gap-5 px-4 py-5 sm:gap-7 sm:px-6 sm:py-6 lg:px-8">
        <div className="min-w-0 flex-1 overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-8 sm:gap-12"
            animate={reducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={
              reducedMotion
                ? { duration: 0.2 }
                : { duration: 22, repeat: Infinity, ease: "linear" }
            }
            style={{ willChange: "transform" }}
          >
            {loopedPartners.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="shrink-0 text-[clamp(1.6rem,3vw,2.7rem)] font-semibold tracking-[-0.08em] text-[#858585] opacity-85"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="w-full bg-[#000000] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ff4f3f] leading-relaxed max-w-4xl mx-auto">
          We help brands, creators, and content owners unlock new levels of
          engagement, reach, and revenue on YouTube, Facebook, TikTok, and
          beyond. With a network of 5,000+ influencers and YouTubers, we amplify
          your brand’s voice and create campaigns that resonate.
        </h2>

        {/* Button */}
        <div className="mt-14 flex justify-center">
          <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-900 to-amber-950 px-8 py-4 text-white text-lg font-medium hover:scale-105 transition">
            About Us
            <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
              →
            </span>
          </button>
        </div>

        {/* Image Grid */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <img
              src="https://i.pinimg.com/736x/d0/1e/9d/d01e9d73604e122da0ccc8015ded5ff5.jpg"
              alt=""
              className="w-44 h-72 object-cover rounded-2xl"
            />

            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt=""
                className="w-32 h-32 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                alt=""
                className="w-32 h-32 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Center Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt=""
              className="w-72 h-96 object-cover rounded-3xl"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt=""
              className="w-44 h-56 object-cover rounded-2xl"
            />

            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                alt=""
                className="w-32 h-32 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt=""
                className="w-32 h-32 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Extreme Right Tall Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt=""
              className="w-44 h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeItems = [
  { text: "Let's work together", img: "logo-1.jpg" },
  { text: "Let's work together", img: "logo-2.jpg" },
  { text: "Let's work together", img: "logo-3.jpg" },
  { text: "Let's work together", img: "logo-4.jpg" },
  { text: "Let's work together", img: "logo-5.jpg" },
  { text: "Let's work together", img: "logo-6.jpg" },
  { text: "Let's work together", img: "logo-7.jpg" },
];

function MarqueeRow({ direction = "left", duration = 30 }) {
  const reducedMotion = useReducedMotion();
  const looped = [...marqueeItems, ...marqueeItems];

  const isLeft = direction === "left";

  return (
    <div className="min-w-0 flex-1 overflow-hidden">
      <motion.div
        className="flex w-max items-center gap-14" // 👈 gap increased
        animate={
          reducedMotion
            ? { x: 0 }
            : isLeft
              ? { x: ["0%", "-50%"] }
              : { x: ["-50%", "0%"] }
        }
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {looped.map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            {/* TEXT */}
            <span className="text-[clamp(3rem,6vw,5rem)] font-semibold tracking-[-0.06em] text-[#858585]">
              {item.text}
            </span>

            {/* IMAGE */}
            <img
              src={item.img}
              alt="logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain opacity-90"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeText() {
  const [isHover, setIsHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative w-full overflow-hidden bg-black py-6"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      
      {/* gradient fade */}
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent" />

      {/* 🔥 Cursor Follow Button */}
      {isHover && (
        <motion.div
          className="pointer-events-none absolute z-20"
          animate={{
            x: position.x - 80, // center adjust
            y: position.y - 40,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <div className="pointer-events-auto">
            <Button className="flex items-center gap-3 shadow-xl text-lg bg-gray-50 text-black border-2 border-gray-50 rounded-full px-6 py-3 relative overflow-hidden group transition-all duration-300">
              {/* TEXT */}
              <Link
                href="/contact-us"
                className="relative z-10 group-hover:text-white group-hover:translate-x-1 active:scale-95"
              >
                Let's Work Together
              </Link>

              {/* 🔥 RIGHT ARROW */}
              <svg
                className="w-6 h-6 relative z-10 rotate-45 transition-all duration-300 group-hover:rotate-90 group-hover:text-white"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-black group-hover:fill-white transition-all duration-300"
                />
              </svg>

              {/* 🔥 BACKGROUND ANIMATION */}
              <span className="absolute inset-0 bg-red-800 scale-0 group-hover:scale-150 transition duration-500 rounded-full -z-10"></span>
            </Button>
          </div>
        </motion.div>
      )}

      <div className="flex flex-col gap-6">
        <MarqueeRow direction="left" duration={40} />
        <MarqueeRow direction="right" duration={50} />
      </div>
    </section>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
        return;
      }

      if (window.innerWidth >= 768) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(services.length - visibleCount, 0);
  const visibleServices = useMemo(
    () => services.slice(currentIndex, currentIndex + visibleCount),
    [currentIndex, visibleCount],
  );
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  const handlePrevious = () => {
    if (isAtStart) {
      return;
    }

    setDirection(-1);
    setCurrentIndex((value) => Math.max(value - CAROUSEL_STEP, 0));
  };

  const handleNext = () => {
    if (isAtEnd) {
      return;
    }

    setDirection(1);
    setCurrentIndex((value) => Math.min(value + CAROUSEL_STEP, maxIndex));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#110405_0%,#0d0304_36%,#120506_100%)] text-[#f8d7d5]">
      <main className="w-full pb-16 pt-4 sm:pt-6">
        <section className="relative w-full overflow-hidden bg-[#060203] px-4 pb-10 pt-3 sm:px-6 sm:pb-12 sm:pt-5 lg:px-8 lg:pb-16 lg:pt-6">
          <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-12 py-0 md:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.92fr)] md:gap-x-16 lg:min-h-[76vh] lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1fr)] lg:gap-x-24 lg:gap-y-14 lg:py-2 xl:gap-x-28">
            <div className="relative z-10 max-w-[620px] text-left lg:max-w-[560px]">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, ease: "easeOut", delay: 0.08 }}
                className="max-w-[620px] text-2xl font-black leading-[0.92] tracking-[-0.075em] text-[#fff7f6] sm:mt-2 sm:text-2xl lg:text-7xl"
              >
                <span className="block lg:whitespace-nowrap">
                  Craft the <span className="text-[#ff4f3f]">Content.</span>
                </span>
                <span className="block lg:whitespace-nowrap">
                  Create the <span className="text-[#ff4f3f]">Buzz.</span>
                </span>
                <span className="block lg:whitespace-nowrap">
                  Drive the <span className="text-[#ff4f3f]">Results.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, ease: "easeOut", delay: 0.16 }}
                className="mt-5 max-w-[520px] text-[16px] leading-[1.45] text-[#d2b1af] sm:mt-7 sm:text-[18px] lg:text-[19px]"
              >
                Transform content into engagement
                <br className="hidden sm:block" />
                and engagement into growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
                className="mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-5"
              >
                <Button className="mx-auto shadow-xl text-lg bg-gray-50 text-black backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
                  <Link href="/contact-us">Let's Work Together</Link>

                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </Button>
              </motion.div>
            </div>

            <div className="relative z-10 w-full max-w-[30rem] justify-self-end md:ml-auto lg:max-w-[34rem] xl:max-w-[38rem]">
              <HeroMosaic />
            </div>
          </div>
        </section>

        <AutoScrollStrip />

        <AboutSection />

        <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionMotion}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-[clamp(2.2rem,6vw,4.8rem)] font-black leading-[1.05] tracking-[-0.05em] text-[#fff1f0]">
              Ready to skyrocket your brand’s influence?
            </h2>
            <p className="mt-4 text-[18px] font-light tracking-[-0.03em] text-[#e7b8b6] sm:mt-5 sm:text-[26px]">
              Explore our full suite of services
            </p>
          </motion.div>

          <div className="relative mt-10 sm:mt-14">
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={isAtStart}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#ff4a3d] bg-[#1b0708] text-[#ff8b7f] transition hover:bg-[#2a0a0b] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent sm:h-16 sm:w-16"
                aria-label="Previous"
              >
                <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${currentIndex}-${visibleCount}`}
                    custom={direction}
                    variants={serviceSlideMotion}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mx-auto flex max-w-[1200px] items-center justify-center gap-6 perspective-[1200px]"
                  >
                    {visibleServices.map((service, index) => (
                      <div
                        key={service.title}
                        className={cn(
                          "shrink-0 basis-full transition-all duration-500 ease-out",
                          "transform-gpu",
                          visibleCount === 1
                            ? "max-w-[420px]"
                            : visibleCount === 2
                              ? "md:basis-[calc(50%-0.625rem)] md:max-w-[380px]"
                              : "md:basis-[calc(33.333%-0.75rem)] md:max-w-[320px]",
                          getCarouselCardClassName(index, visibleCount),
                        )}
                      >
                        <ServiceCard
                          service={service}
                          isActive={index === Math.floor(visibleCount / 2)}
                        />
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={isAtEnd}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#ff4a3d] bg-[#1b0708] text-[#ff8b7f] transition hover:bg-[#2a0a0b] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent sm:h-16 sm:w-16"
                aria-label="Next"
              >
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#100606] py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
                Don’t miss out on exclusive content
              </h2>
              <p className="mt-3 text-[16px] sm:text-[20px] text-gray-400">
                Subscribe to our YouTube channels
              </p>
            </div>

            {/* Grid */}
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {channels.map((channel) => (
                <ChannelCard key={channel.title} channel={channel} />
              ))}
            </div>

            {/* Button */}
            <div className="mt-14 flex justify-center">
              <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-900 to-amber-950 px-8 py-4 text-white text-lg font-medium hover:scale-105 transition">
                Subscribe Now
                <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
        
        <MarqueeText />

        <ContactUs />
      </main>
    </div>
  );
}
