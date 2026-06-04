"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Wifi, Tv, Phone, ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

const speedSteps = [
  { speed: 25, price: 290, label: "Базовый сёрфинг" },
  { speed: 60, price: 450, label: "HD-стриминг" },
  { speed: 80, price: 700, label: "Семейный" },
  { speed: 100, price: 900, label: "Максимум" },
];

export function TariffConstructor() {
  const [stepIdx, setStepIdx] = React.useState(2);
  const [withTv, setWithTv] = React.useState(true);
  const [withPhone, setWithPhone] = React.useState(false);

  const speedItem = speedSteps[stepIdx];
  const tvPrice = 300;
  const phoneMonthly = 300;

  const total =
    speedItem.price + (withTv ? tvPrice : 0) + (withPhone ? phoneMonthly : 0);
  const discount = [withTv, withPhone].filter(Boolean).length >= 2 ? 100 : 0;
  const finalPrice = total - discount;

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* subtle bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[420px] w-[420px] brand-gradient-soft rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] bg-brand-100 rounded-full blur-[120px] opacity-40" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Конструктор тарифа"
          title={
            <>
              Соберите свой{" "}
              <span className="brand-text-gradient">идеальный пакет</span>
            </>
          }
          description="Выберите скорость, добавьте IPTV и телефонию — получите финальную цену"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Left panel */}
          <div className="rounded-[2rem] bg-white border border-ink-100 shadow-[0_20px_50px_-25px_rgba(53,54,57,0.12)] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white shadow-[0_10px_22px_-8px_rgba(7,85,215,0.5)]">
                <Wifi className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-ink-900">Скорость интернета</div>
                <div className="text-sm text-ink-500">{speedItem.label}</div>
              </div>
            </div>

            <div className="mt-6 mb-4 flex items-end justify-between">
              <div className="flex items-baseline gap-2 tabular-nums">
                <motion.span
                  key={speedItem.speed}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-extrabold brand-text-gradient leading-none"
                >
                  {speedItem.speed}
                </motion.span>
                <span className="text-lg md:text-xl text-ink-600 font-semibold">
                  Мбит/с
                </span>
              </div>
              <div className="text-sm text-ink-500 font-medium">
                +{formatPrice(speedItem.price)} ₽/мес
              </div>
            </div>

            <div className="relative py-2">
              <input
                type="range"
                min={0}
                max={speedSteps.length - 1}
                step={1}
                value={stepIdx}
                onChange={(e) => setStepIdx(Number(e.target.value))}
                className="w-full h-1.5 cursor-pointer appearance-none bg-ink-100 rounded-full outline-none
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:border-[3px]
                  [&::-webkit-slider-thumb]:border-brand-500
                  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(7,85,215,0.15)]
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-110
                  [&::-moz-range-thumb]:w-5
                  [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-white
                  [&::-moz-range-thumb]:border-[3px]
                  [&::-moz-range-thumb]:border-brand-500"
                style={{
                  background: `linear-gradient(to right, #0755D7 0%, #00145F ${
                    (stepIdx / (speedSteps.length - 1)) * 100
                  }%, var(--color-ink-100) ${
                    (stepIdx / (speedSteps.length - 1)) * 100
                  }%, var(--color-ink-100) 100%)`,
                }}
              />
            </div>

            <div className="mt-3 grid grid-cols-4 text-xs font-semibold">
              {speedSteps.map((s, i) => (
                <button
                  key={s.speed}
                  onClick={() => setStepIdx(i)}
                  className={cn(
                    "text-center py-1.5 rounded-md transition-colors",
                    i === stepIdx
                      ? "text-brand-600"
                      : "text-ink-500 hover:text-ink-900",
                  )}
                >
                  {s.speed}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ToggleCard
                icon={<Tv className="h-5 w-5" />}
                title="IPTV"
                subtitle="200+ каналов в HD"
                price={tvPrice}
                active={withTv}
                onChange={setWithTv}
              />
              <ToggleCard
                icon={<Phone className="h-5 w-5" />}
                title="IP-телефония"
                subtitle="Городской номер"
                price={phoneMonthly}
                active={withPhone}
                onChange={setWithPhone}
              />
            </div>
          </div>

          {/* Right summary */}
          <div className="relative rounded-[2rem] p-[1.5px] brand-gradient shadow-[0_25px_60px_-20px_rgba(7,85,215,0.3)]">
            <div className="bg-white rounded-[1.92rem] p-7 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-ink-500">
                  Ваш пакет
                </div>
                {discount > 0 && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-1 h-6 px-2 rounded-full brand-gradient text-white text-[10px] font-bold tracking-wider uppercase"
                  >
                    <Sparkles className="h-3 w-3" />
                    Пакет
                  </motion.span>
                )}
              </div>

              <div className="mt-5 space-y-2.5 text-sm">
                <SummaryRow
                  label={`Интернет ${speedItem.speed} Мбит/с`}
                  value={`${formatPrice(speedItem.price)} ₽`}
                />
                {withTv && (
                  <SummaryRow
                    label="IPTV · 200+ каналов"
                    value={`${formatPrice(tvPrice)} ₽`}
                  />
                )}
                {withPhone && (
                  <SummaryRow
                    label="IP-телефония"
                    value={`${formatPrice(phoneMonthly)} ₽`}
                  />
                )}
                {discount > 0 && (
                  <SummaryRow
                    label="Скидка за пакет"
                    value={`− ${formatPrice(discount)} ₽`}
                    accent
                  />
                )}
              </div>

              <div className="my-6 h-px bg-ink-100" />

              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm text-ink-500">Итого в месяц</span>
                <motion.div
                  key={finalPrice}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-[40px] font-extrabold brand-text-gradient tabular-nums leading-none"
                >
                  {formatPrice(finalPrice)} ₽
                </motion.div>
              </div>

              <div className="mt-5 space-y-2 text-[13px] text-ink-700">
                {[
                  "Бесплатное подключение в зоне сети",
                  "Техподдержка без скрытых платежей",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Button
                href="/tarify"
                variant="gradient"
                size="lg"
                className="mt-6"
                fullWidth
                trailing={<ArrowRight className="h-5 w-5" />}
              >
                Подключить
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ToggleCard({
  icon,
  title,
  subtitle,
  price,
  active,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  price: number;
  active: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!active)}
      className={cn(
        "group text-left p-4 rounded-2xl border transition-all",
        active
          ? "bg-brand-50 border-brand-300 shadow-[0_10px_24px_-12px_rgba(7,85,215,0.3)]"
          : "bg-white border-ink-100 hover:border-brand-200",
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
            active
              ? "brand-gradient text-white"
              : "bg-ink-50 text-ink-600 group-hover:text-brand-600",
          )}
        >
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-ink-900">{title}</div>
          <div className="text-xs text-ink-500">{subtitle}</div>
        </div>
        <span
          className={cn(
            "h-6 w-11 rounded-full relative transition-colors shrink-0",
            active ? "bg-brand-500" : "bg-ink-200",
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform",
              active ? "translate-x-5" : "translate-x-0.5",
            )}
          />
        </span>
      </div>
      <div
        className={cn(
          "mt-3 text-xs font-bold tracking-wide",
          active ? "text-brand-600" : "text-ink-500",
        )}
      >
        + {formatPrice(price)} ₽/мес
      </div>
    </button>
  );
}

function SummaryRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-ink-600">{label}</span>
      <span
        className={cn(
          "font-bold tabular-nums",
          accent ? "text-brand-600" : "text-ink-900",
        )}
      >
        {value}
      </span>
    </div>
  );
}
