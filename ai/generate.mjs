import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const measurementId = "G-97BE9JLYDT";

const pages = {
  "zh-CN": {
    output: "index.html",
    canonical: "https://mr-kelly.github.io/ai/",
    title: "Kelly AI Deployment Service｜企业 AI 落地服务",
    description: "从 AI 理念导入、团队实战，到数字员工、企业 AI 数据中台与品牌 Agent 落地。查看 Kelly AI Deployment Service 服务与参考报价。",
    nav: ["服务报价", "落地路径", "技术底座", "联系"],
    eyebrow: "企业 AI 落地服务",
    lead: "从理念导入、团队实战，到数字员工、企业数据中台与品牌 Agent，把 AI 从认知带进真实业务。",
    heroPrimary: "查看服务报价",
    heroSecondary: "联系 Kelly",
    stages: [
      ["建立认知", "让管理层与团队理解 AI 和 Agents 公司"],
      ["完成实战", "亲手完成一次 Agent 练习"],
      ["进入业务", "把 Agent、数据和工作流放进真实场景"],
      ["形成资产", "持续复用企业数据、知识与流程"]
    ],
    serviceLabel: "服务菜单",
    serviceTitle: "从一次课程，到一套可运行的 AI 能力",
    serviceIntro: "可以从培训或工作坊开始，也可以直接从一个 Agent、一套数据工作台或企业品牌小程序开始。以下为客户参考报价。",
    headers: ["类别", "服务", "核心交付", "形式 / 时长", "服务报价"],
    mobileLabels: ["类别", "服务", "交付", "形式", "报价"],
    services: [
      ["training", "培训", "Agents 公司搭建实战课程", "24 节系统实战，从 Agent 方法到 Agents 公司搭建", "线上，每节约 90 分钟", "人民币 599 元 / 人"],
      ["training", "启蒙", "Agents 公司理念导入", "故事化演讲，理解 AI 的重要性与 Agents 公司的最终图景", "线下主题演讲", "人民币 15,000 元 / 场"],
      ["build", "实战", "Agents 公司搭建实战工作坊", "手把手完成一次 Agent 实战，让团队从理解走向操作", "线下 3 小时", "人民币 25,000 元 / 场"],
      ["training", "定制", "企业 AI 定制工作坊", "围绕行业、岗位和业务目标设计专属落地课程", "线下 1–3 天", "人民币 30,000–150,000 元 / 项目"],
      ["build", "落地", "AI 数字员工 / Agents 公司搭建", "基于 Buda AI：1 个 Agent、1 条核心工作流、培训与 1 个月维护起", "定制交付", "国内人民币 12,000 元起 / 海外 US$2,000 起"],
      ["data", "数据", "企业 AI 数据中台", "数据整理、清洗、结构和权限设计，形成企业数据工作台", "项目制", "人民币 12,000 元起 / 按项目报价"],
      ["platform", "模型", "国际大模型中转服务（MoonRouter）", "统一使用 GPT、Claude、Gemini，无需自行处理海外账号与支付采购", "在线充值，按量使用", "官方 API 价格 5 折"],
      ["brand", "品牌", "企业品牌专属 Agent 小程序", "企业品牌微信 Agent 小程序，用于培训、内部服务或会员式对外服务", "品牌定制", "人民币 99,999 元起"]
    ],
    finePrint: "以上人民币报价均为未税价。线下服务的差旅食宿视项目情况另行确认；最终范围、周期、报价和验收标准以正式报价单或合同为准。",
    journeyLabel: "交付方法",
    journeyTitle: "先确认一个能验收的目标，再扩展",
    journeyIntro: "定制项目不从功能清单开始，而是从业务目标、负责人、数据和验收结果开始。",
    steps: [
      ["01", "目标确认", "明确问题、目标用户与预期结果。"],
      ["02", "范围设计", "确认课程、Agent、工作流、数据和系统连接。"],
      ["03", "实施交付", "完成培训、配置、搭建或数据处理。"],
      ["04", "培训验收", "用真实但受控的业务场景验证。"],
      ["05", "持续优化", "按使用结果扩展工作流和服务入口。"]
    ],
    foundationLabel: "技术底座",
    foundationTitle: "产品服务于交付，不让客户先买一堆工具",
    foundationIntro: "项目按业务目标选择技术组合。Buda AI、Busabase、Vika、MoonRouter 和小小 Agent 是实现交付的基础，而不是沟通的起点。",
    foundations: [
      ["Buda AI", "搭建、管理和运行 AI 数字员工与 Agents 公司。"],
      ["Busabase + Vika", "整理、清洗和结构化管理企业数据，形成数据工作台。"],
      ["MoonRouter", "统一使用 GPT、Claude、Gemini 等国际大模型。"],
      ["小小 Agent", "形成带企业品牌的微信 Agent 小程序和服务入口。"]
    ],
    profileTitle: "Kelly 陈霈霖",
    profileRole: "Kelly AI Deployment Service",
    profileText: "Buda、Vika 与 AITable 创始人，前喜茶创始 CTO。长期从产品、技术与组织视角推动 AI、企业软件和数字化能力进入真实业务。",
    commercialLabel: "商务说明",
    commercialTitle: "范围透明，按结果推进",
    commercialItems: [
      "定制项目根据目标、人数、数据规模、工作流复杂度、系统连接和周期报价。",
      "第三方模型、软件订阅和额外定制开发如有发生，将在正式报价中单独列明。",
      "不承诺未经调研的接口、数据质量、交付周期或固定效率倍数。",
      "客户可从一个最小场景开始，验证后再扩展。"
    ],
    contactTitle: "从一个具体场景开始",
    contactText: "告诉 Kelly 你的业务目标、团队情况和希望 AI 改变的流程，我们会先判断适合培训、工作坊还是直接落地。",
    phoneLabel: "电话 18688180270",
    wechatLabel: "复制微信 23110388",
    copiedLabel: "微信号已复制：23110388",
    fallbackLabel: "微信号：23110388",
    resumeLabel: "了解 Kelly",
    footer: "Kelly AI Deployment Service"
  },
  en: {
    output: "en/index.html",
    canonical: "https://mr-kelly.github.io/ai/en/",
    title: "Kelly AI Deployment Service | Enterprise AI Enablement",
    description: "Enterprise AI training, hands-on workshops, AI employees, data workspaces, model access, and branded Agent mini-programs by Kelly AI Deployment Service.",
    nav: ["Services", "Delivery", "Technology", "Contact"],
    eyebrow: "Enterprise AI enablement",
    lead: "Move from AI awareness and team practice to AI employees, enterprise data workspaces, and branded Agent experiences in real operations.",
    heroPrimary: "View services & pricing",
    heroSecondary: "Contact Kelly",
    stages: [
      ["Align", "Give leaders and teams a shared AI operating picture"],
      ["Practice", "Complete a hands-on Agent exercise"],
      ["Deploy", "Put Agents, data, and workflows into real operations"],
      ["Compound", "Reuse company data, knowledge, and processes"]
    ],
    serviceLabel: "Service menu",
    serviceTitle: "Start with one session or build a lasting AI capability",
    serviceIntro: "Begin with training or a workshop, or start directly with an Agent, a data workspace, or a branded mini-program. Prices below are customer reference prices.",
    headers: ["Type", "Service", "Core delivery", "Format / duration", "Price"],
    mobileLabels: ["Type", "Service", "Delivery", "Format", "Price"],
    services: [
      ["training", "Training", "Building an Agents Company", "24 practical sessions covering Agent methods through company-level orchestration", "Online, about 90 minutes each", "RMB 599 / person"],
      ["training", "Vision", "Agents Company Introduction", "Story-led keynote on why AI matters and what an Agents company can become", "On-site keynote", "RMB 15,000 / session"],
      ["build", "Practice", "Agents Company Hands-on Workshop", "Guided Agent build that moves a team from understanding to operation", "On-site, 3 hours", "RMB 25,000 / session"],
      ["training", "Custom", "Enterprise AI Custom Workshop", "A tailored program around the company's industry, roles, and operating goals", "On-site, 1–3 days", "RMB 30,000–150,000 / project"],
      ["build", "Deploy", "AI Employees / Agents Company Build", "Built on Buda AI: from 1 Agent, 1 core workflow, enablement, and 1 month of maintenance", "Custom delivery", "RMB 12,000+ domestic / US$2,000+ overseas"],
      ["data", "Data", "Enterprise AI Data Hub", "Data organization, cleaning, structure, and access design for an AI-ready workspace", "Project-based", "RMB 12,000+ / scoped quote"],
      ["platform", "Models", "International Model Access (MoonRouter)", "Unified GPT, Claude, and Gemini access without managing overseas vendor accounts and payments", "Online credit, usage-based", "50% of official API pricing"],
      ["brand", "Brand", "Branded Enterprise Agent Mini Program", "A branded WeChat Agent mini program for training, internal service, or member-facing delivery", "Custom build", "RMB 99,999+"]
    ],
    finePrint: "RMB prices exclude tax. Travel and accommodation for on-site delivery may be quoted separately. Final scope, schedule, fees, and acceptance criteria are governed by the formal quotation or contract.",
    journeyLabel: "Delivery method",
    journeyTitle: "Define one measurable outcome, then expand",
    journeyIntro: "Custom engagements start with the business objective, accountable owner, data, and acceptance criteria rather than a speculative feature list.",
    steps: [
      ["01", "Define", "Clarify the problem, target users, and desired outcome."],
      ["02", "Scope", "Confirm training, Agents, workflows, data, and integrations."],
      ["03", "Deliver", "Run enablement, configuration, builds, or data work."],
      ["04", "Validate", "Test with a real but controlled business scenario."],
      ["05", "Improve", "Expand workflows and service entry points based on use."]
    ],
    foundationLabel: "Technology foundation",
    foundationTitle: "Technology supports the delivery, not the opening pitch",
    foundationIntro: "Each engagement uses the combination that fits the business objective. Buda AI, Busabase, Vika, MoonRouter, and Xiaoxiao Agent are delivery foundations rather than products every client must buy.",
    foundations: [
      ["Buda AI", "Builds, manages, and runs AI employees and Agents companies."],
      ["Busabase + Vika", "Organizes, cleans, and structures enterprise data into a working data hub."],
      ["MoonRouter", "Provides unified access to GPT, Claude, Gemini, and other international models."],
      ["Xiaoxiao Agent", "Creates a branded WeChat Agent mini program and service entry point."]
    ],
    profileTitle: "Kelly Peilin Chan",
    profileRole: "Kelly AI Deployment Service",
    profileText: "Founder of Buda, Vika, and AITable, and former founding CTO of HEYTEA. Kelly works across product, technology, and organization design to bring AI and enterprise software into real operations.",
    commercialLabel: "Commercial notes",
    commercialTitle: "Transparent scope, outcome-led delivery",
    commercialItems: [
      "Custom quotes reflect objectives, participant count, data scale, workflow complexity, integrations, and timeline.",
      "Third-party model usage, software subscriptions, and additional custom development are itemized when applicable.",
      "Unassessed integrations, data quality, schedules, or fixed productivity multipliers are not promised.",
      "Clients can start with one minimum viable scenario and expand after validation."
    ],
    contactTitle: "Start with one specific workflow",
    contactText: "Share the business objective, team context, and workflow you want AI to improve. We will first determine whether training, a workshop, or direct implementation is the right starting point.",
    phoneLabel: "Call +86 186 8818 0270",
    wechatLabel: "Copy WeChat 23110388",
    copiedLabel: "WeChat copied: 23110388",
    fallbackLabel: "WeChat: 23110388",
    resumeLabel: "About Kelly",
    footer: "Kelly AI Deployment Service"
  },
  "zh-HK": {
    output: "zh-hk/index.html",
    canonical: "https://mr-kelly.github.io/ai/zh-hk/",
    title: "Kelly AI Deployment Service｜企業 AI 落地服務",
    description: "從 AI 理念導入、團隊實戰，到數碼員工、企業 AI 數據中台與品牌 Agent 落地。查看 Kelly AI Deployment Service 服務與參考報價。",
    nav: ["服務報價", "落地路徑", "技術底座", "聯絡"],
    eyebrow: "企業 AI 落地服務",
    lead: "從理念導入、團隊實戰，到數碼員工、企業數據中台與品牌 Agent，把 AI 從認知帶進真實業務。",
    heroPrimary: "查看服務報價",
    heroSecondary: "聯絡 Kelly",
    stages: [
      ["建立認知", "讓管理層與團隊理解 AI 和 Agents 公司"],
      ["完成實戰", "親手完成一次 Agent 練習"],
      ["進入業務", "把 Agent、數據和工作流程放進真實場景"],
      ["形成資產", "持續重用企業數據、知識與流程"]
    ],
    serviceLabel: "服務菜單",
    serviceTitle: "從一次課程，到一套可運行的 AI 能力",
    serviceIntro: "可以從培訓或工作坊開始，也可以直接從一個 Agent、一套數據工作台或企業品牌小程式開始。以下為客戶參考報價。",
    headers: ["類別", "服務", "核心交付", "形式 / 時長", "服務報價"],
    mobileLabels: ["類別", "服務", "交付", "形式", "報價"],
    services: [
      ["training", "培訓", "Agents 公司搭建實戰課程", "24 節系統實戰，從 Agent 方法到 Agents 公司搭建", "網上，每節約 90 分鐘", "人民幣 599 元 / 人"],
      ["training", "啟蒙", "Agents 公司理念導入", "故事化演講，理解 AI 的重要性與 Agents 公司的最終圖景", "線下主題演講", "人民幣 15,000 元 / 場"],
      ["build", "實戰", "Agents 公司搭建實戰工作坊", "手把手完成一次 Agent 實戰，讓團隊從理解走向操作", "線下 3 小時", "人民幣 25,000 元 / 場"],
      ["training", "定制", "企業 AI 定制工作坊", "圍繞行業、崗位和業務目標設計專屬落地課程", "線下 1–3 天", "人民幣 30,000–150,000 元 / 項目"],
      ["build", "落地", "AI 數碼員工 / Agents 公司搭建", "基於 Buda AI：1 個 Agent、1 條核心工作流程、培訓與 1 個月維護起", "定制交付", "國內人民幣 12,000 元起 / 海外 US$2,000 起"],
      ["data", "數據", "企業 AI 數據中台", "數據整理、清洗、結構和權限設計，形成企業數據工作台", "項目制", "人民幣 12,000 元起 / 按項目報價"],
      ["platform", "模型", "國際大模型中轉服務（MoonRouter）", "統一使用 GPT、Claude、Gemini，毋須自行處理海外帳戶與付款採購", "網上充值，按量使用", "官方 API 價格 5 折"],
      ["brand", "品牌", "企業品牌專屬 Agent 小程式", "企業品牌微信 Agent 小程式，用於培訓、內部服務或會員式對外服務", "品牌定制", "人民幣 99,999 元起"]
    ],
    finePrint: "以上人民幣報價均為未稅價。線下服務的差旅住宿視項目情況另行確認；最終範圍、週期、報價和驗收標準以正式報價單或合約為準。",
    journeyLabel: "交付方法",
    journeyTitle: "先確認一個可驗收的目標，再擴展",
    journeyIntro: "定制項目不從功能清單開始，而是從業務目標、負責人、數據和驗收結果開始。",
    steps: [
      ["01", "目標確認", "明確問題、目標用戶與預期結果。"],
      ["02", "範圍設計", "確認課程、Agent、工作流程、數據和系統連接。"],
      ["03", "實施交付", "完成培訓、配置、搭建或數據處理。"],
      ["04", "培訓驗收", "用真實但受控的業務場景驗證。"],
      ["05", "持續優化", "按使用結果擴展工作流程和服務入口。"]
    ],
    foundationLabel: "技術底座",
    foundationTitle: "產品服務於交付，不讓客戶先買一堆工具",
    foundationIntro: "項目按業務目標選擇技術組合。Buda AI、Busabase、Vika、MoonRouter 和小小 Agent 是實現交付的基礎，而不是溝通的起點。",
    foundations: [
      ["Buda AI", "搭建、管理和運行 AI 數碼員工與 Agents 公司。"],
      ["Busabase + Vika", "整理、清洗和結構化管理企業數據，形成數據工作台。"],
      ["MoonRouter", "統一使用 GPT、Claude、Gemini 等國際大模型。"],
      ["小小 Agent", "形成帶企業品牌的微信 Agent 小程式和服務入口。"]
    ],
    profileTitle: "Kelly 陳霈霖",
    profileRole: "Kelly AI Deployment Service",
    profileText: "Buda、Vika 與 AITable 創辦人，前喜茶創始 CTO。長期從產品、技術與組織視角推動 AI、企業軟件和數碼化能力進入真實業務。",
    commercialLabel: "商務說明",
    commercialTitle: "範圍透明，按結果推進",
    commercialItems: [
      "定制項目根據目標、人數、數據規模、工作流程複雜度、系統連接和週期報價。",
      "第三方模型、軟件訂閱和額外定制開發如有發生，將在正式報價中單獨列明。",
      "不承諾未經調研的介面、數據質量、交付週期或固定效率倍數。",
      "客戶可從一個最小場景開始，驗證後再擴展。"
    ],
    contactTitle: "從一個具體場景開始",
    contactText: "告訴 Kelly 你的業務目標、團隊情況和希望 AI 改變的流程，我們會先判斷適合培訓、工作坊還是直接落地。",
    phoneLabel: "電話 18688180270",
    wechatLabel: "複製微信 23110388",
    copiedLabel: "微信號已複製：23110388",
    fallbackLabel: "微信號：23110388",
    resumeLabel: "了解 Kelly",
    footer: "Kelly AI Deployment Service"
  }
};

