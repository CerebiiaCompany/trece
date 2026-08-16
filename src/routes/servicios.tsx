import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import s1 from "@/assets/s1-consultoria.jpg";
import s2 from "@/assets/s2-construccion.jpg";
import s3 from "@/assets/s3-visualizacion.jpg";
import s4 from "@/assets/s4-interior.jpg";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
  head: () => ({
    meta: [
      { title: "Servicios — TRECE Arquitectura y Construcción" },
      {
        name: "description",
        content:
          "Consultoría, diseño arquitectónico y estructural, visualización, construcción e interiorismo bajo un mismo estudio.",
      },
      { property: "og:title", content: "Servicios — TRECE Arquitectura" },
      {
        property: "og:description",
        content: "Cuatro líneas de servicio integrales: consultoría, construcción, visualización e interiorismo.",
      },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
});

const SERVICES = [
  {
    n: "01",
    title: "Consultoría y Diseños",
    image: s1,
    intro:
      "Acompañamiento integral desde la conceptualización hasta la documentación técnica completa del proyecto.",
    items: [
      "Diseño arquitectónico",
      "Diseño estructural",
      "Estudios de suelos",
      "Levantamientos topográficos",
      "Diseño hidrosanitario",
      "Diseño eléctrico",
      "Redes de voz y datos",
      "Costos y presupuestos",
      "Programación de obra",
      "Interventoría",
    ],
  },
  {
    n: "02",
    title: "Construcción",
    image: s2,
    intro: "Ejecución rigurosa con controles técnicos, financieros y de calidad en cada etapa.",
    items: ["Ejecución de obra", "Remodelaciones", "Supervisión de obra"],
  },
  {
    n: "03",
    title: "Visualización Arquitectónica",
    image: s3,
    intro:
      "Comunicamos el proyecto antes de construirlo, con renders fotorrealistas y recorridos inmersivos.",
    items: [
      "Renderizado fotorrealista",
      "Lumion",
      "Twinmotion",
      "V-Ray",
      "Recorridos virtuales",
      "Presentaciones comerciales",
    ],
  },
  {
    n: "04",
    title: "Diseño Interior",
    image: s4,
    intro: "Interiores que responden al carácter del lugar y a la forma de habitar de sus usuarios.",
    items: ["Viviendas", "Oficinas", "Locales comerciales", "Consultorios", "Espacios corporativos"],
  },
];

function Servicios() {
  return (
    <div className="bg-ivory text-ink">
      <Header />
      <section className="mx-auto max-w-[1600px] px-6 pt-40 pb-16 md:px-10 md:pt-48 md:pb-20">
        <Reveal>
          <span className="eyebrow">Servicios</span>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="display-xl mt-6 max-w-[20ch]">
            Un solo estudio para cada etapa del proyecto.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10 md:pb-40">
        <div className="space-y-32 md:space-y-52">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className={`grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="md:col-span-7" slow>
                <div className="image-hover aspect-[4/3] overflow-hidden bg-stone">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
              <div className="md:col-span-5 md:pt-8">
                <Reveal>
                  <span className="eyebrow">{s.n}</span>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="display-lg mt-4">{s.title}</h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-6 text-[15px] leading-[1.75] text-graphite">{s.intro}</p>
                </Reveal>
                <Reveal delay={300}>
                  <ul className="mt-8 space-y-3 border-t border-line pt-8">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-4 text-sm text-graphite">
                        <span className="text-[10px] tracking-[0.2em] text-bronze">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink text-ivory py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <Reveal>
            <h2 className="display-lg max-w-[26ch] mx-auto text-ivory">
              ¿Necesita orientación sobre qué servicio se ajusta a su proyecto?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/contacto"
              className="mt-10 inline-block border border-ivory px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory transition-all hover:bg-ivory hover:text-ink"
            >
              Solicitar asesoría
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
