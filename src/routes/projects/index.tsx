import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/copy";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [{ title: "Projects | Global Mahanshi Builders" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <main>
      <section className="bg-sage text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="text-sm">Our portfolio</p>
          <h1 className="mt-3 font-display text-6xl leading-display tracking-display">
            Featured Projects
          </h1>
          <p className="mt-5 max-w-2xl text-lg">
            Active plotted developments and completed communities across South Bengaluru.
          </p>
        </div>
      </section>
      <ol>
        {projects.map((project, index) => {
          const tone = index % 2 === 0 ? "bg-ochre text-ink" : "bg-clay text-paper";
          return (
            <li key={project.slug} className={tone}>
              <article className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:py-16">
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="aspect-photo w-full object-cover"
                />
                <div>
                  <p className="text-sm">{project.stamp}</p>
                  <h2 className="mt-2 font-display text-5xl leading-display tracking-display">
                    {project.name}
                  </h2>
                  <p className="mt-3">{project.place}</p>
                  <p className="mt-1">{project.legal}</p>
                  <p className="mt-4 leading-relaxed">{project.summary}</p>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="mt-6 inline-block border-b border-current pb-0.5"
                  >
                    View project
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
