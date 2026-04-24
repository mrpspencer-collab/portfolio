---
title: Atlas
subtitle: From Pull to Push
role: UX & Product Strategy
tags:
  - AI / ML
  - Product Strategy
  - '2025'
status: Shipping
thumb: 'http://paulamsbary.com/wp-content/uploads/2026/04/audi-sales-alert-1.png'
thumbBg: '#C4BEB6'
thumbFit: cover
thumbText: Atlas
thumbTextColor: '#5A5550'
metrics: []
cta: Explore the case study
order: 1
---
<div class="cs-featured">
  <img src="http://paulamsbary.com/wp-content/uploads/2026/04/investigate-at.png" alt="Atlas — Same data. One requires interpretation. The other can be read." />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Same data. One requires interpretation. The other can be read.</p>
  </div>
</div>

## The Hypothesis

Atlas started with a simple premise: bring together multiple data sources, make dashboards beautiful and fast, and business owners will show up with questions.

That bet was partially right. We spent months iterating on visualizations and integrating data sources. For data-literate users — OEM execs and performance analysts — Atlas worked. One log-in delivered a single source of truth. But the operators running dealerships day to day were less interested in charts. They needed insights. 

<div class="cs-carousel cs-carousel--contain">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/inventorySection.png" alt="Inventory and demand — model-level view" />
        <div class="cs-carousel-caption">
          <strong>Inventory & demand</strong>
          <p>Model-level view</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Visitor-Locations-States-scaled.jpg" alt="Visitor Location States — dark theme" />
        <div class="cs-carousel-caption">
          <strong>Visitor Location States</strong>
          <p>Dark theme</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/leads-scaled.jpg" alt="Inventory Leads" />
        <div class="cs-carousel-caption">
          <strong>Inventory Leads</strong>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div class="cs-carousel-nav">
    <button class="cs-carousel-btn cs-carousel-prev">←</button>
    <button class="cs-carousel-btn cs-carousel-next">→</button>
    <span class="cs-carousel-counter">1 / 3</span>
  </div>
</div>

## Three Personas. One Platform.

Post-launch findings revealed consultants rather than intended dealers comprised primary platform usage. Consultants conducted monthly dealer meetings reviewing reports and explaining data implications. While effective for that use case, operators avoided independent platform usage despite making daily decisions where data analysis would provide value, maintaining consultant reliance for interpretation.

<div class="cs-persona-grid">
  <div class="cs-persona-card">
    <p class="cs-persona-label">Audience 01</p>
    <p class="cs-persona-name">OEM Stakeholders</p>
    <p class="cs-persona-body">Data fluent. Regular platform users. Dashboard-native. The product works for them as built.</p>
  </div>
  <div class="cs-persona-card">
    <p class="cs-persona-label">Audience 02</p>
    <p class="cs-persona-name">Performance Consultants</p>
    <p class="cs-persona-body">Read dashboards, translate data, deliver recommendations to dealers in monthly meetings. The human translation layer.</p>
  </div>
  <div class="cs-persona-card cs-persona-card--accent">
    <p class="cs-persona-label">Audience 03 — The Gap</p>
    <p class="cs-persona-name">Dealership Operators</p>
    <p class="cs-persona-body">Running a business daily. Real questions about real performance. Responsible for the most seats. Getting the least value.</p>
  </div>
</div>

**How might we deliver the same insights as a consultant on a recurring basis, without the data literacy the platform demands?**

## Jobs to be Done

<div class="cs-persona-grid">
  <div class="cs-persona-card">
    <p class="cs-persona-label">Dealer Operator</p>
    <p class="cs-persona-body">"Help me sell more cars and spend less getting there."</p>
  </div>
  <div class="cs-persona-card">
    <p class="cs-persona-label">Performance Consultant</p>
    <p class="cs-persona-body">"Give me insights that make me look like a hero to my dealers."</p>
  </div>
  <div class="cs-persona-card">
    <p class="cs-persona-label">OEM Stakeholder</p>
    <p class="cs-persona-body">"Show me what's working across the network so I can move dealers forward."</p>
  </div>
  <div class="cs-persona-card cs-persona-card--accent" style="grid-column: 1 / -1;">
    <p class="cs-persona-label">The Shared Job</p>
    <p class="cs-persona-body">"Sell more cars. Spend less. Understand why."</p>
  </div>
</div>

Our focus shifted to the operator persona and increasing adoption.

## The Design Problem

For many proprietors, engaging with data parallels joining a fitness facility—everyone recognizes its benefits, yet few maintain commitment until developing sufficient competence to experience advantages. When dealers attempted Atlas usage, they encountered a system demanding data literacy they hadn't yet acquired. Internal analytics indicated most dealers completed single login sessions without returning.

