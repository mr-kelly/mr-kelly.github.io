/*
 * 流行演唱课程数据。
 * 真源在 Kelly 的 vault：~/Documents/invest/life/learn/singing/，这里是同步过来的交付版。
 * 改课程内容先改 vault，再同步到这里，不要只改这一边。
 */
window.COURSE = {
  id: "singing",
  title: "流行演唱",
  subtitle: "从“高音一上去就变虚”，练到结实的混声",
  updated: "2026-10-04",
  current: { stage: 1, lesson: 1 },

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

  stages: [
    {
      n: 1,
      title: "气息支撑 + 声带闭合唤醒",
      weeks: "3–4 周",
      why: "高音变虚有两个根源：气流不稳，声带只能靠漏气撑住；声带闭不严，高音就滑进纯假声。这一阶段把“匀速的气”和“闭合的感觉”分别练出来，第 2 阶段再合成混声。",
      skipped: "音准、节奏、视唱（已经会了）",
      lessons: [
        {
          n: 1,
          title: "弹唇（Lip Trill）",
          status: "current",
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
        { n: 2, title: "S 音练习", status: "locked", goal: "嘶——匀速吐气并计时，练气息匀速输出和腹部对抗（“支撑”的感觉）。" },
        { n: 3, title: "叹气发声 + 打哈欠感", status: "locked", goal: "从高往低叹“哈——”，找低喉位、后咽壁打开、软腭抬起。" },
        { n: 4, title: "气泡音（Vocal Fry）", status: "locked", goal: "最低最松的“咯咯咯”声，唤醒声带闭合，是第 2 阶段混声的地基。" },
        { n: 5, title: "气泡音 → 实声", status: "locked", goal: "从气泡音直接接到一个轻的“啊”，把闭合感带进正常发声。" }
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
    { n: 2, title: "换声点与混声", weeks: "6–8 周", outline: "胸声/头声认知 → Nay/Mum 窄元音找混声 → 换声区平滑过渡 → Belting 入门 → 共鸣调配。主战场：副歌变虚就在这里解决。" },
    { n: 3, title: "流行细分技巧", weeks: "4–6 周", outline: "咬字语感、气声加入/撤出、颤音、转音、（选修）撕裂音。气声已经有了，重点练能收能放。" },
    { n: 4, title: "歌曲实战与舞台", weeks: "4 周", outline: "主歌/副歌/桥段处理、强弱对比、以情带声、麦克风距离。用练习曲做完整作品。" }
  ],

  songs: [
    { stage: "1–2 入门", items: ["陈奕迅《十年》", "毛不易《消愁》"], focus: "中音区气流稳定、长句不断气" },
    { stage: "2–3 进阶", items: ["周杰伦《晴天》", "林宥嘉《说谎》"], focus: "换声点、强弱变化" },
    { stage: "3–4 高阶", items: ["林俊杰《可惜没如果》", "华晨宇《烟火里的尘埃》"], focus: "混声往上扩展、高张力副歌" }
  ],
  benchmark: "每个阶段开始和结束时，各录一遍《说谎》，前后对比最直观。"
};
