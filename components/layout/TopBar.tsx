import { MapPin, Clock, MessageCircle, CreditCard, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/data/company";
import { telHref } from "@/lib/utils/format";

export function TopBar() {
  return (
    <div className="hidden md:block bg-ink-900 text-ink-100 text-[13px]">
      <Container className="flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-ink-300">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-500" />
            {company.address.short}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-500" />
            {company.hours.office}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-200 hover:text-brand-500 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            href={company.payUrl}
            className="inline-flex items-center gap-1.5 text-ink-200 hover:text-brand-500 transition-colors"
          >
            <CreditCard className="h-3.5 w-3.5" />
            Оплатить
          </a>
          <a
            href={company.accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-200 hover:text-brand-500 transition-colors"
          >
            <User className="h-3.5 w-3.5" />
            Личный кабинет
          </a>
          <a
            href={telHref(company.phones.sales)}
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-brand-400 transition-colors"
          >
            {company.phones.sales}
          </a>
        </div>
      </Container>
    </div>
  );
}
