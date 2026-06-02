import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/common/PageHero";
import { Card } from "@/components/ui/Card";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { company } from "@/lib/data/company";
import { telHref } from "@/lib/utils/format";

export const metadata: Metadata = {
  title: "Контакты IP Media Sochi",
  description:
    "Контакты IP Media Sochi: адрес офиса в Сочи, телефоны отдела подключений и техподдержки, email, WhatsApp, режим работы.",
};

const contacts = [
  {
    icon: Phone,
    label: "Отдел подключений",
    value: company.phones.sales,
    href: telHref(company.phones.sales),
    desc: "Подключение, тарифы, консультации",
  },
  {
    icon: MessageCircle,
    label: "Техподдержка 24/7",
    value: company.phones.support,
    href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`,
    desc: "WhatsApp и телефон круглосуточно",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: company.email,
    href: `mailto:${company.email}`,
    desc: "Ответим в рабочее время",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Контакты" },
        ]}
        eyebrow="Контакты"
        title={
          <>
            Связаться с{" "}
            <span className="brand-text-gradient">IP Media Sochi</span>
          </>
        }
        description="Мы на связи 24/7 — по телефону, WhatsApp и email. Также вы можете заглянуть в офис на ул. Туапсинская."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {contacts.map((c) => (
              <Card key={c.label} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
                  <c.icon className="h-6 w-6" />
                </span>
                <div className="mt-5 text-xs font-semibold tracking-wider uppercase text-ink-500">
                  {c.label}
                </div>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-1 block text-xl font-bold text-ink-900 hover:text-brand-600 transition-colors"
                >
                  {c.value}
                </a>
                <p className="mt-2 text-sm text-ink-600">{c.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <Card className="overflow-hidden p-0" hover={false}>
              <iframe
                title="IP Media Sochi на карте"
                src={`https://yandex.ru/map-widget/v1/?ll=${company.address.coords.lng}%2C${company.address.coords.lat}&z=16&pt=${company.address.coords.lng},${company.address.coords.lat},pm2rdl`}
                width="100%"
                height="420"
                frameBorder={0}
                allowFullScreen
                style={{ position: "relative", border: 0 }}
              />
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-ink-900">Адрес</div>
                    <div className="text-sm text-ink-600">
                      {company.address.full}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-ink-900">
                      Режим работы
                    </div>
                    <div className="text-sm text-ink-600">
                      {company.hours.office}
                      <br />
                      {company.hours.support}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8" hover={false}>
              <h3 className="text-xl font-bold">Написать нам</h3>
              <p className="mt-2 text-sm text-ink-600">
                Оставьте заявку — ответим в течение 15 минут в рабочее время
              </p>
              <div className="mt-6">
                <CallbackForm withAddress />
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
