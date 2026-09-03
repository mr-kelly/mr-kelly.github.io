# articles/

Source for the public article index at <https://kellychan.im/articles/>.

- `index.md` — the reader-facing page GitHub Pages actually serves at
  `/articles/`. Edit this, not this file, when changing what visitors see.
- Each `<slug>.md` here publishes to `/articles/<slug>.html` the moment it is
  pushed to `master` (GitHub Pages runs Jekyll, no `.nojekyll`, no staging).

Writing conventions, the publishing checklist and content red lines live in
the sales repository, not here: `sales-kit/services/kelly-ai/internal/consultant-promotion-writing-playbook.md`.

**Do not give this file YAML front matter.** `README.md` without front matter
is not converted into an HTML page by Jekyll, so it stays a plain repo doc.
Adding front matter previously caused Jekyll to route it to `/articles/README.html`
as its own page, which knocked `/articles/` itself back to a 404 — that is
what `index.md` now exists to prevent.
