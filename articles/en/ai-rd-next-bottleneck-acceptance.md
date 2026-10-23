---
layout: article
lang: en
title: The next bottleneck in AI R&D isn't building the work. It's accepting it.
subtitle: As Coding Agents push execution speed up, what teams lack most becomes requirements, evidence and sign-off
description: AI writes code faster and faster, so why is R&D still not fast? The real bottleneck is moving from executing tasks to understanding requirements, delivery evidence and human acceptance. This essay uses five questions and answers to explain multiple Agents, PRDs, product meetings, repository maps and how acceptance works.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-09-11
translation: /articles/ai-rd-next-bottleneck-acceptance.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

AI is writing code faster and faster.

A feature that used to be scheduled over several days might now have a first version within a few hours. Tests, screenshots, screen recordings and change notes can all be prepared by AI as well.

By rights, R&D should just keep getting faster.

But many teams soon run into something else: the tasks do get done, but the product manager has no time to look at them; the code does get committed, but nobody dares decide whether it can go live; there are more and more features, and more and more rework.

We used to worry that there was too much to build.

From now on, the more common problem may be this: **every day, there's too much to accept.**

This isn't because AI isn't strong enough. It's precisely because execution got faster that the bottleneck has started to move.

Was the requirement understood correctly? Is there evidence for the result? Who has the authority to sign off? If these three don't get upgraded together, AI will only build a longer acceptance queue, faster.

I've long understood R&D's real output through one formula:

> **Effective output = Requirement clarity × Delivery evidence × Handover readiness**

Once writing code is no longer the slowest step, these three factors decide whether a team is truly getting faster or just generating more stuff.

Here are five common questions that make the case.

## Question 1: Are more Agents always better?

No.

When many people design an AI R&D team for the first time, they copy the company's org chart: a product Agent, a development Agent, a testing Agent, a security Agent, a project manager Agent.

It looks like a complete division of labor. In practice, every Agent you add brings one more context, one more set of permissions, one more handoff and one more node someone has to watch over.

If they don't read from the same material, multiple Agents won't automatically form a team; they'll just form more information gaps.

A more practical starting point: **one shared working repository, one common set of rules, multiple sessions and Skills.**

In engineering collaboration, you can start by thinking of an Agent as five things:

- a repository to work in;
- a set of real business material;
- a set of tutorials and SOPs;
- some Skills that can be called again and again;
- a clear acceptance rule.

Models can be swapped and sessions can run in parallel. What really needs to stay stable is product knowledge, past decisions, permission boundaries and the definition of done.

So when is it worth splitting into multiple Agents? Usually only in two cases.

First, when you need clear permission isolation. For example, one Agent can read the code but can't touch production keys; another can view operations data but can't modify the repository.

Second, when you need truly independent execution nodes. For example, different machines, different network environments, or work units that must run for a long time without interfering with each other.

So multiple Agents are first a matter of security and collaboration design, not a contest over how many roles you have.

> **More Agents don't make a smarter team. Shared context makes simpler teamwork.**

## Question 2: How should you write a PRD in the AI era?

You still write PRDs, of course.

But there's no need to start from a blank document anymore, with one person writing it behind a closed door.

Where requirements most often get distorted isn't during development; it's the first time they're described.

The product manager writes a short requirement, engineering fills in the gaps from experience, and QA then accepts it against yet another understanding. Everyone works hard, and what gets built in the end isn't the same thing.

A better way is to talk the requirement through first.

Use one high-quality discussion or a well-structured voice recording to capture the background the problem came from, the current process, the target state, the boundaries and real examples. AI then turns that raw context into a first draft of the PRD or Spec.

The product manager no longer spends large amounts of time shuffling text around, and focuses instead on checking four things:

1. who the user is, and what problem really needs solving;
2. what the current process and the target process each are;
3. which boundaries, exceptions and experiences must not be misunderstood;
4. how far it has to go to count as done.

The recording replaces mechanical note-taking, not product judgment.

AI can generate the PRD, but the product manager is still responsible for whether the requirement is accurate.

> **A good PRD isn't the most complete one. It's the hardest one to misread.**

## Question 3: How should you run a product meeting?

A meeting shouldn't just be everyone taking turns to report progress.

If all a meeting leaves behind is “keep pushing,” “handle it ASAP” and “we'll look again next time,” it hasn't produced anything actionable, for people or for AI.

In the AI era, product meetings need to make a deliberate effort to be specific:

- which URL, which page, which action;
- what the current state is, and what it should become;
- why it needs to change, and whose problem it solves;
- which situations must not happen;
- what evidence will prove it's done;
- who does the final acceptance.

When the meeting ends, it should produce three layers of output.

