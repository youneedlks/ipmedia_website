"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import {
  ArrowRight,
  Zap,
  Tv,
  Building2,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Clock,
  Gift,
  Signal,
  ShieldCheck,
  Users,
  Radio,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

type Slide = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge: { icon: React.ReactNode; text: string };
  stats: { value: string; label: string; icon: React.ElementType }[];
  highlight: { icon: React.ElementType; title: string; text: string };
};

const slides: Slide[] = [
  {
    id: "internet",
    eyebrow: "Домашний интернет в Сочи",
    title: (
      <>
        Интернет <span className="brand-text-gradient">от 290 ₽</span>
        <br />
        с поддержкой 24/7
      </>
    ),
    description:
      "Оптоволокно до дома (FTTB), стабильные 100 Мбит/с для всей семьи и бесплатное подключение в зоне сети.",
    cta: { label: "Подобрать тариф", href: "/tarify" },
    secondaryCta: { label: "Проверить адрес", href: "#address-check" },
    badge: {
      icon: <Sparkles className="h-3.5 w-3.5" />,
      text: "С 2008 года в Сочи",
    },
    stats: [
      { value: "100", label: "Мбит/с", icon: Gauge },
      { value: "24/7", label: "Поддержка", icon: Clock },
      { value: "0 ₽", label: "Подключение", icon: Gift },
    ],
    highlight: {
      icon: Zap,
      title: "Бесплатное подключение",
      text: "в зоне покрытия сети IP Media в Сочи",
    },
  },
  {
    id: "tv",
    eyebrow: "Цифровое телевидение IPTV",
    title: (
      <>
        <span className="brand-text-gradient">200+ каналов</span>
        <br />
        в HD-качестве
      </>
    ),
    description:
      "Чёткое изображение в любую погоду, электронный телегид и мультиэкран — на ТВ и на компьютере.",
    cta: { label: "О телевидении", href: "/uslugi/iptv" },
    secondaryCta: { label: "Выбрать тариф", href: "/tarify" },
    badge: {
      icon: <Tv className="h-3.5 w-3.5" />,
      text: "Качество HD",
    },
    stats: [
      { value: "200+", label: "Каналов", icon: Tv },
      { value: "HD", label: "Качество", icon: Signal },
      { value: "EPG", label: "Телегид", icon: Radio },
    ],
    highlight: {
      icon: Tv,
      title: "Независимость от погоды",
      text: "без антенны и проводов — через интернет-канал",
    },
  },
  {
    id: "business",
    eyebrow: "Для бизнеса и застройщиков",
    title: (
      <>
        Решения для{" "}
        <span className="brand-text-gradient">бизнеса</span>
        <br />
        и застройщиков
      </>
    ),
    description:
      "Белый статический IP, Co-location, IP-телефония, видеонаблюдение и слаботочные сети для ЖК и БЦ.",
    cta: { label: "Оставить заявку", href: "/zastroyshchikam" },
    secondaryCta: { label: "Все услуги", href: "#services" },
    badge: {
      icon: <Building2 className="h-3.5 w-3.5" />,
      text: "Партнёр «Безопасный Сочи»",
    },
    stats: [
      { value: "FTTB", label: "Оптика", icon: Signal },
      { value: "SLA", label: "Гарантия", icon: ShieldCheck },
      { value: "24/7", label: "Мониторинг", icon: Users },
    ],
    highlight: {
      icon: Building2,
      title: "Полный цикл работ",
      text: "проект, монтаж, обслуживание сетей ЖК и БЦ",
    },
  },
];

const AUTO_ADVANCE_MS = 7000;

