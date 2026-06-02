import { Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="text-8xl md:text-9xl font-extrabold brand-text-gradient">
            404
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Страница не найдена
          </h1>
          <p className="mt-4 text-ink-600">
            Возможно, страница была удалена или вы ввели неверный адрес. Мы
            поможем вам вернуться на главную и найти нужное.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button
              href="/"
              variant="gradient"
              size="lg"
              leading={<Home className="h-5 w-5" />}
            >
              На главную
            </Button>
            <Button href="/kontakty" variant="secondary" size="lg">
              Связаться
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
