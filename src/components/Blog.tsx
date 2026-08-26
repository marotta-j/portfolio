import { posts } from "@/content";

/**
 * The list of blog posts
 */
export function Blog() {
  return (
    <ul className="divide-y divide-border">
      {posts.map((post) => (
        <li key={post.title}>
          <a
            href={post.href}
            className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-fg"
          >
            <span className="font-serif">{post.title}</span>
            <time
              dateTime={post.date}
              className="shrink-0 font-mono text-xs text-muted/60"
            >
              {post.date}
            </time>
          </a>
        </li>
      ))}
    </ul>
  );
}
