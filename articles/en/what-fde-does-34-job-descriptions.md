---
layout: article
lang: en
title: What does an FDE actually do all day? I took apart 34 real job descriptions from Beijing, Shanghai, Guangzhou and Shenzhen
subtitle: You might think an FDE just deploys models, but 34 real job descriptions show that 94% start by finding the business problem and 91% also build things themselves. Why does this role look like a mix of presales, product, engineering and implementation? This piece is about what companies really want this person to own.
description: You might think an FDE just deploys models, but 34 real job descriptions show that 94% start by finding the business problem and 91% also build things themselves. Why does this role look like a mix of presales, product, engineering and implementation? This piece is about what companies really want this person to own.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-09-15
translation: /articles/what-fde-does-34-job-descriptions.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

Going by the name alone, I'd also assume an FDE is the engineer who installs models on servers.

After all, the full name is Forward Deployed Engineer. In China, some translate it as “frontier deployment engineer,” others as “front-line deployment engineer.”

“Deployment” sounds very technical: setting up environments, configuring machines, wiring up interfaces, fixing failures.

But I opened 60 FDE job postings from Beijing, Shanghai, Guangzhou and Shenzhen on BOSS Zhipin (a major Chinese recruiting app) one by one, and ended up with 34 job descriptions (JDs) that could still be read in full. What I found was nothing like that.

In the morning, this person might be at a client's office pressing for details on a business process. At noon, they break a vague request down into tasks. In the afternoon, they start building an Agent, connecting data and changing code. Close to launch, they're doing testing, training and acceptance. And when the project is done, they still can't just leave: they have to see whether the client actually uses it, whether results actually change, and whether the approach can be copied to the next use case.

If you're the boss, why would you want to pile this much into one role?

Is an FDE an engineer, a product manager, an implementation consultant, or presales?

What do they actually do every day? And when you roll out AI, do you actually need someone like this?

These 34 JDs give an answer that's more interesting than the job title.

## Finding one: the thing FDEs do most isn't deployment

Start with the responsibilities that came up most often in this research.

| Responsibility signal | JDs mentioning it | Share of 34 |
| --- | ---: | ---: |
| Requirements discovery | 32 | 94% |
| Agent / RAG | 32 | 94% |
| Hands-on development | 31 | 91% |
| Training and knowledge capture | 31 | 91% |
| Go-live delivery | 30 | 88% |
| On site with the client | 29 | 85% |
| Prototype / POC | 26 | 76% |
| Value realization | 25 | 74% |
| Solution design | 24 | 71% |
| Presales and commercial | 21 | 62% |
| System integration | 18 | 53% |

I went over this table several times. What jumped out wasn't any technical term, but three very plain actions: **find the problem, build it yourself, hand over the result.**

94% of the roles require the FDE to understand business needs first, 91% require them to be able to build or modify the solution themselves, and 88% make them responsible for go-live delivery.

But look further down, and only 53% explicitly mention system integration.

In other words, an FDE isn't a “deployment engineer” in the traditional sense. Some roles really do deal with private deployment, interfaces, permissions and runtime environments; but more companies first want someone who can walk into the business and turn a fuzzy problem into an application that runs.

If you've already bought the tools, run the training, maybe even built a few demos, and the business still hasn't changed much, you've most likely hit this problem too.

I call it **the AI deployment gap**: the boss knows AI matters, employees have started using the tools, but between the idea and the business result there's no complete chain of responsibility.

I've always understood this with a simple formula:

> **AI results = Use-case choice × Owner × Acceptance criteria**

So many companies aren't short of engineers who can use AI.

**Quite the opposite: what they're missing is someone willing to start from the problem, build it all the way through, and then prove it with results.**

If you're the boss, you can use this formula to ask your team three questions.

Is the use case we picked really the one most worth solving right now?

Is there one person willing to follow it from start to finish?

When it's done, who can say clearly whether it actually works?

Pick the wrong use case, and no matter how fast you build, it's worth nothing.

Pick the right one, but with no one following it end to end, and the project dies in the handoffs.

