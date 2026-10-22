---
layout: article
lang: en
title: What enterprise AI lacks isn't tools. It's someone who forces the results.
subtitle: From CAIO Office to FDE, why enterprise AI keeps stalling at the last mile
description: You bought the models, ran the training, even watched the demos, and the business hasn't changed at all. The problem usually isn't the tools; it's that nobody ties goals, execution and acceptance together. This piece explains what that person actually does, and how the first 30 days go.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-09-02
translation: /articles/enterprise-ai-needs-caio-and-fde.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

Recently, a business owner asked me a very typical question:

> We've already bought AI tools, our staff have taken the courses, and the tech team has even started writing code with AI. So why hasn't the business visibly changed?

I didn't start by asking which model they used, or how many seats they'd bought.

I asked three questions:

**First, what is the single problem in the company most worth solving with AI today?**

**Second, who is responsible for moving it forward this week?**

**Third, once it's done, who accepts it, and by what standard?**

Without answers to these three, even the strongest model stays stuck in the demo.

This is the bind many companies are in right now:

**Leadership knows AI matters, and staff have started using the tools, but between strategy and results, a layer is missing.**

I call it **the AI deployment gap.**

Why does it break?

I put it as a very simple formula:

> **AI results = Use-case choice × Owner × Acceptance criteria**

Note that it's multiplication, not addition.

That means if any one of the three is 0, the result is 0, no matter how big the other two are.

Buy the strongest model but pick the wrong use case, and the result is 0.

Pick the right use case but have nobody own it, and the result is still 0.

Have an owner but nobody who can say what counts as done, and the result is 0 all the same.

So for most companies, the problem isn't “not investing enough in AI.”

**Quite the opposite: precisely because they invest so much, they're more likely to keep doubling down on a factor that's already 0.**

Tools are the easiest of the three to scale up, and the only one nobody is short of.

## 1. What companies lack isn't AI tools but a new operating model

Companies today aren't short of AI.

Models keep getting stronger, tools keep multiplying, and prices keep falling. Copywriting, images, data analysis, code generation: almost every department can find dozens of tools.

But more tools don't mean more results.

Because every company runs on three languages at once:

- the boss speaks the language of the business: growth, cost, efficiency, risk;
- the tech team speaks the language of systems: models, APIs, data, architecture;
- frontline staff speak the language of tasks: what exactly to do today, and what counts as done.

Most AI projects fail not because the model isn't strong enough, but because these three languages never get translated into one plan of action.

The boss says, “We're going all in on AI.”

The tech team hears, “Buy another platform.”

The business team hears, “Use ChatGPT more when writing documents.”

Three months later, the seats are bought, the training is done, and the demos have been shown.

But the business processes haven't changed, no data has built up, no owner has emerged, and the results can't be accepted.

**Deploying AI isn't a software purchase. It's an upgrade to how the business runs.**

It has to answer at least five things:

1. Which business problem do we solve first?
2. Who is responsible for that problem?
3. What does the person do, and what does AI do?
4. What evidence proves it worked?
5. Once it works, how does it become a reusable capability for the whole company?

Tools can't answer these five questions on their own.

They're really the formula unpacked: the first two decide the **use-case choice**, the third decides the **owner**, and the last two decide the **acceptance criteria**.

## 2. Deploying AI in a company takes two completely different capabilities

I believe that to truly bring AI into the business, a company needs at least two roles: **a CAIO Lead and an FDE.**

### 1. CAIO Lead: decide what to do, and get the organization actually moving

CAIO stands for Chief AI Officer, the person in charge of AI for the company.

But this is the role people most often misunderstand.

A CAIO isn't someone who studies models, nor someone who buys AI software.

A CAIO who's actually useful stands in the operator's shoes and keeps doing four things:

- find, among the company's goals, the problems most worth bringing AI to;
- break each problem into tasks with an owner, a deadline and a definition of done;
- get business, product, engineering, QA and operations executing together;
- accept the work against real results, and decide what's next: continue, adjust or stop.

So when I come into a company through CAIO Office (an outside Chief AI Officer team that works with you month by month), I don't just hand in a proposal.

I serve as CAIO Lead, embedded in the leadership and the team on an ongoing basis, and I'm responsible for priorities, pace and closing the acceptance loop.

