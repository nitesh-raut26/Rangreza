import { Motif, type MotifName } from "@/components/motifs";
import { cn } from "@/lib/cn";

/**
 * Elegant stand-in for a real product photo: a warm, accent-tinted panel with
 * a large hand-drawn motif and a Madhubani-style frame. Swap in real photos by
 * setting `images` on the product.
 */
export function ArtworkPlaceholder({
  motif,
  accent,
  label,
  className,
}: {
  motif: MotifName;
  accent: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        background: `linear-gradient(155deg, ${accent}24, ${accent}0d 55%, var(--color-paper-2))`,
      }}
    >
      <div className="paper-texture absolute inset-0 opacity-70" />

      {/* inner double frame */}
      <div
        className="absolute inset-4 rounded-[inherit] border"
        style={{ borderColor: `${accent}40` }}
      />
      <div
        className="absolute inset-[1.35rem] rounded-[inherit] border border-dashed"
        style={{ borderColor: `${accent}26` }}
      />

      {/* corner motifs */}
      <Motif
        name="fish"
        className="absolute left-3 top-3 size-7 opacity-30"
        style={{ color: accent }}
      />
      <Motif
        name="fish"
        className="absolute right-3 top-3 size-7 -scale-x-100 opacity-30"
        style={{ color: accent }}
      />

      {/* centrepiece */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Motif
          name={motif}
          className="w-[42%] max-w-[150px]"
          style={{ color: accent }}
        />
        {label ? (
          <span
            className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
