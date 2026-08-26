import { type ReactNode } from "react";

/**
 * Bold underlined link component with hover effect
 */
export function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-semibold text-fg underline decoration-muted/40 decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