The way I work is more like having already joined the company: a weekly check-up, set this week's top priority, break down tasks, assign owners, lead the execution, then accept the work and review it.

A consultant usually tells you “what you should do.”

A CAIO has to keep pressing:

**Who does it? When will it be done? What gets delivered? How is it accepted?**

### 2. FDE: go on site and actually get one specific use case done

Having a direction isn't enough.

Enterprise AI projects often stall at the last mile: data sits in different systems, processes aren't documented, nobody owns the APIs, and the demo looks great but runs into problems everywhere the moment it hits production.

That's when you need an FDE, a Forward Deployed Engineer: an engineer deployed to the front line.

An FDE isn't an outsourced team sitting outside waiting for requirements.

They go into the business on site and work with the client's team to:

- map out processes, data, systems and permissions;
- connect Agents and workflows to the existing systems;
- build test datasets and acceptance metrics;
- handle exceptions, security and go-live issues in the real environment;
- finally hand the documentation, methods and systems back to the client's team.

The CAIO is responsible for “why we do it, what we do first, how we organize it.”

The FDE is responsible for “how we build it, how we prove it, how we hand it over.”

Put the two together, and AI goes from a single point to a complete business loop.

## 3. What does a real AI project loop look like?

When I drive AI inside a company, I compress the process into one very simple chain:

> Business goal → Business problem → This week's task → People and AI execute → Evidence → Human acceptance → Assets built up

The two words most easily overlooked here are **evidence** and **acceptance**.

For example, when AI finishes a change to a software feature, it can't just say “it's done.”

At the very least it has to account for:

- what the original problem was;
- what the root cause was;
- what was changed;
- which automated tests were run;
- whether there are screenshots or a screen recording;
- what risks remain;
- who finally approved the release.

Customer service, sales, finance and operations are no different.

Whether a piece of AI output can enter the real business doesn't depend on whether it looks like an answer. It depends on:

**whether it has a source, whether it can be reviewed, and whether you can find who's responsible when something goes wrong.**

So the key to enterprise AI has never been just “automatic generation.”

What matters more is: **traceable, reviewable, reusable.**

## 4. If I came into your company, what would the first 30 days look like?

I wouldn't open with “AI everything.”

The bigger the project, the more easily the slogan runs ahead of the results.

I usually go in four steps.

### Step one: look at the business first, not the tools

Start by asking leadership and the frontline team:

- What gets repeated the most every week?
- Which step is the slowest and the most error-prone?
- Which problem, once solved, would customers or leadership feel right away?
- Who is responsible for it now, where is the data, and how are results judged?

The goal of this step isn't to list a hundred AI use cases.

It's to find one use case that's genuinely worth doing.

### Step two: use four conditions to pick the first pilot

A good first use case usually meets four conditions:

1. it happens often;
2. its inputs and outputs are relatively clear;
3. the data can be obtained;
4. the result can be accepted by a person.

It could be classifying customer service issues, sales follow-ups, financial reconciliation or recovering product documentation; it could also be making R&D tasks and their acceptance transparent.

What matters most isn't how advanced the use case sounds.

It's whether it can close the loop within a fairly small scope.

### Step three: build just one minimal loop

Don't transform the whole company first.

Don't rewrite every system first.

Don't connect all the data first.

First, get one real task to go from input to output, and then on to human acceptance.

Once that loop runs, the company has its own real-world AI case for the first time.

From there, it gradually becomes clear which steps are worth automating, which data needs governance, and who can become an AI Champion.

### Step four: turn the results into organizational assets

A successful demo is not an asset.

Only a process that can be run again and again is an asset.

So every approach that works should be built up further into:

- reusable Agent Skills;
- knowledge and data with permissions and versions;
- clear task templates and acceptance criteria;
- operating documents the team can take over;
- business dashboards leadership can keep watching.

Once these start to accumulate, the company is no longer “using a few AI tools”; it has truly built its own AI capability.

## 5. The three most common pitfalls in enterprise AI

### Pitfall one: buy the platform first, find the problem later

A platform provides capabilities, but it can't decide priorities for the company.

If the business problem isn't clearly defined, even the most complete platform is just one more system to maintain.

### Pitfall two: transform the whole company from day one

The uncertainty in an AI project comes from data, processes, people and systems, not just from the technology.

Launch too many use cases at once, and every one of them ends up short of an owner, short of data and short of acceptance.

