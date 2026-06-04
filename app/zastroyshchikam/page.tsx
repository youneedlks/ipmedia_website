import type { Metadata } from "next";
import {
  Building2,
  FileText,
  Wrench,
  ShieldCheck,
  Users,
  Handshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/common/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Застройщикам и управляющим компаниям",
  description:
    "Проектирование, монтаж и обслуживание слаботочных сетей, интернет-инфраструктуры и видеонаблюдения в новых ЖК и БЦ Сочи.",
};

const offerings = [
  {
    icon: FileText,
    title: "Проектирование",
    text: "Разрабатываем проектную документацию слаботочных сетей и каналов связи под конкретный объект",
  },
  {
    icon: Wrench,
    title: "Монтаж «под ключ»",
    text: "Прокладка магистрали, разводка по этажам и квартирам, установка активного оборудования",
  },
  {
    icon: ShieldCheck,
    title: "Видеонаблюдение",
    text: "Системы безопасности для ЖК и БЦ с интеграцией в городскую «Безопасный Сочи»",
  },
  {
    icon: Building2,
    title: "Интернет для жильцов",
    text: "С первого дня заселения ваших жильцов подключаем высокоскоростной интернет и IPTV",
  },
  {
    icon: Users,
    title: "Работа с УК",
    text: "Оперативная поддержка и взаимодействие с управляющей компанией",
  },
  {
    icon: Handshake,
    title: "Прозрачные условия",
    text: "Работаем по договору, фиксируем сроки и гарантируем соблюдение SLA",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Застройщикам" },
        ]}
        eyebrow="Для застройщиков и УК"
        title={
          <>
            Слаботочные сети и{" "}
            <span className="brand-text-gradient">интернет</span>
            <br />
            для новостроек Сочи
          </>
        }
        description="Комплексная инфраструктура от IP Media: проектирование, монтаж, подключение жильцов и обслуживание. Более 15 лет опыта работы с ЖК, БЦ и коммерческой недвижимостью."
        extra={
          <Button
            href="#contact"
            variant="gradient"
            size="lg"
          >
            Оставить заявку
          </Button>
        }
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <Card key={o.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
                  <o.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {o.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-brand-600">
                <span className="h-1 w-6 rounded-full bg-brand-500" />
                Преимущества сотрудничества
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight">
                Почему девелоперы выбирают{" "}
                <span className="brand-text-gradient">IP Media</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Проектные решения с учётом требований МЧС и СНиП",
                  "Соблюдение сроков и готовность к сдаче объекта в эксплуатацию",
                  "Собственная аварийная и плановая служба",
                  "Единый оператор всей слаботочки на объекте",
                  "Опыт работы с ЖК и БЦ в Сочи, Адлере, Лазаревском",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-1 h-2 w-2 rounded-full brand-gradient" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] brand-gradient p-1 shadow-[0_30px_60px_-20px_rgba(7,85,215,0.35)]">
              <div className="bg-white rounded-[1.85rem] p-8">
                <div className="text-xs font-semibold tracking-wider uppercase text-ink-500">
                  Итого для застройщика
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    ["15+", "лет опыта в Сочи"],
                    ["100%", "покрытие FTTB-оптикой"],
                    ["DC", "собственный дата-центр"],
                    ["SLA", "по договору"],
                  ].map(([v, l]) => (
                    <div
                      key={l}
                      className="flex items-center justify-between pb-4 border-b border-ink-100 last:border-none last:pb-0"
                    >
                      <div className="text-2xl font-extrabold brand-text-gradient">
                        {v}
                      </div>
                      <div className="text-sm text-ink-600">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div id="contact">
        <ContactCta />
      </div>
    </>
  );
}
