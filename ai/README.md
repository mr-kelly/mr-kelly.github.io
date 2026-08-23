# Kelly AI Deployment Service Website

Customer-facing multilingual website for Kelly AI Deployment Service.

## Routes

- `/ai/`: Simplified Chinese and x-default
- `/ai/en/`: English
- `/ai/zh-hk/`: Traditional Chinese

## Maintain

`generate.mjs` contains the localized content and generates the three HTML entry points.

```bash
node ai/generate.mjs
```

Shared presentation and behavior live in `styles.css` and `site.js`. The service and pricing facts come from the Kelly AI Sales Kit in the sourcing repository. Customer pages must not include partner earnings, settlement rules, internal cost, or negotiation notes.

## Service detail page template

Every row in the services table links (via `serviceAnchors` in `generate.mjs`, indexed to match `services` row order) to a detail section further down the page. Top nav only lists the flagship sections (`#consult`, `#caio`, `#vibe-coding`, plus `#delivery`/`#foundation`/`#contact`) — it stays short on purpose; every other service is reached by clicking its name in the table, not from nav.

Two shapes of detail section, pick by how considered the purchase is:

**Consultative services** (`#consult`, `#caio`, `#vibe-coding`, `#training`, `#deploy`, `#assets`) follow this beat order — it's the internal authoring checklist, not something to label on the page:

1. **Hook (Why)** — `section-label` + `h2` + `section-intro`. State the reader's situation in their own words, not "why you need this."
2. **Scenarios (什么问题)** — `.scenarios`/`.scenario-list`/`.scenario-card`, three concrete situations a reader recognizes themselves in ("we're launching a new business line", "we need a business plan and something to demo"). This answers **what problem it solves**, and is deliberately separate from the next beat, which answers **who it's for** — don't collapse the two, and don't let the scenarios restate the fit list in other words.
3. **Fit (self-qualification)** — `.fit-check` (or `.fit-check.fit-check-light` on a white section), two columns: who this is for and who should look at a different service instead.
4. **How (process)** — the step cycle. Reuse `.caio-cycle`/`.caio-step`/`.caio-number` or `.consult-cycle`/`.consult-step`/`.consult-number` for a 3–4 step flow, or `.vibe-offers`/`.vibe-offer` (optionally with a grid modifier like `.training-offers`) when the section is really a menu of distinct offers rather than one sequential process.
5. **What (deliverables)** — the matching output list (`.caio-output` / `.consult-output`), plus a closing `*-meta` line for logistics (cadence, minimum term, credit/upsell notes).
6. **Trust** — `.trust-strip` (or `.trust-strip.trust-strip-light`), one line of credibility tied specifically to this service, not the generic bio in `foundation`.
7. **Price** — stays in the services table; not repeated in the detail block.

Beat 2 currently only exists on `#consult`. It is the highest-converting block on the page, so extend it to the other consultative sections when there are three genuinely distinct situations to name — not as filler. `.scenarios-label` defaults to the teal accent; override per section (see `.section-consult .scenarios-label`) to match that section's palette.

**Product/platform services** (`#products`, covering MoonRouter and the branded mini program) skip the consulting framing entirely — no interview-style process, no fit-check. Use the lighter `.product-cards`/`.product-card` grid: title, one line of value, one line of logistics/price. Don't force a product into the six-beat template just for consistency; it reads as forced.

`.fit-check` and `.trust-strip` are shared components (defined once in `styles.css`) — reuse them, don't rebuild per service. When adding a new service row, add its anchor to `serviceAnchors` at the same index, and decide up front which of the two shapes above it needs.

After changing service facts, prices, language content, routes, or contact details:

1. Regenerate all HTML pages.
2. Check desktop and mobile layouts.
3. Check canonical and hreflang links.
4. Update `sitemap-main.xml` when routes change.
5. Confirm the Google tag and contact actions still work.
