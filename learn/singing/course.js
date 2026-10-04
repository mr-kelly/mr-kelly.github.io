/*
 * 流行演唱课程数据。
 * 真源在 Kelly 的 vault：~/Documents/invest/life/learn/singing/（课程提纲.md、00-入学测试.md、各阶段教材），这里是同步过来的交付版。
 * 改课程内容先改 vault，再同步到这里，不要只改这一边。
 *
 * 课的 id 用 "阶段.序号"。ready: true 表示已备课（有完整教材），否则提纲上显示“待定”。
 * 入学测试每个选项用 effects 给课打档：pass 已会（跳过）/ partial 半会（快速过）/ need 要学。
 */
window.COURSE = {
  id: "singing",
  title: "流行演唱",
  subtitle: "从“高音一上去就变虚”，练到结实的混声",
  updated: "2026-10-04",
  current: "1.1",

  diagnosis: {
    date: "2026-10-03",
    summary: "音准、节奏、耐力都不用补，卡在两件事：气息推力不稳、高音区声带闭合不够。整门课围绕“把虚掉的假音变成结实的混声”展开。",
    items: [
      { label: "副歌高音", finding: "自动变弱变虚，掉成漏气的假音", tone: "mixed", note: "没有挤喉扯嗓的坏习惯；但高音区声带闭合不够，真假声之间有断层" },
      { label: "弹唇", finding: "只能几秒，而且做成了 buh buh 爆破音", tone: "gap", note: "气息支撑还没建立，气流不匀速" },
      { label: "音准节奏", finding: "很好，能挑别人跑调和进错拍", tone: "good", note: "音准节奏训练整块跳过" },
      { label: "耐力", finding: "连唱不累嗓", tone: "good", note: "发声方式本身放松、安全" },
      { label: "舒适区", finding: "林宥嘉、张学友", tone: "good", note: "中低音语感好，有叙事感，自带气声倾向" }
    ]
  },

  placement: {
    intro: "16 道题，大约 10 分钟。2 道计时实测要真的做一下，其余凭直觉选。每道题对应后面的课：已会的跳过，半会的快速过，要学的认真学。",
    questions: [
      { id: "q1", type: "timer", lessons: ["1.1"], title: "弹唇带音，一口气能撑几秒？",
        how: "嘴唇放松，让气流把嘴唇吹得“噗噜噜”连续颤动，同时带一点轻轻的中低音。点开始，断了就点停。不会弹唇就点“吹不起来”。",
        pass: 15, partial: 5 },
      { id: "q2", type: "timer", lessons: ["1.2"], title: "S 音匀速吐气，能撑几秒？",
        how: "吸一口气，发“嘶——”，像轮胎慢慢漏气，声音大小保持一样。点开始，气用完就点停。",
        pass: 25, partial: 12 },
      { id: "q3", type: "choice", title: "唱到副歌高音时，喉咙和脖子是什么感觉？", options: [
        { text: "脖子青筋、喉咙发紧往上提，像在喊，唱两三首就干哑", effects: { "1.3": "need", "2.3": "need" } },
        { text: "自动变弱变虚，变成漏气的假音，音量掉下来", effects: { "1.3": "partial", "2.3": "need" } },
        { text: "能保持音量，脖子放松，声音结实喉咙不难受", effects: { "1.3": "pass", "2.3": "pass" } } ] },
      { id: "q4", type: "choice", title: "连续唱 40–60 分钟后，嗓子怎么样？", options: [
        { text: "高音上不去，喉咙有异物感、发炎感或发劈", effects: { "1.3": "need" } },
        { text: "身体或气息有点累，但声带不痛，休息一下还能唱", effects: {} } ] },
      { id: "q5", type: "choice", title: "试一下气泡音：用最低最松的声音发“咯咯咯……”（像老木门慢慢打开）", options: [
        { text: "发不出来，或者喉咙很紧", effects: { "1.4": "need", "1.5": "need" } },
        { text: "能发，但断断续续，撑不住", effects: { "1.4": "partial", "1.5": "need" } },
        { text: "能放松地持续 5 秒以上", effects: { "1.4": "pass", "1.5": "need" } },
        { text: "能持续，还能直接从气泡音接到一个结实的“啊”", effects: { "1.4": "pass", "1.5": "pass" } } ] },
      { id: "q6", type: "choice", title: "跟伴奏唱歌时，音准和节奏怎么样？", options: [
        { text: "常被说跑调，或者找不到什么时候开口", effects: { "1.6": "need" } },
        { text: "基本没问题，不熟的转折偶尔飘一下", effects: { "1.6": "partial" } },
        { text: "很好，能听出别人跑调和进错拍", effects: { "1.6": "pass" } } ] },
      { id: "q7", type: "choice", title: "你能分清自己的真声和假声吗？", options: [
        { text: "分不清", effects: { "2.1": "need" } },
        { text: "大概知道，但控制不了什么时候用哪个", effects: { "2.1": "partial" } },
        { text: "能随意切换", effects: { "2.1": "pass" } } ] },
      { id: "q8", type: "choice", title: "用“呜——”从你最低的音滑到最高的音（像警报），中间发生了什么？", options: [
        { text: "某个地方明显断开、破音，或者上不去", effects: { "2.2": "need", "2.4": "need" } },
        { text: "能上去，但某个地方声音突然变虚变细", effects: { "2.2": "pass", "2.4": "need" } },
        { text: "从低到高平滑，音量和音色基本一致", effects: { "2.2": "pass", "2.4": "pass" } } ] },
      { id: "q9", type: "choice", title: "别人怎么形容你的声音？", options: [
        { text: "鼻音重、有点扁", effects: { "2.5": "need" } },
        { text: "有点闷，像含在喉咙里", effects: { "2.5": "need" } },
        { text: "都没有，挺清楚的", effects: { "2.5": "pass" } } ] },
      { id: "q10", type: "choice", title: "能用结实的大声（不是假音）唱到副歌最高音吗？", options: [
        { text: "不能", effects: { "2.6": "need" } },
        { text: "能，但喉咙很累", effects: { "2.6": "need" } },
        { text: "能，而且不累", effects: { "2.6": "pass" } } ] },
      { id: "q11", type: "choice", title: "唱歌时咬字怎么样？", options: [
        { text: "常被说听不清唱的是什么", effects: { "3.1": "need", "3.2": "need" } },
        { text: "偶尔含糊，快歌更明显", effects: { "3.1": "partial", "3.2": "partial" } },
        { text: "清楚，而且有说话的语感", effects: { "3.1": "pass", "3.2": "pass" } } ] },
      { id: "q12", type: "choice", title: "同一句里，能从气声（带气的轻声）切回实声吗？", options: [
        { text: "不会用气声", effects: { "3.3": "need" } },
        { text: "气声有，但一用就收不回来", effects: { "3.3": "partial" } },
        { text: "收放自如", effects: { "3.3": "pass" } } ] },
      { id: "q13", type: "choice", title: "长音的尾巴会有颤音吗？", options: [
        { text: "没有，是直的", effects: { "3.4": "need" } },
        { text: "有，但感觉是下巴或喉咙在抖", effects: { "3.4": "need" } },
        { text: "有，自然的", effects: { "3.4": "pass" } } ] },
      { id: "q14", type: "choice", title: "快速转音（比如林俊杰、邓紫棋那种一串音）？", options: [
        { text: "跟不上", effects: { "3.5": "need" } },
        { text: "放慢能唱准", effects: { "3.5": "partial" } },
        { text: "原速能唱准", effects: { "3.5": "pass" } } ] },
      { id: "q15", type: "choice", title: "唱一整首歌时，你会怎么处理？", options: [
        { text: "从头到尾差不多一个力度", effects: { "4.1": "need", "4.2": "need", "4.3": "need" } },
        { text: "有意识地主歌轻、副歌推上去", effects: { "4.1": "partial", "4.2": "partial", "4.3": "partial" } },
        { text: "会设计每一段的情绪和强弱", effects: { "4.1": "pass", "4.2": "pass", "4.3": "pass" } } ] },
      { id: "q16", type: "choice", title: "麦克风用得怎么样？", options: [
        { text: "没怎么用过", effects: { "4.4": "need" } },
        { text: "KTV 常用，但没什么讲究", effects: { "4.4": "partial" } },
        { text: "会根据音量调整距离", effects: { "4.4": "pass" } } ] }
    ]
  },

  stages: [
    {
      n: 1,
      title: "气息与发声基础",
      weeks: "3–4 周",
      why: "匀速的气 + 放松的喉 + 唤醒声带闭合。高音变虚有两个根源：气流不稳，声带只能靠漏气撑住；声带闭不严，高音就滑进纯假声。",
      lessons: [
        {
          id: "1.1",
          title: "弹唇（Lip Trill）",
          ready: true,
          goal: "嘴唇完全放松，被匀速的气流吹得连续颤动，再带上声音。",
          misconception: "弹唇不是 buh buh 的爆破音（那是嘴唇主动在开合）。正确的是嘴唇不用力、被气流吹得“噗噜噜噜……”一串不断，像马打响鼻、小孩学摩托车。",
          videos: [
            { id: "cRI5kZfMrpk", title: "【保姆级】手把手教你弹唇（打嘟嘟）", lang: "中文", note: "先看这个" },
            { id: "j6hBch7nT5Q", title: "一节课教你学会唇颤音（打嘟噜），零基础必须", lang: "中文" },
            { id: "OkrNs2Yon0M", title: "快速学会唇颤音和舌颤音", lang: "中文" },
            { id: "qkWkXKQWzDw", title: "How To Lip Trill + Why You're Doing It Wrong", lang: "英文", note: "常见错误" },
            { id: "UAR8jhWkRqA", title: "How to Lip Trill + Alternative Exercises", lang: "英文", note: "吹不起来时的替代练法" }
          ],
          steps: [
            { title: "手指托脸", body: "两只手的食指轻按在嘴角外侧、斜上方一点的脸颊肉上，微微往上托。嘴唇像睡着了一样，不抿。大部分人吹不起来，是因为嘴唇太紧，或者脸颊的重量压着嘴唇。" },
            { title: "只吹气，不出声", body: "像刚跑完步那样深深叹一口气，感觉肚子自然往里收、气往外涌。带着这股气让嘴唇颤起来。" },
            { title: "加一点声音", body: "嘴唇颤着的同时，喉咙里带一点很轻的中低音，像蚊子叫那么小。用下面的计时器数秒。" }
          ],
          troubleshooting: [
            { symptom: "颤两下就停", cause: "嘴唇在用力或抿着", fix: "托脸的手指再往上一点，嘴唇彻底放松" },
            { symptom: "一开始很猛，马上断", cause: "气一下子冲出去了", fix: "想象慢慢吹凉一勺汤，匀速比力度重要" },
            { symptom: "加声音后颤动就停", cause: "出声时喉咙一紧，挡住了气", fix: "声音再小一点，先保住颤动" },
            { symptom: "口水乱飞、嘴唇发麻", cause: "正常", fix: "不用管" }
          ],
          ladder: [
            { id: "l1", text: "不出声吹气颤动", target: 5 },
            { id: "l2", text: "带微弱中低音颤动", target: 5 },
            { id: "l3", text: "带音颤动，声音和颤动都不断", target: 10 },
            { id: "l4", text: "颤动中做滑音：低 → 高 → 低，中间不卡", target: null },
            { id: "l5", text: "带音颤动 + 滑音跨过平时会变虚的音高也不断", target: 15 }
          ]
        },
        { id: "1.2", title: "S 音", goal: "嘶——匀速吐气计时，找腹部支撑的感觉。" },
        { id: "1.3", title: "叹气发声与低喉位", goal: "从高往低叹“哈——”，打哈欠感，喉结不上提。" },
        { id: "1.4", title: "气泡音", goal: "最低最松的“咯咯”声，唤醒声带闭合。" },
        { id: "1.5", title: "气泡音接实声", goal: "从气泡音直接接到结实的“啊”，不漏气。" },
        { id: "1.6", title: "音准与节奏", goal: "单音模唱、五声音阶、4/4 与 6/8 律动踩点。" }
      ],
      daily: [
        { text: "叹气放松：耸肩再放下 × 3，叹气 × 5", min: 1 },
        { text: "弹唇：按当前进阶级别练", min: 5 },
        { text: "S 音计时 × 3 次（开了第 2 课以后）", min: 3 },
        { text: "唱一首舒适区的歌（《十年》或林宥嘉），只注意气别一下子用完", min: 5 }
      ],
      pass: [
        { id: "p1", text: "带音弹唇 15 秒以上，滑音从低到高再回来不断" },
        { id: "p2", text: "S 音匀速吐气 25 秒以上，声音大小前后一致" },
        { id: "p3", text: "放松、持续的气泡音 5 秒以上，喉咙不紧" },
        { id: "p4", text: "气泡音能直接接到一个结实的“啊”，不漏气" },
        { id: "p5", text: "录一遍《说谎》或《十年》，长句不会中途断气" }
      ],
      redlines: [
        "喉咙疼（不是累）：当天停，喝温水。",
        "练的时候头晕：气吹太猛了，降低力度，中间正常呼吸几次。"
      ]
    },
    {
      n: 2, title: "换声点与混声", weeks: "6–8 周",
      why: "打通真假声，副歌不再变虚。这是主战场。",
      lessons: [
        { id: "2.1", title: "胸声与头声", goal: "分清两种发声：声带完全闭合 vs 边缘振动。" },
        { id: "2.2", title: "找到换声点", goal: "滑音找出自己“翻、断、变虚”的那几个音。" },
        { id: "2.3", title: "窄元音找混声", goal: "Nay Nay、Mum Mum，用窄元音挡住喉部代偿。" },
        { id: "2.4", title: "换声区平滑过渡", goal: "胸声渐变到混声，跨换声点不断层。" },
        { id: "2.5", title: "共鸣调配", goal: "口腔、咽腔、鼻腔的比例，不扁不闷。" },
        { id: "2.6", title: "强混声（Belting）入门", goal: "安全地唱出结实的高位强音。" }
      ]
    },
    {
      n: 3, title: "流行演唱技巧", weeks: "4–6 周",
      why: "摆脱晚会腔，唱出当代流行的味道。",
      lessons: [
        { id: "3.1", title: "咬字", goal: "字头清晰、字腹归韵、字尾干脆，有说话感。" },
        { id: "3.2", title: "连音与断音", goal: "慢歌连贯、快歌律动。" },
        { id: "3.3", title: "气声收放", goal: "同一句里气声与实声切换。" },
        { id: "3.4", title: "颤音", goal: "气流驱动的自然颤音，不是下巴或喉头抖。" },
        { id: "3.5", title: "滑音与转音", goal: "快速音阶跑动，音点准。" },
        { id: "3.6", title: "撕裂音（选修）", goal: "安全的假声带介入。", optional: true }
      ]
    },
    {
      n: 4, title: "歌曲实战", weeks: "4 周",
      why: "从练声走到作品。",
      lessons: [
        { id: "4.1", title: "歌曲结构拆解", goal: "主歌克制、副歌推进、桥段转折。" },
        { id: "4.2", title: "强弱对比", goal: "渐强渐弱的精细控制。" },
        { id: "4.3", title: "以情带声", goal: "呼吸声、叹息、表情传情绪。" },
        { id: "4.4", title: "麦克风", goal: "距离控制、近讲效应、大音量避麦。" },
        { id: "4.5", title: "结业作品", goal: "完整录一首《说谎》，和入学时对比。", optional: true }
      ]
    }
  ],

  songs: [
    { stage: "1–2 入门", items: ["陈奕迅《十年》", "毛不易《消愁》"], focus: "中音区气流稳定、长句不断气" },
    { stage: "2–3 进阶", items: ["周杰伦《晴天》", "林宥嘉《说谎》"], focus: "换声点、强弱变化" },
    { stage: "3–4 高阶", items: ["林俊杰《可惜没如果》", "华晨宇《烟火里的尘埃》"], focus: "混声往上扩展、高张力副歌" }
  ],
  benchmark: "每个阶段开始和结束时，各录一遍《说谎》，前后对比最直观。"
};
