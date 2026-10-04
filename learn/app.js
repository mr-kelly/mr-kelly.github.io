/*
 * /learn/ 课程页通用渲染器。读取 window.COURSE（各课程目录下的 course.js）。
 * 四个视图：入学测试 / 提纲（全体系）/ 上课（一步一屏）/ 打卡（今日练习 + 日志）。
 * 测试结果、进度、计时成绩、练习日志只存在本机浏览器 localStorage，不上传。
 */
(function () {
  "use strict";

  var C = window.COURSE;
  var root = document.getElementById("course");
  if (!C || !root) return;

  var KEY = "learn:" + C.id;
  var state = load();
  state.checks = state.checks || {};
  state.best = state.best || {};
  state.daily = state.daily || {};
  state.log = state.log || [];
  state.step = state.step || 0;
  state.test = state.test || { answers: {}, at: 0, done: false, date: "" };

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 隐私模式下写不进去，忽略 */ }
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function h(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function $(id) { return document.getElementById(id); }

  var LESSONS = [];
  C.stages.forEach(function (s) { s.lessons.forEach(function (l) { l.stage = s; LESSONS.push(l); }); });
  function lessonById(id) { return LESSONS.find(function (l) { return l.id === id; }); }
  var curLesson = lessonById(C.current);
  var lesson = curLesson;          // 正在看的课，跟着路由变
  var stage = curLesson.stage;     // 打卡、过关标准跟当前课走


  /* =========================================================
   * 入学测试判档
   * ========================================================= */
  var RANK = { pass: 0, partial: 1, need: 2 };
  var GRADE_TEXT = { pass: "已会 · 跳过", partial: "半会 · 快速过", need: "要学" };
  function grades() {
    var g = {};
    function put(id, v) { if (!(id in g) || RANK[v] > RANK[g[id]]) g[id] = v; }
    C.placement.questions.forEach(function (q) {
      var a = state.test.answers[q.id];
      if (a === undefined) return;
      if (q.type === "timer") {
        var v = a >= q.pass ? "pass" : (a >= q.partial ? "partial" : "need");
        q.lessons.forEach(function (id) { put(id, v); });
      } else {
        var eff = q.options[a].effects;
        Object.keys(eff).forEach(function (id) { put(id, eff[id]); });
      }
    });
    return g;
  }
  function startLesson(g) {
    return LESSONS.find(function (l) { return !l.optional && g[l.id] !== "pass"; });
  }

  /* ---------- 外框：左边栏 + 主区 + 手机底栏 ---------- */
  var NAV = [
    { v: "test", icon: "✎", label: "入学测试" },
    { v: "syllabus", icon: "☰", label: "提纲" },
    { v: "lesson", icon: "▶", label: "上课" },
    { v: "today", icon: "✓", label: "打卡" }
  ];
  var side = $("sidebar"), bottom = $("bottombar");
  function renderSidebar(v, lid) {
    var g = state.test.done ? grades() : {};
    side.innerHTML =
      '<div class="side-head"><a class="side-back" href="/learn/">← 学习课程</a>' +
        '<p class="side-title">' + esc(C.title) + '</p><p class="side-sub">现在：' + esc(curLesson.id) + " " + esc(curLesson.title) + "</p></div>" +
      '<nav class="side-nav">' + NAV.map(function (n) {
        return '<a href="#' + n.v + '" class="' + (n.v === v && !(v === "lesson" && lid !== curLesson.id) ? "on" : "") + '"><span class="ico">' + n.icon + "</span>" + n.label +
          (n.v === "test" && !state.test.done ? '<span class="dot-new"></span>' : "") + "</a>";
      }).join("") + "</nav>" +
      '<div class="side-tree">' + C.stages.map(function (s) {
        var open = s.lessons.some(function (l) { return l.id === lid || l.id === curLesson.id; });
        return "<details" + (open ? " open" : "") + '><summary><span class="stage-n">' + s.n + "</span>" + esc(s.title) + "</summary>" +
          s.lessons.map(function (l) {
            var gr = l.optional ? "opt" : (g[l.id] || "none");
            return '<a href="#lesson/' + l.id + '" class="tree-item' + (v === "lesson" && l.id === lid ? " on" : "") + (l.id === curLesson.id ? " now" : "") +
              (l.ready ? "" : " tbd") + '"><span class="gdot g-' + gr + '"></span><span class="lid">' + l.id + "</span>" + esc(l.title) + "</a>";
          }).join("") + "</details>";
      }).join("") + "</div>" +
      '<p class="side-foot">课程更新于 ' + esc(C.updated) + "</p>";
    bottom.innerHTML = NAV.map(function (n) {
      return '<a href="#' + n.v + '" class="' + (n.v === v ? "on" : "") + '"><span class="ico">' + n.icon + "</span>" + n.label + "</a>";
    }).join("");
  }
  function closeDrawer() { document.body.classList.remove("drawer-open"); }
  $("menu").addEventListener("click", function () { document.body.classList.toggle("drawer-open"); });
  $("scrim").addEventListener("click", closeDrawer);
  side.addEventListener("click", function (e) { if (e.target.closest("a")) closeDrawer(); });

  root.innerHTML =
    '<div class="view" id="view-test"></div>' +
    '<div class="view" id="view-syllabus"></div>' +
    '<div class="view" id="view-lesson"></div>' +
    '<div class="view" id="view-today"></div>';

  function route() {
    stopTimer();
    var parts = (location.hash.slice(1) || (state.test.done ? "lesson" : "test")).split("/");
    var v = $("view-" + parts[0]) ? parts[0] : "lesson";
    lesson = (v === "lesson" && lessonById(parts[1])) || curLesson;
    document.querySelectorAll(".view").forEach(function (el) { el.hidden = el.id !== "view-" + v; });
    renderSidebar(v, lesson.id);
    var nav = NAV.find(function (n) { return n.v === v; });
    $("topbar-title").textContent = v === "lesson" ? lesson.id + " " + lesson.title : nav.label;
    document.title = (v === "lesson" ? lesson.title : nav.label) + " · " + C.title;
    ({ test: renderTest, syllabus: renderSyllabus, lesson: renderLesson, today: renderToday })[v]();
    $("main").scrollTop = 0; window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* =========================================================
   * 计时器（测试和上课共用）
   * ========================================================= */
  var T = { start: 0, raf: 0, target: 0, done: null };
  function timerBlock(target, onDone) {
    T.target = target; T.done = onDone;
    var el = h('<div class="timer-core"><div class="ring" id="ring" style="--p:0"><div class="timer-face" id="timer-face">0.0</div></div>' +
      '<button type="button" class="btn primary big" id="timer-btn">开始</button></div>');
    el.querySelector("#timer-btn").addEventListener("click", toggleTimer);
    return el;
  }
  function tick() {
    var secs = (performance.now() - T.start) / 1000;
    if (!$("timer-face")) { stopTimer(); return; }
    $("timer-face").textContent = secs.toFixed(1);
    $("ring").style.setProperty("--p", Math.min(1, secs / T.target));
    T.raf = requestAnimationFrame(tick);
  }
  function stopTimer() {
    if (!T.start) return 0;
    cancelAnimationFrame(T.raf);
    var secs = (performance.now() - T.start) / 1000;
    T.start = 0;
    return secs;
  }
  function toggleTimer() {
    var btn = $("timer-btn");
    if (!T.start) {
      T.start = performance.now(); tick();
      btn.textContent = "停"; btn.classList.add("running");
      $("ring").classList.remove("win");
      return;
    }
    var secs = stopTimer();
    $("timer-face").textContent = secs.toFixed(1);
    btn.textContent = "再来一次"; btn.classList.remove("running");
    if (secs >= T.target) $("ring").classList.add("win");
    T.done(secs);
  }
  document.addEventListener("keydown", function (e) {
    if (e.code !== "Space" || !$("timer-btn") || /INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)) return;
    var view = $("timer-btn").closest(".view");
    if (view.hidden) return;
    e.preventDefault(); toggleTimer();
  });

  /* =========================================================
   * 入学测试：一题一屏
   * ========================================================= */
  var Q = C.placement.questions;
  function renderTest() {
    var el = $("view-test");
    if (state.test.done) return renderResult(el);
    if (!state.test.started) {
      el.innerHTML = '<div class="stage-card intro"><p class="eyebrow">第 0 课</p><h2>入学测试</h2>' +
        '<p class="why-course">' + esc(C.why) + "</p><p>" + esc(C.placement.intro) + "</p>" +
        '<div class="grade-legend"><span class="badge g-pass">已会 · 跳过</span><span class="badge g-partial">半会 · 快速过</span><span class="badge g-need">要学</span></div>' +
        '<button type="button" class="btn primary big" id="test-start">开始测试</button></div>';
      $("test-start").addEventListener("click", function () { state.test.started = true; state.test.at = 0; save(); renderTest(); });
      return;
    }
    var i = state.test.at, q = Q[i];
    el.innerHTML =
      '<div class="progress"><span style="width:' + (i / Q.length * 100) + '%"></span></div>' +
      '<p class="muted q-count">第 ' + (i + 1) + " / " + Q.length + " 题</p>" +
      '<div class="stage-card question"><h2>' + esc(q.title) + "</h2>" + (q.how ? '<p class="how">' + esc(q.how) + "</p>" : "") + '<div id="q-body"></div></div>' +
      '<div class="step-nav"><button type="button" class="btn" id="q-prev">← 上一题</button>' +
      '<button type="button" class="btn" id="q-next">' + (i === Q.length - 1 ? "看结果 →" : "下一题 →") + "</button></div>";
    var body = $("q-body"), ans = state.test.answers[q.id];

    if (q.type === "choice") {
      body.append(h('<div class="options">' + q.options.map(function (o, j) {
        return '<button type="button" class="option' + (ans === j ? " on" : "") + '" data-j="' + j + '"><span>' + "ABCD"[j] + "</span>" + esc(o.text) + "</button>";
      }).join("") + "</div>"));
      body.addEventListener("click", function (e) {
        var b = e.target.closest(".option"); if (!b) return;
        state.test.answers[q.id] = +b.dataset.j; save();
        body.querySelectorAll(".option").forEach(function (x) { x.classList.toggle("on", x === b); });
        setTimeout(nextQ, 250);
      });
    } else {
      body.append(timerBlock(q.pass, function (secs) {
        state.test.answers[q.id] = Math.round(secs * 10) / 10; save();
        var v = secs >= q.pass ? "pass" : (secs >= q.partial ? "partial" : "need");
        $("q-hint").innerHTML = "记下了：" + secs.toFixed(1) + ' 秒 <span class="badge g-' + v + '">' + GRADE_TEXT[v] + "</span>（已会 ≥ " + q.pass + " 秒，半会 ≥ " + q.partial + " 秒）。可以再测一次，按最后一次算。";
      }));
      body.append(h('<p class="muted" id="q-hint">' + (ans !== undefined ? "上次：" + ans + " 秒。" : "可以按空格开始 / 停止。") + "</p>"));
      body.append(h('<button type="button" class="link" id="q-zero">我做不出来 / 吹不起来</button>'));
      $("q-zero").addEventListener("click", function () { stopTimer(); state.test.answers[q.id] = 0; save(); nextQ(); });
    }
    $("q-prev").disabled = i === 0;
    $("q-prev").addEventListener("click", function () { stopTimer(); state.test.at = i - 1; save(); renderTest(); });
    $("q-next").addEventListener("click", nextQ);
  }
  function nextQ() {
    stopTimer();
    var q = Q[state.test.at];
    if (state.test.answers[q.id] === undefined) { $("q-next").textContent = "先回答这题"; return; }
    if (state.test.at === Q.length - 1) { state.test.done = true; state.test.date = today(); save(); route(); return; }
    state.test.at++;
    save(); renderTest(); window.scrollTo(0, 0);
  }
  /* 给分：已会 100、半会 60、要学 20，按非选修课取平均。分数只用来鼓励和定起点，没有及格线。 */
  var SCORE_W = { pass: 100, partial: 60, need: 20 };
  function scoreOf(g) {
    var core = LESSONS.filter(function (l) { return !l.optional; });
    var sum = core.reduce(function (t, l) { return t + SCORE_W[g[l.id] || "need"]; }, 0);
    return { value: Math.round(sum / core.length), core: core };
  }
  function levelOf(v) {
    if (v >= 85) return { name: "底子很扎实", tip: "大部分基础你已经有了，不用从头练。把剩下的短板补上，就能直接进歌曲实战。" };
    if (v >= 60) return { name: "有底子", tip: "你的音准、耐力或者声音控制已经有基础。跳过已会的课，从起点开始，进步会很快。" };
    if (v >= 35) return { name: "在起步", tip: "你已经能发声，也能唱歌，缺的是气息和声带闭合这些技术。按顺序练，会比乱试快很多。" };
    return { name: "从零开始", tip: "从零开始完全没问题，很多人都是这样起步的。别急，先把第一课的动作做对，比做多更重要。" };
  }
  function renderResult(el) {
    var g = grades(), start = startLesson(g), sc = scoreOf(g);
    var cnt = { pass: 0, partial: 0, need: 0 };
    sc.core.forEach(function (l) { cnt[g[l.id] || "need"]++; });
    var lv = levelOf(sc.value);
    var strengths = sc.core.filter(function (l) { return g[l.id] === "pass"; }).slice(0, 3);
    var idx = start ? sc.core.indexOf(start) : -1;
    var next = idx >= 0 ? sc.core.slice(idx + 1, idx + 3).filter(function (l) { return g[l.id] !== "pass"; }) : [];
    el.innerHTML =
      '<div class="stage-card result"><p class="eyebrow">入学测试结果 · ' + esc(state.test.date) + "</p>" +
        '<div class="score-row"><div class="score-ring" style="--p:' + sc.value / 100 + '"><div class="score-in"><b>' + sc.value + "</b><span>分</span></div></div>" +
          '<div><h2>' + esc(lv.name) + "</h2><p>" + esc(lv.tip) + "</p></div></div>" +
        '<div class="start-box"><p class="eyebrow">从这里开始</p><h3>' + (start ? esc(start.id) + " " + esc(start.title) : "第 4 阶段") + "</h3>" +
          (next.length ? '<p class="muted">接下来是 ' + next.map(function (l) { return esc(l.id) + " " + esc(l.title); }).join("、") + "</p>" : "") +
          '<p><a class="btn primary" href="#lesson/' + (start ? start.id : "4.5") + '">去上第一课 →</a></p></div>' +
        (strengths.length ? '<p class="strengths"><b>你的强项：</b>' + strengths.map(function (l) { return esc(l.title); }).join("、") + "</p>" : "") +
        '<div class="stats"><div><b>' + cnt.pass + '</b><span>已会 · 跳过</span></div><div><b>' + cnt.partial +
        '</b><span>半会 · 快速过</span></div><div><b>' + cnt.need + "</b><span>要学</span></div></div>" +
        '<p class="actions"><a class="btn" href="#syllabus">看完整提纲</a> ' +
        '<button type="button" class="btn" id="copy-result">复制结果发给 Claude</button> ' +
        '<button type="button" class="btn" id="retest">重新测试</button></p><p class="muted" id="copy-msg"></p></div>';
    $("retest").addEventListener("click", function () {
      if (!confirm("清掉这次的测试结果，重新做？")) return;
      state.test = { answers: {}, at: 0, done: false, started: true }; save(); route();
    });
    $("copy-result").addEventListener("click", function () {
      var lines = ["### " + state.test.date + " · 入学测试（网页，" + Q.length + " 题）", ""];
      Q.forEach(function (q, i) {
        var a = state.test.answers[q.id];
        lines.push((i + 1) + ". " + q.title + " → " + (q.type === "timer" ? a + " 秒" : "ABCD"[a] + " " + q.options[a].text));
      });
      lines.push("", "得分：" + sc.value + " 分（" + lv.name + "）");
      lines.push("判档：" + sc.core.map(function (l) { return l.id + " " + ({ pass: "已会", partial: "半会", need: "要学" })[g[l.id] || "need"]; }).join("，"));
      lines.push("建议起点：" + (start ? start.id + " " + start.title : "—"));
      navigator.clipboard.writeText(lines.join("\n")).then(function () { $("copy-msg").textContent = "已复制，直接粘贴给 Claude。"; });
    });
  }

  /* =========================================================
   * 提纲：全体系
   * ========================================================= */
  function renderSyllabus() {
    var el = $("view-syllabus");
    var g = state.test.done ? grades() : {};
    var start = state.test.done ? startLesson(g) : null;
    el.innerHTML = '<h1 class="view-title">课程提纲</h1>' +
      '<p class="why-course">' + esc(C.why) + "</p>" +
      '<p class="muted">第 0 课入学测试 → 4 个阶段 ' + LESSONS.length + " 节课。<span class=\"badge ready\">已备课</span>的可以直接上，<span class=\"badge tbd\">待定</span>的轮到了再备课。</p>" +
      '<ol class="syllabus">' +
        '<li class="stage-block"><div class="stage-title"><span class="stage-n">0</span>入学测试</div>' +
          '<a class="lesson-row' + (state.test.done ? "" : " is-current") + '" href="#test"><span class="lid">0</span><span class="lt">入学测试<small>' +
          Q.length + ' 道题定起点</small></span><span class="badges">' + (state.test.done ? '<span class="badge g-pass">已完成 ' + esc(state.test.date) + "</span>" : '<span class="badge here">先做这个</span>') + "</span></a></li>" +
        C.stages.map(function (s) {
          return '<li class="stage-block"><div class="stage-title"><span class="stage-n">' + s.n + "</span>" + esc(s.title) +
            '<span class="muted">' + esc(s.weeks) + "</span></div>" + '<p class="muted stage-why">' + esc(s.why) + "</p>" +
            s.lessons.map(function (l) {
              var gr = g[l.id];
              var badges = (l.id === C.current ? '<span class="badge here">现在</span>' : "") +
                (start && l.id === start.id && l.id !== C.current ? '<span class="badge here">测试建议起点</span>' : "") +
                (l.optional ? '<span class="badge tbd">' + (l.id === "4.5" ? "结业" : "选修") + "</span>" : (gr ? '<span class="badge g-' + gr + '">' + GRADE_TEXT[gr] + "</span>" : "")) +
                (l.ready ? '<span class="badge ready">已备课</span>' : '<span class="badge tbd">待定</span>');
              var tag = "a";
              return "<" + tag + ' class="lesson-row' + (l.id === C.current ? " is-current" : "") + (gr === "pass" ? " is-skip" : "") + '"' +
                ' href="#lesson/' + l.id + '"' + '><span class="lid">' + esc(l.id) + '</span><span class="lt">' + esc(l.title) +
                "<small>" + esc(l.goal) + '</small></span><span class="badges">' + badges + "</span></" + tag + ">";
            }).join("") + "</li>";
        }).join("") +
      "</ol>" +
      '<details class="panel"><summary>第 ' + stage.n + " 阶段过关标准</summary>" + (stage.pass
        ? '<ul class="checks" id="pass">' + stage.pass.map(function (p) {
            var on = !!state.checks[p.id];
            return '<li class="' + (on ? "done" : "") + '"><label><input type="checkbox" data-id="' + p.id + '"' + (on ? " checked" : "") + "> " + esc(p.text) + "</label></li>";
          }).join("") + '</ul><ul class="redlines">' + stage.redlines.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>"
        : "<p>待定</p>") + "</details>" +
      '<details class="panel"><summary>初步摸底 <span class="muted">' + esc(C.diagnosis.date) + "</span></summary>" +
        "<p>" + esc(C.diagnosis.summary) + '</p><div class="diag">' + C.diagnosis.items.map(function (d) {
          return '<div class="diag-row tone-' + d.tone + '"><span class="diag-label">' + esc(d.label) + "</span><span>" + esc(d.finding) +
            '<br><span class="muted">' + esc(d.note) + "</span></span></div>";
        }).join("") + "</div></details>" +
      '<details class="panel"><summary>练习曲</summary><ul class="songs">' + C.songs.map(function (s) {
        return "<li><b>" + esc(s.stage) + "</b> " + s.items.map(esc).join("、") + '<br><span class="muted">' + esc(s.focus) + "</span></li>";
      }).join("") + '</ul><p class="muted">' + esc(C.benchmark) + "</p></details>";
    if ($("pass")) $("pass").addEventListener("change", function (e) { state.checks[e.target.dataset.id] = e.target.checked; save(); renderSyllabus(); });
  }

  /* =========================================================
   * 上课：一步一屏
   * ========================================================= */
  var STEPS = [
    { key: "watch", label: "看视频" },
    { key: "do", label: "跟着做" },
    { key: "time", label: "计时" },
    { key: "rec", label: "录音" },
    { key: "done", label: "收尾" }
  ];
  function currentLevel() {
    return lesson.ladder.find(function (x) { return !state.checks[x.id]; }) || lesson.ladder[lesson.ladder.length - 1];
  }
  function renderLesson() {
    var V = $("view-lesson");
    var i = LESSONS.indexOf(lesson), prevL = LESSONS[i - 1], nextL = LESSONS[i + 1];
    var gr = state.test.done ? grades()[lesson.id] : null;
    var head = '<div class="lesson-head"><p class="eyebrow">第 ' + lesson.stage.n + " 阶段 · " + esc(lesson.stage.title) + "</p>" +
      '<h1><span class="lid big">' + esc(lesson.id) + "</span>" + esc(lesson.title) + "</h1>" +
      '<p class="badges left">' + (lesson.id === curLesson.id ? '<span class="badge here">现在</span>' : "") +
        (gr ? '<span class="badge g-' + gr + '">' + GRADE_TEXT[gr] + "</span>" : "") +
        (lesson.ready ? '<span class="badge ready">已备课</span>' : '<span class="badge tbd">待定</span>') + "</p></div>";
    var pager = '<div class="pager">' +
      (prevL ? '<a href="#lesson/' + prevL.id + '">← ' + esc(prevL.id) + " " + esc(prevL.title) + "</a>" : "<span></span>") +
      (nextL ? '<a href="#lesson/' + nextL.id + '">' + esc(nextL.id) + " " + esc(nextL.title) + " →</a>" : "<span></span>") + "</div>";
    var intro = (C.lessonIntro || {})[lesson.id];
    if (intro) head += '<div class="why-lesson"><p class="eyebrow">为什么学这一课</p><p>' + esc(intro.why) + "</p></div>";
    if (!state.test.done && lesson.id === curLesson.id) head += '<p class="callout">还没做入学测试。<a href="#test">先做测试</a>，确认要不要从这一课开始。</p>';
    if (!lesson.ready) {
      V.innerHTML = head + '<div class="stage-card tbd-card"><p class="lede">' + esc(lesson.goal) + "</p>" +
        "<p class=\"muted\">这一课还没备课。轮到它的时候会补上视频、步骤和过关标准。" +
        (gr === "pass" ? "入学测试判你已会，可以跳过。" : "") + "</p>" +
        (lesson.id !== curLesson.id ? '<p><a class="btn" href="#lesson">回到现在这一课 →</a></p>' : "") + "</div>" + pager;
      return;
    }
    V.innerHTML = head +
      '<ol class="stepper" id="stepper">' + STEPS.map(function (s, i) {
        return '<li><button type="button" data-step="' + i + '"><span>' + (i + 1) + "</span>" + s.label + "</button></li>";
      }).join("") + "</ol>" +
      '<div class="stage-card" id="step-body"></div>' +
      '<div class="step-nav"><button type="button" class="btn" id="prev">← 上一步</button>' +
      '<button type="button" class="btn primary" id="next">下一步 →</button></div>' + pager;
    $("stepper").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) go(+b.dataset.step); });
    $("prev").addEventListener("click", function () { go(state.step - 1); });
    $("next").addEventListener("click", function () { go(state.step + 1); });
    go(state.step);
  }
  function go(i) {
    stopTimer();
    state.step = Math.max(0, Math.min(STEPS.length - 1, i));
    save();
    document.querySelectorAll("#stepper li").forEach(function (li, j) { li.className = j === state.step ? "on" : (j < state.step ? "past" : ""); });
    $("prev").style.visibility = state.step === 0 ? "hidden" : "visible";
    $("next").style.visibility = state.step === STEPS.length - 1 ? "hidden" : "visible";
    var body = $("step-body");
    body.innerHTML = "";
    STEP_RENDER[STEPS[state.step].key](body);
  }

  function videoCard(v, big) {
    var el = h('<figure class="video' + (big ? " big" : "") + '">' +
      '<button type="button" class="video-poster" aria-label="播放：' + esc(v.title) + '">' +
        '<img loading="lazy" src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt=""><span class="play">▶</span></button>' +
      '<figcaption><span class="tag">' + esc(v.lang) + "</span>" + (v.note ? '<span class="tag accent">' + esc(v.note) + "</span>" : "") +
        esc(v.title) + "</figcaption></figure>");
    el.querySelector("button").addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0";
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.title = v.title;
      this.replaceWith(f);
    });
    return el;
  }

  /* 名词解释：每个词配一个示范视频，点了才加载 */
  function termsBlock() {
    var keys = ((C.lessonIntro || {})[lesson.id] || {}).terms || [];
    if (!keys.length || !C.glossary) return h("<div></div>");
    var box = h('<section class="terms"><h3>先认识这几个词</h3><p class="muted">看不懂的词，点“看示范”听一下。</p></section>');
    keys.forEach(function (k) {
      var t = C.glossary[k]; if (!t) return;
      var row = h('<div class="term"><div><b>' + esc(t.name) + "</b><span>" + esc(t.plain) + '</span></div>' +
        '<button type="button" class="btn small">看示范 ▶</button></div>');
      row.querySelector("button").addEventListener("click", function () {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + t.demo[0] + "?rel=0";
        f.allow = "encrypted-media; picture-in-picture";
        f.allowFullscreen = true;
        f.title = t.demo[1];
        f.className = "term-demo";
        this.replaceWith(f);
      });
      box.append(row);
    });
    return box;
  }

  var STEP_RENDER = {
    watch: function (el) {
      el.append(h('<p class="callout warn"><strong>先纠正：</strong>' + esc(lesson.misconception) + "</p>"), videoCard(lesson.videos[0], true));
      if (lesson.videos.length > 1) {
        var more = h('<div class="more"><p class="muted">还有 ' + (lesson.videos.length - 1) + ' 个讲法，看不懂就换一个：</p><div class="videos"></div></div>');
        lesson.videos.slice(1).forEach(function (v) { more.querySelector(".videos").append(videoCard(v)); });
        el.append(more);
      }
      el.append(termsBlock());
    },

    do: function (el) {
      var i = 0;
      var card = h('<div class="flip"><p class="flip-n"></p><h3></h3><p class="flip-body"></p>' +
        '<div class="flip-nav"><button type="button" class="btn" data-d="-1">上一条</button><button type="button" class="btn" data-d="1"></button></div></div>');
      function show() {
        var s = lesson.steps[i];
        card.querySelector(".flip-n").textContent = (i + 1) + " / " + lesson.steps.length;
        card.querySelector("h3").textContent = s.title;
        card.querySelector(".flip-body").textContent = s.body;
        card.querySelector('[data-d="-1"]').disabled = i === 0;
        card.querySelector('[data-d="1"]').textContent = i === lesson.steps.length - 1 ? "可以了，去计时 →" : "做到了，下一条";
      }
      card.addEventListener("click", function (e) {
        var d = e.target.dataset.d; if (!d) return;
        if (+d > 0 && i === lesson.steps.length - 1) { go(state.step + 1); return; }
        i = Math.max(0, Math.min(lesson.steps.length - 1, i + +d)); show();
      });
      show();
      el.append(card);
    },

    time: function (el) {
      var lv = currentLevel(), idx = lesson.ladder.indexOf(lv);
      var box = h('<div class="timer"><ol class="ladder-mini">' + lesson.ladder.map(function (x, j) {
          return '<li class="' + (state.checks[x.id] ? "done" : (j === idx ? "on" : "")) + '" title="' + esc(x.text) + '">' + (j + 1) + "</li>";
        }).join("") + "</ol>" +
        '<p class="level">第 ' + (idx + 1) + " 级：" + esc(lv.text) + (lv.target ? "<b> ≥ " + lv.target + " 秒</b>" : "") + "</p></div>");
      el.append(box);
      var tips = h('<details class="more" id="tips"><summary>卡住了怎么办</summary><ul class="tips">' + lesson.troubleshooting.map(function (t) {
        return "<li><strong>" + esc(t.symptom) + "</strong>：" + esc(t.cause) + "。→ " + esc(t.fix) + "</li>";
      }).join("") + "</ul></details>");

      if (!lv.target) {
        box.append(h('<p>这一级没有秒数，做到了自己打勾。</p>'), h('<button type="button" class="btn primary big" id="self-check">做到了 ✓</button>'));
        el.append(tips);
        $("self-check").addEventListener("click", function () { state.checks[lv.id] = true; save(); go(state.step); });
        return;
      }
      box.append(timerBlock(lv.target, function (secs) {
        var msg = "这次 " + secs.toFixed(1) + " 秒。";
        if (!state.best[lv.id] || secs > state.best[lv.id]) { state.best[lv.id] = secs; msg += " 新纪录！"; }
        if (secs >= lv.target) {
          state.checks[lv.id] = true; save();
          $("timer-hint").innerHTML = esc(msg) + ' <strong class="win">达标！</strong> <button type="button" class="link" id="level-up">进下一级 →</button>';
          $("level-up").addEventListener("click", function () { go(state.step); });
        } else {
          save();
          $("timer-hint").textContent = msg + " 目标 " + lv.target + " 秒，再来。";
          if (secs < lv.target / 2) $("tips").open = true;
        }
      }));
      box.append(h('<p class="muted" id="timer-hint">吹到断气就点停，也可以按空格。' + (state.best[lv.id] ? "最好成绩 " + state.best[lv.id].toFixed(1) + " 秒。" : "") + "</p>"));
      el.append(tips);
    },

    rec: function (el) {
      el.append(h('<div class="recorder"><p>录一段当前这一级的练习，回放听听：颤动断没断、声音稳不稳。</p>' +
        '<button type="button" class="btn primary big" id="rec-btn">● 开始录音</button>' +
        '<p class="muted" id="rec-status">录音只在本机浏览器里，不会上传。</p><div id="rec-list" class="rec-list"></div></div>'));
      setupRecorder();
    },

    done: function (el) {
      var best = bestSummary();
      el.append(h('<div class="wrap-up"><h3>今天练完了？记一笔</h3>' +
        (best ? '<p class="muted">计时成绩会自动带上：' + esc(best) + "</p>" : "") +
        '<form class="log-form" id="quick-log">' +
          '<input name="what" value="' + esc(lesson.id + " " + lesson.title + " 第 " + (lesson.ladder.indexOf(currentLevel()) + 1) + " 级") + '" required>' +
          '<input name="mins" type="number" min="1" placeholder="分钟" class="mins">' +
          '<input name="note" placeholder="体感 / 问题（可空）">' +
          '<button class="btn primary">记一笔</button></form>' +
        '<p class="muted" id="quick-msg"></p><p><a href="#today">去看今日打卡和历史日志 →</a></p></div>'));
      $("quick-log").addEventListener("submit", function (e) { e.preventDefault(); addLog(e.target); $("quick-msg").textContent = "记好了。明天见。"; });
    }
  };

  /* ---------- 录音 ---------- */
  var recorder = null;
  function setupRecorder() {
    var btn = $("rec-btn"), status = $("rec-status");
    if (!navigator.mediaDevices || !window.MediaRecorder) { btn.disabled = true; status.textContent = "这个浏览器不支持录音。"; return; }
    btn.addEventListener("click", function () {
      if (recorder && recorder.state === "recording") { recorder.stop(); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        var chunks = [];
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = function (e) { chunks.push(e.data); };
        recorder.onstop = function () {
          stream.getTracks().forEach(function (t) { t.stop(); });
          var url = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType }));
          var list = $("rec-list"); if (!list) return;
          list.prepend(h('<div class="rec-item"><span>' + new Date().toLocaleTimeString() + '</span><audio controls src="' + url + '"></audio>' +
            '<a href="' + url + '" download="singing-' + today() + '.webm">下载</a></div>'));
          btn.textContent = "● 再录一段"; btn.classList.remove("running");
          status.textContent = "录好了。想留档就点下载，放进 vault 的 assets/。";
        };
        recorder.start();
        btn.textContent = "■ 停止"; btn.classList.add("running");
        status.textContent = "录音中……";
      }).catch(function () { status.textContent = "没有拿到麦克风权限。"; });
    });
  }

  /* =========================================================
   * 打卡：今日练习 + 日志
   * ========================================================= */
  function bestSummary() {
    var L = curLesson;
    return L.ladder ? L.ladder.filter(function (x) { return state.best[x.id]; })
      .map(function (x) { return "L" + (L.ladder.indexOf(x) + 1) + " " + state.best[x.id].toFixed(1) + "s"; }).join("，") : "";
  }
  function addLog(f) {
    var note = f.note.value.trim(), best = bestSummary();
    if (best) note = (note ? note + "；" : "") + "计时最好：" + best;
    state.log.push({ date: today(), what: f.what.value.trim(), mins: f.mins.value, note: note });
    save();
  }
  function streak() {
    var n = 0, d = new Date();
    for (;;) {
      var k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      var hit = state.log.some(function (r) { return r.date === k; }) || Object.values(state.daily[k] || {}).some(Boolean);
      if (!hit) { if (n === 0 && k === today()) { d.setDate(d.getDate() - 1); continue; } break; }
      n++; d.setDate(d.getDate() - 1);
    }
    return n;
  }
  function renderToday() {
    var el = $("view-today");
    var done = state.daily[today()] || {};
    var daily = stage.daily || [];
    var cnt = daily.filter(function (_, i) { return done[i]; }).length;
    el.innerHTML = '<h1 class="view-title">打卡</h1>' +
      '<div class="stats"><div><b>' + streak() + '</b><span>连续天数</span></div><div><b>' + state.log.length +
        '</b><span>练习记录</span></div><div><b>' + cnt + " / " + daily.length + "</b><span>今天完成</span></div></div>" +
      "<h3>今天的练习 <small>" + today() + " · 10–15 分钟</small></h3>" +
      '<ul class="checks" id="daily">' + daily.map(function (d, i) {
        return '<li class="' + (done[i] ? "done" : "") + '"><label><input type="checkbox" data-i="' + i + '"' + (done[i] ? " checked" : "") + "> " +
          esc(d.text) + '</label><span class="muted">' + d.min + "′</span></li>";
      }).join("") + "</ul>" +
      "<h3>练习日志</h3>" +
      '<form class="log-form" id="log-form"><input name="what" placeholder="练了什么" required>' +
        '<input name="mins" type="number" min="1" placeholder="分钟" class="mins"><input name="note" placeholder="体感 / 问题">' +
        '<button class="btn primary">记一笔</button></form>' +
      '<ul class="log">' + (state.log.slice().reverse().map(function (r) {
        return '<li><span class="muted">' + esc(r.date) + "</span> " + esc(r.what) + (r.mins ? " · " + esc(r.mins) + " 分钟" : "") +
          (r.note ? '<br><span class="muted">' + esc(r.note) + "</span>" : "") + "</li>";
      }).join("") || '<li class="muted">还没有记录。上完课在“收尾”那一步记一笔。</li>') + "</ul>" +
      (state.log.length ? '<p><button type="button" class="btn" id="log-copy">复制为 Markdown</button> <span class="muted" id="log-copy-msg">贴回 vault 的练习日志，或直接发给 Claude。</span></p>' : "") +
      '<h3>备份</h3><p class="muted">进度只存在这个浏览器里。换设备或清缓存前先导出一份 JSON 文件。</p>' +
      '<p><button type="button" class="btn" id="export-json">导出 JSON 备份</button></p>';

    $("daily").addEventListener("change", function (e) {
      var t = today();
      state.daily[t] = state.daily[t] || {};
      state.daily[t][e.target.dataset.i] = e.target.checked;
      save(); renderToday();
    });
    $("log-form").addEventListener("submit", function (e) { e.preventDefault(); addLog(e.target); renderToday(); });
    $("export-json").addEventListener("click", function () {
      var data = { course: C.id, exported: new Date().toISOString(), state: state };
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "singing-backup-" + today() + ".json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    if ($("log-copy")) $("log-copy").addEventListener("click", function () {
      var md = state.log.map(function (r) { return "| " + r.date + " | " + r.what + " | " + (r.mins ? r.mins + "min" : "") + " | " + (r.note || "") + " |"; }).join("\n");
      navigator.clipboard.writeText(md).then(function () { $("log-copy-msg").textContent = "已复制 " + state.log.length + " 行。"; });
    });
  }

  route();
})();
