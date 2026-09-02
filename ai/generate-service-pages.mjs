import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const measurementId = "G-97BE9JLYDT";
const localeSegment = { "zh-CN": "", en: "en/", "zh-HK": "zh-hk/" };
const labels = {
  "zh-CN": { back: "返回 Kelly AI 服务", contact: "联系 Kelly", fit: "适合", notFit: "不适合", next: "下一步", copied: "微信号已复制", fallback: "请手动复制微信号：23110388", phone: "电话 18688180270", wechat: "复制微信 23110388", resume: "了解 Kelly" },
  en: { back: "Back to Kelly AI services", contact: "Contact Kelly", fit: "Good fit", notFit: "Not a fit", next: "Next step", copied: "WeChat ID copied", fallback: "Copy manually: 23110388", phone: "Call +86 186 8818 0270", wechat: "Copy WeChat 23110388", resume: "About Kelly" },
  "zh-HK": { back: "返回 Kelly AI 服務", contact: "聯絡 Kelly", fit: "適合", notFit: "不適合", next: "下一步", copied: "微信號已複製", fallback: "請手動複製微信號：23110388", phone: "電話 18688180270", wechat: "複製微信 23110388", resume: "了解 Kelly" }
};

const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
const attr = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const fit = (yes, no, label) => `<div class="fit-check fit-check-light"><div class="fit-yes"><p class="fit-label">${label.fit}</p><p>${yes}</p></div><div class="fit-no"><p class="fit-label">${label.notFit}</p><p>${no}</p></div></div>`;
const cycle = (items, prefix = "caio") => `<div class="${prefix}-cycle">${items.map(([number, title, text]) => `<article class="${prefix}-step"><span class="${prefix}-number">${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>`;
const outputs = (title, items, meta, prefix = "caio") => `<div class="${prefix}-output"><p class="${prefix}-output-label">${title}</p><ul>${list(items)}</ul><p class="${prefix}-meta">${meta}</p></div>`;
const offers = (items, prefix) => `<div class="vibe-offers ${prefix === "training" ? "training-offers" : ""}">${items.map(([number, title, audience, text, points, meta], i) => `<article class="vibe-offer" id="${prefix}-${i + 1}"><span class="vibe-offer-number">${number}</span><h3>${title}</h3><p class="vibe-audience">${audience}</p><p>${text}</p><ul>${list(points)}</ul><p class="vibe-meta">${meta}</p></article>`).join("")}</div>`;

function languageSwitcher(lang, slug) {
  return [["en", "EN"], ["zh-CN", "简"], ["zh-HK", "繁"]].map(([code, title]) => {
    const href = `/ai/${localeSegment[code]}${slug}/`;
    return `<a href="${href}"${lang === code ? ' aria-current="page"' : ""}>${title}</a>`;
  }).join("");
}

function familyDefinitions(page, lang) {
  const l = labels[lang];
  const commonContact = `<section class="section section-caio-contact" id="contact"><div class="shell commercial-grid"><div><p class="section-label">${l.next}</p><h2>${page.contactTitle}</h2><p class="section-intro caio-contact-copy">${page.contactText}</p></div>${contactPanel(page, l)}</div></section>`;
  const consultScenarios = `<div class="scenarios"><p class="scenarios-label">${page.consultScenariosLabel}</p><div class="scenario-list">${page.consultScenarios.map(([title, text]) => `<article class="scenario-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div>`;
  const productCards = `<div class="product-cards">${page.productsItems.map(([title, text, meta], i) => `<article class="product-card" id="product-${i + 1}"><h3>${title}</h3><p>${text}</p><p class="product-meta">${meta}</p></article>`).join("")}</div>`;
  return [
    { slug: "consult", label: page.consultLabel, title: page.consultTitle, intro: page.consultIntro, theme: "section-consult", body: `${consultScenarios}${fit(page.consultFitYesText, page.consultFitNoText, l)}${cycle(page.consultSteps, "consult")}${outputs(page.consultOutputLabel, page.consultOutputs, page.consultMeta, "consult")}<div class="trust-strip"><p>${page.consultTrust}</p></div>` },
    { slug: "training", label: page.trainingLabel, title: page.trainingTitle, intro: page.trainingIntro, theme: "section-white", body: `${fit(page.trainingFitYesText, page.trainingFitNoText, l)}${offers(page.trainingOffers, "training")}<div class="trust-strip trust-strip-light"><p>${page.trainingTrust}</p></div>` },
    { slug: "vibe-coding", label: page.vibeLabel, title: page.vibeTitle, intro: page.vibeIntro, theme: "section-vibe", body: `${fit(page.vibeFitYesText, page.vibeFitNoText, l)}<div class="vibe-proof">${page.vibeProof.map(([title, text]) => `<div class="vibe-proof-item"><strong>${title}</strong><span>${text}</span></div>`).join("")}</div>${offers(page.vibeOffers, "vibe")}<div class="trust-strip trust-strip-light"><p>${page.vibeTrust}</p></div>` },
    { slug: "ai-employees", label: page.deployLabel, title: page.deployTitle, intro: page.deployIntro, theme: "section-dark", body: `${fit(page.deployFitYesText, page.deployFitNoText, l).replaceAll("fit-check-light", "")}${cycle(page.deploySteps)}${outputs(page.deployOutputLabel, page.deployOutputs, page.deployMeta)}<div class="trust-strip"><p>${page.deployTrust}</p></div>` },
    { slug: "ai-assets", label: page.assetsLabel, title: page.assetsTitle, intro: page.assetsIntro, theme: "section-dark", body: `${fit(page.assetsFitYesText, page.assetsFitNoText, l).replaceAll("fit-check-light", "")}${cycle(page.assetsSteps, "consult")}${outputs(page.assetsOutputLabel, page.assetsOutputs, page.assetsMeta, "consult")}<div class="trust-strip"><p>${page.assetsTrust}</p></div>` },
    { slug: "products", label: page.productsLabel, title: page.productsTitle, intro: page.productsIntro, theme: "section-white", body: productCards }
  ].map((item) => ({ ...item, contact: commonContact }));
}

function contactPanel(page, l) {
  return `<div class="contact-panel"><div class="contact-details"><a class="contact-chip" href="tel:+8618688180270">${l.phone}</a><button class="contact-chip" type="button" data-copy-wechat data-copied-label="${l.copied}" data-fallback-label="${l.fallback}">${l.wechat}</button><a class="contact-chip" href="/resume/">${l.resume}</a></div><p class="copy-status" aria-live="polite" data-copy-status></p></div>`;
}

function renderPage(lang, page, family) {
  const l = labels[lang];
  const segment = localeSegment[lang];
  const canonical = `https://mr-kelly.github.io/ai/${segment}${family.slug}/`;
  const alternates = [["en", "en/"], ["zh-CN", ""], ["zh-HK", "zh-hk/"], ["x-default", ""]].map(([code, path]) => `<link rel="alternate" hreflang="${code}" href="https://mr-kelly.github.io/ai/${path}${family.slug}/">`).join("");
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${family.label}｜Kelly AI Deployment Service</title><meta name="description" content="${attr(family.intro)}"><link rel="canonical" href="${canonical}">${alternates}<meta property="og:title" content="${attr(family.label)}｜Kelly AI"><meta property="og:description" content="${attr(family.intro)}"><meta property="og:type" content="website"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://mr-kelly.github.io/resume/kelly-chan-ai-agents-talk.webp"><link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/ai/styles.css?v=20260903"><script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurementId}');</script></head><body class="service-detail-page"><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="shell header-inner"><a class="brand" href="${page.canonical.replace("https://mr-kelly.github.io", "")}"><span class="brand-mark" aria-hidden="true">K</span><span>Kelly AI Deployment Service</span></a><div class="header-actions"><nav class="primary-nav" aria-label="Primary"><a href="${page.canonical.replace("https://mr-kelly.github.io", "")}">${l.back}</a><a href="#contact">${l.contact}</a></nav><nav class="language-switcher" aria-label="Language">${languageSwitcher(lang, family.slug)}</nav></div></div></header><main id="main"><section class="hero service-detail-hero"><div class="shell hero-inner"><p class="eyebrow">Kelly AI Deployment Service</p><h1>${family.label}</h1><p class="hero-lead">${family.title}</p><div class="hero-actions"><a class="button button-primary" href="#detail">${family.label}</a><a class="button button-secondary" href="#contact">${l.contact}</a></div></div></section><section class="section ${family.theme}" id="detail"><div class="shell"><div class="section-heading"><div><p class="section-label">${family.label}</p><h2>${family.title}</h2></div><p class="section-intro">${family.intro}</p></div>${family.body}</div></section>${family.contact}</main><footer class="site-footer"><div class="shell footer-inner"><span>© 2026 Kelly AI Deployment Service</span><a href="${page.canonical.replace("https://mr-kelly.github.io", "")}">${l.back}</a></div></footer><script src="/ai/site.js?v=20260903"></script></body></html>`;
}

export async function generateServicePages(pages) {
  for (const [lang, page] of Object.entries(pages)) {
    for (const family of familyDefinitions(page, lang)) {
      const output = join(root, localeSegment[lang], family.slug, "index.html");
      await mkdir(dirname(output), { recursive: true });
      await writeFile(output, renderPage(lang, page, family), "utf8");
      console.log(`Generated ${output}`);
    }
  }
}
