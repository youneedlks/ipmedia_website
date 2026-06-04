import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mainServices } from "@/lib/data/services";

export function ServiceTiles() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Услуги"
          title={
            <>
              Всё, что нужно для{" "}
              <span className="brand-text-gradient">цифрового дома</span>
            </>
          }
          description="Интернет, телевидение, телефония и безопасность — от одного надёжного провайдера Сочи"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((s, idx) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group relative overflow-hidden rounded-[var(--radius-card)] bg-white border border-ink-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-50 -translate-y-10 translate-x-10 group-hover:scale-[1.5] transition-transform duration-500" />

              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-white shadow-[0_10px_24px_-10px_rgba(7,85,215,0.5)]">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900">
                  {s.name}
                </h3>
                <div className="mt-1 text-sm font-semibold text-brand-600">
                  {s.short}
                </div>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                  Подробнее
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="absolute bottom-3 right-4 text-6xl font-black text-brand-50 select-none leading-none">
                0{idx + 1}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
