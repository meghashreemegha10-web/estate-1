import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import {
  addressLines,
  email,
  hours,
  phoneDisplay,
  phoneTel,
  whatsappGeneral,
  whatsappVisit,
} from "@/data/copy";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact Us | Book a Site Visit | Global Mahanshi Builders" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="bg-sage text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">We are listening</p>
          <h1 className="mt-3 font-display text-6xl leading-display tracking-display">Contact Us</h1>
          <p className="mt-5 max-w-2xl text-lg">
            Questions about a plot, a construction package or documentation? Reach us any way you
            prefer — we respond quickly.
          </p>
        </div>
      </section>
      <section className="bg-ochre text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm">Reach us</p>
            <h2 className="mt-2 font-display text-4xl">Office & Direct Lines</h2>
            <h3 className="mt-8 font-display text-2xl">Office address</h3>
            <address className="mt-2 not-italic leading-relaxed">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <h3 className="mt-6 font-display text-2xl">Phone</h3>
            <p>
              <a href={phoneTel}>{phoneDisplay}</a>
            </p>
            <h3 className="mt-6 font-display text-2xl">WhatsApp (fastest)</h3>
            <p>
              <a href={whatsappGeneral}>{phoneDisplay}</a>
            </p>
            <h3 className="mt-6 font-display text-2xl">Email</h3>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <h3 className="mt-6 font-display text-2xl">Working hours</h3>
            <p>{hours}</p>
            <a href={whatsappVisit} className="mt-8 inline-block bg-ink px-5 py-3 text-paper">
              WhatsApp: Book a Site Visit
            </a>
          </div>
          <div>
            <p className="text-sm">Send an enquiry</p>
            <h2 className="mt-2 font-display text-4xl">Request a Callback</h2>
            <p className="mt-3 mb-6">Fill in your details and our sales team will reach out.</p>
            <EnquiryForm tone="ink" />
          </div>
        </div>
      </section>
    </main>
  );
}