The right order is: **get one use case working, then replicate it.**

### Pitfall three: making “how many fewer people we need” the only goal

AI will indeed change jobs and organizations. But if a project starts from a layoff target, what the team learns first usually isn't how to use AI; it's how to hide problems and resist transparency.

More reliable goals are:

- has the delivery cycle gotten shorter;
- have errors and rework gone down;
- can leadership see risks earlier;
- can the team handle tasks it couldn't before;
- has what works been captured and kept.

Get these results first, and the organizational choices will naturally become clearer.

## 6. What exactly do I offer?

Every company gets stuck in a different place, so they shouldn't all be sold the same package.

**If you haven't figured out what to do yet:**

Start with business planning and solution consulting. First get clear on the target users, business value, product form, technical path and how to validate it, then decide whether to implement.

**If leadership gets it but the team doesn't share the understanding yet:**

Start with an introductory session, a hands-on course or a custom in-house workshop, so the team completes one real exercise with their own hands.

**If the team is already experimenting with AI but nobody leads it consistently:**

Bring in CAIO Office, with Kelly as CAIO Lead, embedded on an ongoing basis to align priorities, tasks, owners and acceptance.

**If you already have a clear use case and need to actually connect it to your systems:**

An FDE, Vibe Coding coaching or an AI employees project moves into implementation, tying together Agents, data, workflows, testing and go-live.

**If the company already has lots of Agents and AI output, but it's scattered everywhere:**

Build an enterprise AI asset hub that brings data, knowledge bases, Agent Skills and AI Apps together in one place, governed on an ongoing basis through human review, permissions, versioning and audit.

I don't require clients to buy any particular product first.

Tools like Buda AI, Busabase, Vika, AITable and MoonRouter become part of the delivery only when they fit the current business goal.

**The service is where it starts. Business results are where it ends.**

## 7. Why me?

I've been a software engineer and founding CTO at a retail company. I went on to found Vika / AITable, one of the earliest spreadsheet-database products in China, used by Tencent, Baidu, China Southern Power Grid, Shein and miHoYo for their digital transformation, and then Buda, an enterprise-grade Agent Harness product.

I've led product, engineering and digital operations teams of more than 150 people. At that company I also ran the PMO (Project Management Office), coordinating across every department in the company, breaking the digital transformation of a 30,000-person retail business into tasks and pushing every team to deliver results. And I've built a software platform serving a million users and 15,000 organizations.

These experiences have made me more and more certain of one thing:

The hardest part of a technology project usually isn't writing the code.

What's truly hard is:

**judging what's worth doing, organizing a group of people to get it done, and then setting an acceptance standard everyone agrees on.**

AI has suddenly made execution fast.

So every problem that used to hide behind the speed of writing code is now exposed: whether requirements are clear, whether decisions are timely, whether data is trustworthy, whether responsibility is defined, whether acceptance exists at all.

That happens to be exactly what I've been doing for more than a decade:

translating business goals into products, systems, teams and results.

Now there's just an extra team: an AI one, extremely capable and extremely fast.

## Closing: enterprise AI isn't buying a tool; it's building a new way of working

If a company's goals are still passed along by word of mouth from the boss, tasks are still scattered across group chats, results still become a slide deck at month end, and experience still lives in individual heads, then even if every employee has an AI account, the company hasn't really completed its AI transformation.

The real change is this:

goals become tasks, tasks are executed by people and AI together, results can be verified, experience is captured, and next time goes faster.

That's not something a model can do on its own.

It takes management, it takes engineering, and it takes someone who stays accountable for the results.

**What enterprise AI lacks most isn't tools.**

**It's someone who truly ties goals, execution and acceptance together.**

Back to the formula from the start.

If you're thinking about deploying AI in your company, first put an answer against each of the three factors, then prepare four sentences:

1. What business result do you most want to change?
2. Which process is most worth trying first? (Use-case choice)
3. Who is the internal owner? (Owner)
4. Once it's done, who accepts it, and by what standard? (Acceptance criteria)

If you can't fill in any one of these right now, that one is your real bottleneck today, and buying another platform won't make it non-zero.

Send me those four answers, and we'll first work out what you need right now: a consultation, a workshop, CAIO Office, or an FDE deployment project.

- Full services: <https://kellychan.im/ai/en/>
- About Kelly: <https://kellychan.im/resume/>
