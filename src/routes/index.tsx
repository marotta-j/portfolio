import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/components/Blog";
import { Card } from "@/components/Card";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/")({
  component: Home,
});

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-6 font-serif text-sm text-muted">{children}</h2>;
}

function Home() {
  return (
    <>
      <section id="index" className="py-20">
        <Card />
      </section>

      <section id="projects" className="py-12">
        <SectionHeading>projects</SectionHeading>
        <Projects />
      </section>

      <section id="writing" className="py-12">
        <SectionHeading>writing</SectionHeading>
        <Blog />
      </section>
    </>
  );
}
