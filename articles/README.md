# Articles

Long-form content for Kelly's public channels.

## These files ARE live web pages

GitHub Pages runs Jekyll on this repository (there is no `.nojekyll` at the
root), so every `.md` file here is rendered to `/articles/<name>.html` and
published **as soon as it is pushed to `master`**. There is no separate build
step and no staging.

| Article | Live URL |
| --- | --- |
| 企业做 AI，最缺的不是工具，而是一个把结果逼出来的人 | <https://kellychan.im/articles/enterprise-ai-needs-caio-and-fde.html> |
| 研发团队越招越多，产品为什么还是做不快？ | <https://kellychan.im/articles/ai-native-rd-team-optimization.html> |
| 你越努力学 AI，越可能一直做那个超级打工人 | <https://kellychan.im/articles/stop-learning-ai-start-managing-it.html> |

All three are listed in [`sitemap-main.xml`](../sitemap-main.xml) and linked
from the article cards on `/ai/` and `/ai/caio/`, which are generated from
`ai/generate.mjs` and `ai/generate-caio.mjs`. Renaming a file breaks those
links and the sitemap — update both generators and the sitemap in the same
commit.

## Frontmatter reaches the public page

`jekyll-seo-tag` reads the frontmatter directly, so these fields are not
internal notes — they are what search engines, WeChat and LinkedIn show:

- `title` → `<title>` and `og:title`
- `description` → `<meta name="description">` and `og:description`
- `author` → `<meta name="author">`

`subtitle`, `digest`, `cover_title` and `cover_subtitle` are for the WeChat
Official Account backend and are not rendered by Jekyll.

## status vs. actually published

`status: draft | ready | published` tracks the **WeChat Official Account**
lifecycle only. **Jekyll ignores it** — a file marked `draft` is still live on
the web the moment it is pushed.

To keep a file off the website, use Jekyll's own switch:

```yaml
published: false
```

## Publishing Boundary

- Pushing to `master` publishes to the web immediately. Treat every push here
  as a public release.
- Do not include customer names, private conversations, unapproved
  screenshots, internal pricing, or identifiable operating data.
- Verify service facts against <https://kellychan.im/ai/> before pushing.
- Publishing to WeChat or another external channel is a separate step and
  requires separate human approval.
- Writing conventions (narrative spine, formula, author card, description
  hook, pre-publish checklist) live in the sales repository at
  `sales-kit/services/kelly-ai/internal/consultant-promotion-writing-playbook.md`.
