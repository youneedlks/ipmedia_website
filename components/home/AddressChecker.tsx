"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/data/company";
import { telHref } from "@/lib/utils/format";

type Status = "idle" | "loading" | "available" | "not-found";

export function AddressChecker() {
  const [street, setStreet] = React.useState("");
  const [house, setHouse] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");

  function onCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!street.trim() || !house.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("available");
    }, 900);
  }

  return (
    <section
      id="address-check"
      className="relative -mt-10 md:-mt-16 z-10"
    >
      <Container>
        <div className="relative rounded-[2rem] bg-white shadow-[0_20px_60px_-20px_rgba(53,54,57,0.25)] border border-ink-100 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1.5 brand-gradient" />
          <div className="p-6 md:p-8 lg:p-10 grid gap-6 lg:grid-cols-[1.2fr_auto] items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-brand-600">
                <span className="h-1 w-6 rounded-full bg-brand-500" />
                Проверка подключения
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-ink-900">
                Узнайте, можем ли мы подключить ваш адрес
              </h2>
              <p className="mt-2 text-ink-600 text-sm md:text-base">
                Укажите адрес — оператор уточнит возможность подключения и
                подберёт тариф
              </p>
            </div>
            <div className="text-right hidden lg:block">
              <div className="text-xs text-ink-500 uppercase tracking-wider">
                или звоните
              </div>
              <a
                href={telHref(company.phones.sales)}
                className="text-xl font-extrabold text-ink-900 hover:text-brand-600 transition-colors"
              >
                {company.phones.sales}
              </a>
            </div>
          </div>

          <form
            onSubmit={onCheck}
            className="px-6 md:px-8 lg:px-10 pb-8 lg:pb-10 grid gap-3 md:grid-cols-[1.1fr_0.6fr_auto]"
          >
            <label className="relative block">
              <span className="sr-only">Улица</span>
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Улица"
                className="h-14 w-full pl-12 pr-4 rounded-full bg-ink-50 border border-ink-100 text-[15px] text-ink-900 placeholder:text-ink-400 focus:bg-white focus:border-brand-500 focus:shadow-[var(--shadow-glow)] outline-none transition-all"
              />
            </label>
            <label className="relative block">
              <span className="sr-only">Дом</span>
              <input
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                placeholder="Дом"
                className="h-14 w-full px-5 rounded-full bg-ink-50 border border-ink-100 text-[15px] text-ink-900 placeholder:text-ink-400 focus:bg-white focus:border-brand-500 focus:shadow-[var(--shadow-glow)] outline-none transition-all"
              />
            </label>
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="h-14"
              leading={<Search className="h-5 w-5" />}
            >
              Проверить
            </Button>
          </form>

          <AnimatePresence>
            {status === "available" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mx-6 md:mx-8 lg:mx-10 mb-8 lg:mb-10 p-5 rounded-2xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-600" />
                    <div>
                      <div className="font-bold text-ink-900">
                        Отлично, подключение доступно!
                      </div>
                      <div className="text-sm text-ink-700">
                        Оставьте заявку или позвоните — уточним детали и дату
                        подключения
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:ml-auto">
                    <Button
                      variant="primary"
                      size="md"
                      href="/tarify"
                    >
                      Выбрать тариф
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      href={telHref(company.phones.sales)}
                      leading={<Phone className="h-4 w-4" />}
                    >
                      Позвонить
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
