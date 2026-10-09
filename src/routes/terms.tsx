import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions | Global Mahanshi Builders" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="bg-clay text-paper">
      <article className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <h1 className="font-display text-6xl leading-display tracking-display">Terms & Conditions</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Nothing on this website constitutes legal, financial or investment advice. Customers are
            encouraged to independently verify all project documents and approvals with their legal
            advisor before completing any purchase. Registration charges, stamp duty and government
            fees are payable by the purchaser as per prevailing Karnataka Government regulations.
          </p>
          <p>
            Images are of actual projects unless otherwise indicated and are for representation of the
            development; individual plots and homes may vary.
          </p>
        </div>
      </article>
    </main>
  );
}