**Layer one: the raw record.** Keep the full context, so later readers don't see only the conclusion without seeing why it was decided.

**Layer two: the PRD or Spec.** Turn the discussion into requirements, processes, boundaries and acceptance criteria.

**Layer three: the AI work order.** Spell out the goal, tasks, available material, permissions, deliverables and definition of done, so an Agent can start work right away.

A meeting isn't there to prove everyone attended.

> **A meeting is worth what it produces: context the next step can execute precisely.**

## Question 4: With so many code repositories, how does AI understand the whole company?

Having many repositories isn't necessarily wrong. Having no map of how they relate is the problem.

A product is often split into a frontend, a backend, services, data jobs and different environments. What really holds AI back isn't the number of repositories; it's that these relationships exist only in a few engineers' heads.

Which repository belongs to which product?

Where should a given requirement be changed?

Which branch maps to testing, and which to production?

Who makes the technical calls, and who does business acceptance?

If these questions have no clear answers, the knowledge disappears when people leave; and every time an Agent switches session, model or machine, it has to guess all over again.

So the first step shouldn't be getting AI to write code right away. It should be building one map:

**a product–project–repository–environment–owner map.**

The map doesn't need to be complicated at the start. A single spreadsheet is enough to begin: product name, business owner, code repository, main technologies, runtime environment, current status, acceptance owner.

Its value is putting scattered code back into its business context, so people and AI work from the same set of facts.

> **A repository holds code. The relationship map is the company's R&D map.**

## Question 5: Why does it end up as “too much to accept”?

Once AI can quickly implement requirements, fill in tests, and generate screenshots and screen recordings, executing tasks is no longer the only bottleneck.

A new queue forms at acceptance.

But acceptance isn't just about finding bugs.

Testing can find out whether a feature throws errors. Acceptance also has to judge:

- whether AI misunderstood the requirement;
- whether the interface fits how people actually use it;
- whether the business result is correct;
- whether the risk is acceptable;
- whether it's allowed into production.

So AI-native R&D needs two layers of acceptance.

In the first layer, AI prepares the evidence: test results, change notes, before-and-after screenshots, screen recordings, known risks and open uncertainties.

In the second layer, people make the judgment: understanding of the requirement, product experience, business results and release authorization.

If every feature requires a person to re-read it starting from the code, the team will certainly have too much to accept.

If AI can turn each delivery into a readable evidence pack, so people only need to focus their attention on judgment, then acceptance capacity has a chance to keep up with execution speed.

> **AI makes the result clear. People decide whether it's accepted.**

## A way of working you can start right away

You don't need to transform the whole R&D organization at the start.

First pick a real requirement that's low-risk, clearly bounded, and where a person can judge right from wrong, then run it once in this order:

1. build the relationship map of products, projects and code repositories;
2. talk the requirement through in one high-quality discussion;
3. have AI turn it into a PRD/Spec and a work order;
4. have AI complete the requirement and submit tests, screenshots, screen recordings and a risk note;
5. have a clearly named person do the acceptance and authorize the release;
6. review which material, rules and Skills are worth keeping;
7. once it runs end to end, decide whether to add Agents and widen the scope of repositories and automation.

The bar for finishing the first phase isn't how many Agents you've set up, or how many commits were generated.

It's that one real requirement was understood accurately, implemented completely, left readable evidence, and was accepted by a clearly named person.

That's the smallest closed loop of AI-native R&D.

## Closing: the cheaper execution gets, the more judgment costs

AI will keep getting faster.

The cost of generating code, documents, tests and prototypes will keep falling.

But judging requirements, making business trade-offs, carrying risk and giving final sign-off won't disappear on their own because of it.

Quite the opposite: the cheaper execution gets, the more judgment costs.

So what AI-native R&D really needs to upgrade isn't only engineers' tools.

It also includes how product defines problems, how meetings produce context, how repositories connect to the business, how delivery leaves evidence, and who is responsible for the final result.

Don't rush to set up ten Agents.

Get one requirement running end to end first.

Don't rush to chase how many tasks get done each day.

First confirm how many results each day can be accepted with confidence.

**AI makes the work faster, and makes acceptance matter more.**

**The real bottleneck is no longer building it all. It's accepting it all.**

Further reading: [Your R&D team keeps growing. Why is the product still slow?](https://kellychan.im/articles/en/ai-native-rd-team-optimization.html)

If you're driving an AI-native R&D transformation, bring me one real product, one real requirement and how your repositories currently relate. We'll start by working out whether the bottleneck is in requirements, execution, testing, acceptance or how the organization collaborates.

- AI-native R&D transformation and CAIO Office (an outside Chief AI Officer team that works with you month by month): <https://kellychan.im/ai/en/caio/>
- About Kelly: <https://kellychan.im/resume/>
