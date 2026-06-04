import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { telHref } from "@/lib/utils/format";

const infoLinks = [
  { label: "О компании", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
  { label: "Оплата", href: "/oplata" },
  { label: "Для застройщиков", href: "/zastroyshchikam" },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300 mt-24 pb-24 md:pb-0">
      <div className="brand-gradient h-1" />
      <Container className="pt-14 pb-10">
        <div className="grid gap-10 md:gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-white/95 backdrop-blur inline-flex items-center px-5 py-3.5 rounded-2xl">
              <Image
                src="/images/logo.png"
                alt="IP Media Sochi"
                width={180}
                height={52}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-400 max-w-sm">
              Интернет-провайдер в Сочи с {company.since} года. Высокоскоростной
              интернет по FTTB, IPTV, IP-телефония, видеонаблюдение и
              Co-location.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={telHref(company.phones.sales)}
                className="flex items-center gap-2.5 text-white hover:text-brand-500 transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                <span className="font-semibold">{company.phones.sales}</span>
              </a>
              <a
                href={company.max.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-brand-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-brand-500" />
                Поддержка в {company.max.label}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-brand-500 transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                {company.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                <span>{company.address.full}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                <span>{company.hours.office}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.18em] mb-5">
              Услуги
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-brand-500 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.18em] mb-5">
              Информация
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-brand-500 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={company.accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand-500 transition-colors"
                >
                  Личный кабинет
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.18em] mb-5">
              Проверить подключение
            </h4>
            <p className="text-sm text-ink-400 mb-4">
              Оставьте заявку — оператор свяжется в течение 15 минут и подберёт
              тариф под ваш адрес.
            </p>
            <Link
              href="/tarify"
              className="brand-gradient inline-flex items-center justify-center h-11 px-5 rounded-full text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(7,85,215,0.55)] hover:opacity-95 transition"
            >
              Подобрать тариф
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-ink-500">
          <div>
            © {company.since}–{new Date().getFullYear()} {company.legalName}.
            Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>Деятельность лицензирована</span>
            <span className="text-ink-600">·</span>
            <span>Интернет-провайдер IP Media</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
