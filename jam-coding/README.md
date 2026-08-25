# Jam Coding

A public methodology page: what the human does while a coding agent runs.

## Routes

- `/jam-coding/`: English, and `x-default`
- `/jam-coding/zh-cn/`: Simplified Chinese

English holds the root because "Jam Coding" is a coined English term — external links land on the bare URL, so that URL should serve the language those readers read. It also matches `/resume/` and `/events/`; note `/ai/` uses the opposite convention (Chinese at the root), so don't copy its layout here.

The two pages are hand-written translations of each other, not generated. **Any content change must be applied to both files in the same commit** — otherwise the `hreflang` pair goes out of sync and the two versions start making different claims.

Shared presentation lives in `styles.css` (loaded by both pages via `/jam-coding/styles.css?v=<date>`); bump the `?v=` query on both pages when the stylesheet changes.

The interactive workout builder lives in `app.js`. Its package data contains both English and Chinese; every package must offer complete 5, 10, and 15 minute variants in both languages. The HTML keeps the controls and initial treadmill state visible for each locale, while JavaScript renders the selected prescription and runs the timer.

## Positioning — read before editing

This page is a **pure methodology statement**. It deliberately carries no sales CTA, no pricing, and no service pitch. Commercial intent lives at `/ai/`; keep it there. The only outbound links are attribution (`/resume/`) and site navigation. If a future edit wants to sell something from this page, it should become a separate page instead.

It also intentionally names no product or timer app. The practice is meant to work with any coding agent and a watch.

## Structure

Section order is the argument, so keep it:

1. **Definition** — the one-sentence claim, plus the jam-session etymology
2. **The premise** — the bottleneck moved from writing to waiting
3. **Three rules** — leavable tasks / the block belongs to you / read the result, not the reel
4. **The Jam Chart** — the centrepiece. Five beats (Fill, Comp, Solo, Set, Overnight) mapping agent run time to a human activity, plus what *not* to do in that beat
5. **The gym protocol** — an interactive package and duration selector, followed by before / between / after rules
6. **The human track** — the three things only a person can do with the block
7. **What a day looks like** — a concrete timeline
8. **Anti-patterns** — the four ways people hand the saved time back
9. **FAQ** — mirrored in `FAQPage` JSON-LD

Two accent colours carry meaning throughout: teal (`--machine`) is agent time, amber (`--human`) is human time. Don't use them decoratively.

The Jam Chart breaks out wider than the prose column on desktop (`.chart-wrap` uses a centred breakout) and collapses to stacked cards under 640px via `data-label` attributes on each `<td>` — new rows need those attributes or the mobile layout loses its headers.

## After editing

1. Update **both** language files.
2. If changing workout packages, update both locale objects in `app.js` and keep all three duration variants complete.
3. Keep the two `application/ld+json` blocks in sync with the visible text — especially `FAQPage`, where answers must match the rendered copy.
4. Bump `dateModified` in the `Article` JSON-LD, and the `lastmod` for both URLs in `/sitemap-main.xml` plus the `sitemap-main.xml` entry in `/sitemap.xml`.
5. Check desktop and mobile layout, timer behavior, all package/duration combinations, and that the canonical/hreflang links still point at the right pair.
