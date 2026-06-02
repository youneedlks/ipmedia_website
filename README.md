# IP Media Sochi — redesign

Многостраничный сайт интернет-провайдера **IP Media Sochi**, построенный на **Next.js 16 + React 19 + TypeScript + Tailwind CSS 4**. UI/UX заимствует современные паттерны `msk.dom.ru`, но полностью использует оригинальные услуги и данные IP Media с фирменной оранжево-графитовой палитрой, извлечённой из официального логотипа.

## Стек

- **Next.js 16** (App Router, SSG, Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (CSS-first, `@theme` в `globals.css`)
- **Framer Motion** — анимации и переходы
- **lucide-react** — иконки
- **react-hook-form + zod** — валидация форм
- **next/font** — Inter + Manrope (latin + cyrillic)

## Структура

```
app/
  layout.tsx               # root + шрифты + metadata + ToastProvider
  page.tsx                 # главная: 11 секций
  globals.css              # Tailwind 4 @theme + брендовые токены
  tarify/page.tsx          # каталог тарифов (квартира/дом/бизнес)
  uslugi/
    internet, iptv, telefoniya,
    co-location, videonablyudenie,
    kompyuternaya-pomoshch
  zastroyshchikam, o-kompanii, kontakty, oplata
  sitemap.ts, robots.ts, not-found.tsx

components/
  layout/   TopBar · Header · Footer · MobileDrawer · StickyMobileCta
  home/     Hero · AddressChecker · ServiceTiles · WhyUs
            TariffsSection · TariffConstructor
            AdditionalServices · SpeedtestBanner · HowToConnect · Faq · ContactCta
  tariffs/  TariffCard · TariffsCatalog
  services/ ServicePage (универсальный шаблон)
  forms/    CallbackForm
  ui/       Button · Card · Badge · Container · SectionHeading · Toast

lib/
  data/    tariffs · services · service-details · faq · company
  utils/   cn · format
```

## Брендовая палитра (извлечена из `public/images/logo.png`)

| Цвет | Hex | Применение |
| ---- | --- | ---------- |
| `brand-500` | `#F18323` | Основной оранжевый — CTA, ссылки, иконки |
| `brand-600` | `#E95A29` | Hover, активные состояния |
| `brand-700` | `#E3372D` | Бейджи «Хит», градиент finish |
| `ink-800`   | `#353639` | Графит из букв логотипа — заголовки |
| `ink-900`   | `#1E1E1E` | Максимальный контраст, тёмные секции |
| `ink-400`   | `#A8A09F` | Серебристый блик — placeholder |
| `surface-50`/`surface-100` | `#FBFBFC`/`#F5F5F6` | Фоны секций |

Фирменный градиент: `linear-gradient(135deg, #F18323 → #E95A29 → #E3372D)`.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшн-сборка (все страницы SSG)
npm run start    # запуск продакшн-сервера
npm run lint
```

## Что уже готово

- Главная (11 секций): hero-слайдер, проверка адреса, плитки услуг, тарифы с табами, **конструктор тарифа** с живой ценой, «почему мы», доп. услуги, speedtest, таймлайн подключения, FAQ, CTA-форма
- Страница **/tarify** — полный каталог с табами (квартира/дом/бизнес) и сортировкой по цене/скорости
- 6 страниц услуг по единому шаблону с привязанными тарифами
- Страницы «Застройщикам», «О компании», «Контакты» (с Я.Картой), «Оплата»
- Мобильный drawer, sticky CTA, фиксированный header
- Формы на `react-hook-form + zod` с тостами
- SEO: per-page metadata, OG, sitemap.xml, robots.txt

## Что добавить при интеграции

- Бэкенд для форм (Telegram-бот / SMTP / CRM) — текущая реализация показывает тост, не отправляя запрос
- Реальная проверка адресов против базы зоны покрытия
- Структурированные данные `LocalBusiness` + `Service` (JSON-LD) — скелет лежит в `metadata`
- Интеграция с lk.sochi-net.ru и платёжной системой Payler
