"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";
import { telHref } from "@/lib/utils/format";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

const navLeft = [{ label: "Тарифы", href: "/tarify" }];

const navRight = [
  { label: "Бизнесу", href: "/zastroyshchikam" },
  { label: "О нас", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 bg-white/90 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "shadow-[0_1px_0_0_rgba(53,54,57,0.06),0_8px_24px_-12px_rgba(53,54,57,0.12)]"
            : "border-b border-ink-100",
        )}
      >
        <Container className="flex h-16 lg:h-18 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="IP Media Sochi"
          >
            <Image
              src="/images/logo.png"
              alt="IP Media Sochi"
              width={200}
              height={58}
              priority
              className="h-9 lg:h-11 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 mx-2">
            {navLeft.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "px-3.5 h-10 rounded-full text-[14.5px] font-semibold flex items-center gap-1 transition-colors",
                  pathname.startsWith("/uslugi") || servicesOpen
                    ? "text-brand-600 bg-brand-50"
                    : "text-ink-800 hover:text-brand-600 hover:bg-brand-50/60",
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Услуги
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    servicesOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] max-w-[92vw] transition-all duration-200 origin-top",
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none",
                )}
              >
                <div className="bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(53,54,57,0.18)] border border-ink-100 p-2.5">
                  <div className="grid grid-cols-2 gap-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 group transition-colors"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:brand-gradient group-hover:text-white transition-colors">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-semibold text-ink-900 text-[14px]">
                            {s.name}
                          </span>
                          <span className="block text-[12px] text-ink-500 mt-0.5">
                            {s.short}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navRight.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <a
              href={telHref(company.phones.sales)}
              className="hidden 2xl:flex flex-col items-end text-right leading-tight"
            >
              <span className="text-[10px] text-ink-500 uppercase tracking-wider font-semibold">
                Подключение
              </span>
              <span className="text-[14px] font-bold text-ink-900 hover:text-brand-600 transition-colors">
                {company.phones.sales}
              </span>
            </a>
            <Button
              href={telHref(company.phones.sales)}
              variant="primary"
              size="md"
              className="hidden md:inline-flex"
              leading={<Phone className="h-4 w-4" />}
            >
              Подключить
            </Button>
            <button
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-ink-50 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Меню"
            >
              <Menu className="h-6 w-6 text-ink-900" />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3.5 h-10 inline-flex items-center rounded-full text-[14.5px] font-semibold transition-colors",
        active
          ? "text-brand-600 bg-brand-50"
          : "text-ink-800 hover:text-brand-600 hover:bg-brand-50/60",
      )}
    >
      {children}
    </Link>
  );
}
