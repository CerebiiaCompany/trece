<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Regla obligatoria: imágenes

Nunca subas ni referencies imágenes como archivos `*.asset.json` (los
punteros que Lovable genera con una URL interna tipo
`/__l5e/assets-v1/<id>/<file>`). Esa URL solo resuelve dentro del dominio de
preview de Lovable (`*.lovable.app`) y rompe en cualquier otro despliegue
(producción, Cloudflare, etc.) — esto ya pasó más de una vez en este
proyecto.

Toda imagen nueva debe guardarse como archivo binario real dentro de
`src/assets/` (no en `.asset.json`) e importarse de la forma estándar de
Vite:

```ts
import miImagen from "@/assets/mi-imagen.jpg";
```

Si un cambio introduce algún `src/assets/*.asset.json`, es un bug: hay que
descargar el binario real (el campo `url` del JSON, resuelto contra el
dominio de preview del proyecto en Lovable) y guardarlo en `src/assets/`
con el import normal de arriba, luego borrar el `.asset.json`.
