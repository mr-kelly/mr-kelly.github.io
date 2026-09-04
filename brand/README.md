# Kelly Brand Guidelines

Version 1.0 | 2026-09-05

`kellychan.im` 的母品牌视觉与表达规范。内部视觉代号为 **枯墨侘寂 Wabi Ink**。

> “侘寂”只用于内部设计沟通，不作为对外营销概念。客户看到的应该是安静、可信、有判断力的 Kelly，而不是一个日式风格标签。

## 1. Brand Core

### 品牌主体

- 主品牌：**Kelly Peilin Chan**
- 中文署名：**Kelly 陈霈霖**
- 服务品牌：**Kelly AI Deployment Service**
- 核心服务：**CAIO Office**

Kelly 是母品牌。Kelly AI 和 CAIO Office 使用母品牌的字体、颜色、版式和表达方式。Buda、Vika、AITable、MoonRouter 等产品保留各自独立品牌，不直接换成 Kelly 的品牌色。

### 品牌定位

Kelly 把复杂的 AI、产品和研发问题，转化为管理层可以理解、团队可以执行、结果可以验收的工作系统。

### 核心承诺

**让 AI 从认知进入业务，从工具成为可执行的组织能力。**

### 品牌性格

| 关键词 | 含义 | 不等于 |
| --- | --- | --- |
| 克制 | 只说有证据和有用的内容 | 冷淡、没有观点 |
| 清晰 | 把复杂事情解释到可以行动 | 过度简化 |
| 有判断 | 明确优先级、边界和取舍 | 强势命令 |
| 有人味 | 保留真实经历、现场和不完美 | 随意、不专业 |
| 能落地 | 每个观点最终落到任务与验收 | 堆功能和工具名 |

## 2. Verbal Identity

### 写作顺序

1. 客户正在经历什么；
2. 真正的问题在哪里；
3. 建议先做什么；
4. 会得到什么结果；
5. 如何验证；
6. 下一步是什么。

### 语言风格

- 使用短句、具体名词和真实动作；
- 先说业务语言，需要时再补技术名称；
- 明确区分事实、判断、建议和待验证事项；
- 用“可见、可验、可接管”等结果词，少用“赋能、颠覆、引领”等空泛词；
- 不承诺未经测量的效率倍数、人员缩减或固定周期；
- 中文、English、繁體中文保持同一语气，不逐字硬译。

### 常用表达

- 先让过程变得可见，再让结果变得可验。
- 从一个真实场景开始，用数据决定下一步。
- AI 负责执行，人负责判断、验收和授权。
- 把个人方法沉淀成组织可以复用的能力。

## 3. Visual Direction

### 内部名称

**枯墨侘寂 Wabi Ink**

### 视觉原则

- 纸张感来自留白、颜色和排版，不依赖仿旧滤镜；
- 墨色承担正文与结构，苔绿承担主品牌识别；
- 锈红只用于关键行动和少量强调；
- 灰蓝只用于系统、数据、研究和技术内容；
- 允许轻微不对称，但信息层级必须严格；
- 使用真实照片、真实界面和真实工作痕迹；
- 不使用渐变、光球、玻璃拟态、霓虹和大面积装饰纹理。

## 4. Color System

颜色事实源为 [`tokens.css`](./tokens.css)。

### Core Palette

| Token | Hex | 用途 |
| --- | --- | --- |
| Paper | `#F1F0EA` | 页面主背景 |
| Surface | `#FAFAF6` | 内容面、表格、浮层 |
| Ink | `#252823` | 主文字、深色背景 |
| Muted | `#687069` | 大字号辅助文字、图注 |
| Line | `#CBCBC2` | 分隔线、表格线、输入边界 |
| Moss | `#65745E` | 主品牌展示色、区块标记 |
| Rust | `#B55F4F` | 主要行动、关键提醒 |
| Slate Blue | `#607889` | 数据、研究、技术信息 |

### Accessible Text Variants

展示色不一定适合小号文字。正文和按钮文字必须使用深色变体：

| Token | Hex | Paper 对比度 | Surface 对比度 |
| --- | --- | ---: | ---: |
| Moss Text | `#4F6149` | 5.86:1 | 6.39:1 |
| Rust Text | `#98473D` | 5.57:1 | 6.07:1 |
| Blue Text | `#4C6372` | 5.51:1 | 6.02:1 |
| Muted Text | `#5F665F` | 5.18:1 | 5.65:1 |

### Recommended Distribution

- 65% Paper / Surface；
- 25% Ink / Line；
- 10% Moss / Rust / Slate Blue 强调色。

同一屏幕最多使用两个强调色。不要把所有卡片、标题或按钮分别染成不同颜色。

## 5. Typography

### Font Stack

| 层级 | 首选 | 回退 |
| --- | --- | --- |
| 中文标题 | Noto Serif SC | Songti SC, STSong, serif |
| 英文标题 | Noto Serif SC / Georgia | Georgia, serif |
| 中文正文 | PingFang SC | Microsoft YaHei, sans-serif |
| 英文正文 | Inter | system-ui, sans-serif |
| 代码与数据 | SFMono-Regular | Menlo, Consolas, monospace |

### Rules

