/*
 * Kelly 学唱歌课 · 课程数据（网页交付版）
 * 由 window.COURSE 一个对象描述整门课，learn/app.js 负责渲染。字段说明见 course-maker skill 的 references/course-js.md。
 * 改完跑：node -e 'global.window={};require("./course.js")' 和 verify_videos.sh。
 * vault 的阶段教材文件由 course-maker/scripts/export_vault.js 从本文件生成。
 */
window.COURSE = {
  "id": "singing",
  "title": "Kelly 学唱歌课",
  "subtitle": "从“高音一上去就变虚”，练到结实的混声",
  "updated": "2026-10-04",
  "current": "1.1",
  "diagnosis": {
    "date": "2026-10-03",
    "summary": "音准、节奏、耐力都不用补，卡在两件事：气息推力不稳、高音区声带闭合不够。整门课围绕“把虚掉的假音变成结实的混声”展开。",
    "items": [
      {
        "label": "副歌高音",
        "finding": "自动变弱变虚，掉成漏气的假音",
        "tone": "mixed",
        "note": "没有挤喉扯嗓的坏习惯；但高音区声带闭合不够，真假声之间有断层"
      },
      {
        "label": "弹唇",
        "finding": "只能几秒，而且做成了 buh buh 爆破音",
        "tone": "gap",
        "note": "气息支撑还没建立，气流不匀速"
      },
      {
        "label": "音准节奏",
        "finding": "很好，能挑别人跑调和进错拍",
        "tone": "good",
        "note": "音准节奏训练整块跳过"
      },
      {
        "label": "耐力",
        "finding": "连唱不累嗓",
        "tone": "good",
        "note": "发声方式本身放松、安全"
      },
      {
        "label": "舒适区",
        "finding": "林宥嘉、张学友",
        "tone": "good",
        "note": "中低音语感好，有叙事感，自带气声倾向"
      }
    ]
  },
  "placement": {
    "intro": "16 道题，大约 10 分钟。这不是考试，没有及格线。做完会给你一个分数、告诉你哪些已经会了，以及从哪一课开始最合适。2 道计时题要真的做一下，其余凭直觉选。",
    "questions": [
      {
        "id": "q1",
        "type": "timer",
        "lessons": [
          "1.1"
        ],
        "title": "弹唇带音，一口气能撑几秒？",
        "how": "嘴唇放松，让气流把嘴唇吹得“噗噜噜”连续颤动，同时带一点轻轻的中低音。点开始，断了就点停。不会弹唇就点“吹不起来”。",
        "pass": 15,
        "partial": 5
      },
      {
        "id": "q2",
        "type": "timer",
        "lessons": [
          "1.2"
        ],
        "title": "S 音匀速吐气，能撑几秒？",
        "how": "吸一口气，发“嘶——”，像轮胎慢慢漏气，声音大小保持一样。点开始，气用完就点停。",
        "pass": 25,
        "partial": 12
      },
      {
        "id": "q3",
        "type": "choice",
        "title": "唱到副歌高音时，喉咙和脖子是什么感觉？",
        "options": [
          {
            "text": "脖子青筋、喉咙发紧往上提，像在喊，唱两三首就干哑",
            "effects": {
              "1.3": "need",
              "2.3": "need"
            }
          },
          {
            "text": "自动变弱变虚，变成漏气的假音，音量掉下来",
            "effects": {
              "1.3": "partial",
              "2.3": "need"
            }
          },
          {
            "text": "能保持音量，脖子放松，声音结实喉咙不难受",
            "effects": {
              "1.3": "pass",
              "2.3": "pass"
            }
          }
        ]
      },
      {
        "id": "q4",
        "type": "choice",
        "title": "连续唱 40–60 分钟后，嗓子怎么样？",
        "options": [
          {
            "text": "高音上不去，喉咙有异物感、发炎感或发劈",
            "effects": {
              "1.3": "need"
            }
          },
          {
            "text": "身体或气息有点累，但声带不痛，休息一下还能唱",
            "effects": {}
          }
        ]
      },
      {
        "id": "q5",
        "type": "choice",
        "title": "试一下气泡音：用最低最松的声音发“咯咯咯……”（像老木门慢慢打开）",
        "options": [
          {
            "text": "发不出来，或者喉咙很紧",
            "effects": {
              "1.4": "need",
              "1.5": "need"
            }
          },
          {
            "text": "能发，但断断续续，撑不住",
            "effects": {
              "1.4": "partial",
              "1.5": "need"
            }
          },
          {
            "text": "能放松地持续 5 秒以上",
            "effects": {
              "1.4": "pass",
              "1.5": "need"
            }
          },
          {
            "text": "能持续，还能直接从气泡音接到一个结实的“啊”",
            "effects": {
              "1.4": "pass",
              "1.5": "pass"
            }
          }
        ]
      },
      {
        "id": "q6",
        "type": "choice",
        "title": "跟伴奏唱歌时，音准和节奏怎么样？",
        "options": [
          {
            "text": "常被说跑调，或者找不到什么时候开口",
            "effects": {
              "1.6": "need"
            }
          },
          {
            "text": "基本没问题，不熟的转折偶尔飘一下",
            "effects": {
              "1.6": "partial"
            }
          },
          {
            "text": "很好，能听出别人跑调和进错拍",
            "effects": {
              "1.6": "pass"
            }
          }
        ]
      },
      {
        "id": "q7",
        "type": "choice",
        "title": "你能分清自己的真声和假声吗？",
        "options": [
          {
            "text": "分不清",
            "effects": {
              "2.1": "need"
            }
          },
          {
            "text": "大概知道，但控制不了什么时候用哪个",
            "effects": {
              "2.1": "partial"
            }
          },
          {
            "text": "能随意切换",
            "effects": {
              "2.1": "pass"
            }
          }
        ]
      },
      {
        "id": "q8",
        "type": "choice",
        "title": "用“呜——”从你最低的音滑到最高的音（像警报），中间发生了什么？",
        "options": [
          {
            "text": "某个地方明显断开、破音，或者上不去",
            "effects": {
              "2.2": "need",
              "2.4": "need"
            }
          },
          {
            "text": "能上去，但某个地方声音突然变虚变细",
            "effects": {
              "2.2": "pass",
              "2.4": "need"
            }
          },
          {
            "text": "从低到高平滑，音量和音色基本一致",
            "effects": {
              "2.2": "pass",
              "2.4": "pass"
            }
          }
        ]
      },
      {
        "id": "q9",
        "type": "choice",
        "title": "别人怎么形容你的声音？",
        "options": [
          {
            "text": "鼻音重、有点扁",
            "effects": {
              "2.5": "need"
            }
          },
          {
            "text": "有点闷，像含在喉咙里",
            "effects": {
              "2.5": "need"
            }
          },
          {
            "text": "都没有，挺清楚的",
            "effects": {
              "2.5": "pass"
            }
          }
        ]
      },
      {
        "id": "q10",
        "type": "choice",
        "title": "能用结实的大声（不是假音）唱到副歌最高音吗？",
        "options": [
          {
            "text": "不能",
            "effects": {
              "2.6": "need"
            }
          },
          {
            "text": "能，但喉咙很累",
            "effects": {
              "2.6": "need"
            }
          },
          {
            "text": "能，而且不累",
            "effects": {
              "2.6": "pass"
            }
          }
        ]
      },
      {
        "id": "q11",
        "type": "choice",
        "title": "唱歌时咬字怎么样？",
        "options": [
          {
            "text": "常被说听不清唱的是什么",
            "effects": {
              "3.1": "need",
              "3.2": "need"
            }
          },
          {
            "text": "偶尔含糊，快歌更明显",
            "effects": {
              "3.1": "partial",
              "3.2": "partial"
            }
          },
          {
            "text": "清楚，而且有说话的语感",
            "effects": {
              "3.1": "pass",
              "3.2": "pass"
            }
          }
        ]
      },
      {
        "id": "q12",
        "type": "choice",
        "title": "同一句里，能从气声（带气的轻声）切回实声吗？",
        "options": [
          {
            "text": "不会用气声",
            "effects": {
              "3.3": "need"
            }
          },
          {
            "text": "气声有，但一用就收不回来",
            "effects": {
              "3.3": "partial"
            }
          },
          {
            "text": "收放自如",
            "effects": {
              "3.3": "pass"
            }
          }
        ]
      },
      {
        "id": "q13",
        "type": "choice",
        "title": "长音的尾巴会有颤音吗？",
        "options": [
          {
            "text": "没有，是直的",
            "effects": {
              "3.4": "need"
            }
          },
          {
            "text": "有，但感觉是下巴或喉咙在抖",
            "effects": {
              "3.4": "need"
            }
          },
          {
            "text": "有，自然的",
            "effects": {
              "3.4": "pass"
            }
          }
        ]
      },
      {
        "id": "q14",
        "type": "choice",
        "title": "快速转音（比如林俊杰、邓紫棋那种一串音）？",
        "options": [
          {
            "text": "跟不上",
            "effects": {
              "3.5": "need"
            }
          },
          {
            "text": "放慢能唱准",
            "effects": {
              "3.5": "partial"
            }
          },
          {
            "text": "原速能唱准",
            "effects": {
              "3.5": "pass"
            }
          }
        ]
      },
      {
        "id": "q15",
        "type": "choice",
        "title": "唱一整首歌时，你会怎么处理？",
        "options": [
          {
            "text": "从头到尾差不多一个力度",
            "effects": {
              "4.1": "need",
              "4.2": "need",
              "4.3": "need"
            }
          },
          {
            "text": "有意识地主歌轻、副歌推上去",
            "effects": {
              "4.1": "partial",
              "4.2": "partial",
              "4.3": "partial"
            }
          },
          {
            "text": "会设计每一段的情绪和强弱",
            "effects": {
              "4.1": "pass",
              "4.2": "pass",
              "4.3": "pass"
            }
          }
        ]
      },
      {
        "id": "q16",
        "type": "choice",
        "title": "麦克风用得怎么样？",
        "options": [
          {
            "text": "没怎么用过",
            "effects": {
              "4.4": "need"
            }
          },
          {
            "text": "KTV 常用，但没什么讲究",
            "effects": {
              "4.4": "partial"
            }
          },
          {
            "text": "会根据音量调整距离",
            "effects": {
              "4.4": "pass"
            }
          }
        ]
      }
    ]
  },
  "stages": [
    {
      "n": 1,
      "title": "气息与发声基础",
      "weeks": "3–4 周",
      "why": "匀速的气 + 放松的喉 + 唤醒声带闭合。高音变虚有两个根源：气流不稳，声带只能靠漏气撑住；声带闭不严，高音就滑进纯假声。",
      "lessons": [
        {
          "id": "1.1",
          "title": "弹唇（Lip Trill）",
          "ready": true,
          "goal": "嘴唇完全放松，被匀速的气流吹得连续颤动，再带上声音。",
          "misconception": "弹唇不是 buh buh 的爆破音（那是嘴唇主动在开合）。正确的是嘴唇不用力、被气流吹得“噗噜噜噜……”一串不断，像马打响鼻、小孩学摩托车。",
          "videos": [
            {
              "id": "cRI5kZfMrpk",
              "title": "【保姆级】手把手教你弹唇（打嘟嘟）",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "j6hBch7nT5Q",
              "title": "一节课教你学会唇颤音（打嘟噜），零基础必须",
              "lang": "中文"
            },
            {
              "id": "qkWkXKQWzDw",
              "title": "How To Lip Trill + Why You're Doing It Wrong",
              "lang": "英文",
              "note": "常见错误"
            },
            {
              "id": "UAR8jhWkRqA",
              "title": "How to Lip Trill + Alternative Exercises",
              "lang": "英文",
              "note": "吹不起来时的替代练法"
            }
          ],
          "steps": [
            {
              "title": "手指托脸",
              "body": "两只手的食指轻按在嘴角外侧、斜上方一点的脸颊肉上，微微往上托。嘴唇像睡着了一样，不抿。大部分人吹不起来，是因为嘴唇太紧，或者脸颊的重量压着嘴唇。"
            },
            {
              "title": "只吹气，不出声",
              "body": "像刚跑完步那样深深叹一口气，感觉肚子自然往里收、气往外涌。带着这股气让嘴唇颤起来。"
            },
            {
              "title": "加一点声音",
              "body": "嘴唇颤着的同时，喉咙里带一点很轻的中低音，像蚊子叫那么小。用下面的计时器数秒。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "颤两下就停",
              "cause": "嘴唇在用力或抿着",
              "fix": "托脸的手指再往上一点，嘴唇彻底放松"
            },
            {
              "symptom": "一开始很猛，马上断",
              "cause": "气一下子冲出去了",
              "fix": "想象慢慢吹凉一勺汤，匀速比力度重要"
            },
            {
              "symptom": "加声音后颤动就停",
              "cause": "出声时喉咙一紧，挡住了气",
              "fix": "声音再小一点，先保住颤动"
            },
            {
              "symptom": "口水乱飞、嘴唇发麻",
              "cause": "正常",
              "fix": "不用管"
            }
          ],
          "ladder": [
            {
              "id": "l1",
              "text": "不出声吹气颤动",
              "target": 5
            },
            {
              "id": "l2",
              "text": "带微弱中低音颤动",
              "target": 5
            },
            {
              "id": "l3",
              "text": "带音颤动，声音和颤动都不断",
              "target": 10
            },
            {
              "id": "l4",
              "text": "颤动中做滑音：低 → 高 → 低，中间不卡",
              "target": null
            },
            {
              "id": "l5",
              "text": "带音颤动 + 滑音跨过平时会变虚的音高也不断",
              "target": 15
            }
          ]
        },
        {
          "id": "1.2",
          "title": "S 音练习",
          "goal": "匀速吐气，找到腹部对抗的支撑感。",
          "ready": true,
          "misconception": "S 音不是吐完就停，也不是越用力越好。关键是声音大小前后一样，像慢慢漏气的轮胎。",
          "videos": [
            {
              "id": "Tg2lMFLClA0",
              "title": "唱歌气不够？两个诀窍随时随地练气息",
              "lang": "中文"
            },
            {
              "id": "wMRPsBd5inM",
              "title": "气息到底怎么练？解决练习气息时的误区",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "吸满一口气",
              "body": "吸到肚子两侧撑开，肩膀不动。手放在肩上，吸气时它不能抬。"
            },
            {
              "title": "发“嘶——”",
              "body": "声音要稳。手掌放在下腹，感受它慢慢往里收，而不是一下子瘪掉。"
            },
            {
              "title": "计时",
              "body": "尽量一口气到底，声音不忽大忽小，也不断气。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "后面越来越小",
              "cause": "吸气不够满",
              "fix": "吸到两侧撑开，再发"
            },
            {
              "symptom": "前面猛后面断",
              "cause": "一开始用力过猛",
              "fix": "想象慢慢吹凉一勺汤"
            },
            {
              "symptom": "肩膀抬起",
              "cause": "吸气时耸肩",
              "fix": "手放肩上感受，不让它动"
            },
            {
              "symptom": "“嘶”变成“呲”的爆音",
              "cause": "舌尖太靠牙齿",
              "fix": "放松舌尖，留一条缝"
            }
          ],
          "ladder": [
            {
              "id": "1.2-1",
              "text": "嘶——匀速吐气",
              "target": 25
            },
            {
              "id": "1.2-2",
              "text": "声音大小前后一致，不忽大忽小",
              "target": null
            },
            {
              "id": "1.2-3",
              "text": "一口气唱完你那句歌，不中途换气",
              "target": null
            }
          ]
        },
        {
          "id": "1.3",
          "title": "叹气发声与低喉位",
          "goal": "找到低喉位和打开的咽腔，发声不用喉咙去挤。",
          "ready": true,
          "misconception": "低喉位不是把喉咙压下去憋着，而是放松。像打哈欠那样，后面打开，喉结不上提。",
          "videos": [
            {
              "id": "zLzUNxadGKA",
              "title": "歌唱习作 6c：打哈欠 / 独立声门 / 放松唱歌",
              "lang": "中文"
            },
            {
              "id": "hYxph674XT4",
              "title": "稳定的喉咙位置就能把歌唱好吗？【低喉位篇】",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "找打开感",
              "body": "打一个哈欠，手指轻按喉结两侧。哈欠时喉咙不动，这就是打开的感觉。"
            },
            {
              "title": "叹气发声",
              "body": "发“哈——”，从高往低滑。声音像叹息，喉结不能往上冲。"
            },
            {
              "title": "哈变成啊",
              "body": "保持哈欠的打开，把“哈”慢慢换成“啊”，不咬字。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "喉咙发紧",
              "cause": "声音太大",
              "fix": "轻一点，像叹气"
            },
            {
              "symptom": "喉结跳动",
              "cause": "往上冲",
              "fix": "换一个更低的音"
            },
            {
              "symptom": "打开感没了",
              "cause": "下巴太紧",
              "fix": "下巴放松，往下落"
            }
          ],
          "ladder": [
            {
              "id": "1.3-1",
              "text": "打哈欠的打开感出来了，喉结不跳",
              "target": null
            },
            {
              "id": "1.3-2",
              "text": "叹气从高滑到低，喉咙不紧",
              "target": null
            },
            {
              "id": "1.3-3",
              "text": "“哈”换成“啊”，打开感保持住",
              "target": null
            }
          ]
        },
        {
          "id": "1.4",
          "title": "气泡音",
          "goal": "放松声带边缘，唤醒声带闭合。",
          "ready": true,
          "misconception": "气泡音不是沙哑的低沉声，也不是喉咙挤出来的。它是最低、最松的一种发声，像“咯咯咯”，声带轻轻地拍在一起。",
          "videos": [
            {
              "id": "SdyPQxJbAgA",
              "title": "学唱歌，一个重要的技巧——气泡音，两个练习",
              "lang": "中文"
            },
            {
              "id": "vLrjKuHLoKI",
              "title": "Vocal Fry - 气泡音",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "找最低的说话音",
              "body": "从说话时最低的音开始，发“咯——”。"
            },
            {
              "title": "拉长",
              "body": "慢慢拉长，像老木门慢慢打开的声音，持续 5 秒。"
            },
            {
              "title": "放松地说“哦”",
              "body": "说“哦”“啊”的时候，保持这种松。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "只有气，没有声音",
              "cause": "声带没合上",
              "fix": "音调再低一点，声音更小更松"
            },
            {
              "symptom": "喉咙疼",
              "cause": "太用力",
              "fix": "立即停下，喝温水"
            },
            {
              "symptom": "只能做一两下",
              "cause": "正常",
              "fix": "每天练 1 分钟，慢慢积累"
            }
          ],
          "ladder": [
            {
              "id": "1.4-1",
              "text": "能发出“咯咯”气泡音，持续 5 秒，喉咙不紧",
              "target": null
            },
            {
              "id": "1.4-2",
              "text": "说话时能自然带出气泡音尾音",
              "target": null
            },
            {
              "id": "1.4-3",
              "text": "气泡音能从低滑到稍高一点，不断",
              "target": null
            }
          ]
        },
        {
          "id": "1.5",
          "title": "气泡音接实声",
          "goal": "气泡音直接接上一个结实的“啊”，闭合感进入正常发声。",
          "ready": true,
          "misconception": "不是一遍遍练气泡音就好了。关键是从气泡音过渡到说话式的声音，中间不断。",
          "videos": [
            {
              "id": "aFCSZBFNGwA",
              "title": "学混声技巧：用 Vocal Fry 氣泡音连结胸腔与头腔共鸣",
              "lang": "中文"
            },
            {
              "id": "_1lQN6rB7zg",
              "title": "How To Practice Vocal Fry (Vocal Tutorial)",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "发气泡音",
              "body": "发“咯——”。"
            },
            {
              "title": "慢慢加一点气",
              "body": "气推多一点，声音从气泡音变成“啊”。不要猛推。"
            },
            {
              "title": "接上轻的啊，再接稍实的啊",
              "body": "保持松，中间不断。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "接不上，声音断",
              "cause": "气推得不够",
              "fix": "加一点气，但不要猛"
            },
            {
              "symptom": "接上后喉咙紧",
              "cause": "音量太大",
              "fix": "降低音量"
            },
            {
              "symptom": "声音太虚",
              "cause": "闭合不够",
              "fix": "回到气泡音多练"
            }
          ],
          "ladder": [
            {
              "id": "1.5-1",
              "text": "气泡音能直接接上轻的“啊”，不断",
              "target": null
            },
            {
              "id": "1.5-2",
              "text": "接上的“啊”结实，不漏气",
              "target": null
            },
            {
              "id": "1.5-3",
              "text": "用气泡音起头唱完你那句歌，开头干净不漏气",
              "target": null
            }
          ]
        },
        {
          "id": "1.6",
          "title": "音准与节奏",
          "goal": "跟住音高和节拍。Gemini 摸底判为已会，以入学测试结果为准。",
          "ready": true,
          "misconception": "音准不是唱得准才能唱，关键是听和跟。节奏是身体先动起来，再开口。",
          "videos": [
            {
              "id": "AFbGwafCixo",
              "title": "零基础学唱歌从哪开始？从音准开始，这六步按顺序来",
              "lang": "中文"
            },
            {
              "id": "YG3uBe94rdg",
              "title": "节奏对唱歌有多重要？如何练习节拍，解决掉拍、抢拍问题",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "哼鸣跟一个音",
              "body": "用“嗯”哼一个音，跟钢琴或手机的音高，保持 10 秒。"
            },
            {
              "title": "五声音阶上行下行",
              "body": "按 do re mi sol la 上行、下行，不跑调。"
            },
            {
              "title": "拍手再唱",
              "body": "拍手打 4/4 和 6/8，然后唱一句歌词，不抢拍。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "总是偏低",
              "cause": "喉咙压着",
              "fix": "放松喉咙，声音往前走"
            },
            {
              "symptom": "抢拍",
              "cause": "没听拍子就开口",
              "fix": "先数拍，再开口"
            },
            {
              "symptom": "一个音都跟不准",
              "cause": "太快",
              "fix": "放慢，一个音一个音练"
            }
          ],
          "ladder": [
            {
              "id": "1.6-1",
              "text": "哼鸣跟准一个音，持续 10 秒",
              "target": null
            },
            {
              "id": "1.6-2",
              "text": "五声音阶上下行不跑调",
              "target": null
            },
            {
              "id": "1.6-3",
              "text": "拍手打 4/4 和 6/8，唱一句歌词不抢拍",
              "target": null
            }
          ]
        }
      ],
      "daily": [
        {
          "text": "叹气放松：耸肩再放下 × 3，叹气 × 5",
          "min": 1
        },
        {
          "text": "弹唇：按当前进阶级别练",
          "min": 5
        },
        {
          "text": "S 音计时 × 3 次（开了第 2 课以后）",
          "min": 3
        },
        {
          "text": "唱一首舒适区的歌（《十年》或林宥嘉），只注意气别一下子用完",
          "min": 5
        }
      ],
      "pass": [
        {
          "id": "p1",
          "text": "带音弹唇 15 秒以上，滑音从低到高再回来不断"
        },
        {
          "id": "p2",
          "text": "S 音匀速吐气 25 秒以上，声音大小前后一致"
        },
        {
          "id": "p3",
          "text": "放松、持续的气泡音 5 秒以上，喉咙不紧"
        },
        {
          "id": "p4",
          "text": "气泡音能直接接到一个结实的“啊”，不漏气"
        },
        {
          "id": "p5",
          "text": "录一遍《说谎》或《十年》，长句不会中途断气"
        }
      ],
      "redlines": [
        "喉咙疼（不是累）：当天停，喝温水。",
        "练的时候头晕：气吹太猛了，降低力度，中间正常呼吸几次。"
      ]
    },
    {
      "n": 2,
      "title": "换声点与混声",
      "weeks": "6–8 周",
      "why": "打通真假声，副歌不再变虚。这是主战场。",
      "lessons": [
        {
          "id": "2.1",
          "title": "胸声与头声",
          "goal": "分清两种发声：胸声厚实，头声轻亮。目标是能分辨、能切换。",
          "ready": true,
          "misconception": "胸声和头声不是高低音的好坏之分，而是两种不同的发声方式。真正要练的是分得清、切得过去。",
          "videos": [
            {
              "id": "OXP5i16nczE",
              "title": "唱歌必学的三种声音！学会如何正确分别假声、头声、混声",
              "lang": "中文"
            },
            {
              "id": "LYXGOkS0JR4",
              "title": "6 分钟教你学会头声！解决高音发虚，假声不丝滑",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "找胸声",
              "body": "发“啊”，从低音开始，手放胸口，感觉震动在胸口。"
            },
            {
              "title": "找头声",
              "body": "轻轻发“嘟”或“呜”，声音轻。手放头顶，感觉声音在头里。"
            },
            {
              "title": "来回切换",
              "body": "胸声“啊”，然后轻轻切到头声，感受声音从厚到薄。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "胸声发出来很空",
              "cause": "闭合不够",
              "fix": "推一点点气，让声带合上"
            },
            {
              "symptom": "头声变成漏气的“哈”",
              "cause": "声音太虚",
              "fix": "加一点点支撑，声音往前"
            },
            {
              "symptom": "分不清两者",
              "cause": "没有用身体感觉",
              "fix": "手放胸口和头顶，哪边震动就是哪种"
            }
          ],
          "ladder": [
            {
              "id": "2.1-1",
              "text": "能分清胸声和头声（自己听得出来）",
              "target": null
            },
            {
              "id": "2.1-2",
              "text": "能在同一个音上切换胸声和头声",
              "target": null
            },
            {
              "id": "2.1-3",
              "text": "唱你那句歌时，能说出哪几个字用胸声、哪几个用头声",
              "target": null
            }
          ]
        },
        {
          "id": "2.2",
          "title": "找到换声点",
          "goal": "用滑音找出自己“翻、断、变虚”的音，知道换声点在哪里。",
          "ready": true,
          "misconception": "换声点不是“坏音”，是每个人都有的音区转换位置。目标不是消灭它，而是让它平滑过渡。",
          "videos": [
            {
              "id": "d4Sx-yIUcDE",
              "title": "歌唱技巧教學「滑音」(韋霖老師歌唱教學)",
              "lang": "中文"
            },
            {
              "id": "LVFWdw8VI9U",
              "title": "唱歌时如何转换真假声？",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "从低滑到高",
              "body": "发“嗯”，慢慢从低滑到高，像警报。"
            },
            {
              "title": "听哪里变了",
              "body": "留意声音突然变薄、变虚或破开的地方。"
            },
            {
              "title": "来回滑",
              "body": "在那个位置附近来回滑 3 次，记下大概的音名（用钢琴或手机看）。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "滑不上去",
              "cause": "滑得太快",
              "fix": "放慢，一个音一个音走"
            },
            {
              "symptom": "每次换声点的位置不一样",
              "cause": "正常",
              "fix": "用同一个元音，多练几次找稳定位置"
            },
            {
              "symptom": "滑的时候喉咙紧",
              "cause": "音量太大，下巴紧",
              "fix": "降低音量，放松下巴"
            }
          ],
          "ladder": [
            {
              "id": "2.2-1",
              "text": "能从低滑到高，指出换声点的位置",
              "target": null
            },
            {
              "id": "2.2-2",
              "text": "在换声点附近来回滑 3 次，声音稳定",
              "target": null
            },
            {
              "id": "2.2-3",
              "text": "把换声点的音名写进练习日志",
              "target": null
            }
          ]
        },
        {
          "id": "2.3",
          "title": "窄元音找混声",
          "goal": "用 Nay、Mum 这类窄元音，找到混声的感觉。",
          "ready": true,
          "misconception": "混声不是把胸声和头声硬拼在一起，而是用窄元音和适当的共鸣把两者融在一起。窄元音让喉咙少代偿。",
          "videos": [
            {
              "id": "fyywathulPM",
              "title": "【超干货教学】混声是什么？一个视频教会你混声，唱功瞬间质变！",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "ixPgpf4_EbA",
              "title": "Mixed Voice Vocal Exercise Female | NYA TWANG",
              "lang": "英文"
            },
            {
              "id": "lCnW14uicPo",
              "title": "Nay Nay Nay Vocal Exercise: Top Singing Exercises Part 4",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "说“Nay”",
              "body": "感受嘴角微微向两侧，上颚抬起。"
            },
            {
              "title": "用 Nay 唱一个中音",
              "body": "慢慢往上滑，保持 Nay 的感觉。"
            },
            {
              "title": "加一点点力度",
              "body": "不要喊。力度加在气上，不加在喉咙上。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "声音变鼻子",
              "cause": "嘴角拉得太紧",
              "fix": "放松嘴角，让声音从口腔出去"
            },
            {
              "symptom": "喉咙紧",
              "cause": "音量太大",
              "fix": "减小音量"
            },
            {
              "symptom": "声音突然虚掉",
              "cause": "闭合不够",
              "fix": "回到 2.2 的滑音练习"
            }
          ],
          "ladder": [
            {
              "id": "2.3-1",
              "text": "Nay 中音能唱 10 秒不断",
              "target": null
            },
            {
              "id": "2.3-2",
              "text": "用 Nay 从中音滑到换声点，不断气",
              "target": null
            },
            {
              "id": "2.3-3",
              "text": "加一点力度，声音结实但不喊",
              "target": null
            }
          ]
        },
        {
          "id": "2.4",
          "title": "换声区平滑过渡",
          "goal": "从胸声渐变到混声，跨换声点不断层。",
          "ready": true,
          "misconception": "不要硬冲换声点。要提前把声音变薄、变轻，让声音在换声点之前就开始过渡。",
          "videos": [
            {
              "id": "GjgBZrldJeA",
              "title": "你真的会唱假声吗？一条视频让你拥有德芙一般丝滑的真假声转换技术！",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "wCdPA77oYnU",
              "title": "如何唱歌2020｜#08 解决换声区，打开唱高音的大门",
              "lang": "中文"
            },
            {
              "id": "qn_LPVJHjTk",
              "title": "Blending Registers Singing - 4 Exercises to Smooth Transition from Chest to Head Voice",
              "lang": "英文"
            },
            {
              "id": "p6naj0XrYTU",
              "title": "Chest To Head Voice Transition - LIVE!",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "选一个音阶",
              "body": "用 Nay 或 Mum，从中音开始，慢慢往上。"
            },
            {
              "title": "提前变轻",
              "body": "在换声点前一两个音，把声音变轻一点。"
            },
            {
              "title": "过换声点不停",
              "body": "不换力度，让声音自然变化，不要停。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "过换声点突然变大",
              "cause": "没有提前变轻",
              "fix": "提前一两个音开始变轻"
            },
            {
              "symptom": "声音断掉",
              "cause": "气不够",
              "fix": "加一点支撑，不要猛推"
            },
            {
              "symptom": "跨过后喉咙紧",
              "cause": "下巴紧",
              "fix": "放松下巴，声音往前走"
            }
          ],
          "ladder": [
            {
              "id": "2.4-1",
              "text": "用 Nay 跨换声点不断层（自己听）",
              "target": null
            },
            {
              "id": "2.4-2",
              "text": "跨换声点时音量基本一致",
              "target": null
            },
            {
              "id": "2.4-3",
              "text": "录一段，和 2.2 时的录音对比",
              "target": null
            }
          ]
        },
        {
          "id": "2.5",
          "title": "共鸣调配",
          "goal": "口腔、咽腔、鼻腔的比例，不扁不闷。",
          "ready": true,
          "misconception": "共鸣不是靠鼻子唱，也不是靠喉咙包住。鼻音太重会扁，咽腔关太紧会闷，要找平衡。",
          "videos": [
            {
              "id": "O1AZSAXQEzs",
              "title": "如何练习鼻腔共鸣？|唱歌技巧教学/nasal resonance",
              "lang": "中文"
            },
            {
              "id": "0hweSPOoNX4",
              "title": "共鸣（四）｜口腔共鸣：咽腔、喉腔、口腔",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "保持打开感",
              "body": "把 1.3 的打哈欠感保持住。"
            },
            {
              "title": "找鼻腔感",
              "body": "发“嗯”，感觉鼻子在震动，但不是堵住。"
            },
            {
              "title": "“嗯”变“啊”",
              "body": "保持一点鼻腔的感觉，声音从嘴里出来。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "鼻子堵住的感觉",
              "cause": "“嗯”太用力",
              "fix": "减少鼻腔感，声音放轻"
            },
            {
              "symptom": "声音闷、含着",
              "cause": "嘴张得不够，咽腔关紧",
              "fix": "张大一点，打开咽腔"
            },
            {
              "symptom": "声音太扁",
              "cause": "鼻腔太多",
              "fix": "减少鼻腔，加一点口腔打开"
            }
          ],
          "ladder": [
            {
              "id": "2.5-1",
              "text": "用“嗯”找到鼻腔感，且不堵住",
              "target": null
            },
            {
              "id": "2.5-2",
              "text": "把“嗯”变成“啊”，声音圆润不扁",
              "target": null
            },
            {
              "id": "2.5-3",
              "text": "唱一句歌词，清楚不闷",
              "target": null
            }
          ]
        },
        {
          "id": "2.6",
          "title": "强混声（Belting）入门",
          "goal": "安全地唱出结实的高位强音。",
          "ready": true,
          "misconception": "强混声不是喊出来的。它需要稳定的闭合和支撑。喉咙疼，说明方法不对，立刻停。",
          "videos": [
            {
              "id": "oupk9muA1W4",
              "title": "【超干货教学】强混也分流派？唱高音的必经之路！教你正确掌握2种唱出强混的方式！赶紧收藏练起",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "0HxFb2MOwvw",
              "title": "Learn how to belt safely",
              "lang": "英文"
            },
            {
              "id": "mBXuyb3f2iQ",
              "title": "The Ultimate Guide To Belting - Beginner Singing Lesson",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "先用 Nay 唱中高音",
              "body": "保持混声的感觉，不用力。"
            },
            {
              "title": "慢慢加一点力度",
              "body": "力度加在气上，喉咙不能更紧。"
            },
            {
              "title": "只练一个音",
              "body": "每次不超过 10 秒，然后休息。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "喉咙痛",
              "cause": "用力过猛",
              "fix": "立即停止，喝温水，几天不练强音"
            },
            {
              "symptom": "声音变成喊",
              "cause": "力度太大",
              "fix": "减到七成力"
            },
            {
              "symptom": "很难上去",
              "cause": "硬冲换声点",
              "fix": "先回到 2.4 练过渡，别硬冲"
            }
          ],
          "ladder": [
            {
              "id": "2.6-1",
              "text": "中高音用 Nay 加力度，声音结实不喊",
              "target": null
            },
            {
              "id": "2.6-2",
              "text": "一个音持续 10 秒，喉咙不痛",
              "target": null
            },
            {
              "id": "2.6-3",
              "text": "你那句歌最高的一个字，用强混声唱出来，录音里不像喊",
              "target": null
            }
          ]
        }
      ],
      "pass": [
        {
          "id": "s2-1",
          "text": "能分清胸声和头声，并在同一个音上切换"
        },
        {
          "id": "s2-2",
          "text": "找到了自己的换声点，并写进练习日志"
        },
        {
          "id": "s2-3",
          "text": "用 Nay 从中音滑到换声点不断气"
        },
        {
          "id": "s2-4",
          "text": "跨换声点时音量基本一致，录音里听不到断层"
        },
        {
          "id": "s2-5",
          "text": "不鼻、不闷，唱一句歌词清楚"
        },
        {
          "id": "s2-6",
          "text": "中高音用 Nay 加力度，一个音 10 秒，喉咙不痛"
        }
      ],
      "redlines": [
        "喉咙疼（不是累）：当天停，喝温水，第二天只做 2.1 的轻声练习。",
        "强音（2.6）练两周还是喉咙紧，找一位声乐老师看一次，不要自己硬练。"
      ],
      "daily": [
        {
          "text": "弹唇或叹气放松，热身",
          "min": 2
        },
        {
          "text": "从低到高滑音，找到并路过换声点",
          "min": 3
        },
        {
          "text": "Nay 音阶，中音到换声点",
          "min": 5
        },
        {
          "text": "用今天的方法唱你那句歌",
          "min": 3
        }
      ]
    },
    {
      "n": 3,
      "title": "流行演唱技巧",
      "weeks": "4–6 周",
      "why": "摆脱晚会腔，唱出当代流行的味道。",
      "lessons": [
        {
          "id": "3.1",
          "title": "咬字",
          "goal": "字头清晰、字腹归韵、字尾干脆，唱出说话的语感。",
          "ready": true,
          "misconception": "咬字不是把字咬得很重，而是字头快、字腹长、字尾轻收。声音要在字腹上唱，字不能挡住声音。",
          "videos": [
            {
              "id": "4ivPE5AvqAY",
              "title": "歌唱硬知識 字頭字腹字尾 ｜秀珠老師 中文歌唱秘方",
              "lang": "中文"
            },
            {
              "id": "zdkwgeAwC90",
              "title": "【新手学唱歌】90%的人都会忽略的唱歌咬字的技巧",
              "lang": "中文"
            },
            {
              "id": "rpnJqUqj8Ww",
              "title": "【唱歌教学】咬字第一步：4分钟学会正确的咬字动作",
              "lang": "中文"
            }
          ],
          "steps": [
            {
              "title": "字头",
              "body": "唱之前把辅音轻快地打出来，不拖，不占拍。"
            },
            {
              "title": "字腹",
              "body": "把元音拉长，声音在这里唱出来。"
            },
            {
              "title": "字尾",
              "body": "收音轻、干脆，不多停留。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "字头拖得很长",
              "cause": "辅音占了拍子",
              "fix": "辅音提前打，然后马上进元音"
            },
            {
              "symptom": "字腹太短，声音断",
              "cause": "元音没有拉开",
              "fix": "在元音上唱，字尾再收"
            },
            {
              "symptom": "咬字时喉咙僵硬",
              "cause": "用喉咙去咬字",
              "fix": "嘴唇和舌尖咬字，喉咙保持放松"
            }
          ],
          "ladder": [
            {
              "id": "3.1-1",
              "text": "能把一句歌词的字头、字腹、字尾分开说出来",
              "target": null
            },
            {
              "id": "3.1-2",
              "text": "慢歌一句，每个字清楚但不僵",
              "target": null
            },
            {
              "id": "3.1-3",
              "text": "快歌一句，字还清楚、节奏不乱",
              "target": null
            }
          ]
        },
        {
          "id": "3.2",
          "title": "连音与断音",
          "goal": "慢歌连贯、快歌律动：会连，也会切。",
          "ready": true,
          "misconception": "连音不是把字粘在一起含糊唱，断音也不是用喉咙顿一下。两者都靠气的支撑来控制。",
          "videos": [
            {
              "id": "ZPDf6_kqHCs",
              "title": "唱歌发声练习每日打卡|哼鸣、跳音、“打嘟\"、音阶琶音|Elaine音乐小课堂",
              "lang": "中文",
              "note": "跳音示范"
            },
            {
              "id": "Z-r7I7gtT_U",
              "title": "Ep: 33 - How to Sing Staccato to Legato - Jeff Alani Stanfill",
              "lang": "英文"
            },
            {
              "id": "Rf8cEBy_aQM",
              "title": "Singing Staccato & Legato On One Breath (Eeeee Vowel Sound)",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "连音",
              "body": "用“呜”唱一串连续的音，气不断，像滑过去。"
            },
            {
              "title": "断音",
              "body": "同一串音，每个音用轻短的“哈”切开，不要喉咙一顿。"
            },
            {
              "title": "同一句两种唱法",
              "body": "一句歌词，慢歌用连音、快歌用断音，各唱一遍。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "连音时声音断开",
              "cause": "气断了",
              "fix": "用同一力度，气一直流"
            },
            {
              "symptom": "断音时喉咙卡住",
              "cause": "用喉咙切",
              "fix": "用气切，不用喉咙"
            },
            {
              "symptom": "断得太重，像喊",
              "cause": "力度太大",
              "fix": "减力度，断在气上"
            }
          ],
          "ladder": [
            {
              "id": "3.2-1",
              "text": "连音一串音不断气",
              "target": null
            },
            {
              "id": "3.2-2",
              "text": "断音清楚，喉咙不卡",
              "target": null
            },
            {
              "id": "3.2-3",
              "text": "同一句歌词能切换两种唱法",
              "target": null
            }
          ]
        },
        {
          "id": "3.3",
          "title": "气声收放",
          "goal": "同一句里，气声与实声能自由切换。",
          "ready": true,
          "misconception": "气声不是漏气的虚声。它是有意的、受控的，关键是能收得回来。",
          "videos": [
            {
              "id": "ptE7FwPI6d0",
              "title": "如何唱气音？|唱歌技巧教学/aspirate",
              "lang": "中文"
            },
            {
              "id": "e2BE1N3FIAc",
              "title": "How To Sing with a Breathy, Airy Tone - 1 Minute Vocal Technique",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "句尾加气声",
              "body": "先用实声唱一句，在句尾加一点点气声。"
            },
            {
              "title": "句首气声",
              "body": "反过来：气声开头，结尾收回实声。"
            },
            {
              "title": "一句里切换",
              "body": "同一句歌词，中间一个字用气声，其他实声。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "气声收不回来",
              "cause": "实声的闭合不够",
              "fix": "先回到 1.4 和 2.1 练闭合"
            },
            {
              "symptom": "声音太虚没力",
              "cause": "气太多，支撑不够",
              "fix": "少一点气，多一点支撑"
            },
            {
              "symptom": "气声变成爆破的“哈”",
              "cause": "力度太猛",
              "fix": "放轻"
            }
          ],
          "ladder": [
            {
              "id": "3.3-1",
              "text": "句尾能加气声，并收回实声",
              "target": null
            },
            {
              "id": "3.3-2",
              "text": "句首用气声开始，再收回实声",
              "target": null
            },
            {
              "id": "3.3-3",
              "text": "一句里能切换两次",
              "target": null
            }
          ]
        },
        {
          "id": "3.4",
          "title": "颤音（Vibrato）",
          "goal": "气流驱动的自然颤音，不是下巴或喉头抖。",
          "ready": true,
          "misconception": "自然颤音是稳定的气息和放松的声带带来的。下巴抖、喉头抖是错的，会把音准也抖掉。",
          "videos": [
            {
              "id": "_sssfxDkYv8",
              "title": "最通俗易懂的颤音教学！你学废了吗？",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "acLF55jF-qY",
              "title": "如何唱颤音？|唱歌技巧 Vibrato",
              "lang": "中文"
            },
            {
              "id": "gXVVQ-5o5YE",
              "title": "How to Sing With Vibrato - Singing Lesson",
              "lang": "英文"
            },
            {
              "id": "uRtx9-AVFSA",
              "title": "How to Sing with Vibrato | Easy Exercises for a Natural Vibrato",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "先唱稳",
              "body": "用“哦”唱一个长音，先保持不颤，声音稳定 5 秒。"
            },
            {
              "title": "让它微微起伏",
              "body": "像海浪一样，让音高和音量轻轻起伏。"
            },
            {
              "title": "慢慢加快到自然速度",
              "body": "不要用手去控制，让它自然出来。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "下巴抖",
              "cause": "下巴紧",
              "fix": "下巴放松，手放在下巴上感觉有没有抖"
            },
            {
              "symptom": "喉咙抖",
              "cause": "喉咙在挤",
              "fix": "声音放松，像叹气一样"
            },
            {
              "symptom": "颤动时音准飘",
              "cause": "幅度太大",
              "fix": "减小幅度，慢一点"
            }
          ],
          "ladder": [
            {
              "id": "3.4-1",
              "text": "长音稳定 5 秒，不颤",
              "target": null
            },
            {
              "id": "3.4-2",
              "text": "颤动来自气流，不靠下巴",
              "target": null
            },
            {
              "id": "3.4-3",
              "text": "颤动幅度小，音准不飘",
              "target": null
            }
          ]
        },
        {
          "id": "3.5",
          "title": "滑音与转音（Runs & Riffs）",
          "goal": "快速音阶跑动的基础，每个音点都准。",
          "ready": true,
          "misconception": "转音不是把音唱快，而是每个音都准。先慢，再快。",
          "videos": [
            {
              "id": "W_vveYOE-Fk",
              "title": "滑音（riffs /runs）怎么唱？英文歌中最重要的技巧指南",
              "lang": "中文"
            },
            {
              "id": "DT4jWTk36Vo",
              "title": "How to MASTER Riffs & Runs | My “RUN DOWN” METHOD for Singers",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "慢速唱准",
              "body": "选一个简单的小音阶，每个音都唱准。"
            },
            {
              "title": "用 la 唱转音",
              "body": "把音阶唱成一串小转音，每个音点停一下。"
            },
            {
              "title": "慢慢提速",
              "body": "保持音点准，不糊成一团。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "音跑偏",
              "cause": "太快",
              "fix": "放慢，一个音一个音找"
            },
            {
              "symptom": "糊成一团",
              "cause": "音太多",
              "fix": "减少音数，每个音都清楚"
            },
            {
              "symptom": "喉咙跟不上",
              "cause": "用喉咙冲",
              "fix": "用气推，不用喉咙冲"
            }
          ],
          "ladder": [
            {
              "id": "3.5-1",
              "text": "慢速小音阶每个音都准",
              "target": null
            },
            {
              "id": "3.5-2",
              "text": "用 la 唱出一串转音，音点清楚",
              "target": null
            },
            {
              "id": "3.5-3",
              "text": "原速唱出一段流行歌里的转音",
              "target": null
            }
          ]
        },
        {
          "id": "3.6",
          "title": "撕裂音（选修）",
          "goal": "安全地加入一点沙感（grit）。",
          "ready": true,
          "misconception": "grit 需要成熟的闭合和支撑。没有老师面授的情况下，不要硬做。",
          "videos": [
            {
              "id": "Hi-xCUEZRWs",
              "title": "《聲音實驗室EP11》撕裂音的4種用法！｜SV科學歌唱@富安老師",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "YGSnbHraAtQ",
              "title": "How To Sing With Distortion and Rasp Or Grit - Ken Tamplin Vocal Academy Tutorial",
              "lang": "英文"
            },
            {
              "id": "VMCqabaXQKQ",
              "title": "How to Add GRIT, Distortion & Power to Your MIXED VOICE! (3 Steps)",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "先把强混声唱稳",
              "body": "用 2.6 的方法，先唱稳中高音。"
            },
            {
              "title": "从气泡音开始",
              "body": "用 1.4 的气泡音作为起点，慢慢加一点沙感。"
            },
            {
              "title": "只加一点点",
              "body": "每次只做几秒，不超过几秒钟。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "喉咙痛",
              "cause": "用力过猛",
              "fix": "立即停止，选修可以先放一放"
            },
            {
              "symptom": "声音破碎",
              "cause": "力度太大",
              "fix": "回到气泡音，减少力度"
            },
            {
              "symptom": "只能在一个音上做",
              "cause": "正常",
              "fix": "先从一个音开始"
            }
          ],
          "ladder": [
            {
              "id": "3.6-1",
              "text": "在气泡音上加一点沙感（自己听得出）",
              "target": null
            },
            {
              "id": "3.6-2",
              "text": "在一个中音上加沙感 3 秒，喉咙不痛",
              "target": null
            },
            {
              "id": "3.6-3",
              "text": "在歌里一个字上加沙感，唱完喉咙不干不痛",
              "target": null
            }
          ],
          "optional": true
        }
      ],
      "pass": [
        {
          "id": "s3-1",
          "text": "字头、字腹、字尾分得清，快歌也清楚"
        },
        {
          "id": "s3-2",
          "text": "连音和断音能自如切换"
        },
        {
          "id": "s3-3",
          "text": "句中能收放气声"
        },
        {
          "id": "s3-4",
          "text": "颤音自然，不靠下巴"
        },
        {
          "id": "s3-5",
          "text": "小转音的音点准"
        }
      ],
      "redlines": [
        "喉咙疼（不是累）：当天停，喝温水。",
        "颤音带下巴抖或喉头抖：停止练习，回到 3.4 的先唱稳。",
        "撕裂音（3.6）是选修，没有老师面授就先不做。"
      ],
      "daily": [
        {
          "text": "弹唇热身，从低滑到高",
          "min": 2
        },
        {
          "text": "把你那句歌慢慢念一遍，练咬字",
          "min": 3
        },
        {
          "text": "练今天这一课的技巧",
          "min": 5
        },
        {
          "text": "整句唱一遍并录下来",
          "min": 3
        }
      ]
    },
    {
      "n": 4,
      "title": "歌曲实战",
      "weeks": "4 周",
      "why": "从练声走到作品。",
      "lessons": [
        {
          "id": "4.1",
          "title": "歌曲结构拆解",
          "goal": "主歌克制、副歌推进、桥段转折。",
          "ready": true,
          "misconception": "好的演唱不是每句都唱最大声，而是知道每一段要做什么。",
          "videos": [
            {
              "id": "0MHMw1QvDOg",
              "title": "破億唱到斷氣神曲《跳樓機》| 10分鐘手把手教你如何唱好！| Calvin歌唱小教室",
              "lang": "中文",
              "note": "拆一首歌"
            },
            {
              "id": "JUszn04txes",
              "title": "How Song Structure Works: Intro, Verse, Chorus, and Bridge Explained",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "找结构",
              "body": "拿一首歌，标出主歌、副歌、桥段。"
            },
            {
              "title": "给每段一个词",
              "body": "主歌“讲”，副歌“推”，桥段“转”。"
            },
            {
              "title": "用词决定力度和音色",
              "body": "每一段按这个词来唱。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "从头到尾一个力度",
              "cause": "没有分段",
              "fix": "每段先定一个词"
            },
            {
              "symptom": "副歌一下子太猛",
              "cause": "前面没留空间",
              "fix": "副歌前一段收一点"
            },
            {
              "symptom": "桥段没有变化",
              "cause": "没有换音色",
              "fix": "桥段换力度或音色"
            }
          ],
          "ladder": [
            {
              "id": "4.1-1",
              "text": "能说出一首歌的段落结构",
              "target": null
            },
            {
              "id": "4.1-2",
              "text": "每一段有一个情绪词",
              "target": null
            },
            {
              "id": "4.1-3",
              "text": "按情绪词唱一遍，段落之间有明显对比",
              "target": null
            }
          ]
        },
        {
          "id": "4.2",
          "title": "强弱对比",
          "goal": "渐强渐弱的精细控制。",
          "ready": true,
          "misconception": "强弱靠的是气息，不是喉咙。音量大了就用力，是错的。",
          "videos": [
            {
              "id": "Gd74GpKbH7c",
              "title": "唱歌情感表達：如何馬上唱歌有感情？跟輕重音有關係？｜簡單歌唱 singple. #98",
              "lang": "中文",
              "note": "直播回放"
            },
            {
              "id": "kBgOa2DmsiA",
              "title": "How to Sing with Dynamics",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "渐强",
              "body": "长音从弱到强，音准不飘。"
            },
            {
              "title": "渐弱",
              "body": "从强到弱，气慢慢放。"
            },
            {
              "title": "一句里做对比",
              "body": "歌词中间做一次渐强，一次渐弱。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "渐强时音变高、喉咙紧",
              "cause": "加了力，没有加气",
              "fix": "加气，不加力"
            },
            {
              "symptom": "渐弱时声音断",
              "cause": "支撑没了",
              "fix": "保持支撑，气慢慢放"
            },
            {
              "symptom": "对比不明显",
              "cause": "放得不够",
              "fix": "把差别放大"
            }
          ],
          "ladder": [
            {
              "id": "4.2-1",
              "text": "长音渐强渐弱，音准不飘",
              "target": null
            },
            {
              "id": "4.2-2",
              "text": "一句歌词里有一次明显对比",
              "target": null
            },
            {
              "id": "4.2-3",
              "text": "录一段，对比前后差别",
              "target": null
            }
          ]
        },
        {
          "id": "4.3",
          "title": "以情带声",
          "goal": "用呼吸、停顿和表情传达情绪。",
          "ready": true,
          "misconception": "情绪不是靠加力气来的，而是靠想象和细节，比如一个停顿、一次呼吸。",
          "videos": [
            {
              "id": "Gd74GpKbH7c",
              "title": "唱歌情感表達：如何馬上唱歌有感情？跟輕重音有關係？｜簡單歌唱 singple. #98",
              "lang": "中文",
              "note": "直播回放"
            },
            {
              "id": "WxN4FkNohxo",
              "title": "The ACTUAL Techniques for Singing with Emotion",
              "lang": "英文"
            },
            {
              "id": "_pzqzHw6-Ns",
              "title": "How to Sing with EMOTION and FEELING - Secret Vocal Techniques used by Adele & Ed Sheeran",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "只说这句话",
              "body": "选一句你最有感觉的歌词，只说出来，感受情绪。"
            },
            {
              "title": "用说话的语气唱",
              "body": "保留刚才的情绪，唱一遍。"
            },
            {
              "title": "加一处呼吸或停顿",
              "body": "在句中加一次呼吸或停顿，表达情绪。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "情绪做作",
              "cause": "先加情绪再平静唱",
              "fix": "先平静唱，再慢慢加"
            },
            {
              "symptom": "声音和情绪脱节",
              "cause": "没有想象这句话是对谁说的",
              "fix": "先想象这句话是对一个人说的"
            },
            {
              "symptom": "呼吸声太大",
              "cause": "用力吸气",
              "fix": "呼吸轻一点"
            }
          ],
          "ladder": [
            {
              "id": "4.3-1",
              "text": "能说出这句歌词在讲什么",
              "target": null
            },
            {
              "id": "4.3-2",
              "text": "唱的时候有一处自然的呼吸或停顿",
              "target": null
            },
            {
              "id": "4.3-3",
              "text": "录音里能听到情绪变化",
              "target": null
            }
          ]
        },
        {
          "id": "4.4",
          "title": "麦克风",
          "goal": "麦克风距离控制、近讲效应、避免喷麦。",
          "ready": true,
          "misconception": "麦克风不是离嘴越近越好。太近低频厚但容易喷麦，太远声音会薄。",
          "videos": [
            {
              "id": "nNUFkjVJFdQ",
              "title": "【歌唱發聲】EP.12 解決唱歌聲音虛！聲音【唔入Mic】｜KMS現代歌唱研究所",
              "lang": "粤语"
            },
            {
              "id": "cnoDzNwFJlA",
              "title": "Sing Like a Pro: Mic Distance is Key to Great Vocals",
              "lang": "英文"
            },
            {
              "id": "t0z_V5kJKXw",
              "title": "How to Sing with a Recording Mic & Dealing with Proximity Effect from Vocals",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "握麦",
              "body": "麦头略斜对着嘴，避免直吹。"
            },
            {
              "title": "用一句歌词试距离",
              "body": "轻声时靠近，大声时后退。"
            },
            {
              "title": "录一段听",
              "body": "看有没有喷麦声，声音是否平稳。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "喷麦的“噗”声",
              "cause": "麦头正对嘴",
              "fix": "麦头斜一点，或者后退"
            },
            {
              "symptom": "声音薄",
              "cause": "离得太远",
              "fix": "近一点"
            },
            {
              "symptom": "大声时破音",
              "cause": "离得太近，音量太大",
              "fix": "后退，或降低音量"
            }
          ],
          "ladder": [
            {
              "id": "4.4-1",
              "text": "轻声和大声都用了合适的距离",
              "target": null
            },
            {
              "id": "4.4-2",
              "text": "录音没有喷麦声",
              "target": null
            },
            {
              "id": "4.4-3",
              "text": "能说出自己用的距离",
              "target": null
            }
          ]
        },
        {
          "id": "4.5",
          "title": "结业作品",
          "goal": "完整录一首《说谎》，和入学时对比。",
          "ready": true,
          "misconception": "结业不是比谁唱得完美，而是看你每一课之后的变化。",
          "videos": [
            {
              "id": "_m9BewNzfz4",
              "title": "我是如何录歌的",
              "lang": "中文",
              "note": "先看这个"
            },
            {
              "id": "mn5JuYjpo5M",
              "title": "How To Record a Cover Song: Step By Step Guide",
              "lang": "英文"
            },
            {
              "id": "gmPG86i5_og",
              "title": "How To Record Vocals On Your Phone – Best Mic & Pro Setup Tips",
              "lang": "英文"
            }
          ],
          "steps": [
            {
              "title": "选定《说谎》",
              "body": "用入学时的同一首歌，才好对比。"
            },
            {
              "title": "安静环境录两遍",
              "body": "用手机就行，最好录两遍，选一版。"
            },
            {
              "title": "写下三处变化",
              "body": "和 1.1 的录音、入学测试结果对比，写下三处变化。"
            }
          ],
          "troubleshooting": [
            {
              "symptom": "录音紧张",
              "cause": "没热身",
              "fix": "先唱两遍热身再录"
            },
            {
              "symptom": "不知道和什么比",
              "cause": "没有基准",
              "fix": "把入学时的录音和现在对比"
            },
            {
              "symptom": "不满意",
              "cause": "想一次做完美",
              "fix": "结业作品允许再录，只留一版"
            }
          ],
          "ladder": [
            {
              "id": "4.5-1",
              "text": "从头到尾完整录下《说谎》",
              "target": null
            },
            {
              "id": "4.5-2",
              "text": "写下三处变化",
              "target": null
            },
            {
              "id": "4.5-3",
              "text": "把录音放进 assets/ 或网页里下载存档",
              "target": null
            }
          ],
          "optional": true
        }
      ],
      "pass": [
        {
          "id": "s4-1",
          "text": "能说出一首歌的段落结构，每段有情绪词"
        },
        {
          "id": "s4-2",
          "text": "强弱对比明显，音准不飘"
        },
        {
          "id": "s4-3",
          "text": "以情带声，录音里能听到情绪"
        },
        {
          "id": "s4-4",
          "text": "麦克风距离合适，没有喷麦"
        },
        {
          "id": "s4-5",
          "text": "完整录完《说谎》，写下三处变化"
        }
      ],
      "redlines": [
        "录音时喉咙紧：先停，休息再录。",
        "唱不上去的高音不要硬唱，回到第 2 阶段。"
      ],
      "daily": [
        {
          "text": "热身：弹唇 + Nay 滑音",
          "min": 3
        },
        {
          "text": "选一段歌（主歌或副歌）按今天的方法唱",
          "min": 8
        },
        {
          "text": "录一遍，听一遍，写下一个要改的地方",
          "min": 4
        }
      ]
    }
  ],
  "songs": [
    {
      "stage": "1–2 入门",
      "items": [
        "陈奕迅《十年》",
        "毛不易《消愁》"
      ],
      "focus": "中音区气流稳定、长句不断气"
    },
    {
      "stage": "2–3 进阶",
      "items": [
        "周杰伦《晴天》",
        "林宥嘉《说谎》"
      ],
      "focus": "换声点、强弱变化"
    },
    {
      "stage": "3–4 高阶",
      "items": [
        "林俊杰《可惜没如果》",
        "华晨宇《烟火里的尘埃》"
      ],
      "focus": "混声往上扩展、高张力副歌"
    }
  ],
  "benchmark": "每个阶段开始和结束时，各录一遍《说谎》，前后对比最直观。",
  "why": "很多人唱歌会遇到三件事：高音一上去就喊或变虚，唱几首歌嗓子就干，长句唱着唱着就断气。这门课不是先教你唱某一首歌，而是先教你用对身体：让气稳、让声带合拢、让声音在高低之间平滑过渡。学完你能唱得更久、更稳，高音不用挤，唱歌也更有自己的味道。",
  "glossary": {
    "lip": {
      "name": "弹唇",
      "plain": "嘴唇放松，被气流吹得连续抖动，发出“噗噜噜”。它能看出你的气稳不稳。",
      "demo": [
        "cRI5kZfMrpk",
        "【保姆级】手把手教你弹唇（打嘟嘟）"
      ]
    },
    "breath": {
      "name": "气息",
      "plain": "唱歌用的气。从肚子和胸口出来，要受控地慢慢放，不是一下子吹出去。",
      "demo": [
        "Tg2lMFLClA0",
        "唱歌气不够？两个诀窍随时随地练气息"
      ]
    },
    "support": {
      "name": "支撑",
      "plain": "吸满气后，肚子不瘪下去，用腹部慢慢控制气出来的那种感觉。",
      "demo": [
        "wMRPsBd5inM",
        "气息到底怎么练？解决练习气息时的误区"
      ]
    },
    "larynx": {
      "name": "喉位",
      "plain": "唱歌时喉咙的位置和松紧。太高、太紧，声音就会喊或挤。",
      "demo": [
        "hYxph674XT4",
        "稳定的喉咙位置就能把歌唱好吗？【低喉位篇】"
      ]
    },
    "open": {
      "name": "打开感",
      "plain": "哈欠时后咽喉那一块自然打开的感觉。声音圆、不挤，就靠它。",
      "demo": [
        "zLzUNxadGKA",
        "歌唱习作 6c：打哈欠 / 独立声门 / 放松唱歌"
      ]
    },
    "sigh": {
      "name": "叹气发声",
      "plain": "像叹气一样把声音“哈”出来，从高往低滑。它帮你找到放松的发声。",
      "demo": [
        "zLzUNxadGKA",
        "歌唱习作 6c：打哈欠 / 独立声门 / 放松唱歌"
      ]
    },
    "fry": {
      "name": "气泡音",
      "plain": "最低、最松的“咯咯咯”，声带边缘轻轻合上，像老木门慢慢打开的声音。",
      "demo": [
        "SdyPQxJbAgA",
        "学唱歌，一个重要的技巧—气泡音，两个练习"
      ]
    },
    "pitch": {
      "name": "音高",
      "plain": "声音的高低。唱准，就是你发出的音高和旋律里那个音一样。",
      "demo": [
        "AFbGwafCixo",
        "零基础学唱歌从哪开始？从音准开始，这六步按顺序来"
      ]
    },
    "rhythm": {
      "name": "节奏",
      "plain": "声音在拍子上的位置。开口和拍子对齐，就不抢拍、不拖拍。",
      "demo": [
        "YG3uBe94rdg",
        "节奏对唱歌有多重要？如何练习节拍"
      ]
    },
    "chest": {
      "name": "胸声",
      "plain": "厚实、有胸腔共鸣感的声音，通常用在低音和中音。",
      "demo": [
        "OXP5i16nczE",
        "唱歌必学的三种声音！学会如何正确分别假声、头声、混声"
      ]
    },
    "head": {
      "name": "头声",
      "plain": "轻、亮、靠头腔共鸣的声音，常用在高音。",
      "demo": [
        "LYXGOkS0JR4",
        "6 分钟教你学会头声！解决高音发虚，假声不丝滑"
      ]
    },
    "falsetto": {
      "name": "假声",
      "plain": "很轻、像带着一点气的高音。它不是坏声音，问题是长时间只用它就会虚。",
      "demo": [
        "OXP5i16nczE",
        "唱歌必学的三种声音！学会如何正确分别假声、头声、混声"
      ]
    },
    "register": {
      "name": "声区",
      "plain": "声音的几个区域：胸声区、混声区、头声区。每个区的发声感觉不一样。",
      "demo": [
        "GjgBZrldJeA",
        "你真的会唱假声吗？丝滑的真假声转换技术"
      ]
    },
    "break": {
      "name": "换声点",
      "plain": "从一个声区转到另一个声区的位置。很多人在这里会“翻、断、变虚”。每个人都有，要学的是让它过渡平滑。",
      "demo": [
        "d4Sx-yIUcDE",
        "歌唱技巧教學「滑音」(韋霖老師歌唱教學)"
      ]
    },
    "glide": {
      "name": "滑音",
      "plain": "从一个音平滑地滑到另一个音，像警报声。用来找换声点最直接。",
      "demo": [
        "d4Sx-yIUcDE",
        "歌唱技巧教學「滑音」(韋霖老師歌唱教學)"
      ]
    },
    "mix": {
      "name": "混声",
      "plain": "胸声和头声融在一起的声音：结实，又不喊。流行歌的高音大多靠它。",
      "demo": [
        "fyywathulPM",
        "【超干货教学】混声是什么？一个视频教会你混声"
      ]
    },
    "nay": {
      "name": "窄元音（Nay）",
      "plain": "像“Nay”“Mum”这种嘴形比较窄的音。它让喉咙少代偿，是找混声的好帮手。",
      "demo": [
        "lCnW14uicPo",
        "Nay Nay Nay Vocal Exercise: Top Singing Exercises Part 4"
      ]
    },
    "belt": {
      "name": "强混声（Belting）",
      "plain": "高位、结实、有力的强音。它很有冲击力，但要稳住闭合和支撑，否则伤嗓子。",
      "demo": [
        "oupk9muA1W4",
        "【超干货教学】强混也分流派？教你正确掌握2种唱出强混的方式"
      ]
    },
    "resonance": {
      "name": "共鸣",
      "plain": "声音在口腔、咽腔、鼻腔里放大、变亮的感觉。调好它，声音更圆、更有质感。",
      "demo": [
        "O1AZSAXQEzs",
        "如何练习鼻腔共鸣？|唱歌技巧教学"
      ]
    },
    "diction": {
      "name": "咬字",
      "plain": "把字唱清楚。字头清楚、字腹拉开、字尾收干脆，听的人才能听到歌词。",
      "demo": [
        "zdkwgeAwC90",
        "【新手学唱歌】90%的人都会忽略的唱歌咬字的技巧"
      ]
    },
    "legato": {
      "name": "连音",
      "plain": "音与音之间连贯不断，像滑过去。慢歌常用。",
      "demo": [
        "Z-r7I7gtT_U",
        "How to Sing Staccato to Legato - Jeff Alani Stanfill"
      ]
    },
    "staccato": {
      "name": "断音",
      "plain": "每个音短、清楚地切开。快歌的律动常用。",
      "demo": [
        "ZPDf6_kqHCs",
        "唱歌发声练习每日打卡|哼鸣、跳音、打嘟、音阶琶音"
      ]
    },
    "breathy": {
      "name": "气声",
      "plain": "带一点气的轻柔声音，像说悄悄话。要能加，也要能收回来。",
      "demo": [
        "ptE7FwPI6d0",
        "如何唱气音？|唱歌技巧教学"
      ]
    },
    "vibrato": {
      "name": "颤音",
      "plain": "长音上自然的小幅起伏，像海浪。它来自稳定的气，不是下巴抖。",
      "demo": [
        "_sssfxDkYv8",
        "最通俗易懂的颤音教学！你学废了吗？"
      ]
    },
    "runs": {
      "name": "转音（Runs & Riffs）",
      "plain": "快速的一串音连在一起唱，流行歌里很常见的装饰。",
      "demo": [
        "W_vveYOE-Fk",
        "滑音（riffs /runs）怎么唱？英文歌中最重要的技巧指南"
      ]
    },
    "grit": {
      "name": "撕裂音（Grit）",
      "plain": "声音带一点沙哑的力量感。很有个性，但风险高，要在闭合稳了以后才碰。",
      "demo": [
        "Hi-xCUEZRWs",
        "《聲音實驗室EP11》撕裂音的4種用法！"
      ]
    },
    "proximity": {
      "name": "近讲效应",
      "plain": "麦克风离嘴越近，低音越厚。太近会喷麦，太远声音会薄。",
      "demo": [
        "nNUFkjVJFdQ",
        "【歌唱發聲】EP.12 解決唱歌聲音虛！聲音【唔入Mic】（粤语）"
      ]
    },
    "dynamics": {
      "name": "强弱",
      "plain": "声音大小的变化。渐强是慢慢变大，渐弱是慢慢变小。",
      "demo": [
        "Gd74GpKbH7c",
        "唱歌情感表達：如何馬上唱歌有感情？跟輕重音有關係？"
      ]
    },
    "structure": {
      "name": "歌曲结构",
      "plain": "一首歌的段落：主歌讲故事，副歌是记忆点，桥段是转折。",
      "demo": [
        "0MHMw1QvDOg",
        "破億唱到斷氣神曲《跳樓機》| 10分鐘手把手教你如何唱好！"
      ]
    },
    "emotion": {
      "name": "情绪",
      "plain": "歌里想表达的感情。它靠想象和细节传出来，不是靠加力气。",
      "demo": [
        "Gd74GpKbH7c",
        "唱歌情感表達：如何馬上唱歌有感情？跟輕重音有關係？"
      ]
    }
  },
  "lessonIntro": {
    "1.1": {
      "why": "你唱高音一上去就虚，根本原因是气没有稳住。弹唇是最快能看到自己气稳不稳的练习。学会它，后面所有练习的气都能稳下来。",
      "terms": [
        "lip",
        "breath"
      ],
      "mins": 5,
      "gain": "长一点的句子不再中途断气。",
      "apply": "嘴唇保持“噗噜噜”，用弹唇把你那句歌的旋律“唱”一遍，不出字。然后马上正常唱一遍。很多人会发现第二遍气更稳了。"
    },
    "1.2": {
      "why": "很多人唱长句就断气，只能一句句换气，唱着唱着就乱了。S 音练的是把气一点点、匀速地放出去，练完长句不再慌。",
      "terms": [
        "breath",
        "support"
      ],
      "mins": 8,
      "gain": "一口气唱完整句，不用中间偷换气。",
      "apply": "唱你那句歌之前，先“嘶——”匀速吐气 5 秒，感受肚子慢慢收。然后吸一口气，用同样匀速的气唱这句。"
    },
    "1.3": {
      "why": "唱高音时喉咙发紧，多半是喉位太高。学会像哈欠那样的打开感，高音就不用挤，嗓子也不容易累。",
      "terms": [
        "larynx",
        "open",
        "sigh"
      ],
      "mins": 8,
      "gain": "唱高一点的音时，喉咙不再发紧。",
      "apply": "先打一个哈欠，保持那种打开感，用“哈——”把你那句歌的旋律叹出来，再换成歌词唱一遍。"
    },
    "1.4": {
      "why": "声带合不拢，高音就漏气。气泡音是最安全的合拢练习，是后面混声的地基。",
      "terms": [
        "fry"
      ],
      "mins": 6,
      "gain": "声音更结实，不那么漏气。",
      "apply": "用最松的气泡音把你那句歌第一个字说一遍，然后马上用正常声音唱这句。听听开头是不是更干净了。"
    },
    "1.5": {
      "why": "气泡音只是练习，唱歌要用的是正常的声音。这一课把“合拢”的感觉带进你正常唱的声音里。",
      "terms": [
        "fry",
        "breath"
      ],
      "mins": 8,
      "gain": "正常唱歌时，声音也有闭合，不发虚。",
      "apply": "用气泡音起头，接上你那句歌的第一个字，再把整句唱完，中间不断。"
    },
    "1.6": {
      "why": "音准和节奏是唱歌最基本的功。你测试里表现不错的话，这一课只帮你确认，不会耽误进度。",
      "terms": [
        "pitch",
        "rhythm"
      ],
      "mins": 8,
      "gain": "跟伴奏唱时，音准和进拍更稳。",
      "apply": "拍着手打拍子唱你那句歌，每个字都踩在拍子上。再听一遍原唱，对一对有没有跑调。"
    },
    "2.1": {
      "why": "很多人分不清胸声和头声，于是高音只能硬挤或者虚掉。分清楚了，才知道该往哪边走。",
      "terms": [
        "chest",
        "head",
        "falsetto"
      ],
      "mins": 10,
      "gain": "知道自己什么时候用胸声、什么时候用头声。",
      "apply": "把你那句歌用胸声唱一遍，再用轻轻的头声唱一遍，听两种声音的不同。"
    },
    "2.2": {
      "why": "换声点是每个人都有的，不是你的问题。找到它，唱歌时才能有意识地过渡过去，而不是撞上去断掉。",
      "terms": [
        "break",
        "glide",
        "register"
      ],
      "mins": 10,
      "gain": "找到自己声音会“翻”的那个音，以后能提前准备。",
      "apply": "把你那句歌提高几个调来唱，留意哪个字最容易变虚或破，那就是你的换声点附近。"
    },
    "2.3": {
      "why": "混声是流行歌高音最常用的声音：结实，又不喊。窄元音是找混声最直接的办法。",
      "terms": [
        "mix",
        "nay"
      ],
      "mins": 10,
      "gain": "高一点的音也能唱得结实，不喊、不虚。",
      "apply": "先用“Nay”把你那句歌的旋律唱一遍，再换成歌词，尽量保持 Nay 那种靠前的感觉。"
    },
    "2.4": {
      "why": "副歌经常要从低音一路唱到高音。过渡平滑，听起来就不突兀，歌才好听。",
      "terms": [
        "break",
        "register",
        "mix"
      ],
      "mins": 10,
      "gain": "副歌从低唱到高，中间不断层。",
      "apply": "选一句从低走到高的歌，在最高那个字之前一两个字就开始变轻，平滑地滑上去。"
    },
    "2.5": {
      "why": "同一个音，共鸣不同听起来差很多。学会调共鸣，声音会更圆、更有质感。",
      "terms": [
        "resonance",
        "open"
      ],
      "mins": 10,
      "gain": "声音更圆、更有质感，不扁不闷。",
      "apply": "用“嗯”哼一遍你那句歌，再张嘴唱出来，保留一点哼鸣的位置。"
    },
    "2.6": {
      "why": "很多流行副歌需要有力的高音。强混声能让你安全地唱出有力量的高音，但它要求闭合和支撑都稳，所以放在最后。",
      "terms": [
        "belt",
        "mix"
      ],
      "mins": 10,
      "gain": "副歌最高的那个音也能唱得有力量。",
      "apply": "只挑你那句歌里最高的一个字，用 Nay 的感觉加一点力度唱，最多 10 秒，喉咙不舒服就停。"
    },
    "3.1": {
      "why": "同样的旋律，咬字清楚，听的人才能听懂歌词、有感觉。流行歌尤其依赖咬字。",
      "terms": [
        "diction"
      ],
      "mins": 8,
      "gain": "听的人能听清你唱的每一个字。",
      "apply": "把你那句歌先慢慢念一遍，每个字分出字头、字腹、字尾，再按节奏唱出来。"
    },
    "3.2": {
      "why": "慢歌需要连贯，快歌需要切分。只会一种唱法，歌会显得单调。",
      "terms": [
        "legato",
        "staccato"
      ],
      "mins": 8,
      "gain": "慢歌唱得连贯，快歌唱得有律动。",
      "apply": "你那句歌用连音唱一遍，再用短促的断音唱一遍，选一种更适合这首歌的。"
    },
    "3.3": {
      "why": "气声能让你唱出亲密、悄悄话的感觉。但只会加还不够，要能收回来，否则就只是漏气。",
      "terms": [
        "breathy",
        "breath"
      ],
      "mins": 8,
      "gain": "能唱出温柔、说悄悄话的感觉，又能收回来。",
      "apply": "你那句歌的前半句用气声，后半句收回实声，录下来听切换处是否自然。"
    },
    "3.4": {
      "why": "长音上的自然颤音让声音有生命力。不会颤音的长音听起来会比较平。",
      "terms": [
        "vibrato",
        "breath"
      ],
      "mins": 10,
      "gain": "长音上有自然的颤音，声音有生命力。",
      "apply": "找你那句歌最后一个长音，先唱稳，再让它像海浪一样轻轻起伏。"
    },
    "3.5": {
      "why": "流行歌里有很多装饰音和转音。不练会，很多现成的歌你都跟不上。",
      "terms": [
        "runs",
        "glide"
      ],
      "mins": 10,
      "gain": "能跟上流行歌里的小转音。",
      "apply": "在你那句歌的某个字上，加一个三四个音的小转音，先慢后快。"
    },
    "3.6": {
      "why": "沙感能让声音有个性，但风险也高。这是选修，等前面都稳了再考虑。",
      "terms": [
        "grit",
        "fry"
      ],
      "mins": 8,
      "gain": "需要时能加一点有个性的沙感。（选修）",
      "apply": "只在你那句歌里最有情绪的一个字上，加一点点沙感，只做两三次。"
    },
    "4.1": {
      "why": "会唱音不等于会唱歌。知道每一段该怎么唱，歌才有层次。",
      "terms": [
        "structure"
      ],
      "mins": 10,
      "gain": "一首歌唱下来有层次，不是一个力度到底。",
      "apply": "给你选的歌每一段写一个词（讲、推、转），按这个词唱一遍主歌和副歌。"
    },
    "4.2": {
      "why": "强弱对比是让听的人有感觉的主要方法。没有对比，唱得再准也像在背谱。",
      "terms": [
        "dynamics"
      ],
      "mins": 10,
      "gain": "唱出让人有感觉的强弱起伏。",
      "apply": "把你那句歌从轻唱到响，再从响收回轻，录下来听对比明不明显。"
    },
    "4.3": {
      "why": "情绪是打动人的部分，技巧是为情绪服务的。这一课把前面的技巧用在一首完整的歌里。",
      "terms": [
        "emotion"
      ],
      "mins": 10,
      "gain": "唱歌能打动别人，而不只是唱准。",
      "apply": "先把你那句歌当成对一个人说的话念出来，然后用同样的感觉唱。"
    },
    "4.4": {
      "why": "同一个声音，麦克风距离不同，效果差很多。录音和现场都用得上。",
      "terms": [
        "proximity"
      ],
      "mins": 8,
      "gain": "录音和 KTV 里，麦克风声音更好听。",
      "apply": "拿手机当麦克风，近、中、远各录一遍你那句歌，比一比哪个最好听。"
    },
    "4.5": {
      "why": "结业不是考试。录下这首歌，和你开始时的录音对比，你会看到自己真的变了。",
      "terms": [
        "dynamics",
        "emotion"
      ],
      "mins": 15,
      "gain": "录下一首完整的歌，和入学时比一比。",
      "apply": "完整唱一遍你选的歌，录下来，和第一课开头录的那一句对比。"
    }
  },
  "hookSong": {
    "name": "十年",
    "line": "如果那两个字没有颤抖，我不会发现我难受"
  }
};
