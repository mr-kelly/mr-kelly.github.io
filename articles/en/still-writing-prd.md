---
layout: article
lang: en
title: Product managers still writing PRDs are adorable
subtitle: You turn requirements into a document and have AI follow it item by item, yet features still go missing or land in the wrong place. The problem isn't that the document lacks detail; it's that you never needed to write it. It was only ever a translation between business and engineering. Here's how to work without it.
description: You turn requirements into a document and have AI follow it item by item, yet features still go missing or land in the wrong place. The problem isn't that the document lacks detail; it's that you never needed to write it. It was only ever a translation between business and engineering. Here's how to work without it.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-10-21
translation: /articles/still-writing-prd.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

Recently, at an AI event, a product manager came over to chat with me.

They look after an app that pairs with a hardware product. The QA team keeps sending piles of requests: one-click translation, being able to @ a colleague on DingTalk (a workplace chat app widely used in China), citing the knowledge base, creating tickets.

Their method is diligent: put the requests into Excel, have AI turn them into a PRD (product requirements document, the spec a product manager traditionally writes for design, engineering and QA), and read it through; then have AI generate a prototype, and read that through too.

The result? One-click translation was in the PRD but missing from the build. When it appeared, it was in the wrong place. When the place was right, it was awkward to use. With a long list of requirements, the only option was to check them one by one.

“I'm so tired,” they said.

I said: “Stop writing PRDs. Anyone still writing PRDs today is adorable.”

That “adorable” wasn't a jab at them. They were more diligent than most people; the diligence was just going to the wrong place.

I call this state **the super-worker trap.**

> **AI output = Capability × Authority × Acceptance**

So for many product managers, the problem isn't that the PRD lacks detail. Quite the opposite: the harder you work on the PRD, the more AI stays parked at the document step, and the more you become the person ferrying things between requirements, documents and prototypes.

It's multiplication. AI's capability has been good enough for a while. If you only authorize it to write documents, documents are all you get. And if you have no finished product to check against, you can only check line by line.

To put it more bluntly: **product managers don't need to write PRDs at all.**

![The super-worker trap: AI output = Capability × Authority × Acceptance](/articles/images/still-writing-prd/en/formula.png)

## “Aren't a requirement and a PRD the same thing?”

At this point, they pushed back a little.

“Aren't a requirement and a PRD the same thing?”

No.

“But isn't a PRD just a document?”

What I showed them wasn't a document; it was finished work. A requirement comes in, AI clarifies it first, then builds it, and hands back a PR (pull request: a code change waiting for someone to approve and merge, with notes and evidence attached): what the problem was, what changed, what was verified, plus screenshots and screen recordings of the product.

They looked at it for a while and said: “Honestly, it doesn't feel that different from mine.”

It's very different.

In their process, AI stops at every step and waits for a person to look. They review the PRD, review the prototype, review what engineering built, and check against the requirements again. At every stop, they are the one doing the checking. They're the busiest person on the line, and they've become its slowest link.

One person has turned themselves into a relay station, and still thinks they're using AI to work faster.

![How many times do you show up for one requirement: four times in the old flow, once in the new one](/articles/images/still-writing-prd/en/flow.png)

## Who was the PRD ever written for?

The PRD was never something product managers wrote for themselves.

It was a translation. Business people can say what they want but don't understand the technology; engineers can write the code but don't understand the business. The two sides don't speak the same language, so someone in the middle has to translate the business's words into a document engineers can work from. That someone was the product manager, and that document was the PRD.

The old process was also a relay race: the product manager did the planning and wrote the PRD, the designer produced mockups, engineering wrote the code, QA tested it, and finally the business accepted it. Each leg was run by a different group, and at every handoff, that translation was what kept the information from getting garbled.

Planning sat at the front because every later leg was expensive. A design change took days; engineering rework took weeks. So you had to think it through and write it down before anyone started.

And now? AI understands the business's plain language and it can read the code. It speaks both languages, so the translation has no reason to exist.

> **The PRD is a translation. Now that AI speaks both languages, it's time for the translation to go.**

In the end, the PRD is a leftover from the era of people working with people. Now that people work with AI, its job is done.

## Now: planning moves to the last minute

Now, all of those middle legs can be cut.

Planning, design, engineering and testing are no longer four groups and four handoffs; AI strings them together in one go. The raw requirement comes in, and AI fills in the planning itself: which modules, which pages, how the interactions work. Then it builds the interface to the design guidelines, writes the code, runs the tests, and hands back something you can look at and use.

People stay only at the final step: acceptance and taste.

You look at what was built and keep giving feedback: “This button is too far away,” “The translation should be copyable in one click,” “Customers won't understand this flow.” AI turns each piece of feedback around quickly and shows you again. Round after round, until it feels right. Then you authorize the release.

That's what I mean: **planning hasn't disappeared; it has moved from the very front to the last minute.**

Planning used to be the front end of a product manager's job: you had to think it through before work could start. Now building a version is cheap enough that you can build first, and your planning becomes round after round of judgment on the finished thing.

> **We used to think it through, then build. Now we build, then think it through.**

![Planning moves to the last minute: people used to run every leg; now AI runs planning, design, build and test, and people accept and give taste feedback at the end](/articles/images/still-writing-prd/en/whole-process.png)

If anything of the PRD is left, it's the record AI leaves behind once the work is done: what was done and how it was verified, filed with the PR. Nobody has to write it.

## Why does AI keep missing features?

Back to their question: one-click translation was clearly in the PRD, so why wasn't it built?

Break it down by the formula, and each factor has an answer.

