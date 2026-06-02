import { Hero } from "@/components/home/Hero";
import { AddressChecker } from "@/components/home/AddressChecker";
import { ServiceTiles } from "@/components/home/ServiceTiles";
import { TariffsSection } from "@/components/home/TariffsSection";
import { TariffConstructor } from "@/components/home/TariffConstructor";
import { WhyUs } from "@/components/home/WhyUs";
import { AdditionalServices } from "@/components/home/AdditionalServices";
import { SpeedtestBanner } from "@/components/home/SpeedtestBanner";
import { HowToConnect } from "@/components/home/HowToConnect";
import { Faq } from "@/components/home/Faq";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AddressChecker />
      <ServiceTiles />
      <TariffsSection />
      <TariffConstructor />
      <WhyUs />
      <AdditionalServices />
      <SpeedtestBanner />
      <HowToConnect />
      <Faq />
      <ContactCta />
    </>
  );
}
