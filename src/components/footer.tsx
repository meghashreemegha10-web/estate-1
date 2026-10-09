import { Link } from "@tanstack/react-router";
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
} from "@/data/copy";

export function Footer() {
  return (
    <footer className="bg-ochre text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-3xl leading-display tracking-display">
            Global Mahanshi Builders
          </p>
          <p className="mt-3 font-display text-xl">Building Trust. Creating Landmarks.</p>
          <p className="mt-4 max-w-sm leading-relaxed">{footerBlurb}</p>
          <a href={profilePdf} className="mt-5 inline-block border-b border-ink pb-0.5">
            Download Company Profile
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm">Projects</p>
          <ul className="mt-3 space-y-2">
            {projectLinks.map((item) => (
              <li key={item.slug}>
                <Link to="/projects/$slug" params={{ slug: item.slug }}>
                  {item.label}
                </Link>
              </li>
            ))}
            {moreLinks.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <Link to={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm">Company</p>
          <ul className="mt-3 space-y-2">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm">Contact</p>
          <address className="mt-3 space-y-1 not-italic leading-relaxed">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-3">
            <a href={phoneTel}>{phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="mt-3">{hours}</p>
        </div>
      </div>
      <div className="border-t border-ink/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm">
          <p>© 2026 Global Mahanshi Builders . All rights reserved.</p>
          <p className="flex flex-wrap gap-4">
            <a href="/extracted-content.md">extracted-content.md</a>
            <a href={phoneTel}>Call Now</a>
            <a href="https://wa.me/919632734110">WhatsApp</a>
            <Link to="/contact">Site Visit</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
