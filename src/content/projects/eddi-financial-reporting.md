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
---
Finance teams have the records they need in their enterprise resource planning (ERP) systems, but turning those records into meaningful reports takes work. In some districts, it takes a team of data analysts and SQL experts to organize the raw data, apply financial definitions, and produce reports people can use.

At Eddi, I designed an AI-assisted financial reporting experience that helped users build reports in minutes and inspect how the results were calculated. Working with the team, I helped take the product from concept to release in three months.

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/feature.webp" width="1780" height="883" alt="Budget vs. Actuals by Fund in Eddi, with Baseline and Scenario 1 tabs, assumption chips for COLA, Encumbrance and Spending Pace, a program table with variance against baseline, and the Eddi chat panel open on the right" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0"><strong>Budget vs. Actuals by Fund.</strong> A report built from ERP data, with scenario tabs, assumption chips and Eddi's chat alongside.</p>
  </div>
</div>

## Outcomes

Released in nine weeks, Eddi helps school districts turn financial data into budgets they can share with their communities. Finance teams can present different scenarios, make the assumptions behind them visible, and gather feedback to inform budget decisions.

Districts rely on data scientists and technical users to produce these reports. By streamlining that workflow, the feature will save finance teams hundreds of hours and give them more time to evaluate options and engage their communities.

## From understanding data to sharing decisions

Eddi helps school districts make sense of their data through AI. With existing integrations connecting their financial systems, districts could already ask questions and explore their data. Financial reporting extended that capability into tangible artifacts: budgets, reports, and scenario comparisons they could review and share.

Creating those artifacts traditionally required finance teams to translate account codes, combine datasets, and apply financial rules. In some districts, that work depended on data analysts and SQL experts. Exploring another scenario meant repeating parts of the process.

The opportunity was to turn Eddi's connected data into clear, reusable reports—giving districts a way to explain their budgets, present alternatives, and gather community feedback, with the calculations and assumptions visible.

## What we needed to get right

**Trust the numbers.** Make sources, calculations, and financial definitions inspectable.

**Control the assumptions.** Let users adjust scenarios and compare them against a protected baseline.

**Share the reasoning.** Keep assumptions and supporting context with the report so others can understand the options and give informed feedback.

## Our approach & challenges

### Learning from internal experts

I worked with our internal subject-matter experts to understand how district finance teams build, check, and share budgets. Those conversations focused the design on three concerns: trusting the numbers, controlling assumptions, and preserving the reasoning behind a report.

### Shaping the experience around the data

I held shaping sessions with SMEs and engineers to explore the experience alongside the underlying data model. I needed to understand which values came directly from datasets, which required joining tables, and where mappings or knowledge-base rules shaped the result. That meant getting into the details of nonprofit accounting so the interface could accurately explain how a report was constructed.

### Making financial knowledge explicit

I designed a simple knowledge base around core definitions and structured rules. Definitions explained concepts such as COLA; rules specified which ERP account codes mapped to expenses. Making that knowledge explicit gave report generation a shared foundation and gave users something concrete to inspect and correct.

### Early prototypes, built in Claude

I generated these prototypes in Claude to give the team something central to ideate around. Each one made an idea concrete enough to react to.

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/v1.webp" width="1518" height="498" loading="lazy" alt="Early prototype: a budget vs actual table with Data, Structure and Scenario menus" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0"><strong>First prototype.</strong> The table and three menus: Data, Structure and Scenario.</p>
  </div>
</div>

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/v3.webp" width="1524" height="582" loading="lazy" alt="Early prototype: data sources and the report as modules, with tags showing whether each part was imported, AI-generated, SQL-calculated or manual" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0"><strong>Second prototype.</strong> Data sources and the report as modules, with tags for where each part came from.</p>
  </div>
</div>

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/v5.webp" width="1488" height="1010" loading="lazy" alt="Early prototype: logic chips on each row showing its source and filter, and a model diagram showing which datasets feed each row and the fund total" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0"><strong>Third prototype.</strong> Logic chips on each row and a model diagram showing which datasets feed it.</p>
  </div>
</div>

## The solutions

#### Solution one

### With guided report building, finance teams describe the report they need and Eddi builds it from their ERP data.

Every district codes its accounts differently. When Eddi meets an object code it has not seen before, it can guess wrong, and a wrong guess quietly changes a total. The team asked themselves, how might we let Eddi do the heavy lifting while people stay in charge of what each code means?

Users ask for a certain kind of financial report, and Eddi generates it from their connected ERP data, using the definitions and mappings in the knowledge base. The report opens as an artifact with a Baseline tab, and programs roll up under their campus and fund.

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/report.webp" width="1990" height="986" loading="lazy" alt="Budget vs. Actuals by Fund in Eddi: a generated report with Baseline and Scenario 1 tabs, a program table grouped under fund and campus, and columns for revised budget, year-to-date activity, encumbered amount and variance" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Budget vs. Actuals by Fund, generated from a request. Programs roll up under their campus and fund, with revised budget, year-to-date activity, encumbered amount and variance for each, and the Baseline and Scenario tabs sit above the table.</p>
  </div>
