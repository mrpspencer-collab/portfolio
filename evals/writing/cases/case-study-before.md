<div class="cs-simple">

<div class="cs-lead">
<p>Most small organizations don't have a data problem. They have one good spreadsheet and a few questions they keep asking it. AI can now read that spreadsheet, but a confident answer isn't a correct one. I designed a free, self-paced course, a practice workbook and a Claude skill that teach seven habits for getting answers people can check.</p>
<p><a href="/projects/ask-your-spreadsheet/course/" class="btn btn-primary btn-md">Take the course</a> <a href="/projects/ask-your-spreadsheet/riverbend-practice-workbook.xlsx" class="btn btn-outline btn-md" download>Practice workbook</a> <a href="/projects/ask-your-spreadsheet/ask-your-spreadsheet.zip" class="btn btn-outline btn-md" download>Claude skill</a></p>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/hero.webp" width="1780" height="744" alt="The course's opening screen: the question How many members are active?, answered About 45 members are active without the habits and 18 members are active with them, followed by what was counted, left out and checked" /><figcaption>The course opens with the same question answered twice: a guess, then an answer with its trace.</figcaption></figure>
</div>

<section class="cs-split-section">
<h2 class="cs-label">The problem</h2>
<div>
<p class="cs-small">Pointing Claude at a spreadsheet and asking a question already works. The trouble is that it works too smoothly. Ask "How many members are active?" and you get a number, said with confidence, with nothing to show how it was made.</p>
<p class="cs-small">In the practice data I built for the course, that one question has three reasonable answers: 45 if "active" means attended an event this year, 17 if it means paid this calendar year, and 18 if it means paid in the last 12 months. All three are defensible. Only one is what the organization means, and nothing in the answer says which one it used.</p>
<p class="cs-small">The same gaps show up every time: messy sheets with totals counted as data, words nobody has defined, no way to check the number, and names and emails pasted into a chat without a second thought.</p>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">What we needed to get right</h2>
<div class="cs-cards">
<div class="cs-card"><h3>No technical skills</h3><p>Everything works on the spreadsheet people already keep and the Claude they already use.</p></div>
<div class="cs-card"><h3>Show the difference</h3><p>Every habit is taught by answering the same question twice, without it and with it.</p></div>
<div class="cs-card"><h3>Answers you can check</h3><p>Each answer shows what was counted, what was left out and where it came from.</p></div>
</div>
</section>

<section class="cs-split-section">
<h2 class="cs-label">How I approached it</h2>
<div>
<p class="cs-small">I started from a framework I'd been sketching since my work on BI platforms at IXIS and Eddi: AI agents, data intelligence layers and second brains are built from the same parts, such as data sources, a dictionary of what words mean, access rules, a trace for every answer and checks against known answers. A large organization buys or builds all of them. Someone with one spreadsheet needs only a few, done well.</p>
<p class="cs-small">So I treated the spreadsheet as step one of a ladder, and turned each failure point into a habit: protect people, shape the sheet, write your definitions, ask a sharp question, ask for the trace, check known answers first, and save the rules for next time.</p>
<p class="cs-small">I built everything with Claude. The practice workbook has made-up data for a community makerspace, with a messy tab, a clean tab, a Definitions tab and a Checks tab whose known answers are calculated by formulas and verified a second way. I tested the course page at phone and desktop sizes, in light and dark mode.</p>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">What I built</h2>
<div class="cs-features">

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">01</span>
<h3>The course</h3>
<p class="cs-small">Seven short lessons, one habit each. Every lesson shows the same question without and with the habit, gives a prompt to try on the practice file, and ends with one line to remember. A progress bar, a quick-start card and a four-question self-check round it out.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/define.webp" width="1780" height="396" loading="lazy" alt="Lesson 3, Write your definitions: without it, the question gets 45, 17 or 18 depending on the guess; with it, a Definitions tab gives one rule every answer uses" /><figcaption>Lesson 3: one word, three defensible answers, until the definition is written down.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">02</span>
<h3>The practice workbook</h3>
<p class="cs-small">Sixty made-up members of a community makerspace, no real people. The messy tab shows how real spreadsheets look; the Checks tab holds questions with known answers, so learners can test Claude before trusting it.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/check.webp" width="1780" height="443" loading="lazy" alt="Lesson 6, Check known answers first: without it, a wrong total reaches the board; with it, four known answers from the Checks tab are confirmed first" /><figcaption>Lesson 6 uses the workbook's Checks tab: confirm four known answers before asking anything new.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">03</span>
<h3>The helper skill</h3>
<p class="cs-small">A skill anyone can upload to Claude. Whenever someone shares a spreadsheet, Claude follows the seven habits by itself: it flags personal details, lists what's wrong with the sheet, asks before guessing a definition, and answers with a trace.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/trace.webp" width="1780" height="347" loading="lazy" alt="Lesson 5, Ask for the trace: without it, a bare number; with it, the answer plus what was counted, what was left out, the source and how it was calculated" /><figcaption>The trace the skill produces, as taught in lesson 5.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">04</span>
<h3>Who it's for</h3>
<p class="cs-small">The same seven habits work for very different people: a small service business, an artist selling linocut cards, an eBay reseller, a registered dietitian, and someone building a daily chart from public data. For each, the questions worth asking, the words to define, what to protect and one answer to check first.</p>
</div>
<figure class="cs-figure cs-wide"><img src="/images/ask-your-spreadsheet/uses.webp" width="1780" height="1260" loading="lazy" alt="Four use cases side by side: a cleaning or landscaping company, a linocut card artist, an eBay reseller and a registered dietitian, each with questions to ask, terms to define, what to protect and a first check" /><figcaption>Four of the five use cases, each with its questions, definitions, privacy rule and first check.</figcaption></figure>
</article>

</div>
</section>

<section class="cs-split-section cs-panel">
<h2 class="cs-label">Impact</h2>
<div>
<p class="cs-statement">One spreadsheet and seven habits are enough to turn AI answers from guesses into numbers people can check.</p>
<p class="cs-small">The kit is new and hasn't been tested with learners yet, so there are no results to report. What it shows today is the method: the same framework I'd use for a full data system, scaled down to the smallest useful case, with every piece working end to end.</p>
<div class="cs-panel-next">
<h3>What's next</h3>
<p class="cs-small">Testing the course with a few small organizations, starting with nonprofits and small service businesses, and watching where people get stuck. Then the next two rungs of the ladder: making the rules repeatable from month to month, and a small system that joins several sources.</p>
</div>
</div>
</section>

</div>
