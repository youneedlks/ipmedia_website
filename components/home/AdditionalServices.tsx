import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { extraServices } from "@/lib/data/services";

export function AdditionalServices() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Ещё больше возможностей"
          title={
            <>
              Дополнительные{" "}
              <span className="brand-text-gradient">услуги</span>
            </>
          }
          description="Комплексные решения для бизнеса, застройщиков и требовательных абонентов"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {extraServices.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group relative overflow-hidden rounded-[var(--radius-card)] bg-white border border-ink-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full brand-gradient-soft opacity-60 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:brand-gradient group-hover:text-white transition-colors">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                  Подробнее
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