Have an owner but no acceptance criteria, and all you're left with is a demo that looks good.

The FDE role exists to fill in that broken chain of responsibility.

## Finding two: there's no such thing as a “standard day” for an FDE

Ask what an ordinary role does every day, and you'll usually get a fairly stable answer.

But an FDE's day changes completely with the stage of the project.

This research didn't record anyone's actual time sheets, so I don't want to force out an hour-by-hour schedule that looks scientific but is pure guesswork.

The closer-to-true version is this: FDEs typically go through three completely different kinds of workday.

### Type one: the client discovery day

In the morning, they might meet with a business owner, but not to sit there and hear “we want to build a smart customer service bot.”

They keep pressing:

- What questions do customers ask over and over every day?
- Where do the answers live right now?
- Which questions can AI answer directly, and which must go to a human?
- What's the business consequence of one wrong answer?
- Who decides whether the first version is ready to use?

After asking, they still have to walk through the real process with front-line staff, checking documents, spreadsheets, chat logs, system permissions and data definitions.

At the end of the day, not much code seems to have been written, but the things that really matter have come out: what the problem actually is, how it's done now, why it's worth changing, and where the first step stops.

If the problem isn't the right one, the faster you build afterward, the faster you waste. This day is really deciding the first factor in the formula: **use-case choice.**

### Type two: the prototype build day

Once the requirements have narrowed down, the FDE has to turn the discussion into something people can operate, right away.

It might be a knowledge assistant that answers questions about company materials, a workflow that automatically sorts sales leads, or a small app that strings several existing systems together.

This is where technical terms like Agent, RAG and API show up.

In plain language: an Agent is AI that can carry out a series of tasks toward a goal; RAG makes the AI look up the company's own materials before answering; an API is the interface that lets different software pass data to each other.

An FDE doesn't necessarily have to train a large model from scratch, but they can't just talk concepts. They have to piece together existing models, company data, business rules and software systems, and first build something that actually works.

They also have to test it with failure cases on purpose, instead of demoing only the prettiest examples.

Only at this point does someone truly catch the work. This day corresponds to the second factor in the formula: **whether there's someone truly responsible.**

### Type three: the go-live and acceptance day

Before launch, the job changes again.

Are account permissions set correctly? Can it read the real data? When something goes wrong, will it leak information that shouldn't appear? If the old system has a problem, can you roll back? Do front-line staff know how to use it?

None of these can be solved with a prompt.

The FDE works with the client's business, technical, data and security teams on joint testing, prepares training, handles issues, writes up operating documentation, and then has the designated person sign off on the result.

If the project involves overnight releases, on-call duty for incidents, or on-site requirements, that also usually happens at this stage. Whether they need to respond, how the rotation works and what the compensation is must be made clear before someone joins or a partnership starts. You can't describe the high-pressure days as every day, and you can't assume no FDE faces launch pressure.

Even after all this, it's not over. In the end, someone still has to say clearly: does this thing actually work, and who's willing to sign off on launching it?

That's the third factor in the formula: **acceptance criteria.**

So an FDE's routine isn't a little meeting, a little coding and a little implementation spread evenly across each day.

**Whatever stage the project is in, they stand where the result is most likely to break.**

## Finding three: same title, so why does it look like four different jobs?

I originally wanted to find one unified answer in the 34 JDs. The further I read, the more I realized that the three letters “FDE” might be covering four different jobs.

There are at least four clearly different kinds of FDE.

### 1. Commercial / presales

This kind of FDE often meets clients together with sales and channel partners, quickly identifies high-value use cases, then builds a demo or POC.

A POC is a proof of concept: first build a small but real version to prove the direction works, then decide whether to commit to the bigger cost of a full implementation.

What these roles really care about is whether the deal can move forward, whether the client is willing to buy, and whether a successful solution can be reused for the next client.

The risk is just as clear: if they hand it off to someone else once the deal closes and are no longer responsible for go-live, it easily becomes demo-only presales under a new name.

