import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/products";
import { ArtworkPlaceholder } from "@/components/artwork-placeholder";
import { WhatsAppOrder } from "@/components/whatsapp-order";
import { cn } from "@/lib/cn";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-line transition-all duration-300 group-hover:shadow-lift group-hover:ring-line-strong"
      >
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <ArtworkPlaceholder
            motif={product.motifIcon}
            accent={product.accent}
            label={product.style}
            className="size-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}

        <span className="absolute left-3 top-3 rounded-full bg-paper/85 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-soft backdrop-blur">
          {product.categoryLabel}
        </span>
        {product.madeToOrder ? (
          <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-medium text-paper backdrop-blur">
            Made to order
          </span>
        ) : null}
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium leading-snug text-ink">
            <Link
              href={`/shop/${product.slug}`}
              className="transition-colors hover:text-madder"
            >
              {product.name}
            </Link>
          </h3>
          <span className="shrink-0 font-display text-lg font-medium text-madder">
            {formatINR(product.price)}
          </span>
        </div>

        <p className="mt-1 text-sm text-faint">
          {product.fabric} · {product.style}
        </p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {product.shortDesc}
        </p>

        <div className="mt-4 flex items-center gap-3 pt-1">
          <WhatsAppOrder
            productName={product.name}
            category={product.categoryLabel}
            label="Order"
            size="sm"
          />
          <Link
            href={`/shop/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-madder"
          >
            Details
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
