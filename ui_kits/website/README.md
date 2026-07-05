# Cachaçaria Chero — Website UI Kit

A high-fidelity, interactive recreation of the marketing website for Cachaçaria Chero. Built as a single-page experience that walks a visitor through:

1. **Hero** — the cellar opens up, tagline, primary CTA.
2. **História** — Chero's own story, from 1974 flood to 2002 rebuild.
3. **Processo** — how the cachaça is made, alambique to barrel.
4. **Produtos** — the full lineup (Cachaças, Licores, Bugio & Campari).
5. **Visite** — invitation to come to the alambique, address, contact CTA.
6. **Footer** — Instagram, hours, address, closing line ("Saúde!").

## How to load

Open `index.html` in a browser. Components are JSX, transpiled via Babel-standalone — no build step required. Edit any `*.jsx` file and refresh.

## Components

| File | What it is |
| --- | --- |
| `App.jsx` | Top-level stitches the page together. |
| `Nav.jsx` | Fixed top navigation with logo and CTA. |
| `Hero.jsx` | Full-bleed cellar hero with bubble cluster + tagline. |
| `Historia.jsx` | Two-column story section with portrait placeholder. |
| `Processo.jsx` | Four-step production walkthrough. |
| `Produtos.jsx` | Tabbed product grid (Cachaças / Licores / Aperitivos). |
| `ProductCard.jsx` | Single bottle card — dashed arc, sage disc, script name, ribbon price. |
| `Visite.jsx` | Visit/contact section with form. |
| `Footer.jsx` | Closing band with instagram + tagline + saúde. |
| `Bubbles.jsx` | The signature bubble-cluster SVG header ornament. |
| `Ribbon.jsx` | Reusable chevron price tag. |
| `Stamp.jsx` | Yellow gold disc badge ("Mais vendida"). |

## Brand guardrails enforced

- All copy is Portuguese (PT-BR).
- Three-adjective tasting notes in product descriptions, copied verbatim from the catalog where possible.
- Colors and type come exclusively from `../../colors_and_type.css`.
- Bottle placeholders are CSS-only — when real cut-out PNGs of each bottle become available, drop them in `bottles/` and `ProductCard.jsx` will pick them up via the `image` prop.
