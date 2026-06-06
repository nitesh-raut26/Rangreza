import Link from "next/link";
import { Lotus } from "@/components/motifs";
import { cn } from "@/lib/cn";

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
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <span className="inline-flex size-9 items-center justify-center rounded-full bg-madder/10 text-madder ring-1 ring-madder/20">
        <Lotus className="size-6" />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[21px] font-medium leading-[1.15] tracking-tight text-ink">
          Rangreza
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase leading-none tracking-[0.42em] text-madder">
          Thread
        </span>
      </span>
    </Link>
  );
}
