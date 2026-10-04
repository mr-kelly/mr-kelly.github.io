# Learn

> 做课的完整套路（内容结构、找视频、验证、发布）在 vault 的 `course-maker` skill：`~/Documents/invest/.agents/skills/course-maker/SKILL.md`。`course.js` 字段说明见该 skill 的 `references/course-js.md`。

Kelly 的专项学习课程页（唱歌、篮球技术……），一门课一个子目录：`/learn/<skill>/`。

## 真源在 vault，不在这里

课程内容的唯一真源是 Kelly 的 Obsidian vault：`~/Documents/invest/life/learn/<skill>/`。这里只是交付用的网页版。
**改内容先改 vault，再同步 `course.js`**，不要只改网站这边。

## 结构

- `index.html`：课程目录，新增一门课就在这里加一张卡片
- `app.js`：通用渲染器（入学测试给分：已会 100 / 半会 60 / 要学 20 取平均），读 `window.COURSE`，所有课程共用。应用式布局：左边栏（导航 + 课程树），窄屏变抽屉 + 底部标签栏；路由 `#test` `#syllabus` `#lesson[/<课号>]` `#today`
- `styles.css`：共享样式，用 `/brand/tokens.css`
- `<skill>/index.html`：页面壳，只引用 `course.js` 和 `/learn/app.js`
- `<skill>/course.js`：课程数据（诊断、阶段、当前课、视频、阶梯、每日练习、过关标准、曲目）

改了 `app.js` / `styles.css` / `course.js` 记得把引用处的 `?v=` 一起改。

## 规则

- 全部 `noindex, nofollow`，不进 sitemap。这是个人学习记录，不是对外的品牌内容。
- 进度、计时成绩、练习日志、录音都只在访问者自己浏览器里（localStorage / Blob），不上传，不在仓库里存个人数据。
- 视频用 YouTube 缩略图，点了才加载 `youtube-nocookie` 播放器。
