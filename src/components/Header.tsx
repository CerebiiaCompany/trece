import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/trece-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/proceso", label: "Proceso" },
  { to: "/contacto", label: "Contacto" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid ? "bg-ivory/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        {/* Left nav */}
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {NAV.slice(0, 3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`link-hover text-[11px] uppercase tracking-[0.24em] transition-colors ${
                solid ? "text-ink" : "text-ivory"
              }`}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Centered logo */}
        <Link to="/" className="flex-shrink-0 md:mx-8">
          <div className={`flex items-center gap-3 transition-opacity ${solid ? "" : "invert-0"}`}>
            <img
              src={logoAsset.url}
              alt="TRECE Arquitectura y Construcción"
              className={`h-10 w-auto md:h-12 transition ${solid ? "" : ""}`}
              style={solid ? { filter: "none" } : { filter: "brightness(0) invert(1)" }}
            />
          </div>
        </Link>

        {/* Right nav */}
        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {NAV.slice(3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`link-hover text-[11px] uppercase tracking-[0.24em] transition-colors ${
                solid ? "text-ink" : "text-ivory"
              }`}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className={`ml-4 border px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] transition-all duration-500 ${
              solid
                ? "border-ink text-ink hover:bg-ink hover:text-ivory"
                : "border-ivory text-ivory hover:bg-ivory hover:text-ink"
            }`}
          >
            Agendar reunión
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className={`md:hidden text-[11px] uppercase tracking-[0.24em] ${solid ? "text-ink" : "text-ivory"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-line animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-ink text-sm uppercase tracking-[0.24em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block border border-ink px-5 py-3 text-[11px] uppercase tracking-[0.24em]"
            >
              Agendar reunión
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
