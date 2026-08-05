import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories, projects } from "@/lib/projects";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/nosotros", "/servicios", "/proyectos", "/proceso", "/contacto"];
        const projectPaths = projects.map((p) => `/proyectos/${p.slug}`);
        const categoryPaths = categories.map((c) => `/proyectos/categoria/${c.slug}`);
        const all = [...staticPaths, ...categoryPaths, ...projectPaths];

        const urls = all
          .map(
            (path) =>
              `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
