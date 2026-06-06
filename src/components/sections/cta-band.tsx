import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Motif } from "@/components/motifs";
import { waLink, generalMessage } from "@/lib/whatsapp";

export function CtaBand({
  title = "Bring home a piece of Mithila.",
  description = "Every thread is painted by hand. Message us on WhatsApp to order, gift, or commission a piece that's entirely your own.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="pb-24 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-paper sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 90% at 50% -10%, rgba(155,34,38,0.55), transparent 60%), radial-gradient(50% 70% at 90% 120%, rgba(210,154,46,0.25), transparent 60%)",
            }}
          />
          <Motif
            name="lotus"
            className="pointer-events-none absolute -left-8 -top-8 size-44 text-paper/[0.06]"
          />
          <Motif
            name="fish"
            className="pointer-events-none absolute -bottom-10 -right-6 size-48 text-paper/[0.06]"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-paper/75">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={waLink(generalMessage())}
                external
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="/shop"
                variant="outline"
                size="lg"
                className="w-full border-paper/40 text-paper hover:border-paper hover:bg-paper/10 hover:text-paper sm:w-auto"
              >
                Browse the collection
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
