"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronRight,
  Handshake,
  Heart,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "../../../components/Button";
import { cn } from "../../../lib/utils";
import ContactUs from "@/components/ContactUs";

import { useRef, useState, useEffect } from "react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    alt: "Creator portrait",
    shape: "rounded-full",
    className: "aspect-[1/1] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    alt: "Creative portrait",
    shape: "rounded-[34px]",
    className: "aspect-[4/5] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    alt: "Studio portrait",
    shape: "rounded-[42px]",
    className: "aspect-[3/4] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    alt: "Fashion creator portrait",
    shape: "rounded-[32px]",
    className: "aspect-[4/5] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    alt: "Team working in an office",
    shape: "rounded-[28px]",
    className: "aspect-[16/10] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Team collaboration",
    shape: "rounded-[28px]",
    className: "aspect-[16/10] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Office collaboration",
    shape: "rounded-[28px]",
    className: "aspect-[16/10] w-full",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    alt: "Creative workplace",
    shape: "rounded-[28px]",
    className: "aspect-[16/10] w-full",
  },
];

const heroFeatures = [
  {
    title: "People First",
    description: "We prioritize real connections and genuine engagement.",
    icon: Users,
  },
  {
    title: "Authentic Content",
    description: "We create stories that resonate and build lasting impact.",
    icon: Sparkles,
  },
  {
    title: "Results Driven",
    description: "We turn creative ideas into measurable growth.",
    icon: TrendingUp,
  },
  {
    title: "Built on Trust",
    description:
      "We believe in transparency, collaboration, and long-term partnerships.",
    icon: Handshake,
  },
];

const expertise = [
  {
    title: "Strategic Brand Collaborations",
    description:
      "We connect brands with the right creators to build campaigns that feel natural, relevant, and memorable.",
  },
  {
    title: "End-to-End Content Strategy",
    description:
      "From planning to publishing, we shape content systems that keep your message focused and effective.",
  },
  {
    title: "YouTube Channel Development & Optimization",
    description:
      "We help channels grow with stronger positioning, sharper thumbnails, and better audience retention.",
  },
  {
    title: "Facebook Page Management",
    description:
      "We keep your Facebook presence active, polished, and aligned with audience expectations.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function AnimatedSection({ children, className }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ImageTile({ image, className, label, icon: Icon, large = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/30 bg-[#160607] shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
        large && "shadow-[0_30px_70px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.22)_100%)]" />
      {label && Icon ? (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/18 bg-black/62 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.36)] backdrop-blur-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff3028] text-white shadow-[0_10px_24px_rgba(255,48,40,0.34)]">
            <Icon className="h-4 w-4" />
          </span>
          <span className="whitespace-nowrap">{label}</span>
        </div>
      ) : null}
    </motion.div>
  );
}

function HeroCollage() {
  return (
    <div className="flex items-end justify-start gap-8">
      {/* ROUND */}
      <div className="w-[130px] h-[130px] rounded-full overflow-hidden border border-white/20">
        <img src={heroImages[0].src} className="w-full h-full object-cover" />
      </div>

      {/* SMALL CARD */}
      <div className="w-[140px] h-[140px] rounded-[20px] overflow-hidden border border-white/20">
        <img src={heroImages[1].src} className="w-full h-full object-cover" />
      </div>

      {/* TALL CARD */}
      <div className="w-[160px] h-[260px] rounded-[60px] overflow-hidden border border-white/20">
        <img src={heroImages[2].src} className="w-full h-full object-cover" />
      </div>

      {/* BIG IMAGE */}
      <div className="w-[260px] h-[320px] rounded-[24px] overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <img src={heroImages[3].src} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function HeroFeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div variants={childVariants} className="min-w-0">
      <div className="flex h-[86px] w-[86px] items-center justify-center rounded-[16px] border border-red-500/35 bg-red-500/8 text-red-500 shadow-[0_14px_34px_rgba(255,43,31,0.08)]">
        <Icon className="h-9 w-9" />
      </div>
      <h3 className="mt-5 text-[17px] font-semibold leading-tight text-white">
        {item.title}
      </h3>
      <p className="mt-3 max-w-[22ch] text-[15px] leading-6 text-white/68">
        {item.description}
      </p>
    </motion.div>
  );
}

