import Link from "next/link";
import BrandMark from "./BrandMark";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050102] text-white border-t border-white/10">

      {/* 🔥 WIDTH INCREASE */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">

        {/* 🔥 GRID IMPROVED */}
        <div className="grid md:grid-cols-[1.2fr_1.5fr_1fr] gap-20">

          {/* LEFT - BRAND */}
          <div className="max-w-[480px]">
            <BrandMark href="/" imageClassName="w-[180px]" />

            <p className="mt-8 text-[17px] leading-relaxed text-white/70">
              Whether you’re looking to dominate YouTube, Facebook, or TikTok,
              we deliver campaigns that captivate audiences and drive measurable results.
            </p>

            <a
              href="mailto:letsconnect@pariavicontent.com"
              className="mt-6 inline-block text-[#ff6a5f] font-semibold text-[17px] hover:text-white transition"
            >
              letsconnect@pariavicontent.com
            </a>
          </div>

          {/* CENTER - SERVICES */}
          <div className="flex justify-center">
            <div className="w-full max-w-[600px]">
              <h3 className="text-[20px] font-semibold mb-8 text-center md:text-left">
                Services
              </h3>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-white/70">
                <ul className="space-y-3">
                  <li><Link href="#">SEO Mastery</Link></li>
                  <li><Link href="#">SEO Power</Link></li>
                  <li><Link href="#">Online Reputation Management</Link></li>
                  <li><Link href="#">Music Production</Link></li>
                  <li><Link href="#">Video Production</Link></li>
                </ul>

                <ul className="space-y-3">
                  <li><Link href="#">Google Ads Expertise</Link></li>
                  <li><Link href="#">Content Syndication</Link></li>
                  <li><Link href="#">Influencer & Artist Management</Link></li>
                  <li><Link href="#">Brand Activations</Link></li>
                  <li><Link href="#">Strategic Brand Promotions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT - SOCIAL */}
          <div className="flex justify-end">
            <div>
              <h3 className="text-[20px] font-semibold mb-8 text-left">
                Follow us
              </h3>

              <div className="space-y-6">

                <a href="https://www.linkedin.com/company/pariavi-content-fzco/?viewAsMember=true" target="_blank" className="flex items-center gap-4 text-white/70 hover:text-white transition group">
                  <img src="/linkedin.png" className="h-8 w-8 object-contain group-hover:scale-110 transition" />
                  <span className="text-[15px]">Linkedin</span>
                </a>

                <a href="#" target="_blank" className="flex items-center gap-4 text-white/70 hover:text-white transition group">
                  <img src="/instagram.png" className="h-8 w-8 object-contain group-hover:scale-110 transition" />
                  <span className="text-[15px]">Instagram</span>
                </a>

                <a href="#" target="_blank" className="flex items-center gap-4 text-white/70 hover:text-white transition group">
                  <img src="/youtube.png" className="h-8 w-8 object-contain group-hover:scale-110 transition" />
                  <span className="text-[15px]">Youtube</span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

        <Link href="https://novarsistech.com/" target="_blank">
          <p className="text-white/50 text-sm">
            © 2026 novarsisTech. All rights reserved.
          </p>
        </Link>

          <div className="flex items-center gap-6 text-white/50 text-sm">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}