"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, MessageCircle, MapPin, User, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { services } from "@/lib/data/services";
import { company } from "@/lib/data/company";
import { telHref } from "@/lib/utils/format";

const topNav = [
  { label: "Тарифы", href: "/tarify" },
  { label: "Интернет", href: "/uslugi/internet" },
  { label: "Телевидение", href: "/uslugi/iptv" },
  { label: "Застройщикам", href: "/zastroyshchikam" },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
  { label: "Оплата", href: "/oplata" },
];

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-[88%] max-w-[400px] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-ink-100">
              <Link href="/" onClick={onClose}>
                <Image
                  src="/images/logo.png"
                  alt="IP Media Sochi"
                  width={160}
                  height={46}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                aria-label="Закрыть меню"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-ink-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <nav className="flex flex-col">
                {topNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center py-3 text-[17px] font-semibold text-ink-900 hover:text-brand-600 border-b border-ink-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 text-xs font-bold tracking-wider uppercase text-ink-500">
                Все услуги
              </div>
              <div className="mt-3 grid gap-1.5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-brand-50 transition-colors",
                    )}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <s.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-[15px] font-medium text-ink-900">
                      {s.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-ink-100 px-5 py-4 grid gap-3">
              <a
                href={telHref(company.phones.sales)}
                className="flex items-center gap-3 px-4 h-12 rounded-full bg-brand-500 text-white font-semibold"
              >
                <Phone className="h-4.5 w-4.5" />
                {company.phones.sales}
              </a>
              <div className="grid grid-cols-3 gap-2 text-[12px] font-semibold text-ink-700">
                <a
                  href={company.max.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-3 rounded-xl bg-ink-50 hover:bg-brand-50"
                >
                  <MessageCircle className="h-5 w-5 text-brand-500" />
                  {company.max.label}
                </a>
                <a
                  href={company.accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-3 rounded-xl bg-ink-50 hover:bg-brand-50"
                >
                  <User className="h-5 w-5 text-brand-500" />
                  Кабинет
                </a>
                <Link
                  href="/oplata"
                  onClick={onClose}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl bg-ink-50 hover:bg-brand-50"
                >
                  <CreditCard className="h-5 w-5 text-brand-500" />
                  Оплата
                </Link>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-ink-600">
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                {company.address.short}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
