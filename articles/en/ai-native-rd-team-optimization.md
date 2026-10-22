---
layout: article
lang: en
title: Your R&D team keeps growing. Why is the product still slow?
subtitle: When some companies already have AI writing 99.9% of their code, headcount isn't what needs to change
description: You keep hiring, and projects still slip. Meanwhile, at some companies AI already generates 99.9% of the code. The difference isn't headcount; it's that you still define R&D as writing code. This essay covers how an R&D team makes the AI-native transformation, and how to spend the first 30 days.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-09-02
translation: /articles/ai-native-rd-team-optimization.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

A recent discussion about managing R&D made me rethink a very typical problem.

Picture a company like this.

The owner knows the business and knows where the product should go.

But the product always has unsolved problems, new features take forever to ship, and the team's answer is usually:

**We don't have enough people. We need to keep hiring.**

So the company hires frontend engineers, backend engineers, a tech lead, and then brings in an outside team as well.

The more people there are, the less the owner understands.

They don't know what each person did yesterday, why a feature takes so long, or who signs off on finished code, and against what standard.

Worse, when some people leave, the product documents, technical decisions and handover notes leave with them.

After hearing all this, I asked a few questions:

**Can you see the code changes behind each requirement?**

**Can you see what problem each one solves, how it was tested, and who accepted it?**

**If a lead left tomorrow, could someone new take over from what's already written down?**

If none of these has an answer, what the company is really short of may not be more engineers.

What it lacks is a system that makes R&D output visible, verifiable and possible to take over.

I call this state **the R&D black box.**

The most expensive thing about a black box isn't low efficiency.

It's that it leaves the owner with only one lever to pull: “hire more people.”

I write a team's real capacity as a simple formula:

> **Effective output = Requirement clarity × Delivery evidence × Handover readiness**

Notice that headcount isn't in it.

Headcount is just an amplifier. What it amplifies is the product of those three factors.

If the product is small, hiring amplifies chaos: more meetings, more waiting, more explaining to one another.

So for many teams, the real problem isn't “not enough people.”

**Quite the opposite: because you keep hiring, the black box keeps getting thicker. The more people involved, the fewer who can explain the whole picture.**

## 1. What is the R&D black box?

The R&D black box doesn't mean engineers aren't working.

In fact, many R&D teams are busy every day: meetings, changing requirements, fixing bugs, shipping releases, handling production issues.

But to the owner and business leads, R&D looks like a sealed box.

Requirements go in.

Budget goes in.

People go in.

As for what happens inside, you have to wait for the tech lead to explain.

When results disappoint, there are usually three answers:

- the requirements keep changing;
- the system is too complex;
- we still don't have enough people.

Sometimes all three are true.

The problem is that without a traceable R&D process, the owner can't tell:

which difficulties are real and which are management problems; which work deserves more investment and which should stop.

The “transparency” I mean here isn't monitoring how long employees are online, or logging what time someone starts work.

What should be visible is tasks, output, test evidence, risks and acceptance status, not people's screens.

A typical R&D black box shows five symptoms.

### Symptom 1: every delay is solved by adding people

Short on frontend? Hire frontend.

Short on management? Hire a director.

The director arrives, so give them a team too.

But nobody first answers: are the requirements clear? What is the current team's effective output? Is the real bottleneck in development, testing, release, or decision-making?

If the bottleneck is in requirements and acceptance, more engineers just means more people waiting.

### Symptom 2: everyone is busy, but nobody can say what got done

Many companies have a task board.

But the board records what people plan to do, not what has been delivered.

A task can go from “in progress” to “done” with nothing more than its owner clicking a status.

Where the code changed, whether tests passed, what the interface looks like, what the risks are: management still can't see any of it.

That isn't transparency.

It's just verbal status reports moved online.

### Symptom 3: acceptance depends on a few people, and even more on gut feel

The business says: “This doesn't seem like what I wanted.”

Engineering says: “The feature is done.”

QA says: “The main flow runs.”

All three may be right, but each is using a completely different definition of done.

Without acceptance defined up front, a project ends up deciding who's right by title, volume and relationships.

### Symptom 4: documentation is something you remember to write when someone quits

On many teams, product knowledge doesn't live in the company.

It lives in a product manager's head, on an engineer's laptop, or scattered across hundreds of chat messages.

The moment a key person leaves, the company suddenly finds the code is still there, but nobody can explain why the system was designed this way, which modules mustn't be touched, or what business a feature actually serves.

Code without documentation isn't a complete asset.

