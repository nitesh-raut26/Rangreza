import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCard } from "@/components/product-card";
import { ArtworkPlaceholder } from "@/components/artwork-placeholder";
import { WhatsAppOrder } from "@/components/whatsapp-order";
import { MotifDivider } from "@/components/motifs";
import { JsonLd } from "@/components/json-ld";
import {
  products,
  getProduct,
  productsByCategory,
  featuredProducts,
  priceLabel,
} from "@/lib/products";
import { getCollection } from "@/lib/collections";
import { waLink } from "@/lib/whatsapp";
import { buildMetadata, breadcrumbLd, productLd } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} — ${priceLabel(product)}`,
    description: product.shortDesc,
    path: `/shop/${product.slug}`,
    keywords: [product.name, product.categoryLabel, product.fabric, "Madhubani", "Mithila"],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const collection = getCollection(product.category);
  const related = [
    ...productsByCategory(product.category).filter((p) => p.slug !== product.slug),
    ...featuredProducts.filter(
      (p) => p.category !== product.category && p.slug !== product.slug,
    ),
  ].slice(0, 3);

  const details = [
    { k: "Fabric", v: product.fabric },
    { k: "Painting style", v: product.style },
    { k: "Motif", v: product.motif },
    { k: "Availability", v: product.madeToOrder ? "Made to order" : "Ready to ship" },
  ];

  return (
    <>
      <JsonLd
        data={[
          productLd(product),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: product.name, path: `/shop/${product.slug}` },
          ]),
        ]}
      />

      <Section className="pb-12 pt-10 sm:pt-12">
        <Container>
          {/* breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-faint">
            <Link href="/" className="hover:text-madder">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-madder">
              Shop
            </Link>
            <span>/</span>
            {collection ? (
              <Link href={`/shop#${collection.slug}`} className="hover:text-madder">
                {collection.name}
              </Link>
            ) : null}
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Artwork */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-line shadow-soft">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <ArtworkPlaceholder
                    motif={product.motifIcon}
                    accent={product.accent}
                    label={product.style}
                    className="size-full"
                  />
                )}
              </div>
              <p className="mt-3 text-center text-xs text-faint">
                Artwork preview — actual hand-painted piece will vary slightly,
                the signature of handmade art.
              </p>
            </div>

            {/* Details */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-madder">
                {product.categoryLabel}
              </span>
              <h1 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-1.5 text-sm text-faint">
                Product code · {product.code}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="font-display text-2xl font-medium text-madder">
                  {priceLabel(product)}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf ring-1 ring-inset ring-leaf/20">
                  <Sparkles className="size-3.5" />
                  One of a kind
                </span>
              </div>

              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
                {product.shortDesc}
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                {product.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppOrder
                  productName={product.name}
                  category={product.categoryLabel}
                  size="lg"
                  className="w-full sm:w-auto"
                />
                <Button
                  href={waLink(
                    `Namaste Rangreza Thread! 🙏 I have a question about "${product.name}".`,
                  )}
                  external
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ask a question
                </Button>
              </div>

              {/* details */}
              <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {details.map((d) => (
                  <div key={d.k} className="bg-paper px-4 py-3">
                    <dt className="text-xs uppercase tracking-wider text-faint">
                      {d.k}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink">{d.v}</dd>
                  </div>
                ))}
              </dl>

              {/* highlights */}
              <ul className="mt-7 grid gap-2.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-madder" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* care */}
              <div className="mt-7 rounded-2xl border border-line bg-paper-2/50 p-5">
                <h3 className="text-sm font-semibold text-ink">Care</h3>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  {product.care.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 ? (
        <Section className="bg-paper-2/40 pt-4">
          <Container>
            <MotifDivider name="lotus" className="mb-12" />
            <h2 className="text-center font-display text-2xl font-medium text-ink sm:text-3xl">
              You may also love
            </h2>
            <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
