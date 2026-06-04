import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Домашний интернет в Сочи",
  description:
    "Высокоскоростной домашний интернет IP Media Sochi от 290 ₽/мес. Оптика FTTB, до 100 Мбит/с, безлимитный трафик, техническая поддержка.",
};

export default function Page() {
  return <ServicePage slug="internet" />;
}
