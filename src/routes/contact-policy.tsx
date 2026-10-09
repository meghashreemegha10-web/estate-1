import { createFileRoute, Link } from "@tanstack/react-router";
import { email, hours } from "@/data/copy";

export const Route = createFileRoute("/contact-policy")({
  head: () => ({
    meta: [{ title: "Contact & Communication Policy | Global Mahanshi Builders" }],
  }),
  component: ContactPolicyPage,
});

const reasons = [
  "Respond to the enquiry you submitted",
  "Schedule and confirm site visits",
  "Share pricing, quotations, and project information you requested",
  "Follow up on an enquiry or booking already in progress",
  "Share relevant project updates if you have an active booking",
] as const;

function ContactPolicyPage() {
  return (
    <main className="bg-sage text-paper">
      <article className="mx-auto max-w-3xl px-5 py-20 text-lg leading-relaxed lg:py-28">
        <h1 className="font-display text-6xl leading-display tracking-display">
          Contact & Communication Policy
        </h1>
        <h2 className="mt-10 font-display text-3xl">What we contact you about</h2>
        <p className="mt-4">We use your contact details only to:</p>
        <ul className="mt-4 space-y-2">
          {reasons.map((item) => (
            <li key={item} className="border-t border-paper/25 pt-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5">
          We do not sell, rent, or share your contact information with unrelated third parties for
          their own marketing purposes.
        </p>
        <h2 className="mt-10 font-display text-3xl">WhatsApp communication</h2>
        <p className="mt-4">
          WhatsApp is one of our primary channels for responding quickly to enquiries. By messaging us
          on WhatsApp or clicking a WhatsApp button on this website, you agree to receive replies from
          our team on WhatsApp, including follow-up messages related to your enquiry.
        </p>
        <h2 className="mt-10 font-display text-3xl">Opting out</h2>
        <p className="mt-4">
          If you no longer wish to be contacted, you may tell us at any time by replying “STOP” to any
          WhatsApp/SMS message, or by emailing{" "}
          <a href={`mailto:${email}`} className="border-b border-paper">
            {email}
          </a>{" "}
          with your request. We will stop marketing-related contact promptly; we may still need to
          contact you regarding an active booking, registration, or construction agreement already in
          progress.
        </p>
        <h2 className="mt-10 font-display text-3xl">Response time</h2>
        <p className="mt-4">
          We aim to respond to enquiries during working hours: {hours}. Enquiries submitted outside
          these hours are answered the next working day.
        </p>
        <h2 className="mt-10 font-display text-3xl">Accuracy of information shared</h2>
        <p className="mt-4">
          Any pricing, availability, or project information shared with you by our sales team over
          phone, WhatsApp, or email is considered indicative until confirmed in a written quotation.
          Please refer to a signed, written document for any information you intend to rely on for a
          purchase decision.
        </p>
        <p className="mt-5">
          This policy should be read together with our <Link to="/privacy-policy">Privacy Policy</Link>
          , <Link to="/terms">Terms & Conditions</Link> and <Link to="/disclaimer">Disclaimer</Link>.
        </p>
      </article>
    </main>
  );
}
