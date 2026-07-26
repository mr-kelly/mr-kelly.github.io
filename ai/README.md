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

After changing service facts, prices, language content, routes, or contact details:

1. Regenerate all HTML pages.
2. Check desktop and mobile layouts.
3. Check canonical and hreflang links.
4. Update `sitemap-main.xml` when routes change.
5. Confirm the Google tag and contact actions still work.
