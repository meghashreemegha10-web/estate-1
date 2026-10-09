import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { nav, whatsappGeneral, phoneTel, phoneDisplay } from "@/data/copy";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-pine/10 bg-[#FFFEF2]/85 backdrop-blur-md text-ink transition-all">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        {/* Brand Logo */}
        <Link to="/" className="group flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-clay">
            Global Mahanshi
          </span>
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-pine/70">
            Builders &amp; Architects
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`ln text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-clay font-semibold" : "text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-5 sm:flex">
          <div className="hidden items-center gap-2 rounded-full border border-pine/15 bg-sand/60 px-3.5 py-1.5 text-xs font-medium text-pine/90 xl:flex">
            <span className="dot size-2 rounded-full bg-emerald-600"></span>
            <span>Open for Site Visits</span>
          </div>

          <a
            href={whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="sweep group relative inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-linen shadow-sm transition-all duration-300 hover:bg-clay hover:shadow-md"
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-pine/15 bg-sand/40 text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close" : "Menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open ? (
        <div className="absolute inset-x-0 top-20 border-b border-pine/15 bg-[#1F3630] text-linen shadow-2xl lg:hidden">
          <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl tracking-wide transition-colors hover:text-terracotta"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="size-4 opacity-70" />
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-clay py-3.5 text-sm font-semibold tracking-wider uppercase text-white shadow-lg"
              >
                <MessageSquare className="size-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={phoneTel}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-sm font-medium text-white/90"
              >
                <Phone className="size-4 text-terracotta" />
                <span>Call {phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