It's more like a liability that keeps charging you for understanding it.

### Symptom 5: AI only writes code; it never enters the R&D process

Some teams already use AI coding.

But the way they use it: an engineer asks AI for a piece of code, edits it, and commits as usual.

That only speeds up the typing.

How requirements are defined, how root causes are found, how tests are covered, how results are reported, how releases are approved: all of it stays the old way.

So code gets written faster, but the team as a whole doesn't get noticeably faster.

Because the speed of R&D was never the speed of typing.

## 2. AI writes 99.9% of our company's code

Let me start with something from my own company.

Today, 99.9% of our code is generated by AI.

I don't mean “AI helps us write faster.” I mean the vast majority of the code was never typed line by line by a person, start to finish.

What people do has become four other things: defining the problem clearly, reviewing the approach, checking the tests and evidence, and deciding whether it can ship.

I'm not saying this to show how advanced we are.

What really surprised me was something else.

Over the past six months I've met many owners whose R&D teams are still growing the old way: projects are slow, so hire frontend; management is messy, so hire a director; delivery is unstable, so find another outsourcing firm.

In other words, at the same moment, two kinds of companies are competing in the same market.

One gets its capacity from headcount.

The other gets its capacity from method.

Their cost structures, iteration speed and number of attempts are no longer in the same league.

But one thing has to be said clearly first, or it's easy to misread:

**AI generating 99.9% of the code doesn't mean you don't need people.**

What got replaced is the act of typing, not the work of R&D.

Our engineers haven't become less important; they've become more valuable, because what they now do is requirement definition, judging approaches, designing acceptance and guarding production. Those are exactly the parts AI can't do today, and shouldn't be solely responsible for.

So the real risk was never “AI will replace programmers.”

**The real risk is that you still define R&D as writing code, so the only way you know how to scale is to add people.**

Back to the formula: headcount is just an amplifier.

Once writing code is no longer the bottleneck, the people you add amplify only communication, waiting and explaining to one another.

One boundary worth adding: the 99.9% here refers to engineering practice at our own company. Business complexity, legacy systems, data sensitivity and compliance requirements make the achievable share vary widely. It can't be copied over as a promise to any team.

## 3. Transforming R&D isn't about making everyone write more code

When owners talk about transforming R&D, their first thought is efficiency.

And efficiency is often understood as: write more code in the same time, or do the same work with fewer people.

But code isn't the result a business ultimately needs.

What a business really needs is:

- a problem solved;
- a feature that works reliably;
- a release that doesn't create bigger risks;
- a next owner who doesn't have to guess from scratch;
- the same kind of task done faster next time.

So transforming R&D can't be judged by code volume alone.

It should be judged by four capabilities:

**First, visible.** Management can see the work that's actually done, not just hear reports about it.

**Second, verifiable.** Every delivery has clear evidence and a sign-off standard.

**Third, handover-ready.** When people change, product and system knowledge stays with the company.

**Fourth, repeatable.** A method that worked once can be captured as processes, templates, tests and AI Skills.

These four are the real capacity of an R&D system.

They are also that formula unpacked: **visible** and **verifiable** determine delivery evidence; **handover-ready** determines handover readiness; **repeatable** determines whether all three can exist without depending on one person. Requirement clarity sits further upstream: it decides whether any of this is worth doing.

## 4. In the AI era, R&D teams should build four closed loops

If I were helping a company transform its R&D team, I wouldn't start by discussing who to cut, or by tearing down the existing technical architecture.

I'd start by building four closed loops.

### 1. From business goals to R&D tasks

R&D tasks can't originate only inside the engineering team.

They should have two entry points:

- broken down from management's business goals;
- raised from the problems of customers, frontline operations and customer support.

Then every requirement goes through the same set of questions:

1. Whose problem does it solve, and what problem?
2. Why now?
3. What happens if we don't do it?
4. What counts as done?
5. Who is responsible for confirming the result?

If these questions have no answers, it shouldn't rush into development.

AI can help organize meetings, analyze feedback and draft tasks.

But priorities must be set by the people who are actually accountable for business results.

### 2. From tasks to delivery evidence

From now on, an R&D task can't deliver just a piece of code.

It should also deliver a readable evidence pack:

- Problem: what was wrong;
- Root cause: why it happened;
- Change: what exactly was changed;
- Verification: which tests ran, and the results;
- Visuals: screenshots or screen recordings of interface changes;
- Risks: what isn't covered yet;
- Status: who it's waiting on for acceptance, and whether it may ship.

AI is especially good at this.

