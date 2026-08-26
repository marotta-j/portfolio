import { Blog } from "@/components/Blog";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-6 font-serif text-sm text-muted">{children}</h2>;
}

function App() {
  return (
    <div className="min-h-dvh">
      <Nav />

      <main className="mx-auto max-w-2xl px-6">
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

        <Footer />
      </main>
    </div>
  );
}

export default App;
