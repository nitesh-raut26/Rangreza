import { cn } from "@/lib/cn";

const tones = {
  paper: "bg-paper-2 text-muted ring-line-strong",
  madder: "bg-madder/10 text-madder ring-madder/20",
  leaf: "bg-leaf/10 text-leaf ring-leaf/25",
  ink: "bg-ink/5 text-ink-soft ring-ink/15",
} as const;

export function Badge({
  children,
  tone = "paper",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
