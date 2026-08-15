import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto — TRECE Arquitectura y Construcción" },
      {
        name: "description",
        content:
          "Conversemos sobre su próximo proyecto de arquitectura, ingeniería o construcción. Cúcuta, Colombia.",
      },
      { property: "og:title", content: "Contacto — TRECE Arquitectura" },
      { property: "og:description", content: "Agendemos una reunión para su próximo proyecto." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-ivory text-ink">
      <Header />

      <section className="mx-auto max-w-[1600px] px-6 pt-40 pb-24 md:px-10 md:pt-48 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10 lg:gap-24">
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow">Contacto</span>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="display-xl mt-6 max-w-[16ch]">
                Convirtamos su idea en proyecto.
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-graphite">
                Cuéntenos sobre su proyecto. Responderemos en menos de 48 horas para agendar
                una primera reunión sin compromiso.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-16 space-y-10 border-t border-line pt-10">
                <div>
                  <div className="eyebrow">Correo</div>
                  <a href="mailto:treceac.co@gmail.com" className="mt-3 block font-display text-3xl link-hover break-all">
                    treceac.co@gmail.com
                  </a>
                </div>
                <div>
                  <div className="eyebrow">Instagram</div>
                  <a
                    href="https://www.instagram.com/trece_arquitectura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block font-display text-3xl link-hover"
                  >
                    @trece_arquitectura
                  </a>
                </div>
                <div>
                  <div className="eyebrow">Estudio</div>
                  <p className="mt-3 font-display text-2xl">
                    Cúcuta<br />Norte de Santander · Colombia
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={200}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8 border-t border-line pt-10"
              >
                <div>
                  <label className="eyebrow block">Nombre</label>
                  <input
                    required
                    type="text"
                    className="mt-3 w-full border-b border-line bg-transparent pb-3 font-display text-2xl outline-none transition-colors focus:border-ink"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="eyebrow block">Correo</label>
                  <input
                    required
                    type="email"
                    className="mt-3 w-full border-b border-line bg-transparent pb-3 font-display text-2xl outline-none transition-colors focus:border-ink"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="eyebrow block">Tipo de proyecto</label>
                  <input
                    type="text"
                    className="mt-3 w-full border-b border-line bg-transparent pb-3 font-display text-2xl outline-none transition-colors focus:border-ink"
                    placeholder="Vivienda, oficina, comercial…"
                  />
                </div>
                <div>
                  <label className="eyebrow block">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-base outline-none transition-colors focus:border-ink"
                    placeholder="Cuéntenos sobre su proyecto"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 border border-ink px-10 py-4 text-[11px] uppercase tracking-[0.28em] transition-all duration-500 hover:bg-ink hover:text-ivory"
                >
                  {sent ? "Mensaje enviado" : "Enviar mensaje"}
                </button>

                {sent && (
                  <p className="text-sm text-graphite animate-fade-in">
                    Gracias. Nos pondremos en contacto muy pronto.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