It can read the task, the code diff and the test results, and translate a complex R&D process into a report the business can understand.

But final acceptance and release authorization still belong to people.

**AI makes the process transparent; people judge the result.**

### 3. From code to product assets

Traditional teams treat documentation as extra work after development, so documentation never catches up with the code.

In the AI era, you can turn it around.

Once permissions and security boundaries are clear, let AI keep reading the code, APIs, tests and task history, and help generate and update:

- a product feature map;
- system architecture and module relationships;
- core business flows;
- APIs and data dictionaries;
- release, rollback and incident-handling guides;
- known risks and technical debt.

People still need to review all of this.

But “writing documentation from scratch” becomes “reviewing documentation AI generated from the facts,” and the cost and update frequency are completely different.

Code then stops being files only engineers can read and gradually becomes a product asset the company can understand and manage.

### 4. From individual skill to organizational capability

AI coding easily creates another kind of risk:

one very capable person, working with AI, moves extremely fast; but once they leave, nobody else knows how.

Real transformation can't stop at “finding one superstar.”

Their effective methods need to be captured as:

- how to describe a problem;
- how to break down a task;
- how to give AI the context it needs;
- how to test and review;
- when a human must step in;
- what conditions must be met before shipping.

When these methods become part of the team's templates, tools and meeting routines, individual skill turns into organizational capability.

## 5. Which roles on an R&D team become more important?

AI will write more and more code. That trend is obvious.

But it doesn't mean R&D teams won't need people.

On the contrary, several capabilities become more important.

### People who can make a fuzzy problem clear

The faster AI executes, the more a wrong requirement wastes.

People who understand the business and the users, and can write a problem up as a clear task, become a new key role.

They may come from product, or from customer support, operations or the business frontline.

### People who can design acceptance

In the past, development was slow, so “the code is written” was easily treated as the main measure of progress.

From now on, execution is fast, and what's truly scarce is: who can define what correct means, and how to prove it.

Testing, quality and business acceptance are no longer supporting steps after development; they are the core of the R&D system.

### People who can guard production

AI can generate code, and it can generate mistakes.

Permissions, security, observability, release, rollback and incident response matter more.

Ops and platform engineering aren't the people who show up at the end to “help ship.” They are the gatekeepers who decide whether AI output can safely enter production.

### People who can judge what not to do

When development costs fall, a company gets more requests, not fewer.

The most valuable managers aren't the ones who get the team to do the most, but the ones who stop the wrong projects in time and put limited attention where results are actually produced.

## 6. How would I diagnose and transform an R&D team in the first 30 days?

Transforming R&D shouldn't start with a grand reorganization plan.

A safer approach is to spend about a month on diagnosis and a small-scale trial first. The exact pace still depends on system size, permissions and how well the team cooperates.

### Week 1: make R&D visible for the first time

I'd start by interviewing the owner, business leads, product, engineering, QA and ops to answer a few basic questions:

- where requirements come from, and who decides;
- how tasks get into development;
- how code is reviewed, tested and released;
- what management can see today;
- which knowledge is held by only a few people;
- how the team already uses AI.

The week 1 deliverable isn't a “reform plan” but an R&D value stream map: from the moment a problem appears to the moment a feature ships, who each step passes through, how long it waits, and what evidence it leaves.

Besides the map, this week should also deliver something you can open every day: **a product and R&D dashboard.**

It isn't one more task management tool. It puts what's happening on this team onto a single screen for the first time:

- how many products and projects the company has, and how far each one moved yesterday;
- what each engineer did and committed yesterday;
- who owns which area, and who changed which code;
- which tasks are done and who they're waiting on for acceptance;
- where something looks off: commits with no linked task, releases shipped without tests, tasks stuck for a long time, recent rollbacks.

That last item usually pays off first.

The first four show management normal operations; the fifth shows them the exceptions. And it's always the exceptions that need a decision.

One thing has to be made clear here: **the dashboard shows work items and evidence. It doesn't rank people by commit count.**

Use the same dashboard to ask “where is this task stuck, and what's missing?” and the team will be willing to surface problems. Use it to ask “who committed the least this week?” and within three days it turns into a performance, and you lose the little bit of truth you just gained.

Make the work transparent, not the people.

The dashboard doesn't appear out of nowhere, either. The client needs to provide three things first: a list of products and code repositories, a sample of tasks and releases from the last week or two, and the task system and CI/CD tools currently in use.

All the data comes from these systems. AI organizes and explains it; it doesn't make up what it can't see.

