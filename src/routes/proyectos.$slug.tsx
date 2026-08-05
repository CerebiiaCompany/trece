import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getProject, projects, projectCategory, getCategory } from "@/lib/projects";

export const Route = createFileRoute("/proyectos/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — TRECE Arquitectura` },
          { name: "description", content: loaderData.project.challenge.slice(0, 155) },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.challenge.slice(0, 155) },
          { property: "og:type", content: "article" },
          { property: "og:image", content: loaderData.project.image },
          { property: "og:url", content: `/proyectos/${loaderData.project.slug}` },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/proyectos/${loaderData.project.slug}` }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="text-center">
        <div className="eyebrow">Proyecto no encontrado</div>
        <Link to="/proyectos" className="mt-6 inline-block link-hover">
          Ver portafolio
        </Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="eyebrow">Ocurrió un error cargando el proyecto</div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const categorySlug = projectCategory[project.slug];
  const category = categorySlug ? getCategory(categorySlug) : undefined;
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="bg-ivory text-ink">
      <Header transparent />

      {/* Hero pantalla completa */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28">
          <Reveal>
            <span className="eyebrow text-ivory/80">
              {project.number} · {project.category}
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="display-xl mt-6 max-w-5xl text-ivory">{project.title}</h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-6 text-ivory/85">{project.location} · {project.year}</p>
          </Reveal>
        </div>
      </section>

      {/* Ficha */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          {category ? (
            <Link
              to="/proyectos/categoria/$categoria"
              params={{ categoria: category.slug }}
              className="eyebrow link-hover inline-block"
            >
              ← Volver a {category.title}
            </Link>
          ) : (
            <Link to="/proyectos" className="eyebrow link-hover inline-block">
              ← Volver al portafolio
            </Link>
          )}
        </Reveal>
        <div className="mt-10 grid gap-10 border-y border-line py-12 md:grid-cols-4">
          {[
            { label: "Ubicación", value: project.location },
            { label: "Categoría", value: project.category },
            { label: "Cliente", value: project.client ?? "TRECE" },
            { label: "Año", value: project.year },
          ].map((f) => (
            <Reveal key={f.label}>
              <div className="eyebrow">{f.label}</div>
              <div className="mt-3 font-display text-2xl">{f.value}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div className="eyebrow">Herramientas</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((t: string) => (
                <span
                  key={t}
                  className="border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-graphite"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          {project.pdf ? (
            <Reveal delay={120}>
              <div className="eyebrow">Documento</div>
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-3 border border-ink bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-transparent hover:text-ink"
              >
                Ver el proyecto en detalle (PDF)
                <span aria-hidden>↗</span>
              </a>
            </Reveal>
          ) : null}
        </div>

      </section>

      {/* Reto & solución */}
      <section className="border-t border-line bg-stone/40">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal>
            <span className="eyebrow">Descripción del reto</span>
            <h2 className="display-md mt-6">El reto.</h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-graphite">{project.challenge}</p>
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">Solución implementada</span>
            <h2 className="display-md mt-6">La solución.</h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-graphite">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Galería masonry */}
      {project.gallery?.length ? (
        <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <span className="eyebrow">Galería</span>
            <h2 className="display-md mt-6">Alta resolución.</h2>
          </Reveal>

          <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {project.gallery.map((src: string, i: number) => (
              <div key={src} className="image-hover aspect-video overflow-hidden bg-stone break-inside-avoid">
                <img
                  src={src}
                  alt={`${project.title} — imagen ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}


      {/* Relacionados */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <span className="eyebrow">Proyectos relacionados</span>
            <h2 className="display-md mt-6">Continúe explorando.</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.slug}>
                <Link to="/proyectos/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="image-hover aspect-[4/5] overflow-hidden bg-stone">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="mt-4">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-mute">{p.number}</div>
                    <h3 className="font-display text-xl mt-2">{p.title}</h3>
                    <div className="mt-1 text-xs text-graphite">{p.location}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
