/*
 * /learn/ 课程页通用渲染器。读取 window.COURSE（各课程目录下的 course.js）。
 * 三个视图：上课（一步一屏的引导）/ 打卡（今日练习 + 日志）/ 路线（诊断、阶段、过关、曲目）。
 * 进度、计时成绩、练习日志只存在本机浏览器 localStorage，不上传。
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

  var stage = C.stages.find(function (s) { return s.n === C.current.stage; });
  var lesson = stage.lessons.find(function (l) { return l.n === C.current.lesson; });
  function currentLevel() {
    return lesson.ladder.find(function (x) { return !state.checks[x.id]; }) || lesson.ladder[lesson.ladder.length - 1];
  }

  $("updated").textContent = "更新于 " + C.updated;

  /* ---------- 外框：标题 + 三个标签 ---------- */
  root.innerHTML =
    '<section class="hero compact">' +
      '<p class="eyebrow">' + esc(C.title) + " · 第 " + stage.n + " 阶段 · 第 " + lesson.n + " 课</p>" +
      "<h1>" + esc(lesson.title) + "</h1>" +
    "</section>" +
    '<nav class="tabs" role="tablist">' +
      '<a href="#lesson" role="tab" data-view="lesson">上课</a>' +
      '<a href="#today" role="tab" data-view="today">打卡</a>' +
      '<a href="#map" role="tab" data-view="map">路线</a>' +
    "</nav>" +
    '<div class="view" id="view-lesson"></div>' +
    '<div class="view" id="view-today"></div>' +
    '<div class="view" id="view-map"></div>';

  function route() {
    var v = (location.hash || "#lesson").slice(1);
    if (!$("view-" + v)) v = "lesson";
    document.querySelectorAll(".view").forEach(function (el) { el.hidden = el.id !== "view-" + v; });
    document.querySelectorAll(".tabs a").forEach(function (a) { a.setAttribute("aria-selected", String(a.dataset.view === v)); });
    if (v === "today") renderToday();
    if (v === "map") renderMap();
  }
  window.addEventListener("hashchange", route);

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
  var V = $("view-lesson");
  V.innerHTML =
    '<ol class="stepper" id="stepper">' + STEPS.map(function (s, i) {
      return '<li><button type="button" data-step="' + i + '"><span>' + (i + 1) + "</span>" + s.label + "</button></li>";
    }).join("") + "</ol>" +
    '<div class="stage-card" id="step-body"></div>' +
    '<div class="step-nav"><button type="button" class="btn" id="prev">← 上一步</button>' +
    '<button type="button" class="btn primary" id="next">下一步 →</button></div>';

  $("stepper").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (b) go(+b.dataset.step);
  });
  $("prev").addEventListener("click", function () { go(state.step - 1); });
  $("next").addEventListener("click", function () { go(state.step + 1); });

  function go(i) {
    stopTimer(true);
    state.step = Math.max(0, Math.min(STEPS.length - 1, i));
    save();
    document.querySelectorAll("#stepper li").forEach(function (li, j) {
      li.className = j === state.step ? "on" : (j < state.step ? "past" : "");
    });
    $("prev").style.visibility = state.step === 0 ? "hidden" : "visible";
    $("next").style.visibility = state.step === STEPS.length - 1 ? "hidden" : "visible";
    var body = $("step-body");
    body.innerHTML = "";
    STEP_RENDER[STEPS[state.step].key](body);
    body.scrollIntoView({ block: "nearest" });
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

  var STEP_RENDER = {
    watch: function (el) {
      el.append(
        h('<p class="callout warn"><strong>先纠正：</strong>' + esc(lesson.misconception) + "</p>"),
        videoCard(lesson.videos[0], true)
      );
      if (lesson.videos.length > 1) {
        var more = h('<details class="more"><summary>看不懂？换一个讲法（' + (lesson.videos.length - 1) + " 个）</summary><div class=\"videos\"></div></details>");
        lesson.videos.slice(1).forEach(function (v) { more.querySelector(".videos").append(videoCard(v)); });
        el.append(more);
      }
    },

    do: function (el) {
      var i = 0;
      var card = h('<div class="flip"><p class="flip-n"></p><h3></h3><p class="flip-body"></p>' +
        '<div class="flip-nav"><button type="button" class="btn" data-d="-1">上一条</button><button type="button" class="btn" data-d="1">做到了，下一条</button></div></div>');
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
      var lv = currentLevel();
      var idx = lesson.ladder.indexOf(lv);
      el.append(h(
        '<div class="timer">' +
          '<ol class="ladder-mini">' + lesson.ladder.map(function (x, j) {
            return '<li class="' + (state.checks[x.id] ? "done" : (j === idx ? "on" : "")) + '" title="' + esc(x.text) + '">' + (j + 1) + "</li>";
          }).join("") + "</ol>" +
          '<p class="level">第 ' + (idx + 1) + " 级：" + esc(lv.text) + (lv.target ? "<b> ≥ " + lv.target + " 秒</b>" : "") + "</p>" +
          (lv.target
            ? '<div class="ring" id="ring" style="--p:0"><div class="timer-face" id="timer-face">0.0</div></div>' +
              '<button type="button" class="btn primary big" id="timer-btn">开始</button>' +
              '<p class="muted" id="timer-hint">吹到断气就点停，也可以按空格。' + (state.best[lv.id] ? "最好成绩 " + state.best[lv.id].toFixed(1) + " 秒。" : "") + "</p>"
            : '<p>这一级没有秒数，做到了自己打勾。</p><button type="button" class="btn primary big" id="self-check">做到了 ✓</button>') +
        "</div>"
      ));
      var tips = h('<details class="more" id="tips"><summary>卡住了怎么办</summary><ul class="tips">' + lesson.troubleshooting.map(function (t) {
        return "<li><strong>" + esc(t.symptom) + "</strong>：" + esc(t.cause) + "。→ " + esc(t.fix) + "</li>";
      }).join("") + "</ul></details>");
      el.append(tips);

      if (!lv.target) {
        $("self-check").addEventListener("click", function () { state.checks[lv.id] = true; save(); go(state.step); });
        return;
      }
      $("timer-btn").addEventListener("click", function () { toggleTimer(lv); });
    },

    rec: function (el) {
      el.append(h('<div class="recorder">' +
        '<p>录一段当前这一级的练习，回放听听：颤动断没断、声音稳不稳。</p>' +
        '<button type="button" class="btn primary big" id="rec-btn">● 开始录音</button>' +
        '<p class="muted" id="rec-status">录音只在本机浏览器里，不会上传。</p><div id="rec-list" class="rec-list"></div></div>'));
      setupRecorder();
    },

    done: function (el) {
      var done = state.daily[today()] || {};
      var best = bestSummary();
      el.append(h('<div class="wrap-up">' +
        "<h3>今天练完了？记一笔</h3>" +
        (best ? '<p class="muted">计时成绩会自动带上：' + esc(best) + "</p>" : "") +
        '<form class="log-form" id="quick-log">' +
          '<input name="what" value="' + esc(lesson.title + " 第 " + (lesson.ladder.indexOf(currentLevel()) + 1) + " 级") + '" required>' +
          '<input name="mins" type="number" min="1" placeholder="分钟" class="mins">' +
          '<input name="note" placeholder="体感 / 问题（可空）">' +
          '<button class="btn primary">记一笔</button></form>' +
        '<p class="muted" id="quick-msg">' + (Object.keys(done).length ? "今天已经打过卡了。" : "") + "</p>" +
        '<p><a href="#today">去看今日打卡和历史日志 →</a></p></div>'));
      $("quick-log").addEventListener("submit", function (e) {
        e.preventDefault();
        addLog(e.target);
        $("quick-msg").textContent = "记好了。明天见。";
      });
    }
  };

  /* ---------- 计时器 ---------- */
  var tStart = 0, tRaf = 0, tLevel = null;
  function tick() {
    var secs = (performance.now() - tStart) / 1000;
    var face = $("timer-face"), ring = $("ring");
    if (!face) return;
    face.textContent = secs.toFixed(1);
    if (ring && tLevel.target) ring.style.setProperty("--p", Math.min(1, secs / tLevel.target));
    tRaf = requestAnimationFrame(tick);
  }
  function stopTimer(silent) {
    if (!tStart) return;
    cancelAnimationFrame(tRaf);
    var secs = (performance.now() - tStart) / 1000;
    tStart = 0;
    if (!silent) return secs;
  }
  function toggleTimer(lv) {
    var btn = $("timer-btn");
    if (!tStart) {
      tLevel = lv; tStart = performance.now(); tick();
      btn.textContent = "停"; btn.classList.add("running");
      $("timer-hint").textContent = "吹……";
      return;
    }
    var secs = stopTimer();
    $("timer-face").textContent = secs.toFixed(1);
    btn.textContent = "再来一次"; btn.classList.remove("running");
    var msg = "这次 " + secs.toFixed(1) + " 秒。";
    if (!state.best[lv.id] || secs > state.best[lv.id]) { state.best[lv.id] = secs; msg += " 新纪录！"; }
    var hint = $("timer-hint");
    if (secs >= lv.target) {
      state.checks[lv.id] = true;
      save();
      hint.innerHTML = esc(msg) + ' <strong class="win">达标！</strong> <button type="button" class="link" id="level-up">进下一级 →</button>';
      $("level-up").addEventListener("click", function () { go(state.step); });
      $("ring").classList.add("win");
    } else {
      save();
      hint.textContent = msg + " 目标 " + lv.target + " 秒，再来。";
      if (secs < lv.target / 2) $("tips").open = true;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.code !== "Space" || !$("timer-btn") || /INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)) return;
    e.preventDefault(); $("timer-btn").click();
  });

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
    return lesson.ladder.filter(function (x) { return state.best[x.id]; })
      .map(function (x) { return "L" + (lesson.ladder.indexOf(x) + 1) + " " + state.best[x.id].toFixed(1) + "s"; }).join("，");
  }
  function addLog(f) {
    var note = f.note.value.trim();
    var best = bestSummary();
    if (best) note = (note ? note + "；" : "") + "计时最好：" + best;
    state.log.push({ date: today(), what: f.what.value.trim(), mins: f.mins.value, note: note });
    state.daily[today()] = state.daily[today()] || {};
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
    var cnt = stage.daily.filter(function (_, i) { return done[i]; }).length;
    el.innerHTML =
      '<div class="stats"><div><b>' + streak() + '</b><span>连续天数</span></div><div><b>' + state.log.length +
        '</b><span>练习记录</span></div><div><b>' + cnt + " / " + stage.daily.length + "</b><span>今天完成</span></div></div>" +
      "<h3>今天的练习 <small>" + today() + " · 10–15 分钟</small></h3>" +
      '<ul class="checks" id="daily">' + stage.daily.map(function (d, i) {
        return '<li class="' + (done[i] ? "done" : "") + '"><label><input type="checkbox" data-i="' + i + '"' + (done[i] ? " checked" : "") + "> " +
          esc(d.text) + '</label><span class="muted">' + d.min + "′</span></li>";
      }).join("") + "</ul>" +
      "<h3>练习日志</h3>" +
      '<form class="log-form" id="log-form"><input name="what" placeholder="练了什么" required>' +
        '<input name="mins" type="number" min="1" placeholder="分钟" class="mins"><input name="note" placeholder="体感 / 问题">' +
        '<button class="btn primary">记一笔</button></form>' +
      '<ul class="log">' + (state.log.slice().reverse().map(function (r) {
        return "<li><span class=\"muted\">" + esc(r.date) + "</span> " + esc(r.what) + (r.mins ? " · " + esc(r.mins) + " 分钟" : "") +
          (r.note ? '<br><span class="muted">' + esc(r.note) + "</span>" : "") + "</li>";
      }).join("") || '<li class="muted">还没有记录。上完课在“收尾”那一步记一笔。</li>') + "</ul>" +
      (state.log.length ? '<p><button type="button" class="btn" id="log-copy">复制为 Markdown</button> <span class="muted" id="log-copy-msg">贴回 vault 的练习日志，或直接发给 Claude。</span></p>' : "");

    $("daily").addEventListener("change", function (e) {
      var t = today();
      state.daily[t] = state.daily[t] || {};
      state.daily[t][e.target.dataset.i] = e.target.checked;
      save(); renderToday();
    });
    $("log-form").addEventListener("submit", function (e) { e.preventDefault(); addLog(e.target); renderToday(); });
    if ($("log-copy")) $("log-copy").addEventListener("click", function () {
      var md = state.log.map(function (r) { return "| " + r.date + " | " + r.what + " | " + (r.mins ? r.mins + "min" : "") + " | " + (r.note || "") + " |"; }).join("\n");
      navigator.clipboard.writeText(md).then(function () { $("log-copy-msg").textContent = "已复制 " + state.log.length + " 行。"; });
    });
  }

  /* =========================================================
   * 路线：诊断、阶段、过关、曲目（都折叠）
   * ========================================================= */
  function renderMap() {
    var el = $("view-map");
    var passed = stage.pass.filter(function (p) { return state.checks[p.id]; }).length;
    el.innerHTML =
      '<ol class="roadmap">' + C.stages.map(function (s) {
        var cls = s.n === stage.n ? "is-current" : (s.n < stage.n ? "is-done" : "is-later");
        var inner = s.lessons
          ? "<p>" + esc(s.why) + "</p><ul>" + s.lessons.map(function (l) {
              return '<li class="lesson-' + l.status + '">' + (l.status === "current" ? "▶ " : "· ") + "第 " + l.n + " 课 " + esc(l.title) +
                ' <span class="muted">' + esc(l.goal) + "</span></li>";
            }).join("") + "</ul>"
          : "<p>" + esc(s.outline) + "</p>";
        return '<li class="' + cls + '"><details' + (s.n === stage.n ? " open" : "") + '><summary><span class="stage-n">' + s.n + "</span>" +
          esc(s.title) + '<span class="muted">' + (s.n === stage.n ? "现在 · " : "") + esc(s.weeks) + "</span></summary>" + inner + "</details></li>";
      }).join("") + "</ol>" +
      '<details class="panel" open><summary>第 ' + stage.n + " 阶段过关标准 <span class=\"muted\">" + passed + " / " + stage.pass.length + "</span></summary>" +
        '<ul class="checks" id="pass">' + stage.pass.map(function (p) {
          var on = !!state.checks[p.id];
          return '<li class="' + (on ? "done" : "") + '"><label><input type="checkbox" data-id="' + p.id + '"' + (on ? " checked" : "") + "> " + esc(p.text) + "</label></li>";
        }).join("") + '</ul><ul class="redlines">' + stage.redlines.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></details>" +
      '<details class="panel"><summary>起点诊断 <span class="muted">' + esc(C.diagnosis.date) + "</span></summary>" +
        "<p>" + esc(C.diagnosis.summary) + '</p><div class="diag">' + C.diagnosis.items.map(function (d) {
          return '<div class="diag-row tone-' + d.tone + '"><span class="diag-label">' + esc(d.label) + "</span><span>" + esc(d.finding) +
            '<br><span class="muted">' + esc(d.note) + "</span></span></div>";
        }).join("") + "</div></details>" +
      '<details class="panel"><summary>练习曲</summary><ul class="songs">' + C.songs.map(function (s) {
        return "<li><b>" + esc(s.stage) + "</b> " + s.items.map(esc).join("、") + '<br><span class="muted">' + esc(s.focus) + "</span></li>";
      }).join("") + '</ul><p class="muted">' + esc(C.benchmark) + "</p></details>";
    $("pass").addEventListener("change", function (e) { state.checks[e.target.dataset.id] = e.target.checked; save(); renderMap(); });
  }

  go(state.step);
  route();
})();
