# Resume pages

Six pages — two positionings (general, CAIO) across three languages — are
generated from a single content file.

```
resume/content.mjs    all copy for all six pages
resume/generate.mjs   the template and writer
resume/styles.css     shared stylesheet (hand-maintained)
resume/resume.js      print button (hand-maintained)
```

## Editing

Edit `content.mjs`, then:

```bash
node resume/generate.mjs
```

Do not edit the generated `index.html` files. They used to be six
hand-maintained copies, which is how six copies drift.

## Structure of a document entry

Each key in `DOCS` (`main-en`, `main-zh-cn`, `main-zh-hk`, `caio-en`,
`caio-zh-cn`, `caio-zh-hk`) carries:

- `head` — the entire `<head>` verbatim, including per-page SEO and JSON-LD
- `summaryLead` / `summary` / `metrics` — the top of the page
- `whereHelp` — CAIO pages only; omit the key on the general pages
- `practice` — the four-step operating model, each step with its `cost` line
- `experience`, `tradeoff`, `work`, `capabilities`, `education`,
  `interests`, `media`, `footer`

Values are HTML fragments, so links and `<strong>` are written inline.
