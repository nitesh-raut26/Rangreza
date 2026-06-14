import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Fish, Lotus, Sun, Tree } from "@/components/motifs";
import { waLink, generalMessage } from "@/lib/whatsapp";

const trust = [
  "Hand-painted",
  "One of a kind",
  "Natural pigments",
  "Direct from the artist",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, rgba(210,154,46,0.14), transparent 60%), radial-gradient(50% 50% at 100% 30%, rgba(155,34,38,0.10), transparent 60%)",
          }}
        />
      </div>

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="font-deva text-lg text-madder">
            हाथ से चित्रित मिथिला कला
          </p>
          <h1 className="mt-3 font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Wearable folk art from the soul of{" "}
            <span className="italic text-madder">Mithila</span>.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
            Rangreza Thread hand-paints the centuries-old Madhubani tradition
            onto sarees, suits, kurtas, dupattas, paag and lac bangles — no two
            pieces ever alike.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/shop" size="lg">
              Shop the collection
            </Button>
            <Button
              href={waLink(generalMessage())}
              external
              variant="whatsapp"
              size="lg"
            >
              Order on WhatsApp
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-madder/60" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Composed Madhubani "canvas" */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div
            className="paper-texture absolute inset-0 rounded-[2rem] shadow-lift"
            style={{
              background:
                "linear-gradient(160deg, #f7ead0, #f3e2c6 55%, #efd9b6)",
            }}
          />
          <div className="absolute inset-3 rounded-[1.6rem] border-2 border-madder/25" />
          <div className="absolute inset-[1.4rem] rounded-[1.35rem] border border-dashed border-madder/20" />

          <Sun className="animate-sway absolute left-1/2 top-8 size-20 -translate-x-1/2 text-turmeric [transform-origin:center]" />
          <Tree className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-[46%] text-madder" />
          <Lotus className="absolute left-7 top-1/2 size-16 text-indigo/80" />
          <Lotus className="absolute right-7 top-1/2 size-16 text-leaf/80" />
          <Fish className="absolute bottom-10 left-9 size-16 text-indigo/80" />
          <Fish className="absolute bottom-10 right-9 size-16 -scale-x-100 text-leaf/80" />

          <span className="font-deva absolute inset-x-0 bottom-5 text-center text-xl text-madder">
            रंगरेज़ा
          </span>
        </div>
      </Container>
    </section>
  );
}
