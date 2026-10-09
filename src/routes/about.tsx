import { createFileRoute, Link } from "@tanstack/react-router";
import { values, whatsappGeneral } from "@/data/copy";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us | Trusted Construction Company in Bengaluru | Global Mahanshi Builders",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Who we are</p>
          <h1 className="mt-3 max-w-4xl font-display text-6xl leading-display tracking-display sm:text-7xl">
            More Than a Construction Company
          </h1>
          <p className="mt-6 font-display text-2xl">Building Trust. Creating Landmarks.</p>
        </div>
      </section>
      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:grid lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-4">
            <p className="text-sm">Our story</p>
            <h2 className="mt-3 font-display text-4xl leading-display tracking-display">
              About Global Mahanshi Builders
            </h2>
          </div>
          <div className="mt-8 space-y-5 text-lg leading-relaxed lg:col-span-8 lg:mt-0">
            <p>
              Global Mahanshi Builders is a professionally managed construction and real estate
              development company headquartered in Bengaluru, Karnataka, established in January 2026
              under the leadership of founder and managing director G. Muniswamy.
            </p>
            <p>
              Construction is our core strength. We build high-quality independent homes and villas,
              and develop legally secure residential layouts in South Bengaluru’s fastest-growing
              corridors — Jigani, Electronic City, Bannerghatta Road and Anekal.
            </p>
            <p>
              What makes us different is the complete journey: customers can buy a legally verified
              plot, design their home and have it built — all through one trusted organization, with
              transparent documentation at every step.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-sage text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">What guides us</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
            Vision, Mission & Values
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-3xl">Our Vision</h3>
              <p className="mt-3 leading-relaxed">
                To become one of Karnataka’s most trusted and respected construction and real estate
                development companies — delivering quality construction, professionally planned
                communities and exceptional customer experiences.
              </p>
            </article>
            <article>
              <h3 className="font-display text-3xl">Our Mission</h3>
              <p className="mt-3 leading-relaxed">
                To simplify the homeownership journey with reliable construction, legally compliant
                developments, transparent communication and complete end-to-end solutions.
              </p>
            </article>
          </div>
          <ol className="mt-12 border-t border-paper/30">
            {values.map((item) => (
              <li key={item.title} className="grid gap-2 border-b border-paper/30 py-5 lg:grid-cols-12">
                <h3 className="font-display text-2xl lg:col-span-4">{item.title}</h3>
                <p className="leading-relaxed lg:col-span-8">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">The people</p>
          <h2 className="mt-3 font-display text-5xl leading-display">Leadership</h2>
          <p className="mt-8 font-display text-7xl leading-none">GM</p>
          <h3 className="mt-3 font-display text-4xl">G. Muniswamy</h3>
          <p>Founder & Managing Director</p>
          <h2 className="mt-16 font-display text-4xl">Our Team</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Global Mahanshi Builders works as one collaborative team — leadership, sales consultants,
            architects, project managers, site engineers, skilled construction workforce and a digital
            design and technology team — each accountable for quality, transparency and your
            experience from first enquiry to final handover.
          </p>
          <h2 className="mt-16 font-display text-4xl">Areas We Serve</h2>
          <p className="mt-4 font-display text-3xl leading-tight">
            Jigani · Electronic City · Bannerghatta Road · Anekal
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed">
            100+ projects completed, with 3 residential layouts and 2 residential buildings currently
            in progress across these locations.
          </p>
          <h2 className="mt-16 font-display text-4xl">Talk to us directly</h2>
          <p className="mt-4">
            Visit our office in JP Nagar 8th Phase or start the conversation on WhatsApp.
          </p>
          <p className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-ink px-5 py-3 text-paper">
              Contact Us
            </Link>
            <a href={whatsappGeneral} className="border border-ink px-5 py-3">
              WhatsApp Us
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
