import type { Metadata } from "next";
import { site } from "./site";
import type { Product } from "./products";

export const metaBase = new URL(site.url);

type BuildMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  ogTitle?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  ogTitle,
}: BuildMeta): Metadata {
  const url = new URL(path, metaBase).toString();
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: ogTitle ?? title,
      description,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
    },
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: "Worldwide",
    knowsAbout: [
      "Madhubani painting",
      "Mithila art",
      "Hand-painted sarees",
      "Indian handicrafts",
    ],
    sameAs: [site.socials.facebook, site.socials.instagram].filter(Boolean),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function productLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDesc,
    category: product.categoryLabel,
    material: product.fabric,
    brand: { "@type": "Brand", name: site.name },
    url: new URL(`/shop/${product.slug}`, metaBase).toString(),
    offers: {
      "@type": "Offer",
      price: String(product.price),
      priceCurrency: "INR",
      availability: product.madeToOrder
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      seller: { "@type": "Organization", name: site.name },
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, metaBase).toString(),
    })),
  };
}
