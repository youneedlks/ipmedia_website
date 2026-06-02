export type ClientType = "apartment" | "house" | "business";

export type Tariff = {
  id: string;
  name: string;
  speed: number; // Мбит/с
  price: number; // ₽ / мес
  clientType: ClientType;
  badge?: "hit" | "popular" | "max" | "new";
  badgeText?: string;
  features: string[];
  highlight?: boolean;
};

export const tariffs: Tariff[] = [
  // ─── Физические лица. Многоквартирные дома ───
  {
    id: "media-290",
    name: "Медиа 290",
    speed: 25,
    price: 290,
    clientType: "apartment",
    features: [
      "25 Мбит/с безлимит",
      "Бесплатное подключение в зоне сети",
      "Поддержка 24/7",
    ],
  },
  {
    id: "media-450",
    name: "Медиа 450",
    speed: 60,
    price: 450,
    clientType: "apartment",
    badge: "new",
    badgeText: "Выгодно",
    features: [
      "60 Мбит/с безлимит",
      "Подходит для HD-стриминга",
      "Поддержка 24/7",
    ],
  },
  {
    id: "media-700",
    name: "Медиа 700",
    speed: 80,
    price: 700,
    clientType: "apartment",
    badge: "hit",
    badgeText: "Хит",
    highlight: true,
    features: [
      "80 Мбит/с безлимит",
      "Идеально для семьи",
      "Онлайн-игры и 4K без задержек",
      "Поддержка 24/7",
    ],
  },
  {
    id: "media-900",
    name: "Медиа 900",
    speed: 100,
    price: 900,
    clientType: "apartment",
    badge: "max",
    badgeText: "Максимум",
    features: [
      "100 Мбит/с безлимит",
      "Для требовательных пользователей",
      "Несколько устройств одновременно",
      "Поддержка 24/7",
    ],
  },

  // ─── Физические лица. Частные домовладения ───
  {
    id: "media-700-house",
    name: "Медиа 700",
    speed: 80,
    price: 700,
    clientType: "house",
    features: [
      "80 Мбит/с",
      "Оптика до дома (FTTB)",
      "Поддержка 24/7",
    ],
  },
  {
    id: "media-900-house",
    name: "Медиа 900",
    speed: 100,
    price: 900,
    clientType: "house",
    badge: "popular",
    badgeText: "Популярный",
    highlight: true,
    features: [
      "100 Мбит/с",
      "Оптика до дома (FTTB)",
      "Для всей семьи",
      "Поддержка 24/7",
    ],
  },
  {
    id: "unlim-1",
    name: "Безлимитный 1",
    speed: 20,
    price: 2000,
    clientType: "house",
    features: [
      "20 Мбит/с безлимит",
      "Для удалённых частных домов",
      "Стабильность 24/7",
    ],
  },
  {
    id: "unlim-2",
    name: "Безлимитный 2",
    speed: 40,
    price: 3000,
    clientType: "house",
    features: [
      "40 Мбит/с безлимит",
      "Для удалённых частных домов",
      "Стабильность 24/7",
    ],
  },
  {
    id: "unlim-3",
    name: "Безлимитный 3",
    speed: 60,
    price: 5000,
    clientType: "house",
    features: [
      "60 Мбит/с безлимит",
      "Для удалённых частных домов",
      "Стабильность 24/7",
    ],
  },
  {
    id: "unlim-4",
    name: "Безлимитный 4",
    speed: 80,
    price: 8000,
    clientType: "house",
    features: [
      "80 Мбит/с безлимит",
      "Для удалённых частных домов",
      "Стабильность 24/7",
    ],
  },

  // ─── Юридические лица ───
  {
    id: "biz-custom",
    name: "Индивидуальный тариф",
    speed: 0,
    price: 0,
    clientType: "business",
    badge: "new",
    badgeText: "По запросу",
    highlight: true,
    features: [
      "Белый статический IP — бесплатно",
      "SLA и круглосуточная поддержка",
      "Резервные каналы по запросу",
      "IP-телефония и видеонаблюдение",
      "Co-location в нашем дата-центре",
    ],
  },
];

export const tariffsByType = (type: ClientType) =>
  tariffs.filter((t) => t.clientType === type);

export const extras = {
  phone: {
    name: "IP-телефония",
    connectPrice: 5000,
    monthlyPrice: 300,
    description: "Прямой городской номер + номер в коде 8-800 по запросу",
  },
  colocation: {
    name: "Co-location",
    description:
      "Размещение серверов в нашем дата-центре. Стоимость зависит от потребляемой электроэнергии и стойко-мест.",
  },
};

export const clientTypeLabel: Record<ClientType, string> = {
  apartment: "Квартира",
  house: "Частный дом",
  business: "Юридическим лицам",
};
