export const company = {
  name: "IP Media Sochi",
  legalName: 'ООО «Айпи.Медиа-Сочи»',
  tagline: "Интернет-провайдер в Сочи с 2008 года",
  since: 2008,

  address: {
    full: "354000, Краснодарский край, г. Сочи, ул. Туапсинская, д. 9а, офис 37",
    short: "ул. Туапсинская, 9а, офис 37",
    city: "Сочи",
    coords: { lat: 43.593099, lng: 39.738117 },
  },

  phones: {
    sales: "+7 (862) 296-06-06",
  },

  // Мессенджер поддержки MAX. ВНИМАНИЕ: ссылка черновая — заменить на реальный аккаунт.
  max: {
    label: "MAX",
    url: "https://max.ru/",
  },

  email: "ip@media-sochi.ru",

  hours: {
    office: "Пн-Пт: 9:00–18:00, Сб: 10:00–16:00",
    officeShort: "с 9:00 до 18:00",
  },

  social: {
    vk: "https://vk.com/feed",
  },

  accountUrl: "http://lk.sochi-net.ru/",
  payUrl: "/oplata",
  speedtestUrl: "https://www.speedtest.net/",
} as const;
