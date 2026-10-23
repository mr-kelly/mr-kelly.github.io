---
layout: article
lang: en
title: The scarcest people in R&D now write the rules, not the code
subtitle: Once AI takes over execution, the R&D process has to change from a straight line into a loop
description: You gave your team AI coding tools, and code really did get faster, yet rework and production issues haven't gone down. The problem usually isn't that AI isn't strong enough; it's that the process was still designed for people writing code. This essay covers how to set rules for AI, and how to spend the first 30 days.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-10-05
translation: /articles/ai-rd-rule-makers.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

Let's start by picturing a company like this.

The whole R&D team now uses AI coding tools, and code really has gotten faster.

But the problems have just changed shape: product says what AI built isn't what they asked for; while fixing a bug, AI quietly edits the tests too, and everything goes green; someone tweaks one line of a prompt, code quality slowly gets worse afterwards, and nobody notices.

The owner's conclusion: AI isn't reliable enough yet, so wait for a stronger model.

I call this state **the R&D black box.**

The real output of R&D can be written as a formula:

> **Effective output = Requirement clarity × Delivery evidence × Handover readiness**

So for many companies, the problem isn't that AI isn't strong enough. Quite the opposite: AI is already strong enough. It has just been squeezed into an old process designed for “people writing code,” and nobody has set rules for it.

This is multiplication. Model capability isn't in the formula; it's only an amplifier. If any factor is zero, what gets amplified is zero, or worse, a faster pile of code nobody dares to ship.

![The R&D black box: Effective output = Requirement clarity × Delivery evidence × Handover readiness](/articles/images/ai-rd-rule-makers/en/formula.png)

To tell whether you're in this state, ask three questions.

**Are your requirements written well enough for AI to get them right the first time? Who can say clearly what “done” looks like?**

**Who has looked at the code AI changed, and by what standard was it approved? If AI is doing the review too, who reviews the AI?**

**After release, if a metric gets worse, how long until you notice? Once you notice, who has the authority to decide on a rollback?**

If you can't answer even one of the three, a stronger model won't fix it.

## The old process was designed for people

Traditional R&D is a straight line: product raises a requirement, design produces a solution, engineers write the code, QA verifies it, ops ships it, and if something goes wrong, it gets fixed. Each stage is owned by different people, and details are aligned up front through detailed documents and round after round of meetings.

This process rests on a hidden assumption: people write code slowly, and engineering is expensive. All the reviews, scheduling and meetings exist to protect that most expensive stage.

Now the most expensive stage has become cheap, and the assumption no longer holds.

![AI compressed the build, not the two ends: the bottleneck moves to requirement alignment and review and release](/articles/images/ai-rd-rule-makers/en/compress.png)

Yet what most companies do is stuff AI into the old process and treat it as a faster engineer. The old process relies on people's experience, unspoken understanding and meetings as a safety net, and AI has none of these. A person remembers that “test files are off-limits”; AI doesn't, unless someone writes that rule down and makes it impossible to get around.

The scale doesn't match either. Review capacity was staffed for human output. When AI multiplies the volume of code, either the review queue keeps growing, or code ships without enough review.

The owner wants neither outcome.

## Turn the straight line into a loop

On how to set rules for AI, [The AI-native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook) that Anthropic published in August 2026 offers a very complete reference. Most of the practices below come from that playbook; I've reorganized them around the R&D black box formula.

Its answer isn't a particular tool, but turning the straight line into a loop. Across six stages, plan, design, build, test, deploy and maintain, each stage commits an artifact to git: intent.md, spec.md, plan.md, the code diff, the PR review verdict, the incident record. Each stage reads the previous stage's artifact and carries on from there.

Together, this chain of artifacts is a complete audit trail. Every artifact is a rule written down.

![From a straight line to a loop: each of six stages hands off an artifact, with people above the loop](/articles/images/ai-rd-rule-makers/en/loop.png)

Below, I'll take the formula's three factors one at a time.

## Factor one: requirement clarity

An Agent's results and limits are both a black box; you don't know whether it works until you try. Write the requirement vaguely, and it will get it wrong quickly and confidently.

So before AI writes its first line of code, the playbook puts three documents in place.

![Three documents before the first line of code: intent, spec, plan and who approves each](/articles/images/ai-rd-rule-makers/en/three-docs.png)

**intent.md: turn an idea into an intent that can be approved.** It isn't a traditional PRD (product requirements document), and it doesn't need formal requirements language. Product managers, operations staff, even interns can talk to AI in plain language. AI asks follow-up questions: what problem does this solve, who is affected, where are the boundaries, how is success defined, what are the constraints. It then organizes the answers into a structured document, which the product owner approves.