function ExpertiseCard({ item }) {
  return (
    <motion.div
      variants={childVariants}
      whileHover={{ y: -4 }}
      className="rounded-[28px] border border-[#6f1113] bg-[#160607]/92 px-6 py-7 shadow-[0_14px_34px_rgba(0,0,0,0.2)] md:px-7 md:py-8"
    >
      <h3 className="max-w-[16ch] text-[24px] font-semibold leading-[1.18] tracking-[-0.04em] text-[#ffe0dd] md:text-[28px]">
        {item.title}
      </h3>
      <p className="mt-8 max-w-[24ch] text-[16px] leading-8 text-[#e2b3b0] md:text-[17px]">
        {item.description}
      </p>
    </motion.div>
  );
}

function VideoBlock() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔥 AUTO PAUSE WHEN OUT OF VIEW
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={imageVariants}
      className="relative w-full h-150 max-w-[720px] mx-auto overflow-hidden rounded-[28px] border border-[#ffe0dd]/60 bg-[#160607] shadow-[0_22px_54px_rgba(0,0,0,0.24)]"
    >
      {/* 🎬 VIDEO */}
      <video
        ref={videoRef}
        src="/video.mp4"
        muted // ✅ ADDED
        playsInline
        preload="auto"
        className="w-full h-150 aspect-video object-cover object-[50%_10%]"
      />

      {/* ▶️ PLAY BUTTON */}
      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#ff2b1f]/80 backdrop-blur-md shadow-[0_18px_40px_rgba(255,43,31,0.3)] hover:scale-110 transition">
            <div className="ml-1 border-l-[14px] sm:border-l-[18px] border-l-white border-y-[9px] sm:border-y-[12px] border-y-transparent" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function AboutUsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#110405_0%,#0d0304_40%,#120506_100%)] text-[#f8d7d5]">
      <AnimatedSection className="relative w-full overflow-hidden bg-[#050102] py-24 lg:py-32">
        {/* 🔥 BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/background.jpg" // 👉 apni image path yaha daalo
            alt="background"
            className="w-full h-full object-cover blur-[6px] scale-105"
          />

          {/* 🔥 DARK OVERLAY (for readability) */}
          <div className="absolute inset-0 bg-black/70" />

          {/* 🔥 RED GRADIENT TOUCH */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,43,31,0.25),transparent_60%)]" />
        </div>

        {/* 🔥 CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-16">
          <motion.div variants={childVariants} className="max-w-[900px]">
            {/* 🔥 HEADING */}
            <h1 className="text-[clamp(3.5rem,6vw,6rem)] font-[800] leading-[1.02] tracking-[-0.04em] text-white">
              Connecting <span className="text-[#ff2b1f]">Brands</span> to{" "}
              <br />
              <span className="text-[#ff2b1f]">Audiences</span> Through <br />
              Authentic <span className="text-[#ff2b1f]">Stories</span>
            </h1>

            {/* 🔥 DESCRIPTION */}
            <p className="mt-6 max-w-[600px] text-[18px] leading-8 text-white/70">
              We bridge the gap between brands and people by creating meaningful
              content and real connections that inspire action and drive growth.
            </p>

            {/* 🔥 PROGRESS LINE */}
            <div className="mt-8 flex h-[3px] w-[150px] overflow-hidden rounded-full bg-white/10">
              <span className="h-full w-1/2 bg-[#ff2b1f]" />
              <span className="h-full w-1/2 bg-[#6f1113]/70" />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[linear-gradient(180deg,#160607_0%,#130405_100%)] px-5 py-14 shadow-[0_20px_56px_rgba(0,0,0,0.14)] sm:px-8 lg:px-12 lg:py-16">
        {/* 🔥 HEADING */}
        <motion.h2
          variants={childVariants}
          className="mx-auto max-w-[30ch] text-center text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#fff1f0]"
        >
          Empowering Brands with Influencer Expertise and Global Reach
        </motion.h2>

        {/* 🔥 CONTENT GRID */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* 🔥 LEFT TEXT */}
          <motion.div variants={childVariants} className="max-w-[620px]">
            <p className="text-[16px] leading-7 text-[#f0c3bf] sm:text-[18px] sm:leading-8">
              At PARI AVI CONTENT FCZO, we don’t just help brands grow—we ignite
              a movement. With over 5,000 successful partnerships across
              geographies and industries, we’ve established ourselves as a
              powerhouse in influencer marketing and content strategy.
            </p>

            <p className="mt-6 text-[16px] leading-7 text-[#f0c3bf] sm:text-[18px] sm:leading-8">
              Whether you’re looking to dominate YouTube, Facebook, or TikTok,
              we deliver campaigns that captivate audiences and drive measurable
              results.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 h-12 rounded-full bg-[#ff2b1f] px-6 text-sm shadow-[0_12px_30px_rgba(255,43,31,0.28)] hover:bg-[#e51f17]"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Let’s Grow Together
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#ff2b1f]">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* 🔥 RIGHT IMAGE */}
          <motion.div
            variants={imageVariants}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px]"
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-[#6f1113] bg-[#160607] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {/* 🔥 INNER RING */}
              <div className="absolute inset-3 rounded-full border-[10px] border-[#ff2b1f]" />

              {/* 🔥 IMAGE (FIXED POSITION) */}
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                alt="Influencer"
                className="relative z-10 h-full w-full rounded-full object-cover object-top"
              />

              {/* 🔥 SOFT GLOW */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,43,31,0.15),transparent_60%)]" />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-3 py-18 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.h2
            variants={childVariants}
            className="text-[clamp(2rem,3.8vw,4rem)] font-semibold tracking-[-0.05em] text-[#fff1f0]"
          >
            Our Commitment
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="max-w-[980px] text-[clamp(1.45rem,2.3vw,3rem)] leading-[1.36] tracking-[-0.05em] text-[#f0c3bf]"
          >
            Our specialty lies in the infotainment sector, and we proudly work
            with influencers from Tier 1, 2, and 3 categories across genres to
            meet the diverse needs of every platform and client. Our team is
            committed to producing premium content while ensuring responsive and
            collaborative support at every step.
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#160607]/94 px-5 py-14 shadow-[0_18px_44px_rgba(0,0,0,0.2)] sm:px-8 lg:px-12 lg:py-16">
        <motion.h2
          variants={childVariants}
          className="mx-auto max-w-[32ch] text-center text-[clamp(2.2rem,4vw,4.3rem)] font-semibold leading-[1.03] tracking-[-0.05em] text-[#fff1f0]"
        >
          Our Expertise in Strategic Collaborations and Content Excellence
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#160607]/94 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* 🔥 TEXT */}
          <motion.div variants={childVariants} className="max-w-[520px]">
            <p className="text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.3] tracking-[-0.03em] text-[#e9b9b7]">
              We believe in crafting meaningful relationships through
              transparency, commitment, and shared success.
            </p>

            <p className="mt-6 text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#fff1f0]">
              Honesty. <br />
              Reliability. <br />
              Partnership.
            </p>
          </motion.div>

          {/* 🔥 VIDEO */}
          <VideoBlock />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-2 py-16 sm:px-6 lg:px-10">
        <motion.h2
          variants={childVariants}
          className="mx-auto mb-10 max-w-[35ch] text-center text-[clamp(2.2rem,4.2vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[#fff1f0]"
        >
          The Professionals Driving Our Success
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {heroImages.slice(4).map((image) => (
            <motion.div
              key={image.src}
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-[24px] border-2 border-[#ffe0dd]/80 bg-[#160607] shadow-[0_16px_38px_rgba(0,0,0,0.2)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[210px] w-full object-cover sm:h-[230px] md:h-[260px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <ContactUs />
    </main>
  );
}
