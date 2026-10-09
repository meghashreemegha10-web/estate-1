import { createFileRoute } from "@tanstack/react-router";
import { whatsappVisit } from "@/data/copy";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [{ title: "Gallery | Photos of Our Projects | Global Mahanshi Builders" }],
  }),
  component: GalleryPage,
});

const groups = [
  {
    kicker: "Residential Layouts",
    body: "Sai Roots Layout and Sri Sai Prasanthi — entrances, master plans, roads and site visits.",
    tone: "bg-clay text-paper",
    images: [
      {
        src: "/photos/images-sai-roots-entrance.webp",
        alt: "Sai Roots Layout grand entrance, Jigani",
        caption: "Sai Roots Layout",
      },
      {
        src: "/photos/images-sai-roots-master-layout.webp",
        alt: "Sai Roots Layout master plan of 53 residential plots",
        caption: "Sai Roots Layout",
      },
      {
        src: "/photos/images-sai-roots-internal-road-01.webp",
        alt: "Internal road network at Sai Roots Layout Jigani",
        caption: "Sai Roots Layout",
      },
      {
        src: "/photos/images-sri-sai-prasanthi-entrance.webp",
        alt: "Sri Sai Prasanthi layout entrance, Ramasandra",
        caption: "Sri Sai Prasanthi",
      },
      {
        src: "/photos/images-sri-sai-prasanthi-site.webp",
        alt: "Sri Sai Prasanthi",
        caption: "Sri Sai Prasanthi",
      },
    ],
  },
  {
    kicker: "Completed Projects",
    body: "Green Valley Phase 1 and Druthi Nice City — delivered communities and milestone moments.",
    tone: "bg-sage text-paper",
    images: [
      {
        src: "/photos/images-green-valley-reference.webp",
        alt: "Green Valley Phase 1 completed residential layout, Begur",
        caption: "Green Valley Phase 1",
      },
      {
        src: "/photos/images-druthi-nice-city-completed-01.webp",
        alt: "Druthi Nice City",
        caption: "Druthi Nice City",
      },
      {
        src: "/photos/images-druthi-nice-city-entrance.webp",
        alt: "Druthi Nice City",
        caption: "Druthi Nice City",
      },
      {
        src: "/photos/images-druthi-nice-city-pooja-ceremony.webp",
        alt: "Groundbreaking pooja ceremony at Druthi Nice City",
        caption: "Druthi Nice City",
      },
    ],
  },
] as const;

const pending = ["Construction in Progress", "Interiors", "Site Progress"] as const;

function GalleryPage() {
  return (
    <main>
      <section className="bg-ochre text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">On the ground</p>
          <h1 className="mt-3 font-display text-6xl leading-display tracking-display">Gallery</h1>
          <p className="mt-5 max-w-2xl text-lg">
            Real photographs from our layouts and completed projects — organized by category.
          </p>
        </div>
      </section>
      {groups.map((group) => (
        <section key={group.kicker} className={group.tone}>
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-4xl">{group.kicker}</h2>
            <p className="mt-3 max-w-2xl">{group.body}</p>
            <ul className="mt-8 flex gap-4 overflow-x-auto pb-4">
              {group.images.map((image) => (
                <li key={image.src} className="w-72 shrink-0 sm:w-96">
                  <img src={image.src} alt={image.alt} className="aspect-photo w-full object-cover" />
                  <p className="mt-2 text-sm">{image.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section className="bg-clay text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          {pending.map((title) => (
            <article key={title} className="border-t border-paper/30 py-6">
              <h2 className="font-display text-3xl">{title}</h2>
              <p className="mt-2">Photos for this category are being organized and will be added soon.</p>
            </article>
          ))}
          <h2 className="mt-10 font-display text-4xl">Want to see it in person?</h2>
          <p className="mt-3 max-w-xl">
            Photos only tell part of the story — book a site visit and walk the layout yourself.
          </p>
          <a href={whatsappVisit} className="mt-6 inline-block border-b border-paper pb-0.5">
            WhatsApp Now
          </a>
        </div>
      </section>
    </main>
  );
}
