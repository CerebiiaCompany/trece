import { createFileRoute, Link } from "@tanstack/react-router";
import heroImgAsset from "@/assets/hero.jpg.asset.json";
import teamImgAsset from "@/assets/team.jpg.asset.json";
import ctaImgAsset from "@/assets/cta.jpg.asset.json";
import s1Asset from "@/assets/s1-consultoria.jpg.asset.json";
import s2Asset from "@/assets/s2-construccion.jpg.asset.json";
import s3Asset from "@/assets/s3-visualizacion.jpg.asset.json";
import s4Asset from "@/assets/s4-interior.jpg.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

const heroImg = heroImgAsset.url;
const teamImg = teamImgAsset.url;
const ctaImg = ctaImgAsset.url;
const s1 = s1Asset.url;
const s2 = s2Asset.url;
const s3 = s3Asset.url;
const s4 = s4Asset.url;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TRECE Arquitectura y Construcción — Diseñamos espacios que permanecen en el tiempo" },
      {
        name: "description",
        content:
          "Estudio de arquitectura, ingeniería y construcción. Proyectos integrales, precisión técnica y diseño contemporáneo.",
      },
      { property: "og:title", content: "TRECE Arquitectura y Construcción — Diseñamos espacios que permanecen en el tiempo" },
      {
        property: "og:description",
        content: "Estudio de arquitectura, ingeniería y construcción. Proyectos integrales, precisión técnica y diseño contemporáneo.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const SERVICES = [
  {
    n: "01",
    title: "Consultoría y Diseños",
    image: s1,
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
    items: ["Ejecución de obra", "Remodelaciones", "Supervisión de obra"],
  },
  {
    n: "03",
    title: "Visualización Arquitectónica",
    image: s3,
    items: [
      "Renderizado fotorrealista",
      "Lumion · Twinmotion · V-Ray",
      "Recorridos virtuales",
      "Presentaciones comerciales",
    ],
  },
  {
    n: "04",
    title: "Diseño Interior",
    image: s4,
    items: ["Viviendas", "Oficinas", "Locales comerciales", "Consultorios", "Espacios corporativos"],
  },
];

const PROCESS = [
  { n: "01", title: "Escuchamos", text: "Comprendemos el lugar, la historia y las aspiraciones del cliente." },
  { n: "02", title: "Diseñamos", text: "Traducimos el brief en una arquitectura precisa, sensible y funcional." },
  { n: "03", title: "Planificamos", text: "Definimos alcances, presupuestos y cronogramas rigurosos." },
  { n: "04", title: "Visualizamos", text: "Recorremos el proyecto en 3D antes de mover una sola piedra." },
  { n: "05", title: "Construimos", text: "Ejecutamos con control técnico, calidad y transparencia total." },
  { n: "06", title: "Entregamos", text: "Un espacio listo para ser habitado, con acompañamiento posventa." },
];

