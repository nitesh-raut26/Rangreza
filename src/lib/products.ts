/**
 * Product catalogue for Rangreza Thread — the real Rangreza pieces.
 *
 * Each piece ships with a generated Madhubani artwork preview under
 * /public/products/<slug>.svg (made by scripts/generate-product-art.mjs).
 * To show a real photo instead, drop the file in /public/products/ and point
 * `images` at it; the artwork/placeholder is only a fallback.
 */
export type Product = {
  slug: string;
  name: string;
  /** collection slug from collections.ts */
  category: string;
  categoryLabel: string;
  fabric: string;
  /** Rangreza product code, e.g. "RPTS". */
  code: string;
  /** Madhubani style: Bharni (filled), Kachni (line), Godna, Tantrik, Kohbar */
  style: string;
  motif: string;
  motifIcon: "fish" | "lotus" | "peacock" | "sun" | "tree";
  /** Indicative price in INR. */
  price: number;
  /** Upper bound for pieces sold in a price range (e.g. bangles). */
  priceMax?: number;
  accent: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  care: string[];
  madeToOrder: boolean;
  featured?: boolean;
  /** Real photos under /public — falls back to a motif placeholder. */
  images?: string[];
};

export const products: Product[] = [
  // ── Sarees ──────────────────────────────────────────────────
  {
    slug: "rangreza-paper-tussar-silk-saree",
    name: "Rangreza Paper Tussar Silk",
    category: "sarees",
    categoryLabel: "Saree",
    fabric: "Paper Tussar Silk",
    code: "RPTS",
    style: "Bharni",
    motif: "Twin fish · machhli",
    motifIcon: "fish",
    price: 9800,
    accent: "#9b2226",
    shortDesc:
      "Our finest drape — Mithila motifs hand-painted across crisp, lustrous Paper Tussar silk.",
    description:
      "Paper Tussar carries an unmistakable papery crispness and a deep natural sheen. Across it, Mithila motifs are painted free-hand in the filled 'Bharni' style with natural pigment — twin fish for prosperity along the pallu and border. A true heirloom drape, entirely one of a kind.",
    highlights: [
      "Free-hand Bharni painting on the pallu & border",
      "Natural-pigment colour on pure Paper Tussar silk",
      "Includes an unstitched blouse piece",
      "Signed by the artist",
    ],
    care: ["Dry clean only", "Store folded with neem leaves", "Keep away from direct sun"],
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "rangreza-munga-tussar-silk-saree",
    name: "Rangreza Munga Tussar Silk",
    category: "sarees",
    categoryLabel: "Saree",
    fabric: "Munga Tussar Silk",
    code: "RMTS",
    style: "Kachni",
    motif: "Dancing peacocks · mor",
    motifIcon: "peacock",
    price: 6200,
    accent: "#be5a2a",
    shortDesc:
      "Warm, golden Munga Tussar silk, alive with peacocks drawn in fine Kachni line-work.",
    description:
      "Munga Tussar glows with a warm, honeyed tone all its own. Peacocks — the Mithila emblem of love and the monsoon — parade across the pallu in delicate 'Kachni' hatching, hand-drawn line by patient line. Light to drape, rich to behold.",
    highlights: [
      "Intricate Kachni line-work on the pallu",
      "Naturally golden Munga Tussar silk",
      "Includes an unstitched blouse piece",
      "Signed by the artist",
    ],
    care: ["Dry clean only", "Store folded with neem leaves", "Keep away from direct sun"],
    madeToOrder: true,
    featured: true,
  },
  {
    slug: "rangreza-leanon-cotton-saree",
    name: "Rangreza Leanon Cotton",
    category: "sarees",
    categoryLabel: "Saree",
    fabric: "Leanon Cotton",
    code: "RLCS",
    style: "Godna",
    motif: "Tree of Life · kohbar",
    motifIcon: "tree",
    price: 3000,
    accent: "#356b4d",
    shortDesc:
      "Soft, breathable Leanon cotton with a meditative Godna Tree-of-Life border — an everyday heirloom.",
    description:
      "Leanon cotton is feather-light and made for all-day wear. The Tree of Life — the Mithila promise of growth and union — is drawn along the border in the dotted, repeating 'Godna' style. Special enough for a celebration, soft enough for every day.",
    highlights: [
      "Feather-soft Leanon cotton",
      "Hand-painted Godna Tree-of-Life border",
      "Breathable for all-day wear",
      "Includes an unstitched blouse piece",
    ],
    care: ["Gentle hand wash", "Do not wring", "Line dry in shade"],
    madeToOrder: true,
  },

  // ── Suits ───────────────────────────────────────────────────
  {
    slug: "rangreza-madhubani-design-suit",
    name: "Rangreza Madhubani Design Suit",
    category: "suits",
    categoryLabel: "Suit",
    fabric: "Leanon Cotton",
    code: "RMDS",
    style: "Bharni",
    motif: "Peacock & vine",
    motifIcon: "peacock",
    price: 2500,
    accent: "#356b4d",
    shortDesc:
      "A complete Madhubani-painted suit set in soft Leanon cotton — yours to stitch to measure.",
    description:
      "An unstitched suit set in breathable Leanon cotton, hand-painted with a flowing Madhubani design of peacock and vine in saturated Bharni colour. Comes ready to be tailored to your own fit and stitched into the salwar suit you imagine.",
    highlights: [
      "Complete unstitched suit set",
      "Hand-painted Bharni Madhubani design",
      "Soft, breathable Leanon cotton",
      "Stitched to your measurements on request",
    ],
    care: ["Gentle hand wash, separately", "Mild detergent, no bleach", "Line dry in shade"],
    madeToOrder: true,
    featured: true,
  },

  // ── Men's Kurtas ────────────────────────────────────────────
  {
    slug: "rangreza-madhubani-cotton-kurta",
    name: "Rangreza Madhubani Cotton Kurta",
    category: "kurtas",
    categoryLabel: "Men's Kurta",
    fabric: "Cotton",
    code: "RMCK",
    style: "Kachni",
    motif: "Tree of Life · kohbar",
    motifIcon: "tree",
    price: 2500,
    accent: "#be5a2a",
    shortDesc:
      "A breathable cotton kurta with a hand-drawn Madhubani Tree-of-Life across the yoke.",
    description:
      "A relaxed, breathable cotton kurta carrying the Tree of Life across its yoke in fine 'Kachni' line-work. Mithila art you can wear to a festival, a wedding or a quiet evening — made to be worn and remembered.",
    highlights: [
      "Breathable handloom cotton",
      "Hand-painted Kachni yoke",
      "Relaxed, comfortable fit",
      "Made to your size",
    ],
    care: ["Gentle hand wash, inside out", "Line dry in shade", "Warm iron on reverse"],
    madeToOrder: true,
  },
  {
    slug: "rangreza-madhubani-silk-kurta",
    name: "Rangreza Madhubani Silk Kurta",
    category: "kurtas",
    categoryLabel: "Men's Kurta",
    fabric: "Silk",
    code: "RMSK",
    style: "Bharni",
    motif: "Sun · surya",
    motifIcon: "sun",
    price: 3000,
    accent: "#34406b",
    shortDesc:
      "A festive silk kurta crowned with a radiant Madhubani sun in filled Bharni colour.",
    description:
      "Smooth, lustrous silk meets the Surya motif — rays of fortune — painted across the chest and yoke in saturated Bharni colour. A festive kurta with the quiet confidence of hand-painted Mithila art.",
    highlights: [
      "Lustrous pure silk",
      "Hand-painted Bharni sun motif",
      "Festive, statement piece",
      "Made to your size",
    ],
    care: ["Dry clean recommended", "Warm iron on reverse", "Store on a padded hanger"],
    madeToOrder: true,
  },
  {
    slug: "rangreza-madhubani-tussar-silk-kurta",
    name: "Rangreza Madhubani Tussar Silk Kurta",
    category: "kurtas",
    categoryLabel: "Men's Kurta",
    fabric: "Tussar Silk",
    code: "RMTK",
    style: "Bharni",
    motif: "Tree of Life & fish",
    motifIcon: "tree",
    price: 4500,
    accent: "#9b2226",
    shortDesc:
      "Our finest men's kurta — slubbed Tussar silk, hand-painted with Tree of Life and fish.",
    description:
      "The crown of the kurta line: pure Tussar silk with its signature slubbed sheen, hand-painted with the Tree of Life and auspicious fish in warm Bharni tones. A groom's kurta, a festival kurta, a kurta to keep.",
    highlights: [
      "Pure Tussar silk with natural slub",
      "Hand-painted Bharni Tree-of-Life & fish",
      "Heirloom, occasion-worthy piece",
      "Made to your size",
    ],
    care: ["Dry clean only", "Warm iron on reverse", "Store folded with neem leaves"],
    madeToOrder: true,
    featured: true,
  },

  // ── Dupattas ────────────────────────────────────────────────
  {
    slug: "rangreza-temple-cotton-dupatta",
    name: "Rangreza Temple Cotton Dupatta",
    category: "dupattas",
    categoryLabel: "Dupatta",
    fabric: "Cotton",
    code: "RTCD",
    style: "Kachni",
    motif: "Temple border · lotus",
    motifIcon: "lotus",
    price: 1000,
    accent: "#d29a2e",
    shortDesc:
      "A soft cotton dupatta with a hand-drawn temple border and lotus — everyday Mithila colour.",
    description:
      "A lightweight cotton dupatta edged with the classic temple ('mandir') border and a lotus pond drawn in fine Kachni line-work. The easiest way to wear hand-painted art every single day.",
    highlights: ["Lightweight everyday cotton", "Hand-drawn temple border & lotus", "Turmeric & ink tones"],
    care: ["Gentle hand wash", "Line dry in shade"],
    madeToOrder: true,
  },
  {
    slug: "rangreza-temple-silk-dupatta",
    name: "Rangreza Temple Silk Dupatta",
    category: "dupattas",
    categoryLabel: "Dupatta",
    fabric: "Silk",
    code: "RTSD",
    style: "Bharni",
    motif: "Temple border · lotus",
    motifIcon: "lotus",
    price: 1200,
    accent: "#34406b",
    shortDesc:
      "A sheer silk dupatta with a temple border and lotus, hand-painted in jewel-tone Bharni.",
    description:
      "Sheer silk that catches the light, framed by a temple border and a blooming lotus in saturated Bharni colour. Drapes beautifully over a suit, a saree blouse, or a plain kurta to lift the whole look.",
    highlights: ["Sheer, lightweight silk", "Jewel-tone Bharni temple border", "Drapes beautifully over any outfit"],
    care: ["Dry clean recommended", "Store flat or rolled"],
    madeToOrder: true,
    featured: true,
  },

  // ── Men's Dopta ─────────────────────────────────────────────
  {
    slug: "rangreza-traditional-dopta",
    name: "Rangreza Traditional Dopta",
    category: "dopta",
    categoryLabel: "Men's Dopta",
    fabric: "Silk-Cotton",
    code: "RTDM",
    style: "Godna",
    motif: "Sun · surya",
    motifIcon: "sun",
    price: 400,
    accent: "#34406b",
    shortDesc:
      "The traditional men's dopta in silk-cotton — a hand-painted shoulder drape for festive days.",
    description:
      "The dopta is the men's shoulder drape of Mithila, worn at tilak, pooja and weddings. In an easy silk-cotton blend, its ends are hand-painted with the Surya motif in the dotted 'Godna' style — ready to honour your celebrations.",
    highlights: ["Light silk-cotton blend", "Godna-style painted ends", "Traditional festive drape"],
    care: ["Gentle hand wash", "Line dry in shade"],
    madeToOrder: true,
  },

  // ── Paag ────────────────────────────────────────────────────
  {
    slug: "rangreza-traditional-cotton-paag",
    name: "Rangreza Traditional Cotton Paag",
    category: "paag",
    categoryLabel: "Paag",
    fabric: "Cotton",
    code: "RTCP",
    style: "Godna",
    motif: "Geometric · Godna",
    motifIcon: "sun",
    price: 100,
    accent: "#b0863a",
    shortDesc:
      "The Mithila crown of honour in cotton, hand-painted in Godna geometry for weddings and tilak.",
    description:
      "The paag is Mithila's crown of respect, worn at weddings, tilak and festivals. This cotton paag is hand-painted in the dotted 'Godna' style with bands of geometry and a central sun — light, breathable and ready for the celebration.",
    highlights: ["Traditional Mithila paag form", "Godna-style geometric painting", "Adjustable fit"],
    care: ["Spot clean only", "Store flat"],
    madeToOrder: true,
  },
  {
    slug: "rangreza-traditional-silk-paag",
    name: "Rangreza Traditional Silk Paag",
    category: "paag",
    categoryLabel: "Paag",
    fabric: "Silk",
    code: "RTSP",
    style: "Bharni",
    motif: "Radiant sun · surya",
    motifIcon: "sun",
    price: 150,
    accent: "#7a1a1d",
    shortDesc:
      "The ceremonial silk paag, its central sun filled in rich Bharni colour for the big day.",
    description:
      "For the groom and the guest of honour: a silk paag with a deeper sheen, its central Surya motif filled in rich Bharni colour. The Mithila crown of respect, dressed for the most important occasions.",
    highlights: ["Lustrous silk paag", "Hand-painted Bharni sun", "Adjustable fit"],
    care: ["Spot clean only", "Store flat"],
    madeToOrder: true,
  },

  // ── Bangles ─────────────────────────────────────────────────
  {
    slug: "rangreza-madhubani-lac-bangle",
    name: "Rangreza Madhubani Lac Bangle",
    category: "bangles",
    categoryLabel: "Bangle",
    fabric: "Lac",
    code: "RMLB",
    style: "Godna",
    motif: "Lotus & dots",
    motifIcon: "lotus",
    price: 300,
    priceMax: 2000,
    accent: "#7a1a1d",
    shortDesc:
      "Hand-painted Madhubani lac bangles — wearable folk art, from a single piece to a full stack.",
    description:
      "Traditional lac bangles, each one hand-painted with Madhubani lotus and Godna dot-work. Choose a single statement bangle or build a full festive stack — pricing scales with the number and detail of pieces. Every bangle is painted by hand, so no two are ever quite alike.",
    highlights: [
      "Traditional lac bangles",
      "Hand-painted Madhubani lotus & Godna dots",
      "From a single bangle to a full set",
      "Tell us your wrist size & how many",
    ],
    care: ["Keep away from water & perfume", "Store in a soft pouch", "Avoid knocks & pressure"],
    madeToOrder: true,
    featured: true,
  },
];

/**
 * Every piece now ships with a premium AI-generated product photo at
 * /public/products/<slug>.png. Drop a real photograph into /public/products/
 * and update `images` above to override for any piece.
 */
for (const p of products) {
  p.images ??= [`/products/${p.slug}.png`];
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export const featuredProducts = products.filter((p) => p.featured);

/** Format an INR amount with Indian digit grouping. */
export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

/** Display price — a single value, or a range for pieces like bangles. */
export function priceLabel(product: Product) {
  return product.priceMax
    ? `${formatINR(product.price)} – ${formatINR(product.priceMax)}`
    : formatINR(product.price);
}
