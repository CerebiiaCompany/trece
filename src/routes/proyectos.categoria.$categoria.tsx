import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/projects";
import { categories, getCategory, getProjectsByCategory } from "@/lib/projects";

export const Route = createFileRoute("/proyectos/categoria/$categoria")({
  component: CategoryPage,
  loader: ({ params }) => {
    const category = getCategory(params.categoria);
    if (!category) throw notFound();
    const items: Project[] = getProjectsByCategory(category.slug);
    return { category, items };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Categoría no encontrada — TRECE" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.title} — Proyectos TRECE`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/proyectos/categoria/${loaderData.category.slug}` },
      ],
      links: [{ rel: "canonical", href: `/proyectos/categoria/${loaderData.category.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="text-center">
        <div className="eyebrow">Categoría no encontrada</div>
        <Link to="/proyectos" className="mt-6 inline-block link-hover">
          Ver portafolio
        </Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <div className="bg-ivory text-ink">
      <Header />

      <section className="mx-auto max-w-[1600px] px-6 pt-40 pb-12 md:px-10 md:pt-48 md:pb-16">
        <Reveal>
          <Link to="/proyectos" className="eyebrow link-hover">
            ← Portafolio
          </Link>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="display-xl mt-6 max-w-[16ch]">{category.title}.</h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-graphite">
            {category.description}
          </p>
        </Reveal>
      </section>

      {/* Navegación entre categorías */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap gap-2 border-y border-line py-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/proyectos/categoria/$categoria"
              params={{ categoria: c.slug }}
              className={`border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                c.slug === category.slug
                  ? "border-ink bg-ink text-ivory"
                  : "border-line text-graphite hover:border-ink hover:text-ink"
              }`}
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-32 pt-16 md:px-10 md:pb-40">
        {items.length === 0 ? (
          <p className="text-[15px] text-graphite">
            Próximamente publicaremos los proyectos de esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
            {items.map((p: Project, i: number) => (
              <Reveal key={p.slug} delay={(i % 2) * 100} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <Link to="/proyectos/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="image-hover aspect-[4/5] overflow-hidden bg-stone">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <div>
                      <div className="text-[10px] tracking-[0.28em] text-mute uppercase">
                        {p.number} · {p.category}
                      </div>
                      <h2 className="font-display text-3xl mt-3 md:text-4xl">{p.title}</h2>
                      <div className="mt-2 text-sm text-graphite">{p.location}</div>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-mute">{p.year}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
