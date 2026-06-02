import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  extra,
  variant = "default",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  extra?: React.ReactNode;
  variant?: "default" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        isDark
          ? "bg-ink-900 text-white"
          : "brand-gradient-soft border-b border-brand-100",
      )}
    >
      {isDark && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-500 blur-[120px]" />
        </div>
      )}

      <Container className="relative py-10 md:py-14 lg:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium",
              isDark ? "text-white/60" : "text-ink-600",
            )}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <ChevronRight
                    className={cn(
                      "h-3 w-3",
                      isDark ? "text-white/30" : "text-ink-300",
                    )}
                  />
                )}
                {b.href ? (
                  <Link
                    href={b.href}
                    className={cn(
                      "transition-colors",
                      isDark ? "hover:text-brand-400" : "hover:text-brand-600",
                    )}
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      isDark ? "text-white/90" : "text-ink-900",
                    )}
                  >
                    {b.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_1fr] items-end">
          <div>
            {eyebrow && (
              <div
                className={cn(
                  "mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
                  isDark ? "text-brand-400" : "text-brand-600",
                )}
              >
                <span className="h-1 w-6 rounded-full bg-brand-500" />
                {eyebrow}
              </div>
            )}
            <h1
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight",
                isDark ? "text-white" : "text-ink-900",
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={cn(
                  "mt-4 text-base md:text-lg max-w-2xl",
                  isDark ? "text-white/70" : "text-ink-700",
                )}
              >
                {description}
              </p>
            )}
          </div>
          {extra && <div>{extra}</div>}
        </div>
      </Container>
    </section>
  );
}
