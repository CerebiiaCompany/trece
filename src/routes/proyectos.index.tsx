import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { categories, getProjectsByCategory } from "@/lib/projects";

export const Route = createFileRoute("/proyectos/")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title: "Proyectos — TRECE Arquitectura y Construcción" },
      {
        name: "description",
        content:
          "Portafolio por categorías: comercial, iglesias, viviendas, remodelaciones y otros proyectos de TRECE.",
      },
      { property: "og:title", content: "Portafolio de proyectos — TRECE" },
      {
        property: "og:description",
        content: "Comercial, iglesias, viviendas, remodelaciones y más.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/proyectos" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
});

function ProjectsIndex() {
  return (
    <div className="bg-ivory text-ink">
      <Header />
      <section className="mx-auto max-w-[1600px] px-6 pt-40 pb-16 md:px-10 md:pt-48 md:pb-20">
        <Reveal>
          <span className="eyebrow">Portafolio</span>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="display-xl mt-6 max-w-[18ch]">Proyectos que permanecen.</h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-graphite">
            Explore el trabajo de TRECE por categoría: cada línea reúne proyectos con retos,
            escalas y lenguajes propios.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {categories.map((c, i) => {
            const items = getProjectsByCategory(c.slug);
            const cover = items[0]?.image;
            return (
              <Reveal key={c.slug} delay={(i % 2) * 100} className={i % 2 === 1 ? "md:mt-20" : ""}>
                <Link to="/proyectos/categoria/$categoria" params={{ categoria: c.slug }} className="group block">
                  <div className="image-hover aspect-[4/3] overflow-hidden bg-stone">
                    {cover ? (
                      <img
                        src={cover}
                        alt={`Categoría ${c.title}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <div>
                      <div className="text-[10px] tracking-[0.28em] text-mute uppercase">
                        {c.number} · {items.length} {items.length === 1 ? "proyecto" : "proyectos"}
                      </div>
                      <h2 className="font-display text-3xl mt-3 md:text-4xl">{c.title}</h2>
                      <p className="mt-2 max-w-md text-sm text-graphite">{c.description}</p>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-mute">Ver</div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
