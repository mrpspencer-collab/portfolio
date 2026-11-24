---
title: Ask Your Spreadsheet
subtitle: A free course for getting answers you can check from your own spreadsheet
tags:
  - AI / ML
  - Education
  - '2026'
role: Research, Design, Prototyping
thumb: '/images/ask-your-spreadsheet/hero.webp'
thumbBg: '#00463C'
thumbFit: cover
heroThumb: false
metrics: []
cta: See the course
order: 1
kind: project
---
<div class="cs-simple">

<div class="cs-lead">
<p>Small organizations often keep their most important data in one spreadsheet, and more of them are asking AI to read it. Claude will answer, and the answer sounds just as sure when it's wrong. I made a free course, a practice workbook and a Claude skill that teach people how to get answers they can check.</p>
<p><a href="/projects/ask-your-spreadsheet/course/" class="btn btn-primary btn-md">Take the course</a> <a href="/projects/ask-your-spreadsheet/riverbend-practice-workbook.xlsx" class="btn btn-outline btn-md" download>Practice workbook</a> <a href="/projects/ask-your-spreadsheet/ask-your-spreadsheet.zip" class="btn btn-outline btn-md" download>Claude skill</a></p>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/hero.webp" width="1780" height="744" alt="The course's opening screen: the question How many members are active?, answered About 45 members are active without the habits and 18 members are active with them, followed by what was counted, left out and checked" /><figcaption>The course's first screen: the same question with and without the habits.</figcaption></figure>
</div>

<section class="cs-split-section">
<h2 class="cs-label">The problem</h2>
<div>
<p class="cs-small">You can upload a spreadsheet to Claude and ask it a question today. You get a number back, but nothing that shows how it was worked out.</p>
<p class="cs-small">In the practice data I made for the course, "How many members are active?" has three right answers, depending on what "active" means: 45 if it means came to an event this year, 17 if it means paid this calendar year, and 18 if it means paid in the last 12 months. A plain answer gives one of those numbers and doesn't say which definition it used.</p>
<p class="cs-small">Real spreadsheets add their own problems. A title row sits above the headers, a TOTAL row is mixed in with the data, "Monthly" is spelled three ways, and everyone's name and email is right there to be pasted into a chat.</p>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">What we needed to get right</h2>
<div class="cs-cards">
<div class="cs-card"><h3>No technical skills</h3><p>Everything works on the spreadsheet people already keep and the Claude they already use.</p></div>
<div class="cs-card"><h3>Show the difference</h3><p>Each lesson asks the same question twice, once without the habit and once with it.</p></div>
<div class="cs-card"><h3>Answers you can check</h3><p>An answer should say what was counted, what was left out and which columns it used.</p></div>
</div>
</section>

<section class="cs-split-section">
<h2 class="cs-label">How I approached it</h2>
<div>
<p class="cs-small">This came out of a framework I've been working on since IXIS and Eddi. AI agents, BI tools and personal knowledge systems are made of the same parts: data sources, definitions, access rules, a way to trace each answer, and checks against answers you already know. A company buys or builds all of them, but someone with one spreadsheet only needs a few.</p>
<p class="cs-small">I wrote one habit for each problem above. There are seven: remove personal details, tidy the sheet, write down definitions, ask a specific question, ask how the answer was calculated, check it against answers you already know, and save the rules for next time.</p>
<p class="cs-small">I built the course, workbook and skill with Claude. The workbook's known answers are calculated by spreadsheet formulas, and I checked them a second way in code. I tested the course page on phone and desktop, in light and dark mode.</p>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">What I built</h2>
<div class="cs-features">

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">01</span>
<h3>The course</h3>
<p class="cs-small">Seven lessons, one habit each. Each lesson answers the same question without the habit and with it, then gives a prompt to try on the practice file. It ends with a one-page checklist and a short quiz.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/define.webp" width="1780" height="396" loading="lazy" alt="Lesson 3, Write your definitions: without it, the question gets 45, 17 or 18 depending on the guess; with it, a Definitions tab gives one rule every answer uses" /><figcaption>Lesson 3. The same word gives three different answers until it's defined.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">02</span>
<h3>The practice workbook</h3>
<p class="cs-small">Sixty made-up members of a makerspace. It has a messy tab like a real spreadsheet, a cleaned-up copy, a tab of definitions, and a tab of questions with known answers, so people can test Claude before they trust it.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/check.webp" width="1780" height="443" loading="lazy" alt="Lesson 6, Check known answers first: without it, a wrong total reaches the board; with it, four known answers from the Checks tab are confirmed first" /><figcaption>Lesson 6 uses the workbook's Checks tab.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">03</span>
<h3>The helper skill</h3>
<p class="cs-small">A file you upload to Claude once. After that, when you share a spreadsheet, Claude points out personal details, lists problems with the sheet, asks before guessing what a word means, and shows how it calculated each answer.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/trace.webp" width="1780" height="347" loading="lazy" alt="Lesson 5, Ask for the trace: without it, a bare number; with it, the answer plus what was counted, what was left out, the source and how it was calculated" /><figcaption>Lesson 5 shows what a traced answer includes. The skill answers this way.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">04</span>
<h3>Who it's for</h3>
<p class="cs-small">I wrote out how five people might use it: someone running a cleaning or landscaping business, an artist selling linocut cards, an eBay reseller, a registered dietitian, and someone collecting public data every day to chart it. Each one gets their own questions, definitions, privacy rules and a first check.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/uses.webp" width="1780" height="1260" loading="lazy" alt="Four use cases side by side: a cleaning or landscaping company, a linocut card artist, an eBay reseller and a registered dietitian, each with questions to ask, terms to define, what to protect and a first check" /><figcaption>Four of the five examples.</figcaption></figure>
</article>

</div>
</section>

<section class="cs-split-section cs-panel">
<h2 class="cs-label">Impact</h2>
<div>
<p class="cs-statement">It's new, and nobody but me has used it yet.</p>
<p class="cs-small">For now it's a worked example of the approach: the same framework I'd use for a larger data system, scaled down to one spreadsheet, with each piece tested end to end.</p>
<div class="cs-panel-next">
<h3>What's next</h3>
<p class="cs-small">I want to try it with a few small organizations, probably nonprofits and service businesses first, and see where people get stuck. After that: keeping the rules the same from month to month, and connecting more than one source.</p>
</div>
</div>
</section>

</div>
