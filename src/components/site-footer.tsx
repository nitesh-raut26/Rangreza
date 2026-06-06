import Link from "next/link";
import { site } from "@/lib/site";
import { collections } from "@/lib/collections";
import { waLink, generalMessage } from "@/lib/whatsapp";
import { Logo } from "@/components/logo";
import { MotifDivider } from "@/components/motifs";
import {
  FacebookGlyph,
  InstagramGlyph,
  WhatsappGlyph,
} from "@/components/ui/brand-icons";

const explore = [
  { label: "The Art of Mithila", href: "/the-art" },
  { label: "Our Story", href: "/about" },
  { label: "Custom Order", href: "/custom" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "WhatsApp", href: waLink(generalMessage()), Icon: WhatsappGlyph },
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookGlyph },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramGlyph },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <MotifDivider name="fish" className="mb-14" />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-pretty text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="font-deva mt-4 text-lg text-madder">
              हाथ से बनी मिथिला कला
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/shop#${c.slug}`}
                    className="text-sm text-muted transition-colors hover:text-madder"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {explore.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    className="text-sm text-muted transition-colors hover:text-madder"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Get in touch
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="block text-muted transition-colors hover:text-madder"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                className="block text-muted transition-colors hover:text-madder"
              >
                {site.phoneDisplay}
              </a>
              <p className="pt-1 text-muted">{site.location}</p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-paper text-muted ring-1 ring-line-strong transition-colors hover:text-madder hover:ring-madder/30"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Each piece painted by
            hand.
          </p>
          <p>
            Reviving Mithila, one thread at a time · Crafted by{" "}
            <a
              href="https://www.praxivo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted transition-colors hover:text-madder"
            >
              Praxivo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
