# Cachaçaria Chero — Design System

> *"Desde 2002 produzindo o verdadeiro sabor da cachaça."*

This is the brand and design system for **Cachaçaria Chero**, a family-run artisanal cachaça distillery in Mato, Santa Catarina, Brazil. The system captures the rustic, warm, hand-crafted feel of the brand and gives a design agent everything it needs to build branded surfaces — a marketing website, catalog updates, social posts, presentations, etc.

The user's stated goal for the first surface built from this system: **an institutional website** that tells the distillery's story, walks visitors through the production process, showcases the product lineup (cachaças, liqueurs, Bugio, Campari), and invites people to visit the cachaçaria and buy the products.

---

## Index — what lives in this folder

| File / Folder | Contents |
| --- | --- |
| `README.md` | This document — brand context, content + visual foundations, iconography. |
| `colors_and_type.css` | All design tokens: color, type families, scale, spacing, radius, shadow, motion. Import this first. |
| `assets/logo/` | Chero badge logo (on-olive PNG + transparent PNG). *(Currently empty — see note below.)* |
| `assets/photos/` | Brand photography — distillery, sugarcane, product groupings, store shelves. *(Currently empty — see note below.)* |
| `assets/catalog/` | The 7-page product catalog as PNGs — the source of truth for layout language and tone of voice. |
| `preview/` | Small HTML cards that demonstrate each token / pattern in the Design System tab. |
| `ui_kits/website/` | React/JSX components that recreate the marketing site (`index.html`, `Hero.jsx`, `ProductCard.jsx`, etc.). **This is the implemented website — open `ui_kits/website/index.html` in a browser.** |

> **Note on images**: the source photos in the original design project are each larger than the 256 KiB per-file cap of the design-import tool used to pull this project down, so they could not be copied here and `assets/logo/` + `assets/photos/` are currently empty. The website still renders fully (colors, type, layout, product cards, forms) — photo slots (`Hero`, `Historia`, `Processo`) will show broken-image placeholders until the real PNGs are exported from the design project and dropped into these folders with the exact filenames referenced in the components (see each component's `asset('key', '../../assets/...')` calls).

---

## Brand context

**Cachaçaria Chero** is the personal cachaçaria of **Vanderlei** — known to everyone as "Chero" — built in 2002 in the town of Mato, Santa Catarina. The family had been making cachaça for generations, but the original engenho (mill) was destroyed in the 1974 flood. Chero rebuilt the tradition twenty-plus years later, using surviving fornalhas and the family waterwheel as a starting point.

The product lineup:

| Line | Products |
| --- | --- |
| **Cachaças** | Garapá (Prata — best-seller), Amburana (Premium Ouro), Carvalho (oak-aged ~2.5 yrs, Premium Ouro), Banana, Pêssego, Graspa |
| **Licores** | Limão, Morango, Pitaya, Banana, Uva, Jabuticaba, Maçã, Hortelã, Maracujá, Abacaxi, Butiá, Pêssego, Laranja |
| **Aperitivos** | Bugio (cachaça + melado + especiarias), Campari Chero (ervas finas) |
| **Acessórios** | Copos de degustação, kit presente com tábua, embalagens especiais |

Owner contact / channels — Instagram `@cachacariachero`. Tagline closes: *"Da roça para o seu copo, com o carinho de quem entende de cachaça. Saúde!"*

Full brand voice, visual foundations, color/type tokens and iconography rules are documented inline in `colors_and_type.css` and `ui_kits/website/README.md`.
