import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { WhatsAppForm } from "@/components/whatsapp-form";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Custom Order — commission a hand-painted Mithila piece",
  description:
    "Commission a custom hand-painted Madhubani saree, suit, kurta, dupatta, paag or lac bangle — your garment, your motif, your colours, painted by Mithila artists.",
  path: "/custom",
});

const customisable = [
  "The garment — saree, suit, kurta, dupatta, paag or bangles",
  "The motif — fish, peacock, lotus, Kohbar or your own idea",
  "The colours — from soft naturals to festive brights",
  "The occasion — bridal, gifting, festival or everyday",
];

const steps = [
  { no: "01", title: "Share your idea", body: "Tell us the garment, motif, colours and occasion — on the form or WhatsApp." },
  { no: "02", title: "We sketch & quote", body: "We confirm the design, timeline and price before any brush touches cloth." },
  { no: "03", title: "We paint & ship", body: "Your one-of-a-kind piece is painted by hand, signed, and sent to your door." },
];

export default function CustomPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Custom Order", path: "/custom" },
        ])}
      />

      <PageHeader
        eyebrow="Custom Order"
        title="Commission a piece that's entirely yours."
        description="The garment, the motif, the colours, the meaning — imagined by you, painted by hand in Mithila."
        motif="tree"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  What you can make yours
                </h2>
                <ul className="mt-5 space-y-3">
                  {customisable.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-ink-soft"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-madder" />
                      {c}
                    </li>
                  ))}
                </ul>

                <h2 className="mt-12 font-display text-2xl font-medium text-ink">
                  How it works
                </h2>
                <div className="mt-6 space-y-6">
                  {steps.map((s) => (
                    <div key={s.no} className="flex gap-4">
                      <span className="font-display text-2xl font-medium text-madder/40">
                        {s.no}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:sticky lg:top-24">
                <WhatsAppForm variant="custom" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
