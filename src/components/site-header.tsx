"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { waLink, generalMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-madder"
                  : "text-ink-soft hover:text-madder",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/shop" size="sm">
            Shop the collection
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex size-10 items-center justify-center rounded-full text-ink ring-1 ring-line-strong transition-colors hover:bg-paper-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Menu
            className={cn(
              "size-5 transition-all duration-300 ease-out",
              open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
            )}
          />
          <X
            className={cn(
              "absolute size-5 transition-all duration-300 ease-out",
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
            )}
          />
        </button>
      </div>

      {/* Mobile menu — grid-rows gives a buttery height animation */}
      <div
        className={cn(
          "grid overflow-hidden lg:hidden",
          "transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={cn(
              "flex flex-col gap-1 border-t border-line bg-paper/95 px-5 py-4 backdrop-blur transition-opacity duration-300",
              open ? "opacity-100" : "opacity-0",
            )}
            aria-label="Mobile"
            aria-hidden={!open}
          >
            {site.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${i * 45 + 60}ms` : "0ms" }}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-300 ease-out",
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                  isActive(item.href)
                    ? "bg-paper-2 text-madder"
                    : "text-ink-soft hover:bg-paper-2 hover:text-madder",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href="/shop" className="w-full">
                Shop the collection
              </Button>
              <Button
                href={waLink(generalMessage())}
                external
                variant="whatsapp"
                className="w-full"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
