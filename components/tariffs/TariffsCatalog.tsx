"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building, Briefcase, SlidersHorizontal } from "lucide-react";
import { TariffCard } from "@/components/tariffs/TariffCard";
import { cn } from "@/lib/utils/cn";
import {
  type ClientType,
  tariffsByType,
} from "@/lib/data/tariffs";

const tabs: { id: ClientType; label: string; icon: React.ElementType; desc: string }[] = [
  {
    id: "apartment",
    label: "Квартира",
    icon: Home,
    desc: "Многоквартирные дома",
  },
  {
    id: "house",
    label: "Частный дом",
    icon: Building,
    desc: "Коттеджи и загородная недвижимость",
  },
  {
    id: "business",
    label: "Бизнесу",
    icon: Briefcase,
    desc: "Юридическим лицам — индивидуальные условия",
  },
];

type SortBy = "price" | "speed";

export function TariffsCatalog() {
  const [tab, setTab] = React.useState<ClientType>("apartment");
  const [sortBy, setSortBy] = React.useState<SortBy>("price");

  const items = [...tariffsByType(tab)].sort((a, b) =>
    sortBy === "price" ? a.price - b.price : b.speed - a.speed,
  );

  const activeTab = tabs.find((t) => t.id === tab)!;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={cn(
                "inline-flex items-center gap-2 h-12 px-5 rounded-full text-sm font-semibold transition-all",
                active
                  ? "brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(227,55,45,0.5)]"
                  : "bg-white text-ink-700 border border-ink-100 hover:border-brand-300 hover:text-brand-600",
              )}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-ink-600 text-sm">
          <span className="font-semibold text-ink-900">{items.length}</span>{" "}
          {items.length === 1
            ? "тариф"
            : items.length < 5
            ? "тарифа"
            : "тарифов"}{" "}
          · {activeTab.desc}
        </p>
        {tab !== "business" && (
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-ink-500" />
            <span className="text-sm text-ink-500">Сортировка:</span>
            <div className="inline-flex bg-white border border-ink-100 rounded-full p-1">
              {(
                [
                  { id: "price", label: "По цене" },
                  { id: "speed", label: "По скорости" },
                ] as const
              ).map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSortBy(s.id)}
                  className={cn(
                    "px-3 h-8 rounded-full text-xs font-semibold transition-colors",
                    sortBy === s.id
                      ? "bg-brand-500 text-white"
                      : "text-ink-600 hover:text-brand-600",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${tab}-${sortBy}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "mt-8 grid gap-5",
            tab === "business"
              ? "grid-cols-1 max-w-2xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          )}
        >
          {items.map((t) => (
            <TariffCard key={t.id} t={t} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
