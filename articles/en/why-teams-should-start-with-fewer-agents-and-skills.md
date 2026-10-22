---
layout: article
lang: en
title: Rolling out AI to a team? Why you should start with fewer Agents and Skills
subtitle: You assign an Agent to every role and keep adding Skills, yet people can't tell which one to call, and work that spans several people still has to be pulled together by hand. The problem isn't that there are too few; it's that the entry points, the information and acceptance were never connected. Here's how to work out a setup that's just enough, starting from one task.
description: You assign an Agent to every role and keep adding Skills, yet people can't tell which one to call, and work that spans several people still has to be pulled together by hand. The problem isn't that there are too few; it's that the entry points, the information and acceptance were never connected. Here's how to work out a setup that's just enough, starting from one task.
author: Kelly Peilin Chan
channel: Essay
created_on: 2026-10-09
translation: /articles/why-teams-should-start-with-fewer-agents-and-skills.html
---

> **Kelly Peilin Chan**｜Founding CTO and board member at HEYTEA; founder of Vika / AITable and Buda AI. Led teams of up to 150 and drove digital transformation across a 30,000-person retail organization; Vika reached 1M+ users and served 15,000+ organizations. My ventures are backed by IDG Capital, Tiantu Capital, 5Y Capital (formerly Morningside), Eminence Ventures (Jingya Capital) and Hillhouse Capital, and have raised tens of millions of US dollars. About me: [Résumé](https://kellychan.im/resume/)｜[Enterprise AI services](https://kellychan.im/ai/en/)｜[CAIO Office](https://kellychan.im/ai/en/caio/)

Recently, a friend who runs a large team asked me: everyone is already using AI and writing their experience down as Skills, so what does it take to get the whole team actually using it?

An Agent is an AI assistant that can read information, call tools and carry out a series of steps toward a goal; a Skill is the work instructions it follows for a certain kind of task. Their example: a colleague who runs promotions writes down the steps they know well, so others and AI can pick them up.

That's valuable. But then they asked: does a team need as many Skills and Agents as it has people? Should you group them the way the human team is grouped, then roll the Skills up layer by layer?

That is exactly the path teams most easily wander down when rolling out AI: count the people, then count the Agents, then count the Skills.

First you draw an org chart: a sales Agent, an operations Agent, a design Agent, a manager Agent. Then you split the roles finer, add Skills, set up reporting lines. In the end, someone still has to hand out the work, chase progress and pull the answers together.

That someone is usually you.

Start by asking three questions:

**When you ask how a project is going, can an Agent find the facts that have been recorded?**

**Can the next colleague finish the task using only the Skill?**

**When several Agents all say they're done, who checks the evidence?**

This is what I've called **“the super-worker trap”**: AI appears to take on a lot of the work, but in the end every handoff still has to go through one person.

> **AI output = Capability × Authority × Acceptance**

So the problem usually isn't too few Agents, or not writing Skills diligently enough. Quite the opposite: you copied the human division of labor over as it was, but never handed the system the information, the permissions or the definition of done, so the coordination ended up back with you.

**You can borrow roles for Agents. You can't copy the human org chart.**

## Why isn't “giving Agents job roles” enough?

I've said before that you should give Agents clear responsibilities, the way you would manage employees. The analogy is useful: it gets people to stop firing off scattered questions and start spelling out which tasks can be handed over and when the Agent must come back to a person.

But push the analogy too far and it misleads us.

A human org chart deals with people's time, professional specialization and management responsibility. An Agent's working boundaries depend first on the information it can read, the tools it can call, the permissions it has been granted, and who will check the results. Giving an Agent a job title configures none of these four.

Human employees at the same company attend meetings, keep up with changes in the business, and can go and check with someone on their own. An Agent won't automatically know the latest promotion plan just because it's called “Head of Operations,” and it won't automatically get another Agent's files and reasoning just because that one is called “Design Specialist.”

Drawing a reporting line on screen doesn't give them a shared set of facts.

That's why “give everyone an Agent, then have everyone hand in a Skill each week” doesn't mean the company has built an AI capability. Individuals may well work faster, while the manager may still have to collect progress from each of them; one Agent produces a result, and the next Agent still has to hear the project background all over again.

This isn't to say division of labor and Skills are useless. The problem is treating **quantity** as the definition of done.

Whether a promotion Skill has value doesn't depend on whether it was handed in on schedule. It depends on whether, at the next promotion, another authorized person can follow it to get the right information, run the task end to end, and see clearly which points need a human to confirm.

**Writing more Skills isn't the same as passing the work on.**

For the people using them, a Skill is also an entry point: the way you interact with an Agent and trigger it to handle a certain kind of work. People have to understand the names and decide which one fits the job in front of them; sometimes the Agent also has to pick the right Skill for the task. Once there are many entry points with similar names, “which one should I use?” becomes a new job in itself.

The result can be counterintuitive: the more Skills in the catalog, the lower the share that actually get called. People keep using the same few; the rest sit in the list once they're written. When a task is unclear, people simply go back to the chat box and explain everything from scratch. **More entry points don't mean more use.**

Quantity also carries a cost that often goes uncounted. Every Agent you add means deciding what information it can see, which tools it can use, whom it hands off to, and who reviews its work when it goes wrong. Every Skill you add needs someone to maintain when it applies, which version of the information it uses, and its verification results. If all they do is add names to the catalog, the team gets more handoff points, not more finished tasks.

Worse, the finer the roles, the more often the same fact gets retold. The campaign date changes, and several Agents carry on working from the old brief; one Skill is updated, while others still reference the old process. So you have to set up a “manager Agent” to check on them. It looks like automated management; in fact, it's just the old communication cost moved to a new interface.

Cutting back first is how you make that cost visible. Pause the expansion of one Agent per person and one Skill per week, and use a single task to find the minimum setup that works; add more only when you hit a clear limit of capability or permission. **Fewer isn't the goal. Enough to deliver is.**

## How do you work out how many is enough?

First, step back from the org chart to one real question.

Say the person in charge asks every week: “How far along is the campaign? What risks are left? Who's handling what next week?”

The copy-the-org-chart approach: have several Agents play planner, operations, design and manager, ask each in turn, then have one Agent pull it together. If each role holds a different version of the campaign materials, you still end up verifying which account is the latest.

Starting from the task is simpler. First settle where the project is recorded, who maintains the latest status, what information your existing Agent can read, which sources its answer must cite, and which judgments the person in charge must sign off on. If it can answer, you don't need a new Agent for this question, for now. If it answers wrong, then look at whether the facts weren't updated, the permissions weren't granted, the method wasn't written clearly, or you really do need a different kind of execution capability.

Back to the formula: each of the three factors maps to one thing.

**Capability: give whoever does the work a method they can use.** The model can write a summary on its own, but it doesn't know your company's campaign process. Save the steps that recur often and have proven themselves as a Skill or work guide, with when it applies and the exceptions written out clearly. It's a method for getting work done, not a way to fill a “virtual role.”

**Authority: give whoever does the work access to the facts they need.** Project status, owners, dates, decisions and blockers need to be on record where they can be looked up, and opened up by role. Whether AI can answer depends on whether the relevant information has been recorded or connected, whether it's still current, and whether the AI has permission to read it. Connecting an Agent doesn't mean it automatically reads everyone's private chats and local files.

**Acceptance: give the result a clear exit.** A progress reply should at least point to its evidence, when it was last updated, what information is missing, and which risks are waiting for a person to confirm. The Agent can organize and draft; the business owner judges whether it's accurate. External commitments, changes to official records and going live are still approved by someone with the authority to do so.

Notice that none of the three is “number of Agents” or “number of Skills.” Complete this task with the tools you already have first, then see where the gaps are. Only when your existing Agent lacks the tool or permission for a necessary action should you consider adding another suitable Agent; only when a repeated step keeps needing a person to explain it should you consider writing it into a verified Skill. Depending on the work, you may end up with one Agent or several.

## When do you add Agents and Skills back?

When a task genuinely needs parallel work, different tools or permissions, or independent expert judgments, multiple Agents are very useful. For example, researching materials and checking data can run in parallel; the Agent that writes to official records can be limited to proposing changes, with review done by another person who is accountable.

Adding an Agent should answer “what different kind of work or boundary does it handle?”, not “which box on the org chart is still empty?”

Adding a Skill should first pass three checks too: Does this come up repeatedly? Can users say clearly when to trigger it, and can the Agent recognize when it applies? If someone else calls it, can it be completed and reviewed to the same standard? If the same process already exists in several versions, merge them first; if only the customer or campaign materials have changed, update the materials rather than copying out a new Skill.

If you can't answer these, hold off on giving it an impressive name. An “expert Skill” nobody can actually run is just one more document in the catalog that someone has to maintain.

## If this team were to try it, how would I start?

I wouldn't have the whole team change tools first, nor ask everyone to delete their existing Skills overnight. In the first week, pause additions made for the sake of numbers, and take stock: among similar Skills, which differ only in their materials, and which genuinely have different working methods? Then look at which ones people have found, actually called and used to finish a task. Where there's no record of calls, mark it unknown; don't treat the number uploaded as the usage rate. Then pick just one question the person in charge really does ask again and again, where the information is fairly clear, such as the weekly progress of a campaign.

First, have the business owner write down five fields: current status, next step, owner, deadline, risks. Gather the existing information into one authorized shared location, marking where each record comes from and who updates it. Conversations and files that need to be handled privately stay where they are; don't move everything in just because you want to use AI.

Next, pick one of your existing Agents and ask: “Based on this week's records, where is the campaign? Which items have no owner or are missing updates?” Have it produce a draft with sources, clearly marking “don't know” rather than turning gaps into conclusions.

Finally, the person in charge checks it once. If it keeps misreading statuses like “delayed” or “done,” that's when you write those recurring rules into a Skill; if the data itself isn't being updated by anyone, fix who is responsible for the records first, because adding more Skills won't help. And if the existing Agent can already do the reading and organizing, there's no reason to add a manager Agent just to round out the org chart.

What **counts as done** for this step? The same question, asked next week by another authorized colleague, still gets a traceable answer from the latest records; the person in charge only needs to check exceptions and make decisions, instead of collecting the basic facts from everyone again. If the pilot doesn't need a particular Agent or Skill, leave it out of this workflow for now; if you can't get there, record honestly which piece of information, which owner or which authorization was missing.

At handover, leave a very plain evidence pack: **the original question, the information gaps and their root causes, which records or guidelines were changed, the verification results from both rounds of questions, screen captures of it actually running, unresolved risks, and who signed off.** Without these, getting it right once in a demo doesn't make it usable.

## Where does Busabase fit in?

While we were talking, my friend also asked how Busabase relates to the Agent interfaces employees already use.

Busabase is a shared foundation for business information and work records, used by the team and by connected Agents. It can store structured business records, documents, files, Skills and prompts; Playbooks help the team find reusable methods, and permissions and change requests let the team decide who can read, who can propose and who can write directly. It doesn't require any employee to give up the Agent interface they already use.

For the person in charge, the first thing needed isn't “one Agent managing everyone” either. First, let existing Agents read the same trusted record within what they're authorized to see, and let people see what each answer is based on. Busabase Insights shows changes, proposals and contributions **recorded in this workspace**; it isn't real-time monitoring of employees' private AI activity.

If the information doesn't come in, nobody maintains it and permissions aren't set up properly, the foundation won't magically know how the company is doing. Conversely, once the team can work from one shared set of facts, switching between Agents no longer means starting every conversation from zero.

I won't promise “one platform plus one Agent replaces every role,” and I certainly won't have a team pour all its internal information in before I've looked at the workflows and permissions. “Cutting back first” doesn't mean laying people off or wiping existing assets either; it means no longer letting the number of Agents and Skills stand in for judging delivery. A product can provide the shared place; what is worth sharing, what must be kept separate and who is accountable for the results are still management decisions.

## Who is ultimately responsible?

I've been a CTO and have driven cross-department projects. The hardest part on the ground is usually not drawing up the roles; it's getting goals, information and acceptance to connect across different people. AI amplifies this: results come faster, but unclear handoffs are easier to hide.

If what the team lacks is someone to keep setting priorities, drive work across departments and sign off on results, CAIO Office keeps those management actions going: an outside Chief AI Officer team that works with you month by month, acting as your office for enterprise AI transformation and execution. If what's missing is shareable business records and methods, start by organizing your enterprise AI assets; Busabase can hold the information, Skills and change records among them. The exact setup still depends on the business problem, your existing tools and your permission requirements.

You can run a self-check right now. Find one piece of progress you personally chased last week. Without adding any Agents or Skills, just write down its information entry point, a method that can be carried out, read and edit permissions, the evidence of completion and who signs off. Whichever is missing, fill that in first.

**More Agents and Skills don't mean more delivery.**

**Draw one less org chart. Leave one more record someone can pick up.**

Bring that one real task and your existing records, and we'll work out how many Agents you need, which Skills, and whether Busabase is the right shared foundation for them.
