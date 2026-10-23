---
layout: article
lang: en
title: You're using Agents more and more, so why is the good version getting harder to find?
subtitle: You have the Agent make change after change and click Allow at every step, yet in the end you can't say which version is the right one. The problem usually isn't that you don't understand the tech; it's that no one ever taught you how to work with it. Here are five things you should say to it.
description: You have the Agent make change after change and click Allow at every step, yet in the end you can't say which version is the right one. The problem usually isn't that you don't understand the tech; it's that no one ever taught you how to work with it. Here are five things you should say to it.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-10-02
translation: /articles/agent-collaboration-blind-spot.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

Lately I keep running into a certain kind of person.

They aren't engineers. They're founders, or heads of operations, marketing or product. Over the past six months, they've started opening tools like Claude Code and Codex themselves and having an Agent build small internal tools, reporting scripts and landing pages.

The picture usually looks like this: every time the Agent changes something, a confirmation pops up, and they click Allow. In one afternoon, they click it dozens of times.

But there's one option on the screen they've never touched. In the Claude desktop app, it sits right next to the branch name and is called worktree; in Codex, it's below the input box.

They've created PRs, too. The tool has a button for it; one click and it's done. But what comes after, who looks at it, what they look at, when it counts, no one ever told them.

Then the problems start to show up: the version that ran fine a few days ago can't be found; the Agent made three rounds of changes, said “Done” each time, and they can't tell which round was right; they ask it to start over with a different approach, and along the way it also changes the part they had just been happy with.

I usually ask three questions:

**First: if the Agent broke something right now, could you get back to where you were before?**

**Second: it just said “Done.” Do you know exactly which places it changed?**

**Third: of the versions you have, which one counts? Who decided?**

If you can't answer even one of the three, the problem isn't that the Agent isn't smart enough.

I call this state: **the collaboration blind spot.**

You're using a collaboration tool, but you've never used it the way collaboration works.

> **Collaboration output = A way back × Understanding × Someone who decides**

Many people think what's holding them back is the technology: they don't know Git, can't read code, aren't sure what a branch is.

**It's the opposite: the Agent has already done the technical part for you. What's left for you are the collaboration decisions.**

The Agent will type every Git command for you. You don't need to know how to write `git worktree add`, just as you don't need to know how to fix a printer to print a document. You only need to know three things: when to have it start a separate copy, when to have it walk you through its changes, and when you say, “Keep this one.”

Those three things are the three factors in the formula. They're multiplied: with a way back but no understanding, you dare to experiment but don't know what the experiment produced; with understanding but no one deciding, versions keep piling up; with someone deciding but no way back, every decision is a gamble.

**Git isn't a technical barrier. It's a set of collaboration rules.**

## I. First, see which level you're on

![Which level are you on: from a single folder to opening, understanding and deciding](/articles/images/agent-collaboration-blind-spot/en/layers.png)

**Level 0: just one folder.** No saved versions at all. If the Agent breaks something once, there's no going back.

Many people assume the tool's built-in undo is enough. Claude Code's `/rewind` and Cursor's checkpoints can indeed take you back, but only so far: Claude Code's checkpoints don't record files the Agent deletes or moves through the command line, or anything you change by hand outside the tool. In the official docs' own words, “Checkpoints are designed for quick, session-level recovery”; long-term history and collaboration still depend on version control such as Git.

There's another fact that's easy to miss: session isolation in the Claude desktop app requires Git. If your folder isn't a Git repository yet, that worktree option doesn't really exist for you. That may be one reason so many people “never noticed” it.

**Level 1: you have saved versions, but every change happens on the same copy.** You don't dare let the Agent make big changes, because whatever it changes lands on the copy you're using. So you can only watch every step and click Allow every time. The person from the opening who spent an afternoon clicking Allow is most likely on this level.

**Level 2: you can open worktrees, but you don't review and don't decide.** You open one workstream after another, each changes a bit of something, and none of them is ever confirmed as “this is the one that counts.” The good version most likely isn't lost; you just don't know where it is. Codex puts its worktrees under `$CODEX_HOME/worktrees` by default, nowhere near your project folder. By default it keeps only the 15 most recent and cleans up older ones automatically; it saves a snapshot before cleaning up, and reopening that conversation can restore it.