### 2. AI application builder

These roles make heavy use of Agents, knowledge bases, workflows and AI coding tools to turn a business process into an application quickly.

They don't necessarily require deep research into underlying algorithms, but you have to be able to write, modify and debug, and in the end produce something business staff can actually operate.

The risk is someone who can only tweak a few prompts: the demo looks smart, and the moment the real data changes, it breaks.

### 3. Integration and delivery

This kind of FDE is closer to the “deployment” many people imagine: wiring up APIs, opening permissions, handling data, configuring private environments, joint testing, testing, go-live and troubleshooting.

For these roles, getting the software installed is just the start. Only when the system runs stably and the client is willing to sign for it has the job really been done.

The risk is that projects get heavier and heavier until it becomes a traditional implementation team, focused only on hitting deadlines and never bringing the problems from the client site back to the product.

### 4. Industry solutions

Healthcare, manufacturing, finance, education, retail and other industries all have a great deal of knowledge hidden in processes and experience.

This kind of FDE isn't necessarily the most technical person, but they have to pick up the industry's language quickly and translate it into data, permissions, rules and applications.

The risk is someone who knows the industry but can't build, or knows the technology but can't understand what's happening on site. Both sides talk up a storm, and in the end no one gets the thing done.

None of these four is the more “authentic” FDE. If you're hiring, what you really need to spell out is: what problems this person mainly faces, where their responsibility ends, and who else is behind them doing the work alongside.

Otherwise, someone might think they're applying to be an AI engineer, and find after joining that the main task is accompanying sales to client meetings; or think they'll be building lightweight apps, and end up spending most of the year on client sites dealing with integration problems.

## If you're hiring, how do you tell whether it's a real FDE?

I usually don't look at the job title first. I ask three very direct questions.

**First, will they go to where the real business happens?**

Not receiving a requirement that's already been written, but engaging with business staff, processes, data and constraints, and judging whether the problem is real and worth solving.

**Second, will they build the thing themselves?**

Not just writing slide decks, and not just forwarding problems to engineering, but being able to build prototypes, change code, configure workflows and connect data, and at least get the critical path running.

**Third, will they stay through and past go-live?**

Not leaving when the demo ends, but continuing to handle testing, adoption, risk, acceptance and the retrospective.

If the answer to any one of these three is no, the nature of the role may already have changed:

- responsible only for servers and inference performance: closer to a model deployment or infrastructure engineer;
- responsible only for solutions and demos: closer to solutions presales;
- responsible only for configuration, training and launching on schedule: closer to traditional implementation;
- responsible only for adoption rates and renewals: closer to customer success.

These roles all matter. You just can't assume the work is the same because the title has “FDE” in it.

**FDE isn't a trendy title; it's a complete chain of responsibility.**

## You might ask: isn't this just cramming five people's work into one?

Honestly, some JDs really do read like a wish list.

Understand the business and write code; go to client meetings with sales and own go-live; ideally also run training, do project management and distill the methodology.

But jokes aside, there are very practical reasons this kind of role exists.

Traditional software projects are used to division of labor.

Sales hears the client's problem, presales writes the proposal, the product manager organizes the requirements, engineering schedules and builds, implementation handles go-live, and customer success then looks at usage.

When the problem is clear, the product mature and requirements slow to change, this division of labor works.

But AI applications are exactly the opposite.

At the start, clients often can't say what the real problem is. Whether the model can answer can only be tested with real materials. Whether a workflow is usable is only known after front-line staff operate it. Permissions, cost, speed and error boundaries also have to be recalibrated continuously while it runs.

If every problem you find has to travel around five or six roles, the requirement has changed before the feedback comes back.

I've worked as an engineer, a CTO and in a PMO (project management office), and recently I've also gone into other companies as a CAIO Lead and as an FDE. CAIO stands for Chief AI Officer; a CAIO Lead is the person who actually leads a company's AI work, responsible for mapping processes, choosing use cases and driving cross-department collaboration. The FDE goes one level further down, building the specific use case, connecting it to the systems and completing acceptance.

