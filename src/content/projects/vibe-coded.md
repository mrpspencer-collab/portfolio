---
title: Vibe Coded
subtitle: Experiments in AI-Augmented Design
role: Design, Prototyping, Development
tags:
  - AI Tools
  - Prototyping
  - '2025–2026'
thumb: ''
thumbBg: '#0F1117'
thumbText: 'VIBE CODED'
thumbTextColor: '#D4904E'
thumbFit: contain
metrics: []
cta: See the experiments
order: 2
---

Claude Code and Figma Make have changed how I prototype. What used to take a sprint of back-and-forth now takes an afternoon. The experiments below range from functioning tools in active use to interactive prototypes that made abstract concepts tangible enough to ship or kill. None took more than a day.

<div class="cs-experiment-list">

<div class="cs-experiment">
  <div class="cs-experiment-meta">
    <span class="cs-experiment-type">Working Tool</span>
    <h3 class="cs-experiment-title">Screenshot Maker</h3>
    <a href="https://paula331.sg-host.com" target="_blank" rel="noopener" class="cs-experiment-link">Live demo →</a>
  </div>
  <div class="cs-experiment-body">
    <div class="cs-experiment-text">
      <p>Marketing emails relied on full-screen product screenshots that buried the detail worth communicating. No one had time to request a designer for every campaign update.</p>
      <p>I built a lightweight cropping and styling tool that forces a focused viewport — analysts can produce clear, on-brand visuals without design support. Built and deployed in about 30 minutes.</p>
      <p class="cs-experiment-takeaway">Constraints improve clarity.</p>
    </div>
    <div class="cs-experiment-media cs-image-pair">
      <figure>
        <img src="/images/screenshot-maker-before.jpg" alt="Full-screen screenshot — before" />
        <figcaption>Before — full screen</figcaption>
      </figure>
      <figure>
        <img src="/images/screenshot-maker-after.jpg" alt="Focused crop — after" />
        <figcaption>After — focused crop</figcaption>
      </figure>
    </div>
  </div>
</div>

<div class="cs-experiment">
  <div class="cs-experiment-meta">
    <span class="cs-experiment-type">Prototype + Accessibility Tool</span>
    <h3 class="cs-experiment-title">KPI Status Layer</h3>
    <a href="https://whirl-finder-90280024.figma.site" target="_blank" rel="noopener" class="cs-experiment-link">Live demo →</a>
  </div>
  <div class="cs-experiment-body">
    <div class="cs-experiment-text">
      <p>An analytics product with a neutral palette needed a way to signal positive vs. negative performance at a glance — but color alone fails across the four most common types of color vision deficiency.</p>
      <p>I built an interactive concept explorer with 14 treatment approaches — overlay scrims, edge bars, hatching patterns, glow shadows, shape coding, and more — each viewable through simulated color blindness filters (Deuteranopia, Protanopia, Tritanopia, Achromatopsia) with a live A11y audit per concept. The tool shifted the design conversation from "which color looks good" to "which signal survives all conditions."</p>
      <p class="cs-experiment-takeaway">Color is decoration. Shape, position, and motion are signal.</p>
    </div>
    <div class="cs-experiment-media cs-image-pair">
      <figure>
        <img src="/images/kpi-status-light.png" alt="KPI Status Layer — light mode" />
        <figcaption>Light mode — normal vision</figcaption>
      </figure>
      <figure>
        <img src="/images/kpi-status-dark.png" alt="KPI Status Layer — dark mode with color blindness simulation" />
        <figcaption>Dark mode — color blindness simulation active</figcaption>
      </figure>
    </div>
  </div>
</div>

<div class="cs-experiment">
  <div class="cs-experiment-meta">
    <span class="cs-experiment-type">Working Prototype</span>
    <h3 class="cs-experiment-title">Data Story Maker</h3>
    <a href="https://atlasimagemaker.netlify.app" target="_blank" rel="noopener" class="cs-experiment-link">Live demo →</a>
  </div>
  <div class="cs-experiment-body">
    <div class="cs-experiment-text">
      <p>Data stories in the product were limited to dashboard screenshots annotated with text — low engagement, hard to produce, easy to ignore.</p>
      <p>I built a prototype that lets an analyst — or an AI — assemble visual narratives using templates, uploaded media, and generated imagery. When developers saw a working demo that pulled from a live data context, several of them adopted AI tooling into their own workflows for the first time.</p>
      <p class="cs-experiment-takeaway">The best way to change how a team works is to show them something that already works.</p>
    </div>
    <div class="cs-experiment-media">
      <figure>
        <img src="/images/data-story-maker.jpg" alt="Data Story Maker prototype" />
        <figcaption>Data Story Maker — template and media selection</figcaption>
      </figure>
    </div>
  </div>
</div>

<div class="cs-experiment">
  <div class="cs-experiment-meta">
    <span class="cs-experiment-type">Personal Tool</span>
    <h3 class="cs-experiment-title">Acquisition Simulator</h3>
    <a href="https://paula329.sg-host.com/index.html" target="_blank" rel="noopener" class="cs-experiment-link">Live demo →</a>
  </div>
  <div class="cs-experiment-body">
    <div class="cs-experiment-text">
      <p>Evaluating a business acquisition means stress-testing financials across scenarios that spreadsheets make tedious — recession, operational changes, added capacity, different growth assumptions.</p>
      <p>I built a personal tool that accepts P&L inputs and models scenarios against a 12-month projection, producing output formatted for a business plan and loan application. It replaced a process that would have required an accountant or a very patient Excel session.</p>
      <p class="cs-experiment-takeaway">The best tools solve the problem you have right now.</p>
    </div>
    <div class="cs-experiment-media">
      <figure>
        <img src="/images/acquisition-simulator.jpg" alt="Acquisition Simulator" />
        <figcaption>P&L modeling — scenario inputs and 12-month projection</figcaption>
      </figure>
    </div>
  </div>
</div>

<div class="cs-experiment">
  <div class="cs-experiment-meta">
    <span class="cs-experiment-type">Prototype</span>
    <h3 class="cs-experiment-title">Guided Analysis</h3>
  </div>
  <div class="cs-experiment-body">
    <div class="cs-experiment-text">
      <p>Most BI users don't know what metric or visualization to start with — they know the question they're trying to answer. The existing workflow assumed expertise the majority of users didn't have.</p>
      <p>I prototyped a guided flow that accepts a plain-language question and recommends the right metric, dimension, and chart type. An LLM interpreted the question; the UI surfaced the recommendation and let the user refine it. Two flows were fully functional. The rest demonstrated the concept convincingly enough to drive product roadmap conversations.</p>
      <p class="cs-experiment-takeaway">Starting with a question is more intuitive than starting with a metric.</p>
    </div>
    <div class="cs-experiment-media cs-image-pair">
      <figure>
        <img src="/images/guided-analysis-question.jpg" alt="Guided Analysis — question input" />
        <figcaption>Step 1 — plain-language question input</figcaption>
      </figure>
      <figure>
        <img src="/images/guided-analysis-recommendation.jpg" alt="Guided Analysis — recommendation" />
        <figcaption>Step 2 — AI-recommended metric, dimension, and chart type</figcaption>
      </figure>
    </div>
  </div>
</div>

</div>
