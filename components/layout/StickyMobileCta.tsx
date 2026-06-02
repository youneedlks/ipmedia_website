"use client";

import Link from "next/link";
import { Phone, Zap } from "lucide-react";
import { company } from "@/lib/data/company";
import { telHref } from "@/lib/utils/format";

export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-ink-100 shadow-[0_-8px_24px_-12px_rgba(53,54,57,0.15)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={telHref(company.phones.sales)}
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-ink-900 text-white font-semibold text-sm"
        >
          <Phone className="h-4 w-4" />
          Позвонить
        </a>
        <Link
          href="/tarify"
          className="flex items-center justify-center gap-2 h-12 rounded-full brand-gradient text-white font-semibold text-sm"
        >
          <Zap className="h-4 w-4" />
          Подключить
        </Link>
      </div>
    </div>
  );
}
