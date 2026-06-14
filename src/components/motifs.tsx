import { cn } from "@/lib/cn";

type MotifProps = React.SVGProps<SVGSVGElement>;

const common = {
  viewBox: "0 0 100 100",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// ── Madhubani motifs (kept for decorative use) ────────────────────────────────

/** Machhli — the Mithila fish, a blessing of prosperity. */
export function Fish(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      <path d="M18 50 C30 30 60 30 74 50 C60 70 30 70 18 50 Z" />
      <path d="M74 50 L92 38 L85 50 L92 62 Z" />
      <path d="M40 32 C50 24 60 26 64 33" />
      <path d="M40 68 C50 76 60 74 64 67" />
      <path d="M44 36 C48 50 48 50 44 64" />
      <path d="M54 40 C58 50 58 50 54 60" />
      <path d="M64 43 C67 50 67 50 64 57" />
      <circle cx="33" cy="46" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Kamal — the lotus, purity and creation. */
export function Lotus(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      <path d="M50 16 C44 34 44 48 50 60 C56 48 56 34 50 16 Z" />
      <path d="M34 22 C34 42 40 54 50 60 C46 46 42 32 34 22 Z" />
      <path d="M66 22 C66 42 60 54 50 60 C54 46 58 32 66 22 Z" />
      <path d="M20 34 C28 50 38 57 50 60 C40 49 28 42 20 34 Z" />
      <path d="M80 34 C72 50 62 57 50 60 C60 49 72 42 80 34 Z" />
      <path d="M28 66 C38 72 62 72 72 66" />
      <path d="M22 74 C38 83 62 83 78 74" />
    </svg>
  );
}

/** Mor — the peacock, love and the monsoon. */
export function Peacock(props: MotifProps) {
  const feathers = Array.from({ length: 5 }, (_, i) => {
    const a = -Math.PI * 0.92 + (i / 4) * Math.PI * 0.62;
    const ox = 46;
    const oy = 56;
    const len = 33;
    const ex = ox + Math.cos(a) * len;
    const ey = oy + Math.sin(a) * len;
    const mx = (ox + ex) / 2 + Math.cos(a + Math.PI / 2) * 4;
    const my = (oy + ey) / 2 + Math.sin(a + Math.PI / 2) * 4;
    return (
      <g key={i}>
        <path d={`M${ox} ${oy} Q ${mx} ${my} ${ex} ${ey}`} />
        <circle cx={ex} cy={ey} r="3.4" />
        <circle cx={ex} cy={ey} r="1.2" fill="currentColor" stroke="none" />
      </g>
    );
  });
  return (
    <svg {...common} {...props}>
      <ellipse cx="44" cy="64" rx="13" ry="9" />
      <path d="M52 58 C58 48 58 38 54 32" />
      <circle cx="55" cy="29" r="4" />
      <path d="M58 27 L64 25" />
      <path d="M55 25 L55 20 M52 25 L50 21 M58 25 L60 21" />
      {feathers}
    </svg>
  );
}

/** Surya — the sun, rays of fortune. */
export function Sun(props: MotifProps) {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    const r1 = 17;
    const r2 = i % 2 ? 31 : 25;
    return (
      <line
        key={i}
        x1={50 + Math.cos(a) * r1}
        y1={50 + Math.sin(a) * r1}
        x2={50 + Math.cos(a) * r2}
        y2={50 + Math.sin(a) * r2}
      />
    );
  });
  return (
    <svg {...common} {...props}>
      <circle cx="50" cy="50" r="15" />
      <circle cx="50" cy="50" r="8" />
      {rays}
    </svg>
  );
}

/** Tree of Life — the Kohbar, union and growth. */
export function Tree(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      <path d="M50 84 L50 34" />
      <path d="M44 84 L56 84 M45 84 L47 90 L53 90 L55 84" />
      <path d="M50 62 C41 58 35 52 31 46" />
      <path d="M50 62 C59 58 65 52 69 46" />
      <path d="M50 52 C43 48 39 42 37 37" />
      <path d="M50 52 C57 48 61 42 63 37" />
      <circle cx="31" cy="46" r="3.2" />
      <circle cx="69" cy="46" r="3.2" />
      <circle cx="37" cy="36" r="3.2" />
      <circle cx="63" cy="36" r="3.2" />
      <circle cx="50" cy="30" r="4.5" />
      <circle cx="42" cy="28" r="2.6" />
      <circle cx="58" cy="28" r="2.6" />
    </svg>
  );
}

// ── Category icons — drawn to represent actual garments ───────────────────────

