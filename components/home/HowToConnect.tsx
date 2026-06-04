import { ClipboardList, Wrench, Wifi } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Оставьте заявку",
    text: "Заполните форму на сайте или позвоните — подберём тариф под ваш адрес и согласуем удобное время.",
  },
  {
    icon: Wrench,
    title: "Приезд мастера",
    text: "Инженер приезжает в назначенный срок, проводит все необходимые работы и подписывает договор.",
  },
  {
    icon: Wifi,
    title: "Пользуйтесь интернетом",
    text: "Настройка роутера, IPTV-приставки, проверка скорости — оставляем вас на связи с миром.",
  },
];

export function HowToConnect() {
  return (
    <section className="py-20 md:py-24 bg-surface-100">
      <Container>
        <SectionHeading
          eyebrow="Всё просто"
          title={
            <>
              Как подключиться за{" "}
              <span className="brand-text-gradient">3 шага</span>
            </>
          }
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 relative">
          {/* connection line */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto h-20 w-20 rounded-full brand-gradient flex items-center justify-center text-white shadow-[0_15px_40px_-15px_rgba(7,85,215,0.6)]">
                <s.icon className="h-9 w-9" />
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white text-brand-600 border-2 border-brand-500 flex items-center justify-center text-sm font-extrabold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed max-w-xs mx-auto">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