The value stream map answers “what does the process look like?”; the dashboard answers “what's happening right now?”

Many owners can explain what their company's R&D is actually doing for the first time on the day they see this dashboard.

### Week 2: pick one repository or module and recover its product assets

You don't need to read the whole company at once.

Pick an important repository or module with clear boundaries, and, read-only, with minimal permissions and in a controlled environment, help recover the product description, architecture, flows, APIs and a risk list.

This step checks the quality of existing assets, and also tests whether AI can understand the system safely and accurately.

By the end of the week, you should have a proper set of documents: product feature descriptions, system and technical architecture diagrams, module relationships, core business flows, APIs and data dictionaries, release and rollback guides, and a list of known risks and technical debt.

These aren't for neat filing.

They answer a very practical question: **if someone new took over tomorrow, could they start working from these documents?**

### Week 3: run one AI-native R&D task end to end

Pick a real requirement or bug with manageable risk and run it all the way through:

> Problem definition → Root-cause analysis → Task confirmation → AI-assisted implementation → Automated tests → Screenshots / screen recordings → Human acceptance → Release decision

This time, keep all the evidence: the task description, where the code changed, which tests ran, a recording of the interface changes, who signed off. Nothing missing.

The point isn't to prove AI can write code.

It's to set a delivery standard every future task can reuse.

### Week 4: let the data decide the next step

At the end of the month, don't make a slide deck whose only message is “we did a lot.”

Instead, look at a few basic numbers:

- cycle time from confirmed requirement to acceptance;
- the share of tasks traceable from requirement to code, tests and sign-off;
- whether acceptance evidence is complete;
- rework and regression defects;
- coverage of product and technical documentation;
- which tasks still need heavy human takeover;
- which team members can already work independently with the new method.

You can add one more thing this week: **pick a piece of code everyone agrees is hard to change, and refactor it with evidence.**

Every company has a few modules like this: tangled logic, no tests, change one line and something breaks. Over time everyone quietly routes around them, and new requirements would rather start a parallel version.

With documentation filled in and test and acceptance standards set over the first three weeks, modules like these are finally in a condition to be changed safely.

Pick one with a manageable scope: add tests, clarify the boundaries, refactor, then accept it with the evidence chain from week 3.

The value isn't just cleaner code.

It's that the team confirms, for the first time, that the legacy baggage everyone treated as untouchable can now be dealt with.

Set the baseline first, then agree on next-phase goals together.

Before there's data, don't make gut-feel promises of a fixed efficiency gain or headcount reduction.

### What you have at the end of the month

- a product and R&D dashboard updated daily, making R&D visible to management for the first time, with exceptions flagged automatically;
- a filled-in set of product and technical documentation that holds up even if core members leave;
- an AI-native R&D process run for real, with complete evidence;
- a refactor done on real code, proving the legacy baggage can be moved;
- a set of baseline data, so next-phase goals rest on facts.

None of these five is a report. They're assets the team can keep using.

## 7. AI-native transformation doesn't simply mean layoffs

When AI and R&D come up, the first question many people ask is: can we use half the people?

I understand why owners care about this.

But if a project starts with layoffs as the goal, the team quickly learns to protect itself: hiding problems, creating complexity, resisting transparency.

That does nothing for AI transformation.

A more sensible order is:

First make tasks transparent.

Then make acceptance clear.

Then observe what capabilities each step really needs.

At that point, the company may find:

- some roles' work can be automated;
- some people can move from executing to designing and accepting AI's tasks;
- some outsourcing and duplicated layers of management are no longer necessary;
- testing, ops, business product and security capabilities actually need strengthening;
- the biggest bottleneck isn't in R&D at all, but in requirements and decisions.

When we reached 99.9% AI-generated code ourselves, the team didn't shrink into an empty shell with only the owner left.

What changed was the work in each person's hands: much less time writing implementations, much more time defining problems, designing tests, reviewing risks and guarding production.

**AI-native transformation changes what roles contain first, and only then, perhaps, how many roles there are.** Do it in the reverse order and you'll get neither right.

Organizational change should be a result of the facts, not an answer written before the project begins.

**I don't decide for the owner who to let go.**

**I give the owner, at last, the facts to make the right organizational decisions.**

## 8. What does “AI-native R&D transformation” actually deliver?

This kind of project is usually carried out by two roles together.

### CAIO Office: aligning business goals with the R&D organization

CAIO Office is an outside Chief AI Officer team that works with you month by month. Kelly serves as CAIO Lead and joins the management and R&D teams in an embedded, ongoing engagement, responsible for:

