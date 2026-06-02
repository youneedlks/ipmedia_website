"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type Toast = { id: number; title: string; description?: string };

const ToastContext = React.createContext<{
  push: (t: Omit<Toast, "id">) => void;
} | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<Toast[]>([]);

  const push = React.useCallback((t: Omit<Toast, "id">) => {
    const id = Date.now() + Math.random();
    setItems((s) => [...s, { ...t, id }]);
    setTimeout(() => {
      setItems((s) => s.filter((it) => it.id !== id));
    }, 4500);
  }, []);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[60] pointer-events-none flex flex-col gap-3">
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="pointer-events-auto flex items-start gap-3 max-w-sm p-4 rounded-2xl bg-white shadow-[0_20px_50px_-15px_rgba(53,54,57,0.25)] border border-ink-100"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full brand-gradient text-white">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-ink-900">{t.title}</div>
                {t.description && (
                  <div className="mt-0.5 text-sm text-ink-600">
                    {t.description}
                  </div>
                )}
              </div>
              <button
                onClick={() =>
                  setItems((s) => s.filter((it) => it.id !== t.id))
                }
                className="h-7 w-7 inline-flex items-center justify-center rounded-full hover:bg-ink-50 text-ink-500"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
