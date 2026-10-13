---
title: Eddi Financial Reporting
subtitle: Turning ERP data into financial reports people can trust
tags:
  - AI / ML
  - Enterprise
  - '2026'
thumb: '/images/eddi-financial-reporting/feature.webp'
thumbBg: '#FFFFFF'
heroThumb: false
metrics: []
cta: Read Case Study
order: 2
password: true
---
<div class="cs-simple">

<div class="cs-lead">
<p>School districts keep their books in an enterprise resource planning (ERP) system: what they pay, what they're owed and what they've budgeted. Turning those records into a report people can use often takes data analysts and SQL experts. I designed an AI-assisted reporting experience in Eddi that builds a report in minutes and shows how every number was calculated. Working with the team, we took it from concept to release in three months.</p>
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/feature.webp" width="1780" height="883" alt="Budget vs. Actuals by Fund in Eddi, with Baseline and Scenario 1 tabs, assumption chips for COLA, Encumbrance and Spending Pace, a program table with variance against baseline, and the Eddi chat panel open on the right" /><figcaption>Budget vs. Actuals by Fund, built from ERP data, with scenario tabs, assumption chips and Eddi's chat alongside.</figcaption></figure>
</div>

<section class="cs-split-section">
<h2 class="cs-label">The problem</h2>
<div>
<p class="cs-statement">Districts could already ask Eddi about their financial data. What they couldn't easily do was produce something to share.</p>
<p class="cs-small">A budget, a report or a scenario comparison meant translating account codes, combining datasets and applying financial rules, then repeating much of it for every new scenario. The opportunity was to turn Eddi's connected data into reports districts could use to explain their budgets and gather community feedback, with the calculations and assumptions in view.</p>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">What we needed to get right</h2>
<div class="cs-cards">
<div class="cs-card"><h3>Trust the numbers</h3><p>Anyone can see where each number came from and how it was worked out.</p></div>
<div class="cs-card"><h3>Try different scenarios</h3><p>Change things like enrollment or raises and compare the result to the original budget, which stays untouched.</p></div>
<div class="cs-card"><h3>Show the thinking</h3><p>Keep those choices with the report, so others can see why it says what it says and give useful feedback.</p></div>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">How I approached it</h2>
<ol class="cs-steps">
<li><span class="cs-step-num">01</span><p><strong>Learned from experts.</strong> Our internal SMEs walked me through how district finance teams build, check and share budgets.</p></li>
<li><span class="cs-step-num">02</span><p><strong>Designed around the data.</strong> In shaping sessions with SMEs and engineers, I learned which values come straight from datasets, which need joins, and where mappings and rules shape the result.</p></li>
<li><span class="cs-step-num">03</span><p><strong>Made financial knowledge explicit.</strong> A simple knowledge base of definitions, like COLA, and rules, like which account codes map to expenses, gave reports a shared foundation people can inspect and correct.</p></li>
<li><span class="cs-step-num">04</span><p><strong>Prototyped in Claude.</strong> Quick prototypes gave the team something concrete to react to, and a later one walked through the whole flow from mapping codes to modeling a scenario.</p></li>
</ol>
<div class="cs-trio">
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/v1.webp" width="1518" height="498" loading="lazy" alt="Early prototype: a budget vs actual table with Data, Structure and Scenario menus" /><figcaption>First: a table with Data, Structure and Scenario menus.</figcaption></figure>
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/v3.webp" width="1524" height="582" loading="lazy" alt="Early prototype: data sources and the report as modules, with tags showing where each part came from" /><figcaption>Second: the report as modules, tagged by where each part came from.</figcaption></figure>
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/v5.webp" width="1488" height="1010" loading="lazy" alt="Early prototype: logic chips on each row and a model diagram showing which datasets feed each row" /><figcaption>Third: logic chips on each row and a model diagram of its datasets.</figcaption></figure>
</div>
</section>

<section class="cs-stack">
<h2 class="cs-label">What we built</h2>
<div class="cs-features">

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">01</span>
<h3>Guided report building</h3>
<p class="cs-small">Finance teams describe the report they need and Eddi builds it from their ERP data. Every district codes its accounts differently, and a wrong guess quietly changes a total. So when Eddi meets a code it hasn't seen, it suggests where it belongs and waits for a person to confirm.</p>
</div>
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/report.webp" width="1990" height="986" loading="lazy" alt="Budget vs. Actuals by Fund in Eddi: a generated report with Baseline and Scenario 1 tabs and a program table grouped under fund and campus" /><figcaption>A generated report, with programs rolled up under campus and fund.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">02</span>
<h3>Refine mode</h3>
<p class="cs-small">Finance leaders answer for every figure, and most don't write SQL. In Refine mode, clicking any value explains it as a sentence: the sum of a field, from a dataset, with its filters. View SQL, Modify and Edit mapping let people correct the source. Accuracy was a key measure of success. An AI-built prototype explored the interaction, and the product ships a simpler version.</p>
</div>
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/refine.webp" width="2000" height="1021" loading="lazy" alt="Refine mode in Eddi: a popover on a campus revised budget explains it as a sum from a dataset where fund, location and type match, with View SQL, Modify and Edit mapping actions" /><figcaption>A value explained in plain language, with ways to fix its source.</figcaption></figure>
</article>

<article class="cs-feature">
<div class="cs-feature-text">
<span class="cs-num">03</span>
<h3>Scenario planning</h3>
<p class="cs-small">Boards ask what happens if enrollment drops or a raise goes through. In the first design, the variables lived in the chat and scrolled away as the conversation grew. I moved them into the interface as chips under the scenario tab, each with a baseline, an exact value and a slider. Scenarios sit beside a protected baseline, with variance on every row.</p>
</div>
<figure class="cs-figure"><img src="/images/eddi-financial-reporting/scenario.webp" width="2000" height="1019" loading="lazy" alt="Eddi scenario planning: assumption chips for COLA, Encumbrance and Spending Pace, and a popover on COLA with a baseline, a value field and a slider, above a table showing variance against baseline" /><figcaption>Assumption chips below the scenario tab, with variance against baseline.</figcaption></figure>
</article>

<div class="cs-feature-pair">
<div>
<span class="cs-num">04</span>
<h3>Formatting</h3>
<p class="cs-small">A board packet, a working review and a public budget read differently. Density, striping, currency and negative formats change how a report looks without touching the calculations.</p>
</div>
<div>
<span class="cs-num">05</span>
<h3>Chat</h3>
<p class="cs-small">Not every question needs a report. The same data answers quick questions in plain language, main point first, and an answer can grow into a report when it's ready to share.</p>
</div>
</div>

</div>
</section>

<section class="cs-split-section cs-panel">
<h2 class="cs-label">Impact</h2>
<div>
<p class="cs-statement">Customers named building reports as a pain point. This answers it directly, and it's helping close deals.</p>
<p class="cs-small">The feature is released and already saving customers time. Districts rely on data scientists and technical users to produce these reports, and streamlining that work will save finance teams hundreds of hours. In Washington state, districts will export budgets and scenarios to HTML and publish them on their websites for public comment, so the reports reach the community they were built for.</p>
<div class="cs-panel-next">
<h3>What's next</h3>
<p class="cs-small">It's early days, and we're building on it with additional budgeting workflows. The next round focuses on review: Refine mode will open by default after a report is generated, with an indicator showing what Eddi flagged for a person to check.</p>
</div>
</div>
</section>

</div>
