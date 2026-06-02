"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils/cn";

const schema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  phone: z
    .string()
    .regex(/^[0-9+()\s-]{10,20}$/u, "Проверьте формат телефона"),
  address: z.string().optional(),
  agree: z.literal(true, { message: "Нужно согласие" }),
});

type FormValues = z.infer<typeof schema>;

export function CallbackForm({
  variant = "light",
  compact,
  withAddress,
  onSuccess,
}: {
  variant?: "light" | "dark";
  compact?: boolean;
  withAddress?: boolean;
  onSuccess?: () => void;
}) {
  const { push } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { agree: true },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 700));
    push({
      title: "Заявка принята!",
      description: "Менеджер свяжется с вами в ближайшее время.",
    });
    reset({ agree: true });
    onSuccess?.();
  };

  const isDark = variant === "dark";
  const inputBase = cn(
    "h-12 w-full pl-11 pr-4 rounded-full text-[15px] outline-none transition-all",
    isDark
      ? "bg-white/[0.14] border border-white/25 text-white placeholder:text-white/70 hover:bg-white/[0.18] focus:bg-white/20 focus:border-brand-400 focus:shadow-[0_0_0_4px_rgba(241,131,35,0.2)]"
      : "bg-ink-50 border border-ink-100 text-ink-900 placeholder:text-ink-400 focus:bg-white focus:border-brand-500 focus:shadow-[var(--shadow-glow)]",
  );
  const iconClass = cn(
    "absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5",
    isDark ? "text-white/75" : "text-ink-400",
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid gap-3", compact ? "" : "md:gap-4")}
    >
      <label className="relative block">
        <User className={iconClass} />
        <input
          {...register("name")}
          placeholder="Ваше имя"
          className={inputBase}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <span className="mt-1 ml-4 block text-xs text-brand-700">
            {errors.name.message}
          </span>
        )}
      </label>

      <label className="relative block">
        <Phone className={iconClass} />
        <input
          {...register("phone")}
          placeholder="+7 (___) ___-__-__"
          type="tel"
          className={inputBase}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <span className="mt-1 ml-4 block text-xs text-brand-700">
            {errors.phone.message}
          </span>
        )}
      </label>

      {withAddress && (
        <label className="relative block">
          <input
            {...register("address")}
            placeholder="Адрес (улица, дом)"
            className={cn(inputBase, "pl-5")}
          />
        </label>
      )}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        trailing={<Send className="h-4.5 w-4.5" />}
      >
        {isSubmitting ? "Отправляем…" : "Оставить заявку"}
      </Button>

      <p
        className={cn(
          "text-[11px] leading-relaxed",
          isDark ? "text-white/65" : "text-ink-500",
        )}
      >
        Нажимая «Оставить заявку», вы соглашаетесь с политикой обработки
        персональных данных.
      </p>
    </form>
  );
}