export function Hero() {
  const [[index, direction], setState] = React.useState<[number, number]>([
    0, 0,
  ]);
  const [paused, setPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const goTo = React.useCallback(
    (nextIdx: number, dir?: number) => {
      const normalized = (nextIdx + slides.length) % slides.length;
      const d = dir ?? (nextIdx > index ? 1 : -1);
      setState([normalized, d]);
      setProgress(0);
    },
    [index],
  );

  React.useEffect(() => {
    if (paused) return;
    const started = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - started;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        goTo(index + 1, 1);
      }
    }, 60);
    return () => clearInterval(id);
  }, [index, paused, goTo]);

  const slide = slides[index];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const panelVariants = {
    enter: (dir: number) => ({
      y: 20,
      opacity: 0,
      scale: 0.97,
      rotate: dir > 0 ? 1 : -1,
    }),
    center: { y: 0, opacity: 1, scale: 1, rotate: 0 },
    exit: (dir: number) => ({
      y: -10,
      opacity: 0,
      scale: 0.97,
      rotate: dir > 0 ? -1 : 1,
    }),
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 70;
    const velocityThreshold = 400;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      goTo(index + 1, 1);
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      goTo(index - 1, -1);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-24 h-[640px] w-[640px] brand-gradient-soft rounded-full blur-[100px] opacity-70" />
        <div className="absolute top-1/2 -right-60 h-[420px] w-[420px] bg-brand-100 rounded-full blur-[110px] opacity-50" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] bg-brand-100 rounded-full blur-[120px] opacity-30" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(53,54,57,0.9) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative py-14 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:gap-10 xl:gap-16 lg:grid-cols-[1.15fr_1fr] items-center">
          <motion.div
            className="min-h-[360px] md:min-h-[400px] select-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.22}
            onDragStart={() => setPaused(true)}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 h-8 px-3.5 rounded-full bg-white border border-brand-200 text-[11px] font-bold tracking-wider uppercase text-brand-700 shadow-[0_4px_14px_-6px_rgba(241,131,35,0.35)]">
                  {slide.badge.icon}
                  {slide.badge.text}
                </span>
                <div className="mt-5 text-[11px] font-bold tracking-[0.22em] uppercase text-ink-500">
                  {slide.eyebrow}
                </div>
                <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight text-ink-900">
                  {slide.title}
                </h1>
                <p className="mt-6 text-[15px] md:text-lg text-ink-600 max-w-xl leading-relaxed">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    variant="gradient"
                    size="lg"
                    href={slide.cta.href}
                    trailing={<ArrowRight className="h-5 w-5" />}
                  >
                    {slide.cta.label}
                  </Button>
                  {slide.secondaryCta && (
                    <Button
                      variant="secondary"
                      size="lg"
                      href={slide.secondaryCta.href}
                    >
                      {slide.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                {slides.map((s, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={s.id}
                      aria-label={`Перейти на слайд ${i + 1}`}
                      onClick={() => goTo(i, i > index ? 1 : -1)}
                      className="group h-2 rounded-full relative overflow-hidden transition-[width] duration-500 ease-out"
                      style={{ width: active ? 56 : 10 }}
                    >
                      <span
                        className={cn(
                          "absolute inset-0 rounded-full transition-colors",
                          active ? "bg-ink-100" : "bg-ink-200 group-hover:bg-ink-300",
                        )}
                      />
                      {active && (
                        <span
                          className="absolute inset-y-0 left-0 rounded-full brand-gradient"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <SliderArrow
                  direction="prev"
                  onClick={() => goTo(index - 1, -1)}
                />
                <SliderArrow
                  direction="next"
                  onClick={() => goTo(index + 1, 1)}
                />
              </div>
            </div>
          </motion.div>

          {/* Right visual panel */}
          <div className="relative lg:h-[460px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`panel-${slide.id}`}
                custom={direction}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* floating accents */}
                <div className="absolute -top-6 -right-6 h-20 w-20 brand-gradient rounded-2xl opacity-[0.14] blur-md -z-10" />
                <div className="absolute -bottom-8 -left-6 h-24 w-24 bg-brand-200 rounded-full opacity-60 blur-xl -z-10" />

                <div className="relative rounded-[2rem] bg-white border border-ink-100 shadow-[0_25px_70px_-25px_rgba(53,54,57,0.18)] p-6 md:p-7 overflow-hidden">
                  <div className="absolute -top-24 -right-24 h-64 w-64 brand-gradient-soft rounded-full blur-3xl opacity-70" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[10.5px] font-bold tracking-[0.22em] uppercase text-ink-500">
                          {slide.eyebrow}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-ink-700">
                          Ключевые цифры
                        </div>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient text-white shadow-[0_10px_22px_-8px_rgba(227,55,45,0.55)]">
                        {slide.badge.icon}
                      </span>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2.5">
                      {slide.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-2xl bg-gradient-to-b from-surface-50 to-white border border-ink-100 p-3.5"
                        >
                          <s.icon className="h-4 w-4 text-brand-500" />
                          <div className="mt-2.5 text-[26px] font-extrabold brand-text-gradient tabular-nums leading-none">
                            {s.value}
                          </div>
                          <div className="mt-1.5 text-[10.5px] font-bold text-ink-500 uppercase tracking-wider">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 p-4 rounded-2xl brand-gradient text-white flex items-center gap-3 shadow-[0_12px_30px_-12px_rgba(227,55,45,0.5)]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                        <slide.highlight.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="font-bold text-[14px] leading-snug">
                          {slide.highlight.title}
                        </div>
                        <div className="text-[12px] text-white/85 leading-snug mt-0.5">
                          {slide.highlight.text}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold text-ink-400 uppercase tracking-wider">
                      <span className="h-px w-4 bg-ink-200" />
                      Проведите, чтобы листать
                      <span className="h-px w-4 bg-ink-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SliderArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Предыдущий слайд" : "Следующий слайд"}
      className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-white border border-ink-200 text-ink-700 hover:border-brand-500 hover:text-brand-600 hover:shadow-[0_8px_20px_-8px_rgba(241,131,35,0.35)] transition-all active:scale-95"
    >
      <Icon className="h-4.5 w-4.5" />
    </button>
  );
}