> "…we wanna teach the dealers 'how to fish'… so they're not just relying on us once a month, but they're engaging with [their data] more frequently…" — Audi MRC (Modern Retail Consultant)

## Opportunity Mapping

Collaborative workshops across product, data analysis, design, and executive teams aimed to clarify research findings and pinpoint focus areas. Each session distinguished commercial challenges from user-centered problems, yielding five key thematic areas.

<div class="cs-table-wrap">
  <table class="cs-table">
    <thead>
      <tr>
        <th>Theme</th>
        <th>Problem</th>
        <th>Direction</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Discover</td>
        <td>Users waste time finding relevant data</td>
        <td>Unify exploration into a single workspace</td>
      </tr>
      <tr>
        <td>Create</td>
        <td>Insights get lost across tools</td>
        <td>Proactive AI guidance during analysis</td>
      </tr>
      <tr>
        <td>Scale</td>
        <td>Knowledge stays siloed, effort is duplicated</td>
        <td>Turn past analysis into reusable context</td>
      </tr>
      <tr class="cs-table-row--accent">
        <td>Deliver ★</td>
        <td>Insights stop at the consultant</td>
        <td>Plain-language summaries pushed to dealers</td>
      </tr>
      <tr>
        <td>Foundations</td>
        <td>Broad adoption requires a solid base</td>
        <td>Invest in integration, adaptive UX</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="cs-split-image" style="margin-top:24px">
  <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-18-at-1.30.39-PM-scaled.png" alt="Opportunity mapping workshop" /><figcaption>Workshop — five thematic areas</figcaption></figure>
</div>

## Concepts

<div class="cs-carousel cs-carousel--contain">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Boards-Keyframe-13.png" alt="Concept 01 — Discover: Unified exploration workspace" />
        <div class="cs-carousel-caption">
          <strong>Discover — Unified Exploration Workspace</strong>
          <p>A single surface for analysts to explore, annotate, and contextualize data — removing fragmentation across tools and reducing the cost of jumping between views.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-18-at-2.51.41-PM.png" alt="Concept 02 — Create: Intelligent guidance and support" />
        <div class="cs-carousel-caption">
          <strong>Create — Intelligent Guidance & Support</strong>
          <p>AI assisting analysts mid-workflow — proactively surfacing relevant context, related patterns, and historical comparisons so less time is spent hunting for meaning.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-19-at-6.34.27-PM.png" alt="Concept 03 — Create: Natural language interaction" />
        <div class="cs-carousel-caption">
          <strong>Create — Natural Language Interaction</strong>
          <p>Let analysts query Atlas in plain language. Not a chatbot — a way to reduce the cost of asking the next question and keeping analysis moving.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/anaomaly-dark.png" alt="Concept 04 — Create: Anomaly detection" />
        <div class="cs-carousel-caption">
          <strong>Create — Anomaly Detection</strong>
          <p>Surface meaningful deviations automatically. Instead of analysts hunting for what changed, Atlas flags it — with context about why it might matter.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-20-at-10.34.21-AM.png" alt="Concept 05 — Scale: Knowledge repository" />
        <div class="cs-carousel-caption">
          <strong>Scale — Knowledge Repository</strong>
          <p>A searchable library of past analysis — semantic search over decisions, findings, and rationale. The goal: stop redoing work the team already did.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-20-at-10.48.13-AM.png" alt="Concept 06 — Scale: Integrated communication" />
        <div class="cs-carousel-caption">
          <strong>Scale — Integrated Communication</strong>
          <p>Bring discussion inside the tool. When decisions live in Slack and the data lives in Atlas, context is lost. This keeps them together.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-20-at-10.54.45-AM.png" alt="Concept 07 — Deliver: One-click report builder" />
        <div class="cs-carousel-caption">
          <strong>Deliver — One-click Report Builder</strong>
          <p>Close the first- and last-mile problem. Analysts spend hours reformatting data for stakeholders — this automated the polish so insights reached the audience faster.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/analyze-mvp.png" alt="Concept 08 — Deliver: Atlas Analyze (Shipped)" />
        <div class="cs-carousel-caption">
          <strong>Deliver — Atlas Analyze (Shipped)</strong>
          <p>Plain-language summaries surfaced in a scannable card format. This is the concept that became Atlas Analyze — directly addressing the adoption problem.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="http://paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-20-at-11.15.58-AM.png" alt="Concept 09 — Deliver: Mobile companion" />
        <div class="cs-carousel-caption">
          <strong>Deliver — Mobile Companion</strong>
          <p>A dealer checking their performance between meetings, on a lot, at a showroom — not at a desk. Mobile-first design for the audience that would rarely sit in front of a laptop.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="cs-carousel-nav">
    <button class="cs-carousel-btn cs-carousel-prev">←</button>
    <button class="cs-carousel-btn cs-carousel-next">→</button>
    <span class="cs-carousel-counter">1 / 9</span>
  </div>
