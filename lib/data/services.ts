import type { LucideIcon } from "lucide-react";
import {
  Wifi,
  Tv,
  Phone,
  Server,
  Camera,
  Wrench,
  Building2,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: "main" | "extra";
};

export const services: Service[] = [
  {
    slug: "internet",
    name: "Интернет",
    short: "От 290 ₽/мес · до 100 Мбит/с",
    description:
      "Высокоскоростной безлимитный интернет по технологии FTTB (оптика до дома). Бесплатное подключение в зоне сети.",
    icon: Wifi,
    href: "/uslugi/internet",
    category: "main",
  },
  {
    slug: "iptv",
    name: "IPTV",
    short: "Более 200 каналов в HD",
    description:
      "Цифровое телевидение нового поколения. Чёткая картинка, независимость от погоды, телегид в плеере и приставке.",
    icon: Tv,
    href: "/uslugi/iptv",
    category: "main",
  },
  {
    slug: "telefoniya",
    name: "IP-телефония",
    short: "Прямой городской номер",
    description:
      "Передача голоса по IP с низкими тарифами по России и миру. Легко интегрируется с 8-800 и офисной АТС.",
    icon: Phone,
    href: "/uslugi/telefoniya",
    category: "main",
  },
  {
    slug: "videonablyudenie",
    name: "Видеонаблюдение",
    short: "Партнёр «Безопасный Сочи»",
    description:
      "Круглосуточное видеонаблюдение для дома и бизнеса. Возможность интеграции с городской системой «Безопасный Сочи».",
    icon: Camera,
    href: "/uslugi/videonablyudenie",
    category: "main",
  },
  {
    slug: "co-location",
    name: "Co-location",
    short: "Размещение серверов",
    description:
      "Размещение телекоммуникационного и серверного оборудования в нашем дата-центре с гарантированным электропитанием и охлаждением.",
    icon: Server,
    href: "/uslugi/co-location",
    category: "extra",
  },
  {
    slug: "kompyuternaya-pomoshch",
    name: "Компьютерная помощь",
    short: "Выезд и настройка",
    description:
      "Настройка оборудования, Wi-Fi-роутеров, восстановление соединения, консультации. Быстрый выезд инженера.",
    icon: Wrench,
    href: "/uslugi/kompyuternaya-pomoshch",
    category: "extra",
  },
  {
    slug: "zastroyshchikam",
    name: "Застройщикам и УК",
    short: "Слаботочка под ключ",
    description:
      "Проектирование, монтаж и обслуживание слаботочных сетей для ЖК, бизнес-центров и коммерческой недвижимости.",
    icon: Building2,
    href: "/zastroyshchikam",
    category: "extra",
  },
];

export const mainServices = services.filter((s) => s.category === "main");
export const extraServices = services.filter((s) => s.category === "extra");
