/* AI Hiring Toolkit — /ai-hire-guide/
   Vanilla JS, no build step. All copy is bilingual: every string is {zh, en}. */

(function () {
  'use strict';

  var STORE = 'kelly-ai-hire-guide-v1';

  var S = {
    lang: 'zh',
    role: 'general',
    level: 'L2',
    quiz: {},
    sigs: {},
    scores: {},
    candidate: '',
    theirQuestions: '',
    decision: ''
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
    m6: { zh: '一页纸导出', en: 'Export the one-pager' },
    m6sub: { zh: '把上面所有选择汇总成一份面试脚本，打印带进会议室，或者复制成 Markdown 发给同事。', en: 'Everything above, assembled into one interview script. Print it and carry it in, or copy it as Markdown for a colleague.' },
    posTitle: { zh: '正向信号', en: 'Positive signals' },
    negTitle: { zh: '负向信号', en: 'Negative signals' },
    followups: { zh: '给这位候选人的追问', en: 'Follow-ups for this candidate' },
    followupsNote: { zh: '根据你没勾上的正向信号和勾上的负向信号自动生成——问这些，而不是问他会什么。', en: 'Generated from the positives you could not tick and the negatives you did — ask these instead of asking what they know.' },
    copy: { zh: '复制', en: 'Copy' },
    copied: { zh: '已复制', en: 'Copied' },
    print: { zh: '打印 / 存 PDF', en: 'Print / save PDF' },
    reset: { zh: '清空', en: 'Reset' },
    resetConfirm: { zh: '清空这个页面上所有已填的内容？', en: 'Clear everything filled in on this page?' },
    unscored: { zh: '未打分', en: 'not scored' },
    tasteReverse: { zh: '3.1　反向评审题', en: '3.1  The reverse review' },
    tasteReverseSub: { zh: '不给"做一个 X"，给三份已经做好的 X，让他排序并说明理由。', en: 'Do not ask them to make an X. Hand them three finished Xs and ask them to rank the three and defend the ranking.' },
    tasteWhy: { zh: '3.2　"你怎么知道它是好的？"连问三次', en: '3.2  "How do you know it was good?" — asked three times' },
    tasteCal: { zh: '3.3　品味校准题', en: '3.3  The calibration test' },
    materialLabel: { zh: '准备什么材料', en: 'What to prepare' },
    howRead: { zh: '怎么读他的回答', en: 'How to read their answer' },
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
    footer: {
      zh: '这套工具不收集任何数据。用得上就拿走，改成你自己的版本。',
      en: 'This toolkit collects nothing. Take it, and make it yours.'
    }
  };

  /* ------------------------------------------------------------------ *
   * Helpers
   * ------------------------------------------------------------------ */

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '<br><br>');
  }
  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(S)); } catch (e) {}
  }
  function load() {
    try {
      var raw = localStorage.getItem(STORE);
      if (raw) {
        var p = JSON.parse(raw);
        Object.keys(p).forEach(function (k) { if (k in S) S[k] = p[k]; });
      }
    } catch (e) {}
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

  function resumeScore() {
    var list = signalsFor(S.role), score = 0, max = 0;
    list.forEach(function (s) {
      if (s.pol === '+') {
        max += s.w;
        if (S.sigs[s.id]) score += s.w;
      } else if (S.sigs[s.id]) {
        score -= s.w;
      }
    });
    return { score: score, max: max };
  }

  function followUps() {
    var list = signalsFor(S.role), out = [];
    list.forEach(function (s) {
      var missing = (s.pol === '+' && !S.sigs[s.id]);
      var present = (s.pol === '-' && S.sigs[s.id]);
      if (missing || present) out.push({ w: s.w + (present ? 1 : 0), ask: s.ask, why: s.t, kind: present ? '-' : '+' });
    });
    out.sort(function (a, b) { return b.w - a.w; });
    return out.slice(0, 4);
  }

  function scoreTotal() {
    var sum = 0, n = 0;
    SCORE_DIMS.forEach(function (d) {
      if (S.scores[d.id]) { sum += S.scores[d.id]; n++; }
    });
    return { sum: sum, n: n, complete: n === SCORE_DIMS.length };
  }

  function scoreRead(sum) {
    for (var i = 0; i < SCORE_READS.length; i++) { if (sum >= SCORE_READS[i].min) return SCORE_READS[i]; }
    return SCORE_READS[SCORE_READS.length - 1];
  }

  /* ------------------------------------------------------------------ *
   * Rendering
   * ------------------------------------------------------------------ */

  var MODULES = [
    { id: 'm1', num: '①', title: UI.m1, sub: UI.m1sub, render: renderM1 },
    { id: 'm2', num: '②', title: UI.m2, sub: UI.m2sub, render: renderM2 },
    { id: 'm3', num: '③', title: UI.m3, sub: UI.m3sub, render: renderM3 },
    { id: 'm4', num: '④', title: UI.m4, sub: UI.m4sub, render: renderM4 },
    { id: 'm5', num: '⑤', title: UI.m5, sub: UI.m5sub, render: renderM5 },
    { id: 'm6', num: '⑥', title: UI.m6, sub: UI.m6sub, render: renderM6 }
  ];

  function body(id) { return document.querySelector('#' + id + ' .module-body'); }

  function buildShell() {
    var app = document.getElementById('app');
    app.innerHTML = MODULES.map(function (m) {
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

  /* --- knobs --- */
  function renderKnobs() {
    var n = document.getElementById('knobs');
    n.innerHTML =
      '<div><div class="knob-label">' + esc(t(UI.knobRole)) + '</div><div class="chips" id="roleChips">' +
      ROLES.map(function (r) {
        return '<button type="button" class="chip" data-role="' + r.key + '" aria-pressed="' + (S.role === r.key) + '">' + esc(t(r.name)) + '</button>';
      }).join('') + '</div></div>' +
      '<div><div class="knob-label">' + esc(t(UI.knobLevel)) + '</div><div class="chips" id="levelChips">' +
      LEVELS.map(function (l) {
        return '<button type="button" class="chip" data-level="' + l.key + '" aria-pressed="' + (S.level === l.key) + '">' + l.key + ' · ' + esc(t(l.name)) + '</button>';
      }).join('') + '</div></div>';

    n.querySelectorAll('[data-role]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.role = b.getAttribute('data-role');
        save(); renderKnobs(); renderM2(); renderM3(); renderM5();
      });
    });
    n.querySelectorAll('[data-level]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.level = b.getAttribute('data-level');
        save(); renderKnobs(); renderM1(); renderM3();
      });
    });
  }

  /* --- module 1: level --- */
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
        save(); renderM1();
      });
    });
  }

  /* --- module 2: resume --- */
  function renderM2() {
    var list = signalsFor(S.role);
    function group(pol, title, cls) {
      var items = list.filter(function (s) { return s.pol === pol; });
      return '<div class="card"><div class="sig-group-title ' + cls + '">' + esc(t(title)) + '</div>' +
        items.map(function (s) {
          return '<label class="check"><input type="checkbox" data-sig="' + s.id + '"' + (S.sigs[s.id] ? ' checked' : '') + '>' +
            '<span class="check-body"><span class="check-text">' + esc(t(s.t)) + '</span>' +
            '<span class="check-hint">' + esc(t(s.hint)) + '</span></span></label>';
        }).join('') + '</div>';
    }

    var r = resumeScore();
    var tone, head, bodyTxt;
    if (r.score >= 7) { tone = 'tone-good'; head = UI.verdictGood; bodyTxt = UI.verdictGoodB; }
    else if (r.score >= 2) { tone = 'tone-warn'; head = UI.verdictAsk; bodyTxt = UI.verdictAskB; }
    else { tone = 'tone-bad'; head = UI.verdictNo; bodyTxt = UI.verdictNoB; }

    var fu = followUps();
    var html = group('+', UI.posTitle, 'sig-pos') + group('-', UI.negTitle, 'sig-neg') +
      '<div class="verdict"><span class="verdict-tag ' + tone + '">' + esc(t(head)) + '</span>' +
      '<div class="verdict-body">' + esc(t(bodyTxt)) + '</div>' +
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
    b.querySelectorAll('[data-sig]').forEach(function (c) {
      c.addEventListener('change', function () {
        S.sigs[c.getAttribute('data-sig')] = c.checked;
        save(); renderM2();
      });
    });
    var cf = b.querySelector('#copyFu');
    if (cf) cf.addEventListener('click', function () {
      copyText(fu.map(function (f, i) { return (i + 1) + '. ' + t(f.ask); }).join('\n'));
    });
  }

  /* --- module 3: taste --- */
  function renderM3() {
    var d = TASTE[S.role];
    var html = '';

    if (S.level === 'L1') {
      html += '<div class="verdict" style="margin-bottom:16px"><span class="verdict-tag tone-warn">L1</span>' +
        '<div class="verdict-body">' + esc(t(UI.l1note)) + '</div></div>';
    }

    html += '<div class="card"><h3>' + esc(t(UI.tasteReverse)) + '</h3>' +
      '<div class="card-note">' + esc(t(UI.tasteReverseSub)) + '</div>' +
      '<div style="margin-top:16px"><div class="sig-group-title">' + esc(t(UI.materialLabel)) + '</div>' +
      '<div class="card-note" style="margin-bottom:12px">' + esc(t(d.material)) + '</div>' +
      '<div class="abc">' + d.abc.map(function (x) {
        return '<div class="abc-item"><div class="abc-key">' + x.key + '</div><div class="abc-name">' + esc(t(x.name)) + '</div>' +
          '<div class="abc-desc">' + esc(t(x.desc)) + '</div></div>';
      }).join('') + '</div></div>' +
      '<div style="margin-top:18px"><div class="sig-group-title">' + esc(t(UI.howRead)) + '</div>' +
      '<div class="card-note" style="margin-bottom:8px"><strong>' + esc(t(TASTE_ANSWER.order)) + '</strong></div>' +
      '<div class="qblock">' + TASTE_ANSWER.read.map(function (x) {
        return '<div class="qitem"><div class="qnum">·</div><div class="qtext">' + md(t(x)) + '</div></div>';
      }).join('') + '</div>' +
      '<div class="card-note" style="margin-top:12px">' + esc(t(TASTE_ANSWER.howto)) + '</div></div></div>';

    html += '<div class="card"><h3>' + esc(t(UI.tasteWhy)) + '</h3>' +
      '<div class="card-note">' + esc(t(THREE_WHY.intro)) + '</div>' +
      '<div class="compare" style="margin-top:16px">' +
      '<div class="compare-col compare-good"><h4>' + esc(t(UI.goodGround)) + '</h4><ul>' +
      THREE_WHY.good.map(function (x) { return '<li>' + md(t(x)) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="compare-col compare-bad"><h4>' + esc(t(UI.badGround)) + '</h4><ul>' +
      THREE_WHY.bad.map(function (x) { return '<li>' + md(t(x)) + '</li>'; }).join('') + '</ul></div></div>' +
      '<div class="card-note" style="margin-top:14px">' + esc(t(THREE_WHY.note)) + '</div></div>';

    html += '<div class="card"><h3>' + esc(t(UI.tasteCal)) + '</h3>' +
      '<div class="card-note">' + esc(t(CALIBRATION.setup[S.role])) + '</div>' +
      '<div style="margin-top:14px"><div class="sig-group-title">' + esc(t(UI.calQuestions)) + '</div>' +
      '<div class="qblock">' + CALIBRATION.questions.map(function (q, i) {
        return '<div class="qitem"><div class="qnum">Q' + (i + 1) + '</div><div class="qtext">' + esc(t(q)) + '</div></div>';
      }).join('') + '</div>' +
      '<div class="card-note" style="margin-top:12px">' + md(t(CALIBRATION.key)) + '</div></div></div>';

    if (S.level === 'L3') {
      html += '<div class="card" style="border-color:var(--kelly-rust)"><h3>' + esc(t(L3_EXTRA.title)) + '</h3>' +
        '<div class="card-note" style="margin-top:8px">' + md(t(L3_EXTRA.body)) + '</div></div>';
    }

    body('m3').innerHTML = html;
  }

  /* --- module 4: scorecard --- */
  function renderM4() {
    var st = scoreTotal();
    var html = '<div class="card" style="border-left:3px solid var(--kelly-moss)"><div class="card-note">' + md(t(SCORE_INTRO)) + '</div></div>';

    html += '<div class="card">' + SCORE_DIMS.map(function (dim) {
      var cur = S.scores[dim.id];
      var flag = (cur && cur <= 2) ? '<div class="qwhy" style="color:var(--kelly-rust-text);margin-top:8px">' + esc(t(dim.low)) + '</div>' : '';
      return '<div class="dim"><div class="dim-title">' + esc(t(dim.title)) + '</div>' +
        '<div class="dim-watch">' + esc(t(dim.watch)) + '</div><div class="scale">' +
        dim.anchors.map(function (a, i) {
          var v = i + 1;
          return '<label><input type="radio" name="sc_' + dim.id + '" value="' + v + '"' + (cur === v ? ' checked' : '') + '>' +
            '<span><span class="scale-n">' + v + '</span>' + esc(t(a)) + '</span></label>';
        }).join('') + '</div>' + flag + '</div>';
    }).join('') + '</div>';

    if (st.n > 0) {
      var read = scoreRead(st.sum);
      html += '<div class="verdict"><span class="verdict-tag ' + read.tone + '">' + st.sum + ' / 16</span>' +
        '<div class="verdict-head">' + esc(t(read.head)) + '</div>' +
        '<div class="verdict-body">' + esc(t(read.body)) + '</div>' +
        (!st.complete ? '<div class="score-line">' + (SCORE_DIMS.length - st.n) + ' ' + esc(t(UI.unscored)) + '</div>' : '') +
        '</div>';
    }

    var b = body('m4');
    b.innerHTML = html;
    b.querySelectorAll('input[type=radio]').forEach(function (r) {
      r.addEventListener('change', function () {
        S.scores[r.name.slice(3)] = parseInt(r.value, 10);
        save(); renderM4();
      });
    });
  }

  /* --- module 5: reverse interview --- */
  function renderM5() {
    var good = REVERSE.good.general.concat(S.role === 'general' ? [] : REVERSE.good[S.role]);
    var html = '<div class="card" style="border-left:3px solid var(--kelly-moss)"><div class="card-note">' + md(t(REVERSE.intro)) + '</div></div>' +
      '<div class="card"><div class="compare">' +
      '<div class="compare-col compare-good"><h4>' + esc(t(UI.goodQ)) + '</h4><ul>' +
      good.map(function (x) { return '<li>' + esc(t(x)) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="compare-col compare-bad"><h4>' + esc(t(UI.badQ)) + '</h4><ul>' +
      REVERSE.bad.map(function (x) { return '<li>' + esc(t(x)) + '</li>'; }).join('') + '</ul></div>' +
      '</div><div class="field" style="margin-top:18px"><label class="field-label" for="theirQ">' + esc(t(UI.theirQ)) + '</label>' +
      '<textarea id="theirQ" rows="4" placeholder="' + esc(t(UI.theirQPh)) + '"></textarea></div></div>';

    var b = body('m5');
    b.innerHTML = html;
    var ta = b.querySelector('#theirQ');
    ta.value = S.theirQuestions || '';
    ta.addEventListener('input', function () { S.theirQuestions = ta.value; save(); });
  }

  /* --- module 6: export --- */
  function renderM6() {
    var html = '<div class="card">' +
      '<div class="field"><label class="field-label" for="cand">' + esc(t(UI.candidate)) + '</label>' +
      '<input type="text" id="cand" placeholder="' + esc(t(UI.candidatePh)) + '"></div>' +
      '<div class="field"><span class="field-label">' + esc(t(UI.decision)) + '</span><div class="scale">' +
      UI.decisions.map(function (dc) {
        return '<label><input type="radio" name="decision" value="' + dc.v + '"' + (S.decision === dc.v ? ' checked' : '') + '><span>' + esc(t(dc.t)) + '</span></label>';
      }).join('') + '</div></div>' +
      '<div class="actions no-print">' +
      '<button type="button" class="btn btn-primary" id="buildSheet">' + esc(t(UI.build)) + '</button>' +
      '<button type="button" class="btn" id="copySheet">' + esc(t(UI.copyMd)) + '</button>' +
      '<button type="button" class="btn btn-ghost" id="printSheet">' + esc(t(UI.print)) + '</button>' +
      '<span class="action-note">' + esc(t(UI.autosave)) + '</span></div>' +
      '<pre class="sheet" id="sheet" hidden></pre></div>';

    var b = body('m6');
    b.innerHTML = html;
    var ci = b.querySelector('#cand');
    ci.value = S.candidate || '';
    ci.addEventListener('input', function () { S.candidate = ci.value; save(); });
    b.querySelectorAll('input[name=decision]').forEach(function (r) {
      r.addEventListener('change', function () { S.decision = r.value; save(); });
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
   * The one-pager
   * ------------------------------------------------------------------ */

  function buildSheet() {
    var zh = S.lang === 'zh';
    var L = levelObj(S.level);
    var d = TASTE[S.role];
    var st = scoreTotal();
    var r = resumeScore();
    var out = [];

    out.push('# ' + (zh ? 'AI 时代面试脚本' : 'AI-era interview script') + (S.candidate ? ' — ' + S.candidate : ''));
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

    out.push('## ' + (zh ? '② 简历' : '② Resume') + ' (score ' + r.score + '/' + r.max + ')');
    followUps().forEach(function (f, i) {
      out.push((i + 1) + '. ' + t(f.ask));
      out.push('   - ' + (f.kind === '-' ? (zh ? '因为看到：' : 'because you saw: ') : (zh ? '因为缺少：' : 'because it is missing: ')) + t(f.why));
    });
    out.push('');

    out.push('## ' + (zh ? '③ 品味题' : '③ Taste tests'));
    out.push('### ' + t(UI.tasteReverse));
    out.push((zh ? '材料：' : 'Material: ') + t(d.material));
    d.abc.forEach(function (x) { out.push('- **' + x.key + ' ' + t(x.name) + '** — ' + t(x.desc)); });
    out.push('');
    out.push(t(TASTE_ANSWER.order));
    TASTE_ANSWER.read.forEach(function (x) { out.push('- ' + t(x).replace(/\n/g, ' ')); });
    out.push('');
    out.push('### ' + t(UI.tasteWhy));
    out.push(t(THREE_WHY.intro));
    out.push('- ' + (zh ? '有品味会落在：' : 'Taste lands on: ') + THREE_WHY.good.map(function (x) { return t(x).replace(/\*\*/g, ''); }).join(' / '));
    out.push('- ' + (zh ? '没品味会落在：' : 'No taste lands on: ') + THREE_WHY.bad.map(function (x) { return t(x).replace(/\*\*/g, ''); }).join(' / '));
    out.push('');
    out.push('### ' + t(UI.tasteCal));
    out.push(t(CALIBRATION.setup[S.role]));
    CALIBRATION.questions.forEach(function (q, i) { out.push((i + 1) + '. ' + t(q)); });
    out.push('- ' + t(CALIBRATION.key).replace(/\*\*/g, '').replace(/\n\n/g, ' '));
    if (S.level === 'L3') {
      out.push('');
      out.push('### ' + t(L3_EXTRA.title));
      out.push(t(L3_EXTRA.body).replace(/\*\*/g, ''));
    }
    out.push('');

    out.push('## ' + (zh ? '④ 现场评分' : '④ Live scorecard') + (st.n ? ' — ' + st.sum + '/16' : ''));
    out.push(t(SCORE_INTRO).replace(/\*\*/g, ''));
    out.push('');
    SCORE_DIMS.forEach(function (dim) {
      var cur = S.scores[dim.id];
      out.push('- [' + (cur ? cur : ' ') + '/4] **' + t(dim.title) + '** — ' + t(dim.watch));
      dim.anchors.forEach(function (a, i) {
        out.push('    ' + (i + 1) + '. ' + t(a) + (cur === i + 1 ? '  ←' : ''));
      });
      if (cur && cur <= 2) out.push('    ⚠︎ ' + t(dim.low));
    });
    if (st.n) {
      var read = scoreRead(st.sum);
      out.push('');
      out.push('**' + t(read.head) + '** — ' + t(read.body));
    }
    out.push('');

    out.push('## ' + (zh ? '⑤ 反向面试' : '⑤ Reverse interview'));
    out.push(t(REVERSE.intro).replace(/\*\*/g, ''));
    REVERSE.good.general.concat(S.role === 'general' ? [] : REVERSE.good[S.role]).forEach(function (x) {
      out.push('- ' + t(x));
    });
    if (S.theirQuestions) {
      out.push('');
      out.push((zh ? '他实际问的：' : 'What they actually asked:'));
      out.push(S.theirQuestions.split('\n').map(function (l) { return '> ' + l; }).join('\n'));
    }
    out.push('');

    out.push('## ' + (zh ? '⑥ 结论' : '⑥ Decision'));
    var dec = UI.decisions.filter(function (x) { return x.v === S.decision; })[0];
    out.push('- ' + (dec ? t(dec.t) : '____'));
    out.push('');
    out.push('---');
    out.push(zh ? '工具来源：https://mr-kelly.github.io/ai-hire-guide/' : 'Toolkit: https://mr-kelly.github.io/ai-hire-guide/');

    return out.join('\n');
  }

  /* ------------------------------------------------------------------ *
   * Init
   * ------------------------------------------------------------------ */

  function renderAll() {
    renderHeaders();
    renderKnobs();
    renderM1(); renderM2(); renderM3(); renderM4(); renderM5(); renderM6();
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
    load();
    buildShell();
    document.querySelectorAll('.langswitch button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    document.getElementById('printBtn').addEventListener('click', function () { window.print(); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      if (!window.confirm(t(UI.resetConfirm))) return;
      S.quiz = {}; S.sigs = {}; S.scores = {};
      S.candidate = ''; S.theirQuestions = ''; S.decision = '';
      save(); renderAll();
    });
    setLang(S.lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