const languageLinks = [
  ["EN", "/ai/en/", "en"],
  ["简", "/ai/", "zh-CN"],
  ["繁", "/ai/zh-hk/", "zh-HK"]
];

const alternateLinks = [
  ["en", "https://mr-kelly.github.io/ai/en/"],
  ["zh-CN", "https://mr-kelly.github.io/ai/"],
  ["zh-HK", "https://mr-kelly.github.io/ai/zh-hk/"],
  ["x-default", "https://mr-kelly.github.io/ai/"]
];

function renderLanguageSwitcher(current) {
  return languageLinks.map(([label, href, lang]) => {
    const currentAttr = lang === current ? ' aria-current="page"' : "";
    return `<a href="${href}" lang="${lang}"${currentAttr}>${label}</a>`;
  }).join("");
}

function renderPage(lang, page) {
  const serviceRows = page.services.map(([type, category, name, delivery, format, price]) => `
          <tr>
            <td class="service-category" data-label="${page.mobileLabels[0]}"><span class="tag tag-${type}">${category}</span></td>
            <td class="service-name" data-label="${page.mobileLabels[1]}">${name}</td>
            <td class="service-delivery" data-label="${page.mobileLabels[2]}">${delivery}</td>
            <td class="service-format" data-label="${page.mobileLabels[3]}">${format}</td>
            <td class="service-price" data-label="${page.mobileLabels[4]}">${price}</td>
          </tr>`).join("");

  const heroStages = page.stages.map(([title, text]) => `
        <div class="hero-stage"><strong>${title}</strong><span>${text}</span></div>`).join("");

  const steps = page.steps.map(([number, title, text]) => `
        <article class="journey-step">
          <span class="journey-number">${number}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`).join("");

  const foundations = page.foundations.map(([title, text]) => `
              <li><strong>${title}</strong><span>${text}</span></li>`).join("");

  const commercialItems = page.commercialItems.map((item) => `<li>${item}</li>`).join("");
  const navIds = ["services", "delivery", "foundation", "contact"];
  const nav = page.nav.map((label, index) => `<a href="#${navIds[index]}">${label}</a>`).join("");
  const alternates = alternateLinks.map(([hreflang, href]) => `  <link rel="alternate" hreflang="${hreflang}" href="${href}">`).join("\n");
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kelly AI Deployment Service",
    url: page.canonical,
    description: page.description,
    areaServed: ["CN", "HK", "US"],
    provider: {
      "@type": "Person",
      name: "Kelly Peilin Chan",
      url: "https://mr-kelly.github.io/resume/"
    },
    serviceType: [
      "Enterprise AI Training",
      "AI Agent Workshop",
      "AI Employee Implementation",
      "Enterprise AI Data Hub",
      "Branded Agent Mini Program"
    ]
  }).replaceAll("<", "\\u003c");

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${measurementId}');
  </script>
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="author" content="Kelly Peilin Chan">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${page.canonical}">
${alternates}
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="/ai/styles.css?v=20260726">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Kelly AI Deployment Service">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${page.canonical}">
  <meta property="og:image" content="https://mr-kelly.github.io/resume/kelly-chan-ai-agents-talk.webp">
  <meta property="og:image:width" content="800">
  <meta property="og:image:height" content="533">
  <meta property="og:image:alt" content="Kelly presenting an AI Agents session">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="https://mr-kelly.github.io/resume/kelly-chan-ai-agents-talk.webp">
  <script type="application/ld+json">${structuredData}</script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="/ai/"><span class="brand-mark" aria-hidden="true">K</span><span>Kelly AI Deployment Service</span></a>
      <div class="header-actions">
        <nav class="primary-nav" aria-label="Primary">${nav}</nav>
        <nav class="language-switcher" aria-label="Language">${renderLanguageSwitcher(lang)}</nav>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="shell hero-inner">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1 id="hero-title">Kelly AI<br>Deployment Service</h1>
        <p class="hero-lead">${page.lead}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#services">${page.heroPrimary}</a>
          <a class="button button-secondary" href="#contact">${page.heroSecondary}</a>
        </div>
      </div>
    </section>

    <div class="hero-stages" aria-label="AI deployment stages">${heroStages}
    </div>

    <section class="section section-white" id="services">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.serviceLabel}</p>
            <h2>${page.serviceTitle}</h2>
          </div>
          <p class="section-intro">${page.serviceIntro}</p>
        </div>
        <div class="service-table-wrap">
          <table class="service-table">
            <thead><tr>${page.headers.map((header) => `<th scope="col">${header}</th>`).join("")}</tr></thead>
            <tbody>${serviceRows}
            </tbody>
          </table>
        </div>
        <p class="fine-print">${page.finePrint}</p>
      </div>
    </section>

    <section class="section section-dark" id="delivery">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.journeyLabel}</p>
            <h2>${page.journeyTitle}</h2>
          </div>
          <p class="section-intro">${page.journeyIntro}</p>
        </div>
        <div class="journey">${steps}
        </div>
      </div>
    </section>

    <section class="section" id="foundation">
      <div class="shell foundation-layout">
        <div>
          <p class="section-label">${page.foundationLabel}</p>
          <h2>${page.foundationTitle}</h2>
          <p class="section-intro" style="margin-top: 18px;">${page.foundationIntro}</p>
          <ul class="foundation-list">${foundations}
          </ul>
        </div>
        <aside class="profile">
          <img src="/resume/kelly-chan-portrait.webp?v=20260726" width="152" height="152" loading="lazy" decoding="async" alt="${page.profileTitle}">
          <div>
            <h3>${page.profileTitle}</h3>
            <p class="profile-role">${page.profileRole}</p>
            <p>${page.profileText}</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section-dark" id="contact">
      <div class="shell commercial-grid">
        <div>
          <p class="section-label">${page.commercialLabel}</p>
          <h2>${page.commercialTitle}</h2>
          <ul class="commercial-list">${commercialItems}</ul>
        </div>
        <div class="contact-panel">
          <h2>${page.contactTitle}</h2>
          <p>${page.contactText}</p>
          <div class="contact-details">
            <a class="contact-chip" href="tel:+8618688180270">${page.phoneLabel}</a>
            <button class="contact-chip" type="button" data-copy-wechat data-copied-label="${page.copiedLabel}" data-fallback-label="${page.fallbackLabel}">${page.wechatLabel}</button>
            <a class="contact-chip" href="/resume/">${page.resumeLabel}</a>
          </div>
          <p class="copy-status" aria-live="polite" data-copy-status></p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="shell footer-inner">
      <span>© 2026 ${page.footer}</span>
      <a href="/">mr-kelly.github.io</a>
    </div>
  </footer>
  <script src="/ai/site.js?v=20260726"></script>
</body>
</html>
`;
}

for (const [lang, page] of Object.entries(pages)) {
  const output = join(root, page.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, renderPage(lang, page), "utf8");
  console.log(`Generated ${output}`);
}
