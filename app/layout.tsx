import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "IP Media Sochi — домашний интернет, IPTV и телефония в Сочи",
    template: "%s — IP Media Sochi",
  },
  description:
    "Подключение высокоскоростного интернета по оптоволокну (FTTB), IPTV с более чем 200 каналами, IP-телефония, видеонаблюдение и Co-location в Сочи с 2008 года.",
  metadataBase: new URL("https://media-sochi.ru"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "IP Media Sochi",
    title: "IP Media Sochi — интернет-провайдер в Сочи",
    description:
      "Интернет, IPTV, телефония и видеонаблюдение в Сочи. Работаем с 2008 года. Подключение от 290 ₽/мес.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-surface-50 text-ink-900">
        <ToastProvider>
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCta />
        </ToastProvider>
      </body>
    </html>
  );
}
