/*
 * /learn/ 课程页通用渲染器。读取 window.COURSE（各课程目录下的 course.js），
 * 进度、计时成绩、练习日志只存在本机浏览器 localStorage，不上传。
 */
(function () {
  "use strict";

  var C = window.COURSE;
  var root = document.getElementById("course");
  if (!C || !root) return;

  var KEY = "learn:" + C.id;
  var state = load();

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

  state.checks = state.checks || {};
  state.best = state.best || {};
  state.daily = state.daily || {};
  state.log = state.log || [];

  document.getElementById("updated").textContent = "课程更新于 " + C.updated;

  var stage = C.stages.find(function (s) { return s.n === C.current.stage; });
  var lesson = stage.lessons.find(function (l) { return l.n === C.current.lesson; });

  /* ---------- 头部 + 诊断 ---------- */
  root.appendChild(h(
    '<section class="hero">' +
      '<p class="eyebrow">当前：第 ' + stage.n + ' 阶段 · 第 ' + lesson.n + ' 课</p>' +
      "<h1>" + esc(C.title) + "</h1>" +
      '<p class="lede">' + esc(C.subtitle) + "</p>" +
    "</section>"
  ));

  root.appendChild(h(
    '<section class="block"><h2>起点诊断 <small>' + esc(C.diagnosis.date) + "</small></h2>" +
      '<p class="callout">' + esc(C.diagnosis.summary) + "</p>" +
      '<div class="diag">' + C.diagnosis.items.map(function (d) {
        return '<div class="diag-row tone-' + d.tone + '"><span class="diag-label">' + esc(d.label) + "</span>" +
          '<span class="diag-finding">' + esc(d.finding) + '</span><span class="diag-note">' + esc(d.note) + "</span></div>";
      }).join("") + "</div></section>"
  ));

  /* ---------- 路线图 ---------- */
  root.appendChild(h(
    '<section class="block"><h2>阶段路线图</h2><p class="muted">过关了才进下一阶段，周数只是参考。</p><ol class="roadmap">' +
      C.stages.map(function (s) {
        var cls = s.n === stage.n ? "is-current" : (s.n < stage.n ? "is-done" : "is-later");
        var body = s.lessons
          ? "<ul>" + s.lessons.map(function (l) {
              return '<li class="lesson-' + l.status + '">第 ' + l.n + " 课 · " + esc(l.title) + (l.status === "current" ? " ← 现在" : "") + "</li>";
            }).join("") + "</ul>"
          : "<p>" + esc(s.outline) + "</p>";
        return '<li class="' + cls + '"><div class="stage-head"><span class="stage-n">' + s.n + "</span><strong>" + esc(s.title) +
          '</strong><span class="muted">' + esc(s.weeks) + "</span></div>" + body + "</li>";
      }).join("") + "</ol></section>"
  ));

  /* ---------- 当前课 ---------- */
  var L = h('<section class="block lesson" id="lesson"></section>');
  L.innerHTML =
    '<p class="eyebrow">第 ' + stage.n + " 阶段 · 第 " + lesson.n + " 课</p>" +
    "<h2>" + esc(lesson.title) + "</h2>" +
    '<p class="lede">' + esc(lesson.goal) + "</p>" +
    '<p class="callout warn"><strong>先纠正：</strong>' + esc(lesson.misconception) + "</p>" +
    "<h3>① 看视频</h3>" +
    '<div class="videos">' + lesson.videos.map(function (v) {
      return '<figure class="video" data-id="' + esc(v.id) + '">' +
        '<button type="button" class="video-poster" aria-label="播放：' + esc(v.title) + '">' +
          '<img loading="lazy" src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="">' +
          '<span class="play">▶</span></button>' +
        "<figcaption><span class=\"tag\">" + esc(v.lang) + "</span>" + (v.note ? '<span class="tag accent">' + esc(v.note) + "</span>" : "") +
          '<a href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">' + esc(v.title) + "</a></figcaption></figure>";
    }).join("") + "</div>" +
    "<h3>② 跟着做</h3>" +
    '<ol class="steps">' + lesson.steps.map(function (s) {
      return "<li><strong>" + esc(s.title) + "</strong><p>" + esc(s.body) + "</p></li>";
    }).join("") + "</ol>" +
    "<h3>③ 计时：一口气能撑几秒</h3>" +
    '<div class="timer">' +
      '<label>练的是：<select id="timer-level">' + lesson.ladder.map(function (x, i) {
        return '<option value="' + x.id + '">' + (i + 1) + ". " + esc(x.text) + "</option>";
      }).join("") + "</select></label>" +
      '<div class="timer-face" id="timer-face">0.0<small>秒</small></div>' +
      '<button type="button" class="btn primary" id="timer-btn">开始</button>' +
      '<p class="muted" id="timer-hint">点开始，吹到断气就点停。也可以按空格键。</p>' +
    "</div>" +
    "<h3>④ 进阶阶梯</h3><p class=\"muted\">达标一级再进下一级。带秒数的级别，计时器成绩达标会自动打勾。</p>" +
    '<ol class="ladder" id="ladder"></ol>' +
    "<h3>⑤ 录一段听听</h3>" +
    '<div class="recorder"><button type="button" class="btn" id="rec-btn">开始录音</button>' +
      '<span class="muted" id="rec-status">录音只在本机浏览器里，不会上传。</span><div id="rec-list" class="rec-list"></div></div>' +
    "<h3>卡住了怎么办</h3>" +
    '<table class="trouble"><thead><tr><th>现象</th><th>原因</th><th>调整</th></tr></thead><tbody>' +
      lesson.troubleshooting.map(function (t) {
        return '<tr><td data-label="现象">' + esc(t.symptom) + '</td><td data-label="原因">' + esc(t.cause) + '</td><td data-label="调整">' + esc(t.fix) + "</td></tr>";
      }).join("") + "</tbody></table>";
  root.appendChild(L);

  /* 视频：点了才加载 iframe */
  L.querySelectorAll(".video-poster").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.closest(".video").dataset.id;
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.title = btn.getAttribute("aria-label");
      btn.replaceWith(f);
    });
  });

  /* 阶梯 */
  function renderLadder() {
    var ol = document.getElementById("ladder");
    ol.innerHTML = lesson.ladder.map(function (x) {
      var best = state.best[x.id];
      var done = !!state.checks[x.id];
      return '<li class="' + (done ? "done" : "") + '"><label><input type="checkbox" data-id="' + x.id + '"' + (done ? " checked" : "") + "> " +
        esc(x.text) + (x.target ? " <b>≥ " + x.target + " 秒</b>" : "") + "</label>" +
        (best ? '<span class="best">最好 ' + best.toFixed(1) + " 秒</span>" : "") + "</li>";
    }).join("");
  }
  renderLadder();
  document.getElementById("ladder").addEventListener("change", function (e) {
    if (!e.target.dataset.id) return;
    state.checks[e.target.dataset.id] = e.target.checked;
    save(); renderLadder();
  });

  /* 计时器 */
  var tBtn = document.getElementById("timer-btn");
  var tFace = document.getElementById("timer-face");
  var tHint = document.getElementById("timer-hint");
  var tStart = 0, tRaf = 0;
  function tick() {
    tFace.firstChild.nodeValue = ((performance.now() - tStart) / 1000).toFixed(1);
    tRaf = requestAnimationFrame(tick);
  }
  function toggleTimer() {
    if (!tStart) {
      tStart = performance.now(); tick();
      tBtn.textContent = "停"; tBtn.classList.add("running");
      return;
    }
    cancelAnimationFrame(tRaf);
    var secs = (performance.now() - tStart) / 1000;
    tStart = 0;
    tFace.firstChild.nodeValue = secs.toFixed(1);
    tBtn.textContent = "再来一次"; tBtn.classList.remove("running");
    var id = document.getElementById("timer-level").value;
    var item = lesson.ladder.find(function (x) { return x.id === id; });
    var msg = "这次 " + secs.toFixed(1) + " 秒。";
    if (!state.best[id] || secs > state.best[id]) { state.best[id] = secs; msg += " 新纪录！"; }
    if (item.target && secs >= item.target && !state.checks[id]) { state.checks[id] = true; msg += " 达标，这一级打勾了。"; }
    else if (item.target && secs < item.target) { msg += " 目标 " + item.target + " 秒。"; }
    tHint.textContent = msg;
    save(); renderLadder();
  }
  tBtn.addEventListener("click", toggleTimer);
  document.addEventListener("keydown", function (e) {
    if (e.code !== "Space" || /INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)) return;
    e.preventDefault(); toggleTimer();
  });

  /* 录音 */
  var recBtn = document.getElementById("rec-btn");
  var recStatus = document.getElementById("rec-status");
  var recorder = null, chunks = [];
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    recBtn.disabled = true; recStatus.textContent = "这个浏览器不支持录音。";
  }
  recBtn.addEventListener("click", function () {
    if (recorder && recorder.state === "recording") { recorder.stop(); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = function (e) { chunks.push(e.data); };
      recorder.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        var url = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType }));
        var stamp = new Date().toLocaleTimeString();
        document.getElementById("rec-list").prepend(h(
          '<div class="rec-item"><span>' + stamp + '</span><audio controls src="' + url + '"></audio>' +
          '<a href="' + url + '" download="singing-' + today() + '.webm">下载</a></div>'));
        recBtn.textContent = "开始录音"; recBtn.classList.remove("running");
        recStatus.textContent = "录好了。想保存就点下载，放进 vault 的 assets/。";
      };
      recorder.start();
      recBtn.textContent = "停止录音"; recBtn.classList.add("running");
      recStatus.textContent = "录音中……";
    }).catch(function () { recStatus.textContent = "没有拿到麦克风权限。"; });
  });

  /* ---------- 每日练习 ---------- */
  var D = h('<section class="block"><h2>今天的练习 <small>' + today() + "</small></h2>" +
    '<p class="muted">10–15 分钟就够。</p><ul class="daily" id="daily"></ul></section>');
  root.appendChild(D);
  function renderDaily() {
    var done = state.daily[today()] || {};
    document.getElementById("daily").innerHTML = stage.daily.map(function (d, i) {
      return '<li class="' + (done[i] ? "done" : "") + '"><label><input type="checkbox" data-i="' + i + '"' + (done[i] ? " checked" : "") + "> " +
        esc(d.text) + ' <span class="muted">' + d.min + " 分钟</span></label></li>";
    }).join("");
  }
  renderDaily();
  document.getElementById("daily").addEventListener("change", function (e) {
    var t = today();
    state.daily[t] = state.daily[t] || {};
    state.daily[t][e.target.dataset.i] = e.target.checked;
    save(); renderDaily();
  });

  /* ---------- 练习日志 ---------- */
  var G = h('<section class="block"><h2>练习日志</h2>' +
    '<form class="log-form" id="log-form">' +
      '<input name="what" placeholder="练了什么，比如：弹唇第 2 级" required>' +
      '<input name="mins" type="number" min="1" placeholder="分钟" style="max-width:6em">' +
      '<input name="note" placeholder="体感 / 问题">' +
      '<button class="btn primary">记一笔</button></form>' +
    '<table class="log"><thead><tr><th>日期</th><th>练了什么</th><th>时长</th><th>体感 / 问题</th></tr></thead><tbody id="log-body"></tbody></table>' +
    '<p><button type="button" class="btn" id="log-copy">复制为 Markdown</button> <span class="muted" id="log-copy-msg">贴回 vault 的 练习日志.md，或直接发给 Claude。</span></p>' +
  "</section>");
  root.appendChild(G);
  function bestSummary() {
    return lesson.ladder.filter(function (x) { return state.best[x.id]; })
      .map(function (x, i) { return "L" + (lesson.ladder.indexOf(x) + 1) + " " + state.best[x.id].toFixed(1) + "s"; }).join("，");
  }
  function renderLog() {
    document.getElementById("log-body").innerHTML = state.log.slice().reverse().map(function (r) {
      return '<tr><td data-label="日期">' + esc(r.date) + '</td><td data-label="练了什么">' + esc(r.what) + '</td><td data-label="时长">' +
        (r.mins ? esc(r.mins) + " 分钟" : "") + '</td><td data-label="体感">' + esc(r.note || "") + "</td></tr>";
    }).join("") || '<tr><td colspan="4" class="muted">还没有记录。</td></tr>';
  }
  renderLog();
  document.getElementById("log-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var note = f.note.value.trim();
    var best = bestSummary();
    if (best) note = (note ? note + "；" : "") + "计时最好：" + best;
    state.log.push({ date: today(), what: f.what.value.trim(), mins: f.mins.value, note: note });
    save(); renderLog(); f.reset();
  });
  document.getElementById("log-copy").addEventListener("click", function () {
    var md = state.log.map(function (r) {
      return "| " + r.date + " | " + r.what + " | " + (r.mins ? r.mins + "min" : "") + " | " + (r.note || "") + " |";
    }).join("\n");
    navigator.clipboard.writeText(md).then(function () {
      document.getElementById("log-copy-msg").textContent = "已复制 " + state.log.length + " 行。";
    });
  });

  /* ---------- 过关标准 + 红线 + 曲目 ---------- */
  var P = h('<section class="block"><h2>第 ' + stage.n + " 阶段过关标准</h2>" +
    '<p class="muted">全部打勾才进第 ' + (stage.n + 1) + ' 阶段。</p><ul class="pass" id="pass"></ul>' +
    '<h3>红线</h3><ul class="redlines">' + stage.redlines.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></section>");
  root.appendChild(P);
  function renderPass() {
    var n = 0;
    document.getElementById("pass").innerHTML = stage.pass.map(function (p) {
      var on = !!state.checks[p.id]; if (on) n++;
      return '<li class="' + (on ? "done" : "") + '"><label><input type="checkbox" data-id="' + p.id + '"' + (on ? " checked" : "") + "> " + esc(p.text) + "</label></li>";
    }).join("") + '<li class="pass-count">' + n + " / " + stage.pass.length + "</li>";
  }
  renderPass();
  document.getElementById("pass").addEventListener("change", function (e) {
    state.checks[e.target.dataset.id] = e.target.checked; save(); renderPass();
  });

  root.appendChild(h('<section class="block"><h2>练习曲</h2><table class="songs"><thead><tr><th>阶段</th><th>曲目</th><th>练什么</th></tr></thead><tbody>' +
    C.songs.map(function (s) {
      return '<tr><td data-label="阶段">' + esc(s.stage) + '</td><td data-label="曲目">' + s.items.map(esc).join("、") + '</td><td data-label="练什么">' + esc(s.focus) + "</td></tr>";
    }).join("") + '</tbody></table><p class="muted">' + esc(C.benchmark) + "</p></section>"));
})();