In the past, an idea first had to convince product to take it on as a project, then wait for a product manager to write a requirements document from scratch, and many good ideas died in that wait. Now AI helps write it, and the owner only needs to review it. The bar for proposing an idea has dropped; the seriousness of approval hasn't.

**spec.md: compress requirements and design into one step.** Once the intent is approved, AI reads it and, combining it with the brand, security, compliance and UX standards the team has set in advance, generates a design spec. When it hits a conflict, it flags it and hands it to the named owner of that standard, to be resolved before an engineer ever sees it. The approver is still the product owner; for higher-risk work, the tech lead reviews it too.

**plan.md: write “how to do it” until nothing is ambiguous.** Many teams skip this step: the moment the requirement is clear, they start writing code. But when you build a house, you have to work out first whether the foundation or the walls come first. The plan should spell out which files change, in what order, which tests will prove the change is right, and what the risks are. The reviewer is an engineer, whose job is to keep pressing: have the impacts been considered? Is the order right? Has any risk been missed? The plan keeps being revised until AI can implement it on its own.

The point of the three documents is to move the cost of rework from changing code to changing documents.

The playbook also offers a very useful check: if plan.md has already been committed but spec.md keeps being edited, the requirement is being reworked. That number is far more honest than “how many rounds of requirements review we held.”

## Factor two: delivery evidence

The biggest problem with AI-written code isn't that it's badly written; it's that nobody can say whether things got better or worse.

Here the playbook puts four layers in place.

**Layer one: rules at three levels.** CLAUDE.md sits in the repository root and holds coding standards, architectural conventions and the mistakes AI commonly makes; AI reads it first every time it starts work. The playbook recommends keeping it under a page, and adding a line every time AI repeats the same mistake. This knowledge used to live in senior employees' heads; now it becomes a file that can be handed over.

Skills capture experience such as API security, brand standards and compliance requirements, and AI loads them automatically when needed. But Skills are a soft constraint; they can't guarantee 100% compliance.

What must never be violated goes to hooks. For example: block edits to auto-generated files, run format checks automatically after every edit, keep secrets out of the code, and forbid changes to test files while fixing a bug. If the conditions are met, it passes; if not, it's blocked. No negotiation.

![Rules at three levels: CLAUDE.md for project conventions, Skills as soft constraints, hooks as hard guardrails](/articles/images/ai-rd-rule-makers/en/rules.png)

**Layer two: AI checks its own work.** Before reporting “done,” AI must run the tests and the build itself, and for interface work, compare screenshots too. To fix a bug, first write a test that fails, then have AI change the code. You can also set up a verification sub-Agent that checks the main Agent's results with a fresh context, so the work isn't reviewing itself.

**Layer three: regression-test the AI's configuration.** Collect 20 to 50 tasks your team has actually done, turn them into an eval set, and hook it into CI. Whenever CLAUDE.md, a Skill or a hook changes, it runs automatically; if the pass rate drops, the change can't be merged.

We used to regression-test code; now we have to regression-test the AI's configuration. Changing one line of a prompt or switching model versions can quietly make performance worse. Most teams aren't even aware of this yet.

