import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";

export default function BrandMark({
  href = "/",
  className,
  imageClassName,
  showLabel = false,
  labelClassName,
  priority = false,
}) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative block shrink-0 overflow-hidden rounded-2xl">
        <Image
          src="/logo.png"
          alt="BWDM Digital logo"
          width={220}
          height={84}
          priority={priority}
          className={cn("h-auto w-[130px] rounded-2xl object-cover sm:w-[176px]", imageClassName)}
        />
      </span>

      {showLabel ? (
        <span className={cn("flex flex-col leading-none", labelClassName)}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#e7b8b6]">
            Digital
          </span>
        </span>
      ) : null}
    </Link>
  );
}
