"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  LineChart,
  MessageCircleMore,
  PlaySquare,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card } from "../../../components/Card";
import ContactUs from "@/components/ContactUs";

const serviceSections = [
  {
    id: "seo-mastery",
    label: "SEO Mastery",
    title: "SEO Mastery",
    subtitle: "Rank higher, get noticed, and drive organic traffic with expert SEO tactics.",
    accent: "#ff2b1f",
    cards: [
      {
        icon: TrendingUp,
        title: "Boost rankings and visibility",
        description: "Strengthen keyword targeting and search intent alignment.",
      },
      {
        icon: Search,
        title: "Enhance on-page elements",
        description: "Refine meta tags, headers, internal links, and content structure.",
      },
      {
        icon: LineChart,
        title: "Improve technical SEO",
        description: "Optimize speed, crawlability, indexing, and mobile performance.",
      },
      {
        icon: CheckCircle2,
        title: "Create SEO-friendly content",
        description: "Build content that is useful, discoverable, and conversion-ready.",
      },
      {
        icon: Star,
        title: "Build quality backlinks",
        description: "Grow authority with relevant placements and trusted mentions.",
      },
      {
        icon: Users,
        title: "Optimize for local search",
        description: "Increase local discovery with Maps, profiles, and service pages.",
      },
    ],
  },
  {
    id: "seo-power",
    label: "SEO Power",
    title: "SEO Power",
    subtitle: "Focused optimization support for brands that need deeper discoverability.",
    accent: "#ff7d42",
    cards: [
      {
        icon: Search,
        title: "Audit keyword gaps",
        description: "Find opportunities your competitors are missing.",
      },
      {
        icon: TrendingUp,
        title: "Track organic growth",
        description: "Measure rankings, clicks, and meaningful traffic shifts.",
      },
      {
        icon: CheckCircle2,
        title: "Refine content clusters",
        description: "Connect pages around topics that matter to your audience.",
      },
    ],
  },
  {
    id: "reputation",
    label: "Online Reputation Management",
    title: "Online Reputation Management",
    subtitle: "Protect perception and keep your brand presentation polished online.",
    accent: "#ff5a3c",
    cards: [
      {
        icon: MessageCircleMore,
        title: "Monitor brand mentions",
        description: "Stay aware of what is being said across channels.",
      },
      {
        icon: CheckCircle2,
        title: "Shape trusted narratives",
        description: "Guide public-facing content and response strategy.",
      },
      {
        icon: Star,
        title: "Strengthen credibility",
        description: "Highlight proof, testimonials, and brand wins.",
      },
    ],
  },
  {
    id: "music-production",
    label: "Music Production",
    title: "Music Production",
    subtitle: "Create polished, release-ready music with a production process shaped around your sound.",
    accent: "#ff3b2e",
    cards: [
      {
        icon: PlaySquare,
        title: "Song production support",
        description: "Turn ideas into fully developed tracks with creative direction.",
      },
      {
        icon: LineChart,
        title: "Arrangement and mixing",
        description: "Shape the structure, energy, and sonic balance of each song.",
      },
      {
        icon: Star,
        title: "Release-ready polishing",
        description: "Refine the final output for professional distribution.",
      },
    ],
  },
  {
    id: "video-production",
    label: "Video Production",
    title: "Video Production",
    subtitle: "Develop engaging video content for campaigns, launches, and brand storytelling.",
    accent: "#ff8b7f",
    cards: [
      {
        icon: PlaySquare,
        title: "Concept and scripting",
        description: "Plan the visual story before production begins.",
      },
      {
        icon: Users,
        title: "Shoot and edit assets",
        description: "Capture and assemble footage into compelling video content.",
      },
      {
        icon: CheckCircle2,
        title: "Platform-optimized exports",
        description: "Deliver formats tailored for web, social, and ads.",
      },
    ],
  },
  {
    id: "google-ads-expertise",
    label: "Google Ads Expertise",
    title: "Google Ads Expertise",
    subtitle: "Build paid search campaigns that attract intent-driven traffic and measurable leads.",
    accent: "#ff7d42",
    cards: [
      {
        icon: TrendingUp,
        title: "Search campaign strategy",
        description: "Structure campaigns around high-value keywords and intent.",
      },
      {
        icon: LineChart,
        title: "Budget and bid optimization",
        description: "Allocate spend efficiently to maximize return.",
      },
      {
        icon: Search,
        title: "Conversion tracking setup",
        description: "Measure the actions that matter most to the business.",
      },
    ],
  },
  {
    id: "content-syndication",
    label: "Content Syndication",
    title: "Content Syndication",
    subtitle: "Distribute your best content across the right channels for more reach.",
    accent: "#ff5a3c",
    cards: [
      {
        icon: PlaySquare,
        title: "Repurpose content",
        description: "Adapt one asset into multiple high-value placements.",
      },
      {
        icon: TrendingUp,
        title: "Increase content reach",
        description: "Push visibility beyond your owned audience.",
      },
      {
        icon: Users,
        title: "Reach the right audiences",
        description: "Match content to places where your target customers already are.",
      },
    ],
  },
  {
    id: "influencer-artist-management",
    label: "Influencer & Artist Management",
    title: "Influencer & Artist Management",
    subtitle: "Coordinate talent relationships, campaigns, and collaborations with clarity.",
    accent: "#ff8b7f",
    cards: [
      {
        icon: Users,
        title: "Talent discovery and outreach",
        description: "Identify collaborators who align with your brand goals.",
      },
      {
        icon: MessageCircleMore,
        title: "Campaign coordination",
        description: "Manage deliverables, timelines, and communication end to end.",
      },
      {
        icon: Star,
        title: "Relationship management",
        description: "Keep partnerships smooth, professional, and effective.",
      },
    ],
  },
  {
    id: "brand-activations",
    label: "Brand Activations",
    title: "Brand Activations",
    subtitle: "Bring campaigns to life with memorable experiences that connect with audiences.",
    accent: "#ff2b1f",
    cards: [
      {
        icon: PlaySquare,
        title: "Live event concepts",
        description: "Design activation ideas that feel fresh and intentional.",
      },
      {
        icon: Users,
        title: "On-ground brand presence",
        description: "Create high-impact interactions in physical spaces.",
      },
      {
        icon: TrendingUp,
        title: "Engagement mechanics",
        description: "Build participation and awareness through smart execution.",
      },
    ],
  },
  {
    id: "strategic-brand-promotions",
    label: "Strategic Brand Promotions",
    title: "Strategic Brand Promotions",
    subtitle: "Plan and run promotions that support launches, visibility, and growth.",
    accent: "#ff7d42",
    cards: [
      {
        icon: TrendingUp,
        title: "Launch planning",
        description: "Map promotional activity around key moments and goals.",
      },
      {
        icon: Search,
        title: "Cross-channel promotions",
        description: "Coordinate messaging across the channels your audience uses.",
      },
      {
        icon: LineChart,
        title: "Performance monitoring",
        description: "Track results and adjust campaigns for stronger outcomes.",
      },
    ],
  },
];

