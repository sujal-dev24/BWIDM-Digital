import { cn } from "../lib/utils";

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[#6f1113] bg-[#160607]/92 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-xl font-bold tracking-tight text-[#ffe0dd]", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("mt-2 text-sm leading-6 text-[#d2a3a1]", className)}
      {...props}
    />
  );
}

export { Card, CardTitle, CardDescription };
