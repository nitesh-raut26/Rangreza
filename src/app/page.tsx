import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCard } from "@/components/product-card";
import { Motif, MotifDivider } from "@/components/motifs";
import { collections } from "@/lib/collections";
import { featuredProducts } from "@/lib/products";

const materials = [
  "Pure Tussar Silk",
  "Handwoven Linen",
  "Mul Cotton",
  "Khadi",
  "Chanderi",
  "Natural Pigments",
  "Free-hand Painting",
];

const motifMeanings = [
  { name: "fish", label: "Fish", meaning: "Prosperity & fertility", accent: "#9b2226" },
  { name: "lotus", label: "Lotus", meaning: "Purity & creation", accent: "#d29a2e" },
  { name: "peacock", label: "Peacock", meaning: "Love & the monsoon", accent: "#356b4d" },
  { name: "sun", label: "Sun", meaning: "Fortune & life", accent: "#34406b" },
] as const;

const steps = [
  {
    no: "01",
    title: "We source",
    body: "Handwoven sarees, dupattas and khadi are chosen from weavers who still work by hand.",
  },
  {
    no: "02",
    title: "We paint",
    body: "Mithila artists paint each piece free-hand with natural pigment — never a print, never traced.",
  },
  {
    no: "03",
    title: "You wear the story",
    body: "A one-of-a-kind heirloom, signed by the artist, arrives ready to be worn and passed on.",
  },
];

const values = [
  { title: "Truly one of a kind", body: "Every piece is painted by hand, so no two are ever identical." },
  { title: "Natural colour, honest cloth", body: "Earth pigments on handwoven silk, linen, cotton and khadi." },
  { title: "Made by Mithila artists", body: "Your purchase sustains the artisans who keep this craft alive." },
  { title: "Made to order & yours", body: "Commission your own motif, colour or garment — we love a custom piece." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Materials marquee */}
      <div className="border-y border-line bg-paper-2/50 py-5">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...materials, ...materials].map((m, i) => (
              <span
                key={`${m}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap font-display text-lg italic text-muted"
              >
                {m}
                <span className="text-madder/50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Collections */}
      <Section id="collections">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Collections"
              title="Find your canvas."
              description="Choose the drape, and let Mithila colour the rest — each category hand-painted to order."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/shop#${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span
                    className="inline-flex size-14 items-center justify-center rounded-2xl"
                    style={{ background: `${c.accent}14`, color: c.accent }}
                  >
                    <Motif name={c.motif} className="size-8" />
                  </span>
                  <h3 className="mt-5 flex items-baseline gap-2 font-display text-xl font-medium text-ink">
                    {c.name}
                    {c.nameDeva ? (
                      <span className="font-deva text-base text-faint">
                        {c.nameDeva}
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {c.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-madder">
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured pieces */}
      <Section className="bg-paper-2/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Hand-picked"
              title="Pieces we're in love with."
              description="A few of our favourite hand-painted drapes — message us to make one yours."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/shop" variant="outline" size="lg">
              View the full collection
            </Button>
          </div>
        </Container>
      </Section>

      {/* The Art teaser */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="The Art of Mithila"
                  title="A folk art older than memory, worn with pride."
                  description="For centuries, the women of Mithila have painted their walls and floors with gods, nature and geometry. Rangreza Thread carries that brush onto cloth — every motif a meaning, every line drawn by hand."
                />
                <div className="mt-8">
                  <Button href="/the-art">Discover the art</Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {motifMeanings.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-line bg-paper p-6 text-center shadow-soft"
                  >
                    <Motif
                      name={m.name}
                      className="mx-auto size-14"
                      style={{ color: m.accent }}
                    />
                    <h3 className="mt-3 font-display text-lg font-medium text-ink">
                      {m.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{m.meaning}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-paper-2/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it's made"
              title="From the loom, to the brush, to you."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 90}>
                <div className="text-center">
                  <span className="font-display text-4xl font-medium text-madder/30">
                    {s.no}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values + promise */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <blockquote className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                <span className="text-madder">“</span>No print. No machine. Just
                a brush, natural colour, and a story that&apos;s been told for
                centuries.<span className="text-madder">”</span>
              </blockquote>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-5 sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title}>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <MotifDivider name="peacock" className="mt-20" />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
