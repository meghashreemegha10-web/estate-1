import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import {
  beforeHandover,
  calculatorNote,
  inspected,
  materials,
  packageNote,
  packages,
  qaCycle,
  serviceFaqs,
  services,
  stages,
  warrantyNote,
  whatsappVisit,
} from "@/data/copy";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Our Services | Architecture, Plot Development & Construction in Bengaluru | Global Mahanshi Builders",
      },
    ],
  }),
  component: ServicesPage,
});

function inr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ServicesPage() {
  const [area, setArea] = useState(1200);
  const [packIndex, setPackIndex] = useState(0);
  const pack = packages[packIndex];
  const estimate = useMemo(() => Math.max(0, area) * pack.rate, [area, pack.rate]);
  const quoteHref = `https://wa.me/919632734110?text=${encodeURIComponent(
    `Hi, I used the cost calculator for ${area} sq.ft (${pack.name}) — estimated ${inr(estimate)}. Please share a formal quotation.`,
  )}`;

  return (
    <main>
      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">What we do</p>
          <h1 className="mt-3 max-w-4xl font-display text-6xl leading-display tracking-display sm:text-7xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            From the first floor plan to the final coat of paint — planning, residential layouts and
            home construction, handled end-to-end by one company.
          </p>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Four services, one company</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display">What We Offer</h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Focused on what we do best — legally secure residential layouts and quality home
            construction, from planning through to handover.
          </p>
          <ol className="mt-12">
            {services.map((service) => (
              <li key={service.title} className="grid gap-4 border-t border-paper/30 py-8 lg:grid-cols-12">
                <span className="font-display text-5xl lg:col-span-2">{service.n}</span>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-3xl">{service.title}</h3>
                  <p className="mt-3 leading-relaxed">{service.body}</p>
                </div>
                <ul className="space-y-2 lg:col-span-5">
                  {service.points.map((point) => (
                    <li key={point} className="border-t border-paper/25 pt-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sage text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">House & villa construction</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
            House Construction, Done with Discipline
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Independent houses and villas across South Bengaluru — with written specifications,
            branded materials and stage-wise transparency.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {packages.map((item) => (
              <article key={item.name}>
                <h3 className="font-display text-3xl">{item.name}</h3>
                <p className="mt-3 font-display text-6xl leading-none">{item.price}</p>
                <p className="mt-3 text-sm">{item.note}</p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="border-t border-paper/25 pt-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed">{packageNote}</p>
        </div>
      </section>

      <section className="bg-ochre text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm">Plan your budget</p>
            <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
              Construction Cost Calculator
            </h2>
            <p className="mt-4 leading-relaxed">
              Get an instant illustrative estimate, then request an exact written quotation from our
              team.
            </p>
            <label className="mt-8 grid gap-2 text-sm">
              Built-up area (sq.ft)
              <input
                type="number"
                min={1}
                value={area}
                onChange={(event) => setArea(Number(event.target.value))}
                className="border border-ink/30 bg-transparent px-3 py-3 text-lg"
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm">
              Package
              <select
                value={packIndex}
                onChange={(event) => setPackIndex(Number(event.target.value))}
                className="border border-ink/30 bg-transparent px-3 py-3"
              >
                {packages.map((item, index) => (
                  <option key={item.name} value={index} className="text-ink">
                    {item.name} — {item.price}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm">Estimated cost</p>
            <p className="font-display text-6xl leading-none">{inr(estimate)}</p>
            <p className="mt-3">
              {area || 0} sq.ft × {pack.price}
            </p>
            <p className="mt-4 leading-relaxed">{calculatorNote}</p>
            <a href={quoteHref} className="mt-6 inline-block bg-ink px-5 py-3 text-center text-paper">
              Get an Exact Quotation
            </a>
          </div>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">What goes into your home</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
            Materials & Brands
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Construction materials follow the standard brands defined in our official specification
            document. Equivalent brands of similar quality may be used when necessary.
          </p>
          <dl className="mt-10">
            {materials.map(([name, detail]) => (
              <div key={name} className="grid gap-1 border-t border-paper/30 py-4 lg:grid-cols-12">
                <dt className="font-display text-2xl lg:col-span-3">{name}</dt>
                <dd className="lg:col-span-9">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-sage text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Built to last</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
            Quality Assurance & Warranty
          </h2>
          <p className="mt-4 max-w-2xl">
            Quality checks are carried out at every major construction stage — not only at handover.
          </p>
          <ol className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-display text-2xl">
            {qaCycle.map((step, index) => (
              <li key={step}>
                0{index + 1} {step}
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl">Inspected at every stage</h3>
              <ul className="mt-4 columns-2 gap-8">
                {inspected.map((item) => (
                  <li key={item} className="border-t border-paper/25 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Before handover, we verify</h3>
              <ul className="mt-4">
                {beforeHandover.map((item) => (
                  <li key={item} className="border-t border-paper/25 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed">{warrantyNote}</p>
        </div>
      </section>

      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">How we work</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
            Stage-wise Construction Process
          </h2>
          <p className="mt-4 max-w-2xl">
            You pay as your home progresses — each stage is billed only after the work is done.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <li key={stage} className="border-t border-ink/25 pt-3">
                <span className="font-display text-3xl">0{index + 1}</span>
                <p className="mt-2">{stage}</p>
              </li>
            ))}
          </ol>
          <h2 className="mt-16 font-display text-4xl">Service FAQs</h2>
          <dl className="mt-6">
            {serviceFaqs.map((item) => (
              <div key={item.q} className="border-t border-ink/20 py-5">
                <dt className="font-display text-2xl">{item.q}</dt>
                <dd className="mt-2 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm">Get an estimate</p>
            <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
              Request a Quotation
            </h2>
            <p className="mt-4 leading-relaxed">
              Tell us your plot details and requirements — we will prepare a written quotation with
              full specifications.
            </p>
            <h3 className="mt-12 font-display text-4xl leading-display">Ready to build your home?</h3>
            <p className="mt-4">
              Get a written quotation with complete specifications — no verbal promises, ever.
            </p>
            <a href={whatsappVisit} className="mt-6 inline-block border-b border-paper pb-0.5">
              WhatsApp Us
            </a>
          </div>
          <div>
            <p className="mb-4">Get My Quotation</p>
            <EnquiryForm tone="paper" />
          </div>
        </div>
      </section>
    </main>
  );
}
