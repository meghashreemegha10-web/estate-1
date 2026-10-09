import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [{ title: "Disclaimer | Global Mahanshi Builders" }] }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <main className="bg-ochre text-ink">
      <article className="mx-auto max-w-3xl px-5 py-20 text-lg leading-relaxed lg:py-28">
        <h1 className="font-display text-6xl leading-display tracking-display">Disclaimer</h1>
        <p className="mt-8">
          The content on this website is published for general informational purposes only and does
          not constitute a legal offer, advertisement, or invitation to enter into a contract. Project
          layouts, plot sizes, amenities, specifications and availability are subject to change and
          final confirmation by Global Mahanshi Builders at the time of booking.
        </p>
        <p className="mt-5">
          Images used on this website represent actual project photography wherever indicated. Some
          visuals used for illustrative or design-reference purposes may not depict the exact finished
          appearance of a specific plot or home. Global Mahanshi Builders does not use any image as a
          substitute for an actual site visit — customers are encouraged to visit the project in person
          before making a purchase decision.
        </p>
        <p className="mt-5">
          Nothing on this website constitutes legal, financial, tax or investment advice. Plot prices,
          construction rates, and offers mentioned or discussed with our sales team are indicative and
          may vary based on plot size, specifications, location, market conditions and government
          charges at the time of booking. The construction cost calculator on this website provides an
          illustrative estimate only and is not a quotation.
        </p>
        <p className="mt-5">
          Customers are strongly encouraged to independently verify all legal documents, approvals, and
          project details with their own legal and financial advisors before making any payment or
          entering into an agreement. Global Mahanshi Builders will make all available project
          documentation accessible for this verification.
        </p>
        <p className="mt-5">
          Registration charges, stamp duty, and other statutory government fees are payable by the
          purchaser as per prevailing Karnataka Government regulations and are not included in any
          price discussed on this website unless explicitly stated in a written quotation.
        </p>
        <p className="mt-5">
          This disclaimer should be read together with our <Link to="/terms">Terms & Conditions</Link>{" "}
          and <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </article>
    </main>
  );
}