const serviceIds = new Set(serviceSections.map((section) => section.id));

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

function HeroTile({ image, fallback, className }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      className={`absolute overflow-hidden border-2 border-[#ffe0dd]/90 bg-[#160607] shadow-[0_24px_50px_rgba(0,0,0,0.24)] ${className}`}
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#2a0a0b_0%,#7b1115_100%)] px-4 text-center text-sm font-semibold text-[#ffe0dd]">
          {fallback}
        </div>
      ) : (
        <img
          src={image}
          alt={fallback}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
}

function ServiceCard({ card, index, accent }) {
  const Icon = card.icon;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <Card className="h-full border-[#6f1113] bg-[#160607]/92 p-6 shadow-[0_14px_32px_rgba(0,0,0,0.24)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(0,0,0,0.32)]">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 bg-[#110405]"
          style={{ borderColor: accent, color: accent }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 text-[1.05rem] font-bold leading-7 tracking-[-0.02em] text-[#ffe0dd]">
          {card.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-7 text-[#e2b3b0]">
          {card.description}
        </p>
      </Card>
    </motion.div>
  );
}

function ServicesPageContent() {
  const searchParams = useSearchParams();
  const servicesListRef = useRef(null);
  const serviceParam = searchParams.get("service");
  const [manualSelection, setManualSelection] = useState("all");

  const selectedService = serviceParam && serviceIds.has(serviceParam) ? serviceParam : manualSelection;

  useEffect(() => {
    const element = servicesListRef.current;

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedService]);

  const displayedSections = useMemo(() => {
    if (selectedService === "all") {
      return serviceSections;
    }

    return serviceSections.filter((section) => section.id === selectedService);
  }, [selectedService]);

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#110405_0%,#0d0304_40%,#120506_100%)]">
      <section className="mx-auto flex w-full max-w-[1680px] flex-col gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-10 lg:pt-14">
        <div className="grid gap-10 lg:min-h-[42rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div {...fadeUp} className="max-w-[980px]">
            <h1 className="mt-4 max-w-[10ch] text-[clamp(3.2rem,7vw,6.1rem)] font-normal leading-[0.95] tracking-[-0.08em] text-[#fff1f0]">
              Empowering Your Digital Presence with Strategic Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f0c3bf]">
              A focused services page built to showcase core offerings, guide visitors
              through each capability, and keep the visual language aligned with the brand.
            </p>
          </motion.div>

          <div className="relative min-h-[24rem] sm:min-h-[30rem] lg:min-h-[40rem]">
            <div className="absolute inset-0 rounded-[3rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]" />
            <HeroTile
              className="top-10 right-[11rem] h-[13rem] w-[10.8rem] rounded-[28px] sm:right-[21rem] sm:h-[16rem] sm:w-[13.5rem]"
              image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
              fallback="Creative strategy"
            />
            <HeroTile
              className="top-0 right-[1.25rem] h-[15rem] w-[10.5rem] rounded-[24px] sm:right-[3rem] sm:h-[18.5rem] sm:w-[12.4rem]"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              fallback="Brand storytelling"
            />
            <HeroTile
              className="bottom-0 right-[7.4rem] h-[11rem] w-[10.2rem] rounded-[26px] sm:right-[14.6rem] sm:h-[14rem] sm:w-[13.4rem]"
              image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80"
              fallback="Audience growth"
            />
            <HeroTile
              className="bottom-0 right-[0.5rem] h-[12.5rem] w-[10.2rem] rounded-full sm:right-[1.2rem] sm:h-[15.6rem] sm:w-[13.4rem]"
              image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              fallback="Visibility"
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-[60ch] text-center text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[#fff1f0]">
          Discover and explore expert services that drive measurable results.
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setManualSelection("all")}
            className={`rounded-full border px-5 py-3 text-[0.98rem] font-medium tracking-[-0.02em] transition-all duration-200 sm:px-6 sm:py-4 sm:text-[1.02rem] ${
              selectedService === "all"
                ? "border-[#ff2b1f] bg-[#ff2b1f] text-white shadow-[0_12px_24px_rgba(255,43,31,0.24)]"
                : "border-[#6f1113] bg-[#160607] text-[#f8d7d5] hover:bg-[#2a0a0b] hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            }`}
          >
            All
          </button>

          {serviceSections.map((section) => {
            const isActive = selectedService === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => setManualSelection(section.id)}
                className={`rounded-full border px-5 py-3 text-[0.98rem] font-medium tracking-[-0.02em] transition-all duration-200 sm:px-6 sm:py-4 sm:text-[1.02rem] ${
                  isActive
                    ? "border-[#ff2b1f] bg-[#ff2b1f] text-white shadow-[0_12px_24px_rgba(255,43,31,0.24)]"
                    : "border-[#6f1113] bg-[#160607] text-[#f8d7d5] hover:bg-[#2a0a0b] hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </section>

      <section
        id="services-list"
        ref={servicesListRef}
        className="mx-auto w-full max-w-[1680px] px-4 pb-20 pt-14 sm:px-6 lg:px-10 lg:pb-24 lg:pt-16"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-16 sm:space-y-20"
          >
            {displayedSections.map((section) => (
              <motion.div key={section.id} {...fadeUp} className="scroll-mt-24">
                <div className="max-w-4xl">
                  <h2 className="text-[clamp(2.1rem,3.4vw,3.1rem)] font-medium tracking-[-0.05em] text-[#ff8b7f]">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-[1.05rem] leading-8 text-[#f0c3bf]">
                    {section.subtitle}
                  </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 sm:gap-8">
                  {section.cards.map((card, index) => (
                    <ServiceCard
                      key={card.title}
                      card={card}
                      index={index}
                      accent={section.accent}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <ContactUs />
    </main>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#110405]" />}>
      <ServicesPageContent />
    </Suspense>
  );
}