- 标题使用 400 或 500；正文使用 400；不使用 800/900；
- 字距统一为 `0`；
- 正文行高 1.65–1.8，标题行高 1.15–1.3；
- 网页正文默认 16–18px；客户 Proposal 正文不小于 9.5pt；
- 不用视口宽度缩放字号；通过固定断点调整；
- 中文标题不全部加粗，依靠字号、留白和位置建立层级。

## 6. Layout

### Grid

- 官网内容宽度：最大 1180px；
- 文章正文：680–760px；
- 桌面 12 栏，移动端 4 栏；
- 页面边距：桌面 40px，移动端 20px；
- 组件圆角：0–6px；大型容器默认不使用悬浮卡片。

### Rhythm

- 大段内容用分隔线和留白分组；
- 一个区块只回答一个问题；
- 首屏必须出现 Kelly、服务或文章主题，不能只剩抽象氛围图；
- 首页首屏应露出下一段内容，避免占满整个视口；
- 表格、看板和工具界面保持紧凑、可扫描。

## 7. Wordmark And Naming

当前不创建抽象图形 Logo。使用文字署名作为主识别：

- Primary：`Kelly Peilin Chan`
- Chinese：`Kelly 陈霈霖`
- Service：`Kelly AI`
- Program：`CAIO Office`

规则：

- 官网导航优先使用 `Kelly Peilin Chan`；
- Proposal 和报价使用 `Kelly AI Deployment Service`；
- CAIO Office 作为服务项目名，不替代主品牌；
- 不使用单独字母 K 作为客户可见主 Logo；
- 不对产品 Logo 统一换色或加 Kelly 字样。

## 8. Photography

### Use

- Kelly 本人真实演讲、工作、访谈和团队现场；
- 产品真实界面、代码、流程图和交付证据；
- 自然光、真实环境、可辨认主体；
- 允许适度颗粒和不完全居中构图，但主体必须清楚。

### Avoid

- 模糊、暗到无法识别主体的照片；
- 握手、会议室、机器人等通用库存图；
- 纯氛围图片代替真实产品或人物；
- 大面积暖棕滤镜、纸张纹理和伪古董效果；
- AI 生成的人物照片冒充真实 Kelly 或客户现场。

## 9. Components

### Buttons

- Primary：Rust 背景 + 白字，仅用于当前页面最重要的行动；
- Secondary：透明背景 + Ink 边界；
- 圆角 3–4px；
- 按钮文字使用清晰命令，如“查看合作方式”“阅读文章”“联系 Kelly”。

### Cards

- 只用于单个重复项目、工具或文章；
- 不把完整页面区块都做成浮动卡片；
- 卡片内部不再嵌套卡片；
- 边界以 1px Line 或 3px 品牌色顶线表达，不使用重阴影。

### Data And Diagrams

- Moss：主流程和通过状态；
- Rust：行动、阻断和人工决策；
- Slate Blue：数据、系统和技术层；
- Gold 仅在 Proposal 或演讲中作为少量阶段编号，不进入官网主按钮。

## 10. Applications

### Homepage

- 主信号是 Kelly 本人和当前工作，不是项目卡片墙；
- 使用真实人物或工作照片；
- 首页同时服务个人身份、观点、服务与项目，但每个区块职责清晰；
- CTA 保持一个主行动和一个次行动。

### Articles

- 文章页以标题、摘要、作者和阅读体验为核心；
- 正文宽度 680–760px；
- 公式、判断和关键问题可使用 Moss 左线或浅色背景；
- 不把正文拆成大量卡片。

### Kelly AI / CAIO Office

- 先讲客户问题、结果和交付，再出现技术底座；
- Rust 用于联系与报价行动；Moss 用于方法与流程；Slate Blue 用于技术与数据；
- 客户版不得出现伙伴所得、内部成本和未确认主张。

### Proposal And PDF

- 1–2 页 Proposal：先给结论，再给工作与交付，最后给决策事项；
- A4 边距不小于 14mm；正文不小于 9.5pt；
- 页眉或页脚使用母品牌署名，不使用内部客户代号；
- 保留可搜索文字和嵌入字体；
- SOW、报价和 Proposal 分开维护。

## 11. Accessibility

- 普通正文和小号文字对比度至少 4.5:1；
- 大字号文字至少 3:1；
- 颜色不作为唯一状态信号；
- 键盘焦点清晰可见；
- 触控目标约 44px；
- 图片提供准确替代文字；装饰图使用空 `alt`；
- 中文、英文和繁体页面均检查最长词与换行。

## 12. Governance

### Source Of Truth

- 规范：`brand/README.md`
- Design Tokens：`brand/tokens.css`
- 可视页面：`brand/index.html`

### Change Process

1. 先在 Brand Guideline 更新 Token 或规则；
2. 验证文字对比度和桌面／移动端；
3. 再迁移首页、文章、服务页、简历与 Proposal；
4. 记录版本和迁移范围；
5. 不在单个页面私自新增“差不多”的颜色。

### Current State

Version 1.0 已选择视觉方向并建立规范。现有 `kellychan.im` 页面尚未迁移到本系统；在完成页面级视觉检查前，不声称官网已经采用新主题。
