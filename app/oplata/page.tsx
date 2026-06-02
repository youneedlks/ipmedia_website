import type { Metadata } from "next";
import {
  CreditCard,
  Banknote,
  Smartphone,
  Landmark,
  Wallet,
  User,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/common/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Оплата услуг IP Media",
  description:
    "Способы оплаты услуг IP Media Sochi: банковская карта (Payler), личный кабинет, Сбербанк Онлайн, терминалы оплаты.",
};

const methods = [
  {
    icon: CreditCard,
    title: "Банковская карта",
    text: "Онлайн через платёжную систему Payler — Visa, Mastercard, МИР. Моментальное зачисление.",
  },
  {
    icon: User,
    title: "Личный кабинет",
    text: "Оплата через ЛК на lk.sochi-net.ru — история платежей и привязка карты для автоплатежа",
  },
  {
    icon: Smartphone,
    title: "Сбербанк Онлайн",
    text: "В мобильном приложении Сбербанка: «Платежи» → поиск «IP Media Sochi»",
  },
  {
    icon: Landmark,
    title: "В любом банке",
    text: "По реквизитам IP Media Sochi через отделение любого российского банка",
  },
  {
    icon: Banknote,
    title: "Терминалы оплаты",
    text: "Qiwi, сеть терминалов «Элекснет» и другие популярные терминалы",
  },
  {
    icon: Wallet,
    title: "Электронные кошельки",
    text: "ЮMoney, SberPay, МирPay — удобная оплата в один тап",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Оплата" },
        ]}
        eyebrow="Оплата услуг"
        title={
          <>
            Оплатить услуги{" "}
            <span className="brand-text-gradient">IP Media Sochi</span>
          </>
        }
        description="Выберите удобный способ оплаты — от банковской карты до терминала. Платежи поступают на счёт моментально."
        extra={
          <div className="bg-white rounded-[2rem] p-6 shadow-[var(--shadow-card)] border border-brand-100">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
              Быстрая оплата
            </div>
            <div className="mt-2 font-bold text-ink-900">Банковская карта онлайн</div>
            <Button
              href={company.accountUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="gradient"
              size="lg"
              className="mt-4"
              fullWidth
              leading={<CreditCard className="h-5 w-5" />}
            >
              Оплатить в ЛК
            </Button>
          </div>
        }
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((m) => (
              <Card key={m.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {m.text}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-surface-100 border border-ink-100 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-ink-900">
                Не получается оплатить?
              </h3>
              <p className="mt-2 text-ink-600">
                Позвоните — оператор подскажет, как быстро решить вопрос
              </p>
            </div>
            <Button href="/kontakty" variant="primary" size="lg">
              Связаться
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
