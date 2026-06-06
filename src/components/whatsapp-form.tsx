"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsappGlyph } from "@/components/ui/brand-icons";
import { Dropdown } from "@/components/ui/dropdown";
import { cn } from "@/lib/cn";

const field =
  "w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink shadow-sm transition-colors placeholder:text-faint focus:border-madder focus:outline-none focus:ring-2 focus:ring-madder/15";

const garments = ["Saree", "Dupatta / Stole", "Kurta", "Paag", "Dhoti & Angvastra", "Other / Not sure"];
const occasions = ["Wedding", "Festival / Puja", "Gift", "Everyday wear", "Other"];

export function WhatsAppForm({ variant }: { variant: "custom" | "contact" }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    garment: garments[0],
    occasion: occasions[0],
    motif: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines =
      variant === "custom"
        ? [
            "Namaste Rangreza Thread! 🙏 I'd like a custom piece.",
            "",
            `Name: ${form.name}`,
            `Garment: ${form.garment}`,
            `Occasion: ${form.occasion}`,
            `Motif / colours: ${form.motif}`,
            "",
            `Details: ${form.message}`,
          ]
        : [
            "Namaste Rangreza Thread! 🙏",
            "",
            `Name: ${form.name}`,
            form.email ? `Email: ${form.email}` : "",
            "",
            form.message,
          ];
    const text = encodeURIComponent(lines.filter(Boolean).join("\n"));
    window.location.href = `https://wa.me/${site.whatsapp}?text=${text}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-paper p-10 text-center shadow-soft">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-leaf/10 text-leaf">
          <Check className="size-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 font-display text-xl font-medium text-ink">
          Opening WhatsApp…
        </h3>
        <p className="mt-2 max-w-sm text-pretty text-muted">
          If nothing opened, message us directly at{" "}
          <span className="font-medium text-madder">{site.phoneDisplay}</span>.
          We usually reply the same day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-muted hover:text-madder"
        >
          ← Back to the form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
            <input
              required
              value={form.name}
              onChange={(e) => set("name")(e.target.value)}
              placeholder="Your name"
              className={field}
            />
          </label>
          {variant === "contact" ? (
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Email <span className="text-faint">(optional)</span>
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
                placeholder="you@email.com"
                className={field}
              />
            </label>
          ) : (
            <Dropdown
              label="Garment"
              value={form.garment}
              onChange={set("garment")}
              options={garments}
            />
          )}
        </div>

        {variant === "custom" ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <Dropdown
              label="Occasion"
              value={form.occasion}
              onChange={set("occasion")}
              options={occasions}
            />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Motif &amp; colours
              </span>
              <input
                value={form.motif}
                onChange={(e) => set("motif")(e.target.value)}
                placeholder="e.g. peacocks in indigo & madder"
                className={field}
              />
            </label>
          </div>
        ) : null}

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            {variant === "custom" ? "Anything else?" : "Message"}
          </span>
          <textarea
            required={variant === "contact"}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            rows={5}
            placeholder={
              variant === "custom"
                ? "Sizes, deadline, budget, a reference you love…"
                : "How can we help?"
            }
            className={cn(field, "resize-y")}
          />
        </label>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1ebe5d] px-7 text-[15px] font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#19a852] hover:shadow-lift"
        >
          <WhatsappGlyph className="size-5" />
          Send on WhatsApp
        </button>
        <p className="text-center text-xs text-faint">
          This opens WhatsApp with your message ready to send.
        </p>
      </div>
    </form>
  );
}
