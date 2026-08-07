import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/proceso")({
  component: Proceso,
  head: () => ({
    meta: [
      { title: "Proceso — TRECE Arquitectura y Construcción" },
      {
        name: "description",
        content:
          "Seis pasos que convierten una idea en arquitectura: escuchar, diseñar, planificar, visualizar, construir y entregar.",
      },
      { property: "og:title", content: "Proceso — TRECE Arquitectura" },
      { property: "og:description", content: "Metodología integral en seis pasos." },
      { property: "og:url", content: "/proceso" },
    ],
    links: [{ rel: "canonical", href: "/proceso" }],
  }),
});

const STEPS = [
  {
    n: "01",
    title: "Escuchamos",
    text: "Comprendemos el lugar, la historia, el presupuesto y las aspiraciones del cliente antes de dibujar la primera línea.",
  },
  {
    n: "02",
    title: "Diseñamos",
    text: "Traducimos el brief en una arquitectura precisa, sensible y funcional. Iteramos con el cliente hasta encontrar el proyecto correcto.",
  },
  {
    n: "03",
    title: "Planificamos",
    text: "Definimos alcances, presupuestos detallados y cronogramas rigurosos. Cada decisión queda documentada.",
  },
  {
    n: "04",
    title: "Visualizamos",
    text: "Recorremos el proyecto en 3D fotorrealista antes de mover una sola piedra. Nada se construye si no se ve claro primero.",
  },
  {
    n: "05",
    title: "Construimos",
    text: "Ejecutamos con control técnico, calidad de materiales y transparencia total sobre avances, costos y plazos.",
  },
  {
    n: "06",
    title: "Entregamos",
    text: "Un espacio listo para ser habitado, con documentación completa y acompañamiento posventa.",
  },
];

function Proceso() {
  return (
    <div className="bg-ivory text-ink">
      <Header />
      <section className="mx-auto max-w-[1600px] px-6 pt-40 pb-16 md:px-10 md:pt-48 md:pb-20">
        <Reveal>
          <span className="eyebrow">Proceso</span>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="display-xl mt-6 max-w-[20ch]">
            Seis pasos que convierten una idea en arquitectura.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10 md:pb-40">
        <div className="space-y-24 md:space-y-32">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 50}>
              <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:gap-8 lg:gap-16 md:pt-14">
                <div className="md:col-span-4">
                  <div className="font-display text-8xl leading-none md:text-9xl">{s.n}</div>
                </div>
                <div className="md:col-span-8 md:pt-4">
                  <h2 className="display-md">{s.title}</h2>
                  <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-graphite">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-stone/40 py-24 text-center">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <h2 className="display-lg max-w-[26ch] mx-auto">
              Hablemos sobre en qué paso se encuentra su proyecto.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/contacto"
              className="mt-10 inline-block border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] transition-all hover:bg-ink hover:text-ivory"
            >
              Agendar reunión
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
