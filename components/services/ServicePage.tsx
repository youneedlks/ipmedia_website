import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TariffCard } from "@/components/tariffs/TariffCard";
import { ContactCta } from "@/components/home/ContactCta";
import { serviceDetails } from "@/lib/data/service-details";
import { tariffs } from "@/lib/data/tariffs";
import { services } from "@/lib/data/services";

export function ServicePage({ slug }: { slug: keyof typeof serviceDetails }) {
  const detail = serviceDetails[slug];
  const service = services.find((s) => s.slug === slug);
  if (!detail || !service) return null;
  const ServiceIcon = service.icon;

  const related =
    detail.relatedTariffIds
      ?.map((id) => tariffs.find((t) => t.id === id))
      .filter(Boolean) ?? [];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги" },
          { label: service.name },
        ]}
        eyebrow={detail.hero.eyebrow}
        title={detail.hero.title}
        description={detail.hero.description}
        extra={
          detail.hero.priceFrom ? (
            <div className="bg-white rounded-[2rem] p-6 shadow-[var(--shadow-card)] border border-brand-100">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
                Тариф от
              </div>
              <div className="mt-1 text-3xl md:text-4xl font-extrabold brand-text-gradient">
                {detail.hero.priceFrom}
              </div>
              <Button
                href="/tarify"
                variant="gradient"
                size="md"
                className="mt-4"
                trailing={<ArrowRight className="h-4 w-4" />}
                fullWidth
              >
                Посмотреть тарифы
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-[2rem] p-6 shadow-[var(--shadow-card)] border border-brand-100">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-white">
                  <ServiceIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs text-ink-500 uppercase tracking-wider">
                    {service.name}
                  </div>
                  <div className="font-bold text-ink-900">
                    Индивидуальный расчёт
                  </div>
                </div>
              </div>
              <Button
                href="#contact"
                variant="gradient"
                size="md"
                className="mt-4"
                trailing={<ArrowRight className="h-4 w-4" />}
                fullWidth
              >
                Оставить заявку
              </Button>
            </div>
          )
        }
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {detail.benefits.map((b) => (
              <Card key={b.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {b.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface-100">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-brand-600">
                <span className="h-1 w-6 rounded-full bg-brand-500" />
                Что входит
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight">
                Подробности <br />
                <span className="brand-text-gradient">{service.name}</span>
              </h2>
              <p className="mt-4 text-ink-700">{detail.hero.description}</p>
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="mt-6"
                trailing={<ArrowRight className="h-5 w-5" />}
              >
                Оставить заявку
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {detail.features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-[var(--radius-card)] p-5 border border-ink-100"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full brand-gradient text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-bold text-ink-900">{f.title}</h4>
                      <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-brand-600">
                  <span className="h-1 w-6 rounded-full bg-brand-500" />
                  Подходящие тарифы
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-ink-900">
                  Тарифы для{" "}
                  <span className="brand-text-gradient">интернета</span>
                </h2>
              </div>
              <Link
                href="/tarify"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Все тарифы <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((t) => t && <TariffCard key={t.id} t={t} />)}
            </div>
          </Container>
        </section>
      )}

      <div id="contact">
        <ContactCta />
      </div>
    </>
  );
}
