import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RangrezaMonogram } from "@/components/logo";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <RangrezaMonogram className="size-20 opacity-60" />
      <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        This thread leads nowhere.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-lg text-muted">
        The page you&apos;re looking for has wandered off. Let&apos;s find you
        something beautiful instead.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/shop" size="lg">
          Shop the collection
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
