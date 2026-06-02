import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Co-location — размещение серверов",
  description:
    "Co-location в дата-центре IP Media Sochi: гарантированное питание, охлаждение, магистральный канал, круглосуточная охрана.",
};

export default function Page() {
  return <ServicePage slug="co-location" />;
}
