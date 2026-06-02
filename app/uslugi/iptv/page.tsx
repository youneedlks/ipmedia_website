import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "IPTV — цифровое телевидение",
  description:
    "IPTV от IP Media Sochi: более 200 каналов в HD, встроенный телегид, работа на приставке и компьютере.",
};

export default function Page() {
  return <ServicePage slug="iptv" />;
}
