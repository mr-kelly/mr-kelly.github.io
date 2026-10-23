---
layout: article
lang: en
title: Why your agents won't work, and why you should stop building your company's own agent
subtitle: You've rolled out agents and added skills, yet you keep hiring and the results still don't show. The problem usually isn't too few agents; it's that your company's knowledge is locked inside each one. Here are the seven findings from two years of doing this, and three things to do when you get back.
description: You've rolled out agents and added skills, yet you keep hiring and the results still don't show. The problem usually isn't too few agents; it's that your company's knowledge is locked inside each one. Here are the seven findings from two years of doing this, and three things to do when you get back.
author: Kelly Peilin Chan
channel: Talk · AI Agent Summit Hong Kong
created_on: 2026-10-23
translation: /articles/why-your-agents-wont-work.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

This essay is adapted from my keynote at AI Agent Summit Hong Kong on 18 October 2026, “Why Your Agents Won't Work.”

For the past two years, I've done one thing: **making agents actually work inside teams and companies.**

I don't think you need me to argue whether to do AI anymore. **The question is no longer whether, but how.** I've spent two years on it, gone through several approaches, and fallen into plenty of holes. In this essay I lay those holes out, exactly as they were.

## One map

![The map: Why Your Agents Won't Work](/articles/images/why-your-agents-wont-work/en/map.webp)

In this essay, I'm going to use just one picture.

If you'd like the high-resolution version, message me on LinkedIn or X (@kellypeilinchan). By the end you'll see that everything I say here is on this map.

Here's how to read it. Top left: the five approaches I've gone through in two years. Below that: three questions people often ask. The big table in the middle is today's main act, seven findings. To the right of the table and below it: what to do about each finding. The bottom row: results, and three things you can do when you get back.

The title is **Why Your Agents Won't Work**.

The subtitle may ruffle a few feathers: **stop building your company's own agent.**

Why do I say that? Let's go block by block.

## Map block 1: two years, five approaches

![Map block 1: two years, five approaches](/articles/images/why-your-agents-wont-work/en/b1.webp)

In two years, I went through five approaches.

In 2024: chatbot plus tools, a chat assistant hooked up to a few tools.

In 2025: coding agents, running in a tmux terminal.

Early 2026: OpenClaw. It turned the personal computer into the agent's long-term memory.

Mid 2026: Agents as a Company. Give agents job titles and build an AI company. I built that version myself, and later I tore it down myself.

Now: the stateless agent. That's what today is about.

I ran every one of these inside a real company. So what follows isn't something I read; it's something I stepped in. What exactly went wrong with OpenClaw and with Agents as a Company, I'll tell you when we get to findings two and three.

## Map block 2: three questions

![Map block 2: three questions you may be asking](/articles/images/why-your-agents-wont-work/en/b2.webp)

Before we start, three questions for you.

**First: we've deployed so many agents. Why are there no results?**

It's not just you. Last August, a research project at MIT called NANDA published a report called The GenAI Divide. They interviewed 150 business leaders, surveyed 350 employees, and analyzed 300 public AI deployments.

The finding: only about 5% of pilots actually drove revenue growth. The other 95% or so had almost no measurable impact on profit.

Why? The authors say the problem isn't that the models aren't good enough. It's the “**learning gap**”: generic AI tools don't learn, and don't adapt to a company's own workflows. Remember that phrase. The context we'll talk about later is exactly what fills that gap.

**Second: isn't AI best at writing code? Then why are you still hiring engineers this year?**

There's a research group called METR that evaluates AI capabilities. Last July they ran a randomized controlled trial: 16 experienced open-source developers, 246 real tasks, in projects they had maintained for years. Each task was randomly assigned: AI allowed, or not.

The result: tasks done with AI took 19% longer. The most interesting part: before starting, they expected AI to make them 24% faster. After finishing, they still believed it had made them 20% faster.

Of course, those were early-2025 tools, and METR later said the result should be treated as history. My point isn't that AI is slow at code. It's this: **feeling faster and being faster are two different things.** One person feeling faster doesn't mean the whole team ships more. That's why so many companies use AI to write code and keep hiring at the same time.

**Third: we replaced people with AI. Then what?**

Klarna, the Swedish “buy now, pay later” company, was one of the most aggressive in replacing customer service with AI. Last May, its CEO told Bloomberg that the “AI-first” customer service strategy of the past few years was a misstep: the AI was cheaper than people, but the service got worse. Now they're hiring people again, with a promise that “there will always be a human if you want.”

We'll come back to this story when we talk about taste.

Clients have asked me these three questions, and I've asked myself.

My answer today is seven findings.

## Map block 3: seven findings

![Map block 3: seven findings, what people think vs. what I found](/articles/images/why-your-agents-wont-work/en/b3.webp)

On the left is what people think. On the right is what I found by actually running it.

You'll notice that almost every line on the right runs against intuition.

The more systems and agents you deploy, the more people you hire.

Agents shouldn't have memory. Companies should.

Don't build an org chart of AI employees.

The deeper you deploy, the fewer skills you need.

Don't try to fully automate a business.

A business you can fully automate has already lost its value.

The stronger AI gets, the more taste is worth.

These seven fall into three groups. The first is about systems. The second, third and fourth are about agents themselves. The fifth, sixth and seventh are about people.

At the far right of each row there's a small “how”, pointing to another block on the map. In other words, every finding comes with an answer, not just a complaint.

Now let's go one by one. Behind each of them is a real story.

## Finding 1: the more systems and agents, the more people you hire

Let me start with a story of my own.

At my previous company, we rolled out an ERP.

The system alone cost eight figures, in RMB.

To make it work, we brought in more than twenty people, took over an entire office to map the business, and spent a year doing it.

After go-live, every business unit still had to hire people who understood the system, and they cost more.

Add it up, and outside the system itself we spent roughly as much again.

I'm not saying that money was wasted. It helped the company grow later.

But you'll notice: **it didn't save money.**

Why? When we build software, we work hard to dig out requirements and polish every detail. But the software we build is ultimately used by people, **and people are still the bottleneck.** The more complete the system, the stronger the people it needs.

What about agents?

Earlier this year, many people believed the more agents a company had, the stronger its AI. I think that was this year's biggest misconception.

What I saw was the opposite: **more agents, more touchpoints; more touchpoints, more people needed to deal with them.** Every extra agent is one more place where a person has to connect.

That answers the opening question: why do companies keep hiring after deploying so many agents? Because they treat agents as yet another system for people to operate.

It's an old lesson. There's a classic book in software, The Mythical Man-Month. It says: adding people to a late project makes it later, because the more people there are, the more lines of communication between them. Two people, one line. Ten people, forty-five lines. Fifty people, one thousand two hundred and twenty-five.

![Map block 4: fewer, stronger agents](/articles/images/why-your-agents-wont-work/en/b4.webp)

Anyone who has run a company knows this: the more people, the higher the cost of communication and the lower the efficiency. That's why people now talk about “talent density”: instead of adding lots of average people, make each person stronger.

It's the same with agents. **I call it the agent's “intelligence density”.**

It's not “the more agents the better”. It's “the stronger each agent, and the fewer of them, the better”.

So what do you do? Two things.

First, **fewer agents, each one stronger.** If one agent can do the job, don't split it into ten.

Second, **stop building another system for people.** Let AI work directly on the company's context, and keep people for judgment. Rolling out a system used to mean a roomful of people mapping the business for a year, then hiring more people to use it. AI can do it differently: let it read the company's knowledge, rules and history directly and get the work done, while people look at the results and decide.

## Finding 2: agents shouldn't have memory; companies should

![Map block 5: Stateless Agent](/articles/images/why-your-agents-wont-work/en/b5.webp)

The second one may be the most counterintuitive thing I'll say today.

Everyone is busy adding memory to agents. I say: **agents shouldn't have memory. Companies should.**

OpenClaw was a big breakthrough this year. It truly turned the personal computer into the agent's long-term memory. If you use it alone on one computer, it's unbeatable; it remembers everything you've taught it.

But bring it into a company, put a team on it, and the problems start.

Each agent's memory lives on its own person's computer. Every memory is an island.

An example. Two people in sales, A and B, each built an agent for “replying to customer emails”. B's got better and better; A's never caught up. Whatever B's agent learned, A's agent couldn't get any of it, because their memories were separate and the knowledge couldn't be shared.

What's ideal? A and B using the same agent.

And it's precisely the agents' own memory that keeps them apart.

That's why I say agents should be stateless. **They just need to bring their intelligence.**

The company's things live in one place the company owns. I call it the context database. It holds four things:

Knowledge: documents and data.

Rules: the playbooks and skills for how work gets done.

Access: who can see what, and who can change what.

History: who changed what, and what changed.

At the company level there is just this one shared context, and every agent reads it. The agents themselves don't need memory; they just execute.

What we manage is this one company context, not what each agent happens to remember. That would be far too much work.

This brings three benefits. First, switching agents loses nothing: Claude Code, Codex, OpenClaw, or a whole new batch next year, it doesn't matter. Second, colleagues stop being islands: what B teaches, A can use right away. Third, when people leave, the knowledge stays with the company.

The engineers here will find this familiar. Internet architecture learned it long ago: services are stateless and the state lives in the database, so services can be swapped and scaled at any time.

**Enterprise AI needs to learn the same thing today: stateless agents, plus a context database.**

## Finding 3: don't build an org chart of AI employees

For the third one, I have to start by contradicting myself.

In the middle of this year I built a version called Agents as a Company: give agents job titles, build an org chart, and turn it into an AI company.

Almost everyone deploying agents instinctively copies the org charts humans already have. So did I.

But think about it: why do humans have org charts?

Because one person's abilities are limited; nobody can do everything, so we have to divide the work. There's a Chinese saying: three cobblers together beat one Zhuge Liang, the genius strategist.

And AI? AI can do everything, and it can be copied endlessly. It's as if you had a hundred million geniuses on hand.

Split them up by an org chart, and what are you doing? **You're turning a hundred million geniuses into ten average workers.**

That's exactly what we saw in the field: the more we split the agents, the worse the deployment went and the more people the company needed. As the agents passed work back and forth, the genius got diluted bit by bit, until all that was left were average workers. **We made the AI dumb ourselves.**

So how should agents be split?

My answer: **only by access**, meaning which data each one can touch.

The ideal is just two agents.

One internal. It has all of your access, a do-everything agent that everyone in the company uses.

One external. It serves customers and other people, so it must not have that much access; it can't leak anything. Your external agent can't know your company's payroll, right?

So the ideal company really has one agent. Most of the multiple agents we see today exist because the access is different, not because the jobs are.

## Finding 4: the deeper you deploy, the fewer skills you need

The fourth is another big misconception.

Once everyone has their own agent, everyone wants their own skill. For example, everyone has their own coding skill. Before long, the company has ten skills for the same job.

None of those ten skills pools everyone's strength. Same logic as before: one genius forcibly split into ten average workers, each different.

So what is a skill, really?

My definition: **a skill is, at its core, an SOP plus knowledge and standards.**

Then why should it exist on its own? Because **a skill is the starting point of an interaction between a person and AI.** It exists so a person can call it explicitly. Think of it as a button: when a person wants AI to do something a certain way, they press that button.

So the more skills there are, the more of them sit idle. The more skills, the fewer people use each one.

Picture this: say there's a genius in the company who builds a hundred skills and then leaves. Who takes over those hundred skills? Everyone has their own set, and you end up with a pile of skills nobody maintains.

That's why I say: **the deeper you deploy, the fewer skills you need.** Fewer entry points, and the knowledge goes back into the company's knowledge base. Don't let any individual's agent grow on its own. Every agent in the company is stateless and connects to the company's database and knowledge base. **Only that one copy is the company's own asset.**

I wrote up findings 3 and 4 in more detail in “[Rolling out AI to a team? Why you should start with fewer Agents and Skills](/articles/en/why-teams-should-start-with-fewer-agents-and-skills.html)”: how to work out a setup that's just enough, starting from one real task.

![Map block 6: two rules for every skill](/articles/images/why-your-agents-wont-work/en/b6.webp)

So how should skills be designed?

My principle: **design skills around taste.** First work out which tasks need a person to apply taste, to review. Only that kind of work needs a skill.

And any skill that exists must meet two rules.

First, **it's used every week.** If a skill exists, someone must be using it every week. If nobody used it this week, it doesn't need to exist.

Second, **a person must apply taste and review it.** If it's pure execution and needs no taste, automate it fully and that's the end of it.

So you'll find that the things that truly need human taste are not that many. **What's left after the filtering is the core of the company.** There's not that much that needs people to interact with it every day.

Fewer skills doesn't mean neglecting them. The few that remain, as company assets, need to be updated continually.

People matter a great deal here. How to merge ten skills into one, whose approach to keep: that's management, and it's taste. I put a lot of weight on people's taste, and on management.

## Findings 5, 6 and 7: don't let AI run loose

![Map block 7: how people step in: a daily entry point, a weekly report, a regular talk about what good means](/articles/images/why-your-agents-wont-work/en/b7.webp)

I'll take the last three together.

**Five: don't try to fully automate a business.**

Whatever we do, the end goal is to serve another customer, to make another person happy. And customers keep raising the bar.

People have to keep judging: the other person's needs have moved up again. **That judgment is taste.**

So “fully automated” is, at heart, a false proposition.

Of course, that doesn't mean don't automate. Any job can be automated, but that doesn't mean every step still needs a person's hands on it. **We need to design rules and systems so that, at the key points, people step in and judge.**

**Six: a business you can fully automate has already lost its value.**

Never let AI run loose. AI left on its own drifts to the generic, more and more mediocre.

What does “running loose” mean? You hand the work to AI, and then nobody sets the bar and nobody checks the results.

Remember Klarna from the beginning? The AI was cheaper than people, but service got worse, and in the end they brought people back.

**Seven: the stronger AI gets, the more taste is worth.**

Companies have always worked this way. Even if you hire a genius, if the boss doesn't set a higher bar, doesn't connect them with higher goals, values and culture, they'll turn generic too. AI is the same.

So how exactly do people step in? You can't watch every step.

My approach is three things: **one entry point every day, one report every week, and a regular talk about what good means.**

First, a daily entry point. At the key step, set up an interactive skill as the entry point, and actively have people reply to it and act on it every day. Hand that skill to someone with high standards and good taste, and iterate it at least once a week, so it keeps evolving.

Second, a weekly report. I call this **report-first**.

**Automation doesn't end when the result is delivered. It ends with a daily, weekly or monthly report that comes with recommended actions.** That's where automation really pays off.

It's a bit like managing a team in a real company. As the manager, you don't need to judge every detail. You keep reviewing through daily and weekly reports: approve what should be done, stop what shouldn't.

Take an e-commerce SEO example.

This agent looks at traffic every day, points out which keywords could be optimized, and hands in a daily report:

“Boss, here's yesterday's traffic, and here's today's. I suggest we write for this keyword today; what do you think? Also, these keywords need adjusting.”

It will also warn you that the goal may be off: the traffic came in, but it isn't targeted; it has nothing to do with your products, and traffic like that is useless.

You see, there's a person stepping in and applying taste at every point. The difference is that the person no longer operates; they judge.

Third, a regular talk about what good means. In the past, people mostly discussed how to combine AI with the business. But what's the hardest part? Deciding what's good and what isn't. That needs people to sit down together; we call it a “what is good” session.

And you'll find you need to keep bringing in outside perspectives. Colleagues inside have their own positions and can't always speak freely. So you collect feedback widely from outside. **That's how taste is cultivated, bit by bit.**

**People as operators are the bottleneck; people as judges are the moat.**

## Map block 8: results

![Map block 8: results, people move from operating to judging](/articles/images/why-your-agents-wont-work/en/b8.webp)

After all that, what are the results? Three cases, and I won't name the clients.

The first, a gaming tech company, one month in. They had planned to hire 50 to 100 engineers. Now they've stopped that hiring and plan to move 20% of their people into new roles. That's finding one: with agents done right, you don't need to hire people just to operate the systems.

The second, three months in. People moved into new roles, and the company opened more business lines.

The third, an e-commerce company, the SEO example from earlier. First they dropped an agency fee of tens of thousands of RMB a month, and one person now owns the work. What that person does every day is read the agent's daily report and make the calls.

In all three, people moved from operating to judging.

Back to the opening question: why are you still hiring? Because you treated agents as yet another system for people to operate.

## Map block 9: do this when you get back

![Map block 9: do this on Monday](/articles/images/why-your-agents-wont-work/en/b9.webp)

Finally, three things you can do when you get back.

One: list the agents you've built and ask: if we swapped in Claude Code or Codex tomorrow, would the work carry on? If not, your company's knowledge is locked inside the agent. This really tests one thing: is your knowledge kept in the agent, or in the company?

Two: count your skills. Move the company knowledge hard-coded in them back into the context. Then run them through the two rules: is this skill used every week? Does it need human taste? If it meets neither, delete it or automate it fully.

Three: in every workflow, point to “the moment a person signs off”. If you can't, don't put it into production. That moment is where a person judges. If you can point to it, your AI has someone keeping watch; if you can't, you've let it run loose.

Let me close today with a few lines.

Systems and agents: more isn't better; intelligence density is what matters.

Agents don't carry memory; companies do.

Split agents by access, not by job title.

The fewer skills the better; the ones that remain are the company's core.

Don't fully automate; leave the judgment at the key points to people.

And one last line:

**Don't build software for people. Don't build agents. Give AI the context; keep the taste for people.**

![The map: Why Your Agents Won't Work](/articles/images/why-your-agents-wont-work/en/map.webp)

## Busabase: a video and a one-pager

![Map 2: the Busabase one-pager](/articles/images/why-your-agents-wont-work/en/map-2.webp)

Finally, a word on what we're building ourselves.

The context database I've been talking about, we've turned into a product called Busabase. You can start with the three-minute launch video: [Introducing Busabase | The Base for Agents](https://www.youtube.com/watch?v=7qNWnU4hfMk).

Busabase is a database and workspace for AI agents: tables, docs, skills and apps in one place. It's open source under the MIT license; you can run it locally, deploy it on your company's intranet, or use our cloud. The Claude Code or Codex you already use can plug straight in. We're not building yet another agent; we're building the one company context that every agent shares.

These are the 12 areas and 72 scenarios we've mapped out.

Several of today's ideas already exist in Busabase:

Memory belongs to the company: every agent reads and writes the same space.

Split only by access: four access levels, Read, Can propose changes, Can write, Manage.

Fewer skills: skills live in the company's space and everyone uses the same copy; when the person who wrote a skill leaves, the skill stays.

People judge: an agent's change first becomes a change request, and it only counts once a person approves it.

Report-first: daily and weekly reports go into tables and docs, with one place to read and one place to approve.

## Stay in touch

![Map 2, block 4: stay in touch](/articles/images/why-your-agents-wont-work/en/map-2-b4.webp)

You can find me on [LinkedIn](https://www.linkedin.com/in/kellypeilinchan/) and [X](https://x.com/kellypeilinchan) as @kellypeilinchan, and on [GitHub](https://github.com/mr-kelly) as @mr-kelly. Message me there for the high-resolution map.

And tell us the one to three jobs you'd most like to hand to AI; we'll build them for you with Busabase.

## Questions people often ask

1. **You say don't build agents, but aren't you building an AI product too?**
   What we build isn't an agent; it's the one company context that every agent shares. Use whichever agent you like.
2. **An internal do-everything agent has a lot of access. Is that safe?**
   That's why its changes start as proposals and only count once a person approves them, and the external agent gets the least access. Access is split by data, not by job title.
3. **Isn't multi-agent the trend?**
   Splitting off a few agents by access is fine. Splitting them by job title turns geniuses into average workers.
4. **If fewer skills is better, what about all the skills in the community and in courses?**
   For introducing scenarios and learning methods, lots of skills is fine. Once you deploy inside one company, narrow the entry points and put the knowledge back into the company's knowledge base.
5. **If you can't fully automate, how many people does AI actually save?**
   Look at the three cases: hiring stopped, people moved into new roles, one person replacing an agency. What's saved is operating, not judging.
6. **If agents have no memory, do you have to teach them from scratch every time?**
   No. Every time, they read that one company context. Teach it once and every agent and every colleague benefits; teach it on one person's computer and only that person benefits.
7. **What's the difference between Busabase open source and Cloud?**
   The open-source edition is single-user, good for trying it yourself; team collaboration, access control and approvals are in Cloud.
8. **Hasn't that MIT 95% figure been widely questioned?**
   Yes. What it measures is whether pilots had a measurable impact on profit, not whether AI is useless, and not that 95% of projects failed. I cite it because of the reason the authors give: the learning gap, tools that don't adapt to a company's workflows. That's the same thing as the context I'm talking about today.
9. **METR only had 16 people. What does that prove?**
   The sample is small, the tools were from early 2025, and METR itself later said the result should be treated as history. My point is just this: feeling faster isn't being faster, and an individual getting faster doesn't mean the team ships more.
