import {
  Calendar,
  Cable,
  HeadphonesIcon,
  ShieldCheck,
  Award,
  Gift,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/lib/data/company";

const points = [
  {
    icon: Calendar,
    title: `С ${company.since} года в Сочи`,
    text: "Больше 15 лет опыта работы с абонентами курортной столицы",
  },
  {
    icon: Cable,
    title: "FTTB-оптика до дома",
    text: "Современная технология, независимость от погоды и стабильная скорость",
  },
  {
    icon: HeadphonesIcon,
    title: "Техническая поддержка",
    text: "Поможем с настройкой и быстро решим вопросы по подключению",
  },
  {
    icon: ShieldCheck,
    title: "Партнёр «Безопасный Сочи»",
    text: "Интеграция видеонаблюдения с городской системой безопасности",
  },
  {
    icon: Award,
    title: "Лицензировано",
    text: "Вся деятельность компании подтверждена необходимыми лицензиями",
  },
  {
    icon: Gift,
    title: "Бесплатное подключение",
    text: "В зоне покрытия сети — вы платите только за использование",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-24 bg-surface-100">
      <Container>
        <SectionHeading
          eyebrow="Почему IP Media"
          title={
            <>
              Надёжный{" "}
              <span className="brand-text-gradient">интернет-провайдер</span>
              <br />
              в Сочи с {company.since} года
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-[var(--radius-card)] p-6 border border-ink-100 hover:border-brand-300 hover:shadow-[var(--shadow-card-hover)] transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:brand-gradient group-hover:text-white transition-colors">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
