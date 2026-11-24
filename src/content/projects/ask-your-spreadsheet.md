---
title: Ask Your Spreadsheet
subtitle: Get answers from your spreadsheet
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
<p>Small organizations often keep their most important data in spreadsheets, and more of them are asking AI to read it.</p>
<p>There are levels to doing this. At the most basic, you upload the spreadsheet to ChatGPT or Claude, ask a question and hope the answer is right. You've probably seen an AI answer that sounded convincing and turned out to be wrong.</p>
<p>This course is the next level. It teaches seven habits for getting answers you can check, using the AI you already have, and comes with a practice workbook and a Claude skill.</p>
<p><a href="/projects/ask-your-spreadsheet/course/" class="btn btn-outline btn-md">Take the course</a> <a href="/projects/ask-your-spreadsheet/riverbend-practice-workbook.xlsx" class="btn btn-outline btn-md" download>Practice workbook</a> <a href="/projects/ask-your-spreadsheet/ask-your-spreadsheet.zip" class="btn btn-outline btn-md" download>Claude skill</a></p>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/hero.webp" width="1780" height="744" alt="The course's opening screen: the question How many members are active?, answered About 45 members are active without the habits and 18 members are active with them, followed by what was counted, left out and checked" /><figcaption>The course's first screen: the same question with and without the habits.</figcaption></figure>
</div>

<section class="cs-split-section">
<h2 class="cs-label">The problem</h2>
<div>
<p class="cs-small">You can upload a spreadsheet to Claude and ask it a question today. You'll get an answer, but nothing that shows how it was worked out.</p>
<p class="cs-small">This short course shows how a few adjustments, in how you prepare the sheet and how you ask, can make the difference between an answer you can check and a guess.</p>
</div>
</section>

<section class="cs-split-section">
<h2 class="cs-label">How I approached it</h2>
<div>
<p class="cs-small">This came out of a framework I've been working on since IXIS and Eddi. AI agents, BI tools and personal knowledge systems are made of the same parts: data sources, definitions, access rules, a way to trace each answer, and checks against answers you already know. A company has to buy or build every part. Someone with one spreadsheet can start with a few of them, done by hand.</p>
<p class="cs-small">I turned those parts into seven habits someone can do in a chat window. Remove personal details before uploading. Tidy the sheet. Write down what your words mean. Ask a specific question. Ask how the answer was calculated. Check it against answers you already know. Save the rules so you don't start over next month.</p>
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
<p class="cs-small">I wrote out how five people might use it: someone running a cleaning or landscaping business, an artist selling linocut cards, an eBay reseller, a registered dietitian, and someone collecting public data every day to chart it. For each, I listed the questions they'd ask, the words they'd need to define, what they shouldn't upload and the first check to run.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/uses.webp" width="1780" height="1260" loading="lazy" alt="Four use cases side by side: a cleaning or landscaping company, a linocut card artist, an eBay reseller and a registered dietitian, each with questions to ask, terms to define, what to protect and a first check" /><figcaption>Four of the five examples.</figcaption></figure>
</article>

</div>
</section>

<section class="cs-split-section cs-panel">
<h2 class="cs-label">Impact</h2>
<div>
<p class="cs-statement">It's new, and nobody but me has used it yet.</p>
<p class="cs-small">For now it shows how I'd approach a larger data system, at the size of one spreadsheet. The numbers in the workbook are checked. Whether the lessons work for someone else is still an open question.</p>
<div class="cs-panel-next">
<h3>What's next</h3>
<p class="cs-small">I want to try it with a few small organizations, probably nonprofits and service businesses first, and see where people get stuck. After that I'd look at keeping the rules consistent from month to month and at pulling from more than one source.</p>
</div>
</div>
</section>

</div>
