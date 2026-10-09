import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, whatsappGeneral } from "@/data/copy";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-ink/15 bg-paper text-ink">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-display text-lg leading-none tracking-display">
            Global Mahanshi
          </span>
          <span className="block text-xs tracking-wide">Builders</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={
                  active
                    ? "border-b-2 border-clay pb-0.5 text-sm"
                    : "border-b-2 border-transparent pb-0.5 text-sm text-ink/80"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={whatsappGeneral}
            className="bg-clay px-4 py-2 text-sm text-paper"
          >
            WhatsApp Us
          </a>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close" : "Menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="absolute inset-x-0 top-16 border-b border-paper/20 bg-clay text-paper lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="border-b border-paper/20 py-3 text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={whatsappGeneral} className="py-3 text-lg">
              WhatsApp Us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
