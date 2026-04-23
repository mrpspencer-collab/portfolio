---
title: Atlas
subtitle: From Pull to Push
role: UX & Product Strategy
tags:
  - AI / ML
  - Product Strategy
  - '2025'
status: Shipping
thumb: 'https://staging4.paulamsbary.com/wp-content/uploads/2026/04/Macbook-Pro-Light-Background-1.png'
thumbBg: '#1A1713'
thumbText: Atlas
thumbTextColor: '#5A5550'
metrics: []
cta: Explore the case study
order: 1
---

Same data. One requires interpretation. The other can be read.

## The Hypothesis

<div class="cs-split">
  <div class="cs-split-body">
    <p>Atlas began with a straightforward concept: consolidate multiple data sources, create visually appealing dashboards with fast performance, and operator engagement would follow naturally.</p>
    <p>This proved partially valid. Data-sophisticated users — OEM executives and performance analysts — benefited from consolidated reporting. But day-to-day dealership operators displayed far less enthusiasm for charts. They wanted actionable insights, not data to interpret.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/Macbook-Pro-Light-Background-1.png" alt="Atlas dashboard alongside plain-language insight report" /><figcaption>Dense dashboard on desktop alongside plain-language insight report on mobile</figcaption></figure>
  </div>
</div>

## Three Personas. One Platform.

Post-launch findings revealed consultants rather than intended dealers comprised primary platform usage. Consultants conducted monthly dealer meetings reviewing reports and explaining data implications. Operators avoided independent platform usage despite making daily decisions where data would provide value.

<div class="cs-columns">
  <div>
    <p class="cs-col-label">OEM Stakeholders</p>
    <ul>
      <li>Data fluent</li>
      <li>Regular platform users</li>
      <li>Dashboard-native</li>
      <li>The product works for them as built</li>
    </ul>
  </div>
  <div>
    <p class="cs-col-label">Performance Consultants</p>
    <ul>
      <li>Read dashboards, translate data</li>
      <li>Deliver recommendations to dealers monthly</li>
      <li>The human translation layer</li>
    </ul>
  </div>
</div>

<div class="cs-featured">
  <div class="cs-featured-body">
    <p style="font-size:15px;color:var(--fg);margin:0 0 8px"><strong>Dealership Operators — the gap</strong></p>
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Running a business daily. Real questions about real performance. Responsible for the most seats. Getting the least value.</p>
  </div>
</div>

**Design prompt:** How might we deliver the same insights as a consultant on a recurring basis, without the data literacy the platform demands?

## Jobs to be Done

<div class="cs-columns">
  <div>
    <p class="cs-col-label">Dealer Operator</p>
    <ul>
      <li>"Help me sell more cars and spend less getting there."</li>
    </ul>
    <p class="cs-col-label" style="margin-top:20px">Performance Consultant</p>
    <ul>
      <li>"Give me insights that make me look like a hero to my dealers."</li>
    </ul>
  </div>
  <div>
    <p class="cs-col-label">OEM Stakeholder</p>
    <ul>
      <li>"Show me what's working across the network so I can move dealers forward."</li>
    </ul>
    <p class="cs-col-label" style="margin-top:20px">The Shared Job</p>
    <ul>
      <li>"Sell more cars. Spend less. Understand why."</li>
    </ul>
  </div>
</div>

## The Design Problem

For many operators, engaging with data parallels joining a fitness facility — everyone recognizes its benefits, yet few maintain commitment until developing sufficient competence to experience advantages. When dealers attempted Atlas usage, they encountered a system demanding data literacy they hadn't yet acquired. Internal analytics indicated most dealers completed single login sessions without returning.

> "…we wanna teach the dealers 'how to fish'… so they're not just relying on us once a month, but they're engaging with their data more frequently…" — Audi MRC

## Opportunity Mapping

<div class="cs-split">
  <div class="cs-split-body">
    <p>Collaborative workshops across product, data analysis, design, and executive teams clarified research findings and identified five key thematic areas — distinguishing commercial challenges from user-centered problems.</p>
    <p>One area stood out: <strong>Deliver</strong>. Insights were stopping at the consultant. Dealers never received them independently, and no amount of dashboard improvement would fix a distribution problem.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-18-at-1.30.39-PM-scaled.png" alt="Opportunity mapping workshop" /><figcaption>Opportunity mapping workshop — five thematic areas</figcaption></figure>
  </div>
</div>

