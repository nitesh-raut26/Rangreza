import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { Motif } from "@/components/motifs";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The Art of Mithila — the story of Madhubani painting",
  description:
    "Madhubani (Mithila) painting is a 2,500-year-old folk art of Bihar. Discover its styles — Bharni, Kachni, Godna, Tantrik — and the meaning behind its fish, lotus, peacock and Tree-of-Life motifs.",
  path: "/the-art",
  keywords: [
    "Madhubani painting history",
    "Mithila art styles",
    "Bharni Kachni Godna",
    "Madhubani motifs meaning",
  ],
});

const styles = [
  { name: "Bharni", tag: "Filled colour", body: "Bold blocks of natural colour inside firm black outlines — the most recognised face of Madhubani." },
  { name: "Kachni", tag: "Fine line", body: "Delicate hatching and fine lines, often near-monochrome, layered into astonishing detail." },
  { name: "Godna", tag: "Tattoo", body: "Concentric, repeating patterns drawn from Mithila's body-tattoo tradition and its tribal roots." },
  { name: "Tantrik", tag: "Ritual", body: "Deities, symbols and sacred geometry painted for worship, blessing and ceremony." },
];

const motifs = [
  { name: "fish", label: "Fish · Machhli", meaning: "Prosperity, fertility and good fortune.", accent: "#9b2226" },
  { name: "lotus", label: "Lotus · Kamal", meaning: "Purity, beauty and creation rising from water.", accent: "#d29a2e" },
  { name: "peacock", label: "Peacock · Mor", meaning: "Love, longing and the joy of the monsoon.", accent: "#356b4d" },
  { name: "sun", label: "Sun · Surya", meaning: "Energy, fortune and the rhythm of life.", accent: "#34406b" },
  { name: "tree", label: "Tree of Life · Kohbar", meaning: "Union, fertility and growth — the heart of wedding art.", accent: "#be5a2a" },
] as const;

export default function TheArtPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "The Art", path: "/the-art" },
        ])}
      />

      <PageHeader
        eyebrow="The Art of Mithila"
        title="The painted soul of Mithila."
        description="A folk art older than memory, kept alive by the women of Mithila — and carried, thread by thread, into what you wear."
        motif="tree"
      />

      {/* Origin */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
            <Reveal>
              <p>
                Madhubani — or <span className="text-ink">Mithila</span> —
                painting was born in the Mithila region of Bihar and Nepal more
                than two thousand years ago. By tradition it was painted by
                women, on freshly plastered walls and floors, to bless weddings,
                festivals and the gods.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Its colours came from the earth itself — lamp-black and ochre,
                turmeric yellow, indigo blue, vermillion red and the green of
                leaves. Its brushes were twigs, matchsticks, nib-pens and
                fingers. Nothing was wasted; no space left empty.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Today this GI-tagged art lives on paper, on canvas — and, at
                Rangreza Thread, on the drapes you can wear. The wall has become
                cloth; the blessing travels with you.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Styles */}
      <Section className="bg-paper-2/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Four hands, four styles"
              title="The languages of the brush."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {styles.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 70}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-soft">
                  <span className="text-xs font-semibold uppercase tracking-wider text-madder">
                    {s.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Motifs */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Every line a meaning"
              title="The motifs, and what they carry."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {motifs.map((m, i) => (
              <Reveal key={m.label} delay={(i % 5) * 60}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 text-center shadow-soft">
                  <Motif
                    name={m.name}
                    className="mx-auto size-16"
                    style={{ color: m.accent }}
                  />
                  <h3 className="mt-3 font-display text-base font-medium text-ink">
                    {m.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {m.meaning}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Wear a story worth telling."
        description="Browse pieces carrying these very motifs — or commission your own meaning in colour."
      />
    </>
  );
}