**Capability: AI doesn't need your PRD.** A large model has read more requirements documents than any product manager will write in a lifetime. Try it with one question: “What modules should a customer support system have?” It will list the modules, the pages and interactions in each, and even think of test cases. Much of the PRD you spent an afternoon on, it already knew.

**Authority: if you only let it write, it only writes.** When AI stops at a document, there's nothing to inspect, so all you can do is check one document against another. Let it go all the way to something you can see, and one screenshot tells you whether anything is missing.

But authority isn't a free-for-all. AI can only run all the way through if the rules are already written: brand and design guidelines define what the interface looks like; engineering rules define how code is written, tested and started; acceptance criteria define what counts as done. These live in the code repository, and AI reads them every time it starts work.

You also need to turn the code itself into knowledge AI can understand: which products exist, which repositories, which versions, where the documents live. I've recently been helping an engineering team through this transformation, and this was the first step, not teaching everyone how to write PRDs.

**Acceptance: acceptance is not testing.** Testing asks whether a feature is correct and runs; AI can do that part itself. Acceptance asks whether it's good to use and whether it's what the business actually wanted; that takes human taste and judgment. And acceptance isn't a signature at the end. It means giving feedback, again and again, at that last step until it's right.

They asked again: “So that's just me pointing out what's wrong and having it fix it?”

Yes, exactly. The difference is that you're no longer checking against a document dozens of pages long, but against something already built.

![Acceptance is not testing: AI runs the tests to check right and wrong; the business owner judges good and bad](/articles/images/still-writing-prd/en/test-vs-acceptance.png)

## Your manager says “the PRD is for AI to read.” Is that right?

They told me their manager keeps insisting: you must have AI write a PRD, and that PRD is for the AI to read.

That's only half right. AI doesn't need you to translate; what it needs is context. But that context shouldn't be a PRD rewritten from scratch for every requirement; it should be rules written once and reused every time after.

A PRD serves one requirement, and the next one starts from scratch. A set of design guidelines, engineering rules and acceptance criteria serves every requirement that follows.

> **Write a rule once and every requirement uses it; write a PRD once and it's used once.**

![A PRD is written from scratch for each requirement; rules are written once and reused by all of them](/articles/images/still-writing-prd/en/prd-vs-rules.png)

So when AI misses a feature, don't go back and make the PRD more detailed. Ask instead: which rule was missing? Add that rule, and the same miss won't happen again.

## So what do product managers do now?

That was the question they most wanted to ask but didn't quite say out loud.

They shared one detail. They asked an engineer about the trigger condition for a feature; the engineer didn't remember either, turned around and asked AI, then sent back a screenshot: “Yep, it's this.” Their thought at the time: then why am I even asking them?

That detail shows the knowledge in the code no longer lives in someone's head; it lives where AI can read it. A product manager who keeps working as a translator and courier for requirements will find the role more and more awkward.

Our own team no longer has a dedicated product manager. We collect user requests twice a week and hand the recordings straight to AI. Where we spend the most energy is filtering: whether to build a request at all, and which to build first.

> **A product manager's value has moved from writing it clearly to choosing right.**

AI already writes things clearly faster than you do. Choosing right is still something AI can't do for you: which customer's request is worth building, which feature will hurt existing users, which version should ship first. Those judgments are the part of a product manager that can't be replaced.

## How can you try this on your next requirement?

You don't need to overhaul the whole team. When the next requirement comes in, run it a different way.

**Step one: skip the PRD and hand over the original words.** Give AI the raw material: the QA colleague's message, a meeting recording, or a single sentence of your own. Let it clarify first and ask you whenever something is unclear.

**Step two: let it go all the way to something you can see.** Don't stop at a document or a prototype. Have it hand back a PR: what changed, how it was verified, screenshots or a screen recording, and what's still uncertain.

**Step three: you only do acceptance and taste feedback.** Check the screenshots for three things: is it there, is it in the right place, is it good to use. If not, one sentence tells it to fix it. Look again after the fix, until it feels right.

**Step four: when something slips, add a rule.** Each time something is missed, write the reason into the design guidelines or engineering rules. Keep it up for two weeks and you'll find you need to speak up less and less.

When does a requirement count as done? Not when “the PRD has been reviewed,” but when the PR contains evidence like this:

- the original request and AI's clarification notes;
- what changed, and why it changed that way;
- passing test and build results;
- interface screenshots or a screen recording;
- known risks and anything still uncertain;
- acceptance by the business owner, and release authorized by the person responsible.

AI handles clarification, implementation, self-testing and preparing the evidence; people handle trade-offs, acceptance and authorizing the release.

![When is a requirement done: AI prepares five pieces of evidence; people accept the result and authorize the release](/articles/images/still-writing-prd/en/evidence.png)

## When should you hold off?

Moving planning to the end doesn't mean nothing needs to be decided up front.

Requirements involving payments, compliance, security and user data still need someone to make the call in advance; AI shouldn't clarify them on its own and go straight to building. Teams whose rules aren't written yet shouldn't go fully automatic on day one either. Start with one low-risk requirement.

I also don't promise a fixed productivity multiple. How much faster you get depends on how far your rules are written and whether acceptance can keep up, not on which model you use.

I've been a CTO and led teams of up to 150, so I know the role the PRD played when people worked with people. Precisely because I've seen its value, I'm all the more sure that now people work with AI, it needs a different place.

> **Don't let AI stop at the document; let it go all the way to something you can accept.**
>
> **Acceptance is not testing: testing checks right and wrong; acceptance judges good and bad.**

When your next requirement comes in, don't open the PRD template yet; run it through the four steps above. If things still slip, bring the original request and what AI handed back, and we'll work out together which rule is missing.

Further reading: [The scarcest people in R&D now write the rules, not the code](/articles/en/ai-rd-rule-makers.html)
