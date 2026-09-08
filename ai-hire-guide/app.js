/* AI Hiring Toolkit — /ai-hire-guide/
   Vanilla JS, no build step. All copy is bilingual: every string is {zh, en}. */

(function () {
  'use strict';

  var STORE = 'kelly-ai-hire-guide-v1';

  /* Session-level settings live on S; everything observed about a person
     lives on that person's record in S.candidates. */
  var S = {
    lang: 'zh',
    role: 'general',
    level: 'L2',
    quiz: {},
    candidates: [],
    active: null
  };

  function t(pair) { return (pair && pair[S.lang]) || (pair && pair.zh) || ''; }

  /* ------------------------------------------------------------------ *
   * Knobs
   * ------------------------------------------------------------------ */

  var ROLES = [
    { key: 'general', name: { zh: '通用', en: 'General' } },
    { key: 'eng', name: { zh: '工程 / 研发', en: 'Engineering' } },
    { key: 'pm', name: { zh: '产品 / 运营', en: 'Product / Growth' } }
  ];

  var LEVELS = [
    {
      key: 'L1',
      name: { zh: '执行者', en: 'Executor' },
      desc: {
        zh: '能分辨对错。给他明确的任务，他能做完并且做对。',
        en: 'Can tell right from wrong. Give them a defined task and it comes back correct.'
      },
      ai: {
        zh: '⚠️ 这一层 AI 现在做得比大多数候选人好。如果你在招 L1，先问自己：这个岗位还需要人吗？',
        en: '⚠️ AI already does this better than most candidates. If you are hiring L1, ask first whether this role still needs a human.'
      }
    },
    {
      key: 'L2',
      name: { zh: '判断者', en: 'Judge' },
      desc: {
        zh: '能分辨好坏。几个方案都对的时候，他能挑出更好的那个，并说清代价。',
        en: 'Can tell good from adequate. When several options are all correct, they pick the better one and can name the trade-off.'
      },
      ai: {
        zh: '这是目前多数岗位真正需要的层级。AI 负责生成，他负责选择。',
        en: 'This is what most roles actually need today. AI generates; this person chooses.'
      }
    },
    {
      key: 'L3',
      name: { zh: '定义者', en: 'Definer' },
      desc: {
        zh: '能分辨该不该做。敢说"这件事根本不该做"，而且是对的。',
        en: 'Can tell what should not be done at all — and is right about it.'
      },
      ai: {
        zh: 'AI 目前给不了这一层。这是"品味"真正的所指，也是唯一值得付溢价的东西。',
        en: 'AI cannot supply this. It is what "taste" actually means, and the only thing worth a premium.'
      }
    }
  ];

  var LEVEL_QUIZ = [
    {
      id: 'q1',
      q: {
        zh: '这个岗位的产出如果做错了，多久会被发现？',
        en: 'If this role produces something wrong, how long before anyone notices?'
      },
      opts: [
        { v: 1, t: { zh: '当天就知道，有明确的对错', en: 'Same day — right and wrong are obvious' } },
        { v: 2, t: { zh: '一两周后，靠别人 review 才发现', en: 'A week or two, and only if someone reviews it' } },
        { v: 3, t: { zh: '几个月后才知道，甚至永远不知道', en: 'Months later — or never' } }
      ]
    },
    {
      id: 'q2',
      q: {
        zh: '这个岗位主要是把已经定义好的事做完，还是要决定"做什么"？',
        en: 'Does this role mostly finish defined work, or decide what the work should be?'
      },
      opts: [
        { v: 1, t: { zh: '有人给他定义清楚，他执行', en: 'Someone defines it; they execute' } },
        { v: 2, t: { zh: '大方向给定，细节由他判断', en: 'Direction is given; they judge the details' } },
        { v: 3, t: { zh: '他要自己决定做什么、不做什么', en: 'They decide what to do and what to kill' } }
      ]
    },
    {
      id: 'q3',
      q: {
        zh: '如果他的产出大部分是 AI 生成的，谁来判断好坏？',
        en: 'If most of their output is AI-generated, who judges whether it is any good?'
      },
      opts: [
        { v: 1, t: { zh: '我或者团队里有人会逐份检查', en: 'I or someone on the team checks every piece' } },
        { v: 2, t: { zh: '抽查，主要靠他自己把关', en: 'Spot checks — mostly they gate it themselves' } },
        { v: 3, t: { zh: '没人能替他判断，他就是最后一道关', en: 'Nobody can judge it for them; they are the last gate' } }
      ]
    },
    {
      id: 'q4',
      q: {
        zh: '这个岗位一年后，你希望他能对你说什么？',
        en: 'A year in, what do you want this person to be able to say to you?'
      },
      opts: [
        { v: 1, t: { zh: '"你交代的都做完了"', en: '"Everything you assigned is done."' } },
        { v: 2, t: { zh: '"我选了 B 方案，因为 A 的代价是……"', en: '"I picked B, because A costs us…"' } },
        { v: 3, t: { zh: '"这件事我们不该做，理由是……"', en: '"We should not be doing this at all, because…"' } }
      ]
    }
  ];

  /* ------------------------------------------------------------------ *
   * Module 2 — resume signals
   * ------------------------------------------------------------------ */

  var SIGNALS_COMMON = [
    {
      id: 'build',
      pol: '+', w: 3,
      t: { zh: '为自己搭过东西：CLAUDE.md、skill、subagent、MCP、自动化脚本', en: 'Has built their own scaffolding: CLAUDE.md, skills, subagents, MCP servers, automation scripts' },
      hint: { zh: '目前区分度最高的单一信号——说明他把 AI 当系统在搭，而不是当聊天框在用。', en: 'The single highest-signal item today: they treat AI as a system to build, not a chat box to type into.' },
      ask: { zh: '你有没有为自己搭过工具、脚本或者 agent？打开给我看最近的一个，讲讲你为什么要搭它。', en: 'Have you built any tool, script or agent for yourself? Open the most recent one and tell me why you built it.' }
    },
    {
      id: 'evolve',
      pol: '+', w: 3,
      t: { zh: '工具栈有演化史：说得清半年前用什么、现在用什么、为什么换', en: 'Their stack has a history: what they used six months ago, what they use now, and why they switched' },
      hint: { zh: '没换过 = 停滞；换得勤但没产出 = 追新。要的是"换了并且说得出理由"。', en: 'Never switched = stagnant. Switches constantly with nothing shipped = chasing novelty. You want switched-with-a-reason.' },
      ask: { zh: '你半年前的工作流和现在有什么不一样？是什么让你决定换的？', en: 'How is your workflow different from six months ago? What made you switch?' }
    },
    {
      id: 'cut',
      pol: '+', w: 3,
      t: { zh: '有删减的痕迹：写了砍掉过什么、放弃过什么，以及为什么', en: 'Evidence of subtraction: something they cut, killed or walked away from — and why' },
      hint: { zh: 'AI 时代生成是免费的，品味体现在扔掉什么。只有增量的简历几乎没有信息量。', en: 'Generating is free now; taste shows in what gets thrown away. An all-additions resume carries almost no information.' },
      ask: { zh: '过去一年你砍掉过最贵的一个东西是什么？当时已经投入了多少？你怎么判断该停？', en: 'What is the most expensive thing you killed in the past year? How much was already invested? How did you decide to stop?' }
    },
    {
      id: 'constraint',
      pol: '+', w: 2,
      t: { zh: '产出带真实约束：时间、预算、人手、合规、遗留系统', en: 'Output carries real constraints: deadline, budget, headcount, compliance, legacy systems' },
      hint: { zh: '没有约束的成绩不能证明判断力，只能证明运气。', en: 'An achievement with no constraints proves luck, not judgement.' },
      ask: { zh: '这个项目当时最紧的约束是什么？如果多给你两个月，你会做得不一样吗？', en: 'What was the tightest constraint on that project? Would you have done it differently with two more months?' }
    },
    {
      id: 'baseline',
      pol: '+', w: 2,
      t: { zh: '有数字，而且数字有基线对比', en: 'Numbers are present — and they come with a baseline' },
      hint: { zh: '"提效 300%" 没有意义，"从 3 天到 4 小时，因为把 X 自动化了" 才有意义。', en: '"300% more efficient" means nothing. "Three days to four hours, because we automated X" means something.' },
      ask: { zh: '这个数字之前的基线是多少？是怎么测出来的？', en: 'What was the baseline before that number? How was it measured?' }
    },
    {
      id: 'public',
      pol: '+', w: 2,
      t: { zh: '有公开可查的产物：repo、上线的网站、作品、文章', en: 'Something publicly checkable: a repo, a live site, a body of work, writing' },
      hint: { zh: '不用看质量，先看有没有。愿意把东西暴露出来本身就是一种信号。', en: 'Never mind the quality at first — just whether it exists. Willingness to be checked is itself a signal.' },
      ask: { zh: '有没有什么是我现在就能打开看的？', en: 'Is there anything I can open and look at right now?' }
    },
    {
      id: 'listonly',
      pol: '-', w: 3,
      t: { zh: '只有技能 / 工具名列表，没有对应的产出', en: 'A list of skills and tool names with no output attached to any of them' },
      hint: { zh: '工具名是最容易堆的东西。列了十个 AI 工具、一个产物都没有，通常是工具爱好者。', en: 'Tool names are the cheapest thing to accumulate. Ten AI tools listed and nothing shipped usually means a hobbyist.' },
      ask: { zh: '这些工具里，哪一个是你真正每天在用的？用它做完的最近一件事是什么？', en: 'Which of these do you actually use every day? What is the most recent thing you finished with it?' }
    },
    {
      id: 'aivoice',
      pol: '-', w: 3,
      t: { zh: '通篇 AI 味：排比工整、"赋能 / 闭环 / 抓手"、没有一个具体细节', en: 'Written by AI: tidy parallel structure, buzzwords, not one concrete detail' },
      hint: { zh: '不是"用 AI 写简历"有问题，是"用 AI 写完自己没改"有问题——那说明他对好坏没有判断。', en: 'The problem is not using AI to draft it. The problem is shipping the draft unedited — that is a taste failure in plain sight.' },
      ask: { zh: '这份简历你改了几遍？AI 写的哪一段你觉得写得不好，删掉了？', en: 'How many passes did you do on this resume? Which AI-written part did you think was bad and cut?' }
    },
    {
      id: 'allwin',
      pol: '-', w: 2,
      t: { zh: '只增不减：每个项目都成功，没有任何取舍或失败', en: 'Nothing but wins: every project succeeded, no trade-offs, no failures' },
      hint: { zh: '这通常不是能力问题，是他不认为"取舍"值得写——那他大概也不会在工作里做取舍。', en: 'Usually not a competence problem — they just do not think trade-offs are worth mentioning, which means they probably do not make them.' },
      ask: { zh: '有没有哪个项目，回头看你会做完全不同的决定？', en: 'Is there a project where, looking back, you would decide completely differently?' }
    },
    {
      id: 'stale',
      pol: '-', w: 2,
      t: { zh: '工具栈停在一年前，或者只写了"熟练使用 ChatGPT"', en: 'Stack frozen a year ago, or just "proficient with ChatGPT"' },
      hint: { zh: '这个领域一年是很长的时间。停滞不是罪，但你得知道你在招一个需要重新训练的人。', en: 'A year is a long time in this field. Stagnation is not a crime, but know you are hiring someone who needs retraining.' },
      ask: { zh: '最近三个月你试过什么新工具或新做法？有没有留下来的？', en: 'What have you tried in the last three months? Did any of it stick?' }
    },
    {
      id: 'jd',
      pol: '-', w: 2,
      t: { zh: '职责描述基本等于 JD 复述，看不出他本人做了什么', en: 'The job description is just the JD restated — you cannot tell what this person personally did' },
      hint: { zh: '"负责 X 的整体规划"这类句子，删掉之后简历信息量不变。', en: 'Delete a line like "responsible for overall planning of X" and the resume loses no information.' },
      ask: { zh: '这个项目里，具体哪一部分是你亲手做的？哪一部分是别人做的？', en: 'Which part of this did you personally do, and which part did someone else do?' }
    }
  ];

  var SIGNALS_ROLE = {
    general: [],
    eng: [
      {
        id: 'eng_eval',
        pol: '+', w: 3,
        t: { zh: '写过评测 / eval：能证明"AI 产出好不好"是被测量的，不是被感觉的', en: 'Has written evals: proof that "is the AI output good" was measured, not felt' },
        hint: { zh: '在工程岗位，这是品味最硬的证据——他把主观判断变成了可重复的检验。', en: 'For engineers this is the hardest evidence of taste: they turned a subjective judgement into a repeatable test.' },
        ask: { zh: '你怎么知道 agent 改的代码是对的？除了跑测试，还有别的手段吗？', en: 'How do you know code an agent wrote is correct? Anything beyond running the tests?' }
      },
      {
        id: 'eng_ci',
        pol: '+', w: 2,
        t: { zh: '把 agent 接进了工程流程：CI、code review、发布、值班', en: 'Wired agents into the engineering loop: CI, code review, release, on-call' },
        hint: { zh: '从"我用 AI 写代码"到"团队的流水线里有 AI"，是完全不同的两个人。', en: '"I use AI to write code" and "our pipeline has AI in it" are two different people.' },
        ask: { zh: '你们团队的流程里，哪一步是 agent 在跑？出错的时候怎么兜？', en: 'Which step of your team pipeline is run by an agent? What catches it when it fails?' }
      },
      {
        id: 'eng_merge',
        pol: '+', w: 3,
        t: { zh: '主导过一次收敛：把两套做同一件事的实现合成一套，或者把一个长错了的模块拆开', en: 'Led a consolidation: merged two implementations of the same thing into one, or split a module that had grown wrong' },
        hint: { zh: '这是架构品味最硬的证据。新增结构人人会，删掉一层结构需要判断力，还需要承担风险。', en: 'The hardest evidence of architectural taste there is. Anyone can add structure; removing a layer takes judgement and carries risk.' },
        ask: { zh: '你有没有把两套做同一件事的代码合成一套？当时为什么会有两套，合并之后什么变简单了？', en: 'Have you ever merged two implementations of the same thing into one? Why were there two, and what got simpler afterwards?' }
      },
      {
        id: 'eng_buzzword',
        pol: '-', w: 2,
        t: { zh: '架构部分是名词堆砌：微服务、DDD、中台、六边形，没有一个是他做的取舍', en: 'The architecture section is a pile of nouns — microservices, DDD, hexagonal, event-driven — with no trade-off he personally made' },
        hint: { zh: '追问"你们为什么不拆成两个服务"，比追问"你们怎么拆的服务"有用得多。', en: 'Asking "why did you not split that into two services" tells you far more than asking how they split them.' },
        ask: { zh: '这套架构里，有哪一处是你当时反对的？后来证明谁是对的？', en: 'Which part of that architecture did you argue against at the time? Who turned out to be right?' }
      },
      {
        id: 'eng_shallow',
        pol: '-', w: 2,
        t: { zh: '对 AI 的描述停留在"用 Cursor / Copilot 写代码，效率提升"', en: 'AI experience amounts to "I use Cursor/Copilot, it makes me faster"' },
        hint: { zh: '这已经是基线，不是优势。所有人都在这么做。', en: 'That is the baseline now, not an edge. Everyone does this.' },
        ask: { zh: '除了补全和生成，你还让 AI 做过什么工程上的事？', en: 'Beyond completion and generation, what engineering work have you handed to AI?' }
      }
    ],
    pm: [
      {
        id: 'pm_pipeline',
        pol: '+', w: 3,
        t: { zh: '自己搭过 AI 工作流，把一条业务线真的跑通了', en: 'Built an AI workflow themselves and ran a real business line through it' },
        hint: { zh: '不需要会写代码，需要的是"他没等工程排期"。', en: 'They do not need to code. They need to have not waited for an engineering sprint.' },
        ask: { zh: '有没有哪件事你没等工程排期，自己用 AI 先跑通了？', en: 'What did you get working with AI yourself instead of waiting for the eng queue?' }
      },
      {
        id: 'pm_kill',
        pol: '+', w: 3,
        t: { zh: '因为数据 / 用户反馈砍过自己提的需求', en: 'Killed a feature they themselves proposed, because of data or user feedback' },
        hint: { zh: '砍别人的需求容易，砍自己的难。这是产品岗位品味的核心测点。', en: 'Killing someone else’s idea is easy. Killing your own is the real test for this role.' },
        ask: { zh: '你提过的需求里，哪个是你自己后来砍掉的？转折点是什么？', en: 'Which of your own proposals did you later kill? What was the turning point?' }
      },
      {
        id: 'pm_vague',
        pol: '-', w: 3,
        t: { zh: '只有"AI 提效 X%"，说不出方法和口径', en: 'Only "AI improved efficiency by X%" — no method, no definition of the metric' },
        hint: { zh: '这类数字通常是拍的。追问口径，八成会碎。', en: 'These numbers are usually invented. Ask how it was measured and most of them collapse.' },
        ask: { zh: '这个百分比的分子分母分别是什么？谁统计的？', en: 'What exactly is the numerator and denominator there? Who measured it?' }
      }
    ]
  };

  /* Cases are addressed by id in the DOM. Stamped from init(), since the
     CASES literal is defined further down the file. */
  function stampCaseIds() {
    Object.keys(CASES).forEach(function (role) {
      CASES[role].forEach(function (k, i) { k.id = role + '-' + i; });
    });
  }

  function caseById(id) {
    var found = null;
    Object.keys(CASES).forEach(function (role) {
      CASES[role].forEach(function (k) { if (k.id === id) found = k; });
    });
    return found;
  }

  function secNo(n) { return '<span class="secno">3.' + n + '</span>'; }

  function signalsFor(role) {
    return SIGNALS_COMMON.concat(SIGNALS_ROLE[role] || []);
  }


  /* ------------------------------------------------------------------ *
   * Module 3 — taste tests
   * ------------------------------------------------------------------ */

  var TASTE = {
    general: {
      material: {
        zh: '一份给重要客户的方案（或一封关键邮件）的三个版本，都由 AI 生成，你只做少量修改。',
        en: 'Three versions of a proposal for an important client (or one critical email), all AI-generated, lightly edited by you.'
      },
      abc: [
        { key: 'A', name: { zh: '漂亮但过度设计', en: 'Impressive but overbuilt' }, desc: { zh: '结构完整、有框架、有配图、六个章节。但客户其实只关心一件事，而它被埋在第四页。', en: 'Complete structure, a framework, charts, six sections. The client cares about one thing, and it is buried on page four.' } },
        { key: 'B', name: { zh: '朴素、正确、无聊', en: 'Plain, correct, boring' }, desc: { zh: '一页纸，直接回答客户的问题，没有任何多余修饰。看起来"没什么水平"。', en: 'One page, answers the client’s question directly, zero ornament. Looks like it took no effort.' } },
        { key: 'C', name: { zh: '似是而非', en: 'Coherent but false' }, desc: { zh: '逻辑自洽、读起来最顺，但它建立在一个错误前提上（比如假设客户的预算是另一个量级）。', en: 'Internally consistent and the smoothest read — but built on a wrong premise (say, it assumes a budget an order of magnitude off).' } }
      ]
    },
    eng: {
      material: {
        zh: '同一个功能的三份实现（三个 PR / 三段代码），都能跑通、都能过测试。',
        en: 'Three implementations of the same feature (three PRs), all working, all passing tests.'
      },
      abc: [
        { key: 'A', name: { zh: '漂亮但过度设计', en: 'Impressive but overbuilt' }, desc: { zh: '抽象了一层接口、加了插件机制、留了三个扩展点。当前只有一个使用场景。', en: 'An extra interface layer, a plugin mechanism, three extension points. There is exactly one use case today.' } },
        { key: 'B', name: { zh: '朴素、正确、无聊', en: 'Plain, correct, boring' }, desc: { zh: '四十行，没有抽象，函数名很直白，改起来一眼能看懂。', en: 'Forty lines, no abstraction, blunt names, obvious to change later.' } },
        { key: 'C', name: { zh: '似是而非', en: 'Coherent but false' }, desc: { zh: '代码写得很干净、测试也过了，但它解决的是一个稍微不同的问题（边界条件的定义和需求不一致）。', en: 'Clean code, green tests — but it solves a slightly different problem (its boundary condition does not match the requirement).' } }
      ]
    },
    pm: {
      material: {
        zh: '同一个需求的三份 PRD（或同一个落地页的三版文案），都由 AI 生成。',
        en: 'Three PRDs for the same requirement (or three versions of one landing page), all AI-generated.'
      },
      abc: [
        { key: 'A', name: { zh: '漂亮但过度设计', en: 'Impressive but overbuilt' }, desc: { zh: '有用户画像、有竞品矩阵、有分阶段路线图。核心功能的定义反而最含糊。', en: 'Personas, a competitive matrix, a phased roadmap. The core feature definition is the vaguest part.' } },
        { key: 'B', name: { zh: '朴素、正确、无聊', en: 'Plain, correct, boring' }, desc: { zh: '只写了要做什么、不做什么、怎么算成功。三段话。', en: 'What we build, what we do not, how we know it worked. Three paragraphs.' } },
        { key: 'C', name: { zh: '似是而非', en: 'Coherent but false' }, desc: { zh: '论证严密、数据齐全，但引用的用户需求是 AI 编的，或者对标了一个业务模式完全不同的产品。', en: 'Tight argument, full of data — but the user need it cites is fabricated, or it benchmarks a product with a different business model.' } }
      ]
    }
  };

  var TASTE_ANSWER = {
    order: {
      zh: '正确答案：B > A > C。',
      en: 'Correct ranking: B > A > C.'
    },
    read: [
      {
        zh: '**把 B 排第一** —— 有品味。他知道在需求只有一个的时候，多出来的结构全是未来的成本。',
        en: '**Ranks B first** — taste. They know that when there is one use case, every extra structure is future cost.'
      },
      {
        zh: '**把 A 排第一** —— 被复杂度唬住了。这是最常见的情况，也是 AI 时代最危险的一种：AI 生成复杂度的速度远快于人消化它的速度。',
        en: '**Ranks A first** — impressed by complexity. The most common outcome, and the most dangerous one now: AI produces complexity faster than humans can absorb it.'
      },
      {
        zh: '**说不出 C 的前提错在哪** —— 直接淘汰，不管他把 C 排第几。这说明他只会检查"做得好不好"，不会检查"做的是不是这件事"。AI 最擅长生产的就是 C。',
        en: '**Cannot say what premise C gets wrong** — reject, regardless of where they ranked it. They only check whether the work is done well, not whether it is the right work. C is exactly what AI produces best.'
      },
      {
        zh: '**主动问"客户/用户是谁、约束是什么"再排序** —— 加分。他知道离开语境谈好坏是没有意义的。',
        en: '**Asks who the user is and what the constraints are before ranking** — bonus. They know quality is meaningless without context.'
      }
    ],
    howto: {
      zh: '怎么准备材料：拿一个你们真实做过的任务，让 AI 生成三版，你按上面三种"人格"各改十分钟即可。不要自己重写——AI 的原始产出才是真实的考题。',
      en: 'How to prepare: take a task you actually shipped, have AI generate three versions, then spend ten minutes nudging each toward one of the three personas above. Do not rewrite them — the raw AI output is the honest test.'
    }
  };

  var THREE_WHY = {
    intro: {
      zh: '拿他简历上任何一个成果，问"你怎么知道它是好的？"。然后对他的答案，再问一次同样的问题。连问三次。',
      en: 'Take any achievement on their resume and ask: "How do you know it was good?" Then ask the same question about their answer. Three times.'
    },
    good: [
      { zh: '落到**后果**：用户会怎样、三个月后会怎样、谁会因此少做一件事', en: 'Lands on **consequence**: what happens to the user, what happens in three months, whose work disappears' },
      { zh: '落到**参照系**：我见过更好的，长这样', en: 'Lands on a **reference**: I have seen better, and it looks like this' },
      { zh: '落到**能说出口的原则**：而且这个原则他能举出反例', en: 'Lands on a **stated principle** — and they can name a case where it does not apply' }
    ],
    bad: [
      { zh: '落到**感觉**："就是觉得这样比较好"', en: 'Lands on **feel**: "it just seemed better"' },
      { zh: '落到**权威**："业界最佳实践"、"大厂都这么做"', en: 'Lands on **authority**: "industry best practice", "that is how the big companies do it"' },
      { zh: '落到**过程**："我们评审过三轮"——评审过不等于是对的', en: 'Lands on **process**: "we reviewed it three times" — reviewed is not the same as right' }
    ],
    note: {
      zh: '这是整套题里最便宜的一个，三分钟就能问完，但淘汰率最高。注意：不要让他觉得你在质疑他，语气要像在好奇。',
      en: 'The cheapest question here — three minutes — and the highest rejection rate. Keep the tone curious, not adversarial.'
    }
  };

  var CALIBRATION = {
    setup: {
      general: { zh: '拿一份你们团队真实的产物：一个方案、一封对外的邮件、一页落地页。', en: 'Take something your team actually produced: a proposal, an outbound email, a landing page.' },
      eng: { zh: '拿你们代码库里一个真实的 PR，最好是有争议的那种。', en: 'Take a real PR from your codebase — ideally a contentious one.' },
      pm: { zh: '拿一份你们真实的 PRD 或者一次真实的需求评审记录。', en: 'Take a real PRD, or the notes from a real prioritisation meeting.' }
    },
    questions: [
      { zh: '好在哪？', en: 'What is good about it?' },
      { zh: '如果只能砍一样，砍什么？', en: 'If you could cut one thing, what would you cut?' },
      { zh: '如果只能改一处，改哪？', en: 'If you could change one thing, what would you change?' }
    ],
    key: {
      zh: '关键动作：先让你团队里最信任的那个人回答一遍，写下来。面试时对比的不是"对不对"，是**距离**。品味没有绝对标准，招聘要的是"和我们的品味距离多远"。这道题顺带把"他能不能 review 别人"直接测掉了。',
      en: 'The key move: have your most trusted teammate answer first, in writing. In the interview you are not scoring correctness — you are measuring **distance**. Taste has no absolute standard; hiring is about how far theirs is from yours. As a bonus, this test also measures whether they can review other people at all.'
    }
  };

  var L3_EXTRA = {
    title: { zh: 'L3 追加题：该不该做', en: 'L3 add-on: should this exist' },
    body: {
      zh: '给他一个你们**已经立项、正在做**的东西，材料给全（背景、数据、投入）。只问一句："如果这是你的决定，你会继续做吗？"\n\n看三件事：他敢不敢说不做；他说不做的理由是落在后果上还是落在偏好上；如果他说继续做，他能不能说清"什么情况下我会叫停"。\n\n注意：这道题很容易变成表演。真正的信号不是他反对，而是他能给出一个**可证伪的停止条件**。',
      en: 'Hand them something you have already committed to and are actively building. Give them the full picture — context, data, spend. Ask one question: "If this were your call, would you keep going?"\n\nWatch three things: whether they will say no at all; whether their no is grounded in consequences or in preference; and if they say keep going, whether they can state what would make them stop.\n\nCareful — this question invites performance. The real signal is not that they object. It is that they can give you a **falsifiable stopping condition**.'
    }
  };


  /* ------------------------------------------------------------------ *
   * The actual materials — what you hand the candidate, verbatim
   * ------------------------------------------------------------------ */

  var CASES = {
    general: [{
      brief: {
        zh: '客户回信：「方案我们看了，很专业。但你们报价 28 万，我们今年这条线的预算总共就 20 万，超了批不下来。你看怎么办？」\n\n下面是三份回信草稿，都是 AI 写的，你只做了少量修改。',
        en: 'The client writes back: "We read the proposal, it is solid. But you quoted 280k and our budget for this line is 200k for the year — anything above that will not get approved. What can we do?"\n\nBelow are three draft replies, all AI-written, lightly edited by you.'
      },
      say: {
        zh: '你就这么说：「我这里有三份回信草稿，都是同一封客户邮件的回复，三份都发得出去。你花五分钟看完，告诉我你会发哪一份，另外两份你会怎么处理。」',
        en: 'Say it like this: "I have three draft replies to the same client email. All three are sendable. Take five minutes, then tell me which one you would send, and what you would do with the other two."'
      },
      artifacts: [
        {
          key: 'A',
          body: {
            zh: '主题：关于报价的价值说明与投资回报分析\n\n尊敬的王总：\n\n感谢贵方对方案的认可。为便于贵司内部决策，我们准备了完整的价值说明材料：\n\n一、报价构成拆解（详见附件一）\n  1. 实施服务 12 万：3 名顾问 8 周驻场，含流程梳理与\n     上线陪跑\n  2. 平台授权 10 万：三年期，含全部标准功能模块\n  3. 培训与交付 6 万：4 场培训、全套文档与验收支持\n\n二、投资回报测算（详见附件二）\n  按贵司当前人力成本测算，本方案第 14 个月即可收回\n  投资，三年期净收益约 87 万元。\n\n三、同规模客户实施效果（详见附件三）\n\n如需，我方可安排产品与实施负责人当面汇报。\n\n顺颂商祺',
            en: 'Subject: Value breakdown and return-on-investment analysis\n\nDear Mr Wang,\n\nThank you for your positive assessment. To support your internal\ndecision-making, we have prepared a full value breakdown:\n\n1. Price composition (Appendix A)\n   - Implementation, 120k: three consultants on site for eight\n     weeks, including process mapping and go-live support\n   - Platform licence, 100k: three-year term, all standard modules\n   - Training and handover, 60k: four sessions, full documentation\n\n2. Return on investment (Appendix B)\n   Against your current staffing costs, the investment is recovered\n   in month 14, with a three-year net benefit of roughly 870k.\n\n3. Outcomes at comparable clients (Appendix C)\n\nWe would be glad to present this in person.\n\nBest regards'
          }
        },
        {
          key: 'B',
          body: {
            zh: '主题：回复：报价\n\n王总：\n\n20 万能做。\n\n我把第三期的「历史数据迁移」先拿掉，报价 19.8 万，其余\n范围不变。\n\n拿掉之后的影响：2023 年之前的老数据在新系统里查不到，\n需要的时候走人工导出，一次大概半天。明年预算下来随时\n可以补，补的价格是 6 万，不涨价。\n\n如果历史数据今年就必须要，那得砍别的。你告诉我哪块可以\n往后放，我重新排一版给你。\n\nKelly',
            en: 'Subject: Re: quote\n\nMr Wang,\n\n200k works.\n\nI am taking phase three — the historical data migration — out.\nThat brings it to 198k. Everything else stays.\n\nWhat you lose: anything before 2023 will not be queryable in the\nnew system. When you need it, someone exports it by hand, about\nhalf a day each time. We can add it back the moment next year’s\nbudget lands, at 60k, and that price will not move.\n\nIf the historical data has to happen this year, something else has\nto come out. Tell me which part can wait and I will re-cut it.\n\nKelly'
          }
        },
        {
          key: 'C',
          body: {
            zh: '主题：回复：报价 —— 关于价格的一些说明\n\n王总：\n\n非常理解贵方的预算压力。在展开讨论之前，请允许我说明这\n28 万的构成，以及为什么我们认为它是合理的。\n\n我们的报价包含了同行通常不含的实施陪跑与一年期迭代支持。\n市面上 20 万左右的方案，通常在验收后即结束服务，而后续\n运维往往需要额外投入 8–10 万，综合成本反而更高。\n\n此外，本方案采用的架构可支撑贵司未来三年的业务增长，避免\n了两年后推倒重来的隐性成本。\n\n考虑到我们对这次合作的重视，我可以向公司申请 5% 的特别\n折扣，即 26.6 万。这已经是我们能争取到的最好条件。\n\n期待您的回复。',
            en: 'Subject: Re: quote — some context on pricing\n\nMr Wang,\n\nI completely understand the budget pressure. Before we go further,\nlet me explain what the 280k consists of and why we believe it is\nfair.\n\nOur price includes hands-on implementation and a year of iteration\nsupport, which comparable vendors do not include. A 200k proposal\ntypically ends at acceptance, and the operations work afterwards\nusually costs another 80–100k — a higher total in the end.\n\nThe architecture here also supports three years of growth, avoiding\nthe hidden cost of a rebuild two years out.\n\nGiven how much we value this partnership, I can request a special\n5% discount — 266k. That is the best we are able to do.\n\nLooking forward to your reply.'
          }
        }
      ],
      tells: [
        {
          tone: 'tone-bad',
          heard: { zh: '「C 写得最好，有理有据还给了折扣」', en: '"C is the best written — well argued, and it offers a discount."' },
            verdict: {
            zh: '追问一句：「26.6 万，客户批得下来吗？」客户说的是预算上限批不下来，不是嫌贵。C 通篇在回答一个没人问的问题，最后给的价还是超预算。如果他自己发现不了，这是硬伤。',
            en: 'Ask one thing: "Can the client get 266k approved?" They did not say it was expensive — they said anything over 200k will not clear. C answers a question nobody asked and still lands over budget. If he cannot see that himself, that is the whole test.'
          }
        },
        {
          tone: 'tone-warn',
          heard: { zh: '「B 太简单了，显得不专业」', en: '"B is too thin — it looks unprofessional."' },
          verdict: {
            zh: '他把"看起来花了力气"当成了专业。B 是唯一一份真正解决了对方问题的：给了一个能批下来的数字、说清了代价、留了回头路。',
            en: 'He is reading effort as professionalism. B is the only one that solves the client’s actual problem: a number that can be approved, the cost of getting there, and a way back.'
          }
        },
        {
          tone: 'tone-good',
          heard: { zh: '「C 没回答问题——他说的是批不下来，不是贵」', en: '"C does not answer the question — they said it will not get approved, not that it is expensive."' },
          verdict: {
            zh: '就是他了。他读懂了约束的类型，而不是只读懂了情绪。',
            en: 'That is your person. He read the type of constraint, not just the tone.'
          }
        },
        {
          tone: 'tone-good',
          heard: { zh: '主动问：「这 20 万是硬预算，还是能走特批？」', en: 'He asks first: "Is the 200k a hard cap, or is there an exception process?"' },
          verdict: {
            zh: '加分。他知道同一封邮件在两种约束下答案完全不同，所以他先确认约束再动笔。这是 L3 的反应。',
            en: 'Bonus. He knows the same email has two different right answers depending on the constraint, so he checks the constraint before writing. That is an L3 reflex.'
          }
        }
      ]
    }],

    eng: [
      {
        lens: { zh: '架构层 · 只看文件结构', en: 'Architecture — the file tree only' },
        note: {
          zh: '函数级的代码，AI 现在写得比大多数候选人好。AI 写不好的是"这段代码该放在哪"。所以函数级只能筛掉差的，架构级才能选出好的——而架构品味在 files changed 的文件列表里就能看出来，不用读代码。',
          en: 'At the function level AI now writes better code than most candidates. What AI cannot do is decide where code belongs. Function-level review screens out the weak; architecture-level review is what selects the strong — and it is legible from the files-changed list alone, before you read a line.'
        },
        brief: {
          zh: '需求原文：「订单目前只支持全额退款。要支持部分退款：可以退指定金额，可以退多次，累计不能超过订单金额。」\n\n下面是三个 PR 的 files changed。先不看代码，只看文件列表。',
          en: 'The requirement, verbatim: "Orders only support full refunds today. Add partial refunds: refund a specified amount, multiple times, never exceeding the order total."\n\nBelow are the files-changed lists of three PRs. No code — just the file list.'
        },
        say: {
          zh: '你就这么说：「这是同一个需求的三个 PR，我先不给你看代码，只给你看 files changed。你光看这个列表告诉我三件事：你会 approve 哪一个？你会第一个打开哪个文件？你现在最担心什么？」',
          en: 'Say it like this: "Three PRs for the same requirement. I am not showing you the code yet — just the files changed. From that list alone, tell me three things: which one would you approve, which file would you open first, and what worries you right now?"'
        },
        artifacts: [
          {
            key: 'A',
            mono: true,
            name: { zh: '不敢碰旧代码，在旁边新建一层', en: 'Afraid to touch the old code — builds a parallel layer' },
            body: {
              zh: 'src/refund/partial-refund.service.ts        +142\nsrc/refund/partial-refund.controller.ts    + 88\nsrc/refund/partial-refund.types.ts         + 46\nsrc/refund/partial-refund.constants.ts     + 12\nsrc/refund/partial-refund.utils.ts         + 37\nsrc/refund/partial-refund.validator.ts     + 54\nsrc/refund/refund.service.ts               +  3\nsrc/routes/index.ts                        +  2\nmigrations/0042_create_partial_refunds.sql + 14\ntests/partial-refund.spec.ts               +118\n\n10 files changed, 516 insertions(+), 0 deletions(-)',
              en: 'src/refund/partial-refund.service.ts        +142\nsrc/refund/partial-refund.controller.ts    + 88\nsrc/refund/partial-refund.types.ts         + 46\nsrc/refund/partial-refund.constants.ts     + 12\nsrc/refund/partial-refund.utils.ts         + 37\nsrc/refund/partial-refund.validator.ts     + 54\nsrc/refund/refund.service.ts               +  3\nsrc/routes/index.ts                        +  2\nmigrations/0042_create_partial_refunds.sql + 14\ntests/partial-refund.spec.ts               +118\n\n10 files changed, 516 insertions(+), 0 deletions(-)'
            }
          },
          {
            key: 'B',
            mono: true,
            name: { zh: '改在该改的地方', en: 'Changes what actually needed changing' },
            body: {
              zh: 'src/refund/refund.service.ts               + 34  −12\nsrc/refund/refund.types.ts                 +  6  − 2\nsrc/order/order.model.ts                   +  4  − 1\nmigrations/0042_add_refunded_amount.sql    +  9\ntests/refund.spec.ts                       + 61  − 8\n\n5 files changed, 114 insertions(+), 23 deletions(-)',
              en: 'src/refund/refund.service.ts               + 34  −12\nsrc/refund/refund.types.ts                 +  6  − 2\nsrc/order/order.model.ts                   +  4  − 1\nmigrations/0042_add_refunded_amount.sql    +  9\ntests/refund.spec.ts                       + 61  − 8\n\n5 files changed, 114 insertions(+), 23 deletions(-)'
            }
          },
          {
            key: 'C',
            mono: true,
            name: { zh: '结构最漂亮，边界切错了', en: 'The best-looking structure, cut along the wrong boundary' },
            body: {
              zh: 'src/payments/refund-engine/engine.ts       +176\nsrc/payments/refund-engine/policy.ts       + 92\nsrc/payments/refund-engine/ledger.ts       +134\nsrc/payments/refund-engine/index.ts        + 18\nsrc/refund/refund.service.ts               + 12  −86\nsrc/payments/payment.service.ts            + 24  − 5\ntests/refund-engine.spec.ts                +203\n\n7 files changed, 659 insertions(+), 91 deletions(-)',
              en: 'src/payments/refund-engine/engine.ts       +176\nsrc/payments/refund-engine/policy.ts       + 92\nsrc/payments/refund-engine/ledger.ts       +134\nsrc/payments/refund-engine/index.ts        + 18\nsrc/refund/refund.service.ts               + 12  −86\nsrc/payments/payment.service.ts            + 24  − 5\ntests/refund-engine.spec.ts                +203\n\n7 files changed, 659 insertions(+), 91 deletions(-)'
            }
          }
        ],
        order: {
          zh: 'B 第一，这个没有争议。A 和 C 谁第二不重要——重要的是他能不能说出：A 的病是"从今天起有两套退款逻辑"，C 的病是"边界切错了，而且 659 行改动里没有一行 migration"。说得出这两句，比排序排对值钱得多。',
          en: 'B first, and that part is not controversial. Whether A or C comes second does not matter — what matters is whether he can say it out loud: A leaves two refund implementations in the codebase from today on, and C cuts the boundary wrong while shipping 659 lines without a single migration. Saying those two sentences is worth far more than getting the order right.'
        },
        read: [
          { zh: '**选 B** —— 有品味。他知道"改动集中在该改的地方"本身就是一种设计质量，而不是保守或者偷懒。', en: '**Picks B** — taste. He knows that a change landing where it belongs is a design property, not conservatism or laziness.' },
          { zh: '**选 A** —— 他把"不影响现有代码"当成了优点。在函数层面那可能是优点，在架构层面那是"没有做整合"的另一种说法。', en: '**Picks A** — he reads "does not touch existing code" as a virtue. At the function level it can be. At the architecture level it is another way of saying no integration happened.' },
          { zh: '**选 C** —— 最需要警惕的一种，因为 C 是三份里唯一一个"看起来像好架构"的。被结构的形状说服，而不是被边界的正确性说服，是 senior 工程师最常见的失手方式。', en: '**Picks C** — the one to worry about, because C is the only one of the three that looks like good architecture. Being persuaded by the shape of a structure rather than the correctness of its boundary is the most common way senior engineers get this wrong.' },
          { zh: '**先问"这个系统现在是按领域切的还是按技术层切的"再判断** —— 加分。他知道离开既有结构谈新增结构是没有意义的。', en: '**Asks whether the system is sliced by domain or by technical layer before judging** — bonus. He knows new structure is meaningless without knowing the structure it lands in.' }
        ],
        checklist: {
          title: { zh: '你自己看 files changed 时，先看这八样', en: 'What to read in a files-changed list, before the code' },
          items: [
            { zh: '**改了几个文件，散在几个目录。** 一个功能横跨七八个目录，说明这个系统是按技术分层切的，不是按领域切的——以后每个需求都要这么横跨一遍。', en: '**How many files, across how many directories.** One feature touching seven directories means the system is sliced by technical layer rather than by domain — and every future feature will cost the same sprawl.' },
            { zh: '**有没有净删除。** 只增不删的"重构"不是重构，是叠加。', en: '**Whether anything was deleted.** A refactor with no deletions is not a refactor; it is an accumulation.' },
            { zh: '**有没有 migration。** 一个明显动了数据形状的需求却没有 schema 变更，要么他没想到，要么塞进某个 JSON 字段里了——代码可以重写，数据形状错了要还很多年。', en: '**Whether there is a migration.** A requirement that clearly changes the shape of the data, with no schema change, means either he did not think about it or he hid it in a JSON column. Code can be rewritten; the wrong data shape is paid off over years.' },
            { zh: '**新文件的名字说不说人话。** `utils.ts`、`helper.ts`、`common.ts`、`manager.ts`、`base.ts` 是"我不知道这该叫什么"的自白。好名字是领域词。', en: '**Whether the new filenames say anything.** `utils.ts`, `helper.ts`, `common.ts`, `manager.ts`, `base.ts` are confessions that the author could not name the thing. Good names are domain words.' },
            { zh: '**有没有和已有文件平行的新文件。** `partial-refund.service.ts` 和 `refund.service.ts` 并排出现，意味着从今天起有两套退款逻辑，以后每次改规则都要改两处。', en: '**Whether a new file sits parallel to an existing one.** `partial-refund.service.ts` next to `refund.service.ts` means there are two refund implementations from today on, and every rule change costs two edits.' },
            { zh: '**测试是改的还是新增的。** 全是新增测试、旧测试一行没动，通常意味着他绕开了旧行为，而不是验证了旧行为没被破坏。', en: '**Whether tests were modified or only added.** All-new tests with the old suite untouched usually means he routed around the existing behaviour instead of proving he did not break it.' },
            { zh: '**有没有顺手改的不相关文件。** 格式化、重命名、升级依赖混在功能 PR 里——不是大错，但说明他不体谅 review 的人。', en: '**Whether unrelated files rode along.** Formatting, renames and dependency bumps mixed into a feature PR. Not a crime, but it tells you he does not think about the reviewer.' },
            { zh: '**（AI 时代新增的一条）有没有新长出来的一层。** AI 不敢改已有代码，它的默认动作永远是"新建一个文件"。所以 AI 参与越深的仓库，越容易长出平行结构。**能约束住 AI 不要再长一层，是最近两年才出现的架构能力，也是目前最稀缺的。**', en: '**(New in the AI era) Whether a layer grew.** AI will not touch existing code; its default move is always to add a file. The more AI a repo absorbs, the more parallel structure it grows. **Holding the line against another layer is an architectural skill that did not exist two years ago, and it is the scarcest one right now.**' }
          ]
        },
        tells: [
          {
            tone: 'tone-bad',
            heard: { zh: '「A 最清晰，功能独立，不影响现有代码」', en: '"A is the cleanest — self-contained, does not touch existing code."' },
            verdict: {
              zh: '追问：「合进去之后系统里有几套退款逻辑？下次改退款审批规则要改几个地方？」再看那张 `partial_refunds` 新表——全额退款记在老地方，部分退款记在新表，以后查"这个订单一共退了多少"要 union 两张表。在架构层面，"不影响现有代码"不是优点，是"没有做整合"的另一种说法。这也正是 AI 参与的 PR 最典型的形状：它不敢动 refund.service.ts，于是在旁边新建了一个。',
              en: 'Ask: "After this merges, how many refund implementations exist? How many places change when the approval rule changes?" Then look at the new `partial_refunds` table — full refunds recorded in one place, partial ones in another, and "how much has this order refunded" becomes a union of two tables. At the architecture level, "does not touch existing code" is not a virtue; it is another way of saying no integration happened. It is also the signature shape of an AI-assisted PR: it would not touch refund.service.ts, so it built one next to it.'
            }
          },
          {
            tone: 'tone-bad',
            heard: { zh: '「C 最专业，分层清楚，而且还删了旧代码」', en: '"C is the most professional — clean layering, and it even deletes old code."' },
            verdict: {
              zh: '问两句。第一句：「退款金额存在哪张表？我没看到 migration。」659 行的重构里没有一行 schema 变更，说明数据往哪放这件事根本没想清楚。第二句：「为什么退款逻辑搬到 payments 下面去了？」能不能退、退多少，是订单和商务规则决定的，不是支付通道决定的——边界一旦切错，以后每一个退款规则的改动都要跨两个域。另外那个凭空出现的 ledger.ts：需求里没有记账，它自己发明了一个概念。C 危险就危险在，资深的人扫一眼也会点头。',
              en: 'Ask two things. First: "Which table holds the refunded amount? I do not see a migration." A 659-line refactor with zero schema change means the question of where the data lives was never answered. Second: "Why did refunds move under payments?" Whether and how much you can refund is decided by order and commercial rules, not by the payment channel — cut that boundary wrong and every future refund rule spans two domains. Also note ledger.ts appearing from nowhere: nothing in the requirement asks for bookkeeping; it invented a concept. C is dangerous precisely because a senior engineer will nod at it.'
            }
          },
          {
            tone: 'tone-good',
            heard: { zh: '「B。而且我会第一个打开那个 migration。」', en: '"B. And the first file I would open is the migration."' },
            verdict: {
              zh: '就是他了。看 files changed 先找数据模型变更，是很硬的经验信号——他知道代码可以重写，数据形状改错了要还很多年。',
              en: 'That is your person. Going to the schema change first is a hard-won instinct — he knows code can be rewritten and the wrong data shape is paid off for years.'
            }
          },
          {
            tone: 'tone-good',
            heard: { zh: '「A 那三个 types / constants / utils 文件一看就是 AI 生成的」', en: '"Those three files — types, constants, utils — are AI-generated, you can see it."' },
            verdict: {
              zh: '加分。他见过这个形状，也就意味着他大概率知道怎么在自己的仓库里挡住它。',
              en: 'Bonus. He has seen this shape before, which usually means he knows how to stop it in his own repo.'
            }
          },
          {
            tone: 'tone-good',
            heard: { zh: '主动指出：「B 有删除，A 一行没删——这三个 PR 不像同一个人写的。」', en: 'Unprompted: "B deletes things and A deletes nothing — these do not look like the same author."' },
            verdict: {
              zh: '最高级的反应。他读的不是结构，是改动背后的意图和习惯。这种人 review 别人代码时，看的是"这个人在想什么"，而不是"这行对不对"。',
              en: 'The best reflex available. He is not reading structure, he is reading intent and habit. People like this review code by asking what the author was thinking, not whether a line is correct.'
            }
          }
        ]
      },
      {
        lens: { zh: '函数层 · 看具体实现', en: 'Function level — the implementation itself' },
        note: {
          zh: '函数层考察的是另一件事：他会不会把"测试通过"当成"需求满足"。这一层筛掉的人比选出的人多，但值得花十分钟。',
          en: 'The function level tests something else: whether he mistakes "tests pass" for "requirement met". It rejects more people than it selects, but it is worth ten minutes.'
        },
      brief: {
        zh: '需求原文：「运营上传 CSV 批量导入联系人。如果邮箱在系统里已经存在，就跳过这一条。导入完成后告诉用户导入了多少条、跳过了多少条。」\n\n下面是三份实现，三份都能跑、都提交了 PR。',
        en: 'The requirement, verbatim: "Ops uploads a CSV to bulk-import contacts. If an email already exists in the system, skip that row. When the import finishes, tell the user how many were imported and how many were skipped."\n\nBelow are three implementations. All three run. All three were opened as PRs.'
      },
      say: {
        zh: '你就这么说：「这三份都能跑、测试都过了。你花十分钟读，然后告诉我你会合哪一份进主干，另外两份你会怎么处理。」',
        en: 'Say it like this: "All three run and all three pass their tests. Take ten minutes, then tell me which one you would merge, and what you would do with the other two."'
      },
      artifacts: [
        {
          key: 'A',
          mono: true,
          body: {
            zh: '// import/pipeline.ts\ninterface Parser<T> { parse(raw: string): T[] }\ninterface KeySource { existingKeys(): Promise<Set<string>> }\ninterface ImportResult<T> { imported: T[]; skipped: T[] }\n\nexport class ImportPipeline<T> {\n  constructor(\n    private parser: Parser<T>,\n    private source: KeySource,\n    private keyOf: (x: T) => string,\n    private hooks: ((r: ImportResult<T>) => void)[] = []\n  ) {}\n\n  async run(raw: string): Promise<ImportResult<T>> {\n    const seen = await this.source.existingKeys()\n    const out: ImportResult<T> = { imported: [], skipped: [] }\n    for (const item of this.parser.parse(raw)) {\n      const k = this.keyOf(item)\n      if (seen.has(k)) { out.skipped.push(item); continue }\n      seen.add(k)\n      out.imported.push(item)\n    }\n    this.hooks.forEach(h => h(out))\n    return out\n  }\n}\n\n// import/registry.ts — 为将来的 Excel / JSON 预留\nexport const parsers = { csv: new CsvParser() }\n\n// 目前唯一的调用点：\nnew ImportPipeline(\n  new CsvParser(),\n  new ContactEmailSource(db),\n  c => c.email.toLowerCase()\n).run(file)',
            en: '// import/pipeline.ts\ninterface Parser<T> { parse(raw: string): T[] }\ninterface KeySource { existingKeys(): Promise<Set<string>> }\ninterface ImportResult<T> { imported: T[]; skipped: T[] }\n\nexport class ImportPipeline<T> {\n  constructor(\n    private parser: Parser<T>,\n    private source: KeySource,\n    private keyOf: (x: T) => string,\n    private hooks: ((r: ImportResult<T>) => void)[] = []\n  ) {}\n\n  async run(raw: string): Promise<ImportResult<T>> {\n    const seen = await this.source.existingKeys()\n    const out: ImportResult<T> = { imported: [], skipped: [] }\n    for (const item of this.parser.parse(raw)) {\n      const k = this.keyOf(item)\n      if (seen.has(k)) { out.skipped.push(item); continue }\n      seen.add(k)\n      out.imported.push(item)\n    }\n    this.hooks.forEach(h => h(out))\n    return out\n  }\n}\n\n// import/registry.ts — reserved for Excel / JSON later\nexport const parsers = { csv: new CsvParser() }\n\n// the one and only call site today:\nnew ImportPipeline(\n  new CsvParser(),\n  new ContactEmailSource(db),\n  c => c.email.toLowerCase()\n).run(file)'
          }
        },
        {
          key: 'B',
          mono: true,
          body: {
            zh: '// import.ts\nexport async function importContacts(csv: string, db: Db) {\n  const rows = parseCsv(csv)\n\n  const existing = new Set(\n    (await db.query(\'select email from contacts\'))\n      .map(r => r.email.toLowerCase())\n  )\n\n  const toInsert = []\n  let skipped = 0\n\n  for (const row of rows) {\n    const email = row.email.trim().toLowerCase()\n    if (!email || existing.has(email)) { skipped++; continue }\n    existing.add(email)\n    toInsert.push({ ...row, email })\n  }\n\n  await db.insertMany(\'contacts\', toInsert)\n  return { imported: toInsert.length, skipped }\n}',
            en: '// import.ts\nexport async function importContacts(csv: string, db: Db) {\n  const rows = parseCsv(csv)\n\n  const existing = new Set(\n    (await db.query(\'select email from contacts\'))\n      .map(r => r.email.toLowerCase())\n  )\n\n  const toInsert = []\n  let skipped = 0\n\n  for (const row of rows) {\n    const email = row.email.trim().toLowerCase()\n    if (!email || existing.has(email)) { skipped++; continue }\n    existing.add(email)\n    toInsert.push({ ...row, email })\n  }\n\n  await db.insertMany(\'contacts\', toInsert)\n  return { imported: toInsert.length, skipped }\n}'
          }
        },
        {
          key: 'C',
          mono: true,
          body: {
            zh: '// import.ts\nexport async function importContacts(csv: string, db: Db) {\n  const rows = parseCsv(csv)\n  const seen = new Set<string>()\n  const toInsert = []\n  let skipped = 0\n\n  for (const row of rows) {\n    const email = row.email.trim().toLowerCase()\n    if (!email) { skipped++; continue }\n    if (seen.has(email)) { skipped++; continue }\n    seen.add(email)\n    toInsert.push({ ...row, email })\n  }\n\n  await db.insertMany(\'contacts\', toInsert)\n  return { imported: toInsert.length, skipped }\n}\n\n// import.test.ts\ndescribe(\'importContacts\', () => {\n  it(\'跳过重复邮箱\', async () => {\n    const csv = \'email\\na@x.com\\na@x.com\\n\'\n    const r = await importContacts(csv, db)\n    expect(r.imported).toBe(1)\n    expect(r.skipped).toBe(1)\n  })\n\n  it(\'忽略空邮箱\', async () => { /* ... */ })\n  it(\'邮箱大小写不敏感\', async () => { /* ... */ })\n})',
            en: '// import.ts\nexport async function importContacts(csv: string, db: Db) {\n  const rows = parseCsv(csv)\n  const seen = new Set<string>()\n  const toInsert = []\n  let skipped = 0\n\n  for (const row of rows) {\n    const email = row.email.trim().toLowerCase()\n    if (!email) { skipped++; continue }\n    if (seen.has(email)) { skipped++; continue }\n    seen.add(email)\n    toInsert.push({ ...row, email })\n  }\n\n  await db.insertMany(\'contacts\', toInsert)\n  return { imported: toInsert.length, skipped }\n}\n\n// import.test.ts\ndescribe(\'importContacts\', () => {\n  it(\'skips duplicate emails\', async () => {\n    const csv = \'email\\na@x.com\\na@x.com\\n\'\n    const r = await importContacts(csv, db)\n    expect(r.imported).toBe(1)\n    expect(r.skipped).toBe(1)\n  })\n\n  it(\'ignores empty emails\', async () => { /* ... */ })\n  it(\'is case-insensitive\', async () => { /* ... */ })\n})'
          }
        }
      ],
      tells: [
        {
          tone: 'tone-bad',
          heard: { zh: '「C 挺干净的，测试也齐，可以合」', en: '"C is clean and well tested — mergeable."' },
          verdict: {
            zh: '红旗，而且是最重要的一个。C 只在这一个 CSV 文件内部去重，从来没查过数据库——需求说的是"系统里已经存在"。它的测试全过，因为测试是照着代码写的，不是照着需求写的。这正是 AI 产出的典型形态：自洽、干净、跑得通、解决的是另一个问题。',
            en: 'Red flag, and the important one. C only deduplicates inside the uploaded file and never touches the database — the requirement says "already exists in the system". Its tests all pass because they were written against the code, not against the requirement. This is the signature shape of AI output: coherent, clean, green, and solving a different problem.'
          }
        },
        {
          tone: 'tone-warn',
          heard: { zh: '「A 好，扩展性强，以后加 Excel 很方便」', en: '"A — good extensibility, easy to add Excel later."' },
          verdict: {
            zh: '追问：「现在有第二种格式的需求吗？」如果没有，他是在用今天确定的复杂度，换一个明天不一定发生的方便。还坚持的话，你招到的是一个会把每个功能都做成框架的人。',
            en: 'Ask: "Is there a second format on the roadmap?" If not, he is paying certain complexity today for convenience that may never arrive. If he holds his ground anyway, you are hiring someone who turns every feature into a framework.'
          }
        },
        {
          tone: 'tone-good',
          heard: { zh: '「合 B。C 根本没查库，需求说的是系统里已存在。」', en: '"Merge B. C never queries the database — the requirement says already in the system."' },
          verdict: {
            zh: '就是他了。他去对了需求，而不是对了测试。',
            en: 'That is your person. He checked against the requirement, not against the test suite.'
          }
        },
        {
          tone: 'tone-good',
          heard: { zh: '「B 对，但如果联系人有几百万，把邮箱全查出来塞 Set 会撑爆内存，要么分批查，要么直接靠数据库唯一索引。」', en: '"B is right, but if there are millions of contacts, pulling every email into a Set will blow up memory — batch it, or let a unique index do the work."' },
          verdict: {
            zh: '最好的一种回答。他没有把"B 是标准答案"当成终点，而是问了真实规模。注意：这道题没有完美选项，能看出 B 的规模隐患比选对 B 更值钱。',
            en: 'The best answer available. He does not treat "B is the right one" as the end of the thought — he asks about real scale. Note there is no perfect option here: spotting B’s scaling limit is worth more than picking B.'
          }
        }
      ]
    }],

    pm: [{
      brief: {
        zh: '真实背景：客户成功团队这个月收到 11 张工单，都是「找不到导出功能」。导出功能其实是有的，藏在「设置 → 数据管理」里面。\n\n下面是三份方案，都是 AI 生成的，你只做了少量修改。',
        en: 'The situation: customer success logged 11 tickets this month, all of them "cannot find the export function". Export exists — it is buried under Settings → Data Management.\n\nBelow are three proposals, all AI-generated, lightly edited by you.'
      },
      say: {
        zh: '你就这么说：「这三份方案都能立项、都能排期。你花十分钟看，告诉我你会做哪一份，另外两份你会怎么处理。」',
        en: 'Say it like this: "All three of these could be approved and scheduled. Take ten minutes, then tell me which one you would build, and what you would do with the other two."'
      },
      artifacts: [
        {
          key: 'A',
          body: {
            zh: '【方案 A】数据中心 2.0\n\n一、背景与用户画像\n  P0「数据分析型运营」：每周导出 3–5 次，关注明细\n  P1「管理者」：关注汇总视图与趋势\n  P2「财务」：月度对账，关注字段完整性\n\n二、竞品能力矩阵\n  （对比 Tableau / 观远 / 帆软 的导出与报表能力，略）\n\n三、方案设计\n  新增一级菜单「数据中心」，包含三个子模块：\n  3.1 导出任务管理：定时导出、导出历史、失败重试\n  3.2 自定义报表模板：字段选择、模板保存与共享\n  3.3 数据订阅：按周/月邮件推送\n\n四、分期路线\n  Q1 导出任务管理\n  Q2 报表模板\n  Q3 数据订阅\n\n五、资源需求\n  前端 1.5 人 / 后端 1 人 / 设计 0.5 人，持续三个季度',
            en: 'Proposal A — Data Centre 2.0\n\n1. Background and personas\n   P0 "analytics-driven ops": exports 3–5 times a week, wants detail\n   P1 "managers": want rollups and trends\n   P2 "finance": monthly reconciliation, cares about field coverage\n\n2. Competitive matrix\n   (Tableau / Looker / Metabase export and reporting capabilities)\n\n3. Design\n   A new top-level "Data Centre" menu with three modules:\n   3.1 Export jobs: scheduling, history, retry on failure\n   3.2 Custom report templates: field selection, save and share\n   3.3 Subscriptions: weekly/monthly email delivery\n\n4. Phasing\n   Q1 export jobs / Q2 templates / Q3 subscriptions\n\n5. Resourcing\n   1.5 FE, 1 BE, 0.5 design, sustained across three quarters'
          }
        },
        {
          key: 'B',
          body: {
            zh: '【方案 B】把导出按钮放到列表页右上角\n\n做什么\n  列表页右上角加一个「导出」按钮，点击直接下载当前筛选\n  条件下的数据。原来「设置 → 数据管理」的入口保留不动。\n\n不做什么\n  不做定时导出。不做报表模板。不做导出历史。\n\n怎么算成功\n  两周内「找不到导出」的工单降到 0–2 张。\n  如果没降，说明问题不是入口，是别的（比如导出的字段\n  不对、或者导出后打不开），到时候再查，不要现在猜。\n\n工期\n  前端 1 天，不需要后端。',
            en: 'Proposal B — put an Export button in the top right of the list page\n\nWhat we build\n  An "Export" button in the top-right of the list view. Clicking it\n  downloads the data under the current filters. The old path under\n  Settings → Data Management stays where it is.\n\nWhat we do not build\n  No scheduled exports. No report templates. No export history.\n\nHow we know it worked\n  "Cannot find export" tickets drop to 0–2 within two weeks.\n  If they do not drop, the problem was never the entry point — it is\n  something else (wrong fields, file will not open). We investigate\n  then, instead of guessing now.\n\nEffort\n  One front-end day. No back-end work.'
          }
        },
        {
          key: 'C',
          body: {
            zh: '【方案 C】数据能力升级\n\n一、问题定义\n  本月 11 张工单反映用户找不到导出功能。结合行业调研，\n  67% 的 SaaS 用户将「数据分析能力不足」列为更换供应商\n  的主要原因之一。这说明问题的严重性被低估了。\n\n二、根因分析\n  用户找不到导出，本质上是我们缺少面向"数据消费场景"的\n  产品设计。单纯调整按钮位置只能缓解表层症状，无法建立\n  长期的数据心智。\n\n三、方案\n  引入轻量 BI 看板：用户可自定义指标卡与图表，导出作为\n  看板上的一个自然动作存在。这样既解决了发现性问题，也\n  为后续的数据变现能力打下基础。\n\n四、预期收益\n  提升用户粘性与续费率，建立数据产品的差异化壁垒。',
            en: 'Proposal C — Data capability upgrade\n\n1. Problem definition\n   11 tickets this month report that users cannot find export.\n   Industry research shows 67% of SaaS users cite "insufficient\n   analytics" as a primary reason for switching vendors. The\n   severity here has been underestimated.\n\n2. Root cause\n   Users cannot find export because we lack product design for the\n   data-consumption scenario. Moving a button treats the symptom\n   and never builds the underlying data habit.\n\n3. Solution\n   Introduce a lightweight BI dashboard where users compose metric\n   cards and charts, with export as a natural action on the board.\n   This addresses discoverability and lays groundwork for future\n   data monetisation.\n\n4. Expected benefit\n   Higher stickiness and renewal rates, and a defensible position\n   in data products.'
          }
        }
      ],
      tells: [
        {
          tone: 'tone-bad',
          heard: { zh: '「C 有道理，得看根因，不能头痛医头」', en: '"C makes sense — you have to fix root causes, not symptoms."' },
          verdict: {
            zh: '追问两句：「那个 67% 是关于什么的？和这 11 张工单有什么因果关系？」——那是"换供应商的原因"的行业调研，和"这 11 个人找不到按钮"没有关系。C 用一个宏大叙事把一个一天能修的问题变成了一个季度的项目，而且全篇没有成功指标。"看根因"是这个岗位最常见的、听起来最聪明的错误。',
            en: 'Ask two things: "What is that 67% actually about, and how does it connect to these 11 tickets?" It is industry research on why customers switch vendors — unrelated to eleven people not finding a button. C turns a one-day fix into a quarter-long project on the strength of a grand narrative, and never states a success metric. "Look at root causes" is the smartest-sounding mistake in this role.'
          }
        },
        {
          tone: 'tone-warn',
          heard: { zh: '「A 最完整，考虑得最周全」', en: '"A is the most complete — it thought of everything."' },
          verdict: {
            zh: '他会把每一个一天的问题都做成一个季度的项目。而且注意 A 的画像和竞品矩阵：它们看起来是论据，其实一条也没有支撑"要不要挪那个按钮"。',
            en: 'He will turn every one-day problem into a quarter-long project. Note too that A’s personas and competitive matrix look like evidence but support nothing about whether to move the button.'
          }
        },
        {
          tone: 'tone-good',
          heard: { zh: '「做 B。而且 B 里那句『如果两周后没降，说明不是入口问题』是关键。」', en: '"Build B. And the key line in B is: if tickets do not drop in two weeks, the entry point was never the problem."' },
          verdict: {
            zh: '就是他了。他挑中的不是方案，是那个可证伪的假设——B 是唯一一份敢于说"我可能是错的，这是我怎么知道"的方案。',
            en: 'That is your person. What he picked was not a solution but a falsifiable hypothesis — B is the only one willing to say "I might be wrong, and here is how we will know."'
          }
        },
        {
          tone: 'tone-good',
          heard: { zh: '主动问：「这 11 张工单是 11 个客户，还是同一个客户提了 11 次？」', en: 'He asks first: "Is that 11 customers, or one customer filing 11 times?"' },
          verdict: {
            zh: '最高级的反应，而且几乎没人会问。如果是同一个大客户提了 11 次，这可能根本不是产品问题，是客户成功的问题——方案全都白做。',
            en: 'The best reflex available, and almost nobody asks it. If one large account filed all eleven, this may not be a product problem at all — it may be a customer-success problem, and all three proposals are moot.'
          }
        }
      ]
    }]
  };

  /* Verbatim wording for the questions that are not the reverse review. */
  var SAY = {
    why: [
      { zh: '第一问：「你刚才说那个项目做得不错——你怎么知道它是好的？」', en: 'First: "You said that project went well — how do you know it was good?"' },
      { zh: '第二问（针对他的答案）：「你说 XX 变好了，你又怎么知道那是好的？」', en: 'Second, against his answer: "You said X improved — how do you know that was good?"' },
      { zh: '第三问：「这个标准是从哪来的？谁定的？」', en: 'Third: "Where does that standard come from? Who set it?"' }
    ],
    cal: {
      zh: '你就这么说：「这是我们团队真实做的一个东西，没有标准答案，我也不是要考你。你先说好在哪，再说如果只能砍一样你砍什么，最后如果只能改一处你改哪。」',
      en: 'Say it like this: "This is something my team actually shipped. There is no answer key and I am not testing you. Tell me what is good about it, then what you would cut if you could only cut one thing, then what you would change if you could only change one."'
    },
    l3: {
      zh: '你就这么说：「这个项目我们已经投了三个月，下个月要上线。假设从今天起这是你的决定——你会继续做吗？」',
      en: 'Say it like this: "We are three months into this and it ships next month. Assume it is your call from today — would you keep going?"'
    }
  };

  /* ------------------------------------------------------------------ *
   * Module 4 — live session scorecard
   * ------------------------------------------------------------------ */

  var SCORE_INTRO = {
    zh: '给他一个真实任务和一个 agent，30 分钟。**评分对象是他和 agent 的对话，不是最后的产物**——产物你无法判断是谁做的，对话可以。让他共享屏幕，你只看不说。',
    en: 'Give them a real task and an agent, 30 minutes. **You are scoring the conversation, not the artefact** — you cannot tell who made an artefact, but a transcript never lies. Share screen, and stay silent.'
  };

  var SCORE_DIMS = [
    {
      id: 'open',
      title: { zh: '开局约束', en: 'Opening constraints' },
      watch: { zh: '第一句话里给了多少约束？还是直接把需求原文粘进去？', en: 'How much constraint is in their first message — or did they paste the ticket and hit enter?' },
      anchors: [
        { zh: '粘贴需求原文，直接回车', en: 'Pasted the ticket, hit enter' },
        { zh: '补了一两句背景', en: 'Added a line or two of context' },
        { zh: '给了目标 + 边界 + 不要做什么', en: 'Gave goal, boundaries, and what not to do' },
        { zh: '还给了验收标准和参照物（"像 X 那样"）', en: 'Also gave acceptance criteria and a reference ("like X")' }
      ],
      low: { zh: '开局约束不足的人，会把大量时间浪费在返工上——而且他自己不觉得那是返工。', en: 'People who under-specify burn their time on rework — and do not experience it as rework.' }
    },
    {
      id: 'interrupt',
      title: { zh: '打断时机', en: 'When they interrupt' },
      watch: { zh: 'agent 开始跑偏之后，他多久叫停？', en: 'Once the agent drifts, how long before they stop it?' },
      anchors: [
        { zh: '不打断，等它全部做完才发现不对', en: 'Never interrupts; discovers the problem at the end' },
        { zh: '产出出来后才发现', en: 'Catches it once output lands' },
        { zh: '看到方向不对就叫停', en: 'Stops it as soon as direction looks wrong' },
        { zh: '在它开始动手前就纠正了计划', en: 'Corrects the plan before it starts working' }
      ],
      low: { zh: '不打断的人，是在把 agent 当自动售货机，不是当同事。', en: 'People who never interrupt are treating the agent as a vending machine, not a colleague.' }
    },
    {
      id: 'stop',
      title: { zh: '收手时机', en: 'When they stop' },
      watch: { zh: '他什么时候认为"够了"？依据是什么？', en: 'When do they call it done, and on what basis?' },
      anchors: [
        { zh: '还在无止境地打磨 / 或者第一版就交', en: 'Polishing forever — or shipping the first draft' },
        { zh: '凭感觉停', en: 'Stops on feel' },
        { zh: '对着一个自己定的标准停', en: 'Stops against a standard they set' },
        { zh: '停的时候能说清"剩下的部分为什么不值得做"', en: 'Stops and can say why the rest is not worth doing' }
      ],
      low: { zh: '收手时机是最难教的一项。这一项低分的人，要么过度打磨，要么草率交付，中间没有档位。', en: 'The hardest thing to teach. Low scorers either over-polish or under-deliver; there is no middle gear.' }
    },
    {
      id: 'verify',
      title: { zh: '验证方式', en: 'How they verify' },
      watch: { zh: '他怎么确认产出是对的？跑一下，还是读一遍觉得对？', en: 'How do they confirm it is right — run it, or read it and feel satisfied?' },
      anchors: [
        { zh: '不验证，看起来对就交', en: 'No verification; it looks right, so it ships' },
        { zh: '肉眼读一遍', en: 'Reads it over' },
        { zh: '真的跑 / 真的测 / 真的找人看', en: 'Actually runs it, tests it, or shows someone' },
        { zh: '专门去找它可能错的地方，而不是确认它对', en: 'Goes looking for where it is wrong, instead of confirming it is right' }
      ],
      low: { zh: '🚩 红旗：验证这一项低于 2 分，意味着你要为他的每一份产出兜底。在 AI 时代这是最贵的一种员工。', en: '🚩 Red flag: below 2 here means you personally backstop every piece of their output. In the AI era this is the most expensive kind of hire.' }
    }
  ];

  var SCORE_READS = [
    { min: 14, tone: 'tone-good', head: { zh: '判断者，可以往 L3 面', en: 'A judge — worth probing for L3' }, body: { zh: '他不是在用 AI 干活，他是在管理 AI 干活。这类人可以放到没人能替他验收的位置上。', en: 'They are not using AI to work; they are managing AI that works. You can put them where nobody can check them.' } },
    { min: 10, tone: 'tone-good', head: { zh: '稳定的 L2', en: 'A solid L2' }, body: { zh: '给定方向他能判断细节，但重大取舍还是需要有人兜。绝大多数岗位这已经够了。', en: 'Give them direction and they will judge the details; the big trade-offs still need someone above them. For most roles this is enough.' } },
    { min: 6, tone: 'tone-warn', head: { zh: '执行者，需要有人给他验收', en: 'An executor who needs a checker' }, body: { zh: '他能把事做完，但你要为"做得对不对"负责。招之前算一下这份验收成本谁来出。', en: 'They will finish the work, but you own whether it is correct. Price in who pays that review cost before you hire.' } },
    { min: 0, tone: 'tone-bad', head: { zh: '目前是 AI 的传声筒', en: 'Currently a conduit for the AI' }, body: { zh: '任务进去、产出出来，中间没有他的判断。这个岗位如果留着，是在花钱雇一个 API 中转。', en: 'Task in, output out, no judgement in between. Keeping this role means paying a person to proxy an API.' } }
  ];

  /* ------------------------------------------------------------------ *
   * Module 5 — reverse interview
   * ------------------------------------------------------------------ */

  var REVERSE = {
    intro: {
      zh: '给他 10 分钟问你问题，并且明确告诉他"这一段我也在评估"。**问题比答案更能暴露品味**——回答可以准备，提问不行。',
      en: 'Give them ten minutes to ask you anything, and tell them plainly that this part is scored too. **Questions reveal taste better than answers** — answers can be rehearsed, questions cannot.'
    },
    good: {
      general: [
        { zh: '这个岗位最近一次做错的决定是什么？', en: 'What is the most recent bad decision made in this role?' },
        { zh: '你希望半年后我做成什么，才算招对了？', en: 'Six months in, what would make this hire clearly right?' },
        { zh: '这件事哪里最难？为什么之前没做成？', en: 'What is the hard part here, and why has it not worked so far?' },
        { zh: '公司里谁最可能反对我做的事？', en: 'Who inside the company is most likely to push back on my work?' },
        { zh: '如果我判断某件事不该做，我能停掉它吗？', en: 'If I conclude something should not be built, can I stop it?' }
      ],
      eng: [
        { zh: '你们现在最难改的那部分代码是什么？为什么变成这样？', en: 'What is the hardest part of the codebase to change, and how did it get that way?' },
        { zh: '线上出事的时候，流程是怎么走的？', en: 'What actually happens when something breaks in production?' },
        { zh: '你们怎么判断一段 AI 写的代码可以合入？', en: 'How do you decide that AI-written code is mergeable?' },
        { zh: '技术债的账目前谁在还？', en: 'Who is currently paying down the tech debt?' }
      ],
      pm: [
        { zh: '你们最近砍掉的一个功能是什么？谁拍的板？', en: 'What did you kill most recently, and who made the call?' },
        { zh: '你们怎么知道用户真的要这个？', en: 'How do you know users actually want this?' },
        { zh: '需求排序最终是谁说了算？', en: 'Who genuinely decides the priority order?' },
        { zh: '哪个指标你们盯了很久但一直没动？', en: 'Which metric have you been staring at that refuses to move?' }
      ]
    },
    bad: [
      { zh: '你们用什么技术栈 / 什么 AI 工具？（可以问，但只问这个说明他关心工位舒适度胜过关心结果）', en: 'What is your stack / which AI tools do you use? (Fine to ask — but if that is all, they care about desk comfort more than outcomes.)' },
      { zh: '晋升机制是怎样的？（在还不知道这活是什么之前就问，顺序错了）', en: 'How does promotion work? (Asked before understanding the work, the ordering is wrong.)' },
      { zh: '加班多吗？（不是不能问，是不该是前三个问题）', en: 'How are the hours? (Legitimate — just not a top-three question.)' },
      { zh: '完全不问，或者说"您刚才讲得很清楚了"（最坏的信号：他对将要做的事没有好奇心）', en: 'No questions, or "you covered everything" (the worst signal: no curiosity about the work itself).' }
    ]
  };

  /* ------------------------------------------------------------------ *
   * UI copy
   * ------------------------------------------------------------------ */

  var MARK = 'kellychan.im/ai-hire-guide';

  var UI = {
    eyebrow: { zh: 'AI 时代的招聘工具包', en: 'A hiring toolkit for the AI era' },
    title: { zh: '技能已经不值钱了，你在招的是品味', en: 'Skills are commoditised. What you are hiring is taste.' },
    lede: {
      zh: '给老板和 HR 负责人的一套可直接使用的面试工具。不是文章——选好岗位和层级，它会给你简历追问、品味测试题、现场评分表，以及一份可以打印带进会议室的面试脚本。',
      en: 'A working toolkit for founders and heads of people. Not an essay — pick a role and a level, and it hands you resume follow-ups, taste tests, a live scorecard, and a one-page interview script you can print and carry into the room.'
    },
    thesis: {
      zh: '在 AI 时代，生成是免费的，选择是瓶颈。所以不要考察他能产出什么——考察他拒绝什么，以及凭什么拒绝。',
      en: 'Generating is free now; choosing is the bottleneck. So do not test what a candidate can produce. Test what they reject, and on what grounds.'
    },
    knobRole: { zh: '我在招什么岗位', en: 'Role I am hiring for' },
    knobLevel: { zh: '我要哪一层的人', en: 'Level I need' },
    knobPeople: { zh: '候选人', en: 'Candidates' },
    addPerson: { zh: '＋ 新增', en: '＋ Add' },
    renamePerson: { zh: '重命名', en: 'Rename' },
    delPerson: { zh: '删除', en: 'Delete' },
    delConfirm: { zh: '删除这位候选人的所有记录？', en: 'Delete everything recorded for this candidate?' },
    namePrompt: { zh: '候选人姓名或代号', en: 'Candidate name or reference' },
    unnamed: { zh: '未命名', en: 'Unnamed' },
    startInterview: { zh: '▶ 进入面试模式', en: '▶ Interview mode' },
    exitInterview: { zh: '退出', en: 'Exit' },
    m1: { zh: '你到底在招哪一层？', en: 'Which level are you actually hiring?' },
    m1sub: {
      zh: '多数老板以为自己在招 L3，出的题却全在考 L1。先花两分钟把这件事定下来——后面所有题目和评分线都会跟着变。',
      en: 'Most founders think they are hiring L3 and then run an interview that only tests L1. Spend two minutes settling this — every question and threshold below adjusts to your answer.'
    },
    m2: { zh: '简历扫描器', en: 'Resume scanner' },
    m2sub: {
      zh: '别看他会什么语言、会不会 Office。看他用什么 agent、什么模型、什么工具去完成工作——技能已经是 AI 在做的了。勾选你在这份简历里真正看到的东西。',
      en: 'Ignore the language list and the software proficiencies. Look at which agents, models and tools they use to get work done — the skills themselves are AI’s job now. Tick what you can actually find in the resume.'
    },
    m3: { zh: '品味测试题', en: 'Taste tests' },
    m3sub: {
      zh: '技能和履历都是他自己说的，你无法核实。但"他能不能品味别人做的东西"当场就能看出来，而且几乎无法作弊。',
      en: 'Skills and history are self-reported and unverifiable. Whether they can judge someone else’s work shows up in the room immediately — and is nearly impossible to fake.'
    },
    m4: { zh: '现场观察评分表', en: 'Live session scorecard' },
    m4sub: { zh: '看他怎么和 agent 一起干活。这是 AI 时代版的"写段代码我看看"。', en: 'Watch them work with an agent. This is the AI-era version of "write some code for me".' },
    m5: { zh: '反向面试提示卡', en: 'Reverse interview card' },
    m5sub: { zh: '让他问你。', en: 'Let them ask you.' },
    m6: { zh: '对比与导出', en: 'Compare and export' },
    m6sub: { zh: '把所有候选人横过来看，然后把这一场的选择汇总成一份面试脚本。', en: 'Lay every candidate side by side, then assemble this session into one interview script.' },
    navTitles: {
      zh: ['① 层级', '② 简历', '③ 品味题', '④ 评分', '⑤ 反向面试', '⑥ 对比导出'],
      en: ['① Level', '② Resume', '③ Taste', '④ Score', '⑤ Reverse', '⑥ Export']
    },
    posTitle: { zh: '正向信号', en: 'Positive signals' },
    negTitle: { zh: '负向信号', en: 'Negative signals' },
    followups: { zh: '给这位候选人的追问', en: 'Follow-ups for this candidate' },
    followupsNote: { zh: '根据你没勾上的正向信号和勾上的负向信号自动生成——问这些，而不是问他会什么。', en: 'Generated from the positives you could not tick and the negatives you did — ask these instead of asking what they know.' },
    copy: { zh: '复制', en: 'Copy' },
    copied: { zh: '已复制', en: 'Copied' },
    print: { zh: '打印 / 存 PDF', en: 'Print / save PDF' },
    reset: { zh: '清空', en: 'Reset' },
    resetConfirm: { zh: '清空这位候选人已填的内容？（岗位和层级设置会保留）', en: 'Clear what you filled in for this candidate? (Role and level settings are kept.)' },
    unscored: { zh: '未打分', en: 'not scored' },
    tasteReverse: { zh: '反向评审题', en: 'The reverse review' },
    tasteReverseSub: { zh: '不给"做一个 X"，给三份已经做好的 X，让他排序并说明理由。', en: 'Do not ask them to make an X. Hand them three finished Xs and ask them to rank the three and defend the ranking.' },
    tasteWhy: { zh: '"你怎么知道它是好的？"连问三次', en: '"How do you know it was good?" — asked three times' },
    tasteCal: { zh: '品味校准题', en: 'The calibration test' },
    materialLabel: { zh: '准备什么材料', en: 'What to prepare' },
    briefLabel: { zh: '给候选人看的原始材料', en: 'What the candidate sees' },
    artLabel: { zh: '三份材料', en: 'The three artefacts' },
    artNote: { zh: '标签只有你看得到。「复制材料」导出的版本不含标签，可以直接发给候选人。', en: 'The labels are for your eyes only. The copy button emits a version without them, ready to send to the candidate.' },
    copyCase: { zh: '复制材料（不含标签）', en: 'Copy the material (no labels)' },
    tellsTitle: { zh: '听到这个答案，怎么判', en: 'What to do when you hear this' },
    scriptLabel: { zh: '逐字话术', en: 'Say it like this' },
    howRead: { zh: '怎么读他的回答', en: 'How to read their answer' },
    showAnswer: { zh: '显示判读（别念出来）', en: 'Show how to read it (do not read aloud)' },
    hideAnswer: { zh: '收起判读', en: 'Hide' },
    goodGround: { zh: '有品味：追问到底会落在这里', en: 'Taste: pushed far enough, they land here' },
    badGround: { zh: '没品味：追问到底会落在这里', en: 'No taste: pushed far enough, they land here' },
    calQuestions: { zh: '问这三个问题', en: 'Ask these three' },
    l1note: {
      zh: '你选的是 L1（执行者）。下面的品味题是为 L2 / L3 设计的——如果你确实只需要 L1，用简历扫描器加一道现场任务就够了，不必花时间在品味题上。但先回头看一眼第 ① 节：这个岗位真的还需要人吗？',
      en: 'You selected L1 (Executor). The taste tests below are built for L2 / L3. If L1 is genuinely what you need, the resume scanner plus one live task is enough. But go back to section ① first: does this role still need a person?'
    },
    goodQ: { zh: '好问题', en: 'Good questions' },
    badQ: { zh: '坏问题', en: 'Bad questions' },
    theirQ: { zh: '记下他实际问了什么', en: 'Write down what they actually asked' },
    theirQPh: { zh: '他问的问题往往比他的回答更值得记下来……', en: 'What they asked is usually worth more than what they answered…' },
    notes: { zh: '面试笔记', en: 'Interview notes' },
    notesPh: { zh: '原话、犹豫的地方、他主动问的问题……', en: 'Exact words, hesitations, what they asked unprompted…' },
    candidate: { zh: '候选人', en: 'Candidate' },
    candidatePh: { zh: '姓名或代号', en: 'Name or reference' },
    decision: { zh: '结论', en: 'Decision' },
    decisions: [
      { v: 'yes', t: { zh: '录用', en: 'Hire' } },
      { v: 'next', t: { zh: '进下一轮', en: 'Next round' } },
      { v: 'hold', t: { zh: '待定', en: 'Hold' } },
      { v: 'no', t: { zh: '不录用', en: 'No' } }
    ],
    build: { zh: '生成面试脚本', en: 'Build the script' },
    copyMd: { zh: '复制 Markdown', en: 'Copy as Markdown' },
    autosave: { zh: '内容自动保存在你自己的浏览器里，不上传任何服务器。', en: 'Everything is saved in your own browser. Nothing is uploaded anywhere.' },
    quizResult: { zh: '按你的回答，你要招的是', en: 'Based on your answers, you are hiring' },
    quizMismatch: {
      zh: '这和你上面选的层级不一样。以哪个为准由你决定——但如果你的回答说明这个岗位需要 L3，而你按 L1 的标准面试，你会招到一个执行者，然后怪他没有判断力。',
      en: 'That differs from the level selected above. Your call which to trust — but if the role needs L3 and you interview to an L1 bar, you will hire an executor and then blame them for having no judgement.'
    },
    verdictGood: { zh: '进下一轮', en: 'Move to the next round' },
    verdictAsk: { zh: '先追问，再决定', en: 'Ask first, then decide' },
    verdictNo: { zh: '不用见了', en: 'Pass' },
    verdictGoodB: { zh: '信号足够强。把时间花在品味题上，不要再花在核实履历上。', en: 'Signal is strong enough. Spend the interview on taste, not on verifying history.' },
    verdictAskB: { zh: '信号不足以判断，但也没到该拒的程度。用下面生成的追问打一通电话，十五分钟就能定。', en: 'Not enough to judge, not enough to reject. Use the follow-ups below on a fifteen-minute call.' },
    verdictNoB: { zh: '这份简历里没有可验证的判断力痕迹。除非有其他渠道的强推荐，否则不值得占用一场面试。', en: 'No verifiable trace of judgement here. Unless there is a strong referral elsewhere, it does not warrant an interview slot.' },
    compareTitle: { zh: '候选人对比', en: 'Side by side' },
    compareNote: {
      zh: '重点不是看谁总分高，是看"验证"那一行——那一列是 1 分的人，你要为他的每一份产出兜底。',
      en: 'Do not read this for the highest total. Read the "verify" row: whoever scores 1 there is someone whose every output you will personally backstop.'
    },
    compareEmpty: { zh: '再加一位候选人就能横向对比了。', en: 'Add one more candidate to compare side by side.' },
    rowResume: { zh: '简历分', en: 'Resume' },
    rowTotal: { zh: '现场总分', en: 'Live total' },
    rowDecision: { zh: '结论', en: 'Decision' },
    open: { zh: '打开', en: 'Open' },
    footer: {
      zh: '这套工具不收集任何数据。用得上就拿走，改成你自己的版本。',
      en: 'This toolkit collects nothing. Take it, and make it yours.'
    },
    /* interview mode */
    ivStepOf: { zh: '第 {a} / {b} 步', en: 'Step {a} of {b}' },
    ivPrev: { zh: '← 上一步', en: '← Back' },
    ivNext: { zh: '下一步 →', en: 'Next →' },
    ivOpenTitle: { zh: '这一场你要评估的是品味', en: 'This session is about taste' },
    ivOpenBody: {
      zh: '不是他会什么，是他能不能品味别人做出来的东西。三件事贯穿全程：他拒绝了什么、他凭什么拒绝、他怎么知道自己是对的。\n\n笔记随时可以记，按 → 进入下一步，按 Esc 退出。',
      en: 'Not what they know — whether they can judge someone else’s work. Three things run through the whole session: what they reject, on what grounds, and how they know they are right.\n\nNotes are always available. Press → to advance, Esc to exit.'
    },
    ivAsk: { zh: '简历追问', en: 'Resume follow-ups' },
    ivReview: { zh: '反向评审题', en: 'Reverse review' },
    ivWhy: { zh: '连问三次', en: 'Three times why' },
    ivCal: { zh: '品味校准', en: 'Calibration' },
    ivScore: { zh: '打分', en: 'Score' },
    ivClose: { zh: '收尾', en: 'Wrap up' },
    ivCloseBody: {
      zh: '给他 10 分钟问你问题——问题比答案更能暴露品味。然后当场下结论，不要拖到晚上，那时候你记得的只剩印象。',
      en: 'Give them ten minutes to ask you anything — questions expose taste better than answers do. Then decide in the room. By tonight all you will have left is an impression.'
    },
    ivDone: { zh: '完成，回到文档', en: 'Done — back to the doc' }
  };

  /* ------------------------------------------------------------------ *
   * Helpers
   * ------------------------------------------------------------------ */

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '<br><br>');
  }
  function fmt(pair, vals) {
    return t(pair).replace(/\{(\w+)\}/g, function (_, k) { return vals[k]; });
  }
  function uid() {
    return 'c' + (S.candidates.length + 1) + '-' + Math.random().toString(36).slice(2, 7);
  }
  function blankCandidate(name) {
    return { id: uid(), name: name || '', sigs: {}, scores: {}, theirQuestions: '', notes: '', decision: '' };
  }
  function cur() {
    var c = null;
    for (var i = 0; i < S.candidates.length; i++) { if (S.candidates[i].id === S.active) c = S.candidates[i]; }
    if (!c) {
      if (!S.candidates.length) S.candidates.push(blankCandidate(''));
      c = S.candidates[0];
      S.active = c.id;
    }
    return c;
  }
  function displayName(c) {
    return c.name || t(UI.unnamed);
  }

  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(S)); } catch (e) {}
  }
  function load() {
    var p;
    try {
      var raw = localStorage.getItem(STORE);
      if (!raw) return;
      p = JSON.parse(raw);
    } catch (e) { return; }

    /* v1 kept one candidate's data flat on the root object. */
    if (!p.candidates && (p.sigs || p.scores || p.candidate)) {
      var c = blankCandidate(p.candidate || '');
      c.sigs = p.sigs || {};
      c.scores = p.scores || {};
      c.theirQuestions = p.theirQuestions || '';
      c.decision = p.decision || '';
      p.candidates = [c];
      p.active = c.id;
    }
    Object.keys(p).forEach(function (k) { if (k in S) S[k] = p[k]; });
    if (!Array.isArray(S.candidates)) S.candidates = [];
    S.candidates = S.candidates.filter(function (x) { return x && x.id; });
    S.candidates.forEach(function (x) {
      x.sigs = x.sigs || {}; x.scores = x.scores || {};
      x.theirQuestions = x.theirQuestions || ''; x.notes = x.notes || ''; x.decision = x.decision || '';
    });
  }

  var toastTimer;
  function toast(msg) {
    var n = document.getElementById('toast');
    n.textContent = msg;
    n.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { n.classList.remove('is-on'); }, 1600);
  }
  function copyText(text) {
    var done = function () { toast(t(UI.copied)); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else { fallbackCopy(text, done); }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
  function levelObj(key) {
    for (var i = 0; i < LEVELS.length; i++) { if (LEVELS[i].key === key) return LEVELS[i]; }
    return LEVELS[1];
  }
  function roleName(key) {
    for (var i = 0; i < ROLES.length; i++) { if (ROLES[i].key === key) return t(ROLES[i].name); }
    return key;
  }
  function flash(ids) {
    ids.forEach(function (id) {
      var n = document.getElementById(id);
      if (!n) return;
      n.classList.remove('is-flash');
      void n.offsetWidth;
      n.classList.add('is-flash');
    });
  }

  /* ------------------------------------------------------------------ *
   * Computation
   * ------------------------------------------------------------------ */

  function quizLevel() {
    var vals = LEVEL_QUIZ.map(function (q) { return S.quiz[q.id]; }).filter(function (v) { return !!v; });
    if (vals.length < LEVEL_QUIZ.length) return null;
    var avg = vals.reduce(function (a, b) { return a + b; }, 0) / vals.length;
    if (avg < 1.75) return 'L1';
    if (avg < 2.5) return 'L2';
    return 'L3';
  }

  function resumeScore(c) {
    c = c || cur();
    var list = signalsFor(S.role), score = 0, max = 0;
    list.forEach(function (s) {
      if (s.pol === '+') {
        max += s.w;
        if (c.sigs[s.id]) score += s.w;
      } else if (c.sigs[s.id]) {
        score -= s.w;
      }
    });
    return { score: score, max: max, touched: Object.keys(c.sigs).some(function (k) { return c.sigs[k]; }) };
  }

  function resumeVerdict(score) {
    if (score >= 7) return { tone: 'tone-good', head: UI.verdictGood, body: UI.verdictGoodB };
    if (score >= 2) return { tone: 'tone-warn', head: UI.verdictAsk, body: UI.verdictAskB };
    return { tone: 'tone-bad', head: UI.verdictNo, body: UI.verdictNoB };
  }

  function followUps(c) {
    c = c || cur();
    var list = signalsFor(S.role), out = [];
    list.forEach(function (s) {
      var missing = (s.pol === '+' && !c.sigs[s.id]);
      var present = (s.pol === '-' && c.sigs[s.id]);
      if (missing || present) out.push({ w: s.w + (present ? 1 : 0), ask: s.ask, why: s.t, kind: present ? '-' : '+' });
    });
    out.sort(function (a, b) { return b.w - a.w; });
    return out.slice(0, 4);
  }

  function scoreTotal(c) {
    c = c || cur();
    var sum = 0, n = 0;
    SCORE_DIMS.forEach(function (d) {
      if (c.scores[d.id]) { sum += c.scores[d.id]; n++; }
    });
    return { sum: sum, n: n, complete: n === SCORE_DIMS.length };
  }

  function scoreRead(sum) {
    for (var i = 0; i < SCORE_READS.length; i++) { if (sum >= SCORE_READS[i].min) return SCORE_READS[i]; }
    return SCORE_READS[SCORE_READS.length - 1];
  }

  /* How far through the six modules this candidate is. */
  function progress() {
    var c = cur(), done = 0;
    if (quizLevel()) done++;
    if (resumeScore(c).touched) done++;
    done++; /* module 3 is reference material — always "ready" */
    if (scoreTotal(c).n) done++;
    if (c.theirQuestions) done++;
    if (c.decision) done++;
    return { done: done, total: 6 };
  }

  /* ------------------------------------------------------------------ *
   * Document rendering
   * ------------------------------------------------------------------ */

  var MODULES = [
    { id: 'm1', num: '①', title: UI.m1, sub: UI.m1sub },
    { id: 'm2', num: '②', title: UI.m2, sub: UI.m2sub },
    { id: 'm3', num: '③', title: UI.m3, sub: UI.m3sub },
    { id: 'm4', num: '④', title: UI.m4, sub: UI.m4sub },
    { id: 'm5', num: '⑤', title: UI.m5, sub: UI.m5sub },
    { id: 'm6', num: '⑥', title: UI.m6, sub: UI.m6sub }
  ];

  function body(id) { return document.querySelector('#' + id + ' .module-body'); }

  function buildShell() {
    document.getElementById('app').innerHTML = MODULES.map(function (m) {
      return '<section class="module" id="' + m.id + '">' +
        '<div class="module-num">' + m.num + '</div>' +
        '<h2></h2><p class="module-sub"></p><div class="module-body"></div></section>';
    }).join('');
  }

  function renderHeaders() {
    MODULES.forEach(function (m) {
      document.querySelector('#' + m.id + ' h2').textContent = t(m.title);
      document.querySelector('#' + m.id + ' .module-sub').textContent = t(m.sub);
    });
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      if (UI[k]) n.textContent = t(UI[k]);
    });
    document.documentElement.lang = (S.lang === 'zh' ? 'zh-CN' : 'en');
  }

  /* --- status pill in the top bar --- */
  function renderStatus() {
    var c = cur(), st = scoreTotal(c), pr = progress();
    var bits = [displayName(c)];
    if (st.n) bits.push(st.sum + '/16');
    bits.push(pr.done + '/' + pr.total);
    document.getElementById('status').innerHTML =
      '<span class="status-name">' + esc(bits[0]) + '</span>' +
      bits.slice(1).map(function (b) { return '<span class="status-bit">' + esc(b) + '</span>'; }).join('');
  }

  /* --- left rail --- */
  function renderRail() {
    var titles = UI.navTitles[S.lang] || UI.navTitles.zh;
    document.getElementById('rail').innerHTML = MODULES.map(function (m, i) {
      return '<a href="#' + m.id + '" data-rail="' + m.id + '"><span class="rail-dot"></span>' +
        '<span class="rail-label">' + esc(titles[i]) + '</span></a>';
    }).join('');
    syncRail();
  }
  function syncRail() {
    var y = window.scrollY + 200, active = MODULES[0].id;
    MODULES.forEach(function (m) {
      var n = document.getElementById(m.id);
      if (n && n.offsetTop <= y) active = m.id;
    });
    document.querySelectorAll('#rail a').forEach(function (a) {
      a.classList.toggle('is-on', a.getAttribute('data-rail') === active);
    });
  }

  /* --- knobs + candidates --- */
  function renderKnobs() {
    var n = document.getElementById('knobs');
    n.innerHTML =
      '<div><div class="knob-label">' + esc(t(UI.knobRole)) + '</div><div class="chips">' +
      ROLES.map(function (r) {
        return '<button type="button" class="chip" data-role="' + r.key + '" aria-pressed="' + (S.role === r.key) + '">' + esc(t(r.name)) + '</button>';
      }).join('') + '</div></div>' +
      '<div><div class="knob-label">' + esc(t(UI.knobLevel)) + '</div><div class="chips">' +
      LEVELS.map(function (l) {
        return '<button type="button" class="chip" data-level="' + l.key + '" aria-pressed="' + (S.level === l.key) + '">' + l.key + ' · ' + esc(t(l.name)) + '</button>';
      }).join('') + '</div></div>' +
      '<div class="knob-people"><div class="knob-label">' + esc(t(UI.knobPeople)) + '</div><div class="chips">' +
      S.candidates.map(function (c) {
        return '<button type="button" class="chip" data-person="' + c.id + '" aria-pressed="' + (S.active === c.id) + '">' + esc(displayName(c)) + '</button>';
      }).join('') +
      '<button type="button" class="chip chip-add" id="addPerson">' + esc(t(UI.addPerson)) + '</button>' +
      '<span class="chip-tools">' +
      '<button type="button" class="linkbtn" id="renamePerson">' + esc(t(UI.renamePerson)) + '</button>' +
      '<button type="button" class="linkbtn" id="delPerson">' + esc(t(UI.delPerson)) + '</button>' +
      '<button type="button" class="linkbtn" id="resetPerson">' + esc(t(UI.reset)) + '</button>' +
      '</span></div></div>';

    n.querySelectorAll('[data-role]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.role = b.getAttribute('data-role');
        save(); renderKnobs(); renderM2(); renderM3(); renderM5(); renderM6(); renderStatus();
        flash(['m2', 'm3', 'm5']);
      });
    });
    n.querySelectorAll('[data-level]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.level = b.getAttribute('data-level');
        save(); renderKnobs(); renderM1(); renderM3();
        flash(['m1', 'm3']);
      });
    });
    n.querySelectorAll('[data-person]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.active = b.getAttribute('data-person');
        save(); renderAllCandidate();
        flash(['m2', 'm4', 'm5', 'm6']);
      });
    });
    n.querySelector('#addPerson').addEventListener('click', function () {
      var name = window.prompt(t(UI.namePrompt), '');
      if (name === null) return;
      var c = blankCandidate(name.trim());
      S.candidates.push(c);
      S.active = c.id;
      save(); renderAllCandidate();
    });
    n.querySelector('#renamePerson').addEventListener('click', function () {
      var c = cur();
      var name = window.prompt(t(UI.namePrompt), c.name);
      if (name === null) return;
      c.name = name.trim();
      save(); renderAllCandidate();
    });
    n.querySelector('#delPerson').addEventListener('click', function () {
      if (!window.confirm(t(UI.delConfirm))) return;
      var id = cur().id;
      S.candidates = S.candidates.filter(function (x) { return x.id !== id; });
      S.active = S.candidates.length ? S.candidates[0].id : null;
      save(); renderAllCandidate();
    });
    n.querySelector('#resetPerson').addEventListener('click', function () {
      if (!window.confirm(t(UI.resetConfirm))) return;
      var c = cur();
      c.sigs = {}; c.scores = {}; c.theirQuestions = ''; c.notes = ''; c.decision = '';
      save(); renderAllCandidate();
    });
  }

  /* --- module 1 --- */
  function renderM1() {
    var computed = quizLevel();
    var html = '<div class="card">' + LEVEL_QUIZ.map(function (q) {
      return '<div class="dim"><div class="dim-title">' + esc(t(q.q)) + '</div><div class="scale" style="grid-template-columns:repeat(' + q.opts.length + ',1fr);margin-top:10px">' +
        q.opts.map(function (o) {
          var checked = S.quiz[q.id] === o.v ? ' checked' : '';
          return '<label><input type="radio" name="' + q.id + '" value="' + o.v + '"' + checked + '><span>' + esc(t(o.t)) + '</span></label>';
        }).join('') + '</div></div>';
    }).join('') + '</div>';

    if (computed) {
      var lo = levelObj(computed);
      html += '<div class="verdict"><span class="verdict-tag tone-info">' + esc(t(UI.quizResult)) + '</span>' +
        '<div class="verdict-head">' + computed + ' · ' + esc(t(lo.name)) + '</div>' +
        '<div class="verdict-body">' + esc(t(lo.desc)) + '</div>' +
        (computed !== S.level ? '<div class="verdict-body" style="margin-top:10px;color:var(--kelly-rust-text)">' + esc(t(UI.quizMismatch)) + '</div>' : '') +
        '</div>';
    }

    html += '<div class="ladder" style="margin-top:16px">' + LEVELS.map(function (l) {
      return '<div class="rung' + (S.level === l.key ? ' is-active' : '') + '">' +
        '<div><div class="rung-key">' + l.key + '</div></div>' +
        '<div><div class="rung-name">' + esc(t(l.name)) + '</div>' +
        '<div class="rung-desc">' + esc(t(l.desc)) + '</div>' +
        '<div class="rung-ai">' + esc(t(l.ai)) + '</div></div></div>';
    }).join('') + '</div>';

    var b = body('m1');
    b.innerHTML = html;
    b.querySelectorAll('input[type=radio]').forEach(function (r) {
      r.addEventListener('change', function () {
        S.quiz[r.name] = parseInt(r.value, 10);
        save(); renderM1(); renderStatus();
      });
    });
  }

  /* --- module 2 --- */
  function renderM2() {
    var c = cur(), list = signalsFor(S.role);
    function group(pol, title, cls) {
      return '<div class="card"><div class="sig-group-title ' + cls + '">' + esc(t(title)) + '</div>' +
        list.filter(function (s) { return s.pol === pol; }).map(function (s) {
          return '<label class="check"><input type="checkbox" data-sig="' + s.id + '"' + (c.sigs[s.id] ? ' checked' : '') + '>' +
            '<span class="check-body"><span class="check-text">' + esc(t(s.t)) + '</span>' +
            '<span class="check-hint">' + esc(t(s.hint)) + '</span></span></label>';
        }).join('') + '</div>';
    }

    var r = resumeScore(c), v = resumeVerdict(r.score), fu = followUps(c);
    var html = group('+', UI.posTitle, 'sig-pos') + group('-', UI.negTitle, 'sig-neg') +
      '<div class="verdict"><span class="verdict-tag ' + v.tone + '">' + esc(t(v.head)) + '</span>' +
      '<div class="verdict-body">' + esc(t(v.body)) + '</div>' +
      '<div class="score-line">score ' + r.score + ' / ' + r.max + '</div></div>' +
      '<div class="card" style="margin-top:16px"><h3>' + esc(t(UI.followups)) + '</h3>' +
      '<div class="card-note">' + esc(t(UI.followupsNote)) + '</div><div class="qblock">' +
      fu.map(function (f, i) {
        return '<div class="qitem"><div class="qnum">Q' + (i + 1) + '</div><div><div class="qtext">' + esc(t(f.ask)) + '</div>' +
          '<div class="qwhy">' + (f.kind === '-' ? '⚑ ' : '○ ') + esc(t(f.why)) + '</div></div></div>';
      }).join('') + '</div>' +
      '<div class="actions no-print"><button type="button" class="btn" id="copyFu">' + esc(t(UI.copy)) + '</button></div></div>';

    var b = body('m2');
    b.innerHTML = html;
    b.querySelectorAll('[data-sig]').forEach(function (x) {
      x.addEventListener('change', function () {
        cur().sigs[x.getAttribute('data-sig')] = x.checked;
        save(); renderM2(); renderStatus(); renderM6();
      });
    });
    b.querySelector('#copyFu').addEventListener('click', function () {
      copyText(fu.map(function (f, i) { return (i + 1) + '. ' + t(f.ask); }).join('\n') + '\n\n— ' + MARK);
    });
  }

  /* --- module 3 --- */
  function artName(k, a, i) {
    return t(a.name || TASTE[S.role].abc[i].name);
  }

  function caseForCandidate(k) {
    return t(k.brief) + '\n\n' + k.artifacts.map(function (a) {
      return '——— ' + a.key + ' ———\n\n' + t(a.body);
    }).join('\n\n') + '\n\n— ' + MARK;
  }

  function tasteReviewCard(k) {
    return '<div class="brief"><div class="brief-label">' + esc(t(UI.briefLabel)) + '</div>' +
      '<div class="brief-body">' + md(t(k.brief)) + '</div></div>' +
      '<div class="say"><span class="say-label">' + esc(t(UI.scriptLabel)) + '</span>' + esc(t(k.say)) + '</div>' +
      '<div class="arts"><div class="art-tabs">' +
      k.artifacts.map(function (a, i) {
        return '<button type="button" class="art-tab" data-art="' + i + '" aria-pressed="' + (i === 0) + '">' +
          '<span class="art-key">' + a.key + '</span>' +
          '<span class="art-name">' + esc(artName(k, a, i)) + '</span></button>';
      }).join('') + '</div>' +
      k.artifacts.map(function (a, i) {
        return '<pre class="art-body' + (a.mono ? ' is-code' : '') + '" data-artbody="' + i + '"' + (i === 0 ? '' : ' hidden') + '>' +
          esc(t(a.body)) + '</pre>';
      }).join('') + '</div>' +
      '<div class="card-note" style="margin-top:10px">' + esc(t(UI.artNote)) + '</div>' +
      '<div class="actions no-print"><button type="button" class="btn" data-copycase="' + k.id + '">' + esc(t(UI.copyCase)) + '</button></div>';
  }

  function checklistHtml(k) {
    if (!k.checklist) return '';
    return '<div class="card checklist"><h3>' + esc(t(k.checklist.title)) + '</h3><ol class="check-list">' +
      k.checklist.items.map(function (x) { return '<li>' + md(t(x)) + '</li>'; }).join('') + '</ol></div>';
  }

  function bindCase(root) {
    root.querySelectorAll('[data-art]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = b.getAttribute('data-art');
        root.querySelectorAll('[data-art]').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x.getAttribute('data-art') === i));
        });
        root.querySelectorAll('[data-artbody]').forEach(function (x) {
          x.hidden = x.getAttribute('data-artbody') !== i;
        });
      });
    });
    root.querySelectorAll('[data-copycase]').forEach(function (cc) {
      var k = caseById(cc.getAttribute('data-copycase'));
      cc.addEventListener('click', function () { copyText(caseForCandidate(k)); });
    });
  }
  function tasteAnswerHtml(k) {
    return '<div class="card-note" style="margin-bottom:8px"><strong>' + esc(t(k.order || TASTE_ANSWER.order)) + '</strong></div>' +
      '<div class="qblock">' + (k.read || TASTE_ANSWER.read).map(function (x) {
        return '<div class="qitem"><div class="qnum">·</div><div class="qtext">' + md(t(x)) + '</div></div>';
      }).join('') + '</div>' +
      '<div class="sig-group-title" style="margin-top:20px">' + esc(t(UI.tellsTitle)) + '</div>' +
      '<div class="tells">' + k.tells.map(function (x) {
        return '<div class="tell"><div class="tell-heard ' + x.tone + '">' + esc(t(x.heard)) + '</div>' +
          '<div class="tell-verdict">' + esc(t(x.verdict)) + '</div></div>';
      }).join('') + '</div>';
  }
  function threeWhyHtml() {
    return '<div class="say"><span class="say-label">' + esc(t(UI.scriptLabel)) + '</span>' +
      SAY.why.map(function (x) { return esc(t(x)); }).join('<br>') + '</div>' +
      '<div class="compare" style="margin-top:16px">' +
      '<div class="compare-col compare-good"><h4>' + esc(t(UI.goodGround)) + '</h4><ul>' +
      THREE_WHY.good.map(function (x) { return '<li>' + md(t(x)) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="compare-col compare-bad"><h4>' + esc(t(UI.badGround)) + '</h4><ul>' +
      THREE_WHY.bad.map(function (x) { return '<li>' + md(t(x)) + '</li>'; }).join('') + '</ul></div></div>';
  }
  function calQuestionsHtml() {
    return '<div class="say"><span class="say-label">' + esc(t(UI.scriptLabel)) + '</span>' + esc(t(SAY.cal)) + '</div>' +
      '<div class="qblock">' + CALIBRATION.questions.map(function (q, i) {
      return '<div class="qitem"><div class="qnum">Q' + (i + 1) + '</div><div class="qtext">' + esc(t(q)) + '</div></div>';
    }).join('') + '</div>';
  }

  function renderM3() {
    var html = '';
    if (S.level === 'L1') {
      html += '<div class="verdict" style="margin-bottom:16px"><span class="verdict-tag tone-warn">L1</span>' +
        '<div class="verdict-body">' + esc(t(UI.l1note)) + '</div></div>';
    }
    var cases = CASES[S.role], n = 0;
    cases.forEach(function (k) {
      n++;
      html += '<div class="card"><h3>' + secNo(n) + esc(t(UI.tasteReverse)) +
        (k.lens ? '<span class="lens">' + esc(t(k.lens)) + '</span>' : '') + '</h3>' +
        '<div class="card-note">' + esc(t(k.note || UI.tasteReverseSub)) + '</div>' + tasteReviewCard(k) +
        '<div style="margin-top:18px"><div class="sig-group-title">' + esc(t(UI.howRead)) + '</div>' + tasteAnswerHtml(k) +
        '<div class="card-note" style="margin-top:12px">' + esc(t(TASTE_ANSWER.howto)) + '</div></div></div>';
      html += checklistHtml(k);
    });

    html += '<div class="card"><h3>' + secNo(++n) + esc(t(UI.tasteWhy)) + '</h3>' +
      '<div class="card-note">' + esc(t(THREE_WHY.intro)) + '</div>' + threeWhyHtml() +
      '<div class="card-note" style="margin-top:14px">' + esc(t(THREE_WHY.note)) + '</div></div>';

    html += '<div class="card"><h3>' + secNo(++n) + esc(t(UI.tasteCal)) + '</h3>' +
      '<div class="card-note">' + esc(t(CALIBRATION.setup[S.role])) + '</div>' +
      '<div style="margin-top:14px"><div class="sig-group-title">' + esc(t(UI.calQuestions)) + '</div>' + calQuestionsHtml() +
      '<div class="card-note" style="margin-top:12px">' + md(t(CALIBRATION.key)) + '</div></div></div>';

    if (S.level === 'L3') {
      html += '<div class="card" style="border-color:var(--kelly-rust)"><h3>' + esc(t(L3_EXTRA.title)) + '</h3>' +
        '<div class="say"><span class="say-label">' + esc(t(UI.scriptLabel)) + '</span>' + esc(t(SAY.l3)) + '</div>' +
        '<div class="card-note" style="margin-top:8px">' + md(t(L3_EXTRA.body)) + '</div></div>';
    }
    var b3 = body('m3');
    b3.innerHTML = html;
    bindCase(b3);
  }

  /* --- module 4 --- */
  function scoreDimsHtml(big) {
    var c = cur();
    return SCORE_DIMS.map(function (dim) {
      var v = c.scores[dim.id];
      var flag = (v && v <= 2) ? '<div class="qwhy" style="color:var(--kelly-rust-text);margin-top:8px">' + esc(t(dim.low)) + '</div>' : '';
      return '<div class="dim"><div class="dim-title">' + esc(t(dim.title)) + '</div>' +
        '<div class="dim-watch">' + esc(t(dim.watch)) + '</div><div class="scale' + (big ? ' scale-big' : '') + '">' +
        dim.anchors.map(function (a, i) {
          var n = i + 1;
          return '<label><input type="radio" name="sc_' + dim.id + '" value="' + n + '"' + (v === n ? ' checked' : '') + '>' +
            '<span><span class="scale-n">' + n + '</span>' + esc(t(a)) + '</span></label>';
        }).join('') + '</div>' + flag + '</div>';
    }).join('');
  }
  function bindScoreDims(root, after) {
    root.querySelectorAll('input[name^=sc_]').forEach(function (r) {
      r.addEventListener('change', function () {
        cur().scores[r.name.slice(3)] = parseInt(r.value, 10);
        save(); after();
      });
    });
  }

  function renderM4() {
    var st = scoreTotal();
    var html = '<div class="card" style="border-left:3px solid var(--kelly-moss)"><div class="card-note">' + md(t(SCORE_INTRO)) + '</div></div>' +
      '<div class="card">' + scoreDimsHtml(false) + '</div>';
    if (st.n > 0) {
      var read = scoreRead(st.sum);
      html += '<div class="verdict"><span class="verdict-tag ' + read.tone + '">' + st.sum + ' / 16</span>' +
        '<div class="verdict-head">' + esc(t(read.head)) + '</div>' +
        '<div class="verdict-body">' + esc(t(read.body)) + '</div>' +
        (!st.complete ? '<div class="score-line">' + (SCORE_DIMS.length - st.n) + ' ' + esc(t(UI.unscored)) + '</div>' : '') + '</div>';
    }
    var b = body('m4');
    b.innerHTML = html;
    bindScoreDims(b, function () { renderM4(); renderStatus(); renderM6(); });
  }

  /* --- module 5 --- */
  function goodQuestions() {
    return REVERSE.good.general.concat(S.role === 'general' ? [] : REVERSE.good[S.role]);
  }
  function renderM5() {
    var c = cur();
    var html = '<div class="card" style="border-left:3px solid var(--kelly-moss)"><div class="card-note">' + md(t(REVERSE.intro)) + '</div></div>' +
      '<div class="card"><div class="compare">' +
      '<div class="compare-col compare-good"><h4>' + esc(t(UI.goodQ)) + '</h4><ul>' +
      goodQuestions().map(function (x) { return '<li>' + esc(t(x)) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="compare-col compare-bad"><h4>' + esc(t(UI.badQ)) + '</h4><ul>' +
      REVERSE.bad.map(function (x) { return '<li>' + esc(t(x)) + '</li>'; }).join('') + '</ul></div>' +
      '</div><div class="field" style="margin-top:18px"><label class="field-label" for="theirQ">' + esc(t(UI.theirQ)) + '</label>' +
      '<textarea id="theirQ" rows="4" placeholder="' + esc(t(UI.theirQPh)) + '"></textarea></div></div>';
    var b = body('m5');
    b.innerHTML = html;
    var ta = b.querySelector('#theirQ');
    ta.value = c.theirQuestions || '';
    ta.addEventListener('input', function () { cur().theirQuestions = ta.value; save(); renderStatus(); });
  }

  /* --- module 6 --- */
  function renderCompare() {
    if (S.candidates.length < 2) {
      return '<div class="card"><h3>' + esc(t(UI.compareTitle)) + '</h3>' +
        '<div class="card-note">' + esc(t(UI.compareEmpty)) + '</div></div>';
    }
    var rows = [];
    rows.push({ label: t(UI.rowResume), get: function (c) { var r = resumeScore(c); return r.score + '/' + r.max; }, cls: '' });
    SCORE_DIMS.forEach(function (d) {
      rows.push({
        label: t(d.title), dim: d.id,
        get: function (c) { return c.scores[d.id] ? String(c.scores[d.id]) : '–'; },
        cls: d.id === 'verify' ? 'row-key' : ''
      });
    });
    rows.push({ label: t(UI.rowTotal), get: function (c) { var s = scoreTotal(c); return s.n ? s.sum + '/16' : '–'; }, cls: 'row-total' });
    rows.push({
      label: t(UI.rowDecision), get: function (c) {
        var d = UI.decisions.filter(function (x) { return x.v === c.decision; })[0];
        return d ? t(d.t) : '–';
      }, cls: ''
    });

    return '<div class="card"><h3>' + esc(t(UI.compareTitle)) + '</h3>' +
      '<div class="card-note">' + esc(t(UI.compareNote)) + '</div>' +
      '<div class="table-wrap"><table class="cmp"><thead><tr><th></th>' +
      S.candidates.map(function (c) {
        return '<th' + (c.id === S.active ? ' class="is-active"' : '') + '>' +
          '<button type="button" class="linkbtn" data-open="' + c.id + '">' + esc(displayName(c)) + '</button></th>';
      }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr class="' + r.cls + '"><th>' + esc(r.label) + '</th>' +
          S.candidates.map(function (c) {
            var v = r.get(c);
            var warn = (r.dim && c.scores[r.dim] && c.scores[r.dim] <= 2) ? ' class="cell-warn"' : '';
            return '<td' + warn + '>' + esc(v) + '</td>';
          }).join('') + '</tr>';
      }).join('') + '</tbody></table></div></div>';
  }

  function renderM6() {
    var c = cur();
    var html = renderCompare() + '<div class="card">' +
      '<div class="field"><label class="field-label" for="cand">' + esc(t(UI.candidate)) + '</label>' +
      '<input type="text" id="cand" placeholder="' + esc(t(UI.candidatePh)) + '"></div>' +
      '<div class="field"><span class="field-label">' + esc(t(UI.decision)) + '</span><div class="scale">' +
      UI.decisions.map(function (d) {
        return '<label><input type="radio" name="decision" value="' + d.v + '"' + (c.decision === d.v ? ' checked' : '') + '><span>' + esc(t(d.t)) + '</span></label>';
      }).join('') + '</div></div>' +
      '<div class="actions no-print">' +
      '<button type="button" class="btn btn-primary" id="buildSheet">' + esc(t(UI.build)) + '</button>' +
      '<button type="button" class="btn" id="copySheet">' + esc(t(UI.copyMd)) + '</button>' +
      '<button type="button" class="btn btn-ghost" id="printSheet">' + esc(t(UI.print)) + '</button>' +
      '<span class="action-note">' + esc(t(UI.autosave)) + '</span></div>' +
      '<pre class="sheet" id="sheet" hidden></pre></div>';

    var b = body('m6');
    b.innerHTML = html;
    b.querySelectorAll('[data-open]').forEach(function (x) {
      x.addEventListener('click', function () {
        S.active = x.getAttribute('data-open');
        save(); renderAllCandidate();
      });
    });
    var ci = b.querySelector('#cand');
    ci.value = c.name || '';
    ci.addEventListener('input', function () {
      cur().name = ci.value;
      save(); renderKnobs(); renderStatus();
      var th = b.querySelector('[data-open="' + cur().id + '"]');
      if (th) th.textContent = displayName(cur());
    });
    b.querySelectorAll('input[name=decision]').forEach(function (r) {
      r.addEventListener('change', function () {
        cur().decision = r.value;
        save(); renderM6(); renderStatus();
      });
    });
    b.querySelector('#buildSheet').addEventListener('click', function () {
      var p = b.querySelector('#sheet');
      p.textContent = buildSheet();
      p.hidden = false;
      p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    b.querySelector('#copySheet').addEventListener('click', function () { copyText(buildSheet()); });
    b.querySelector('#printSheet').addEventListener('click', function () {
      var p = b.querySelector('#sheet');
      p.textContent = buildSheet();
      p.hidden = false;
      setTimeout(function () { window.print(); }, 60);
    });
  }

  /* ------------------------------------------------------------------ *
   * Interview mode — one thing on screen at a time, for use in the room
   * ------------------------------------------------------------------ */

  var IV = { on: false, i: 0, reveal: {} };

  function ivSteps() {
    var steps = [
      {
        key: 'open', title: UI.ivOpenTitle,
        html: function () { return '<div class="iv-lead">' + md(t(UI.ivOpenBody)) + '</div>'; }
      },
      {
        key: 'ask', title: UI.ivAsk,
        html: function () {
          return '<div class="qblock iv-q">' + followUps().map(function (f, i) {
            return '<div class="qitem"><div class="qnum">Q' + (i + 1) + '</div><div><div class="qtext">' + esc(t(f.ask)) + '</div>' +
              '<div class="qwhy">' + esc(t(f.why)) + '</div></div></div>';
          }).join('') + '</div>';
        }
      },
      /* placeholder — replaced below by one step per case */
      {
        key: 'why', title: UI.ivWhy,
        html: function () { return '<div class="iv-lead">' + esc(t(THREE_WHY.intro)) + '</div>' + threeWhyHtml(); }
      },
      {
        key: 'cal', title: UI.ivCal,
        html: function () { return '<div class="iv-lead">' + esc(t(CALIBRATION.setup[S.role])) + '</div>' + calQuestionsHtml(); }
      }
    ];

    CASES[S.role].slice().reverse().forEach(function (k) {
      steps.splice(2, 0, {
        key: 'review-' + k.id,
        title: k.lens ? { zh: t(UI.ivReview) + ' · ' + t(k.lens), en: t(UI.ivReview) + ' · ' + t(k.lens) } : UI.ivReview,
        html: function () {
          return '<div class="iv-lead">' + esc(t(k.note || UI.tasteReverseSub)) + '</div>' + tasteReviewCard(k) +
            '<div class="iv-reveal"><button type="button" class="btn" data-reveal="' + k.id + '">' +
            esc(t(IV.reveal[k.id] ? UI.hideAnswer : UI.showAnswer)) + '</button>' +
            (IV.reveal[k.id] ? '<div style="margin-top:14px">' + tasteAnswerHtml(k) + '</div>' : '') + '</div>';
        }
      });
    });

    if (S.level === 'L3') {
      steps.push({
        key: 'l3', title: L3_EXTRA.title,
        html: function () {
          return '<div class="say"><span class="say-label">' + esc(t(UI.scriptLabel)) + '</span>' + esc(t(SAY.l3)) + '</div>' +
            '<div class="iv-lead">' + md(t(L3_EXTRA.body)) + '</div>';
        }
      });
    }

    steps.push({
      key: 'score', title: UI.ivScore,
      html: function () {
        var st = scoreTotal();
        return '<div class="iv-lead">' + md(t(SCORE_INTRO)) + '</div>' + scoreDimsHtml(true) +
          (st.n ? '<div class="verdict" style="margin-top:18px"><span class="verdict-tag ' + scoreRead(st.sum).tone + '">' + st.sum + ' / 16</span>' +
            '<div class="verdict-head">' + esc(t(scoreRead(st.sum).head)) + '</div></div>' : '');
      }
    });

    steps.push({
      key: 'close', title: UI.ivClose,
      html: function () {
        var c = cur();
        return '<div class="iv-lead">' + esc(t(UI.ivCloseBody)) + '</div>' +
          '<ul class="iv-list">' + goodQuestions().map(function (x) { return '<li>' + esc(t(x)) + '</li>'; }).join('') + '</ul>' +
          '<div class="field" style="margin-top:20px"><span class="field-label">' + esc(t(UI.decision)) + '</span>' +
          '<div class="scale scale-big">' + UI.decisions.map(function (d) {
            return '<label><input type="radio" name="decision" value="' + d.v + '"' + (c.decision === d.v ? ' checked' : '') + '><span>' + esc(t(d.t)) + '</span></label>';
          }).join('') + '</div></div>' +
          '<div class="actions" style="margin-top:18px"><button type="button" class="btn btn-primary" id="ivDone">' + esc(t(UI.ivDone)) + '</button></div>';
      }
    });

    return steps;
  }

  function openInterview() {
    IV.on = true;
    IV.i = 0;
    document.getElementById('iv').hidden = false;
    document.body.classList.add('iv-open');
    renderInterview();
  }
  function closeInterview() {
    IV.on = false;
    document.getElementById('iv').hidden = true;
    document.body.classList.remove('iv-open');
    renderAllCandidate();
  }
  function ivGo(delta) {
    var steps = ivSteps();
    var next = IV.i + delta;
    if (next < 0 || next >= steps.length) return;
    IV.i = next;
    renderInterview();
    var st = document.querySelector('.iv-stage');
    if (st) st.scrollTop = 0;
  }

  function renderInterview() {
    var steps = ivSteps(), step = steps[Math.min(IV.i, steps.length - 1)], c = cur();
    var L = levelObj(S.level);
    var root = document.getElementById('iv');

    root.innerHTML =
      '<div class="iv-bar">' +
      '<div class="iv-who"><strong>' + esc(displayName(c)) + '</strong>' +
      '<span>' + esc(roleName(S.role)) + ' · ' + L.key + ' ' + esc(t(L.name)) + '</span></div>' +
      '<div class="iv-dots">' + steps.map(function (s, i) {
        return '<button type="button" class="iv-dot' + (i === IV.i ? ' is-on' : '') + '" data-step="' + i + '" title="' + esc(t(s.title)) + '"></button>';
      }).join('') + '</div>' +
      '<button type="button" class="btn btn-ghost" id="ivExit">' + esc(t(UI.exitInterview)) + ' ✕</button>' +
      '</div>' +
      '<div class="iv-stage"><div class="iv-inner">' +
      '<div class="iv-step">' + fmt(UI.ivStepOf, { a: IV.i + 1, b: steps.length }) + '</div>' +
      '<h2 class="iv-title">' + esc(t(step.title)) + '</h2>' +
      step.html() + '</div></div>' +
      '<div class="iv-foot">' +
      '<div class="iv-nav">' +
      '<button type="button" class="btn" id="ivPrev"' + (IV.i === 0 ? ' disabled' : '') + '>' + esc(t(UI.ivPrev)) + '</button>' +
      '<button type="button" class="btn btn-primary" id="ivNext"' + (IV.i === steps.length - 1 ? ' disabled' : '') + '>' + esc(t(UI.ivNext)) + '</button>' +
      '</div>' +
      '<textarea id="ivNotes" rows="2" placeholder="' + esc(t(UI.notesPh)) + '"></textarea>' +
      '<div class="iv-mark">' + MARK + '</div>' +
      '</div>';

    var notes = root.querySelector('#ivNotes');
    notes.value = c.notes || '';
    notes.addEventListener('input', function () { cur().notes = notes.value; save(); });

    root.querySelector('#ivExit').addEventListener('click', closeInterview);
    root.querySelector('#ivPrev').addEventListener('click', function () { ivGo(-1); });
    root.querySelector('#ivNext').addEventListener('click', function () { ivGo(1); });
    root.querySelectorAll('[data-step]').forEach(function (d) {
      d.addEventListener('click', function () { IV.i = parseInt(d.getAttribute('data-step'), 10); renderInterview(); });
    });

    root.querySelectorAll('[data-reveal]').forEach(function (rev) {
      rev.addEventListener('click', function () {
        var id = rev.getAttribute('data-reveal');
        IV.reveal[id] = !IV.reveal[id];
        renderInterview();
      });
    });

    bindCase(root);
    bindScoreDims(root, function () { renderInterview(); });
    root.querySelectorAll('input[name=decision]').forEach(function (r) {
      r.addEventListener('change', function () { cur().decision = r.value; save(); renderInterview(); });
    });
    var done = root.querySelector('#ivDone');
    if (done) done.addEventListener('click', closeInterview);
  }

  /* ------------------------------------------------------------------ *
   * The one-pager
   * ------------------------------------------------------------------ */

  function buildSheet() {
    var zh = S.lang === 'zh';
    var c = cur(), L = levelObj(S.level), d = TASTE[S.role];
    var st = scoreTotal(c), r = resumeScore(c);
    var out = [];

    out.push('# ' + (zh ? 'AI 时代面试脚本' : 'AI-era interview script') + (c.name ? ' — ' + c.name : ''));
    out.push('');
    out.push((zh ? '岗位' : 'Role') + ': ' + roleName(S.role) + '　|　' +
      (zh ? '目标层级' : 'Target level') + ': ' + L.key + ' ' + t(L.name) + '　|　' + new Date().toISOString().slice(0, 10));
    out.push('');
    out.push('> ' + t(UI.thesis));
    out.push('');

    out.push('## ' + (zh ? '① 层级' : '① Level'));
    out.push('- ' + L.key + ' ' + t(L.name) + ' — ' + t(L.desc));
    var cq = quizLevel();
    if (cq && cq !== S.level) {
      out.push('- ⚠︎ ' + (zh ? '定级问答的结果是 ' : 'The level quiz says ') + cq + (zh ? '，与目标层级不一致。' : ', which does not match the target.'));
    }
    out.push('');

    out.push('## ' + (zh ? '② 简历' : '② Resume') + ' (score ' + r.score + '/' + r.max + ' — ' + t(resumeVerdict(r.score).head) + ')');
    followUps(c).forEach(function (f, i) {
      out.push((i + 1) + '. ' + t(f.ask));
      out.push('   - ' + (f.kind === '-' ? (zh ? '因为看到：' : 'because you saw: ') : (zh ? '因为缺少：' : 'because it is missing: ')) + t(f.why));
    });
    out.push('');

    out.push('## ' + (zh ? '③ 品味题' : '③ Taste tests'));
    var n = 0;
    CASES[S.role].forEach(function (kase) {
      n++;
      out.push('### 3.' + n + ' ' + t(UI.tasteReverse) + (kase.lens ? ' · ' + t(kase.lens) : ''));
      if (kase.note) out.push(t(kase.note));
      out.push('');
      out.push('**' + t(UI.scriptLabel) + '** ' + t(kase.say));
      out.push('');
      out.push('**' + t(UI.briefLabel) + '**');
      out.push('');
      out.push(t(kase.brief));
      kase.artifacts.forEach(function (a, i) {
        out.push('');
        out.push('**' + a.key + '** — ' + artName(kase, a, i) + (zh ? '（标签不要给候选人看）' : ' (do not show this label to the candidate)'));
        out.push('');
        out.push('```');
        out.push(t(a.body));
        out.push('```');
      });
      out.push('');
      out.push(t(kase.order || TASTE_ANSWER.order));
      (kase.read || TASTE_ANSWER.read).forEach(function (x) { out.push('- ' + t(x).replace(/\n/g, ' ')); });
      out.push('');
      out.push('**' + t(UI.tellsTitle) + '**');
      kase.tells.forEach(function (x) {
        out.push('- ' + t(x.heard));
        out.push('  → ' + t(x.verdict));
      });
      if (kase.checklist) {
        out.push('');
        out.push('**' + t(kase.checklist.title) + '**');
        kase.checklist.items.forEach(function (x, i) {
          out.push((i + 1) + '. ' + t(x).replace(/\*\*/g, ''));
        });
      }
      out.push('');
    });

    out.push('### 3.' + (++n) + ' ' + t(UI.tasteWhy));
    out.push(t(THREE_WHY.intro));
    SAY.why.forEach(function (x) { out.push('- ' + t(x)); });
    out.push('- ' + (zh ? '有品味会落在：' : 'Taste lands on: ') + THREE_WHY.good.map(function (x) { return t(x).replace(/\*\*/g, ''); }).join(' / '));
    out.push('- ' + (zh ? '没品味会落在：' : 'No taste lands on: ') + THREE_WHY.bad.map(function (x) { return t(x).replace(/\*\*/g, ''); }).join(' / '));
    out.push('');
    out.push('### 3.' + (++n) + ' ' + t(UI.tasteCal));
    out.push(t(CALIBRATION.setup[S.role]));
    out.push('**' + t(UI.scriptLabel) + '** ' + t(SAY.cal));
    CALIBRATION.questions.forEach(function (q, i) { out.push((i + 1) + '. ' + t(q)); });
    out.push('- ' + t(CALIBRATION.key).replace(/\*\*/g, '').replace(/\n\n/g, ' '));
    if (S.level === 'L3') {
      out.push('');
      out.push('### ' + t(L3_EXTRA.title));
      out.push('**' + t(UI.scriptLabel) + '** ' + t(SAY.l3));
      out.push('');
      out.push(t(L3_EXTRA.body).replace(/\*\*/g, ''));
    }
    out.push('');

    out.push('## ' + (zh ? '④ 现场评分' : '④ Live scorecard') + (st.n ? ' — ' + st.sum + '/16' : ''));
    out.push(t(SCORE_INTRO).replace(/\*\*/g, ''));
    out.push('');
    SCORE_DIMS.forEach(function (dim) {
      var v = c.scores[dim.id];
      out.push('- [' + (v ? v : ' ') + '/4] **' + t(dim.title) + '** — ' + t(dim.watch));
      dim.anchors.forEach(function (a, i) {
        out.push('    ' + (i + 1) + '. ' + t(a) + (v === i + 1 ? '  ←' : ''));
      });
      if (v && v <= 2) out.push('    ⚠︎ ' + t(dim.low));
    });
    if (st.n) {
      var read = scoreRead(st.sum);
      out.push('');
      out.push('**' + t(read.head) + '** — ' + t(read.body));
    }
    out.push('');

    out.push('## ' + (zh ? '⑤ 反向面试' : '⑤ Reverse interview'));
    out.push(t(REVERSE.intro).replace(/\*\*/g, ''));
    goodQuestions().forEach(function (x) { out.push('- ' + t(x)); });
    if (c.theirQuestions) {
      out.push('');
      out.push(zh ? '他实际问的：' : 'What they actually asked:');
      out.push(c.theirQuestions.split('\n').map(function (l) { return '> ' + l; }).join('\n'));
    }
    out.push('');

    if (c.notes) {
      out.push('## ' + (zh ? '面试笔记' : 'Notes'));
      out.push(c.notes.split('\n').map(function (l) { return '> ' + l; }).join('\n'));
      out.push('');
    }

    out.push('## ' + (zh ? '⑥ 结论' : '⑥ Decision'));
    var dec = UI.decisions.filter(function (x) { return x.v === c.decision; })[0];
    out.push('- ' + (dec ? t(dec.t) : '____'));

    if (S.candidates.length > 1) {
      out.push('');
      out.push('### ' + t(UI.compareTitle));
      out.push('| | ' + S.candidates.map(function (x) { return displayName(x); }).join(' | ') + ' |');
      out.push('|---|' + S.candidates.map(function () { return '---|'; }).join(''));
      out.push('| ' + t(UI.rowResume) + ' | ' + S.candidates.map(function (x) { var q = resumeScore(x); return q.score + '/' + q.max; }).join(' | ') + ' |');
      SCORE_DIMS.forEach(function (dim) {
        out.push('| ' + t(dim.title) + ' | ' + S.candidates.map(function (x) { return x.scores[dim.id] || '–'; }).join(' | ') + ' |');
      });
      out.push('| ' + t(UI.rowTotal) + ' | ' + S.candidates.map(function (x) { var q = scoreTotal(x); return q.n ? q.sum + '/16' : '–'; }).join(' | ') + ' |');
    }

    out.push('');
    out.push('---');
    out.push((zh ? '工具来源：' : 'Toolkit: ') + 'https://' + MARK + '/');
    return out.join('\n');
  }

  /* ------------------------------------------------------------------ *
   * Init
   * ------------------------------------------------------------------ */

  function renderAllCandidate() {
    renderKnobs(); renderM2(); renderM4(); renderM5(); renderM6(); renderStatus();
  }
  function renderAll() {
    renderHeaders(); renderRail(); renderKnobs();
    renderM1(); renderM2(); renderM3(); renderM4(); renderM5(); renderM6();
    renderStatus();
    if (IV.on) renderInterview();
  }

  function setLang(lang) {
    S.lang = lang;
    save();
    document.querySelectorAll('.langswitch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    renderAll();
  }

  function init() {
    stampCaseIds();
    load();
    cur();
    buildShell();
    document.querySelectorAll('.langswitch button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    document.getElementById('printBtn').addEventListener('click', function () { window.print(); });
    document.getElementById('ivBtn').addEventListener('click', openInterview);
    window.addEventListener('scroll', syncRail, { passive: true });
    document.addEventListener('keydown', function (e) {
      if (!IV.on) return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (e.key === 'Escape') { closeInterview(); return; }
      if (tag === 'textarea' || tag === 'input') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); ivGo(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); ivGo(-1); }
    });
    setLang(S.lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
