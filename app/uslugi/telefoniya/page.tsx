import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "IP-телефония",
  description:
    "IP-телефония IP Media Sochi: прямой городской номер, интеграция с АТС, низкие тарифы по России и миру.",
};

export default function Page() {
  return <ServicePage slug="telefoniya" />;
}
