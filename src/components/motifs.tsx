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

const registry = { fish: Fish, lotus: Lotus, peacock: Peacock, sun: Sun, tree: Tree };
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
