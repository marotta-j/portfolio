import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Shared chrome for a blog post: back link, title, date, prose styling.
 * Every route under /writing renders its body through this.
 */
export function Post({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <article className="py-20">
      <Link
        to="/writing"
        className="font-serif text-sm text-muted transition-colors hover:text-fg"
      >
        ← writing
      </Link>

      <header className="mt-8 mb-5">
        <h1 className="font-serif text-3xl text-fg">{title}</h1>
        <time dateTime={date} className="font-sans text-xs text-muted/60">
          {date}
        </time>
      </header>

      <div className="space-y-5 leading-relaxed text-gray-400 [&_a]:text-fg [&_a]:underline [&_a]:decoration-muted/40 [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-lg [&_h2]:text-fg">
        {children}
      </div>
    </article>
  );
}

/**
 * An image in the body of a post. The white card keeps light screenshots from
 * glaring against the dark page.
 */
export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-lg border border-border bg-white"
      />
      {caption && (
        <figcaption className="mt-2 font-serif text-xs text-muted/60 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