</div>

## Story Mapping

<div class="cs-split">
  <div class="cs-split-body">
    <p>Collaborative sessions with product, data analysis, and field teams converged on one direction: discontinue attempting to attract dealers to Atlas. Years of platform development had generated low dealership session frequency without improvement trajectory. The strategic recommendation shifted from optimizing platform engagement to delivering insights through channels dealers already utilized.</p>
    <p>To secure leadership support, workflow analysis alongside proposed concepts was created. The narrative follows Jennifer, a performance consultant, through her existing procedures and resulting modifications through a push-based methodology.</p>
    <p>Previously involved late-night preparation, hurried presentations, and monthly insight delivery. Now Jennifer enters meetings already informed by data, enabling dealers to act on emerging concerns the same day.</p>
    <p>The storyboard clarified that the fundamental challenge wasn't simplifying dashboard readability—it was transforming the timing and distribution method of insights reaching decision-makers.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/Screenshot-2026-04-18-at-4.37.52-PM.png" alt="Storyboard — push-based insight delivery" /><figcaption>Storyboard — Jennifer's workflow before and after</figcaption></figure>
  </div>
</div>

## Atlas Analyze

Analyze represented the initial product delivered following this approach. Months exploring RAG-based methodologies had produced limited demonstrable outcomes. After defining the core issue, Analyze launched within weeks.

The team implemented it within the existing system as an MVP. Mobile represented the ultimate destination, though initial validation used the simplest feasible interaction—a single control generating plain-language summaries of dashboard activity across user accounts.

Output required trustworthiness, not generic templates. A context layer trained on automotive retail captured relevant metrics, meaningful benchmarks, and consultant terminology. The summary communicated what shifted, what warranted attention, and recommended next moves.

For operators, this resolved genuine friction. Accessing Atlas meant confronting a dashboard without apparent entry point. Analyze offered direction.

**Bring intelligence to where attention already is.**

<div class="cs-split">
  <div class="cs-split-body">
    <p><strong>Why a sidebar:</strong> Operators are already looking at their data. A sidebar brings the insight to where attention already is — no context switch, no new screen to learn.</p>
    <p><strong>Why one button:</strong> The interaction had to be simple enough that a dealer who logged in once would try it. Complexity was the enemy of the first win.</p>
    <p><strong>Why plain language:</strong> The output mirrors what a consultant says in a meeting — not what a dashboard shows. Observation, context, action. No data literacy required.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/wire-scaled.png" alt="Sidebar concept wireframe" /><figcaption>The sidebar concept — where to place intelligence without disrupting the existing workflow.</figcaption></figure>
  </div>
</div>

<div class="cs-featured">
  <img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/layout.png" alt="Early redlines — sidebar proportions" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Early redlines exploring sidebar proportions and content hierarchy.</p>
  </div>
</div>

<div class="cs-featured">
  <img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/implementation-1-scaled.png" alt="Analyze as a sidebar in the live platform" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">The implementation — Analyze as a sidebar inside the live platform.</p>
  </div>
</div>

<div class="cs-featured">
  <img src="https://staging4.paulamsbary.com/wp-content/uploads/2026/04/analyze-assistant.png" alt="Analyze in production" />
  <div class="cs-featured-body">
    <p style="font-size:13px;color:var(--fg-muted);margin:0">Analyze in production — intelligence delivered in context, without leaving the dashboard.</p>
  </div>
</div>

## Impact

Analyze transformed operator engagement patterns with Atlas. Monthly usage increased progressively as operators began acting on insights without requiring dashboard navigation. Consultants noted resolution of the blank canvas obstacle. At NADA, prospective buyers immediately grasped the offering's significance.

This also substantiated a more profound strategic principle. The most beneficial contribution wasn't enhanced dashboards but something resembling a text notification—a plain-language alert, at precise timing, delivered through operators' preferred devices.

However, this surfaced a critical question: if standard LLMs can summarize dashboards, what constitutes sustainable competitive advantage?

**Answer: Context.** Fifteen years of automotive consulting background informed data interpretation methodology, signal presentation, and recommendation generation. That contextual foundation—industry-specific significance, applicable benchmarks, consultant communication approaches—resists straightforward replication. This distinction separates meaningful summaries from generic outputs.

The MVP confirmed the push methodology functioned effectively while demonstrating summarization represents fundamental requirements. Trustworthy recommendations depend on contextual understanding. Reliability flows from uniformity. Further development advances from information provision to decision facilitation—contextually informed intelligence supporting genuine business choices, woven into operational workflows.

<div class="cs-featured">
  <div class="cs-featured-body">
    <p style="font-size:14px;color:var(--fg-muted);margin:0">Summarization is table stakes.<br />Reliable recommendations require context.<br />Trust depends on consistency.</p>
  </div>
</div>
