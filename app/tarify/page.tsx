import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/common/PageHero";
import { TariffsCatalog } from "@/components/tariffs/TariffsCatalog";
import { ContactCta } from "@/components/home/ContactCta";
import { Faq } from "@/components/home/Faq";

export const metadata: Metadata = {
  title: "Тарифы на интернет и IPTV",
  description:
    "Полный каталог тарифов IP Media Sochi: для квартир, частных домов и бизнеса. От 290 ₽/мес. Бесплатное подключение в зоне сети.",
};

export default function TarifyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Тарифы" }]}
        eyebrow="Тарифы IP Media"
        title={
          <>
            Тарифы на интернет, IPTV и{" "}
            <span className="brand-text-gradient">комплексные пакеты</span>
          </>
        }
        description="Выберите категорию клиента — мы подобрали оптимальные пакеты для квартир, частных домов и юридических лиц. Подключение бесплатно в зоне покрытия сети."
      />

      <section className="py-10 md:py-14">
        <Container>
          <TariffsCatalog />
        </Container>
      </section>

      <Faq />
      <ContactCta />
    </>
  );
}