![Regression-test the AI's configuration: rule changes automatically run the evals, and anything below the baseline is blocked](/articles/images/ai-rd-rule-makers/en/evals.png)

**Layer four: divide up the review.** The team writes a REVIEW.md that specifies what review covers, such as defects, security and compliance, and how issues are graded. AI reviews every PR against it, but AI can't approve code it wrote itself. With the mechanical checks already done, a human reviewer looks at only two things: is the intent right, and is the risk acceptable?

## Factor three: handover readiness

Handover-ready means that at any moment, a person can understand it, stop it and take it back.

**Parallel work has a ceiling.** The playbook suggests engineers run several sessions at once, each working in its own git worktree without getting in the others' way. But the ceiling it sets is plain: run as many as one person can review.

That points to the real ceiling of AI R&D: **it isn't how many Agents you can run; it's how much people can accept.**

**Release by environment.** In development, Agents can deploy freely; in staging, they get limited freedom; in production, a release owner must authorize. Companies can also block AI at the system level from reading secret files and restrict its network access. The playbook makes a special point: the rollback path is the one to rehearse most often.

![Release by environment, with graded authority: development, staging, production, plus PR review, system restrictions and rollback](/articles/images/ai-rd-rule-makers/en/deploy-tiers.png)

**Leave maintenance to deterministic scripts.** Key production metrics are watched by deterministic scripts, not by AI; monitoring can't be handed to a black box. The model is called only when a metric crosses a threshold: minor deviations are just logged, clear deviations get a read-only diagnosis from AI, and only severe deviations let AI propose a fix.

AI's diagnosis is written up as a new intent.md, which goes back to the start and runs through the full process again. Once it's fixed, the incident becomes one more entry in the eval set, so the same problem is caught automatically next time.

That's the loop: it starts with an intent, and its end produces a new intent.

![Scripts watch, people judge: AI is called by severity of deviation, and anomalies go back to intent](/articles/images/ai-rd-rule-makers/en/monitor.png)

## This isn't a tool tutorial; it's a management system

Many people will read all of the above as a user guide for AI coding tools. Quite the opposite: what it's really about is rewriting how R&D divides its work.

For the past decade, the management logic of the software industry was managing people. Every process was designed around “people are the ones executing.”

The new division of work is:

- the product owner goes from long rounds of polishing requirements to quickly approving intents AI has written;
- the tech lead goes from reading code line by line to checking intent and risk in the PR;
- engineers go from writing it themselves to orchestrating multiple sessions and sub-Agents;
- the security team goes from reviewing after the fact to writing rules into Skills and hooks;
- whoever is on call goes from firefighting to triage and approval.

One point the playbook keeps coming back to: for any decision that requires judgment, responsibility still sits with people.

> People write the rules; AI executes. People set the standards; AI verifies. People approve the artifacts.
>
> People go from the ones doing the work to the ones who set the rules and accept the results.

For an individual developer there's no collaboration problem, but it's still worth learning to use document handoffs to keep your own development process in check. For a company, this is a switch in how it manages, not a tool purchase.

## How to spend the first 30 days

The playbook gives a recommended order for rolling this out: intent first, then CLAUDE.md and Skills, then plan mode, then the self-check loop, then PR review, then hooks and CI, and only last, automated maintenance.

I suggest following that order over four weeks.

**Week 1:** Pick a real requirement and write the intent and spec first, approved by the product owner; AI doesn't write code before approval. At the same time, set a single source of truth for each type of document: in the repository or in the requirements system, pick one, and the other only holds links.

**Week 2:** Write a CLAUDE.md under one page; turn the two or three standards your team gets reminded of most into Skills; use plan mode to produce the plan, and have an engineer review it until nothing is ambiguous before work starts.

**Week 3:** Define “done” as a command you can run, such as one command that runs the tests and the build; write a failing test first for every bug fix; turn the rules that must never be broken into hooks; collect 20 real tasks into an eval set and hook it into CI.

**Week 4:** Write REVIEW.md, let AI review PRs first, and have people review only intent and risk; add an authorization gate to production deployment, and rehearse one rollback.

![Roadmap for the first 30 days: requirements, rules, evidence, gates, with automated maintenance after day 30](/articles/images/ai-rd-rule-makers/en/30-days.png)

Leave automated maintenance until after the first 30 days. Letting AI find and fix production issues on its own before the earlier stages work just drives the black box into production.

## What counts as done

“It's built” isn't done. At the end of every requirement, you should be able to produce an evidence pack like this:

- intent and spec: approved, with the approver named;
- plan: pressed by an engineer, risks written down, merged code consistent with the plan;
- code and tests: tests, build and evals pass, with a pass rate no lower than the baseline;
- review: reviewed by AI, approved by the code owner, no unresolved blockers;
- release: who authorized it, when it shipped, what the rollback plan is;
- sign-off: a named person confirms the result and records the remaining risks.

Every item has to map to a specific person. AI produces the artifacts; people set the standards, approve the artifacts and authorize releases.

Whether this process is working isn't measured by how many lines of code AI wrote, either. The metrics the playbook gives are more reliable: the first-run CI pass rate of AI-written changes, review time per PR, the change failure rate after release, and whether the same kind of incident happens again.

## What I don't do

I don't promise a fixed efficiency multiple. I don't do a full rewrite without research first. I don't buy a platform first and then look for use cases. And I don't treat bringing in AI as the same thing as layoffs; organizational changes in R&D have to rest on the facts of tasks, quality and delivery.

If your team needs someone alongside to fill in these three factors one by one, AI-native R&D transformation is one of the paths [CAIO Office](https://kellychan.im/ai/en/caio/) offers: an outside Chief AI Officer team that works with you month by month.

At my former company I served as CTO and also ran the PMO (project management office), coordinating departments across the whole company and breaking the digital transformation of a 30,000-person retail organization into tasks. So when I look at AI problems in R&D, I look at requirements, acceptance and delivery accountability together, not just the model itself.

**The stronger AI gets, the more it needs someone to set its rules.**

**Management is only real once the rules are in the repository.**

If your team already uses AI to write code, come to me with one real requirement, your current CLAUDE.md or acceptance criteria, or a time AI broke something. We'll start by finding which stage is missing its rules.

Further reading: [The next bottleneck in AI R&D isn't building the work. It's accepting it.](/articles/en/ai-rd-next-bottleneck-acceptance.html)
