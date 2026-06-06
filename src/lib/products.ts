/**
 * Product catalogue for Rangreza Thread.
 *
 * ⚠️  Names, prices and details below are realistic PLACEHOLDERS so the site
 *     looks complete. Replace with the client's real pieces. To show a real
 *     photo, drop the file in /public/products/ and add its path to `images`;
 *     until then an elegant motif placeholder is shown automatically.
 */
export type Product = {
  slug: string;
  name: string;
  /** collection slug from collections.ts */
  category: string;
  categoryLabel: string;
  fabric: string;
  /** Madhubani style: Bharni (filled), Kachni (line), Godna, Tantrik, Kohbar */
  style: string;
  motif: string;
  motifIcon: "fish" | "lotus" | "peacock" | "sun" | "tree";
  /** Indicative price in INR. */
  price: number;
  accent: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  care: string[];
  madeToOrder: boolean;
  featured?: boolean;
  /** Optional real photos under /public — falls back to a motif placeholder. */
  images?: string[];
};

export const products: Product[] = [
  {
    slug: "machhli-tussar-saree",
    name: "Machhli Tussar Silk Saree",
    category: "sarees",
    categoryLabel: "Saree",
    fabric: "Pure Tussar Silk",
    style: "Bharni",
    motif: "Twin fish · machhli",
    motifIcon: "fish",
    price: 9800,
    accent: "#9b2226",
    shortDesc:
      "Twin-fish motifs — a Mithila blessing of prosperity — hand-painted across lustrous Tussar silk.",
    description:
      "Pairs of fish swim along the pallu and border, an age-old Mithila symbol of fertility and good fortune. Painted free-hand in the filled 'Bharni' style with natural pigment over the slubbed sheen of pure Tussar silk. A heirloom drape, entirely one of a kind.",
    highlights: [
      "Free-hand Bharni painting, front and pallu",
      "Natural-pigment colour on pure Tussar silk",
      "Includes an unstitched blouse piece",
      "Signed by the artist",
    ],
    care: ["Dry clean only", "Store folded with neem leaves", "Keep away from direct sun"],
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "kohbar-linen-saree",
    name: "Kohbar Tree-of-Life Linen Saree",
    category: "sarees",
    categoryLabel: "Saree",
    fabric: "Handwoven Linen",
    style: "Kachni",
    motif: "Kohbar · Tree of Life",
    motifIcon: "tree",
    price: 7600,
    accent: "#34406b",
    shortDesc:
      "The sacred Kohbar marriage motif, rendered in fine Kachni line-work on breathable linen.",
    description:
      "The Kohbar — the ceremonial Mithila wedding mural of lotus, bamboo and the Tree of Life — is reimagined in delicate 'Kachni' hatching across a handwoven linen saree. Indigo and madder lines trace stories of union and growth.",
    highlights: [
      "Intricate Kachni line-work",
      "Handwoven breathable linen",
      "Indigo & madder natural tones",
      "Includes an unstitched blouse piece",
    ],
    care: ["Gentle hand wash, separately", "Mild detergent, no bleach", "Line dry in shade"],
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "mor-kachni-cotton-saree",
    name: "Mor Kachni Cotton Saree",
    category: "sarees",
    categoryLabel: "Saree",
    fabric: "Mul Cotton",
    style: "Kachni",
    motif: "Dancing peacocks · mor",
    motifIcon: "peacock",
    price: 5400,
    accent: "#356b4d",
    shortDesc:
      "Dancing peacocks in fine line-work on feather-soft mul cotton — an everyday heirloom.",
    description:
      "Peacocks, the Mithila emblem of love and the monsoon, parade across a soft mul-cotton saree in green and ochre. Light enough for daily wear, special enough for every occasion.",
    highlights: [
      "Feather-soft mul cotton",
      "Hand-painted peacock pallu & border",
      "Breathable for all-day wear",
      "Includes an unstitched blouse piece",
    ],
    care: ["Gentle hand wash", "Do not wring", "Line dry in shade"],
    madeToOrder: true,
  },
  {
    slug: "radha-krishna-dupatta",
    name: "Radha-Krishna Bharni Dupatta",
    category: "dupattas",
    categoryLabel: "Dupatta",
    fabric: "Chanderi",
    style: "Bharni",
    motif: "Radha-Krishna",
    motifIcon: "lotus",
    price: 3200,
    accent: "#be5a2a",
    shortDesc:
      "The eternal lovers under a lotus canopy, painted in jewel tones on sheer Chanderi.",
    description:
      "A devotional Radha-Krishna scene framed by lotus and creeper, hand-painted in saturated Bharni colour on a sheer Chanderi dupatta that catches the light.",
    highlights: [
      "Sheer, lightweight Chanderi",
      "Jewel-tone Bharni painting",
      "Drapes beautifully over any outfit",
    ],
    care: ["Dry clean recommended", "Store flat or rolled"],
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "kamal-pokhar-stole",
    name: "Kamal-Pokhar Cotton Stole",
    category: "dupattas",
    categoryLabel: "Stole",
    fabric: "Cotton",
    style: "Kachni",
    motif: "Lotus pond · kamal",
    motifIcon: "lotus",
    price: 1900,
    accent: "#d29a2e",
    shortDesc:
      "A lotus pond in bloom, line-drawn along a soft cotton stole for everyday colour.",
    description:
      "Lotus, fish and ripples — a whole Mithila pond ('pokhar') drawn in turmeric and ink along a lightweight cotton stole. The easiest way to wear hand-painted art every day.",
    highlights: ["Lightweight everyday cotton", "Hand-drawn lotus-pond border", "Turmeric & ink tones"],
    care: ["Gentle hand wash", "Line dry in shade"],
    madeToOrder: true,
  },
  {
    slug: "surya-mithila-kurta",
    name: "Surya Mithila Kurta",
    category: "kurtas",
    categoryLabel: "Kurta",
    fabric: "Khadi Cotton",
    style: "Bharni",
    motif: "Sun · surya",
    motifIcon: "sun",
    price: 2800,
    accent: "#9b2226",
    shortDesc:
      "A radiant Mithila sun across the yoke of a handspun khadi kurta.",
    description:
      "The Surya motif — rays of fortune — blooms across the chest and yoke of a handspun, hand-woven khadi kurta. Crafted to be worn and remembered.",
    highlights: ["Handspun khadi cotton", "Hand-painted yoke & cuffs", "Relaxed, breathable fit"],
    care: ["Gentle hand wash, inside out", "Line dry in shade", "Warm iron on reverse"],
    madeToOrder: true,
  },
  {
    slug: "festive-mithila-paag",
    name: "Festive Mithila Paag",
    category: "paag",
    categoryLabel: "Paag",
    fabric: "Cotton",
    style: "Godna",
    motif: "Geometric · Godna",
    motifIcon: "sun",
    price: 1600,
    accent: "#34406b",
    shortDesc:
      "The Mithila crown of honour, hand-painted in Godna geometry for weddings and tilak.",
    description:
      "The paag is Mithila's crown of respect, worn at weddings, tilak and festivals. Hand-painted in the dotted 'Godna' style with bands of geometry and a central sun, ready to honour your celebrations.",
    highlights: ["Traditional Mithila paag form", "Godna-style geometric painting", "Adjustable fit"],
    care: ["Spot clean only", "Store flat"],
    madeToOrder: true,
  },
  {
    slug: "vivah-angvastra-dhoti-set",
    name: "Vivah Angvastra & Dhoti Set",
    category: "dhoti",
    categoryLabel: "Dhoti Set",
    fabric: "Tussar Silk",
    style: "Bharni",
    motif: "Tree of Life & fish",
    motifIcon: "tree",
    price: 6800,
    accent: "#be5a2a",
    shortDesc:
      "A ceremonial groom's set — angvastra and dhoti — blessed with Tree-of-Life and fish.",
    description:
      "For the groom and for sacred rites: a matched Tussar-silk dhoti and angvastra, their borders alive with the Tree of Life and auspicious fish, hand-painted in warm Bharni tones.",
    highlights: ["Matched dhoti + angvastra", "Pure Tussar silk", "Auspicious wedding motifs"],
    care: ["Dry clean only", "Store folded with neem leaves"],
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "godna-lines-silk-dupatta",
    name: "Godna Lines Silk Dupatta",
    category: "dupattas",
    categoryLabel: "Dupatta",
    fabric: "Tussar Silk",
    style: "Godna",
    motif: "Godna lines",
    motifIcon: "fish",
    price: 3600,
    accent: "#356b4d",
    shortDesc:
      "Meditative Godna line-work — inspired by Mithila tattoo art — on rich Tussar silk.",
    description:
      "Drawn from Mithila's body-tattoo tradition, the 'Godna' style fills this Tussar-silk dupatta with rows of fine repeating motifs — quietly mesmerising, endlessly wearable.",
    highlights: ["Rich Tussar silk", "Meditative Godna repetition", "Versatile, year-round drape"],
    care: ["Dry clean recommended", "Store rolled"],
    madeToOrder: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export const featuredProducts = products.filter((p) => p.featured);

/** Format an INR price with Indian digit grouping. */
export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
