"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type DropdownProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
};

/** Custom select — heritage styling, smooth open, keyboard + outside-click. */
export function Dropdown({
  label,
  value,
  onChange,
  options,
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [prevOpen, setPrevOpen] = useState(open);
  const [prevValue, setPrevValue] = useState(value);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();

  if (open !== prevOpen || value !== prevValue) {
    setPrevOpen(open);
    setPrevValue(value);
    if (open) {
      setActive(Math.max(0, options.indexOf(value)));
    }
  }

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const choose = (opt: string) => {
    onChange(opt);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        else setActive((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (open) setActive((i) => Math.max(0, i - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) setOpen(true);
        else choose(options[active]);
        break;
      case "Escape":
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div className={className}>
      {label ? (
        <span id={labelId} className="mb-1.5 block text-sm font-medium text-ink">
          {label}
        </span>
      ) : null}

      <div ref={rootRef} className="relative">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={label ? labelId : undefined}
          className="flex w-full items-center justify-between gap-2 rounded-xl border border-line-strong bg-paper px-4 py-3 text-left text-sm text-ink shadow-sm transition-colors hover:border-madder/40 focus:border-madder focus:outline-none focus:ring-2 focus:ring-madder/15"
        >
          <span className="truncate">{value}</span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-faint transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>

        <div
          role="listbox"
          aria-activedescendant={open ? `${labelId}-opt-${active}` : undefined}
          className={cn(
            "absolute left-0 right-0 z-30 mt-2 origin-top overflow-hidden rounded-xl border border-line bg-paper p-1.5 shadow-lift transition-all duration-200 ease-out",
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "pointer-events-none invisible -translate-y-1 scale-[0.98] opacity-0",
          )}
        >
          {options.map((opt, i) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                id={`${labelId}-opt-${i}`}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={-1}
                onClick={() => choose(opt)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  i === active ? "bg-paper-2 text-ink" : "text-ink-soft",
                  selected && "font-medium",
                )}
              >
                <span className="truncate">{opt}</span>
                {selected ? (
                  <Check className="size-4 shrink-0 text-madder" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
