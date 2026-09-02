import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const measurementId = "G-97BE9JLYDT";

const pages = {
  "zh-CN": {
    output: "caio/index.html",
    canonical: "https://mr-kelly.github.io/ai/caio/",
    title: "兼职 CAIO｜企业级 AI 转型与研发改造｜Kelly AI",
    description: "Kelly 以兼职 CAIO 方式持续带队，提供企业级 AI 转型与研发改造两条路径；每周确定优先级、推进真实业务并验收结果。",
    home: "/ai/",
    nav: ["两种路径", "前 30 天", "交付验收", "合作边界", "联系"],
    navTargets: ["#paths", "#first-30-days", "#outcomes", "#boundaries", "#contact"],
    eyebrow: "Kelly AI 企业 AI 落地服务",
    heroTitle: "兼职 CAIO",
    heroLead: "像请来一位全职 AI 负责人，从经营目标到研发交付，每周把最重要的事情向前推进，并用真实证据验收。",
    heroPrimary: "选择切入路径",
    heroSecondary: "联系 Kelly",
    heroSignals: [["企业级 AI 转型", "跨部门优先级与业务闭环"], ["研发改造", "交付透明、AI Coding 与技术资产"], ["FDE 工作包", "需要系统实施时按范围配置"]],
    problemLabel: "为什么需要 CAIO",
    problemTitle: "AI 工具已经很多，真正缺的是把目标、执行和验收串起来的人",
    problemIntro: "战略层知道 AI 重要，员工也开始试工具，但中间没有人持续决定先做什么、调动谁来做、怎样证明做成。兼职 CAIO 补上的不是一个职位名称，而是一套经营机制。",
    problemSignals: [["方向散", "各部门自行试工具，没有公司级优先级。"], ["执行断", "建议很多，但没有负责人、期限和每周推进。"], ["结果虚", "Demo 做出来了，缺少基线、测试和业务验收。"], ["资产丢", "经验留在个人和聊天记录中，换人就要重来。"]],
    pathsLabel: "两种切入路径",
    pathsTitle: "先选择当前最主要的矛盾",
    pathsIntro: "两条路径共用同一套 CAIO 工作节奏，不要求同时采购。可以从研发切入再扩展到企业级转型，也可以先确定公司级优先级，再进入具体研发改造。",
    paths: [
      { id: "enterprise", number: "01", title: "企业级 AI 转型 CAIO", fit: "适合管理层已认可 AI，但部门各自试工具、没有统一路线和业务闭环的企业。", focus: ["从经营目标筛选最值得投入的 AI 场景", "协调业务、产品、技术、数据与安全团队", "建立周度执行和月度管理层复盘", "让一个跨部门业务闭环先跑起来"], outputs: ["AI 机会与优先级路线图", "跨部门任务与负责人机制", "可验收业务成果与管理层决策"] },
      { id: "rd", number: "02", title: "研发改造 CAIO", fit: "适合研发持续投入却交付不透明、文档断层，或 AI Coding 只停留在局部写代码的企业。", focus: ["梳理目标、需求、代码、测试与发布价值流", "建立任务／PR／测试／签收证据链", "恢复产品、架构、接口与发布文档", "变成团队可复用的 AI 原生研发方法"], outputs: ["研发价值流与交付看板", "一个真实任务的完整研发闭环", "产品技术资产与团队优化建议"] }
    ],
    cadenceLabel: "共同工作节奏",
    cadenceTitle: "不是交一份报告，而是每周推动一个真实结果",
    cadence: [["01", "每周问诊", "和管理层及业务负责人检查目标、进展、卡点和新机会。"], ["02", "确定实战", "选定最高优先级任务，明确结果、负责人、期限和验收标准。"], ["03", "带队执行", "协调团队与 AI Agents 推进业务、数据、流程或系统成果。"], ["04", "验收复盘", "用证据检查结果，沉淀方法与资产，排定下一周行动。"]],
    firstLabel: "前 30 天",
    firstTitle: "先建立基线，再决定如何扩大",
    firstIntro: "第一个月不承诺全面改造。先用一个有边界的真实场景建立信任和数据，具体节奏按系统规模、权限与团队配合确认。",
    firstSteps: [["第 1 周", "看清现状", "访谈决策人和一线团队，画出目标、流程、系统、数据、角色与风险。"], ["第 2 周", "选定试点", "冻结一个高价值、数据可得、能够人工验收的场景。"], ["第 3 周", "跑通闭环", "完成任务定义、执行、测试、证据与人工签收的最小闭环。"], ["第 4 周", "复盘决策", "形成基线、成果、风险和 Go／No-Go 建议，决定继续、调整或停止。"]],
    outcomesLabel: "交付与验收",
    outcomesTitle: "每周看得见，月底能决策",
    outcomesIntro: "指标不套用示例数字。先测量当前基线，再由双方冻结定义、数据范围、目标阈值和签收人。",
    deliverablesTitle: "核心交付",
    deliverables: ["有负责人、期限和完成定义的周度任务清单", "一个持续推进并能够人工验收的真实业务成果", "问题、根因、修改、测试、证据和签收记录", "方法、文档、数据、Agent Skills 与下一阶段路线图"],
    metricsTitle: "常用验收维度",
    metrics: ["交付周期与等待时间", "任务与证据可追溯率", "质量、返工与回归缺陷", "人工接管与团队独立操作能力", "业务结果与管理层决策速度"],
    boundariesLabel: "合作边界",
    boundariesTitle: "CAIO 对推进负责，但不制造无法验证的承诺",
    boundaries: [["不以裁员为项目目标", "先让任务、产出和能力透明，组织调整由客户依据事实决定。"], ["不承诺固定效率倍数", "范围、数据、系统和团队不同，先建立基线再设目标。"], ["不绕过人工上线", "AI 产出必须经过约定测试、权限控制和人工发布授权。"], ["FDE 单独定范围", "涉及 Agent、代码、自动化测试、系统集成或私有化部署时，另行确认 SOW、里程碑、Evals 和报价。"]],
    trustLabel: "为什么是 Kelly",
    trustTitle: "既看经营，也能进入研发一线",
    trustText: "Kelly 是 Buda、Vika 与 AITable 创始人，前喜茶创始 CTO。拥有百万行级企业软件研发与交付经验，带过 150 人以上跨职能团队，也长期以业务目标驱动团队与 AI 协作。",
    contactLabel: "下一步",
    contactTitle: "带一个真实问题来，先判断从哪条路径切入",
    contactText: "准备好最希望改变的业务结果、当前负责人、一个候选流程或代码仓库，以及你认为“做成”的标准。我们先做一次需求判断，再确认是否适合兼职 CAIO 和 FDE。",
    phone: "电话 18688180270",
    wechat: "复制微信 23110388",
    copied: "微信号已复制",
    fallback: "请手动复制微信号：23110388",
    resume: "了解 Kelly",
    back: "返回 Kelly AI 服务",
    footer: "Kelly AI Deployment Service"
  },
  en: {
    output: "en/caio/index.html", canonical: "https://mr-kelly.github.io/ai/en/caio/", title: "Fractional CAIO | Enterprise & R&D AI Transformation | Kelly AI", description: "Kelly leads weekly execution as a fractional CAIO through enterprise AI transformation or R&D transformation, with evidence-based delivery and optional FDE work packages.", home: "/ai/en/", nav: ["Tracks", "First 30 days", "Outcomes", "Boundaries", "Contact"], navTargets: ["#paths", "#first-30-days", "#outcomes", "#boundaries", "#contact"], eyebrow: "Kelly AI Deployment Service", heroTitle: "Fractional CAIO", heroLead: "Bring in the impact of an in-house AI leader: turn business goals into weekly priorities, lead execution, and review outcomes with evidence.", heroPrimary: "Choose a track", heroSecondary: "Contact Kelly", heroSignals: [["Enterprise AI", "Cross-functional priorities and operating loops"], ["R&D transformation", "Visible delivery, AI coding, and durable assets"], ["FDE work packages", "Scoped engineering when implementation is needed"]], problemLabel: "Why a CAIO", problemTitle: "Tools are abundant. The missing role connects direction, execution, and acceptance.", problemIntro: "Leadership knows AI matters and employees are experimenting, but nobody continuously chooses the work, aligns owners, and proves the result. A fractional CAIO installs that operating mechanism.", problemSignals: [["Scattered direction", "Departments run disconnected tool experiments."], ["Broken execution", "Advice has no owner, deadline, or weekly follow-through."], ["Unproven outcomes", "Demos lack baselines, tests, and business acceptance."], ["Lost assets", "Knowledge stays in people and chat histories."]], pathsLabel: "Two engagement tracks", pathsTitle: "Start with the company's most important constraint", pathsIntro: "Both tracks use the same CAIO cadence and do not need to be purchased together. Start with one, then expand as evidence accumulates.", paths: [{id:"enterprise",number:"01",title:"Enterprise AI Transformation CAIO",fit:"For companies with leadership support but fragmented department experiments and no shared roadmap.",focus:["Select AI opportunities from business goals","Align business, product, engineering, data, and security","Run weekly execution and monthly executive reviews","Make one cross-functional operating loop work first"],outputs:["AI opportunity portfolio and roadmap","Cross-functional ownership system","Accepted business outcome and executive decision"]},{id:"rd",number:"02",title:"R&D Transformation CAIO",fit:"For companies investing in engineering without delivery visibility, durable documentation, or an end-to-end AI coding method.",focus:["Map goals, requirements, code, tests, and release flow","Build a task / PR / test / sign-off evidence chain","Recover product, architecture, API, and release documentation","Turn working practice into an AI-native engineering method"],outputs:["R&D value stream and delivery view","One complete real-task engineering loop","Technical assets and team optimization recommendations"]}], cadenceLabel:"Shared operating cadence",cadenceTitle:"Not another report: one real outcome moves every week",cadence:[["01","Weekly diagnosis","Review goals, progress, blockers, and new opportunities."],["02","Set the work","Choose the top priority and define outcome, owner, deadline, and acceptance."],["03","Lead execution","Coordinate the team and AI Agents across business, data, workflow, or systems."],["04","Review and reset","Validate evidence, retain assets, and set the next actions."]], firstLabel:"First 30 days",firstTitle:"Establish a baseline before scaling",firstIntro:"The first month does not promise a company-wide transformation. Prove one bounded scenario and use its evidence to decide what comes next.",firstSteps:[["Week 1","See the system","Map goals, process, systems, data, roles, and risk."],["Week 2","Choose the pilot","Freeze one valuable, data-accessible, human-verifiable scenario."],["Week 3","Close the loop","Run task definition, execution, testing, evidence, and human sign-off."],["Week 4","Make the decision","Review baseline, outcome, risk, and a Go / No-Go recommendation."]], outcomesLabel:"Delivery and acceptance",outcomesTitle:"Visible every week, decision-ready every month",outcomesIntro:"Metrics are not copied from examples. Establish the current baseline, then freeze definitions, data scope, thresholds, and sign-off owners together.",deliverablesTitle:"Core deliverables",deliverables:["Weekly work with owners, deadlines, and definition of done","A real business outcome that continues to advance","Problem, cause, change, test, evidence, and sign-off records","Methods, documentation, data, Agent Skills, and next-stage roadmap"],metricsTitle:"Typical evaluation dimensions",metrics:["Delivery cycle and wait time","Task and evidence traceability","Quality, rework, and regression defects","Human intervention and team independence","Business outcomes and executive decision speed"],boundariesLabel:"Engagement boundaries",boundariesTitle:"Accountable for progress, without unverifiable promises",boundaries:[["Not a headcount-reduction program","Make work and capability visible; the client makes organization decisions from evidence."],["No fixed efficiency multiple","Scope, data, systems, and teams differ; measure a baseline before setting targets."],["No bypassing human release authority","AI output passes agreed tests, access controls, and human approval."],["FDE is scoped separately","Agents, code changes, automated tests, integrations, or private deployment require a separate SOW, milestones, evals, and quote."]],trustLabel:"Why Kelly",trustTitle:"Business judgment with hands-on engineering depth",trustText:"Kelly founded Buda, Vika, and AITable and served as founding CTO of HEYTEA. He has led 150+ cross-functional staff, delivered million-line enterprise software, and runs teams and AI against business outcomes.",contactLabel:"Next step",contactTitle:"Bring one real problem. We will identify the right entry track.",contactText:"Prepare the business outcome you want to change, the current owner, one candidate process or repository, and your definition of success. We will first determine whether a fractional CAIO and FDE engagement fits.",phone:"Call +86 186 8818 0270",wechat:"Copy WeChat 23110388",copied:"WeChat ID copied",fallback:"Copy manually: 23110388",resume:"About Kelly",back:"Back to Kelly AI services",footer:"Kelly AI Deployment Service"
  },
  "zh-HK": {
    output:"zh-hk/caio/index.html",canonical:"https://mr-kelly.github.io/ai/zh-hk/caio/",title:"兼職 CAIO｜企業級 AI 轉型與研發改造｜Kelly AI",description:"Kelly 以兼職 CAIO 方式持續帶隊，提供企業級 AI 轉型與研發改造兩條路徑；每週確定優先級、推進真實業務並驗收結果。",home:"/ai/zh-hk/",nav:["兩種路徑","前 30 天","交付驗收","合作邊界","聯絡"],navTargets:["#paths","#first-30-days","#outcomes","#boundaries","#contact"],eyebrow:"Kelly AI 企業 AI 落地服務",heroTitle:"兼職 CAIO",heroLead:"像請來一位全職 AI 負責人，從經營目標到研發交付，每週把最重要的事情向前推進，並用真實證據驗收。",heroPrimary:"選擇切入路徑",heroSecondary:"聯絡 Kelly",heroSignals:[["企業級 AI 轉型","跨部門優先級與業務閉環"],["研發改造","交付透明、AI Coding 與技術資產"],["FDE 工作包","需要系統實施時按範圍配置"]],problemLabel:"為什麼需要 CAIO",problemTitle:"AI 工具已經很多，真正缺的是把目標、執行和驗收串起來的人",problemIntro:"戰略層知道 AI 重要，員工也開始試工具，但中間沒有人持續決定先做什麼、調動誰來做、怎樣證明做成。兼職 CAIO 補上的不是一個職位名稱，而是一套經營機制。",problemSignals:[["方向散","各部門自行試工具，沒有公司級優先級。"],["執行斷","建議很多，但沒有負責人、期限和每週推進。"],["結果虛","Demo 做出來了，缺少基線、測試和業務驗收。"],["資產丟","經驗留在個人和聊天記錄中，換人就要重來。"]],pathsLabel:"兩種切入路徑",pathsTitle:"先選擇當前最主要的矛盾",pathsIntro:"兩條路徑共用同一套 CAIO 工作節奏，不要求同時採購。可以從研發切入再擴展到企業級轉型，也可以先確定公司級優先級，再進入具體研發改造。",paths:[{id:"enterprise",number:"01",title:"企業級 AI 轉型 CAIO",fit:"適合管理層已認可 AI，但部門各自試工具、沒有統一路線和業務閉環的企業。",focus:["從經營目標篩選最值得投入的 AI 場景","協調業務、產品、技術、數據與安全團隊","建立每週執行和每月管理層複盤","讓一個跨部門業務閉環先跑起來"],outputs:["AI 機會與優先級路線圖","跨部門任務與負責人機制","可驗收業務成果與管理層決策"]},{id:"rd",number:"02",title:"研發改造 CAIO",fit:"適合研發持續投入卻交付不透明、文檔斷層，或 AI Coding 只停留在局部寫代碼的企業。",focus:["梳理目標、需求、代碼、測試與發布價值流","建立任務／PR／測試／簽收證據鏈","恢復產品、架構、接口與發布文檔","變成團隊可重用的 AI 原生研發方法"],outputs:["研發價值流與交付看板","一個真實任務的完整研發閉環","產品技術資產與團隊優化建議"]}],cadenceLabel:"共同工作節奏",cadenceTitle:"不是交一份報告，而是每週推動一個真實結果",cadence:[["01","每週問診","和管理層及業務負責人檢查目標、進展、卡點和新機會。"],["02","確定實戰","選定最高優先級任務，明確結果、負責人、期限和驗收標準。"],["03","帶隊執行","協調團隊與 AI Agents 推進業務、數據、流程或系統成果。"],["04","驗收複盤","用證據檢查結果，沉澱方法與資產，排定下一週行動。"]],firstLabel:"前 30 天",firstTitle:"先建立基線，再決定如何擴大",firstIntro:"第一個月不承諾全面改造。先用一個有邊界的真實場景建立信任和數據，具體節奏按系統規模、權限與團隊配合確認。",firstSteps:[["第 1 週","看清現狀","訪談決策人和一線團隊，畫出目標、流程、系統、數據、角色與風險。"],["第 2 週","選定試點","凍結一個高價值、數據可得、能夠人工驗收的場景。"],["第 3 週","跑通閉環","完成任務定義、執行、測試、證據與人工簽收的最小閉環。"],["第 4 週","複盤決策","形成基線、成果、風險和 Go／No-Go 建議，決定繼續、調整或停止。"]],outcomesLabel:"交付與驗收",outcomesTitle:"每週看得見，月底能決策",outcomesIntro:"指標不套用示例數字。先測量當前基線，再由雙方凍結定義、數據範圍、目標門檻和簽收人。",deliverablesTitle:"核心交付",deliverables:["有負責人、期限和完成定義的每週任務清單","一個持續推進並能夠人工驗收的真實業務成果","問題、根因、修改、測試、證據和簽收記錄","方法、文檔、數據、Agent Skills 與下一階段路線圖"],metricsTitle:"常用驗收維度",metrics:["交付週期與等待時間","任務與證據可追溯率","質量、返工與回歸缺陷","人工接管與團隊獨立操作能力","業務結果與管理層決策速度"],boundariesLabel:"合作邊界",boundariesTitle:"CAIO 對推進負責，但不製造無法驗證的承諾",boundaries:[["不以裁員為項目目標","先讓任務、產出和能力透明，組織調整由客戶依據事實決定。"],["不承諾固定效率倍數","範圍、數據、系統和團隊不同，先建立基線再設目標。"],["不繞過人工上線","AI 產出必須經過約定測試、權限控制和人工發布授權。"],["FDE 單獨定範圍","涉及 Agent、代碼、自動化測試、系統集成或私有化部署時，另行確認 SOW、里程碑、Evals 和報價。"]],trustLabel:"為什麼是 Kelly",trustTitle:"既看經營，也能進入研發一線",trustText:"Kelly 是 Buda、Vika 與 AITable 創始人，前喜茶創始 CTO。擁有百萬行級企業軟件研發與交付經驗，帶過 150 人以上跨職能團隊，也長期以業務目標驅動團隊與 AI 協作。",contactLabel:"下一步",contactTitle:"帶一個真實問題來，先判斷從哪條路徑切入",contactText:"準備好最希望改變的業務結果、當前負責人、一個候選流程或代碼倉庫，以及你認為「做成」的標準。我們先做一次需求判斷，再確認是否適合兼職 CAIO 和 FDE。",phone:"電話 18688180270",wechat:"複製微信 23110388",copied:"微信號已複製",fallback:"請手動複製微信號：23110388",resume:"了解 Kelly",back:"返回 Kelly AI 服務",footer:"Kelly AI Deployment Service"
  }
};

