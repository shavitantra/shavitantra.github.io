# Shavi Tantra — Web

Landing de una sola página para **Shavi · Masaje Tántrico en Cala d'Or, Mallorca**.
Sitio estático publicado con GitHub Pages en `shavitantra.github.io`.

## Estructura

- `index.html` — Toda la web: HTML + CSS (dentro de `<style>`) + un `<script>` mínimo (año del footer). No hay build ni dependencias.
- `img/` — Imágenes. Usadas por la web: `logo.png` (logo Ganesha de marca, en nav + hero + favicon), `hero.jpg`, `retrato.jpg`, `cala.jpg`. Hay más imágenes en la carpeta (nataraja, ganesha, sri-yantra…) aún sin usar.
- `fonts/` — `Arsenica-Regular.woff2` (fuente de marca, usada en cabeceras).
- No hay `css/`, `js/` ni framework: todo vive en `index.html`.

## Secciones de la página

`Sobre mí` · `El masaje` (Yoga del Tacto) · `El lugar` (Cala d'Or) · `Tarifas` · `Contacto`.

## Cómo editar (guía para Xavi)

- **Tarifas** → busca `SECCIÓN TARIFAS` en `index.html` y cambia importes/duraciones.
- **Textos** → busca el texto en la página y edítalo directamente.
- **Fotos** → sustituye los archivos en `/img` manteniendo el mismo nombre, o cambia las rutas `src="img/..."`.
- **Colores** → variables CSS en `:root`.
- **Fuentes**:
  - **Cabeceras** (`--font-head`, `h2`/`h3`) → **Arsenica** (`fonts/Arsenica-Regular.woff2`). ⚠️ Es la versión *Trial* (CC BY-NC); para uso comercial hay que sustituirla por la licencia de pago de Zetafonts.
  - **Cuerpo** (`--font-body`) → Cormorant (Google Fonts).
  - **Interfaz** (`--font-ui`: nav, botones, etiquetas/eyebrows, pie) → **Arsenica** (con Cormorant Garamond de fallback).
  - **Título/precios** (`--font-title`, "Shavi" + nav) → **Arsenica** (con Cormorant Garamond de fallback).
  - TAN Mon Cheri (otra fuente de marca) tampoco está disponible aún. Para añadir estas, sube el `.woff2` a `/fonts`, crea su `@font-face` y ponla primera en la variable correspondiente.

## Convenciones

- Idioma del sitio: **español** (`lang="es"`). Escribe textos y comentarios en español.
- Mantén el CSS inline dentro de `index.html`; el proyecto es intencionadamente simple, sin build tools.
- Diseño sobrio y elegante: paleta crema/dorado, tipografías serif.

## Contacto / enlaces del negocio

- Email: `shavitantra@gmail.com`
- Instagram: https://www.instagram.com/shavitantra/
- Bio Sites: https://bio.site/shavitantra_es
- Formación: Verma Kalavati (https://vermakalavati.com/)
