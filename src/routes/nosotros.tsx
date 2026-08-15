import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import teamImgAsset from "@/assets/team.jpg.asset.json";
import ctaImgAsset from "@/assets/cta.jpg.asset.json";

const teamImg = teamImgAsset.url;
const ctaImg = ctaImgAsset.url;

export const Route = createFileRoute("/nosotros")({
  component: Nosotros,
  head: () => ({
    meta: [
      { title: "Nosotros — TRECE Arquitectura y Construcción" },
      {
        name: "description",
        content:
          "Un estudio integral de arquitectura, ingeniería y construcción. Metodología, equipo y filosofía de TRECE.",
      },
      { property: "og:title", content: "Nosotros — TRECE Arquitectura" },
      { property: "og:description", content: "Metodología integral. Diseño, ingeniería y construcción bajo un solo estudio." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
});

function Nosotros() {
  return (
    <div className="bg-ivory text-ink">
      <Header />
      <section className="mx-auto max-w-[1600px] px-6 pt-40 pb-24 md:px-10 md:pt-48 md:pb-32">
        <Reveal>
          <span className="eyebrow">Nosotros</span>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="display-xl mt-6 max-w-[20ch]">
            Diseñamos espacios que permanecen en el tiempo.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-6" slow>
            <div className="image-hover aspect-[4/5] overflow-hidden bg-stone">
              <img src={teamImg} alt="Equipo TRECE" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div className="md:col-span-6 md:pt-8">
            <Reveal>
              <div className="space-y-6 text-[15px] leading-[1.75] text-graphite">
                <p>
                  TRECE Arquitectura y Construcción es un estudio interdisciplinario que reúne
                  arquitectos, ingenieros, calculistas, diseñadores interiores y constructores
                  bajo una misma metodología.
                </p>
                <p>
                  Desarrollamos proyectos desde la consultoría inicial hasta la ejecución final,
                  integrando cada etapa con precisión técnica y sensibilidad creativa. Creemos que
                  la arquitectura y la ingeniería deben trabajar como una sola disciplina para
                  construir espacios coherentes y duraderos.
                </p>
                <p>
                  Nuestra práctica se sostiene en tres principios: escucha activa del cliente y el
                  lugar, precisión técnica en la ejecución, y una estética contemporánea sobria que
                  privilegia la permanencia sobre la moda.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-stone/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <span className="eyebrow">Valores</span>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-3">
            {[
              { t: "Precisión", d: "Cada línea, cada material, cada plazo. Nada se deja al azar." },
              { t: "Sensibilidad", d: "Escuchamos el lugar y a quienes van a habitarlo antes de proyectar." },
              { t: "Permanencia", d: "Diseñamos para el largo plazo. Arquitectura que envejece con dignidad." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-display text-3xl">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-graphite">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] w-full overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div>
            <Reveal>
              <h2 className="display-lg max-w-[24ch] text-ivory mx-auto">
                Conversemos sobre su próximo proyecto.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/contacto"
                className="mt-10 inline-block border border-ivory px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ivory transition-all hover:bg-ivory hover:text-ink"
              >
                Agendar reunión
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
