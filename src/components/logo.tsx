import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * RangrezaMonogram — the hand-painted RT monogram mark.
 *
 * Blue T (indigo/steel) intertwined with crimson R, faithful to the
 * original Madhubani-inspired calligraphic logo painted on fabric.
 */
export function RangrezaMonogram({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
      {...props}
    >
      {/* ── Blue T ────────────────────────────────────────────────────── */}
      <g>
        {/* T crossbar — left arm with gentle flare */}
        <path
          d="M18 26 C20 24 26 22.5 34 22 L54 22"
          stroke="#4a6fa5"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* T crossbar — right arm */}
        <path
          d="M54 22 L78 22"
          stroke="#4a6fa5"
          strokeWidth="5.5"
          strokeLinecap="square"
          fill="none"
        />
        {/* Decorative curl at top-right of crossbar */}
        <path
          d="M78 22 C84 22 90 19 93 13 C96 7 94 2 90 1 C86 0 83 3 84 7 C85 10 88 11 90 9"
          stroke="#4a6fa5"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* T vertical stem */}
        <path
          d="M54 22 L54 118"
          stroke="#4a6fa5"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* T base serifs */}
        <path
          d="M44 118 L64 118"
          stroke="#4a6fa5"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M47 122 L61 122"
          stroke="#4a6fa5"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* ── Red R ────────────────────────────────────────────────────── */}
      <g>
        {/* R vertical stem — slightly offset left, behind T */}
        <path
          d="M36 42 L36 116"
          stroke="#9b2226"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* R bowl — the curved bump (top half) */}
        <path
          d="M36 42 C36 42 40 40 52 40 C65 40 75 46 75 57 C75 68 65 74 52 74 L36 74"
          stroke="#9b2226"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* R leg — the diagonal kick, sweeping elegantly to the right */}
        <path
          d="M52 74 C60 74 68 80 74 90 C80 100 90 114 100 124"
          stroke="#9b2226"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* R inner bowl detail — small counter curve */}
        <path
          d="M42 48 C42 48 50 46 58 49 C65 52 67 58 64 63 C61 68 54 70 48 70"
          stroke="#9b2226"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Small open loop / swash at baseline of R stem */}
        <path
          d="M36 90 C30 90 26 95 28 100 C30 105 36 106 40 103 C44 100 44 94 38 92"
          stroke="#9b2226"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/**
 * Logo — full horizontal lockup used in the site header and footer.
 */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Rangreza Thread — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      {/* Monogram mark */}
      <span className="relative inline-flex size-11 shrink-0 items-center justify-center">
        {/* Subtle fabric-texture backing circle */}
        <span
          className="absolute inset-0 rounded-full bg-paper-2 ring-1 ring-madder/15 transition-all duration-300 group-hover:ring-madder/35 group-hover:shadow-[0_0_0_3px_rgba(155,34,38,0.08)]"
          aria-hidden="true"
        />
        <RangrezaMonogram className="relative size-8 drop-shadow-sm" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-madder">
          Rangreza
        </span>
        <span className="mt-[3px] text-[9.5px] font-semibold uppercase tracking-[0.46em] text-madder/75 transition-colors duration-200 group-hover:text-madder">
          Thread
        </span>
      </span>
    </Link>
  );
}
