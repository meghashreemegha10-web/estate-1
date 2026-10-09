import { createFileRoute, Link } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import {
  homeFaqs,
  journey,
  packages,
  principles,
  projects,
  services,
  whatsappVisit,
} from "@/data/copy";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <main>
      <section className="cover grid bg-paper text-ink lg:grid-cols-12">
        <div className="order-2 flex flex-col justify-end px-5 py-10 lg:order-1 lg:col-span-5 lg:px-10 lg:py-14">
          <p className="text-sm text-clay">Construction · Residential Layouts · Bengaluru</p>
          <h1 className="mt-4 font-display text-6xl leading-display tracking-display sm:text-7xl lg:text-8xl">
            Building Trust.
            <span className="block">Creating Landmarks.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Quality home construction and legally secure residential plots in South Bengaluru —
            planned, built and delivered by one trusted company.
          </p>
          <p className="mt-4 text-sm">
            100+ Projects Completed · Trusted by Families Across Bangalore
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-clay px-5 py-3 text-paper">
              Book a Site Visit
            </Link>
            <a href="#projects" className="border border-ink px-5 py-3">
              Ongoing Projects
            </a>
          </div>
        </div>
        <div className="order-1 min-h-72 lg:order-2 lg:col-span-7">
          <img
            src="/photos/hero.jpg"
            alt="Independent house"
            className="h-full min-h-72 w-full object-cover lg:min-h-full"
          />
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Who we are</p>
          <h2 className="mt-3 max-w-4xl font-display text-5xl leading-display tracking-display sm:text-6xl">
            Building Trust Since Day One
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed">
            Global Mahanshi Builders is a professionally managed construction and real estate
            development company headquartered in Bengaluru, established in January 2026 . With
            construction as our core strength, we build high-quality homes, develop residential
            layouts, and provide customers with dependable end-to-end solutions — backed by
            professional execution and transparent business practices.
          </p>
          <ol className="mt-14 border-t border-paper/30">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-paper/30 py-6 lg:grid-cols-12 lg:items-baseline"
              >
                <span className="font-display text-2xl lg:col-span-1">0{index + 1}</span>
                <h3 className="font-display text-3xl leading-tight lg:col-span-4">{item.title}</h3>
                <p className="leading-relaxed lg:col-span-7">{item.body}</p>
              </li>
            ))}
          </ol>
          <Link to="/about" className="mt-8 inline-block border-b border-paper pb-0.5">
            About Us
          </Link>
        </div>
      </section>

      <section className="bg-sage text-paper">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm">Ongoing Projects</p>
            <h2 className="mt-3 font-display text-4xl leading-display tracking-display sm:text-5xl">
              Real project progress, updated when there is something worth showing.
            </h2>
            <p className="mt-8 text-sm">Rendering</p>
            <p className="font-display text-4xl">Sai Roots Layout</p>
            <p className="mt-1">Infrastructure Development</p>
            <Link
              to="/projects/$slug"
              params={{ slug: "sai-roots-layout" }}
              className="mt-4 inline-block border-b border-paper pb-0.5"
            >
              View Progress →
            </Link>
            <p className="mt-10 leading-relaxed">
              100+ Projects Completed · DC Converted · E-Khata · Panchayath Approved · Bank Loan
              Assistance
            </p>
          </div>
          <dl className="grid content-end gap-8">
            <div className="border-t border-paper/30 pt-4">
              <dt className="font-display text-6xl leading-none">DC Converted</dt>
              <dd className="mt-2">E-Khata plots at Sai Roots</dd>
            </div>
            <div className="border-t border-paper/30 pt-4">
              <dt className="font-display text-6xl leading-none">₹1,950 / sq.ft</dt>
              <dd className="mt-2">Construction packages onwards</dd>
            </div>
            <div className="border-t border-paper/30 pt-4">
              <dt className="font-display text-6xl leading-none">100+</dt>
              <dd className="mt-2">Projects Completed across Bangalore</dd>
            </div>
            <div className="border-t border-paper/30 pt-4">
              <dt className="font-display text-6xl leading-none">12 Months</dt>
              <dd className="mt-2">Standard home delivery</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">What we offer</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display sm:text-6xl">
            Our Services
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Focused on what we do best — legally secure residential layouts and quality home
            construction.
          </p>
          <ol className="mt-12">
            {services.slice(1).map((service) => (
              <li key={service.title} className="grid gap-3 border-t border-ink/20 py-8 lg:grid-cols-12">
                <span className="font-display text-4xl lg:col-span-2">{service.n}</span>
                <div className="lg:col-span-10">
                  <h3 className="font-display text-3xl">{service.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed">{service.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link to="/services" className="inline-block border-b border-ink pb-0.5">
            View All Services & Specifications
          </Link>
        </div>
      </section>

      <section id="projects" className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Our portfolio</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display sm:text-6xl">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-2xl text-lg">
            Active plotted developments and completed communities across South Bengaluru.
          </p>
        </div>
        <article className="grid lg:grid-cols-2">
          <img
            src={featured.images[0].src}
            alt={featured.images[0].alt}
            className="h-full max-h-[70vh] w-full object-cover"
          />
          <div className="bg-sage px-5 py-12 text-paper lg:px-12 lg:py-16">
            <p className="text-sm">{featured.stamp}</p>
            <h3 className="mt-2 font-display text-5xl leading-display tracking-display">
              {featured.name}
            </h3>
            <p className="mt-2">{featured.place}</p>
            <p className="mt-4">{featured.legal}</p>
            <p className="mt-6 leading-relaxed">{featured.summary}</p>
            <ul className="mt-6 space-y-2">
              {featured.points.map((point) => (
                <li key={point} className="border-t border-paper/25 pt-2">
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/projects/$slug"
              params={{ slug: "sai-roots-layout" }}
              className="mt-8 inline-block border-b border-paper pb-0.5"
            >
              View project
            </Link>
          </div>
        </article>
        <ol>
          {rest.map((project, index) => (
            <li key={project.slug} className={index % 2 === 0 ? "bg-ochre text-ink" : "bg-clay text-paper"}>
              <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="mx-auto grid max-w-6xl gap-4 px-5 py-10 lg:grid-cols-12 lg:items-end"
            >
                <span className="font-display text-5xl lg:col-span-1">0{index + 2}</span>
                <span className="lg:col-span-5">
                  <span className="block text-sm">{project.stamp}</span>
                  <span className="mt-1 block font-display text-4xl leading-tight">{project.name}</span>
                </span>
                <span className="lg:col-span-4">
                  <span className="block">{project.place}</span>
                  <span className="mt-1 block">{project.legal}</span>
                </span>
                <span className="lg:col-span-2 lg:text-right">View project</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sage text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Transparent pricing</p>
          <h2 className="mt-3 font-display text-5xl leading-display tracking-display sm:text-6xl">
            Construction Packages
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Every package comes with a complete written scope of work — no hidden charges within the
            agreed scope.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {packages.map((pack) => (
              <article key={pack.name} className="border-t border-paper/30 pt-6">
                <h3 className="font-display text-3xl">{pack.name}</h3>
                <p className="mt-4 font-display text-6xl leading-none">{pack.price}</p>
                <ul className="mt-6 space-y-2">
                  {pack.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link to="/services" className="mt-10 inline-block border-b border-paper pb-0.5">
            View Full Specifications & Cost Calculator
          </Link>
        </div>
      </section>

      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">How it works</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-display tracking-display">
            Your Journey With Us
          </h2>
          <p className="mt-6 max-w-2xl text-lg">
            From first enquiry to handover — a clear, documented process at every step.
          </p>
          <ol className="mt-12">
            {journey.map((step) => (
              <li key={step.n} className="grid gap-2 border-t border-ink/20 py-6 lg:grid-cols-12">
                <span className="font-display text-4xl lg:col-span-2">{step.n}</span>
                <h3 className="font-display text-2xl lg:col-span-4">{step.title}</h3>
                <p className="leading-relaxed lg:col-span-6">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-clay text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <p className="text-sm">The people</p>
            <h2 className="mt-3 font-display text-5xl leading-display tracking-display">Leadership</h2>
            <p className="mt-10 font-display text-7xl leading-none">GM</p>
            <h3 className="mt-4 font-display text-4xl">G. Muniswamy</h3>
            <p className="mt-2">Founder & Managing Director</p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm">Questions</p>
            <h2 className="mt-3 font-display text-4xl leading-display tracking-display">
              Frequently Asked Questions
            </h2>
            <dl className="mt-8">
              {homeFaqs.map((item) => (
                <div key={item.q} className="border-t border-paper/30 py-5">
                  <dt className="font-display text-2xl">{item.q}</dt>
                  <dd className="mt-2 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
            <Link to="/faq" className="inline-block border-b border-paper pb-0.5">
              FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sage text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm">Get in touch</p>
            <h2 className="mt-3 font-display text-5xl leading-display tracking-display">
              Send an Enquiry
            </h2>
            <p className="mt-4 text-lg">Share your details and our sales team will call you back.</p>
            <h3 className="mt-12 font-display text-4xl leading-display tracking-display">
              Ready to see the plots in person?
            </h3>
            <p className="mt-4 max-w-md leading-relaxed">
              Visit Sai Roots Layout at Jigani — our team will walk you through the layout,
              documents and construction options.
            </p>
            <a href={whatsappVisit} className="mt-6 inline-block border-b border-paper pb-0.5">
              WhatsApp: Book a Site Visit
            </a>
          </div>
          <EnquiryForm tone="paper" />
        </div>
      </section>
    </main>
  );
}
