import { site } from "./site";

/** Build a wa.me link with a prefilled, URL-encoded message. */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Prefilled message for ordering a specific piece. */
export function orderMessage(productName: string, category?: string) {
  return `Namaste Rangreza Thread! 🙏 I'd love to order "${productName}"${
    category ? ` (${category})` : ""
  }. Could you share availability, price and how to proceed?`;
}

/** Prefilled message for a custom / commissioned piece. */
export function customMessage() {
  return "Namaste Rangreza Thread! 🙏 I'd like to commission a custom hand-painted piece. Here's what I have in mind:";
}

/** Generic enquiry. */
export function generalMessage() {
  return "Namaste Rangreza Thread! 🙏 I came across your hand-painted Mithila collection and would love to know more.";
}