**Level 3: open, understand, decide, one thing at a time.** Every workstream ends with a conclusion: keep it, or throw it away.

This isn't a problem for a few unlucky people. Search the communities and you'll find the same kind of question asked everywhere:

![The same kind of question, asked everywhere: post titles from online communities](/articles/images/agent-collaboration-blind-spot/en/complaints.png)

Original posts: [V2EX](https://v2ex.com/t/1149110) | [LINUX DO](https://linux.do/t/topic/960425) | [V2EX](https://www.v2ex.com/t/1146066) | [Zhihu](https://zhuanlan.zhihu.com/p/2053252463784939621) | [Medium](https://donnnachiu.medium.com/a-vibe-coders-hard-learned-lesson-on-why-git-is-non-negotiable-a8ac5a07fe00) (V2EX, LINUX DO and Zhihu are Chinese developer and Q&A communities)

The questions are worded differently, but they're all missing the same thing: a way back.

## II. First, translate four words into plain language

![One repository, several workbenches: main, workbenches and merging](/articles/images/agent-collaboration-blind-spot/en/desks.png)

**Commit**: a snapshot of the current state. No matter what changes later, you can always get back to this moment.

**Main**: the copy that works right now and counts.

**Worktree**: a separate workbench copied from main. The Agent can change whatever it likes on it, and main doesn't move an inch. All the workbenches share the same history of commits; they aren't several unrelated copies. The Claude desktop app puts them under `.claude/worktrees/` in your project by default.

**PR (Pull Request)**: a request to “merge the changes on this workbench back into main,” stating what changed and why, waiting for someone to sign off. It needs a remote repository such as GitHub; if you only work on your own computer, just have the Agent merge back into main directly.

Think of it as a contract: main is the signed copy, the workbench is a photocopy you can scribble on, and the PR is the marked-up revision with a note explaining the changes, waiting for a signature.

You'll notice that none of these four words is really technical. They're rules every company already has for revising contracts and proposals, just under different names.

## III. Five things to say to your Agent

You don't need to learn the commands. The five sentences below map to the three factors in the formula.

**A way back:**

1. “Commit what we have first, and say clearly in the message what state this version is in.”
2. “Do this in a new worktree. Don't touch main.” In the desktop app, that's the same as checking worktree when you start a new session.

**Understanding:**

3. “In plain language, tell me which files you changed, why you changed each one, and whether you touched anything I didn't ask you to.”

**Someone who decides:**

4. “Merge this into main.” Or: “Throw this away and delete the worktree too.”
5. “Open a PR for me. Make the title say what changed, and list what I should check in the description.” Use this one when you have a remote repository.

Sentence 3 is the easiest to skip, and the most valuable. Reviewing changes doesn't mean reading code. The Claude desktop app shows a change count, such as `+12 -1`. First check whether the size makes sense: if a request you could explain in one sentence ended up touching dozens of files, it most likely changed things you didn't ask it to.

## IV. One task, five steps

![One task, five steps: open, brief, let go, understand, decide](/articles/images/agent-collaboration-blind-spot/en/lifecycle.png)

1. **Open.** Check worktree when you start a new session; in Codex, choose Worktree.
2. **Brief.** One thing at a time. Say up front what counts as done and what it must not touch.
3. **Let go.** You already have a way back, so there's no need to click Allow at every step. In the Claude desktop app, you can switch to Accept edits so it can work through the file changes in one go; for other terminal commands, it will still ask you first.
4. **Understand.** Look at the change count first, then have it explain in plain language. If you need to, click Review code and have it check its own work first.
5. **Decide.** To keep it, merge it back into main or open a PR; to throw it away, archive the session in the sidebar, and the worktree is deleted with it. In Codex, you can use Hand off to bring the result back to your local machine, or have it create a branch, commit and open a PR.

Look at step 3. The person from the opening who spent an afternoon clicking Allow wasn't short on patience. They were short on a way back.

**Opening one workstream first beats clicking Allow a hundred times.**

## V. In week one, practice only these five steps

**Days 1 to 3: one workstream at a time.** Open a workstream for every new task, and make a decision at the end of every one. Better slow than leaving half-finished work around.

**Days 4 to 7: two workstreams at once.** One for the real work, one for an experiment. What you're practicing isn't speed; it's the nerve to throw things away: if you're not happy with the experiment, can you delete it without a second thought?

Anthropic's [The AI-native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook), published in August 2026, gives engineers the same advice: give each task its own worktree, and “Two or three sessions is a sensible starting point.” If that's the advice for engineers, two is plenty while you're just starting out.

## VI. What counts as having learned it

Not memorizing the four words, but being able to answer three questions within 10 seconds:

- Which version is main right now?
- How many workstreams do you have open?
- For each one: keep it or throw it away?

Before every decision, you should have something very short in hand: what this change is meant to solve, why it was done this way, what was changed, how it was verified, a screen or screenshot you can look at, and what the risks are. The last line is your own name.

The Agent types the commands, changes the files and writes the explanations. People are responsible for three things: deciding whether to open a workstream, understanding what changed, and deciding whether to keep it. **Merging into main is always authorized by a person.** Anthropic's playbook puts it more bluntly: “the agent that wrote the code has no way to approve it.”

Let me also be clear about what I don't recommend:

- I don't recommend starting out with five Agents running at once. Parallel work isn't a skill; it's a management load.
- I don't recommend merging without looking. It saying “Done” doesn't mean it's done.
- Don't use the tool's undo button as a substitute for commits. It only covers this one session.

## VII. If you lead an R&D team

Everything so far was written for people running Agents themselves. If you're a CEO, a CTO or the head of R&D, this piece matters to you on a different level.

At a certain point in an AI-native R&D transformation, something new happens: **engineers are no longer the only ones committing to your code repositories.** Product managers have Agents change pages, operations has them write data scripts, designers have them adjust styles, and the boss gets hands-on too.

Git's rules used to be a craft inside the engineering team; now they've become the collaboration protocol for the whole company.

That is exactly what Anthropic describes in that playbook: colleagues who don't write code use claude.ai or Cowork to write their requirement up as an intent.md file, and Claude commits it to the code repository for them; when the product owner accepts or rejects it, what gets recorded is a merge. When even requirements go through merges, these rules obviously belong to the whole company.

The two most common ways it gets out of hand: someone bypasses PRs and changes main directly; or one person drops a dozen Agent-written PRs on you in an afternoon, with no description and a size that doesn't match what they claim. Engineers have gone from having too much to build to having [too much to accept](/articles/en/ai-rd-next-bottleneck-acceptance.html).

So people who lead teams need to do three more things:

1. **Lock main.** GitHub, GitLab and Gitee (a Chinese code-hosting platform) all let you make main a protected branch: no direct pushes, changes can only come in through a pull request (GitLab calls it a Merge Request). GitHub can also require approval from a minimum number of reviewers and passing automated tests before a merge. Write the rules into the system instead of relying on people to behave.
2. **Send these five steps to colleagues who don't write code.** Especially step 3. Standardize PR descriptions on one template: what it's meant to solve, what was changed, how it was verified, what the risks are.
3. **Align how reviews are done.** When engineers review a PR from a non-engineering colleague, they first check whether the size matches the description, and only then look at the code. If it doesn't match, send it straight back and open a new workstream.

**Open main to the whole company. Keep the right to merge in a few hands.**

## Closing

I've led product, R&D and digital operations teams of more than 150 people. Engineering teams have used the rules of branching, merging and review for many years; now, for the first time, people who don't write code need to learn them. The good news is that you only need to learn the rules, not the commands.

**Git isn't a technical barrier. It's a set of collaboration rules.**

**You don't need to learn the commands. You only need to learn three decisions.**

**Every workstream needs one moment where someone decides.**

If you're running Agents yourself and it always feels messy, take a screenshot of the workstreams you have open and send it to me, and we'll look together at which level you're stuck on. Getting a whole R&D team to run the evidence chain of “task, PR, test, release” is what AI-native R&D transformation at CAIO Office (an outside Chief AI Officer team that works with you month by month) does.

- AI-native R&D transformation: <https://kellychan.im/ai/en/caio/>
