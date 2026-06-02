import type { Metadata } from "next";
import Image from "next/image";
import {
  Calendar,
  Users,
  Building2,
  ShieldCheck,
  Award,
  Trophy,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/common/PageHero";
import { Card } from "@/components/ui/Card";
import { company } from "@/lib/data/company";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "О компании IP Media Sochi",
  description:
    "IP Media Sochi — интернет-провайдер, работающий в Сочи с 2008 года. Оптика FTTB, IPTV, IP-телефония, видеонаблюдение, Co-location.",
};

const milestones = [
  {
    year: "2008",
    title: "Старт компании",
    text: "IP.Media-Sochi начинает работу — первые многоквартирные дома в Сочи подключены к скоростному интернету",
  },
  {
    year: "2012",
    title: "Масштабирование сети",
    text: "Построена магистральная оптика, покрыты ключевые микрорайоны города",
  },
  {
    year: "2016",
    title: "Партнёрство «Безопасный Сочи»",
    text: "Становимся партнёром городской системы общественной безопасности",
  },
  {
    year: "2020",
    title: "Цифровая трансформация",
    text: "Запуск IPTV на 200+ каналов, модернизация дата-центра, IP-телефония",
  },
  {
    year: `${new Date().getFullYear()}`,
    title: "Сегодня",
    text: "Десятки новостроек Сочи подключены на этапе сдачи, собственный дата-центр, поддержка 24/7",
  },
];

const facts = [
  { icon: Calendar, value: `${new Date().getFullYear() - company.since}+`, label: "лет на рынке" },
  { icon: Users, value: "50k+", label: "абонентов в Сочи" },
  { icon: Building2, value: "FTTB", label: "оптика до дома" },
  { icon: ShieldCheck, value: "24/7", label: "мониторинг сети" },
  { icon: Award, value: "Лицензия", label: "на все услуги" },
  { icon: Trophy, value: "«Безопасный Сочи»", label: "партнёр" },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "О компании" },
        ]}
        eyebrow={`С ${company.since} года в Сочи`}
        title={
          <>
            IP Media Sochi —{" "}
            <span className="brand-text-gradient">надёжный провайдер</span>{" "}
            курортной столицы
          </>
        }
        description={`${company.legalName} — телекоммуникационный оператор в Сочи, работающий с ${company.since} года. Мы обеспечиваем домашний интернет, IPTV, IP-телефонию, системы видеонаблюдения и размещение серверов (Co-location) для частных клиентов и бизнеса.`}
        extra={
          <div className="bg-white rounded-[2rem] p-6 shadow-[var(--shadow-card)] border border-brand-100 flex items-center gap-5">
            <Image
              src="/images/logo.png"
              alt="IP Media Sochi"
              width={200}
              height={58}
              className="h-14 w-auto"
            />
          </div>
        }
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <Card key={f.label} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-6 w-6" />
                </span>
                <div className="mt-4 text-3xl font-extrabold brand-text-gradient">
                  {f.value}
                </div>
                <div className="mt-1 text-ink-600">{f.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface-100">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-brand-600">
              <span className="h-1 w-6 rounded-full bg-brand-500" />
              История компании
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight">
              Путь развития{" "}
              <span className="brand-text-gradient">IP Media</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="grid gap-4 md:grid-cols-[120px_1fr] items-start"
              >
                <div className="text-4xl md:text-5xl font-extrabold brand-text-gradient">
                  {m.year}
                </div>
                <Card className="p-5" hover={false}>
                  <h3 className="font-bold text-ink-900">{m.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {m.text}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
