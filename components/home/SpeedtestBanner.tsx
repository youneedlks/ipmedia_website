import { Gauge, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

export function SpeedtestBanner() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-white border border-ink-100 shadow-[0_20px_50px_-25px_rgba(53,54,57,0.1)] p-8 md:p-12">
          <div className="absolute -top-16 -right-16 h-60 w-60 brand-gradient-soft rounded-full blur-3xl opacity-80 pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 h-40 w-40 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div className="flex items-start gap-5">
              <span className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient text-white shadow-[0_12px_28px_-10px_rgba(227,55,45,0.5)] shrink-0">
                <Gauge className="h-8 w-8" />
              </span>
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-600 mb-2">
                  <span className="h-1 w-5 rounded-full bg-brand-500" />
                  Замер скорости
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-ink-900 leading-tight">
                  Проверьте скорость вашего интернета
                </h3>
                <p className="mt-2 text-ink-600 text-sm md:text-base max-w-xl">
                  Бесплатный замер на Speedtest.net — узнайте, насколько
                  стабильно работает ваше подключение.
                </p>
              </div>
            </div>
            <Button
              href={company.speedtestUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              trailing={<ArrowRight className="h-5 w-5" />}
            >
              Проверить
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