const esc = (value) => value;
const list = (items) => items.map((item) => `<li>${esc(item)}</li>`).join("");

function languageSwitcher(lang) {
  const routes = { "zh-CN": "/ai/caio/", en: "/ai/en/caio/", "zh-HK": "/ai/zh-hk/caio/" };
  return [["en", "EN"], ["zh-CN", "简"], ["zh-HK", "繁"]].map(([code, label]) => `<a href="${routes[code]}"${lang === code ? ' aria-current="page"' : ""}>${label}</a>`).join("");
}

function render(lang, p) {
  const pathLabels = lang === "en" ? ["Focus", "Typical outputs"] : lang === "zh-HK" ? ["工作重點", "典型交付"] : ["工作重点", "典型交付"];
  const nav = p.nav.map((label, i) => `<a href="${p.navTargets[i]}">${label}</a>`).join("");
  const signals = p.heroSignals.map(([title, text]) => `<div class="hero-stage"><strong>${title}</strong><span>${text}</span></div>`).join("");
  const problemSignals = p.problemSignals.map(([title, text], i) => `<article class="caio-detail-signal"><span>0${i + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const paths = p.paths.map((path) => `<article class="caio-detail-path" id="${path.id}"><span class="caio-path-number">${path.number}</span><h3>${path.title}</h3><p class="caio-detail-fit">${path.fit}</p><h4>${pathLabels[0]}</h4><ul>${list(path.focus)}</ul><h4>${pathLabels[1]}</h4><ul>${list(path.outputs)}</ul></article>`).join("");
  const cadence = p.cadence.map(([number, title, text]) => `<article class="caio-step"><span class="caio-number">${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const first = p.firstSteps.map(([time, title, text]) => `<article class="journey-step"><span class="journey-number">${time}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const boundaries = p.boundaries.map(([title, text], i) => `<article class="caio-boundary"><span>0${i + 1}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("");
  const hreflang = `<link rel="alternate" hreflang="en" href="https://mr-kelly.github.io/ai/en/caio/"><link rel="alternate" hreflang="zh-CN" href="https://mr-kelly.github.io/ai/caio/"><link rel="alternate" hreflang="zh-HK" href="https://mr-kelly.github.io/ai/zh-hk/caio/"><link rel="alternate" hreflang="x-default" href="https://mr-kelly.github.io/ai/caio/">`;
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${p.title}</title><meta name="description" content="${p.description}"><link rel="canonical" href="${p.canonical}">${hreflang}<meta property="og:title" content="${p.title}"><meta property="og:description" content="${p.description}"><meta property="og:type" content="website"><meta property="og:url" content="${p.canonical}"><meta property="og:image" content="https://mr-kelly.github.io/resume/kelly-chan-ai-agents-talk.webp"><link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/ai/styles.css?v=20260903"><script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurementId}');</script></head><body class="caio-detail-page"><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="shell header-inner"><a class="brand" href="${p.home}"><span class="brand-mark" aria-hidden="true">K</span><span>Kelly AI Deployment Service</span></a><div class="header-actions"><nav class="primary-nav" aria-label="Primary">${nav}</nav><nav class="language-switcher" aria-label="Language">${languageSwitcher(lang)}</nav></div></div></header><main id="main"><section class="hero caio-detail-hero"><div class="shell hero-inner"><p class="eyebrow">${p.eyebrow}</p><h1>${p.heroTitle}</h1><p class="hero-lead">${p.heroLead}</p><div class="hero-actions"><a class="button button-primary" href="#paths">${p.heroPrimary}</a><a class="button button-secondary" href="#contact">${p.heroSecondary}</a></div></div></section><div class="hero-stages">${signals}</div>
  <section class="section section-white"><div class="shell"><div class="section-heading"><div><p class="section-label">${p.problemLabel}</p><h2>${p.problemTitle}</h2></div><p class="section-intro">${p.problemIntro}</p></div><div class="caio-detail-signals">${problemSignals}</div></div></section>
  <section class="section section-dark section-caio" id="paths"><div class="shell"><div class="section-heading"><div><p class="section-label">${p.pathsLabel}</p><h2>${p.pathsTitle}</h2></div><p class="section-intro">${p.pathsIntro}</p></div><div class="caio-detail-paths">${paths}</div><p class="caio-block-label caio-cycle-label">${p.cadenceLabel}</p><h2 class="caio-detail-subtitle">${p.cadenceTitle}</h2><div class="caio-cycle">${cadence}</div></div></section>
  <section class="section" id="first-30-days"><div class="shell"><div class="section-heading"><div><p class="section-label">${p.firstLabel}</p><h2>${p.firstTitle}</h2></div><p class="section-intro">${p.firstIntro}</p></div><div class="journey caio-first-steps">${first}</div></div></section>
  <section class="section section-white" id="outcomes"><div class="shell"><div class="section-heading"><div><p class="section-label">${p.outcomesLabel}</p><h2>${p.outcomesTitle}</h2></div><p class="section-intro">${p.outcomesIntro}</p></div><div class="caio-outcome-grid"><section><h3>${p.deliverablesTitle}</h3><ul>${list(p.deliverables)}</ul></section><section><h3>${p.metricsTitle}</h3><ul>${list(p.metrics)}</ul></section></div></div></section>
  <section class="section section-dark" id="boundaries"><div class="shell"><div class="section-heading"><div><p class="section-label">${p.boundariesLabel}</p><h2>${p.boundariesTitle}</h2></div></div><div class="caio-boundaries">${boundaries}</div><div class="caio-trust"><img src="/resume/kelly-chan-portrait.webp?v=20260726" width="152" height="152" loading="lazy" decoding="async" alt="Kelly"><div><p class="section-label">${p.trustLabel}</p><h2>${p.trustTitle}</h2><p>${p.trustText}</p></div></div></div></section>
  <section class="section section-caio-contact" id="contact"><div class="shell commercial-grid"><div><p class="section-label">${p.contactLabel}</p><h2>${p.contactTitle}</h2><p class="section-intro caio-contact-copy">${p.contactText}</p></div><div class="contact-panel"><div class="contact-details"><a class="contact-chip" href="tel:+8618688180270">${p.phone}</a><button class="contact-chip" type="button" data-copy-wechat data-copied-label="${p.copied}" data-fallback-label="${p.fallback}">${p.wechat}</button><a class="contact-chip" href="/resume/">${p.resume}</a><a class="contact-chip" href="${p.home}">${p.back}</a></div><p class="copy-status" aria-live="polite" data-copy-status></p></div></div></section></main><footer class="site-footer"><div class="shell footer-inner"><span>© 2026 ${p.footer}</span><a href="${p.home}">${p.back}</a></div></footer><script src="/ai/site.js?v=20260903"></script></body></html>`;
}

for (const [lang, page] of Object.entries(pages)) {
  const output = join(root, page.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, render(lang, page), "utf8");
  console.log(`Generated ${output}`);
}
