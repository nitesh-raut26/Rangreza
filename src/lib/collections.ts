/**
 * Product categories. Each drives the shop filters, the home "collections"
 * grid and its own anchored section on /shop.
 */
export type Collection = {
  slug: string;
  name: string;
  nameDeva?: string;
  blurb: string;
  accent: string;
  motif: "fish" | "lotus" | "peacock" | "sun" | "tree";
};

export const collections: Collection[] = [
  {
    slug: "sarees",
    name: "Sarees",
    nameDeva: "साड़ी",
    blurb:
      "Hand-painted drapes on Tussar silk, handwoven linen and soft mul cotton.",
    accent: "#9b2226",
    motif: "fish",
  },
  {
    slug: "dupattas",
    name: "Dupattas & Stoles",
    nameDeva: "दुपट्टा",
    blurb: "Lightweight everyday luxury — a wash of Mithila colour over the shoulder.",
    accent: "#d29a2e",
    motif: "lotus",
  },
  {
    slug: "kurtas",
    name: "Kurtas",
    nameDeva: "कुर्ता",
    blurb: "Khadi and cotton kurtas carrying motifs of myth and nature.",
    accent: "#356b4d",
    motif: "peacock",
  },
  {
    slug: "paag",
    name: "Paag",
    nameDeva: "पाग",
    blurb: "The Mithila crown of honour, hand-painted for weddings and festivals.",
    accent: "#34406b",
    motif: "sun",
  },
  {
    slug: "dhoti",
    name: "Dhoti & Angvastra",
    nameDeva: "धोती",
    blurb: "Ceremonial sets for the groom and for sacred occasions.",
    accent: "#be5a2a",
    motif: "tree",
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
