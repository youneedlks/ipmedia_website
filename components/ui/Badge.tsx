import * as React from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant = "hit" | "popular" | "max" | "new" | "neutral";

const classes: Record<BadgeVariant, string> = {
  hit: "bg-brand-700 text-white",
  popular: "bg-brand-100 text-brand-700",
  max: "bg-ink-900 text-white",
  new: "bg-white text-brand-700 border border-brand-200",
  neutral: "bg-ink-100 text-ink-700",
};

export function Badge({
  variant = "neutral",
  children,
  className,
}: {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 h-7 rounded-full text-xs font-semibold uppercase tracking-wide",
        classes[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
