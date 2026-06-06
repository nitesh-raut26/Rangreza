import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ink" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-madder text-paper shadow-soft hover:bg-madder-deep hover:-translate-y-0.5 hover:shadow-lift",
  ink: "bg-ink text-paper shadow-soft hover:-translate-y-0.5 hover:bg-ink-soft",
  outline:
    "border border-ink/25 text-ink hover:border-madder hover:text-madder hover:-translate-y-0.5",
  ghost: "text-ink hover:bg-paper-2",
  whatsapp:
    "bg-[#1ebe5d] text-white shadow-soft hover:bg-[#19a852] hover:-translate-y-0.5 hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-7 text-[15px]",
};

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
};

type ButtonProps = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
