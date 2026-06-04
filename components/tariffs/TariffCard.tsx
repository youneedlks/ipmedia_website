import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import type { Tariff } from "@/lib/data/tariffs";
import { formatPrice } from "@/lib/utils/format";

export function TariffCard({
  t,
  ctaHref = "/tarify",
}: {
  t: Tariff;
  ctaHref?: string;
}) {
  const isBiz = t.clientType === "business";
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--radius-card)] bg-white border transition-all duration-300",
        t.highlight
          ? "border-transparent shadow-[0_20px_50px_-20px_rgba(7,85,215,0.35)] ring-2 ring-brand-500"
          : "border-ink-100 hover:border-brand-300 hover:shadow-[var(--shadow-card-hover)]",
      )}
    >
      {t.badge && t.badgeText && (
        <div className="absolute -top-3 left-6">
          <Badge variant={t.badge}>{t.badgeText}</Badge>
        </div>
      )}

      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="text-xs font-semibold tracking-wider uppercase text-ink-500">
          {isBiz ? "Для бизнеса" : `${t.speed} Мбит/с`}
        </div>
        <h3 className="mt-2 text-2xl font-extrabold text-ink-900">{t.name}</h3>

        <div className="mt-4 flex items-baseline gap-1.5">
          {isBiz ? (
            <span className="text-3xl font-extrabold text-ink-900">
              Индивидуально
            </span>
          ) : (
            <>
              <span className="text-5xl font-extrabold brand-text-gradient">
                {formatPrice(t.price)}
              </span>
              <span className="text-sm text-ink-500 font-medium">₽/мес</span>
            </>
          )}
        </div>

        <ul className="mt-6 space-y-2.5 flex-1">
          {t.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
              <Check className="h-4.5 w-4.5 text-brand-500 shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Button
            variant={t.highlight ? "gradient" : "primary"}
            size="md"
            fullWidth
            href={ctaHref}
            trailing={<ArrowRight className="h-4 w-4" />}
          >
            {isBiz ? "Оставить заявку" : "Подключить"}
          </Button>
        </div>
      </div>
    </div>
  );
}
