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
    description: "企业 AI 落地、CAIO Office、Vibe Coding 培训与项目陪跑，覆盖数字员工、企业 AI 资产中枢与品牌 Agent。查看服务与参考报价。",
    nav: ["服务报价", "商业规划", "CAIO Office", "Vibe Coding", "落地路径", "技术底座", "联系"],
    eyebrow: "企业 AI 落地服务",
    lead: "从理念导入、Vibe Coding 实战，到 CAIO Office、数字员工与企业 AI 资产中枢，把 AI 从认知带进真实业务。",
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
    serviceIntro: "可以从培训、Vibe Coding 工作坊或项目陪跑开始，也可以引入 CAIO Office 持续带队，或直接落地 Agent、AI 资产中枢与企业品牌小程序。以下为客户参考报价。",
    insightsLabel: "观点文章",
    insightsTitle: "先看方法，再决定需要什么服务",
    insightsIntro: "三篇长文分别从企业 AI 落地、研发团队优化和 Agents 公司管理切入，讲清问题为什么发生、应该怎样推进，以及 CAIO Office 与 FDE 在其中承担什么角色。",
    insightsCta: "阅读全文",
    insightsItems: [
      ["企业做 AI，最缺的不是工具，而是一个把结果逼出来的人", "从“AI 落地断层”拆解目标、执行、验收和资产沉淀，适合正在推动公司级 AI 转型的管理者。", "企业 AI · CAIO", "/articles/enterprise-ai-needs-caio-and-fde.html"],
      ["研发团队越招越多，产品为什么还是做不快？", "从“研发黑箱”解释交付透明、AI Coding、测试验收和技术资产，适合 CEO、CTO 与研发负责人。", "研发转型 · AI Coding", "/articles/ai-native-rd-team-optimization.html"],
      ["你越努力学 AI，越可能一直做那个超级打工人", "从“超级打工人陷阱”解释为什么工具越多反而越忙，以及怎样用岗位、资料、流程和验收真正把工作交出去。", "Agents 公司 · 管理", "/articles/stop-learning-ai-start-managing-it.html"]
    ],
    headers: ["类别", "服务", "核心交付", "形式 / 时长", "服务报价"],
    mobileLabels: ["类别", "服务", "交付", "形式", "报价"],
    services: [
      ["consult", "咨询", "商业规划与方案咨询", "产品方案说明书、商业计划纲要、市场推广计划与可交互 Demo，一次访谈开局，几天到一周内打磨完成", "1 小时启动访谈 + 3–7 天打磨", "人民币 19,999 元起 / 项目"],
      ["training", "培训", "Agents 公司搭建实战课程", "24 节系统实战，从 Agent 方法到 Agents 公司搭建", "线上，每节约 90 分钟", "人民币 599 元 / 人"],
      ["training", "启蒙", "Agents 公司理念导入", "故事化演讲，理解 AI 的重要性与 Agents 公司的最终图景", "线下主题演讲", "人民币 15,000 元 / 场"],
      ["build", "实战", "Agents 公司搭建实战工作坊", "手把手完成一次 Agent 实战，让团队从理解走向操作", "线下 3 小时", "人民币 25,000 元 / 场"],
      ["training", "定制", "企业 AI 定制工作坊", "围绕行业、岗位和业务目标设计专属落地课程", "线下 1–3 天", "人民币 30,000–150,000 元 / 项目"],
      ["caio", "CAIO", "CAIO Office（企业 AI 转型与执行办公室）", "提供企业 AI 转型与研发 AI 原生转型两条路径；由 Kelly 担任 CAIO Lead，每周确定优先级、拆解任务、带队执行并验收复盘", "嵌入式持续合作：每周工作会 + 持续推进，建议 3 个月起", "按月定制报价"],
      ["coding", "编程", "Vibe Coding 软件开发实战工作坊", "使用真实业务题，从需求拆解到完成一个可运行、可继续迭代的产品", "线下 1 天", "人民币 30,000 元 / 场"],
      ["coding", "陪跑", "Vibe Coding 项目陪跑", "围绕客户项目提供需求、架构、代码审查、测试、部署和迭代指导，代码与成果归客户", "线上 4 周起", "按月定制报价"],
      ["coding", "顾问", "Vibe Coding 工程顾问", "针对复杂系统、遗留代码或关键上线提供技术方案、风险审查与工程决策支持", "月度或项目制", "按月定制报价"],
      ["build", "落地", "AI 数字员工 / Agents 公司搭建", "按业务场景组合 Codex、OpenClaw、Buda AI 等 Agent 工具与平台，交付 1 个数字员工、1 条核心工作流、团队培训与 1 个月运营维护起", "定制交付", "国内人民币 12,000 元起 / 海外 US$2,000 起"],
      ["data", "资产", "企业 AI 资产中枢", "搭建企业 AI 资产库，统一沉淀企业数据、知识库、Agent Skills 与 AI Apps；通过 Agent 提交、人工审核、权限、版本和审计治理，让每份产出可信、可追溯、可复用", "项目制", "人民币 12,000 元起 / 按项目报价"],
      ["platform", "模型", "国际大模型中转服务（MoonRouter）", "统一使用 GPT、Claude、Gemini，无需自行处理海外账号与支付采购", "在线充值，按量使用", "官方 API 价格 5 折"],
      ["brand", "品牌", "企业品牌专属 Agent 小程序", "企业品牌微信 Agent 小程序，用于培训、内部服务或会员式对外服务", "品牌定制", "人民币 99,999 元起"]
    ],
    finePrint: "以上人民币报价均为未税价。线下服务的差旅食宿视项目情况另行确认；最终范围、周期、报价和验收标准以正式报价单或合同为准。",
    consultLabel: "商业规划与方案咨询",
    consultTitle: "先想清楚要做什么，交出一套完整的商业规划与产品方案",
    consultIntro: "很多团队来找 Kelly 时，还没想清楚要做的产品、目标用户、商业模式和推广打法，却已经在纠结技术选型。商业规划与方案咨询从一次访谈开始，用几天时间把方向打磨清楚，交付一套可以直接拿去执行、也可以拿去和团队或投资人沟通的方案，并附一个可交互 Demo，让你在方案定稿前就能确认产品大概长什么样。",
    consultScenariosLabel: "解决什么问题",
    consultScenarios: [
      ["要启动一条新业务", "公司决定做一个新产品或新业务线，方向大致有了，但产品到底长什么样、卖给谁、怎么赚钱，还没有人说得清楚。"],
      ["有想法，但不知道怎么用 AI 落地", "手上有一个想法，也知道 AI 能帮上忙，但不确定该做成什么形态、走哪条技术路径，更不知道第一步该从哪里开始。"],
      ["需要一整套商业计划和能演示的产品", "要向投资人、评审或集团汇报，需要一份完整的商业计划，还要有能当场点开演示的产品 Demo，而不只是几页 PPT。"]
    ],
    consultFitYesLabel: "适合",
    consultFitYesText: "有业务方向但还没验证过；已经启动但方向摇摆，需要外部视角拍板；准备找人陪跑或搭建 AI 能力，但还不知道从哪里开始。",
    consultFitNoLabel: "不适合",
    consultFitNoText: "已经有清晰的产品方案、商业计划和推广打法，只差执行——可以直接看 Vibe Coding 陪跑或 AI 数字员工搭建。",
    consultTrust: "Kelly 曾创立 Buda、Vika 与 AITable，并担任喜茶创始 CTO——从 0 到 1 想清楚做什么、验证给谁用、怎么讲故事，这套判断经过多个百万级用户产品验证，不是纸上谈兵。",
    consultSteps: [
      ["01", "启动访谈", "约 1 小时，梳理业务目标、目标用户、现状与限制条件。"],
      ["02", "反复打磨", "3–7 天内多轮沟通与修订，把方向收敛成一套清晰、经得起追问的方案。"],
      ["03", "交付方案", "产出一套可执行、可对外沟通的产品与商业文档。"]
    ],
    consultOutputLabel: "交付内容",
    consultOutputs: ["产品方案说明书", "商业计划纲要", "市场推广计划", "可交互 Demo"],
    consultMeta: "交付周期 3–7 天｜适合作为培训、CAIO Office 或 Vibe Coding 陪跑前的第一步｜咨询费用可抵扣后续 CAIO 或 Vibe Coding 陪跑款",
    trainingLabel: "培训",
    trainingTitle: "先让全公司看懂 AI，再决定怎么落地",
    trainingIntro: "很多企业还没开始用 AI，不是缺工具，而是管理层和团队对「能做什么、该怎么做」没有共同认知。培训从故事化的理念导入开始，到手把手的实战工作坊，再到围绕企业场景定制的系统课程，让团队从「听说过 AI」走到「亲手做过一次」。",
    trainingFitYesLabel: "适合",
    trainingFitYesText: "管理层想让团队对 AI 建立正确认知，不被炒作或恐慌带偏；希望团队至少亲手完成一次 Agent 实战，而不是只看一次演示。",
    trainingFitNoLabel: "不适合",
    trainingFitNoText: "团队已经完成过认知建设，需要的是持续带队做出业务成果——可以直接看 CAIO Office 或 Vibe Coding 陪跑。",
    trainingOffers: [
      ["01", "Agents 公司理念导入", "适合希望管理层和全员对齐认知的企业", "故事化演讲，讲清 AI 和 Agents 公司为什么重要、最终会长成什么样子。", ["面向管理层与全员的主题演讲", "用真实案例代替概念堆砌", "为后续实战和落地做认知铺垫"], "线下主题演讲｜人民币 15,000 元 / 场"],
      ["02", "Agents 公司搭建实战工作坊", "适合准备让团队从理解走向操作的企业", "手把手带团队完成一次真实的 Agent 实战，把认知变成动手能力。", ["现场组队完成一次 Agent 实战", "覆盖从任务拆解到验收的完整过程", "团队离场时带走一份可复用的操作方法"], "线下 3 小时｜人民币 25,000 元 / 场"],
      ["03", "企业 AI 定制工作坊", "适合有明确行业、岗位或业务目标的企业", "围绕企业的行业、岗位和业务目标设计专属落地课程。", ["按行业与岗位定制的课程内容", "结合真实业务场景的练习", "可作为后续落地项目的起点"], "线下 1–3 天｜人民币 30,000–150,000 元 / 项目"],
      ["04", "Agents 公司搭建实战课程", "适合希望团队系统学习、按自己节奏推进的企业", "24 节系统实战课程，从 Agent 方法一路讲到 Agents 公司搭建。", ["24 节线上系统课程，每节约 90 分钟", "从单个 Agent 方法到公司级搭建", "团队可按自己的节奏推进学习"], "线上，每节约 90 分钟｜人民币 599 元 / 人"]
    ],
    trainingTrust: "Kelly 常年在企业内部和公开场合讲 AI 和 Agents 公司，也在带着团队真正落地——培训里讲的不是道听途说的趋势判断，而是自己正在做的事。",
    caioLabel: "CAIO Office",
    caioTitle: "企业 AI 转型与执行办公室，每周把最重要的事情向前推进",
    caioIntro: "由 Kelly 担任 CAIO Lead，以嵌入式持续合作方式进入管理层和团队。CAIO Office 不以部署一堆工具为目标，而是持续找出真正值得做的业务任务，组织执行并对结果负责。",
    caioFitYesLabel: "适合",
    caioFitYesText: "管理层认可 AI 的重要性，但团队缺一个每周把方向和执行拉齐的人；已经零散试过几个 AI 工具，却没有沉淀成业务成果。",
    caioFitNoLabel: "不适合",
    caioFitNoText: "内部还没有能配合执行的业务负责人，或者只需要一次性培训而非持续带队——可以先看商业规划与方案咨询或培训课程。",
    caioTrust: "Kelly 作为 CAIO Lead，结合喜茶创始 CTO 及 Buda、Vika、AITable 创业经历，以经营目标驱动团队与 AI 协作——不是只交报告的顾问，而是持续推动结果的负责人。",
    caioPathLabel: "两种切入路径",
    caioPaths: [
      ["01", "企业 AI 转型", "适合管理层认可 AI，但各部门仍在零散试工具、没有统一优先级和业务闭环的企业。", "从经营目标出发，筛选最值得投入的 AI 场景，协调业务、产品、技术、数据和安全团队，先让一个跨部门业务闭环跑起来。", ["AI 机会与优先级路线图", "跨部门周度执行机制", "业务闭环与管理层复盘"]],
      ["02", "研发 AI 原生转型", "适合研发持续投入却交付不透明、文档断层，或 AI Coding 只停留在局部写代码的企业。", "重建从业务目标、需求、任务到代码、测试、发布和人工签收的研发闭环，让产出可见、交付可验、知识可接管。", ["研发价值流与交付看板", "任务／PR／测试／发布证据链", "产品文档与 AI 原生研发方法"]]
    ],
    caioPathMeta: "两条路径择一切入，不要求同时采购。涉及具体 Agent、代码、自动化测试、系统集成或私有化部署时，再按范围配置 FDE 工作包。",
    caioDetailLabel: "查看 CAIO Office 完整方案",
    caioDetailUrl: "/ai/caio/",
    caioCycleLabel: "共同工作节奏",
    caioSteps: [
      ["01", "每周问诊", "和管理层与业务负责人检查目标、进展、卡点和新的 AI 机会。"],
      ["02", "确定实战", "选定本周最高优先级任务，明确结果、负责人、截止时间与验收标准。"],
      ["03", "带队执行", "调动团队与 AI Agents，推进原型、工作流、内容、数据或系统成果。"],
      ["04", "验收复盘", "检查真实业务结果，沉淀方法与资产，并排定下一周行动。"]
    ],
    caioOutputLabel: "每周看得见的交付",
    caioOutputs: ["一份有负责人和期限的任务清单", "一个持续推进的真实业务成果", "一次验收复盘与下一周安排"],
    caioMeta: "嵌入式持续合作｜每周 1 次工作会 + 持续推进｜建议 3 个月起｜按月定制报价",
    vibeLabel: "Vibe Coding 服务",
    vibeTitle: "不只把原型做出来，更把软件做成能交付的产品",
    vibeIntro: "Vibe Coding 降低了写代码的门槛，但需求边界、系统架构、测试、安全和上线质量仍需要工程判断。Kelly 将 AI 编程方法与大型软件经验结合，帮助个人和团队把想法推进到真实可用。",
    vibeFitYesLabel: "适合",
    vibeFitYesText: "已经有明确的产品方向、原型或在建项目，需要把它做成能真正上线、能维护的软件；愿意让团队参与开发，而不是把代码全部外包出去。",
    vibeFitNoLabel: "不适合",
    vibeFitNoText: "还没想清楚要做的产品和商业模式——建议先做商业规划与方案咨询；需要的是完全代工交付、团队不参与开发——这类需求需要单独沟通范围和报价。",
    vibeProof: [
      ["百万行级", "企业软件研发与交付经验"],
      ["多种产品形态", "游戏、App、小程序、大型网游与大型企业软件"],
      ["完整交付链路", "需求、架构、开发、测试、部署与迭代"]
    ],
    vibeOffers: [
      ["01", "Vibe Coding 软件开发实战工作坊", "适合需要统一方法的产品、技术与业务团队", "用一个真实业务题完成从需求描述、Agent 协作到可运行产品的全过程。", ["团队共用的 Vibe Coding 工作流", "一个现场完成的可运行成果", "代码质量、安全与上线检查清单"], "1 天｜人民币 30,000 元 / 场"],
      ["02", "Vibe Coding 软件项目陪跑（4 周）", "适合已有想法、原型或在建项目的团队", "团队主导开发，Kelly 在关键节点拆需求、定架构、审代码、处理难题并带领上线。", ["每周项目推进与技术评审", "架构、测试、部署与文档指导", "代码和项目成果由客户完整保有"], "4 周起｜按月定制报价"],
      ["03", "Vibe Coding 复杂项目工程顾问", "适合遗留系统、关键集成或高风险上线", "在 AI 生成代码之外补足资深工程判断，识别系统边界、技术债与交付风险。", ["技术方案与架构评审", "关键代码、性能与安全审查", "疑难问题与工程决策支持"], "按月定制报价" ]
    ],
    vibeTrust: "Kelly 有百万行级企业软件研发与交付经验，做过游戏、App、小程序、大型网游与大型企业软件，同时深度使用 AI 编程工具——知道哪些是 AI 能自己搞定的，哪些必须靠工程判断。",
    deployLabel: "AI 数字员工",
    deployTitle: "把 Agent 真正放进一个业务流程里，不是摆在那里演示",
    deployIntro: "很多企业买了 AI 工具，却没有变成看得见的业务结果。AI 数字员工搭建按具体业务场景组合 Codex、OpenClaw、Buda AI 等工具和平台，交付一个真正在工作流里运转的数字员工，而不是一个演示 Demo。",
    deployFitYesLabel: "适合",
    deployFitYesText: "已经确定了一个具体的业务场景（客服、内容、数据处理、销售支持等），需要把它变成一个稳定运行的数字员工；团队愿意配合梳理现有流程和数据。",
    deployFitNoLabel: "不适合",
    deployFitNoText: "还没有确定具体场景，只是想「上一个 AI」——建议先做商业规划与方案咨询或培训，理清楚从哪个场景切入。",
    deploySteps: [
      ["01", "场景确认", "明确要交付的数字员工负责哪个具体任务、接入哪些数据和系统。"],
      ["02", "搭建接入", "组合 Agent 工具与平台，把数字员工接入真实工作流。"],
      ["03", "培训验收", "用真实业务场景验证效果，交付团队培训与上线运营手册。"]
    ],
    deployOutputLabel: "交付内容",
    deployOutputs: ["1 个可运行的数字员工", "1 条接入业务的核心工作流", "团队培训与 1 个月运营维护"],
    deployMeta: "定制交付｜国内人民币 12,000 元起，海外 US$2,000 起｜按业务场景与系统连接复杂度报价",
    deployTrust: "Kelly 是 Buda AI 的创始人，Buda 本身就是用来搭建和运行 AI 数字员工与 Agents 公司的平台——这不是纸面上的方案，是 Kelly 自己每天在用、也在卖的系统。",
    assetsLabel: "AI 资产中枢",
    assetsTitle: "让企业的数据、知识和 Agent 产出真正沉淀下来",
    assetsIntro: "很多企业用了不少 AI，但知识、Prompt、Agent Skills 和产出全部散落在个人电脑和聊天记录里，换个人就得重新摸索。AI 资产中枢把这些沉淀成企业统一的资产库，通过 Agent 提交、人工审核、权限、版本和审计，让每一份产出可信、可追溯、可复用。",
    assetsFitYesLabel: "适合",
    assetsFitYesText: "团队已经在用多个 Agent 和 AI 工具，但产出没有统一沉淀，换人就要重新摸索；希望企业的数据、知识和 Skills 变成可以复用的资产，而不是散落在个人聊天记录里。",
    assetsFitNoLabel: "不适合",
    assetsFitNoText: "还没有稳定运行的 Agent 或工作流可供沉淀——建议先从 AI 数字员工搭建或 Vibe Coding 陪跑开始，积累产出之后再做资产中枢。",
    assetsSteps: [
      ["01", "现状梳理", "盘点现有数据、知识库、Agent 产出与权限现状。"],
      ["02", "中枢搭建", "基于 Busabase + Vika 搭建统一的资产库与提交、审核、版本流程。"],
      ["03", "治理落地", "明确权限、审计与复用机制，交付团队使用培训。"]
    ],
    assetsOutputLabel: "交付内容",
    assetsOutputs: ["1 个统一的企业 AI 资产库", "Agent 提交 + 人工审核的治理流程", "权限、版本与审计机制"],
    assetsMeta: "项目制｜人民币 12,000 元起，按项目规模报价｜适合已有一定 Agent 使用基础的团队",
    assetsTrust: "Kelly 是 Vika 与 AITable 的创始人，长期在做的就是让数据和知识变成可信、可复用的资产——资产中枢背后是同一套判断，只是把它用在了企业自己的 AI 产出上。",
    productsLabel: "更多能力",
    productsTitle: "落地过程里会用到的两个基础工具",
    productsIntro: "这两项不是咨询式服务，而是支撑落地的产品能力，可以单独购买，也可以作为其他服务的一部分。",
    productsItems: [
      ["国际大模型中转服务（MoonRouter）", "统一使用 GPT、Claude、Gemini，无需自行处理海外账号与支付采购。", "在线充值，按量使用｜官方 API 价格 5 折"],
      ["企业品牌专属 Agent 小程序", "企业品牌微信 Agent 小程序，用于培训、内部服务或会员式对外服务。", "品牌定制｜人民币 99,999 元起"]
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
    contactText: "告诉 Kelly 你的业务目标、团队情况，以及已有想法、原型或代码现状，我们会先判断适合培训、CAIO Office、Vibe Coding 陪跑还是直接落地。",
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
    description: "Enterprise AI deployment, CAIO Office leadership, Vibe Coding training and coaching, AI employees, AI asset hubs, and branded Agent experiences by Kelly.",
    nav: ["Services", "Business Planning", "CAIO Office", "Vibe Coding", "Delivery", "Technology", "Contact"],
    eyebrow: "Enterprise AI enablement",
    lead: "Move from AI awareness and Vibe Coding practice to CAIO Office leadership, AI employees, and enterprise AI asset hubs in real operations.",
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
    serviceIntro: "Begin with training, a Vibe Coding workshop, or project coaching; bring in a CAIO Office to lead weekly execution; or deploy an Agent, AI asset hub, or branded mini-program. Prices below are for reference.",
    insightsLabel: "Insights · Chinese",
    insightsTitle: "Read the method before choosing the service",
    insightsIntro: "Three Chinese long-form essays explain enterprise AI deployment, AI-native R&D transformation, and managing an Agents company: why the problem occurs, how to move it forward, and where a CAIO Office or FDE fits.",
    insightsCta: "Read article",
    insightsItems: [
      ["Enterprise AI needs someone who drives the result", "A practical diagnosis of the gap between AI strategy, weekly execution, acceptance, and reusable company assets.", "Enterprise AI · CAIO", "/articles/enterprise-ai-needs-caio-and-fde.html"],
      ["Why a larger R&D team still may not ship faster", "A practical view of delivery visibility, AI coding, testing, acceptance, documentation, and R&D operating systems.", "AI-Native R&D Transformation · AI Coding", "/articles/ai-native-rd-team-optimization.html"],
      ["Why learning more AI can keep you trapped as a super-worker", "A Chinese essay on moving from tool learning to managing AI through roles, context, workflow, and acceptance.", "Agents company · Management", "/articles/stop-learning-ai-start-managing-it.html"]
    ],
    headers: ["Type", "Service", "Core delivery", "Format / duration", "Price"],
    mobileLabels: ["Type", "Service", "Delivery", "Format", "Price"],
    services: [
      ["consult", "Consulting", "Business Planning and Solution Consulting", "A product brief, business plan outline, marketing plan, and interactive demo — kicked off with one interview and refined over days to a week", "1-hour kickoff interview + 3–7 days of refinement", "RMB 19,999+ / engagement"],
      ["training", "Training", "Building an Agents Company", "24 practical sessions covering Agent methods through company-level orchestration", "Online, about 90 minutes each", "RMB 599 / person"],
      ["training", "Vision", "Agents Company Introduction", "Story-led keynote on why AI matters and what an Agents company can become", "On-site keynote", "RMB 15,000 / session"],
      ["build", "Practice", "Agents Company Hands-on Workshop", "Guided Agent build that moves a team from understanding to operation", "On-site, 3 hours", "RMB 25,000 / session"],
      ["training", "Custom", "Enterprise AI Custom Workshop", "A tailored program around the company's industry, roles, and operating goals", "On-site, 1–3 days", "RMB 30,000–150,000 / project"],
      ["caio", "CAIO", "CAIO Office (Enterprise AI Transformation & Execution)", "Choose Enterprise AI Transformation or AI-Native R&D Transformation; Kelly serves as CAIO Lead to set priorities, assign owners, lead execution, and review outcomes every week", "Embedded continuous engagement: weekly working session + ongoing execution; 3-month minimum recommended", "Custom monthly retainer"],
      ["coding", "Coding", "Vibe Coding Software Development Workshop", "Use a real business challenge to move from requirements to a working product the team can keep improving", "On-site, 1 day", "RMB 30,000 / session"],
      ["coding", "Coaching", "Vibe Coding Project Coaching", "Requirements, architecture, code review, testing, deployment, and iteration guidance around the client's project; the client owns the code and output", "Online, from 4 weeks", "Custom monthly retainer"],
      ["coding", "Advisory", "Vibe Coding Engineering Advisory", "Technical planning, risk review, and engineering decisions for complex systems, legacy code, or critical releases", "Monthly or project-based", "Custom monthly retainer"],
      ["build", "Deploy", "AI Employees / Agents Company Build", "Combine Codex, OpenClaw, Buda AI, and other Agent tools for the business scenario; deliver 1 AI employee, 1 core workflow, team enablement, and 1 month of operational support", "Custom delivery", "RMB 12,000+ domestic / US$2,000+ overseas"],
      ["data", "Assets", "Enterprise AI Asset Hub", "Build an enterprise AI asset library for data, knowledge bases, Agent Skills, and AI Apps; use Agent submissions, human review, permissions, versioning, and audit trails to keep every output trusted, traceable, and reusable", "Project-based", "RMB 12,000+ / scoped quote"],
      ["platform", "Models", "International Model Access (MoonRouter)", "Unified GPT, Claude, and Gemini access without managing overseas vendor accounts and payments", "Online credit, usage-based", "50% of official API pricing"],
      ["brand", "Brand", "Branded Enterprise Agent Mini Program", "A branded WeChat Agent mini program for training, internal service, or member-facing delivery", "Custom build", "RMB 99,999+"]
    ],
    finePrint: "RMB prices exclude tax. Travel and accommodation for on-site delivery may be quoted separately. Final scope, schedule, fees, and acceptance criteria are governed by the formal quotation or contract.",
    consultLabel: "Business Planning and Solution Consulting",
    consultTitle: "Get clear on what to build, and walk away with a complete business plan and product proposal",
    consultIntro: "Many teams come to Kelly still unsure what product to build, who it's for, how it makes money, or how to market it — yet already debating tech stacks. Business Planning and Solution Consulting starts with one interview and spends a few days refining the direction into a plan the team can act on, and can also take to investors or stakeholders — including an interactive demo so you can confirm what the product roughly looks like before the plan is finalized.",
    consultScenariosLabel: "What it solves",
    consultScenarios: [
      ["You're launching a new business line", "The company has committed to a new product or business line and has a rough direction, but nobody can yet say what the product actually looks like, who buys it, or how it makes money."],
      ["You have an idea but don't know how AI fits", "You have an idea and know AI can help, but you're unsure what form it should take, which technical path to follow, or where the first step even is."],
      ["You need a full business plan and something to demo", "You're presenting to investors, a review panel, or group leadership, and need a complete business plan plus a product demo people can actually click through — not just slides."]
    ],
    consultFitYesLabel: "Good fit",
    consultFitYesText: "You have a direction but haven't validated it; momentum has stalled and you need an outside call; you're ready to bring in coaching or build AI capability but don't know where to start.",
    consultFitNoLabel: "Not a fit",
    consultFitNoText: "You already have a clear product plan, business model, and go-to-market and are ready for execution — look at Vibe Coding coaching or an AI employee build instead.",
    consultTrust: "Kelly founded Buda, Vika, and AITable, and served as founding CTO of HEYTEA — the judgment behind deciding what to build, validating who it's for, and shaping the story has been proven across multiple products with millions of users, not just in theory.",
    consultSteps: [
      ["01", "Kickoff interview", "About 1 hour to map the business objective, target users, current state, and constraints."],
      ["02", "Iterative refinement", "Multiple rounds of feedback over 3–7 days to converge on a plan that holds up under scrutiny."],
      ["03", "Deliver the plan", "A set of executable, presentation-ready product and business documents."]
    ],
    consultOutputLabel: "What's delivered",
    consultOutputs: ["Product brief", "Business plan outline", "Marketing plan", "Interactive demo"],
    consultMeta: "3–7 day turnaround | A natural first step before training, CAIO Office, or Vibe Coding coaching | The fee is credited toward a follow-on CAIO or Vibe Coding engagement",
    trainingLabel: "Training",
    trainingTitle: "Get the whole company reading AI the same way before deciding how to deploy it",
    trainingIntro: "Most companies haven't started using AI not because they lack tools, but because leadership and the team don't share a picture of what's possible and how to get there. Training starts with a story-led introduction, moves to a hands-on workshop, and can extend into a program built around the company's own scenarios — taking the team from \"heard about AI\" to \"has actually done it once.\"",
    trainingFitYesLabel: "Good fit",
    trainingFitYesText: "Leadership wants the team to build accurate AI awareness instead of being swept up by hype or fear, and wants the team to complete at least one hands-on Agent exercise rather than just watch a demo.",
    trainingFitNoLabel: "Not a fit",
    trainingFitNoText: "The team has already built that awareness and needs sustained leadership toward business outcomes — go straight to a CAIO Office or Vibe Coding coaching instead.",
    trainingOffers: [
      ["01", "Agents Company Introduction", "For companies that want leadership and the whole team aligned", "A story-led keynote on why AI and an Agents company matter, and what one can become.", ["A keynote for leadership and the full team", "Real cases instead of stacked concepts", "Sets up the awareness needed for the workshop and delivery that follow"], "On-site keynote | RMB 15,000 / session"],
      ["02", "Agents Company Hands-on Workshop", "For teams ready to move from understanding to operation", "A guided build that takes the team through one real Agent exercise, turning awareness into hands-on skill.", ["The team completes a live Agent exercise together", "Covers the full path from task breakdown to acceptance", "The team leaves with a reusable method"], "On-site, 3 hours | RMB 25,000 / session"],
      ["03", "Enterprise AI Custom Workshop", "For companies with a clear industry, role, or business target", "A tailored program built around the company's industry, roles, and operating goals.", ["Content customized by industry and role", "Exercises built on real business scenarios", "Can seed a follow-on implementation project"], "On-site, 1–3 days | RMB 30,000–150,000 / project"],
      ["04", "Building an Agents Company", "For companies that want the team to learn systematically, at its own pace", "24 practical sessions covering Agent methods through company-level orchestration.", ["24 online sessions, about 90 minutes each", "From individual Agent methods to company-level orchestration", "The team can progress at its own pace"], "Online, about 90 minutes each | RMB 599 / person"]
    ],
    trainingTrust: "Kelly speaks regularly on AI and Agents companies, both inside client organizations and in public — the training reflects what Kelly is actually building, not secondhand trend-watching.",
    caioLabel: "CAIO Office",
    caioTitle: "Enterprise AI transformation and execution, with progress every week",
    caioIntro: "Kelly serves as CAIO Lead through an embedded continuous engagement with leadership and the team. The CAIO Office identifies the business work worth doing, organizes execution, and owns the follow-through.",
    caioFitYesLabel: "Good fit",
    caioFitYesText: "Leadership already believes AI matters, but the team lacks someone to align direction and execution every week; you've tried a handful of AI tools without turning them into business outcomes.",
    caioFitNoLabel: "Not a fit",
    caioFitNoText: "There's no internal business owner to pair with execution yet, or you just need a one-time training rather than ongoing leadership — start with Business Planning and Solution Consulting or a training program instead.",
    caioTrust: "As CAIO Lead, Kelly combines founding CTO experience at HEYTEA with building Buda, Vika, and AITable to drive teams and AI toward business outcomes — not advice that stops at slides.",
    caioPathLabel: "Two ways to engage",
    caioPaths: [
      ["01", "Enterprise AI Transformation", "For companies whose leaders support AI, but departments still run isolated tool experiments without shared priorities or an operating loop.", "Start from business goals, select the AI work worth funding, align business, product, engineering, data, and security, and make one cross-functional operating loop work before scaling.", ["AI opportunity portfolio and roadmap", "Cross-functional weekly execution system", "Business outcome and executive review"]],
      ["02", "AI-Native R&D Transformation", "For companies investing in engineering without clear delivery visibility, durable documentation, or an AI coding workflow beyond isolated code generation.", "Rebuild the path from business goal and requirement through task, code, test, release, and human sign-off so work is visible, evidence-based, and transferable.", ["R&D value stream and delivery view", "Task / PR / test / release evidence chain", "Product documentation and AI-native engineering method"]]
    ],
    caioPathMeta: "Choose one track to start; the two are not bundled by default. When delivery requires Agents, code changes, automated testing, systems integration, or private deployment, scope a separate FDE work package.",
    caioDetailLabel: "View the complete CAIO Office plan",
    caioDetailUrl: "/ai/en/caio/",
    caioCycleLabel: "Shared operating cadence",
    caioSteps: [
      ["01", "Weekly diagnosis", "Review goals, progress, blockers, and new AI opportunities with leadership and business owners."],
      ["02", "Set the work", "Choose the highest-priority task and define its outcome, owner, deadline, and acceptance criteria."],
      ["03", "Lead execution", "Coordinate the team and AI Agents to advance a prototype, workflow, content, data, or system outcome."],
      ["04", "Review and reset", "Validate business results, retain methods and assets, and set the next week's actions."]
    ],
    caioOutputLabel: "Visible delivery every week",
    caioOutputs: ["A task list with owners and deadlines", "A real business outcome that keeps advancing", "An acceptance review and plan for the next week"],
    caioMeta: "Embedded continuous engagement | 1 weekly working session + ongoing execution | 3-month minimum recommended | custom monthly retainer",
    vibeLabel: "Vibe Coding services",
    vibeTitle: "Go beyond a working prototype to software that can actually ship",
    vibeIntro: "Vibe Coding lowers the barrier to writing code, but requirements, architecture, testing, security, and release quality still demand engineering judgment. Kelly combines AI-assisted development with large-scale software experience to help people and teams turn ideas into dependable products.",
    vibeFitYesLabel: "Good fit",
    vibeFitYesText: "You have a clear product direction, prototype, or active build and need to turn it into software that can actually ship and be maintained; you want your team involved in development rather than outsourcing all of it.",
    vibeFitNoLabel: "Not a fit",
    vibeFitNoText: "You haven't settled on the product or business model yet — start with Business Planning and Solution Consulting instead; or you need fully outsourced delivery with no team involvement, which needs its own scope and quote.",
    vibeProof: [
      ["Million-line scale", "Enterprise software engineering and delivery experience"],
      ["Across product types", "Games, apps, mini programs, large-scale online games, and enterprise software"],
      ["End-to-end delivery", "Requirements, architecture, development, testing, deployment, and iteration"]
    ],
    vibeOffers: [
      ["01", "Vibe Coding Software Development Workshop", "For product, engineering, and business teams adopting a shared method", "Use one real business challenge to practice the full path from requirements and Agent collaboration to a working product.", ["A shared Vibe Coding workflow", "One working outcome built during the session", "Code quality, security, and release checklists"], "1 day | RMB 30,000 / session"],
      ["02", "Vibe Coding Software Project Coaching (4 Weeks)", "For teams with an idea, prototype, or active build", "The team owns development while Kelly guides requirements, architecture, reviews, hard problems, and release at critical points.", ["Weekly delivery and technical reviews", "Architecture, testing, deployment, and documentation guidance", "The client retains all code and project output"], "From 4 weeks | Custom monthly retainer"],
      ["03", "Vibe Coding Complex-Project Engineering Advisory", "For legacy systems, critical integrations, or high-risk releases", "Add senior engineering judgment beyond AI-generated code to expose system boundaries, technical debt, and delivery risk.", ["Technical plan and architecture review", "Critical code, performance, and security review", "Complex debugging and engineering decisions"], "Custom monthly retainer"]
    ],
    vibeTrust: "Kelly has million-line-scale enterprise software engineering and delivery experience across games, apps, mini programs, large online games, and enterprise systems, alongside deep daily use of AI coding tools — knowing exactly what AI can own outright and what still needs engineering judgment.",
    deployLabel: "AI Employees",
    deployTitle: "Put an Agent inside a real business process, not on a stage for a demo",
    deployIntro: "Many companies have bought AI tools without turning them into visible business results. AI Employee builds combine Codex, OpenClaw, Buda AI, and other Agent tools and platforms around a specific business scenario, delivering an AI employee that actually runs inside a workflow — not a demo.",
    deployFitYesLabel: "Good fit",
    deployFitYesText: "You've identified a specific business scenario (support, content, data processing, sales support, etc.) and need it turned into a stable, running AI employee; your team is willing to help map the existing process and data.",
    deployFitNoLabel: "Not a fit",
    deployFitNoText: "You haven't identified a specific scenario yet and just want \"some AI\" — start with Business Planning and Solution Consulting or training to find the right entry point first.",
    deploySteps: [
      ["01", "Scope the scenario", "Define exactly which task the AI employee owns, and which data and systems it connects to."],
      ["02", "Build and connect", "Combine Agent tools and platforms to plug the AI employee into a real workflow."],
      ["03", "Train and validate", "Verify results against real business scenarios, and deliver team training plus an operating runbook."]
    ],
    deployOutputLabel: "What's delivered",
    deployOutputs: ["1 working AI employee", "1 core workflow connected to the business", "Team enablement and 1 month of operational support"],
    deployMeta: "Custom delivery | RMB 12,000+ domestic, US$2,000+ overseas | Priced by scenario and integration complexity",
    deployTrust: "Kelly is the founder of Buda AI, the platform this service uses to build and run AI employees and Agents companies — this isn't a slide-deck plan, it's the system Kelly uses and sells every day.",
    assetsLabel: "AI Asset Hub",
    assetsTitle: "Make the company's data, knowledge, and Agent output actually stick",
    assetsIntro: "Many companies have used plenty of AI, but the knowledge, prompts, Agent Skills, and output are scattered across personal laptops and chat logs — a new hire has to rediscover everything. The AI Asset Hub consolidates it into a shared company asset library, using Agent submissions, human review, permissions, versioning, and audit trails to keep every output trusted, traceable, and reusable.",
    assetsFitYesLabel: "Good fit",
    assetsFitYesText: "Your team already uses multiple Agents and AI tools, but the output isn't consolidated and a new hire has to start over; you want the company's data, knowledge, and Skills to become reusable assets instead of scattered chat logs.",
    assetsFitNoLabel: "Not a fit",
    assetsFitNoText: "You don't yet have stable running Agents or workflows to consolidate — start with an AI Employee build or Vibe Coding coaching, then build the asset hub once there's output to house.",
    assetsSteps: [
      ["01", "Assess the baseline", "Inventory existing data, knowledge bases, Agent output, and current permissions."],
      ["02", "Build the hub", "Stand up a shared asset library plus submission, review, and versioning flow on Busabase + Vika."],
      ["03", "Put governance in place", "Define permissions, audit trails, and reuse rules, and train the team to use it."]
    ],
    assetsOutputLabel: "What's delivered",
    assetsOutputs: ["1 shared enterprise AI asset library", "An Agent-submission-plus-human-review governance flow", "Permissions, versioning, and audit trails"],
    assetsMeta: "Project-based | RMB 12,000+, scoped by project | Best suited to teams with some existing Agent usage",
    assetsTrust: "Kelly is the founder of Vika and AITable, and has spent years on exactly this problem — turning data and knowledge into trusted, reusable assets. The Asset Hub applies the same judgment to a company's own AI output.",
    productsLabel: "Supporting tools",
    productsTitle: "Two foundational tools used along the way",
    productsIntro: "These aren't consulting-style engagements — they're product capabilities that support delivery. Either can be purchased on its own or as part of another service.",
    productsItems: [
      ["International Model Access (MoonRouter)", "Unified GPT, Claude, and Gemini access without managing overseas vendor accounts and payments.", "Online credit, usage-based | 50% of official API pricing"],
      ["Branded Enterprise Agent Mini Program", "A branded WeChat Agent mini program for training, internal service, or member-facing delivery.", "Custom build | RMB 99,999+"]
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
    contactText: "Share the business objective, team context, and the current state of your idea, prototype, or code. We will determine whether training, CAIO Office leadership, Vibe Coding coaching, or direct implementation is the right starting point.",
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
    description: "企業 AI 落地、CAIO Office、Vibe Coding 培訓與項目陪跑，涵蓋數碼員工、企業 AI 資產中樞與品牌 Agent。查看服務與參考報價。",
    nav: ["服務報價", "商業規劃", "CAIO Office", "Vibe Coding", "落地路徑", "技術底座", "聯絡"],
    eyebrow: "企業 AI 落地服務",
    lead: "從理念導入、Vibe Coding 實戰，到 CAIO Office、數碼員工與企業 AI 資產中樞，把 AI 從認知帶進真實業務。",
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
    serviceIntro: "可以從培訓、Vibe Coding 工作坊或項目陪跑開始，也可以引入 CAIO Office 持續帶隊，或直接落地 Agent、AI 資產中樞與企業品牌小程式。以下為客戶參考報價。",
    insightsLabel: "觀點文章 · 中文",
    insightsTitle: "先看方法，再決定需要什麼服務",
    insightsIntro: "三篇長文分別從企業 AI 落地、研發團隊優化和 Agents 公司管理切入，講清問題為什麼發生、應該怎樣推進，以及 CAIO Office 與 FDE 在其中承擔什麼角色。",
    insightsCta: "閱讀全文",
    insightsItems: [
      ["企業做 AI，最缺的不是工具，而是一個把結果逼出來的人", "從「AI 落地斷層」拆解目標、執行、驗收和資產沉澱，適合正在推動公司級 AI 轉型的管理者。", "企業 AI · CAIO", "/articles/enterprise-ai-needs-caio-and-fde.html"],
      ["研發團隊越招越多，產品為什麼還是做不快？", "從「研發黑箱」解釋交付透明、AI Coding、測試驗收和技術資產，適合 CEO、CTO 與研發負責人。", "研發轉型 · AI Coding", "/articles/ai-native-rd-team-optimization.html"],
      ["你越努力學 AI，越可能一直做那個超級打工人", "從「超級打工人陷阱」解釋為什麼工具越多反而越忙，以及怎樣用崗位、資料、流程和驗收真正把工作交出去。", "Agents 公司 · 管理", "/articles/stop-learning-ai-start-managing-it.html"]
    ],
    headers: ["類別", "服務", "核心交付", "形式 / 時長", "服務報價"],
    mobileLabels: ["類別", "服務", "交付", "形式", "報價"],
    services: [
      ["consult", "諮詢", "商業規劃與方案諮詢", "產品方案說明書、商業計劃綱要、市場推廣計劃與可互動 Demo，一次訪談開局，數天到一週內打磨完成", "1 小時啟動訪談 + 3–7 天打磨", "人民幣 19,999 元起 / 項目"],
      ["training", "培訓", "Agents 公司搭建實戰課程", "24 節系統實戰，從 Agent 方法到 Agents 公司搭建", "網上，每節約 90 分鐘", "人民幣 599 元 / 人"],
      ["training", "啟蒙", "Agents 公司理念導入", "故事化演講，理解 AI 的重要性與 Agents 公司的最終圖景", "線下主題演講", "人民幣 15,000 元 / 場"],
      ["build", "實戰", "Agents 公司搭建實戰工作坊", "手把手完成一次 Agent 實戰，讓團隊從理解走向操作", "線下 3 小時", "人民幣 25,000 元 / 場"],
      ["training", "定制", "企業 AI 定制工作坊", "圍繞行業、崗位和業務目標設計專屬落地課程", "線下 1–3 天", "人民幣 30,000–150,000 元 / 項目"],
      ["caio", "CAIO", "CAIO Office（企業 AI 轉型與執行辦公室）", "提供企業 AI 轉型與研發 AI 原生轉型兩條路徑；由 Kelly 擔任 CAIO Lead，每週確定優先級、拆解任務、帶隊執行並驗收複盤", "嵌入式持續合作：每週工作會 + 持續推進，建議 3 個月起", "按月定制報價"],
      ["coding", "編程", "Vibe Coding 軟件開發實戰工作坊", "使用真實業務題，從需求拆解到完成一個可運行、可繼續迭代的產品", "線下 1 天", "人民幣 30,000 元 / 場"],
      ["coding", "陪跑", "Vibe Coding 項目陪跑", "圍繞客戶項目提供需求、架構、代碼審查、測試、部署和迭代指導，代碼與成果歸客戶", "網上 4 週起", "按月定制報價"],
      ["coding", "顧問", "Vibe Coding 工程顧問", "針對複雜系統、遺留代碼或關鍵上線提供技術方案、風險審查與工程決策支援", "月度或項目制", "按月定制報價"],
      ["build", "落地", "AI 數碼員工 / Agents 公司搭建", "按業務場景組合 Codex、OpenClaw、Buda AI 等 Agent 工具與平台，交付 1 個數碼員工、1 條核心工作流程、團隊培訓與 1 個月營運維護起", "定制交付", "國內人民幣 12,000 元起 / 海外 US$2,000 起"],
      ["data", "資產", "企業 AI 資產中樞", "搭建企業 AI 資產庫，統一沉澱企業數據、知識庫、Agent Skills 與 AI Apps；通過 Agent 提交、人工審核、權限、版本和審計治理，讓每份產出可信、可追溯、可重用", "項目制", "人民幣 12,000 元起 / 按項目報價"],
      ["platform", "模型", "國際大模型中轉服務（MoonRouter）", "統一使用 GPT、Claude、Gemini，毋須自行處理海外帳戶與付款採購", "網上充值，按量使用", "官方 API 價格 5 折"],
      ["brand", "品牌", "企業品牌專屬 Agent 小程式", "企業品牌微信 Agent 小程式，用於培訓、內部服務或會員式對外服務", "品牌定制", "人民幣 99,999 元起"]
    ],
    finePrint: "以上人民幣報價均為未稅價。線下服務的差旅住宿視項目情況另行確認；最終範圍、週期、報價和驗收標準以正式報價單或合約為準。",
    consultLabel: "商業規劃與方案諮詢",
    consultTitle: "先想清楚要做什麼，交出一套完整的商業規劃與產品方案",
    consultIntro: "很多團隊來找 Kelly 時，還沒想清楚要做的產品、目標用戶、商業模式和推廣打法，卻已經在糾結技術選型。商業規劃與方案諮詢從一次訪談開始，用數天時間把方向打磨清楚，交付一套可以直接拿去執行、也可以拿去和團隊或投資人溝通的方案，並附一個可互動 Demo，讓你在方案定稿前就能確認產品大概長什麼樣。",
    consultScenariosLabel: "解決什麼問題",
    consultScenarios: [
      ["要啟動一條新業務", "公司決定做一個新產品或新業務線，方向大致有了，但產品到底長什麼樣、賣給誰、怎麼賺錢，還沒有人說得清楚。"],
      ["有想法，但不知道怎麼用 AI 落地", "手上有一個想法，也知道 AI 能幫上忙，但不確定該做成什麼形態、走哪條技術路徑，更不知道第一步該從哪裡開始。"],
      ["需要一整套商業計劃和能演示的產品", "要向投資人、評審或集團匯報，需要一份完整的商業計劃，還要有能當場點開演示的產品 Demo，而不只是幾頁 PPT。"]
    ],
    consultFitYesLabel: "適合",
    consultFitYesText: "有業務方向但還沒驗證過；已經啟動但方向搖擺，需要外部視角拍板；準備找人陪跑或搭建 AI 能力，但還不知道從哪裡開始。",
    consultFitNoLabel: "不適合",
    consultFitNoText: "已經有清晰的產品方案、商業計劃和推廣打法，只差執行——可以直接看 Vibe Coding 陪跑或 AI 數碼員工搭建。",
    consultTrust: "Kelly 曾創立 Buda、Vika 與 AITable，並擔任喜茶創始 CTO——從 0 到 1 想清楚做什麼、驗證給誰用、怎麼講故事，這套判斷經過多個百萬級用戶產品驗證，不是紙上談兵。",
    consultSteps: [
      ["01", "啟動訪談", "約 1 小時，梳理業務目標、目標用戶、現狀與限制條件。"],
      ["02", "反復打磨", "3–7 天內多輪溝通與修訂，把方向收斂成一套清晰、經得起追問的方案。"],
      ["03", "交付方案", "產出一套可執行、可對外溝通的產品與商業文檔。"]
    ],
    consultOutputLabel: "交付內容",
    consultOutputs: ["產品方案說明書", "商業計劃綱要", "市場推廣計劃", "可互動 Demo"],
    consultMeta: "交付週期 3–7 天｜適合作為培訓、CAIO Office 或 Vibe Coding 陪跑前的第一步｜諮詢費用可抵扣後續 CAIO 或 Vibe Coding 陪跑款",
    trainingLabel: "培訓",
    trainingTitle: "先讓全公司看懂 AI，再決定怎麼落地",
    trainingIntro: "很多企業還沒開始用 AI，不是缺工具，而是管理層和團隊對「能做什麼、該怎麼做」沒有共同認知。培訓從故事化的理念導入開始，到手把手的實戰工作坊，再到圍繞企業場景定制的系統課程，讓團隊從「聽說過 AI」走到「親手做過一次」。",
    trainingFitYesLabel: "適合",
    trainingFitYesText: "管理層想讓團隊對 AI 建立正確認知，不被炒作或恐慌帶偏；希望團隊至少親手完成一次 Agent 實戰，而不是只看一次演示。",
    trainingFitNoLabel: "不適合",
    trainingFitNoText: "團隊已經完成過認知建設，需要的是持續帶隊做出業務成果——可以直接看 CAIO Office 或 Vibe Coding 陪跑。",
    trainingOffers: [
      ["01", "Agents 公司理念導入", "適合希望管理層和全員對齊認知的企業", "故事化演講，講清 AI 和 Agents 公司為什麼重要、最終會長成什麼樣子。", ["面向管理層與全員的主題演講", "用真實案例代替概念堆砌", "為後續實戰和落地做認知鋪墊"], "線下主題演講｜人民幣 15,000 元 / 場"],
      ["02", "Agents 公司搭建實戰工作坊", "適合準備讓團隊從理解走向操作的企業", "手把手帶團隊完成一次真實的 Agent 實戰，把認知變成動手能力。", ["現場組隊完成一次 Agent 實戰", "涵蓋從任務拆解到驗收的完整過程", "團隊離場時帶走一份可重用的操作方法"], "線下 3 小時｜人民幣 25,000 元 / 場"],
      ["03", "企業 AI 定制工作坊", "適合有明確行業、崗位或業務目標的企業", "圍繞企業的行業、崗位和業務目標設計專屬落地課程。", ["按行業與崗位定制的課程內容", "結合真實業務場景的練習", "可作為後續落地項目的起點"], "線下 1–3 天｜人民幣 30,000–150,000 元 / 項目"],
      ["04", "Agents 公司搭建實戰課程", "適合希望團隊系統學習、按自己節奏推進的企業", "24 節系統實戰課程，從 Agent 方法一路講到 Agents 公司搭建。", ["24 節線上系統課程，每節約 90 分鐘", "從單個 Agent 方法到公司級搭建", "團隊可按自己的節奏推進學習"], "線上，每節約 90 分鐘｜人民幣 599 元 / 人"]
    ],
    trainingTrust: "Kelly 常年在企業內部和公開場合講 AI 和 Agents 公司，也在帶著團隊真正落地——培訓裡講的不是道聽途說的趨勢判斷，而是自己正在做的事。",
    caioLabel: "CAIO Office",
    caioTitle: "企業 AI 轉型與執行辦公室，每週把最重要的事情向前推進",
    caioIntro: "由 Kelly 擔任 CAIO Lead，以嵌入式持續合作方式進入管理層和團隊。CAIO Office 不以部署一堆工具為目標，而是持續找出真正值得做的業務任務，組織執行並對結果負責。",
    caioFitYesLabel: "適合",
    caioFitYesText: "管理層認可 AI 的重要性，但團隊缺一個每週把方向和執行拉齊的人；已經零散試過幾個 AI 工具，卻沒有沉澱成業務成果。",
    caioFitNoLabel: "不適合",
    caioFitNoText: "內部還沒有能配合執行的業務負責人，或者只需要一次性培訓而非持續帶隊——可以先看商業規劃與方案諮詢或培訓課程。",
    caioTrust: "Kelly 作為 CAIO Lead，結合喜茶創始 CTO 及 Buda、Vika、AITable 創業經歷，以經營目標驅動團隊與 AI 協作——不是只交報告的顧問，而是持續推動結果的負責人。",
    caioPathLabel: "兩種切入路徑",
    caioPaths: [
      ["01", "企業 AI 轉型", "適合管理層認可 AI，但各部門仍在零散試工具、沒有統一優先級和業務閉環的企業。", "從經營目標出發，篩選最值得投入的 AI 場景，協調業務、產品、技術、數據和安全團隊，先讓一個跨部門業務閉環跑起來。", ["AI 機會與優先級路線圖", "跨部門每週執行機制", "業務閉環與管理層複盤"]],
      ["02", "研發 AI 原生轉型", "適合研發持續投入卻交付不透明、文檔斷層，或 AI Coding 只停留在局部寫代碼的企業。", "重建從業務目標、需求、任務到代碼、測試、發布和人工簽收的研發閉環，讓產出可見、交付可驗、知識可接管。", ["研發價值流與交付看板", "任務／PR／測試／發布證據鏈", "產品文檔與 AI 原生研發方法"]]
    ],
    caioPathMeta: "兩條路徑擇一切入，不要求同時採購。涉及具體 Agent、代碼、自動化測試、系統集成或私有化部署時，再按範圍配置 FDE 工作包。",
    caioDetailLabel: "查看 CAIO Office 完整方案",
    caioDetailUrl: "/ai/zh-hk/caio/",
    caioCycleLabel: "共同工作節奏",
    caioSteps: [
      ["01", "每週問診", "和管理層與業務負責人檢查目標、進展、卡點和新的 AI 機會。"],
      ["02", "確定實戰", "選定本週最高優先級任務，明確結果、負責人、截止時間與驗收標準。"],
      ["03", "帶隊執行", "調動團隊與 AI Agents，推進原型、工作流程、內容、數據或系統成果。"],
      ["04", "驗收複盤", "檢查真實業務結果，沉澱方法與資產，並排定下一週行動。"]
    ],
    caioOutputLabel: "每週看得見的交付",
    caioOutputs: ["一份有負責人和期限的任務清單", "一個持續推進的真實業務成果", "一次驗收複盤與下一週安排"],
    caioMeta: "嵌入式持續合作｜每週 1 次工作會 + 持續推進｜建議 3 個月起｜按月定制報價",
    vibeLabel: "Vibe Coding 服務",
    vibeTitle: "不只把原型做出來，更把軟件做成能交付的產品",
    vibeIntro: "Vibe Coding 降低了寫代碼的門檻，但需求邊界、系統架構、測試、安全和上線質量仍需要工程判斷。Kelly 將 AI 編程方法與大型軟件經驗結合，幫助個人和團隊把想法推進到真實可用。",
    vibeFitYesLabel: "適合",
    vibeFitYesText: "已經有明確的產品方向、原型或在建項目，需要把它做成能真正上線、能維護的軟件；願意讓團隊參與開發，而不是把代碼全部外判出去。",
    vibeFitNoLabel: "不適合",
    vibeFitNoText: "還沒想清楚要做的產品和商業模式——建議先做商業規劃與方案諮詢；需要的是完全代工交付、團隊不參與開發——這類需求需要單獨溝通範圍和報價。",
    vibeProof: [
      ["百萬行級", "企業軟件研發與交付經驗"],
      ["多種產品形態", "遊戲、App、小程式、大型網遊與大型企業軟件"],
      ["完整交付鏈路", "需求、架構、開發、測試、部署與迭代"]
    ],
    vibeOffers: [
      ["01", "Vibe Coding 軟件開發實戰工作坊", "適合需要統一方法的產品、技術與業務團隊", "用一個真實業務題完成從需求描述、Agent 協作到可運行產品的全過程。", ["團隊共用的 Vibe Coding 工作流程", "一個現場完成的可運行成果", "代碼質量、安全與上線檢查清單"], "1 天｜人民幣 30,000 元 / 場"],
      ["02", "Vibe Coding 軟件項目陪跑（4 週）", "適合已有想法、原型或在建項目的團隊", "團隊主導開發，Kelly 在關鍵節點拆需求、定架構、審代碼、處理難題並帶領上線。", ["每週項目推進與技術評審", "架構、測試、部署與文檔指導", "代碼和項目成果由客戶完整保有"], "4 週起｜按月定制報價"],
      ["03", "Vibe Coding 複雜項目工程顧問", "適合遺留系統、關鍵整合或高風險上線", "在 AI 生成代碼之外補足資深工程判斷，識別系統邊界、技術債與交付風險。", ["技術方案與架構評審", "關鍵代碼、效能與安全審查", "疑難問題與工程決策支援"], "按月定制報價"]
    ],
    vibeTrust: "Kelly 有百萬行級企業軟件研發與交付經驗，做過遊戲、App、小程式、大型網遊與大型企業軟件，同時深度使用 AI 編程工具——知道哪些是 AI 能自己搞定的，哪些必須靠工程判斷。",
    deployLabel: "AI 數碼員工",
    deployTitle: "把 Agent 真正放進一個業務流程裡，不是擺在那裡演示",
    deployIntro: "很多企業買了 AI 工具，卻沒有變成看得見的業務結果。AI 數碼員工搭建按具體業務場景組合 Codex、OpenClaw、Buda AI 等工具和平台，交付一個真正在工作流程裡運轉的數碼員工，而不是一個演示 Demo。",
    deployFitYesLabel: "適合",
    deployFitYesText: "已經確定了一個具體的業務場景（客服、內容、數據處理、銷售支援等），需要把它變成一個穩定運行的數碼員工；團隊願意配合梳理現有流程和數據。",
    deployFitNoLabel: "不適合",
    deployFitNoText: "還沒有確定具體場景，只是想「上一個 AI」——建議先做商業規劃與方案諮詢或培訓，理清楚從哪個場景切入。",
    deploySteps: [
      ["01", "場景確認", "明確要交付的數碼員工負責哪個具體任務、接入哪些數據和系統。"],
      ["02", "搭建接入", "組合 Agent 工具與平台，把數碼員工接入真實工作流程。"],
      ["03", "培訓驗收", "用真實業務場景驗證效果，交付團隊培訓與上線營運手冊。"]
    ],
    deployOutputLabel: "交付內容",
    deployOutputs: ["1 個可運行的數碼員工", "1 條接入業務的核心工作流程", "團隊培訓與 1 個月營運維護"],
    deployMeta: "定制交付｜國內人民幣 12,000 元起，海外 US$2,000 起｜按業務場景與系統連接複雜度報價",
    deployTrust: "Kelly 是 Buda AI 的創辦人，Buda 本身就是用來搭建和運行 AI 數碼員工與 Agents 公司的平台——這不是紙面上的方案，是 Kelly 自己每天在用、也在賣的系統。",
    assetsLabel: "AI 資產中樞",
    assetsTitle: "讓企業的數據、知識和 Agent 產出真正沉澱下來",
    assetsIntro: "很多企業用了不少 AI，但知識、Prompt、Agent Skills 和產出全部散落在個人電腦和聊天記錄裡，換個人就要重新摸索。AI 資產中樞把這些沉澱成企業統一的資產庫，通過 Agent 提交、人工審核、權限、版本和審計，讓每一份產出可信、可追溯、可重用。",
    assetsFitYesLabel: "適合",
    assetsFitYesText: "團隊已經在用多個 Agent 和 AI 工具，但產出沒有統一沉澱，換人就要重新摸索；希望企業的數據、知識和 Skills 變成可以重用的資產，而不是散落在個人聊天記錄裡。",
    assetsFitNoLabel: "不適合",
    assetsFitNoText: "還沒有穩定運行的 Agent 或工作流程可供沉澱——建議先從 AI 數碼員工搭建或 Vibe Coding 陪跑開始，累積產出之後再做資產中樞。",
    assetsSteps: [
      ["01", "現狀梳理", "盤點現有數據、知識庫、Agent 產出與權限現狀。"],
      ["02", "中樞搭建", "基於 Busabase + Vika 搭建統一的資產庫與提交、審核、版本流程。"],
      ["03", "治理落地", "明確權限、審計與重用機制，交付團隊使用培訓。"]
    ],
    assetsOutputLabel: "交付內容",
    assetsOutputs: ["1 個統一的企業 AI 資產庫", "Agent 提交 + 人工審核的治理流程", "權限、版本與審計機制"],
    assetsMeta: "項目制｜人民幣 12,000 元起，按項目規模報價｜適合已有一定 Agent 使用基礎的團隊",
    assetsTrust: "Kelly 是 Vika 與 AITable 的創辦人，長期在做的就是讓數據和知識變成可信、可重用的資產——資產中樞背後是同一套判斷，只是把它用在了企業自己的 AI 產出上。",
    productsLabel: "更多能力",
    productsTitle: "落地過程裡會用到的兩個基礎工具",
    productsIntro: "這兩項不是諮詢式服務，而是支撐落地的產品能力，可以單獨購買，也可以作為其他服務的一部分。",
    productsItems: [
      ["國際大模型中轉服務（MoonRouter）", "統一使用 GPT、Claude、Gemini，毋須自行處理海外帳戶與付款採購。", "網上充值，按量使用｜官方 API 價格 5 折"],
      ["企業品牌專屬 Agent 小程式", "企業品牌微信 Agent 小程式，用於培訓、內部服務或會員式對外服務。", "品牌定制｜人民幣 99,999 元起"]
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
    contactText: "告訴 Kelly 你的業務目標、團隊情況，以及已有想法、原型或代碼現狀，我們會先判斷適合培訓、CAIO Office、Vibe Coding 陪跑還是直接落地。",
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

// One entry per row in `services`, in the same order, pointing at the detail
// section a customer should land on when they click the service name — or
// null if that row has no dedicated section (rare; keep it that way).
const serviceDetailTargets = [
  ["consult"],
  ["training", "training-4"], ["training", "training-1"], ["training", "training-2"], ["training", "training-3"],
  ["caio"],
  ["vibe-coding", "vibe-1"], ["vibe-coding", "vibe-2"], ["vibe-coding", "vibe-3"],
  ["ai-employees"],
  ["ai-assets"],
  ["products", "product-1"], ["products", "product-2"]
];

function detailUrl(lang, slug, hash = "") {
  const prefix = lang === "zh-CN" ? "/ai/" : lang === "en" ? "/ai/en/" : "/ai/zh-hk/";
  return `${prefix}${slug}/${hash ? `#${hash}` : ""}`;
}

function renderLanguageSwitcher(current) {
  return languageLinks.map(([label, href, lang]) => {
    const currentAttr = lang === current ? ' aria-current="page"' : "";
    return `<a href="${href}" lang="${lang}"${currentAttr}>${label}</a>`;
  }).join("");
}

function renderPage(lang, page) {
  const serviceRows = page.services.map(([type, category, name, delivery, format, price], index) => {
    const [slug, hash] = serviceDetailTargets[index];
    const nameCell = `<a href="${detailUrl(lang, slug, hash)}">${name}</a>`;
    return `
          <tr>
            <td class="service-category" data-label="${page.mobileLabels[0]}"><span class="tag tag-${type}">${category}</span></td>
            <td class="service-name" data-label="${page.mobileLabels[1]}">${nameCell}</td>
            <td class="service-delivery" data-label="${page.mobileLabels[2]}">${delivery}</td>
            <td class="service-format" data-label="${page.mobileLabels[3]}">${format}</td>
            <td class="service-price" data-label="${page.mobileLabels[4]}">${price}</td>
          </tr>`;
  }).join("");

  const heroStages = page.stages.map(([title, text]) => `
        <div class="hero-stage"><strong>${title}</strong><span>${text}</span></div>`).join("");
  const insightCards = page.insightsItems.map(([title, text, meta, href]) => `
          <a class="insight-card" href="${href}">
            <span class="insight-meta">${meta}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <strong>${page.insightsCta}</strong>
          </a>`).join("");

  const consultSteps = page.consultSteps.map(([number, title, text]) => `
          <article class="consult-step">
            <span class="consult-number">${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>`).join("");
  const consultOutputs = page.consultOutputs.map((item) => `<li>${item}</li>`).join("");
  const consultScenarios = page.consultScenarios.map(([title, text]) => `
            <article class="scenario-card">
              <h3>${title}</h3>
              <p>${text}</p>
            </article>`).join("");

  const caioSteps = page.caioSteps.map(([number, title, text]) => `
          <article class="caio-step">
            <span class="caio-number">${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>`).join("");
  const caioOutputs = page.caioOutputs.map((item) => `<li>${item}</li>`).join("");
  const caioPaths = page.caioPaths.map(([number, title, audience, text, outcomes]) => `
          <article class="caio-path">
            <span class="caio-path-number">${number}</span>
            <h3>${title}</h3>
            <p class="caio-path-audience">${audience}</p>
            <p>${text}</p>
            <ul>${outcomes.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>`).join("");

  const renderCycleSteps = (steps, prefix) => steps.map(([number, title, text]) => `
          <article class="${prefix}-step">
            <span class="${prefix}-number">${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>`).join("");
  const renderOutputItems = (items) => items.map((item) => `<li>${item}</li>`).join("");
  const renderOffers = (offers) => offers.map(([number, title, audience, text, points, meta]) => `
          <article class="vibe-offer">
            <span class="vibe-offer-number">${number}</span>
            <h3>${title}</h3>
            <p class="vibe-audience">${audience}</p>
            <p>${text}</p>
            <ul>${points.map((point) => `<li>${point}</li>`).join("")}</ul>
            <p class="vibe-meta">${meta}</p>
          </article>`).join("");

  const trainingOffers = renderOffers(page.trainingOffers);
  const deploySteps = renderCycleSteps(page.deploySteps, "caio");
  const deployOutputs = renderOutputItems(page.deployOutputs);
  const assetsSteps = renderCycleSteps(page.assetsSteps, "consult");
  const assetsOutputs = renderOutputItems(page.assetsOutputs);
  const productCards = page.productsItems.map(([title, text, meta]) => `
          <article class="product-card">
            <h3>${title}</h3>
            <p>${text}</p>
            <p class="product-meta">${meta}</p>
          </article>`).join("");

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
  const vibeOffers = renderOffers(page.vibeOffers);
  const navHrefs = ["#services", detailUrl(lang, "consult"), detailUrl(lang, "caio"), detailUrl(lang, "vibe-coding"), "#delivery", "#foundation", "#contact"];
  const nav = page.nav.map((label, index) => `<a href="${navHrefs[index]}">${label}</a>`).join("");
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
      "Business Planning and Solution Consulting",
      "Enterprise AI Training",
      "AI Agent Workshop",
      "CAIO Office",
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

    <section class="section section-insights" id="insights">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.insightsLabel}</p>
            <h2>${page.insightsTitle}</h2>
          </div>
          <p class="section-intro">${page.insightsIntro}</p>
        </div>
        <div class="insights-grid">${insightCards}
        </div>
      </div>
    </section>

    <section class="section section-dark section-consult" id="consult" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.consultLabel}</p>
            <h2>${page.consultTitle}</h2>
          </div>
          <p class="section-intro">${page.consultIntro}</p>
        </div>
        <div class="scenarios">
          <p class="scenarios-label">${page.consultScenariosLabel}</p>
          <div class="scenario-list">${consultScenarios}
          </div>
        </div>
        <div class="fit-check">
          <div class="fit-yes">
            <p class="fit-label">${page.consultFitYesLabel}</p>
            <p>${page.consultFitYesText}</p>
          </div>
          <div class="fit-no">
            <p class="fit-label">${page.consultFitNoLabel}</p>
            <p>${page.consultFitNoText}</p>
          </div>
        </div>
        <div class="consult-cycle">${consultSteps}
        </div>
        <div class="consult-output">
          <p class="consult-output-label">${page.consultOutputLabel}</p>
          <ul>${consultOutputs}</ul>
          <p class="consult-meta">${page.consultMeta}</p>
        </div>
        <div class="trust-strip"><p>${page.consultTrust}</p></div>
      </div>
    </section>

    <section class="section section-white" id="training" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.trainingLabel}</p>
            <h2>${page.trainingTitle}</h2>
          </div>
          <p class="section-intro">${page.trainingIntro}</p>
        </div>
        <div class="fit-check fit-check-light">
          <div class="fit-yes">
            <p class="fit-label">${page.trainingFitYesLabel}</p>
            <p>${page.trainingFitYesText}</p>
          </div>
          <div class="fit-no">
            <p class="fit-label">${page.trainingFitNoLabel}</p>
            <p>${page.trainingFitNoText}</p>
          </div>
        </div>
        <div class="vibe-offers training-offers">${trainingOffers}
        </div>
        <div class="trust-strip trust-strip-light"><p>${page.trainingTrust}</p></div>
      </div>
    </section>

    <section class="section section-dark section-caio" id="caio" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.caioLabel}</p>
            <h2>${page.caioTitle}</h2>
          </div>
          <p class="section-intro">${page.caioIntro}</p>
        </div>
        <div class="fit-check">
          <div class="fit-yes">
            <p class="fit-label">${page.caioFitYesLabel}</p>
            <p>${page.caioFitYesText}</p>
          </div>
          <div class="fit-no">
            <p class="fit-label">${page.caioFitNoLabel}</p>
            <p>${page.caioFitNoText}</p>
          </div>
        </div>
        <p class="caio-block-label">${page.caioPathLabel}</p>
        <div class="caio-paths">${caioPaths}
        </div>
        <p class="caio-path-meta">${page.caioPathMeta}</p>
        <a class="button button-secondary caio-detail-link" href="${page.caioDetailUrl}">${page.caioDetailLabel}</a>
        <p class="caio-block-label caio-cycle-label">${page.caioCycleLabel}</p>
        <div class="caio-cycle">${caioSteps}
        </div>
        <div class="caio-output">
          <p class="caio-output-label">${page.caioOutputLabel}</p>
          <ul>${caioOutputs}</ul>
          <p class="caio-meta">${page.caioMeta}</p>
        </div>
        <div class="trust-strip"><p>${page.caioTrust}</p></div>
      </div>
    </section>

    <section class="section section-vibe" id="vibe-coding" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.vibeLabel}</p>
            <h2>${page.vibeTitle}</h2>
          </div>
          <p class="section-intro">${page.vibeIntro}</p>
        </div>
        <div class="fit-check fit-check-light">
          <div class="fit-yes">
            <p class="fit-label">${page.vibeFitYesLabel}</p>
            <p>${page.vibeFitYesText}</p>
          </div>
          <div class="fit-no">
            <p class="fit-label">${page.vibeFitNoLabel}</p>
            <p>${page.vibeFitNoText}</p>
          </div>
        </div>
        <div class="vibe-proof">${vibeProof}
        </div>
        <div class="vibe-offers">${vibeOffers}
        </div>
        <div class="trust-strip trust-strip-light"><p>${page.vibeTrust}</p></div>
      </div>
    </section>

    <section class="section section-dark" id="deploy" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.deployLabel}</p>
            <h2>${page.deployTitle}</h2>
          </div>
          <p class="section-intro">${page.deployIntro}</p>
        </div>
        <div class="fit-check">
          <div class="fit-yes">
            <p class="fit-label">${page.deployFitYesLabel}</p>
            <p>${page.deployFitYesText}</p>
          </div>
          <div class="fit-no">
            <p class="fit-label">${page.deployFitNoLabel}</p>
            <p>${page.deployFitNoText}</p>
          </div>
        </div>
        <div class="caio-cycle">${deploySteps}
        </div>
        <div class="caio-output">
          <p class="caio-output-label">${page.deployOutputLabel}</p>
          <ul>${deployOutputs}</ul>
          <p class="caio-meta">${page.deployMeta}</p>
        </div>
        <div class="trust-strip"><p>${page.deployTrust}</p></div>
      </div>
    </section>

    <section class="section section-dark" id="assets" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.assetsLabel}</p>
            <h2>${page.assetsTitle}</h2>
          </div>
          <p class="section-intro">${page.assetsIntro}</p>
        </div>
        <div class="fit-check">
          <div class="fit-yes">
            <p class="fit-label">${page.assetsFitYesLabel}</p>
            <p>${page.assetsFitYesText}</p>
          </div>
          <div class="fit-no">
            <p class="fit-label">${page.assetsFitNoLabel}</p>
            <p>${page.assetsFitNoText}</p>
          </div>
        </div>
        <div class="consult-cycle">${assetsSteps}
        </div>
        <div class="consult-output">
          <p class="consult-output-label">${page.assetsOutputLabel}</p>
          <ul>${assetsOutputs}</ul>
          <p class="consult-meta">${page.assetsMeta}</p>
        </div>
        <div class="trust-strip"><p>${page.assetsTrust}</p></div>
      </div>
    </section>

    <section class="section section-white" id="products" hidden>
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-label">${page.productsLabel}</p>
            <h2>${page.productsTitle}</h2>
          </div>
          <p class="section-intro">${page.productsIntro}</p>
        </div>
        <div class="product-cards">${productCards}
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
  <script src="/ai/site.js?v=20260903"></script>
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

const { generateServicePages } = await import("./generate-service-pages.mjs");
await generateServicePages(pages);
await import("./generate-caio.mjs");
