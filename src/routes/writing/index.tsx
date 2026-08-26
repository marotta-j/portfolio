import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/components/Blog";

export const Route = createFileRoute("/writing/")({
  component: Writing,
});

function Writing() {
  return (
    <section className="py-20">
      <h1 className="mb-6 font-serif text-sm text-muted">writing</h1>
      <Blog />
    </section>
  );
}
