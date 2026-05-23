import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4a3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#110405] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#ff2b1f] text-white hover:-translate-y-0.5 hover:bg-[#e52218]",
        secondary:
          "border border-[#6f1113] bg-[#1b0708] text-[#ffd7d4] shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-[#280b0d]",
        ghost: "bg-transparent text-[#ffd7d4] hover:bg-white/8",
        outline:
          "border border-[#ff4a3d] bg-transparent text-[#ffd7d4] hover:bg-[#2a0a0b]",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-base sm:px-9",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
