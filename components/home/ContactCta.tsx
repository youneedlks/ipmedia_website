import { Phone, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { company } from "@/lib/data/company";
import { telHref } from "@/lib/utils/format";

export function ContactCta() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] brand-gradient text-white shadow-[0_30px_80px_-30px_rgba(7,85,215,0.45)]">
          {/* Decorative layer — subtle white glow + dot pattern, без оранжевых блюров */}
          <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-white/15 blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-32 h-[420px] w-[420px] rounded-full bg-white/10 blur-[140px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 p-7 md:p-12 lg:p-14">
            <div className="flex flex-col justify-center">
              <span className="self-start inline-flex items-center gap-2 h-8 px-3.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-[11px] font-bold tracking-[0.22em] uppercase text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Остались вопросы?
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.05] tracking-tight text-white">
                Свяжитесь с нами —
                <br />
                поможем с подключением
              </h2>
              <p className="mt-4 text-[15px] md:text-base text-white/90 max-w-lg leading-relaxed">
                Оставьте заявку, и менеджер свяжется в течение 15 минут, чтобы
                подобрать тариф и согласовать дату подключения.
              </p>

              <div className="mt-7 grid gap-2.5">
                <a
                  href={telHref(company.phones.sales)}
                  className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/12 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-colors"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.25)]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">
                      Отдел подключений
                    </div>
                    <div className="text-lg font-extrabold tabular-nums leading-tight">
                      {company.phones.sales}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a
                  href={company.max.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/12 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-colors"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.25)]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">
                      {company.max.label} · поддержка
                    </div>
                    <div className="text-lg font-extrabold leading-tight">
                      Написать в {company.max.label}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="relative bg-white rounded-[1.75rem] p-6 md:p-7 lg:p-8 text-ink-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)]">
              <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full brand-gradient text-white text-[10px] font-bold tracking-[0.18em] uppercase shadow-[0_6px_16px_-4px_rgba(7,85,215,0.55)]">
                <Sparkles className="h-3 w-3" />
                15 минут
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold leading-tight">
                Заказать обратный звонок
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">
                Мы свяжемся в течение 15 минут в рабочее время
              </p>
              <div className="mt-5">
                <CallbackForm withAddress />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