- clarifying business priorities and where R&D investment goes;
- setting up weekly tasks, owners and acceptance routines;
- coordinating business, product, engineering, QA and ops;
- judging what to build, buy, rework with AI, or stop;
- using real delivery data to help management make resource decisions.

**CAIO Office is a virtual organization that the client and I set up together.** It isn't an outside consultant giving advice remotely; it's a unit that really exists inside the company and gets to work every week.

The client needs to assign someone they trust to come in and work with me.

I usually suggest picking this person from the business side rather than a hands-on programmer.

The reason is simple: business people carry no technical baggage. They don't know that “by industry convention this takes three months,” and they don't feel that “this process has to be approved as a project first,” so they dare to drive AI in the wildest ways. And that's exactly how AI's potential really shows itself.

This doesn't mean technology isn't important. Code has to land, systems have to go live, risks have to be controlled; in the end you still need engineering's cooperation. But the first person to take AI and knock on every role's door is best not someone already trained in “how software engineering should be done.”

A company's CTO can of course join CAIO Office too; that's a workable path. But one caveat: the seat carries a built-in tension, because what CAIO Office does is, at its core, **make the company's execution transparent to the owner**, and that's hard to hand entirely to the person who has been in charge of that very process.

### FDE: going to the frontline and building the method and the system

The Forward Deployed Engineer (FDE) works with the existing team to deliver:

- diagnosis of the codebase, documentation, toolchain and release process;
- an AI coding workflow, with an evidence chain for tasks and PRs (pull requests);
- automated testing, evaluation, permissions and release controls;
- recovery of product documentation and technical assets;
- management dashboards, training, handover and continuous improvement.

The final deliverable isn't a report on “how things should be done.”

It's an R&D way of working that has already run on real tasks and that the client's team can keep using.

Technical tools are chosen to fit the existing environment.

I won't ask a company to tear down all its systems before it can use AI, and I won't promise a full rewrite, a fixed timeline or a fixed efficiency multiple before doing the research.

## 9. Why am I the right person for this?

I've been a software engineer and a game architect, and founding CTO at a retail company. I also founded Vika / AITable, one of the earliest spreadsheet-database products in China, used by Tencent, Baidu, China Southern Power Grid, Shein and miHoYo for their digital transformation, and then Buda, an enterprise-grade Agent Harness product.

I've led product, R&D and digital operations teams of more than 150 people. At that company I also ran the PMO (project management office), coordinating every department across the company, breaking the digital transformation of a 30,000-person retail organization into tasks and pushing every team to deliver results. And I've built a software platform serving a million users and 15,000 organizations.

So when I look at R&D, I don't just look at the code.

I look at whether the business case is worth it, whether the product is clearly defined, whether the team can execute, whether the system can go live, and whether management can see the results.

AI coding keeps making the writing of code faster.

But it also makes another skill increasingly scarce:

**turning a business goal into clear tasks, organizing people and AI to deliver them, and accepting the result with evidence.**

That's exactly what I've been doing for more than a decade.

And I don't only do it for clients. Our own company runs this way today, so every recommendation I make has to hold up in my own team first.

## Closing: before you hire ten more people, answer these five questions

If your R&D team keeps growing but projects aren't getting noticeably faster, hold off on the next job description for now.

Ask five questions first:

1. What business problem does each of your three most important R&D tasks solve?
2. Can the owner directly see the work that was actually finished last week and is waiting for acceptance?
3. Does every task have evidence of the problem, root cause, change, tests and sign-off?
4. If a core member left, could the existing documentation let someone else take over?
5. Beyond writing code, has AI entered requirements, testing, documentation and acceptance?

Question 1 is about requirement clarity, questions 2 and 3 about delivery evidence, and questions 4 and 5 about handover readiness.

If you can't answer three of them, what the team needs may not be more people.

It may be an upgrade to its R&D operating system.

**Until the product grows, hiring only thickens the black box.**

**First, make R&D visible.**

**Then make delivery verifiable.**

**Only then talk about how the team should change.**

Writing code is a largely solved problem.

What isn't solved yet is how to make a group of people and a team of AI answer for the same result.

If you'd like, bring me one real requirement, one code repository and your most recent release record.

We'll start with a diagnosis to work out where the problem really lies: people, process, architecture, quality, or priorities.

- Enterprise AI transformation and AI-native R&D transformation: <https://kellychan.im/ai/en/caio/>
- About Kelly: <https://kellychan.im/resume/>
