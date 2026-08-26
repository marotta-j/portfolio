import { Link } from "@tanstack/react-router";
import { sections } from "@/content";

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-2xl gap-6 px-6 py-4 font-serif text-sm">
        {sections.map((s) => (
          <Link
            key={s.label}
            to={s.to}
            hash={"hash" in s ? s.hash : undefined}
            className="transition-colors hover:text-fg"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