/**
 * Saree — flowing six-yard drape with a pleated pallu falling from the shoulder.
 * Shows the classic nivi-style silhouette: fitted bodice, gathered pleats at
 * front and a decorative pallu edge.
 */
export function SareeIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* body / skirt drape */}
      <path d="M34 40 C32 55 30 70 31 86 L69 86 C70 70 68 55 66 40 Z" />
      {/* pleats at centre front */}
      <path d="M42 60 L42 86" strokeWidth={1.4} strokeOpacity={0.6} />
      <path d="M48 58 L48 86" strokeWidth={1.4} strokeOpacity={0.6} />
      <path d="M54 58 L54 86" strokeWidth={1.4} strokeOpacity={0.6} />
      <path d="M60 60 L60 86" strokeWidth={1.4} strokeOpacity={0.6} />
      {/* waist band */}
      <path d="M33 54 Q50 50 67 54" />
      {/* blouse / torso */}
      <path d="M38 26 C36 32 34 38 34 40 L66 40 C66 38 64 32 62 26 Z" />
      {/* neckline */}
      <path d="M42 26 Q50 30 58 26" />
      {/* pallu over shoulder — diagonal drape */}
      <path d="M58 26 C64 22 72 20 78 22 C76 28 70 34 62 38" strokeWidth={2.4} />
      {/* pallu decorative border */}
      <path d="M76 22 C74 26 72 30 70 34" strokeWidth={1.3} strokeOpacity={0.55} />
      {/* pallu end tassel hint */}
      <path d="M78 22 L82 18 M80 23 L84 20 M82 25 L86 23" strokeWidth={1.2} strokeOpacity={0.45} />
      {/* border dots on hem — Madhubani detail */}
      <circle cx="37" cy="84" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="50" cy="84" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="63" cy="84" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Suit — unstitched salwar-suit set laid flat: kameez (tunic) on top,
 * dupatta draped across, salwar (trousers) below.
 */
export function SuitIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* kameez outline — rounded kurta shape */}
      <path d="M32 20 L24 32 L28 34 L28 62 L72 62 L72 34 L76 32 L68 20 Z" />
      {/* neckline V */}
      <path d="M40 20 Q50 30 60 20" />
      {/* sleeve seams */}
      <path d="M32 20 L28 34" />
      <path d="M68 20 L72 34" />
      {/* yoke decorative band */}
      <path d="M36 32 Q50 28 64 32" strokeWidth={1.4} />
      {/* kameez centre-front split */}
      <path d="M50 30 L50 62" strokeWidth={1.3} strokeOpacity={0.5} />
      {/* dupatta — diagonal scarf across */}
      <path d="M22 44 C34 38 50 40 66 36 C70 48 58 54 42 58 Z"
        strokeWidth={1.6} strokeOpacity={0.55} />
      {/* salwar — wide-leg trousers */}
      <path d="M33 68 C32 76 30 86 28 92 L44 92 C46 82 48 72 50 68" />
      <path d="M67 68 C68 76 70 86 72 92 L56 92 C54 82 52 72 50 68" />
      <path d="M30 68 L70 68" />
      {/* salwar waistband */}
      <path d="M30 64 Q50 61 70 64 L70 68 L30 68 Z" />
    </svg>
  );
}

/**
 * Kurta — men's long kurta with mandarin collar, placket and side slits.
 * Drawn front-on as a flat lay.
 */
export function KurtaIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* body */}
      <path d="M30 28 L22 46 L28 48 L28 88 L72 88 L72 48 L78 46 L70 28 Z" />
      {/* mandarin collar */}
      <rect x="43" y="18" width="14" height="9" rx="3" />
      {/* neck opening */}
      <path d="M43 27 L43 38 Q50 42 57 38 L57 27" />
      {/* sleeve to cuff */}
      <path d="M30 28 L22 46 L28 48" />
      <path d="M70 28 L78 46 L72 48" />
      {/* cuffs */}
      <path d="M22 44 Q22 50 28 50" />
      <path d="M78 44 Q78 50 72 50" />
      {/* centre placket */}
      <path d="M50 38 L50 88" strokeWidth={1.3} />
      {/* placket buttons */}
      <circle cx="50" cy="48" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="50" cy="58" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="50" cy="68" r="1.5" fill="currentColor" stroke="none" />
      {/* side slits */}
      <path d="M28 80 L28 88" strokeWidth={1.4} />
      <path d="M72 80 L72 88" strokeWidth={1.4} />
      {/* yoke decorative band — Madhubani painted area */}
      <path d="M36 40 Q50 36 64 40" strokeWidth={1.5} strokeOpacity={0.6} />
      {/* hem border dot row */}
      <circle cx="38" cy="86" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="50" cy="86" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="62" cy="86" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Dupatta — long scarf shown draped and floating, with decorative border ends.
 */
