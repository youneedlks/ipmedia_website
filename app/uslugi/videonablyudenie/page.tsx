import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Видеонаблюдение в Сочи",
  description:
    "Установка и обслуживание систем видеонаблюдения IP Media Sochi. IP-камеры HD/4K, удалённый доступ, интеграция с «Безопасный Сочи».",
};

export default function Page() {
  return <ServicePage slug="videonablyudenie" />;
}
