import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCard } from "@/components/product-card";
import { Motif } from "@/components/motifs";
import { JsonLd } from "@/components/json-ld";
import { collections } from "@/lib/collections";
import { productsByCategory } from "@/lib/products";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shop — hand-painted Mithila sarees, dupattas & more",
  description:
    "Browse hand-painted Madhubani sarees, dupattas, kurtas, paag and dhoti sets. Each piece is painted by hand, made to order, and entirely one of a kind.",
  path: "/shop",
  keywords: [
    "buy Madhubani saree",
    "hand painted saree online",
    "Mithila painting dupatta",
    "hand painted kurta",
    "Mithila paag",
  ],
});

export default function ShopPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
        ])}
      />

      <PageHeader
        eyebrow="The Collection"
        title="Hand-painted, made to order, one of a kind."
        description="Every piece is painted by hand to order — so colours and motifs can be tailored to you. Message us on WhatsApp to reserve or customise any piece."
        motif="peacock"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {collections.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft shadow-soft transition-colors hover:border-madder/30 hover:text-madder"
            >
              <Motif name={c.motif} className="size-4" style={{ color: c.accent }} />
              {c.name}
            </a>
          ))}
        </div>
      </PageHeader>

      {collections.map((c, ci) => {
        const items = productsByCategory(c.slug);
        if (items.length === 0) return null;
        return (
          <Section
            key={c.slug}
            id={c.slug}
            className={ci % 2 === 1 ? "scroll-mt-24 bg-paper-2/40" : "scroll-mt-24"}
          >
            <Container>
              <Reveal>
                <div className="flex items-end justify-between gap-4 border-b border-line pb-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex size-12 items-center justify-center rounded-2xl"
                      style={{ background: `${c.accent}14`, color: c.accent }}
                    >
                      <Motif name={c.motif} className="size-7" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                        {c.name}
                      </h2>
                      <p className="mt-1 text-sm text-muted">{c.blurb}</p>
                    </div>
                  </div>
                  <span className="hidden shrink-0 text-sm text-faint sm:block">
                    {items.length} {items.length === 1 ? "piece" : "pieces"}
                  </span>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 70}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CtaBand
        title="Don't see quite the right piece?"
        description="Tell us the drape, the colour and the motif you dream of — we paint custom orders all the time."
      />
    </>
  );
}