export function DupattaIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* main fabric — gentle S-curve drape */}
      <path d="M14 34 C24 28 36 32 46 28 C56 24 66 30 78 24 C80 30 76 36 66 40 C56 44 44 40 34 44 C24 48 16 44 14 50 C12 56 16 62 26 66 C36 70 48 66 58 70 C68 74 76 70 82 74" />
      {/* fabric folds / sheer depth */}
      <path d="M16 38 C26 32 38 36 48 32" strokeWidth={1.2} strokeOpacity={0.45} />
      <path d="M18 46 C28 50 38 46 48 50" strokeWidth={1.2} strokeOpacity={0.45} />
      {/* left end border panel */}
      <rect x="10" y="30" width="7" height="24" rx="2" strokeWidth={1.6} />
      <path d="M12 34 L16 34 M12 38 L16 38 M12 42 L16 42 M12 46 L16 46 M12 50 L16 50"
        strokeWidth={1} strokeOpacity={0.5} />
      {/* right end border panel */}
      <rect x="79" y="66" width="7" height="14" rx="2" strokeWidth={1.6} />
      <path d="M81 69 L85 69 M81 72 L85 72 M81 75 L85 75"
        strokeWidth={1} strokeOpacity={0.5} />
      {/* corner tassels left */}
      <path d="M11 54 L9 62 M14 54 L12 62 M17 54 L15 62" strokeWidth={1.4} strokeOpacity={0.6} />
      {/* corner tassels right */}
      <path d="M80 80 L78 88 M83 80 L81 88 M86 80 L84 88" strokeWidth={1.4} strokeOpacity={0.6} />
      {/* lotus dot embellishment mid-fabric */}
      <circle cx="50" cy="48" r="2" fill="currentColor" stroke="none" />
      <circle cx="40" cy="44" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="52" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Dopta — men's traditional shoulder drape (angvastra), shown as a long
 * rectangular cloth draped over one shoulder with painted end panels.
 */
export function DoptaIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* main cloth body */}
      <path d="M20 20 L20 80 C20 82 22 84 24 84 L76 84 C78 84 80 82 80 80 L80 20 C80 18 78 16 76 16 L24 16 C22 16 20 18 20 20 Z" />
      {/* fabric drape crease — centre fold */}
      <path d="M50 16 L50 84" strokeWidth={1.2} strokeOpacity={0.35} />
      {/* top decorative painted border panel */}
      <path d="M20 26 L80 26" />
      <path d="M20 32 L80 32" strokeWidth={1.2} strokeOpacity={0.5} />
      {/* top border motif dots */}
      <circle cx="32" cy="29" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="42" cy="29" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="50" cy="29" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="58" cy="29" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="68" cy="29" r="1.8" fill="currentColor" stroke="none" />
      {/* central sun motif — Surya Godna style */}
      <circle cx="50" cy="53" r="11" />
      <circle cx="50" cy="53" r="6" />
      <line x1="50" y1="38" x2="50" y2="42" />
      <line x1="50" y1="64" x2="50" y2="68" />
      <line x1="35" y1="53" x2="39" y2="53" />
      <line x1="61" y1="53" x2="65" y2="53" />
      <line x1="39.4" y1="42.4" x2="42.2" y2="45.2" />
      <line x1="57.8" y1="60.8" x2="60.6" y2="63.6" />
      <line x1="60.6" y1="42.4" x2="57.8" y2="45.2" />
      <line x1="42.2" y1="60.8" x2="39.4" y2="63.6" />
      {/* bottom painted border panel */}
      <path d="M20 74 L80 74" strokeWidth={1.2} strokeOpacity={0.5} />
      <path d="M20 78 L80 78" />
      {/* bottom border motif dots */}
      <circle cx="32" cy="76" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="42" cy="76" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="50" cy="76" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="58" cy="76" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="68" cy="76" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Paag — the traditional Mithila turban / headpiece.
 * Drawn as a tied turban viewed from the front: layered folds, a fan pleat
 * at the top and a decorative front panel with the Bharni sun.
 */
