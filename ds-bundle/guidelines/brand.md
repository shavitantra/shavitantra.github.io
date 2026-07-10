# Shavi Tantra — Brand Guidelines

Masaje tántrico en Cala d'Or, Mallorca. Diseño sobrio y elegante: paleta crema/dorado, tipografías serif.

---

## Setup

Import `styles.css` at the top of any design. It pulls in tokens, fonts, and the base reset.

```html
<link rel="stylesheet" href="_ds/styles.css">
```

---

## Color tokens

| Token | Value | Use |
|---|---|---|
| `var(--cream)` | `#f6f0e6` | Page background |
| `var(--lino)` | `#ece3d4` | Alternate section background |
| `var(--sand)` | `#e3d6c1` | Footer background |
| `var(--ink)` | `#3d342a` | Primary text |
| `var(--ink-soft)` | `#6f6353` | Secondary / supporting text |
| `var(--gold)` | `#b08a4f` | Eyebrow labels, fine accents |
| `var(--gold-deep)` | `#8a6a37` | Headings, CTAs, links |
| `var(--line)` | `rgba(176,138,79,.30)` | Borders and dividers |

Never use raw hex — always reference these tokens so designs stay on-brand.

---

## Typography

Four font-family variables, each for a distinct role:

| Variable | Stack | Use |
|---|---|---|
| `var(--font-title)` | Arsenica → Cormorant Garamond → Georgia | Brand name "Shavi", hero H1 |
| `var(--font-head)` | Arsenica → Marcellus → Georgia | Section headings (h2, h3) |
| `var(--font-body)` | Cormorant → Georgia | Body copy, paragraphs |
| `var(--font-ui)` | Arsenica → Cormorant Garamond → Georgia | Nav, buttons, eyebrow labels, footer |

- **Arsenica** (brand display font, CC BY-NC Trial) — loaded from `fonts/Arsenica-Regular.woff2` and `fonts/Arsenica-Bold.woff2`.
- **Cormorant / Cormorant Garamond** — loaded from Google Fonts.

---

## Typical idiom

```html
<!-- Section with eyebrow + heading -->
<section style="padding:84px 0;border-bottom:1px solid var(--line)">
  <div class="wrap">
    <div style="font-family:var(--font-ui);color:var(--gold);letter-spacing:.24em;text-transform:uppercase;font-size:.72rem;text-align:center;margin-bottom:14px">
      Eyebrow label
    </div>
    <h2 style="font-family:var(--font-head);text-align:center;font-weight:400;font-size:2.3rem;letter-spacing:.04em;margin-bottom:38px;color:var(--ink)">
      Section heading
    </h2>
    <p style="font-size:1.28rem;color:var(--ink-soft);text-align:center;max-width:660px;margin:0 auto;font-style:italic">
      Lead paragraph text.
    </p>
  </div>
</section>

<!-- Gold CTA button -->
<a href="#" style="display:inline-block;font-family:var(--font-ui);font-size:.82rem;letter-spacing:.14em;text-transform:uppercase;padding:15px 38px;background:var(--gold-deep);color:var(--cream);text-decoration:none;border-radius:2px">
  Reservar una sesión
</a>

<!-- Outlined secondary button -->
<a href="#" style="font-family:var(--font-ui);font-size:.82rem;letter-spacing:.1em;padding:14px 30px;border:1px solid var(--gold);border-radius:2px;text-decoration:none;color:var(--gold-deep)">
  Instagram
</a>
```

---

## Layout

- Max content width: `var(--maxw)` (`900px`)
- Side padding: `26px` (handled by `.wrap`)
- Section padding: `84px 0`
- Alternate sections: `background:var(--lino)`

---

## Contact

- Email: shavitantra@gmail.com
- Instagram: https://www.instagram.com/shavitantra/