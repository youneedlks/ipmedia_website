"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/lib/data/faq";
import { cn } from "@/lib/utils/cn";

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Часто задаваемые{" "}
              <span className="brand-text-gradient">вопросы</span>
            </>
          }
          description="Не нашли ответ? Позвоните нам или напишите в мессенджер MAX — поможем."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-[var(--radius-card)] mb-3 transition-all",
                  isOpen
                    ? "bg-white border border-brand-200 shadow-[var(--shadow-card)]"
                    : "bg-white border border-ink-100",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "text-base md:text-lg font-semibold transition-colors",
                      isOpen ? "text-brand-600" : "text-ink-900",
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all",
                      isOpen
                        ? "brand-gradient text-white rotate-180"
                        : "bg-ink-50 text-ink-700",
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 text-ink-700 text-sm md:text-base leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
