import { createFileRoute, Link } from "@tanstack/react-router";
import { generalFaqs, projects, whatsappGeneral } from "@/data/copy";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [{ title: "Frequently Asked Questions | Global Mahanshi Builders" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const sai = projects[0];
  const prasanthi = projects[1];
  return (
    <main>
      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Have questions?</p>
          <h1 className="mt-3 font-display text-6xl leading-display tracking-display">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl text-lg">
            Can't find what you're looking for? Message us on WhatsApp or send an enquiry —
            we typically respond the same working day.
          </p>
        </div>
      </section>
      <section className="bg-clay text-paper">
        <FaqBlock kicker="General" title="About Us & Our Process" items={generalFaqs} />
      </section>
      <section className="bg-sage text-paper">
        <FaqBlock kicker="Project-specific" title="Sai Roots Layout" items={sai.faqs} />
      </section>
      <section className="bg-ochre text-ink">
        <FaqBlock kicker="Project-specific" title="Sri Sai Prasanthi" items={prasanthi.faqs} />
        <div className="mx-auto max-w-6xl px-5 pb-20">
          <h2 className="font-display text-4xl">Still have questions?</h2>
          <p className="mt-3 max-w-xl">
            Message us on WhatsApp and get a direct answer, no waiting on hold.
          </p>
          <p className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappGeneral} className="bg-ink px-5 py-3 text-paper">
              WhatsApp Now
            </a>
            <Link to="/contact" className="border border-ink px-5 py-3">
              Book a Site Visit
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function FaqBlock({
  kicker,
  title,
  items,
}: {
  kicker: string;
  title: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl">{title}</h2>
      <dl className="mt-8">
        {items.map((item) => (
          <div key={item.q} className="border-t border-current/25 py-5">
            <dt className="font-display text-2xl">{item.q}</dt>
            <dd className="mt-2 max-w-3xl leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
