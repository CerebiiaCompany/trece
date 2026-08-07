import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoTrece from "@/assets/trece-logo-transparent.png";

const NAV_LEFT = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/servicios", label: "Servicios" },
];

const NAV_RIGHT = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/proceso", label: "Proceso" },
  { to: "/contacto", label: "Contacto" },
];

const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

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

  const linkCls = `link-hover text-[11px] uppercase tracking-[0.22em] transition-colors ${
    solid ? "text-ink" : "text-ivory"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid ? "bg-ivory/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-6 py-4 md:px-10 md:py-5">
        {/* Left nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LEFT.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkCls}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Centered logo */}
        <Link to="/" className="flex items-center justify-center" aria-label="TRECE — Inicio">
          <img
            src={logoTrece}
            alt="TRECE Arquitectura y Construcción"
            className="h-9 w-auto md:h-11"
            style={{
              filter: solid ? "none" : "invert(1)",
              transition: "filter 500ms ease",
            }}
          />
        </Link>

        {/* Right nav */}
        <nav className="hidden items-center justify-end gap-8 lg:flex">
          {NAV_RIGHT.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkCls}
              activeProps={{ className: "opacity-100" }}
              inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className={`ml-2 whitespace-nowrap border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition-all duration-500 ${
              solid
                ? "border-ink text-ink hover:bg-ink hover:text-ivory"
                : "border-ivory text-ivory hover:bg-ivory hover:text-ink"
            }`}
          >
            Agendar reunión
          </Link>
        </nav>

        {/* Mobile toggle (right column on mobile) */}
        <button
          className={`justify-self-end text-[11px] uppercase tracking-[0.22em] lg:hidden ${
            solid ? "text-ink" : "text-ivory"
          }`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-line bg-ivory lg:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {ALL_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block border border-ink px-5 py-3 text-[11px] uppercase tracking-[0.22em]"
            >
              Agendar reunión
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