function Index() {
  return (
    <div className="bg-ivory text-ink">
      <Header transparent />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Proyecto arquitectónico realizado por TRECE"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-16 pt-32 md:px-16 md:pb-24 md:pt-40">
          <Reveal className="max-w-none">
            <span className="eyebrow text-ivory/80">Arquitectura · Ingeniería · Construcción</span>
          </Reveal>

          <div className="max-w-5xl">
            <Reveal delay={150}>
              <h1 className="display-xl text-ivory">
                Creamos espacios que transforman la manera de vivir, trabajar y construir.
              </h1>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
                Desarrollamos proyectos integrales de arquitectura, ingeniería y construcción,
                combinando creatividad, técnica y una ejecución rigurosa para ofrecer espacios
                funcionales, estéticos y duraderos.
              </p>
            </Reveal>
            <Reveal delay={600} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/proyectos"
                className="border border-ivory px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory transition-all duration-500 hover:bg-ivory hover:text-ink"
              >
                Ver proyectos
              </Link>
              <Link
                to="/contacto"
                className="px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory link-hover"
              >
                Solicitar asesoría
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-ivory/70 animate-pulse">
          Scroll
        </div>
      </section>

      {/* SOBRE TRECE */}
      <section id="nosotros" className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10 lg:gap-20">
          <Reveal className="md:col-span-6" slow>
            <div className="image-hover aspect-[4/5] overflow-hidden bg-stone">
              <img
                src={teamImg}
                alt="Equipo TRECE Arquitectura y Construcción"
                className="h-full w-full object-cover"
                width={1600}
                height={1800}
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="md:col-span-6 md:pt-16">
            <Reveal>
              <span className="eyebrow">Sobre TRECE — 01</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-6">
                Un estudio integral de arquitectura,<br />
                ingeniería y construcción.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 space-y-6 text-[15px] leading-[1.75] text-graphite">
                <p>
                  TRECE Arquitectura y Construcción desarrolla proyectos desde la consultoría inicial
                  hasta la ejecución final. Integramos arquitectura, ingeniería estructural, diseño
                  interior y construcción bajo una metodología única.
                </p>
                <p>
                  Nuestro equipo interdisciplinario reúne arquitectos, ingenieros, calculistas y
                  constructores para asegurar coherencia entre la idea y su materialización.
                </p>
                <p>
                  Creemos en la arquitectura como una disciplina lenta, precisa y contemporánea:
                  espacios que permanecen en el tiempo por su claridad conceptual y su ejecución
                  técnica.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-8">
                <div>
                  <div className="display-md text-ink">+50</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mute">
                    Proyectos entregados
                  </div>
                </div>
                <div>
                  <div className="display-md text-ink">10</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mute">
                    Años de trayectoria
                  </div>
                </div>
                <div>
                  <div className="display-md text-ink">04</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mute">
                    Líneas de servicio
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="border-t border-line bg-stone/40 py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-20 flex items-end justify-between">
            <Reveal>
              <div>
                <span className="eyebrow">Servicios — 02</span>
                <h2 className="display-lg mt-6 max-w-3xl">
                  Un solo estudio para cada etapa del proyecto.
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="space-y-24 md:space-y-40">
            {SERVICES.map((s, i) => (
              <div
                key={s.n}
                className={`grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="md:col-span-7" slow>
                  <div className="image-hover aspect-[4/3] overflow-hidden bg-stone">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      width={1600}
                      height={1200}
                      loading="lazy"
                    />
                  </div>
                </Reveal>
                <div className="md:col-span-5 md:pt-8">
                  <Reveal>
                    <span className="eyebrow">{s.n}</span>
                  </Reveal>
                  <Reveal delay={100}>
                    <h3 className="display-md mt-4">{s.title}</h3>
                  </Reveal>
                  <Reveal delay={200}>
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
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section id="proyectos" className="border-t border-line py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <span className="eyebrow">Portafolio — 03</span>
                <h2 className="display-lg mt-6">Proyectos destacados.</h2>
              </div>
            </Reveal>
            <Reveal>
              <Link to="/proyectos" className="link-hover text-[11px] uppercase tracking-[0.24em]">
                Ver todo el portafolio →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <Link
                  to="/proyectos/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
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
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.28em] text-mute uppercase">
                        {p.number} · {p.category}
                      </div>
                      <h3 className="font-display text-2xl leading-tight mt-2">{p.title}</h3>
                      <div className="mt-1 text-xs text-graphite">{p.location}</div>
                    </div>
                    <div className="text-[10px] text-mute">{p.year}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="border-t border-line bg-ink text-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <span className="eyebrow text-ivory/60">Proceso — 04</span>
            <h2 className="display-lg mt-6 max-w-3xl text-ivory">
              Seis pasos que convierten una idea en arquitectura.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="border-t border-ivory/20 pt-6">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-5xl text-ivory">{step.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/50">
                      Paso
                    </span>
                  </div>
                  <h3 className="font-display text-3xl mt-6 text-ivory">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="border-t border-line py-32 md:py-52">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <span className="eyebrow">Filosofía — 05</span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="display-xl mt-10 max-w-[18ch]">
              La arquitectura no es solamente construir.
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-10 max-w-3xl text-xl leading-[1.5] text-graphite md:text-2xl">
              Es crear espacios que generen bienestar, identidad y permanencia. Nuestra
              práctica se sostiene en el cuidado del detalle, la precisión técnica y el
              respeto por el lugar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[80vh] w-full overflow-hidden md:h-screen">
        <img
          src={ctaImg}
          alt="Convirtamos su idea en un proyecto construido"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="eyebrow text-ivory/70">Comencemos</span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="display-xl mt-8 max-w-[22ch] text-ivory">
              Convirtamos su idea en un proyecto construido.
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <Link
              to="/contacto"
              className="mt-12 inline-block border border-ivory px-10 py-5 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all duration-500 hover:bg-ivory hover:text-ink"
            >
              Agendar una reunión
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
