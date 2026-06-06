import type { Metadata, Viewport } from "next";
import { Fraunces, Mukta, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { metaBase, organizationLd, websiteLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["latin", "devanagari"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: metaBase,
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Rangreza Thread",
    "hand painted saree",
    "Madhubani saree",
    "Mithila painting saree",
    "hand painted dupatta",
    "Madhubani painting",
    "Mithila art",
    "hand painted kurta",
    "Mithila paag",
    "painted dhoti angvastra",
    "Tussar silk Madhubani saree",
    "Bihar handicraft",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${mukta.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="paper-texture flex min-h-full flex-col">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
