import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/trece-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={logoAsset.url}
              alt="TRECE"
              className="h-14 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mt-8 max-w-md font-display text-2xl leading-tight text-ivory/85 md:text-3xl">
              Diseñamos espacios que permanecen en el tiempo.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-ivory/50">Contacto</div>
            <ul className="mt-5 space-y-2 text-sm text-ivory/85">
              <li>hola@trecearq.co</li>
              <li>+57 300 000 0000</li>
              <li>Cúcuta · Norte de Santander</li>
              <li>Colombia</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/50">Redes</div>
            <ul className="mt-5 space-y-2 text-sm text-ivory/85">
              <li><a href="https://instagram.com" className="link-hover">Instagram</a></li>
              <li><a href="https://linkedin.com" className="link-hover">LinkedIn</a></li>
              <li><a href="https://maps.google.com" className="link-hover">Mapa</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-ivory/50">Navegación</div>
            <ul className="mt-5 space-y-2 text-sm text-ivory/85">
              <li><Link to="/proyectos" className="link-hover">Proyectos</Link></li>
              <li><Link to="/servicios" className="link-hover">Servicios</Link></li>
              <li><Link to="/nosotros" className="link-hover">Nosotros</Link></li>
              <li><Link to="/contacto" className="link-hover">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-ivory/15 pt-8 text-[11px] uppercase tracking-[0.24em] text-ivory/50 md:flex-row">
          <span>© {new Date().getFullYear()} TRECE Arquitectura y Construcción</span>
          <span>Arquitectura · Ingeniería · Construcción</span>
        </div>
      </div>
    </footer>
  );
}
