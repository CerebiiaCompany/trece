import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/proyectos/")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title: "Proyectos — TRECE Arquitectura y Construcción" },
      {
        name: "description",
        content:
          "Portafolio de proyectos de arquitectura, vivienda, equipamiento y espacios corporativos desarrollados por TRECE.",
      },
      { property: "og:title", content: "Portafolio de proyectos — TRECE" },
      { property: "og:description", content: "Vivienda, equipamientos, retail y espacios corporativos." },
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
            Una selección curada de los proyectos que han definido la práctica de TRECE:
            vivienda, equipamiento cultural, espacios corporativos y arquitectura religiosa.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link to="/proyectos/$slug" params={{ slug: p.slug }} className="group block">
                <div className="image-hover aspect-[4/5] overflow-hidden bg-stone">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    width={1600}
                    height={1200}
                    loading="lazy"
                  />
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
      </section>

      <Footer />
    </div>
  );
}
