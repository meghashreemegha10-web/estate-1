import { Link } from "@tanstack/react-router";
import { notFoundCopy } from "@/data/copy";

export function NotFound() {
  return (
    <main className="bg-sage text-paper">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-20">
        <p className="text-sm">{notFoundCopy.code}</p>
        <h1 className="mt-3 font-display text-6xl leading-display tracking-display">
          {notFoundCopy.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{notFoundCopy.body}</p>
        <p className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="bg-paper px-5 py-3 text-ink">
            {notFoundCopy.home}
          </Link>
          <Link to="/projects" className="border border-paper px-5 py-3">
            {notFoundCopy.projects}
          </Link>
        </p>
      </div>
    </main>
  );
}
