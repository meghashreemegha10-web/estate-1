import { createFileRoute } from "@tanstack/react-router";
import { careerAreas, email, whatsappGeneral } from "@/data/copy";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [{ title: "Careers | Join Our Team | Global Mahanshi Builders" }],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <main>
      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Join us</p>
          <h1 className="mt-3 font-display text-6xl leading-display tracking-display">Careers</h1>
          <p className="mt-5 max-w-2xl text-lg">
            Global Mahanshi Builders is a growing construction and real estate development company in
            Bengaluru. We are always glad to hear from skilled, motivated people.
          </p>
        </div>
      </section>
      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Growing together</p>
          <h2 className="mt-3 font-display text-5xl leading-display">Building Our Team</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed">
            We do not have specific openings listed on this page at the moment. As we take on more
            projects across South Bengaluru, we regularly look for people across the following areas:
          </p>
          <ul className="mt-8">
            {careerAreas.map((area) => (
              <li key={area} className="border-t border-ink/20 py-3 font-display text-2xl">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl leading-relaxed">
            If you would like to be considered for future opportunities, write to us at{" "}
            <a href={`mailto:${email}`} className="border-b border-ink">
              {email}
            </a>{" "}
            with your resume and area of interest. We keep genuine applications on file and reach out
            as relevant roles open up.
          </p>
          <h2 className="mt-14 font-display text-4xl">Interested in working with us?</h2>
          <p className="mt-3">
            Send your resume by email or message us on WhatsApp to start the conversation.
          </p>
          <a href={whatsappGeneral} className="mt-6 inline-block bg-ink px-5 py-3 text-paper">
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