Having stood in all of these positions, what I feel most deeply is this: once a problem gets passed between a few roles two more times, what gets built is often no longer what it was meant to solve.

An FDE's job isn't to abolish division of labor, but to shorten the feedback loop.

They bring the facts from the client site straight into the build, and bring failures in production straight back to the product and engineering teams.

That's also why so many JDs ask for communication, business understanding, code, delivery and retrospectives all at once. Of course, some companies may genuinely want one headcount to solve five people's problems. But a mature FDE design should be looking for someone who reduces handoff losses, not a superhero who does everything.

This design has a cost, of course.

If the company doesn't give the FDE a clear scope, priorities and veto power, they'll quickly become a universal adapter: whatever sales promises, they patch in; whatever the client suddenly thinks of, they build; whatever engineering doesn't want to deal with gets dumped on site, too.

In the end, the person is very busy, there are lots of clients, and nothing truly reusable is left behind.

**A good FDE shortens the feedback loop; a bad organization just squeezes one person.**

## What's really hard about this job?

It's not that the code can't be written. It's that everyone around them may add a little more to their plate.

The pressure that comes up again and again in the 34 JDs mainly comes from six places.

### The requirements keep growing

Once the client sees the first version, they naturally keep adding features. Without a clear scope and priorities, a POC quickly turns into a custom project with no end.

### The demo succeeds, production fails

Demo data is usually fairly clean. Once you're in the real systems, inconsistent permissions, missing fields, unstable interfaces and conflicting historical records all show up at once.

### Sales promises go past the boundaries

To win the project, the early pitch may oversell the model's performance, the launch date or the difficulty of integration. Once on site, the FDE has to deal with the gap those promises leave behind.

### Done once, impossible to repeat

If every client starts from zero, the team can only ever grow by adding people. A mature FDE has to distill what's common into templates, components, test sets, operating procedures and product requirements.

### It's live, and nobody uses it

A system that runs doesn't mean the business has changed. Whether users adopt it, whether people are willing to take over when needed, and whether business metrics move all need a clear owner who keeps watching.

### One person carries a whole squad

Industry knowledge, full-stack development, presales communication, project management, training, client relationships: any one of these could be a role on its own.

I even saw a JD list “can drive” as a plus, because on-site work may mean shuttling back and forth to the client's location.

By the end, some of these postings really do read like they're hiring a whole team, with a headcount of one.

Mature companies make the FDE the squad's point of accountability, with product, engineering, data, security and customer success still backing them up. Pushing every gap onto one person isn't agility; it's a role out of control.

## If you're the boss, how do you know the project is really done?

“The Agent is built” doesn't count as done.

“The client has seen the demo” doesn't count either.

The simplest test isn't “the tech team says it's done,” but that business staff have actually used it, and know how to use it when things are normal, who to go to when something breaks, and who in the end is willing to sign for it.

A project with clear boundaries should meet at least this standard: it completes the core tasks on the agreed real samples and in the agreed runtime environment; it passes tests both sides confirmed in advance; there's a path for a human to take over when something goes wrong; a designated business owner completes acceptance; and the client's team can keep using it by following the documentation.

At the same time, the FDE should hand over an evidence pack that can be reviewed:

- what the original problem was;
- what the root causes and constraints were;
- what was changed or built;
- what samples and methods were used to verify it;
- what screenshots, screen recordings or run logs there are;
- what risks remain;
- who signed for it in the end, and who authorized the launch.

AI can handle generating, checking, testing and organizing the evidence, but whether it meets business requirements, whether the risk is acceptable, and whether it can go into production must be decided by someone with the authority to do so.

I also won't promise a fixed productivity multiple or a fixed headcount reduction before doing any discovery, or jump straight to rewriting an entire legacy system. Use cases, data, interfaces, team capabilities and risks all differ: establish a baseline first, then talk about targets.

Turning down promises that sound good isn't being conservative. It's taking responsibility for delivery.

## If you really want to put an FDE to work, what do you do in the first 30 days?

