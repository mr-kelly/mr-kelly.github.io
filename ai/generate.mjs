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
    description: "企业 AI 落地、兼职 CAIO、Vibe Coding 培训与项目陪跑，覆盖数字员工、企业 AI 资产中枢与品牌 Agent。查看服务与参考报价。",
    nav: ["服务报价", "兼职 CAIO", "Vibe Coding", "落地路径", "技术底座", "联系"],
    eyebrow: "企业 AI 落地服务",
    lead: "从理念导入、Vibe Coding 实战，到兼职 CAIO、数字员工与企业 AI 资产中枢，把 AI 从认知带进真实业务。",
    heroPrimary: "查看服务报价",
    heroSecondary: "联系 Kelly",
    stages: [
      ["建立认知", "让管理层与团队理解 AI 和 Agents 公司"],
      ["完成实战", "亲手完成一次 Agent 练习"],
      ["进入业务", "把 Agent、数据和工作流放进真实场景"],
      ["形成资产", "持续复用企业数据、知识、Skills 与应用"]
    ],
    serviceLabel: "服务菜单",
    serviceTitle: "从一次课程，到一套可运行的 AI 能力",
    serviceIntro: "可以从培训、Vibe Coding 工作坊或项目陪跑开始，也可以请一位兼职 CAIO 持续带队，或直接落地 Agent、AI 资产中枢与企业品牌小程序。以下为客户参考报价。",
    headers: ["类别", "服务", "核心交付", "形式 / 时长", "服务报价"],
    mobileLabels: ["类别", "服务", "交付", "形式", "报价"],
    services: [
      ["training", "培训", "Agents 公司搭建实战课程", "24 节系统实战，从 Agent 方法到 Agents 公司搭建", "线上，每节约 90 分钟", "人民币 599 元 / 人"],
      ["training", "启蒙", "Agents 公司理念导入", "故事化演讲，理解 AI 的重要性与 Agents 公司的最终图景", "线下主题演讲", "人民币 15,000 元 / 场"],
      ["build", "实战", "Agents 公司搭建实战工作坊", "手把手完成一次 Agent 实战，让团队从理解走向操作", "线下 3 小时", "人民币 25,000 元 / 场"],
      ["training", "定制", "企业 AI 定制工作坊", "围绕行业、岗位和业务目标设计专属落地课程", "线下 1–3 天", "人民币 30,000–150,000 元 / 项目"],
      ["caio", "CAIO", "兼职 CAIO（企业 AI 负责人）", "像内部全职 AI 负责人一样，每周业务问诊、确定最高优先级实战、拆解任务与负责人、带队执行并验收复盘，让团队在真实业务中边做边学", "每周工作会 + 持续跟进，建议 3 个月起", "按月定制报价"],
      ["coding", "编程", "Vibe Coding 软件开发实战工作坊", "使用真实业务题，从需求拆解到完成一个可运行、可继续迭代的产品", "线下 1 天", "人民币 30,000 元 / 场"],
      ["coding", "陪跑", "Vibe Coding 项目陪跑", "围绕客户项目提供需求、架构、代码审查、测试、部署和迭代指导，代码与成果归客户", "线上 4 周", "人民币 49,999 元起 / 期"],
      ["coding", "顾问", "Vibe Coding 工程顾问", "针对复杂系统、遗留代码或关键上线提供技术方案、风险审查与工程决策支持", "月度或项目制", "人民币 60,000 元起 / 月"],
      ["build", "落地", "AI 数字员工 / Agents 公司搭建", "按业务场景组合 Codex、OpenClaw、Buda AI 等 Agent 工具与平台，交付 1 个数字员工、1 条核心工作流、团队培训与 1 个月运营维护起", "定制交付", "国内人民币 12,000 元起 / 海外 US$2,000 起"],
      ["data", "资产", "企业 AI 资产中枢", "搭建企业 AI 资产库，统一沉淀企业数据、知识库、Agent Skills 与 AI Apps；通过 Agent 提交、人工审核、权限、版本和审计治理，让每份产出可信、可追溯、可复用", "项目制", "人民币 12,000 元起 / 按项目报价"],
      ["platform", "模型", "国际大模型中转服务（MoonRouter）", "统一使用 GPT、Claude、Gemini，无需自行处理海外账号与支付采购", "在线充值，按量使用", "官方 API 价格 5 折"],
      ["brand", "品牌", "企业品牌专属 Agent 小程序", "企业品牌微信 Agent 小程序，用于培训、内部服务或会员式对外服务", "品牌定制", "人民币 99,999 元起"]
    ],
    finePrint: "以上人民币报价均为未税价。线下服务的差旅食宿视项目情况另行确认；最终范围、周期、报价和验收标准以正式报价单或合同为准。",
    caioLabel: "兼职 CAIO",
    caioTitle: "像请来一位全职 AI 负责人，每周把事情向前推进",
    caioIntro: "兼职 CAIO 站在管理层和团队身边，不以部署一堆工具为目标，而是持续找出真正值得做的业务任务，安排执行并对结果负责。团队不是听课，而是在每周真实交付中学会 AI。",
    caioSteps: [
      ["01", "每周问诊", "和管理层与业务负责人检查目标、进展、卡点和新的 AI 机会。"],
      ["02", "确定实战", "选定本周最高优先级任务，明确结果、负责人、截止时间与验收标准。"],
      ["03", "带队执行", "调动团队与 AI Agents，推进原型、工作流、内容、数据或系统成果。"],
      ["04", "验收复盘", "检查真实业务结果，沉淀方法与资产，并排定下一周行动。"]
    ],
    caioOutputLabel: "每周看得见的交付",
    caioOutputs: ["一份有负责人和期限的任务清单", "一个持续推进的真实业务成果", "一次验收复盘与下一周安排"],
    caioMeta: "每周 1 次工作会 + 持续异步跟进｜建议 3 个月起｜按月定制报价",
    vibeLabel: "Vibe Coding 服务",
    vibeTitle: "不只把原型做出来，更把软件做成能交付的产品",
    vibeIntro: "Vibe Coding 降低了写代码的门槛，但需求边界、系统架构、测试、安全和上线质量仍需要工程判断。Kelly 将 AI 编程方法与大型软件经验结合，帮助个人和团队把想法推进到真实可用。",
    vibeProof: [
      ["百万行级", "企业软件研发与交付经验"],
      ["多种产品形态", "游戏、App、小程序、大型网游与大型企业软件"],
      ["完整交付链路", "需求、架构、开发、测试、部署与迭代"]
    ],
    vibeOffers: [
      ["01", "Vibe Coding 软件开发实战工作坊", "适合需要统一方法的产品、技术与业务团队", "用一个真实业务题完成从需求描述、Agent 协作到可运行产品的全过程。", ["团队共用的 Vibe Coding 工作流", "一个现场完成的可运行成果", "代码质量、安全与上线检查清单"], "1 天｜人民币 30,000 元 / 场"],
      ["02", "Vibe Coding 软件项目陪跑（4 周）", "适合已有想法、原型或在建项目的团队", "团队主导开发，Kelly 在关键节点拆需求、定架构、审代码、处理难题并带领上线。", ["每周项目推进与技术评审", "架构、测试、部署与文档指导", "代码和项目成果由客户完整保有"], "4 周｜人民币 49,999 元起 / 期"],
      ["03", "Vibe Coding 复杂项目工程顾问", "适合遗留系统、关键集成或高风险上线", "在 AI 生成代码之外补足资深工程判断，识别系统边界、技术债与交付风险。", ["技术方案与架构评审", "关键代码、性能与安全审查", "疑难问题与工程决策支持"], "人民币 60,000 元起 / 月" ]
    ],
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
      ["Busabase + Vika", "承载智能数据库、知识库、Agent Skills 与 AI Apps；Agent 提交、人工审核，沉淀可信、可追溯、可复用的企业 AI 资产。"],
      ["MoonRouter", "统一使用 GPT、Claude、Gemini 等国际大模型。"],
      ["小小 Agent", "形成带企业品牌的微信 Agent 小程序和服务入口。"]
    ],
    profileTitle: "Kelly 陈霈霖",
    profileRole: "Kelly AI Deployment Service",
    profileText: "Buda、Vika 与 AITable 创始人，前喜茶创始 CTO。拥有百万行级企业软件研发与交付经验，做过游戏、App、小程序、大型网游与大型企业软件。",
    commercialLabel: "商务说明",
    commercialTitle: "范围透明，按结果推进",
    commercialItems: [
      "定制项目根据目标、人数、数据规模、工作流复杂度、系统连接和周期报价。",
      "第三方模型、软件订阅和额外定制开发如有发生，将在正式报价中单独列明。",
      "不承诺未经调研的接口、数据质量、交付周期或固定效率倍数。",
      "客户可从一个最小场景开始，验证后再扩展。"
    ],
    contactTitle: "从一个具体场景开始",
    contactText: "告诉 Kelly 你的业务目标、团队情况，以及已有想法、原型或代码现状，我们会先判断适合培训、兼职 CAIO、Vibe Coding 陪跑还是直接落地。",
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
    description: "Enterprise AI deployment, fractional CAIO leadership, Vibe Coding training and coaching, AI employees, AI asset hubs, and branded Agent experiences by Kelly.",
    nav: ["Services", "Fractional CAIO", "Vibe Coding", "Delivery", "Technology", "Contact"],
    eyebrow: "Enterprise AI enablement",
    lead: "Move from AI awareness and Vibe Coding practice to fractional CAIO leadership, AI employees, and enterprise AI asset hubs in real operations.",
    heroPrimary: "View services & pricing",
    heroSecondary: "Contact Kelly",
    stages: [
      ["Align", "Give leaders and teams a shared AI operating picture"],
      ["Practice", "Complete a hands-on Agent exercise"],
      ["Deploy", "Put Agents, data, and workflows into real operations"],
      ["Compound", "Reuse company data, knowledge, Skills, and applications"]
    ],
    serviceLabel: "Service menu",
    serviceTitle: "Start with one session or build a lasting AI capability",
    serviceIntro: "Begin with training, a Vibe Coding workshop, or project coaching; bring in a fractional CAIO to lead weekly execution; or deploy an Agent, AI asset hub, or branded mini-program. Prices below are for reference.",
    headers: ["Type", "Service", "Core delivery", "Format / duration", "Price"],
    mobileLabels: ["Type", "Service", "Delivery", "Format", "Price"],
    services: [
      ["training", "Training", "Building an Agents Company", "24 practical sessions covering Agent methods through company-level orchestration", "Online, about 90 minutes each", "RMB 599 / person"],
      ["training", "Vision", "Agents Company Introduction", "Story-led keynote on why AI matters and what an Agents company can become", "On-site keynote", "RMB 15,000 / session"],
      ["build", "Practice", "Agents Company Hands-on Workshop", "Guided Agent build that moves a team from understanding to operation", "On-site, 3 hours", "RMB 25,000 / session"],
      ["training", "Custom", "Enterprise AI Custom Workshop", "A tailored program around the company's industry, roles, and operating goals", "On-site, 1–3 days", "RMB 30,000–150,000 / project"],
      ["caio", "CAIO", "Fractional CAIO (Embedded AI Leader)", "Work alongside leadership like an in-house AI executive: diagnose the business weekly, set the highest-priority hands-on work, assign owners and tasks, lead execution, and review outcomes so the team learns through real delivery", "Weekly working session + ongoing follow-through; 3-month minimum recommended", "Custom monthly retainer"],
      ["coding", "Coding", "Vibe Coding Software Development Workshop", "Use a real business challenge to move from requirements to a working product the team can keep improving", "On-site, 1 day", "RMB 30,000 / session"],
      ["coding", "Coaching", "Vibe Coding Project Coaching", "Requirements, architecture, code review, testing, deployment, and iteration guidance around the client's project; the client owns the code and output", "Online, 4 weeks", "RMB 49,999+ / engagement"],
      ["coding", "Advisory", "Vibe Coding Engineering Advisory", "Technical planning, risk review, and engineering decisions for complex systems, legacy code, or critical releases", "Monthly or project-based", "RMB 60,000+ / month"],
      ["build", "Deploy", "AI Employees / Agents Company Build", "Combine Codex, OpenClaw, Buda AI, and other Agent tools for the business scenario; deliver 1 AI employee, 1 core workflow, team enablement, and 1 month of operational support", "Custom delivery", "RMB 12,000+ domestic / US$2,000+ overseas"],
      ["data", "Assets", "Enterprise AI Asset Hub", "Build an enterprise AI asset library for data, knowledge bases, Agent Skills, and AI Apps; use Agent submissions, human review, permissions, versioning, and audit trails to keep every output trusted, traceable, and reusable", "Project-based", "RMB 12,000+ / scoped quote"],
      ["platform", "Models", "International Model Access (MoonRouter)", "Unified GPT, Claude, and Gemini access without managing overseas vendor accounts and payments", "Online credit, usage-based", "50% of official API pricing"],
      ["brand", "Brand", "Branded Enterprise Agent Mini Program", "A branded WeChat Agent mini program for training, internal service, or member-facing delivery", "Custom build", "RMB 99,999+"]
    ],
    finePrint: "RMB prices exclude tax. Travel and accommodation for on-site delivery may be quoted separately. Final scope, schedule, fees, and acceptance criteria are governed by the formal quotation or contract.",
    caioLabel: "Fractional CAIO",
    caioTitle: "The impact of a full-time AI leader, with progress every week",
    caioIntro: "A fractional CAIO works alongside leadership and the team. The goal is not to deploy a pile of tools, but to continually identify the business work worth doing, organize execution, and own the follow-through. The team learns AI through real weekly delivery, not lectures.",
    caioSteps: [
      ["01", "Weekly diagnosis", "Review goals, progress, blockers, and new AI opportunities with leadership and business owners."],
      ["02", "Set the work", "Choose the highest-priority task and define its outcome, owner, deadline, and acceptance criteria."],
      ["03", "Lead execution", "Coordinate the team and AI Agents to advance a prototype, workflow, content, data, or system outcome."],
      ["04", "Review and reset", "Validate business results, retain methods and assets, and set the next week's actions."]
    ],
    caioOutputLabel: "Visible delivery every week",
    caioOutputs: ["A task list with owners and deadlines", "A real business outcome that keeps advancing", "An acceptance review and plan for the next week"],
    caioMeta: "1 weekly working session + ongoing async follow-through | 3-month minimum recommended | custom monthly retainer",
    vibeLabel: "Vibe Coding services",
    vibeTitle: "Go beyond a working prototype to software that can actually ship",
    vibeIntro: "Vibe Coding lowers the barrier to writing code, but requirements, architecture, testing, security, and release quality still demand engineering judgment. Kelly combines AI-assisted development with large-scale software experience to help people and teams turn ideas into dependable products.",
    vibeProof: [
      ["Million-line scale", "Enterprise software engineering and delivery experience"],
      ["Across product types", "Games, apps, mini programs, large-scale online games, and enterprise software"],
      ["End-to-end delivery", "Requirements, architecture, development, testing, deployment, and iteration"]
    ],
    vibeOffers: [
      ["01", "Vibe Coding Software Development Workshop", "For product, engineering, and business teams adopting a shared method", "Use one real business challenge to practice the full path from requirements and Agent collaboration to a working product.", ["A shared Vibe Coding workflow", "One working outcome built during the session", "Code quality, security, and release checklists"], "1 day | RMB 30,000 / session"],
      ["02", "Vibe Coding Software Project Coaching (4 Weeks)", "For teams with an idea, prototype, or active build", "The team owns development while Kelly guides requirements, architecture, reviews, hard problems, and release at critical points.", ["Weekly delivery and technical reviews", "Architecture, testing, deployment, and documentation guidance", "The client retains all code and project output"], "4 weeks | RMB 49,999+ / engagement"],
      ["03", "Vibe Coding Complex-Project Engineering Advisory", "For legacy systems, critical integrations, or high-risk releases", "Add senior engineering judgment beyond AI-generated code to expose system boundaries, technical debt, and delivery risk.", ["Technical plan and architecture review", "Critical code, performance, and security review", "Complex debugging and engineering decisions"], "RMB 60,000+ / month"]
    ],
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
      ["Busabase + Vika", "Houses intelligent databases, knowledge bases, Agent Skills, and AI Apps; Agent submissions and human review create trusted, traceable, reusable enterprise AI assets."],
      ["MoonRouter", "Provides unified access to GPT, Claude, Gemini, and other international models."],
      ["Xiaoxiao Agent", "Creates a branded WeChat Agent mini program and service entry point."]
    ],
    profileTitle: "Kelly Peilin Chan",
    profileRole: "Kelly AI Deployment Service",
    profileText: "Founder of Buda, Vika, and AITable, and former founding CTO of HEYTEA. Kelly has built and delivered million-line-scale enterprise software across games, apps, mini programs, large online games, and complex enterprise systems.",
    commercialLabel: "Commercial notes",
    commercialTitle: "Transparent scope, outcome-led delivery",
    commercialItems: [
      "Custom quotes reflect objectives, participant count, data scale, workflow complexity, integrations, and timeline.",
      "Third-party model usage, software subscriptions, and additional custom development are itemized when applicable.",
      "Unassessed integrations, data quality, schedules, or fixed productivity multipliers are not promised.",
      "Clients can start with one minimum viable scenario and expand after validation."
    ],
    contactTitle: "Start with one specific workflow",
    contactText: "Share the business objective, team context, and the current state of your idea, prototype, or code. We will determine whether training, fractional CAIO leadership, Vibe Coding coaching, or direct implementation is the right starting point.",
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
    description: "企業 AI 落地、兼職 CAIO、Vibe Coding 培訓與項目陪跑，涵蓋數碼員工、企業 AI 資產中樞與品牌 Agent。查看服務與參考報價。",
    nav: ["服務報價", "兼職 CAIO", "Vibe Coding", "落地路徑", "技術底座", "聯絡"],
    eyebrow: "企業 AI 落地服務",
    lead: "從理念導入、Vibe Coding 實戰，到兼職 CAIO、數碼員工與企業 AI 資產中樞，把 AI 從認知帶進真實業務。",
    heroPrimary: "查看服務報價",
    heroSecondary: "聯絡 Kelly",
    stages: [
      ["建立認知", "讓管理層與團隊理解 AI 和 Agents 公司"],
      ["完成實戰", "親手完成一次 Agent 練習"],
      ["進入業務", "把 Agent、數據和工作流程放進真實場景"],
      ["形成資產", "持續重用企業數據、知識、Skills 與應用"]
    ],
    serviceLabel: "服務菜單",
    serviceTitle: "從一次課程，到一套可運行的 AI 能力",
    serviceIntro: "可以從培訓、Vibe Coding 工作坊或項目陪跑開始，也可以請一位兼職 CAIO 持續帶隊，或直接落地 Agent、AI 資產中樞與企業品牌小程式。以下為客戶參考報價。",
    headers: ["類別", "服務", "核心交付", "形式 / 時長", "服務報價"],
    mobileLabels: ["類別", "服務", "交付", "形式", "報價"],
    services: [
      ["training", "培訓", "Agents 公司搭建實戰課程", "24 節系統實戰，從 Agent 方法到 Agents 公司搭建", "網上，每節約 90 分鐘", "人民幣 599 元 / 人"],
      ["training", "啟蒙", "Agents 公司理念導入", "故事化演講，理解 AI 的重要性與 Agents 公司的最終圖景", "線下主題演講", "人民幣 15,000 元 / 場"],
      ["build", "實戰", "Agents 公司搭建實戰工作坊", "手把手完成一次 Agent 實戰，讓團隊從理解走向操作", "線下 3 小時", "人民幣 25,000 元 / 場"],
      ["training", "定制", "企業 AI 定制工作坊", "圍繞行業、崗位和業務目標設計專屬落地課程", "線下 1–3 天", "人民幣 30,000–150,000 元 / 項目"],
      ["caio", "CAIO", "兼職 CAIO（企業 AI 負責人）", "像內部全職 AI 負責人一樣，每週業務問診、確定最高優先級實戰、拆解任務與負責人、帶隊執行並驗收複盤，讓團隊在真實業務中邊做邊學", "每週工作會 + 持續跟進，建議 3 個月起", "按月定制報價"],
      ["coding", "編程", "Vibe Coding 軟件開發實戰工作坊", "使用真實業務題，從需求拆解到完成一個可運行、可繼續迭代的產品", "線下 1 天", "人民幣 30,000 元 / 場"],
      ["coding", "陪跑", "Vibe Coding 項目陪跑", "圍繞客戶項目提供需求、架構、代碼審查、測試、部署和迭代指導，代碼與成果歸客戶", "網上 4 週", "人民幣 49,999 元起 / 期"],
      ["coding", "顧問", "Vibe Coding 工程顧問", "針對複雜系統、遺留代碼或關鍵上線提供技術方案、風險審查與工程決策支援", "月度或項目制", "人民幣 60,000 元起 / 月"],
      ["build", "落地", "AI 數碼員工 / Agents 公司搭建", "按業務場景組合 Codex、OpenClaw、Buda AI 等 Agent 工具與平台，交付 1 個數碼員工、1 條核心工作流程、團隊培訓與 1 個月營運維護起", "定制交付", "國內人民幣 12,000 元起 / 海外 US$2,000 起"],
      ["data", "資產", "企業 AI 資產中樞", "搭建企業 AI 資產庫，統一沉澱企業數據、知識庫、Agent Skills 與 AI Apps；通過 Agent 提交、人工審核、權限、版本和審計治理，讓每份產出可信、可追溯、可重用", "項目制", "人民幣 12,000 元起 / 按項目報價"],
      ["platform", "模型", "國際大模型中轉服務（MoonRouter）", "統一使用 GPT、Claude、Gemini，毋須自行處理海外帳戶與付款採購", "網上充值，按量使用", "官方 API 價格 5 折"],
      ["brand", "品牌", "企業品牌專屬 Agent 小程式", "企業品牌微信 Agent 小程式，用於培訓、內部服務或會員式對外服務", "品牌定制", "人民幣 99,999 元起"]
    ],
    finePrint: "以上人民幣報價均為未稅價。線下服務的差旅住宿視項目情況另行確認；最終範圍、週期、報價和驗收標準以正式報價單或合約為準。",
    caioLabel: "兼職 CAIO",
    caioTitle: "像請來一位全職 AI 負責人，每週把事情向前推進",
    caioIntro: "兼職 CAIO 站在管理層和團隊身邊，不以部署一堆工具為目標，而是持續找出真正值得做的業務任務，安排執行並對結果負責。團隊不是聽課，而是在每週真實交付中學會 AI。",
    caioSteps: [
      ["01", "每週問診", "和管理層與業務負責人檢查目標、進展、卡點和新的 AI 機會。"],
      ["02", "確定實戰", "選定本週最高優先級任務，明確結果、負責人、截止時間與驗收標準。"],
      ["03", "帶隊執行", "調動團隊與 AI Agents，推進原型、工作流程、內容、數據或系統成果。"],
      ["04", "驗收複盤", "檢查真實業務結果，沉澱方法與資產，並排定下一週行動。"]
    ],
    caioOutputLabel: "每週看得見的交付",
    caioOutputs: ["一份有負責人和期限的任務清單", "一個持續推進的真實業務成果", "一次驗收複盤與下一週安排"],
    caioMeta: "每週 1 次工作會 + 持續異步跟進｜建議 3 個月起｜按月定制報價",
    vibeLabel: "Vibe Coding 服務",
    vibeTitle: "不只把原型做出來，更把軟件做成能交付的產品",
    vibeIntro: "Vibe Coding 降低了寫代碼的門檻，但需求邊界、系統架構、測試、安全和上線質量仍需要工程判斷。Kelly 將 AI 編程方法與大型軟件經驗結合，幫助個人和團隊把想法推進到真實可用。",
    vibeProof: [
      ["百萬行級", "企業軟件研發與交付經驗"],
      ["多種產品形態", "遊戲、App、小程式、大型網遊與大型企業軟件"],
      ["完整交付鏈路", "需求、架構、開發、測試、部署與迭代"]
    ],
    vibeOffers: [
      ["01", "Vibe Coding 軟件開發實戰工作坊", "適合需要統一方法的產品、技術與業務團隊", "用一個真實業務題完成從需求描述、Agent 協作到可運行產品的全過程。", ["團隊共用的 Vibe Coding 工作流程", "一個現場完成的可運行成果", "代碼質量、安全與上線檢查清單"], "1 天｜人民幣 30,000 元 / 場"],
      ["02", "Vibe Coding 軟件項目陪跑（4 週）", "適合已有想法、原型或在建項目的團隊", "團隊主導開發，Kelly 在關鍵節點拆需求、定架構、審代碼、處理難題並帶領上線。", ["每週項目推進與技術評審", "架構、測試、部署與文檔指導", "代碼和項目成果由客戶完整保有"], "4 週｜人民幣 49,999 元起 / 期"],
      ["03", "Vibe Coding 複雜項目工程顧問", "適合遺留系統、關鍵整合或高風險上線", "在 AI 生成代碼之外補足資深工程判斷，識別系統邊界、技術債與交付風險。", ["技術方案與架構評審", "關鍵代碼、效能與安全審查", "疑難問題與工程決策支援"], "人民幣 60,000 元起 / 月"]
    ],
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
      ["Busabase + Vika", "承載智能數據庫、知識庫、Agent Skills 與 AI Apps；Agent 提交、人工審核，沉澱可信、可追溯、可重用的企業 AI 資產。"],
      ["MoonRouter", "統一使用 GPT、Claude、Gemini 等國際大模型。"],
      ["小小 Agent", "形成帶企業品牌的微信 Agent 小程式和服務入口。"]
    ],
    profileTitle: "Kelly 陳霈霖",
    profileRole: "Kelly AI Deployment Service",
    profileText: "Buda、Vika 與 AITable 創辦人，前喜茶創始 CTO。擁有百萬行級企業軟件研發與交付經驗，做過遊戲、App、小程式、大型網遊與大型企業軟件。",
    commercialLabel: "商務說明",
    commercialTitle: "範圍透明，按結果推進",
    commercialItems: [
      "定制項目根據目標、人數、數據規模、工作流程複雜度、系統連接和週期報價。",
      "第三方模型、軟件訂閱和額外定制開發如有發生，將在正式報價中單獨列明。",
      "不承諾未經調研的介面、數據質量、交付週期或固定效率倍數。",
      "客戶可從一個最小場景開始，驗證後再擴展。"
    ],
    contactTitle: "從一個具體場景開始",
    contactText: "告訴 Kelly 你的業務目標、團隊情況，以及已有想法、原型或代碼現狀，我們會先判斷適合培訓、兼職 CAIO、Vibe Coding 陪跑還是直接落地。",
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

  const caioSteps = page.caioSteps.map(([number, title, text]) => `
          <article class="caio-step">
            <span class="caio-number">${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>`).join("");
  const caioOutputs = page.caioOutputs.map((item) => `<li>${item}</li>`).join("");

  const steps = page.steps.map(([number, title, text]) => `
        <article class="journey-step">
          <span class="journey-number">${number}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`).join("");

  const foundations = page.foundations.map(([title, text]) => `
              <li><strong>${title}</strong><span>${text}</span></li>`).join("");

  const commercialItems = page.commercialItems.map((item) => `<li>${item}</li>`).join("");
  const vibeProof = page.vibeProof.map(([title, text]) => `
          <div class="vibe-proof-item"><strong>${title}</strong><span>${text}</span></div>`).join("");
  const vibeOffers = page.vibeOffers.map(([number, title, audience, text, points, meta]) => `
          <article class="vibe-offer">
            <span class="vibe-offer-number">${number}</span>
            <h3>${title}</h3>
            <p class="vibe-audience">${audience}</p>
            <p>${text}</p>
            <ul>${points.map((point) => `<li>${point}</li>`).join("")}</ul>
            <p class="vibe-meta">${meta}</p>
          </article>`).join("");
  const navIds = ["services", "caio", "vibe-coding", "delivery", "foundation", "contact"];
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
      "Fractional Chief AI Officer",
      "Vibe Coding Training and Project Coaching",
      "AI Employee Implementation",
      "Enterprise AI Asset Hub",
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
  <link rel="stylesheet" href="/ai/styles.css?v=20260803">
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
            <colgroup>
              <col class="service-col-category">
              <col class="service-col-name">
              <col class="service-col-delivery">
              <col class="service-col-format">
              <col class="service-col-price">
            </colgroup>
            <thead><tr>${page.headers.map((header) => `<th scope="col">${header}</th>`).join("")}</tr></thead>
            <tbody>${serviceRows}
            </tbody>
          </table>
        </div>
        <p class="fine-print">${page.finePrint}</p>
      </div>
    </section>

    <section class="section section-dark section-caio" id="caio">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.caioLabel}</p>
            <h2>${page.caioTitle}</h2>
          </div>
          <p class="section-intro">${page.caioIntro}</p>
        </div>
        <div class="caio-cycle">${caioSteps}
        </div>
        <div class="caio-output">
          <p class="caio-output-label">${page.caioOutputLabel}</p>
          <ul>${caioOutputs}</ul>
          <p class="caio-meta">${page.caioMeta}</p>
        </div>
      </div>
    </section>

    <section class="section section-vibe" id="vibe-coding">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.vibeLabel}</p>
            <h2>${page.vibeTitle}</h2>
          </div>
          <p class="section-intro">${page.vibeIntro}</p>
        </div>
        <div class="vibe-proof">${vibeProof}
        </div>
        <div class="vibe-offers">${vibeOffers}
        </div>
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
