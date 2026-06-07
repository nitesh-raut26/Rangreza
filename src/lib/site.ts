/**
 * Rangreza Thread — brand, contact and navigation config.
 *
 * Real contact details for Archna Jha / Rangreza Thread.
 *     Still placeholders: the Instagram handle.
 *     Everything on the site (order buttons, footer, contact) reads from here.
 */
export const site = {
  name: "Rangreza Thread",
  nameDeva: "रंगरेज़ा",
  legalName: "Rangreza Thread",
  // Production URL (used for canonical / OG / sitemap).
  url: "https://www.rangrezas.com",
  tagline: "Hand-painted Mithila art, woven into every thread.",
  description:
    "Rangreza Thread brings the centuries-old folk art of Mithila to life on handwoven sarees, dupattas, kurtas, paag and dhotis — each piece painted by hand, no two alike.",
  // ── Contact ──────────────────────────────────────────────
  whatsapp: "919205711828", // digits only, for wa.me links
  phoneDisplay: "+91 92057 11828",
  email: "jhaa4927@gmail.com",
  location: "Delhi, India · rooted in Mithilanchal, Bihar",
  founderName: "Archna Jha",
  founderLine: "Archna Jha · Founder, Rangreza Thread",
  socials: {
    // Real Facebook page (from the client):
    facebook: "https://www.facebook.com/profile.php?id=61571550842870",
    instagram: "https://www.instagram.com/", // REPLACE with real handle
    whatsapp: "https://wa.me/919205711828",
    email: "mailto:jhaa4927@gmail.com",
  },
  nav: [
    { label: "Shop", href: "/shop" },
    { label: "The Art", href: "/the-art" },
    { label: "Our Story", href: "/about" },
    { label: "Custom Order", href: "/custom" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