export function PaagIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* outer turban band — main wrap */}
      <path d="M18 62 C18 44 28 28 50 24 C72 28 82 44 82 62 C82 70 78 76 70 80 L30 80 C22 76 18 70 18 62 Z" />
      {/* inner layer fold */}
      <path d="M24 62 C24 48 32 34 50 30 C68 34 76 48 76 62" strokeWidth={1.4} strokeOpacity={0.55} />
      {/* wrap layers / horizontal fold lines */}
      <path d="M22 58 Q50 52 78 58" strokeWidth={1.2} strokeOpacity={0.45} />
      <path d="M20 64 Q50 58 80 64" strokeWidth={1.2} strokeOpacity={0.45} />
      <path d="M21 70 Q50 64 79 70" strokeWidth={1.2} strokeOpacity={0.45} />
      {/* fan / kalgi pleat at top — peacock-feather spread */}
      <path d="M50 24 L44 10 M50 24 L50 8 M50 24 L56 10" strokeWidth={1.6} />
      <path d="M50 24 L40 12 M50 24 L60 12" strokeWidth={1.3} strokeOpacity={0.6} />
      <circle cx="44" cy="10" r="2.2" />
      <circle cx="50" cy="8" r="2.2" />
      <circle cx="56" cy="10" r="2.2" />
      <circle cx="40" cy="12" r="1.6" />
      <circle cx="60" cy="12" r="1.6" />
      {/* front shield / patti */}
      <path d="M38 54 L38 76 Q50 80 62 76 L62 54 Q50 50 38 54 Z" />
      {/* sun motif on front patti */}
      <circle cx="50" cy="64" r="7" />
      <circle cx="50" cy="64" r="3.5" fill="currentColor" stroke="none" />
      {/* bottom chin-band / base */}
      <path d="M28 80 Q50 86 72 80" />
    </svg>
  );
}

/**
 * Bangle — traditional lac bangles shown as a stacked set, viewed at a slight
 * angle so depth is readable. Front bangle detailed with lotus dot-work.
 */
export function BangleIcon(props: MotifProps) {
  return (
    <svg {...common} {...props}>
      {/* stack shadow / depth — back bangles */}
      <ellipse cx="50" cy="36" rx="28" ry="10" strokeOpacity={0.3} strokeWidth={1.4} />
      <ellipse cx="50" cy="44" rx="28" ry="10" strokeOpacity={0.45} strokeWidth={1.6} />
      <ellipse cx="50" cy="52" rx="28" ry="10" strokeOpacity={0.6} strokeWidth={1.8} />
      {/* front bangle — full detail */}
      <ellipse cx="50" cy="60" rx="28" ry="10" />
      {/* inner hole of front bangle */}
      <ellipse cx="50" cy="60" rx="18" ry="6.2" />
      {/* front bangle outer rim top highlight */}
      <path d="M22 58 Q50 48 78 58" strokeWidth={1.2} strokeOpacity={0.5} />
      {/* lotus dot-work painted pattern on front bangle */}
      <circle cx="50" cy="57" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="38" cy="56" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="62" cy="56" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="32" cy="60" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="68" cy="60" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="36" cy="64" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="64" cy="64" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="50" cy="66" r="1.4" fill="currentColor" stroke="none" />
      {/* petal arcs on front bangle */}
      <path d="M42 54 Q50 50 58 54" strokeWidth={1.2} strokeOpacity={0.6} />
      <path d="M42 66 Q50 70 58 66" strokeWidth={1.2} strokeOpacity={0.6} />
      {/* bottom bangle edge */}
      <path d="M22 62 Q50 72 78 62" strokeWidth={1.2} strokeOpacity={0.4} />
    </svg>
  );
}

// ── Registry ──────────────────────────────────────────────────────────────────

const registry = {
  // Madhubani motifs
  fish: Fish,
  lotus: Lotus,
  peacock: Peacock,
  sun: Sun,
  tree: Tree,
  // Category icons
  saree: SareeIcon,
  suit: SuitIcon,
  kurta: KurtaIcon,
  dupatta: DupattaIcon,
  dopta: DoptaIcon,
  paag: PaagIcon,
  bangle: BangleIcon,
};

export type MotifName = keyof typeof registry;

export function Motif({ name, ...props }: { name: MotifName } & MotifProps) {
  const Cmp = registry[name] ?? Lotus;
  return <Cmp {...props} />;
}

/** Decorative divider with a centred motif between two faded rules. */
export function MotifDivider({
  name = "lotus",
  className,
}: {
  name?: MotifName;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-line-strong sm:w-20" />
      <Motif name={name} className="size-6 text-madder/70" />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-line-strong sm:w-20" />
    </div>
  );
}