</div>

#### Solution two

### Refine mode shows how any number in a report was made, so finance teams can check it before they share it.

Finance leaders answer for every figure in a budget, and most of them do not write SQL. The people who know budgets best need to be able to check the numbers themselves. The team asked themselves, how might we make a calculation understandable at a glance, and make fixing the source straightforward?

Refine mode opens with a plain instruction: click any value to see how it was calculated and correct its source. Selecting a value opens a popover that confirms what was clicked and explains it as a sentence: the sum of a field, from a dataset, where the filters apply. View SQL shows the underlying query, Modify changes the calculation, and Edit mapping corrects how the source maps.

Whether the numbers were accurate was one of the key measures of success for the feature. An AI-built prototype explored the interaction first, and the product ships a simplified version of it.

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/refine.webp" width="2000" height="1021" loading="lazy" alt="Refine mode in Eddi: a banner reads Click any value to see how it was calculated and correct its source, and a popover on a campus revised budget explains it as a sum of 2026-27 Revised Budget from Financial QA Monthly Activity where fund, location and type match, with View SQL, Modify and Edit mapping actions" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Refine mode on the live report. Selecting a value opens a popover that says what was clicked and explains it as a sentence: the sum of 2026-27 Revised Budget, from Financial QA Monthly Activity, where the fund, location and type match. View SQL, Modify and Edit mapping sit at the bottom.</p>
  </div>
</div>

#### Solution three

### With scenario planning, finance teams model different financial conditions and see the impact on the budget.

Budget conversations rarely stop at one number. Boards ask what happens if enrollment drops or a raise goes through, and each question used to mean repeating parts of the process. The team asked themselves, how might we let people model different financial conditions and see the impact on the budget right away, while the real budget stays safe?

In the first design, Eddi suggested appropriate variables and the controls lived in the chat. As the conversation continued, people had to track them vertically. I moved the variables into the interface, below the scenario tab, so users can adjust them directly and watch the data respond.

Each variable opens a control with its baseline, an exact value and a slider, plus a way to reset to baseline or remove it. Scenarios sit in tabs beside a protected baseline, and every row shows its variance against baseline.

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/scenario.webp" width="2000" height="1019" loading="lazy" alt="Eddi scenario planning: a Scenario 1 tab with assumption chips for COLA, Encumbrance and Spending Pace, and a popover on COLA with a baseline of 3.5 percent, a value field, a slider, Reset to baseline and Remove, above a table showing variance against baseline" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0"><strong>Scenario planning in the product.</strong> Assumptions sit below the scenario tab as chips. Opening one shows its baseline, an exact value and a slider, with Reset to baseline and Remove. Variance against baseline appears on every row.</p>
  </div>
</div>

#### Solution four

### Formatting controls let finance teams shape a report for the way it will be read.

A board packet, a working review and a public budget do not read the same way. The team asked themselves, how might we let people tune how a report looks without rebuilding it?

Users can format the report for density, zebra striping, currency format, and how negatives are represented, among other options. Formatting changes how a report looks, and the calculations stay the same.

#### Solution five

### With chat, finance teams can ask questions of their data and glean insights, without building a report first.

Not every question needs a report. Sometimes a finance lead only wants a quick answer. The team asked themselves, how might we make the data that powers reports available as a conversation too?

Users chat with their connected data and get insights back in plain language. The same data powers both, so a quick answer can grow into a report when someone is ready to share it.

The team designed the information hierarchy of each answer so the main point comes first, then ran a simplification pass with AI to cut what a reader does not need.

<div class="cs-featured">
  <img src="/images/eddi-financial-reporting/chat.webp" width="2000" height="1057" loading="lazy" alt="Budget vs. Actuals by Fund beside the Ask Eddi panel, where an answer titled Top Spending Categories by Fund ranks five funds by revised budget in a table and lists key takeaways" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">An answer in the Ask Eddi panel, beside the report it draws on: a headline, a one-line framing, a ranked table of the five funds by revised budget, and key takeaways.</p>
  </div>
</div>

## Impact

### Business impact

Customers describe creating artifacts as a pain point, and this feature answers it directly. It is helping close deals, and it is already in use in beta in Washington state.

Districts there will use the export to HTML feature to publish budgets and budget scenarios to their websites for public commentary. The reports leave Eddi and reach the community they were built for.

### Feedback & iteration

The feature is released and already saving customers time. It's early days, and we're refining it as more districts use it.

The next round of improvements focuses on review. Refine mode opens by default after a report is generated, so people can spot-check and approve mappings, confirm the calculations are correct, and see what AI flagged for review. A review indicator shows how many items need review and opens the review panel. Knowledge layer integration comes with it.

### What's next

We're building on it with additional budgeting workflows.
