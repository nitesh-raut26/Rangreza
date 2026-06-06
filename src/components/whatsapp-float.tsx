import { waLink, generalMessage } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/ui/brand-icons";

/** Floating WhatsApp chat button shown on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink(generalMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rangreza Thread on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center justify-end"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-ink/90 px-3.5 py-2 text-sm font-medium text-paper opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="flex size-12 items-center justify-center rounded-full bg-[#1ebe5d] text-white shadow-lift ring-[3px] ring-[#1ebe5d]/15 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <WhatsappGlyph className="size-6" />
      </span>
    </a>
  );
}
