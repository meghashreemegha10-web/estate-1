import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { projectBySlug, projects, whatsappGeneral } from "@/data/copy";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} | ${loaderData.place} | Global Mahanshi Builders`
          : "Projects | Global Mahanshi Builders",
      },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const [open, setOpen] = useState<string | null>(null);
  const tone = ["bg-clay text-paper", "bg-sage text-paper", "bg-ochre text-ink"];

  return (
    <main>
      <section className={tone[projects.findIndex((item) => item.slug === project.slug) % 3]}>
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm">{project.stamp}</p>
            <h1 className="mt-3 font-display text-6xl leading-display tracking-display sm:text-7xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg">{project.legal}</p>
            <p className="mt-2">{project.place}</p>
          </div>
          <p className="text-lg leading-relaxed">{project.summary}</p>
        </div>
      </section>

      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-sm">About the project</p>
          <h2 className="mt-2 font-display text-4xl">Project Overview</h2>
          <dl className="mt-8">
            {project.facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 border-t border-ink/20 py-4 lg:grid-cols-12">
                <dt className="lg:col-span-3">{fact.label}</dt>
                <dd className="font-display text-2xl lg:col-span-9">{fact.value}</dd>
              </div>
            ))}
          </dl>
          {project.points.length > 0 ? (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.points.map((point) => (
                <li key={point} className="border-t border-ink/20 pt-3">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {project.amenities.length > 0 ? (
        <section className="bg-sage text-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <p className="text-sm">Infrastructure</p>
            <h2 className="mt-2 font-display text-4xl">Amenities & Development</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.amenities.map((item) => (
                <li key={item} className="border-t border-paper/25 pt-3">
                  {item}
                </li>
              ))}
            </ul>
            {project.groups?.map((group) => (
              <div key={group.title} className="mt-10">
                <h3 className="font-display text-2xl">{group.title}</h3>
                <p className="mt-3 text-lg leading-relaxed">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-sm">On the ground</p>
          <h2 className="mt-2 font-display text-4xl">Project Gallery</h2>
          <div className="mt-8 space-y-6">
            {project.passages.map((line) => (
              <p key={line} className="max-w-3xl text-lg leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <button
                key={image.src}
                type="button"
                className="text-left"
                onClick={() => setOpen(image.src)}
              >
                <img src={image.src} alt={image.alt} className="aspect-photo w-full object-cover" />
                <span className="mt-2 block text-sm">{image.alt}</span>
              </button>
            ))}
          </div>
          {project.slug === "sai-roots-layout" || project.slug === "sri-sai-prasanthi" ? (
            <p className="mt-8">
              <Link to="/services" className="border-b border-paper pb-0.5">
                View Construction Packages
              </Link>
            </p>
          ) : null}
        </div>
      </section>

      {project.faqs.length > 0 ? (
        <section className="bg-ochre text-ink">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <p className="text-sm">Questions</p>
            <h2 className="mt-2 font-display text-4xl">Frequently Asked Questions</h2>
            <dl className="mt-8">
              {project.faqs.map((item) => (
                <div key={item.q} className="border-t border-ink/20 py-5">
                  <dt className="font-display text-2xl">{item.q}</dt>
                  <dd className="mt-2 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="bg-sage text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm">Take the next step</p>
            <h2 className="mt-2 font-display text-4xl">Book a Site Visit</h2>
            <p className="mt-4">Share your details — our team will get back to you.</p>
            <h3 className="mt-10 font-display text-3xl">Interested in {project.name}?</h3>
            <p className="mt-3">Message us on WhatsApp for the latest updates and details.</p>
            <a href={whatsappGeneral} className="mt-5 inline-block border-b border-paper pb-0.5">
              WhatsApp Now
            </a>
          </div>
          <EnquiryForm tone="paper" />
        </div>
      </section>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-50 grid place-items-center bg-clay/95 p-4"
          onClick={() => setOpen(null)}
          aria-label="Close"
        >
          <img src={open} alt="" className="max-h-[85vh] max-w-full object-contain" />
        </button>
      ) : null}
    </main>
  );
}
