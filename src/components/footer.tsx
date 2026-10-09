import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, FileDown, MessageCircle } from "lucide-react";
import {
  addressLines,
  companyLinks,
  email,
  footerBlurb,
  hours,
  moreLinks,
  phoneDisplay,
  phoneTel,
  profilePdf,
  projectLinks,
  whatsappGeneral,
} from "@/data/copy";

export function Footer() {
  return (
    <footer className="relative bg-[#1F3630] text-[#FDFCEE] pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient background architectural glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-clay/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-moss/20 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Editorial Row */}
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Bengaluru • Established 2026
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-linen leading-tight">
              Building Trust. <br />
              <span className="font-serif italic font-normal text-terracotta">Creating Landmarks.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-linen/75">
              {footerBlurb}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profilePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="sweep inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-linen backdrop-blur-sm transition-all hover:border-terracotta hover:bg-terracotta/20 hover:text-white"
              >
                <FileDown className="size-4 text-terracotta" />
                <span>Company Profile (PDF)</span>
              </a>
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-terracotta hover:text-pine"
              >
                <MessageCircle className="size-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Plotted Communities & Projects */}
            <div>
              <p className="font-display text-lg font-semibold tracking-wide text-linen border-b border-white/10 pb-2">
                Projects
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {projectLinks.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: item.slug }}
                      className="ln text-linen/70 transition-colors hover:text-terracotta"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {moreLinks.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ln inline-flex items-center gap-1 text-linen/70 transition-colors hover:text-terracotta"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="size-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="ln text-linen/70 transition-colors hover:text-terracotta"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio / Company */}
            <div>
              <p className="font-display text-lg font-semibold tracking-wide text-linen border-b border-white/10 pb-2">
                Company
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="ln text-linen/70 transition-colors hover:text-terracotta"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office & Contact */}
            <div>
              <p className="font-display text-lg font-semibold tracking-wide text-linen border-b border-white/10 pb-2">
                Office &amp; Visit
              </p>
              <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-linen/75">
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 shrink-0 mt-1 text-terracotta" />
                  <div>
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Phone className="size-4 shrink-0 text-terracotta" />
                  <a href={phoneTel} className="ln hover:text-terracotta">
                    {phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-terracotta" />
                  <a href={`mailto:${email}`} className="ln hover:text-terracotta truncate">
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs text-linen/60">
                  <Clock className="size-3.5 shrink-0 text-terracotta" />
                  <span>{hours}</span>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-linen/60 sm:flex-row">
          <p>© 2026 Global Mahanshi Builders. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-linen">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-linen">Terms &amp; Conditions</Link>
            <Link to="/contact" className="hover:text-linen">Schedule Site Visit</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp pill button for visitors */}
      <a
        href={whatsappGeneral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]"
      >
        <span className="dot size-2 rounded-full bg-white"></span>
        <MessageCircle className="size-5" />
        <span className="hidden text-xs font-bold tracking-wider uppercase sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </footer>
  );
}