**Week one: don't rush to build an Agent.**

First pick one real process, interview the business owner and front-line users, and map the current process, systems, data, permissions and risks. In the end, keep only one problem that's worth solving first.

**Week two: set the boundaries.**

Make clear what the inputs are, what the outputs are, what's out of scope, which test samples to use, and who's responsible for acceptance. Confirm right now which data and interfaces you can get; don't leave critical dependencies until just before launch.

**Week three: run it once on the real thing.**

Build a version real users can operate, and test it with normal samples, abnormal samples and edge cases. Problems should be logged and results reproducible; don't substitute a carefully staged demo for verification.

**Week four: look at the evidence, then decide.**

Complete training, acceptance, the evidence pack and the risk retrospective. Then decide whether to scale it up, change direction or stop investing.

The goal of the first 30 days isn't to prove AI can do everything.

It's to let the company see clearly, for the first time, how a real problem gets chosen, how it gets built, how it gets accepted, and which capabilities are worth keeping.

## Should you hire your own FDE, or start with an outside team?

If you already have a stable AI product and a steady stream of client use cases, and you can give an FDE product, engineering, data and delivery support, then you should seriously consider building an in-house team.

Because what's learned on site needs to feed back into the product over the long term; it can't stay with an outside service provider forever.

But if you can't even say what your first use case is, hiring an “all-round FDE” first will most likely just make a new hire absorb the whole company's chaos.

At that point, what you may need more is a CAIO Office (an outside Chief AI Officer team that works with you month by month).

The CAIO Office I mean here isn't another executive position, and it isn't just handing over a consulting report. Think of it as an office that drives enterprise AI: a CAIO Lead works with an internal owner to pick use cases from business goals, set priorities, coordinate business and technology, and keep checking whether the results have actually landed.

This setup first locks in priorities, owners and how acceptance works, and then decides which use cases are worth implementing.

If the use case is already clear and you're only missing Agents, data, system integration and go-live capability, then a well-scoped FDE deployment project is the better first step. Get the first loop working end to end, then decide whether to build a long-term team.

The CAIO decides why to do it, what to do first and how to organize it.

The FDE goes on site and works out how to build it, how to prove it and how to hand it over.

Both of these can be taken on by internal staff, or brought in from outside in the early stages.

So don't get hung up on titles first.

Ask first: from problem to result, is anyone truly catching this?

## Conclusion: don't ask what they can do; ask how far they'll own it

After taking apart these 34 JDs, what struck me most wasn't how much an FDE has to know.

It's that companies are looking again for a sense of responsibility that's been missing for a while: the person who sees the problem also helps solve it; the person who produces the result also faces the people using it; the person who completes the delivery also leaves behind something that can be reused next time.

**An FDE doesn't just deploy systems; they deploy results.**

**Demos are for meetings; results are for the business.**

**Don't ask what they can do; ask how far they'll own it.**

If you're hiring an FDE, or getting ready to start an AI deployment project, try writing down three things first: which real process you most want to change, who's responsible for it now, and what will prove it has really gotten better.

Once those three questions have answers, what kind of person you need and whether to build your own team are usually half settled.

If the three answers are still tangled together, bring your current process, team responsibilities and acceptance criteria to me. We'll get the problem judged clearly first, and not rush into talking solutions.

---

**Research note**: This research was conducted on September 14, 2026. The researcher checked, one by one, 15 job postings per city on BOSS Zhipin that explicitly included FDE, across Beijing, Shanghai, Guangzhou and Shenzhen, 60 in total; of these, 34 pages could still show the full job description: 8 from Beijing, 9 from Shanghai, 8 from Guangzhou and 9 from Shenzhen. The remaining links were left out of the responsibility-share calculation because the job had been taken down, access was restricted, or the page no longer returned the full content. The percentages in this article are mention rates in the job postings, not employees' actual working hours; the workday types are inferred from the chain of responsibilities, not from time records; the sample mixes seniority levels as well as internship and full-time positions, so salaries in the sample are not used as a market benchmark.
