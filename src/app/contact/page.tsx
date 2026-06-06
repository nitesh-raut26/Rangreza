import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { WhatsAppForm } from "@/components/whatsapp-form";
import { JsonLd } from "@/components/json-ld";
import {
  FacebookGlyph,
  InstagramGlyph,
  WhatsappGlyph,
} from "@/components/ui/brand-icons";
import { site } from "@/lib/site";
import { waLink, generalMessage } from "@/lib/whatsapp";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — order, gift or commission with Rangreza Thread",
  description:
    "Reach Rangreza Thread on WhatsApp to order, gift or commission hand-painted Mithila garments. We usually reply the same day.",
  path: "/contact",
});

const cards = [
  {
    Icon: Mail,
    title: "Email",
    body: site.email,
    href: `mailto:${site.email}`,
  },
  {
    Icon: Phone,
    title: "Call",
    body: site.phoneDisplay,
    href: `tel:${site.phoneDisplay.replace(/\s/g, "")}`,
  },
  {
    Icon: Clock,
    title: "We usually reply",
    body: "The same day, in Hindi or English",
  },
  {
    Icon: MapPin,
    title: "Where we are",
    body: site.location,
  },
];

const socials = [
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookGlyph },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramGlyph },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        title="Let's talk Mithila."
        description="Questions, orders, gifts or a custom idea — WhatsApp is the fastest way to reach us."
        motif="fish"
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <WhatsAppForm variant="contact" />

            <div className="space-y-4">
              <a
                href={waLink(generalMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#1ebe5d]/30 bg-[#1ebe5d]/10 p-5 transition-colors hover:bg-[#1ebe5d]/15"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1ebe5d] text-white">
                  <WhatsappGlyph className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    Chat on WhatsApp
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">
                    The quickest way to order or ask
                  </p>
                </div>
              </a>

              {cards.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 shadow-soft"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-madder/10 text-madder">
                    <c.Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-0.5 block truncate text-sm text-madder hover:underline"
                      >
                        {c.body}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-muted">{c.body}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 pt-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-paper text-muted ring-1 ring-line-strong transition-colors hover:text-madder hover:ring-madder/30"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
