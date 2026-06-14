import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { Motif, MotifDivider } from "@/components/motifs";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Story — reviving Mithila, one thread at a time",
  description:
    "Rangreza Thread was born in Mithilanchal to carry the Madhubani tradition onto the clothes you wear — supporting the artists who keep this folk art alive.",
  path: "/about",
});

const commitments = [
  { title: "Hand, never machine", body: "Every motif is painted by hand with natural pigment — never printed, never traced." },
  { title: "Fair to the artist", body: "Our pieces sustain the Mithila artisans whose hands and heritage make them." },
  { title: "Slow, and worth it", body: "Made to order, in small numbers, so each drape gets the time it deserves." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Our Story", path: "/about" },
        ])}
      />

      <PageHeader
        eyebrow="Our Story"
        title="From the courtyards of Mithila, to your wardrobe."
        description="Rangreza Thread began with a simple wish — to let a centuries-old art be worn, loved and carried far beyond the walls it was born on."
        motif="lotus"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  In Mithilanchal, Madhubani isn&apos;t found in a museum — it
                  lives on the walls of homes, painted by mothers and
                  grandmothers for every wedding, every festival, every
                  blessing. We grew up surrounded by it.
                </p>
                <p>
                  Founded by{" "}
                  <span className="text-ink">{site.founderName}</span>, Rangreza
                  Thread was born to carry that brush beyond the wall. We seek
                  out handwoven sarees, suits, kurtas, dupattas, paag and lac
                  bangles, and our Mithila artists paint each one by hand — so the art you
                  love can be{" "}
                  <span className="text-ink">worn, not just framed</span>.
                </p>
                <p>
                  Every piece you choose keeps a brush moving in Mithila, and a
                  centuries-old story alive on cloth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="relative overflow-hidden rounded-3xl border border-line bg-paper-2/50 p-8 shadow-soft">
                <Motif
                  name="tree"
                  className="absolute -right-6 -top-6 size-40 text-madder/[0.06]"
                />
                <blockquote className="relative font-display text-2xl font-medium leading-snug text-ink">
                  <span className="text-madder">“</span>We don&apos;t sell
                  fabric. We pass on a blessing that someone painted, by hand,
                  just for you.<span className="text-madder">”</span>
                </blockquote>
                <figcaption className="relative mt-5 text-sm text-muted">
                  — {site.founderLine}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-2/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Our promise to you, and to Mithila."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-paper p-7 text-center shadow-soft">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <MotifDivider name="sun" className="mt-16" />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
