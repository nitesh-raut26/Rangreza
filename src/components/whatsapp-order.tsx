import { waLink, orderMessage } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/ui/brand-icons";
import { cn } from "@/lib/cn";

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-7 text-[15px]",
} as const;

/** WhatsApp "order this piece" button with a prefilled message. */
export function WhatsAppOrder({
  productName,
  category,
  label = "Order on WhatsApp",
  size = "md",
  className,
}: {
  productName: string;
  category?: string;
  label?: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <a
      href={waLink(orderMessage(productName, category))}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-[#1ebe5d] font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#19a852] hover:shadow-lift",
        sizes[size],
        className,
      )}
    >
      <WhatsappGlyph className="size-5" />
      {label}
    </a>
  );
}
