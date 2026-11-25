# Shavi Tantra — Web

Landing de una sola página para **Shavi · Masaje Tántrico en Cala d'Or, Mallorca**.
Sitio estático publicado con GitHub Pages en `shavitantra.github.io`.

## Estructura

- `index.html` — HTML, SEO del `<head>` (incluido el JSON-LD) y un mini `<script>` en el `<head>` que fija el idioma antes de pintar. No hay build ni dependencias.
- `js/main.js` — Cambio de idioma, año del footer y carrusel de fotos.
- `lang/{en,es,fr,pt}.json` — Traducciones (clave `data-i18n` → texto). Se carga solo el idioma activo con `fetch`, así que para probar los idiomas en local hace falta un servidor (`python3 -m http.server`), no vale abrir el fichero con doble clic.
- `css/styles.css` — Todos los estilos. Las rutas `url()` son relativas a `css/` (usa `../img/`, `../fonts/`).
- `img/` — Imágenes. Usadas por la web: `logo.png` (logo Ganesha de marca, en nav + hero + favicon), `hero.jpg`, `retrato.jpg`, `cala.jpg`. Hay más imágenes en la carpeta (nataraja, ganesha, sri-yantra…) aún sin usar.
- `fonts/` — `Arsenica-Regular.woff2` (fuente de marca, usada en cabeceras).
- Sin framework.

## Secciones de la página

`Sobre mí` · `El masaje` (Yoga del Tacto) · `El lugar` (Cala d'Or) · `Testimonios` · `Tarifas` · `Contacto`.

**Testimonios** → carrusel en columnas (`SECCIÓN TESTIMONIOS` en `index.html`). Para añadir uno, copia un `<figure class="testimonio">`, usa la siguiente clave `testimonioN.texto` y añade su texto en los 4 `lang/*.json`. Los vídeos van en `img/` (p. ej. `img/nadia.mp4`) y usan un botón (`data-video="img/..."`) que solo descarga el vídeo al pulsarlo. Publica solo testimonios con permiso de la persona.

## Cómo editar (guía para Xavi)

- **Tarifas** → busca `SECCIÓN TARIFAS` en `index.html` y cambia importes/duraciones. Actualiza también `makesOffer`/`priceRange` en el bloque `application/ld+json` del `<head>` (datos para Google).
- **Textos** → busca el texto en la página y edítalo directamente. El inglés se escribe en el HTML (es lo que lee Google; el público objetivo es extranjero); las traducciones están en `lang/es.json`, `lang/fr.json` y `lang/pt.json` (y `lang/en.json`, que debe coincidir con el HTML para volver al inglés).

## SEO

- `<head>`: title/description, canonical, `hreflang` (en = URL principal, otros idiomas = `?lang=xx`), Open Graph y JSON-LD `HealthAndBeautyBusiness`.
- `robots.txt` y `sitemap.xml` en la raíz. Al cambiar contenido importante, actualiza `<lastmod>` del sitemap.
- Los bots siempre ven la versión en inglés (ver `getLang()` en `js/main.js`).
- **Fotos** → sustituye los archivos en `/img` manteniendo el mismo nombre, o cambia las rutas `src="img/..."`.
- **Colores** → variables CSS en `:root` de `css/styles.css`.
- **Fuentes**:
  - **Cabeceras** (`--font-head`, `h2`/`h3`) → **Arsenica** (`fonts/Arsenica-Regular.woff2`). ⚠️ Es la versión *Trial* (CC BY-NC); para uso comercial hay que sustituirla por la licencia de pago de Zetafonts.
  - **Cuerpo** (`--font-body`) → Cormorant (Google Fonts).
  - **Interfaz** (`--font-ui`: nav, botones, etiquetas/eyebrows, pie) → **Arsenica** (con Cormorant Garamond de fallback).
  - **Título/precios** (`--font-title`, "Shavi" + nav) → **Arsenica** (con Cormorant Garamond de fallback).
  - TAN Mon Cheri (otra fuente de marca) tampoco está disponible aún. Para añadir estas, sube el `.woff2` a `/fonts`, crea su `@font-face` y ponla primera en la variable correspondiente.

## Convenciones

- Idioma por defecto del sitio: **inglés** (`lang="en"`), el público objetivo es extranjero; español/francés/portugués via `?lang=xx`. Escribe comentarios de código en español.
- Estilos en `css/styles.css`, JS en `js/main.js`, textos traducidos en `lang/*.json`; el proyecto es intencionadamente simple, sin build tools.
- Diseño sobrio y elegante: paleta crema/dorado, tipografías serif.

## Contacto / enlaces del negocio

- Email: `shavitantra@gmail.com`
- Instagram: https://www.instagram.com/shavitantra/
- WhatsApp: +34 678 90 12 34
- Formación: Verma Kalavati (https://vermakalavati.com/)