<div class="cs-columns">
  <div>
    <p class="cs-col-label">Theme → Bet</p>
    <ul>
      <li><strong>Discover</strong> — Unify exploration into a single workspace</li>
      <li><strong>Create</strong> — Proactive AI guidance during analysis</li>
      <li><strong>Scale</strong> — Turn past analysis into reusable context</li>
    </ul>
  </div>
  <div>
    <p class="cs-col-label">&nbsp;</p>
    <ul>
      <li><strong>Deliver ★</strong> — Plain-language summaries pushed to dealers</li>
      <li><strong>Foundations</strong> — Integration, adaptive UX for broad adoption</li>
    </ul>
  </div>
</div>

## Story Mapping

<div class="cs-split">
  <div class="cs-split-body">
    <p>Collaborative sessions with product, data analysis, and field teams converged on one direction: stop trying to bring dealers to Atlas. Years of platform development had produced low dealership session frequency with no improvement trajectory.</p>
    <p>To secure leadership support, a workflow storyboard followed Jennifer — a performance consultant — through her existing process and how a push-based approach would change it. Late-night prep and monthly insight delivery became same-day action on emerging concerns.</p>
    <p>The storyboard clarified that the core challenge wasn't simplifying dashboards. It was transforming when and how insights reached decision-makers.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-18-at-4.37.52-PM.png" alt="Storyboard — push-based insight delivery" /><figcaption>Storyboard — mapping Jennifer's workflow before and after</figcaption></figure>
  </div>
</div>

## Atlas Analyze

Analyze was the first product shipped from this direction. Months of exploring RAG-based methodologies had produced limited demonstrable outcomes. After defining the core problem clearly, Analyze launched within weeks.

The team implemented it within the existing system as an MVP. Mobile was the ultimate destination, but initial validation used the simplest feasible interaction — a single control generating plain-language summaries of dashboard activity across user accounts.

Output required trustworthiness, not generic templates. A context layer trained on automotive retail captured relevant metrics, meaningful benchmarks, and consultant terminology. The summary communicated what shifted, what warranted attention, and recommended next moves.

### Design Process

<div class="cs-split">
  <div class="cs-split-body">
    <p><strong>Why a sidebar:</strong> Operators are already looking at their data. A sidebar brings the insight to where attention already is — no context switch, no new screen to learn.</p>
    <p><strong>Why one button:</strong> The interaction had to be simple enough that a dealer who logged in once would try it. Complexity was the enemy of the first win.</p>
    <p><strong>Why plain language:</strong> The output mirrors what a consultant says in a meeting — not what a dashboard shows. Observation, context, action. No data literacy required.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/wire-scaled.png" alt="Sidebar concept wireframe" /><figcaption>Sidebar concept — where to place intelligence without disrupting the workflow</figcaption></figure>
  </div>
</div>

<div class="cs-split">
  <div class="cs-split-body">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/layout.png" alt="Early redlines — sidebar proportions" /><figcaption>Early redlines exploring sidebar proportions and content hierarchy</figcaption></figure>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/implementation-1-scaled.png" alt="Analyze as a sidebar in the live platform" /><figcaption>Implementation — Analyze as a sidebar inside the live platform</figcaption></figure>
  </div>
</div>

### Final Design

<div class="cs-featured">
  <img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/analyze-assistant.png" alt="Analyze in production" />
  <div class="cs-featured-body">
    <ul>
      <li>Single control — one button, plain-language output</li>
      <li>Context layer trained on automotive retail benchmarks</li>
      <li>Sidebar placement — insight arrives without leaving the dashboard</li>
      <li>Consultant-quality language — observation, context, action</li>
      <li>No data literacy required</li>
      <li>MVP shipped within weeks of problem definition</li>
    </ul>
  </div>
</div>

## Impact

Analyze transformed operator engagement with Atlas. Monthly usage increased progressively as operators began acting on insights without requiring dashboard navigation. Consultants noted resolution of the blank canvas obstacle. At NADA, prospective buyers immediately grasped the offering's significance.

This also substantiated a deeper strategic principle. The most valuable contribution wasn't better dashboards — it was something resembling a text notification. A plain-language alert, at the right moment, on the device operators already used.

<div class="cs-featured">
  <div class="cs-featured-body">
    <p style="font-size:14px;color:var(--fg);margin:0 0 8px;font-weight:600">The competitive advantage isn't the summary. It's the context.</p>
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Fifteen years of automotive consulting informed how signals are interpreted, benchmarks applied, and recommendations framed. That contextual foundation resists straightforward replication — and separates meaningful summaries from generic LLM output.</p>
  </div>
</div>

Summarization is table stakes. Reliable recommendations require context. Trust depends on consistency. The MVP confirmed the push methodology worked — and pointed toward the next frontier: not delivering information, but supporting decisions.
