import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-brand-600">
          <span className="h-1 w-6 rounded-full bg-brand-500" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-ink-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-ink-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
