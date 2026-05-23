"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { Button } from "./Button";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f0304]/88 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3">
        <BrandMark href="/" priority className="gap-2" imageClassName="w-[96px] sm:w-[116px]" />

        <nav className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold tracking-[0.02em] transition",
                  isActive
                    ? "bg-[#ff2b1f] text-white shadow-[0_12px_28px_rgba(255,43,31,0.24)]"
                    : "text-[#f8d7d5] hover:bg-white/6 hover:text-[#ff8b7f]"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Button
            asChild
            className="h-12 rounded-full border border-[#ff4a3d] bg-transparent px-6 text-[#ffd7d4] shadow-none hover:bg-[#2a0a0b]"
          >
            <Link href="/contact-us">Get in touch</Link>
          </Button>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#6f1113] bg-[#160607] text-[#ffd7d4] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#6f1113] bg-[#0f0304]/98 lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-[#ff2b1f] text-white shadow-[0_12px_28px_rgba(255,43,31,0.24)]"
                        : "text-[#f8d7d5] hover:bg-white/6 hover:text-[#ff8b7f]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Button asChild className="mt-2 w-full">
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  Get in touch
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
