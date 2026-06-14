import type { MotifName } from "@/components/motifs";

/**
 * Product categories. Each drives the shop filters, the home "collections"
 * grid and its own anchored section on /shop.
 *
 * The order here is the order categories appear on /shop.
 */
export type Collection = {
  slug: string;
  name: string;
  nameDeva?: string;
  blurb: string;
  accent: string;
  /** Icon shown in the collections grid and the shop section headers. */
  motif: MotifName;
};

export const collections: Collection[] = [
  {
    slug: "sarees",
    name: "Sarees",
    nameDeva: "साड़ी",
    blurb:
      "Hand-painted Mithila drapes on Paper Tussar, Munga Tussar silk and Leanon cotton.",
    accent: "#9b2226",
    motif: "saree",
  },
  {
    slug: "suits",
    name: "Suits",
    nameDeva: "सूट",
    blurb:
      "Madhubani-painted suit sets in Leanon cotton — made to order, stitched to your measure.",
    accent: "#356b4d",
    motif: "suit",
  },
  {
    slug: "kurtas",
    name: "Men's Kurtas",
    nameDeva: "कुर्ता",
    blurb: "Madhubani kurtas for men in cotton, silk and lustrous Tussar silk.",
    accent: "#be5a2a",
    motif: "kurta",
  },
  {
    slug: "dupattas",
    name: "Dupattas",
    nameDeva: "दुपट्टा",
    blurb:
      "Temple-border dupattas in cotton and silk — everyday Mithila colour over the shoulder.",
    accent: "#d29a2e",
    motif: "dupatta",
  },
  {
    slug: "dopta",
    name: "Men's Dopta",
    nameDeva: "दोपटा",
    blurb:
      "The traditional men's dopta — a hand-painted silk-cotton shoulder drape for festive days.",
    accent: "#34406b",
    motif: "dopta",
  },
  {
    slug: "paag",
    name: "Paag",
    nameDeva: "पाग",
    blurb:
      "The Mithila crown of honour, hand-painted in cotton and silk for weddings and tilak.",
    accent: "#b0863a",
    motif: "paag",
  },
  {
    slug: "bangles",
    name: "Bangles",
    nameDeva: "चूड़ी",
    blurb:
      "Hand-painted Madhubani lac bangles — wearable folk art, from a single piece to a full stack.",
    accent: "#7a1a1d",
    motif: "bangle",
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
