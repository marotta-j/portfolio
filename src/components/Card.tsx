import { profile } from "@/content";
import { Link } from "@/components/Link";

/**
 * Main hero card with intro and personal info
 */
export function Card() {
  return (
    <div className="rounded-lg border border-border bg-surface p-8 shadow-lg shadow-black/30">
      <div className="flex items-center gap-4">
        <img
          src={profile.headshot}
          alt="Joseph Marotta"
          className="size-14 shrink-0 rounded-full border border-border object-cover"
        />
        <div>
          <p className="mt-1 text-sm text-gray-300">Hi 👋, my name is</p>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-fg">
            Joseph Marotta
          </h1>
        </div>
      </div>
      <p className="mt-6 leading-relaxed text-gray-300">
        I am a fourth-year undergraduate student at Boston University studying
        Computer Science.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-gray-400">
        <li className="flex gap-3">
          <span aria-hidden className="text-gray-500 select-none">
            —
          </span>
          <span className="leading-relaxed">
            Interested in cloud computing, distributed systems, and databases.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden className="text-gray-500 select-none">
            —
          </span>
          <span className="leading-relaxed">
            Currently working as a Teaching Assistant for{" "}
            <Link href="https://cs-people.bu.edu/dgs/courses/cs460/">
              CS 460: Database Systems
            </Link>
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden className="text-gray-500 select-none">
            —
          </span>
          <span className="leading-relaxed">
            Previous intern @ <Link href="https://www.ibm.com/">IBM</Link>
          </span>
        </li>
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border pt-6">
        {profile.links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            className="text-muted transition-colors hover:text-accent"
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
