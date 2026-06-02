import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Компьютерная помощь",
  description:
    "Выезд инженера IP Media Sochi: настройка Wi-Fi, роутеров, восстановление соединения, диагностика оборудования.",
};

export default function Page() {
  return <ServicePage slug="kompyuternaya-pomoshch" />;
}
