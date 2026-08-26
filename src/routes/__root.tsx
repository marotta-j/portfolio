import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

/**
 * Root page
 */
export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <div className="min-h-dvh">
      <Nav />

      <main className="mx-auto max-w-2xl px-6">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <section className="py-20 font-serif text-sm text-muted">
      <h1 className="mb-2 text-fg">not found</h1>
      <p>that page doesn&rsquo;t exist.</p>
    </section>
  );
}
