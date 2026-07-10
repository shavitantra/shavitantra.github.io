# Shavi Tantra — Brand Kit for Claude Design

Design with Shavi's exact tokens and typography. Import `styles.css` and use the CSS variables below — never raw hex or generic fonts.

## Quick start

```html
<link rel="stylesheet" href="_ds/styles.css">
```

## Color

| Token | Value | Role |
|---|---|---|
| `var(--cream)` | `#f6f0e6` | Page background |
| `var(--lino)` | `#ece3d4` | Alternate section bg |
| `var(--sand)` | `#e3d6c1` | Footer bg |
| `var(--ink)` | `#3d342a` | Primary text |
| `var(--ink-soft)` | `#6f6353` | Secondary text |
| `var(--gold)` | `#b08a4f` | Eyebrows / accents |
| `var(--gold-deep)` | `#8a6a37` | Headings / CTAs / links |
| `var(--line)` | `rgba(176,138,79,.30)` | Borders / dividers |

## Typography

| Variable | Role |
|---|---|
| `var(--font-title)` | Brand name / hero H1 |
| `var(--font-head)` | Section headings (h2, h3) |
| `var(--font-body)` | Body copy |
| `var(--font-ui)` | Nav, buttons, labels, footer |

All fonts are bundled: Arsenica (woff2) + Cormorant/Cormorant Garamond (Google Fonts).

## Layout

- `var(--maxw)` = `900px` — max content width
- `.wrap` — centers content with `26px` horizontal padding
- Sections: `padding: 84px 0`, `border-bottom: 1px solid var(--line)`
- Alternate sections: `background: var(--lino)`

## Pattern: section

```html
<section style="padding:84px 0;border-bottom:1px solid var(--line)">
  <div class="wrap">
    <div style="font-family:var(--font-ui);color:var(--gold);letter-spacing:.24em;text-transform:uppercase;font-size:.72rem;text-align:center;margin-bottom:14px">Eyebrow</div>
    <h2 style="font-family:var(--font-head);font-weight:400;font-size:2.3rem;letter-spacing:.04em;text-align:center;margin-bottom:38px;color:var(--ink)">Heading</h2>
    <p style="font-size:1.28rem;color:var(--ink-soft);text-align:center;max-width:660px;margin:0 auto;font-style:italic">Lead text.</p>
  </div>
</section>
```

## Pattern: price card

```html
<div style="background:var(--cream);border:1px solid var(--line);border-radius:14px;padding:36px 28px;text-align:center">
  <h3 style="font-family:var(--font-head);font-weight:400;font-size:1.4rem;color:var(--gold-deep);margin-bottom:8px">Sesión completa</h3>
  <div style="font-family:var(--font-body);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);margin-bottom:20px">120 minutos</div>
  <div style="font-family:var(--font-body);font-size:2.6rem;color:var(--ink);line-height:1">160<span style="font-size:1rem;color:var(--ink-soft)">€</span></div>
</div>
```

## Pattern: CTA buttons

```html
<!-- Primary -->
<a href="#" style="display:inline-block;font-family:var(--font-ui);font-size:.82rem;letter-spacing:.14em;text-transform:uppercase;padding:15px 38px;background:var(--gold-deep);color:var(--cream);text-decoration:none;border-radius:2px">Reservar</a>

<!-- Outlined -->
<a href="#" style="font-family:var(--font-ui);font-size:.82rem;letter-spacing:.1em;padding:14px 30px;border:1px solid var(--gold);border-radius:2px;text-decoration:none;color:var(--gold-deep)">Instagram</a>
```

See `guidelines/brand.md` for full reference.