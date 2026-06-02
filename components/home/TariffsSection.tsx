"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Home, Building, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TariffCard } from "@/components/tariffs/TariffCard";
import { cn } from "@/lib/utils/cn";
import {
  type ClientType,
  tariffsByType,
} from "@/lib/data/tariffs";

const tabs: { id: ClientType; label: string; icon: React.ElementType }[] = [
  { id: "apartment", label: "Квартира", icon: Home },
  { id: "house", label: "Частный дом", icon: Building },
  { id: "business", label: "Бизнесу", icon: Briefcase },
];

export function TariffsSection() {
  const [tab, setTab] = React.useState<ClientType>("apartment");
  const items = tariffsByType(tab);

  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Тарифы"
            title={
              <>
                Выберите свой{" "}
                <span className="brand-text-gradient">тариф</span>
              </>
            }
            description="Тарифы указаны для многоквартирных домов. Для частных домовладений и юридических лиц — отдельные условия."
          />
          <Link
            href="/tarify"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            Все тарифы
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-white rounded-full border border-ink-100 w-fit shadow-sm">
          {tabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 h-11 px-5 text-sm font-semibold rounded-full transition-colors",
                  active ? "text-white" : "text-ink-700 hover:text-brand-600",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="tariff-tab"
                    className="absolute inset-0 brand-gradient rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "mt-10 grid gap-5",
              tab === "business"
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            )}
          >
            {items.map((t) => (
              <TariffCard key={t.id} t={t} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 text-center lg:hidden">
          <Button href="/tarify" variant="secondary" size="md">
            Все тарифы
          </Button>
        </div>
      </Container>
    </section>
  );
}
