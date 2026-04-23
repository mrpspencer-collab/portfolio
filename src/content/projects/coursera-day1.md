---
title: Coursera Learning Experience
subtitle: Day 1 Commitment
role: Principal Product Designer
tags:
  - Behavioral Design
  - Research
  - '2023'
thumb: 'https://paulamsbary.com/wp-content/uploads/2025/06/Step-1-make-a-committment-weekly-goal-3-scaled.jpg'
thumbBg: '#D4CEC6'
thumbText: Day 1
thumbTextColor: '#6B6660'
metrics:
  - '+4% Day 1 engagement lift on mobile'
  - '+3% Day 1 engagement lift on desktop'
  - Hundreds of thousands more learners reaching activation threshold
cta: Explore the case study
order: 3
---

As enrollments normalized post-pandemic, Coursera faced a critical challenge: learners were signing up but not sticking with their courses long enough to see results. My work focused on shifting our retention strategy away from one-size-fits-all nudges toward behavioral science-informed design.

## Engagement Decline

<div class="cs-split">
  <div class="cs-split-body">
    <p>Millions were signing up, but very few were building momentum on Day 1 — the metric most correlated with long-term success. Reaching 60+ minutes on Day 1 was the threshold associated with becoming a persistent learner, and the gap between sign-up and that milestone was widening.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/05/Funnel-Performance-1.jpg" alt="Funnel Performance" /><figcaption>Illustrative trend of paid learner funnel performance</figcaption></figure>
  </div>
</div>

## The Design Challenge

<div class="cs-split">
  <div class="cs-split-body">
    <p>Learners abandoned courses when encountering friction points, particularly assessments. Only 15% of enrollees reached their first lesson, and the typical journey required 12+ steps before any real learning occurred.</p>
    <p>The opportunity was to design a streamlined 6-step flow — meeting learners with intention and removing every unnecessary obstacle before Day 1 momentum could form.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/11/lal-2.png" alt="Learner activation data" /><figcaption>Learner activation data — illustrative trend</figcaption></figure>
  </div>
</div>

## Lift and Shift Mentality

<div class="cs-split">
  <div class="cs-split-body">
    <p>The mobile team had already achieved 5–6% Day 1 and Day 7 engagement gains. The instinct was to adapt that approach for desktop, but mobile's vertical flow conflicted with desktop's information density.</p>
    <p>Rather than force a translation, I returned to the mobile design as foundational inspiration — iterating on what had already proven to work rather than rebuilding from scratch.</p>
  </div>
  <div class="cs-split-image">
    <div class="cs-image-pair">
      <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/07/day1-scaled.png" alt="Day 1 mobile flow" /><figcaption>Day 1 mobile flow — the proven baseline</figcaption></figure>
      <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/07/softgoal-scaled.png" alt="Soft goal-setting UI" /><figcaption>Soft goal-setting — reducing commitment friction</figcaption></figure>
    </div>
  </div>
</div>

## UX Debt

<div class="cs-split">
  <div class="cs-split-body">
    <p>Cross-team coordination eliminated redundant screens and reordered key steps, compressing a 12+ step journey into a focused 6-step flow. Content strategy played a crucial role: clear, purposeful copy did as much work as the UI.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/06/Course-within-Meta-Specialization-Control-1-scaled.jpg" alt="Course enrollment flow — original step count" /><figcaption>Original enrollment flow — 12+ steps before first lesson</figcaption></figure>
  </div>
</div>

## Design Explorations

Four directions were tested before converging on the final approach. Each explored how much commitment and personalization to surface at the moment of enrollment.

<div class="cs-carousel">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="https://paulamsbary.com/wp-content/uploads/2025/11/Group-316126178.png" alt="Full-screen commitment message" />
        <div class="cs-carousel-caption">
          <strong>Full-screen Commitment</strong>
          <p>The eventual direction — clean, focused, and copy-led. A single clear ask without competing elements.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="https://paulamsbary.com/wp-content/uploads/2025/11/2.png" alt="Segmented personalization design" />
        <div class="cs-carousel-caption">
          <strong>Segmented Personalization</strong>
          <p>Overcomplicated — too many choices at once. Personalization added friction rather than reducing it.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="https://paulamsbary.com/wp-content/uploads/2025/11/Group-single-select.png" alt="Single-select format" />
        <div class="cs-carousel-caption">
          <strong>Single-select Format</strong>
          <p>Combined course and career goals into one interaction. Simpler, but still introduced ambiguity at the commitment moment.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="https://paulamsbary.com/wp-content/uploads/2025/11/Step-1-Youre-enrolledSet-a-weekly-goal-1.png" alt="Weekly goal-setting concept" />
        <div class="cs-carousel-caption">
          <strong>Weekly Goal Setting</strong>
          <p>Shelved as an outlier — time-based goals didn't map cleanly to the Day 1 activation behavior we were optimizing for.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="cs-carousel-nav">
    <button class="cs-carousel-btn cs-carousel-prev">←</button>
    <button class="cs-carousel-btn cs-carousel-next">→</button>
    <span class="cs-carousel-counter">1 / 4</span>
  </div>
</div>

## Final Design & Experiment Structure

The experiment tested three variants to isolate which element drove the behavior change.

<div class="cs-columns">
  <div>
    <p class="cs-col-label">Variants Tested</p>
    <ul>
      <li><strong>Control</strong> — existing flow without commitment prompt</li>
      <li><strong>Commitment + Benchmark</strong> — loading screen with "60 minutes on Day 1" messaging and explicit commitment requirement</li>
      <li><strong>Benchmark Only</strong> — message surfaced without an explicit commitment requirement</li>
    </ul>
  </div>
  <div>
    <p class="cs-col-label">Key Design Decisions</p>
    <ul>
      <li>Commitment surfaced at the highest-intent moment: immediately after enrollment</li>
      <li>60-minute benchmark made the goal concrete and achievable</li>
      <li>Copy carried as much weight as the visual design</li>
      <li>No competing CTAs — one ask, clearly framed</li>
    </ul>
  </div>
</div>

<div class="cs-image-pair">
  <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/06/Step-1a-Loading-Screen-with-Benchmark-scaled.jpg" alt="Loading Screen with Benchmark" /><figcaption>Step 1 — Loading screen with 60-min benchmark</figcaption></figure>
  <figure><img src="https://paulamsbary.com/wp-content/uploads/2025/06/Step-1-make-a-committment-weekly-goal-3-scaled.jpg" alt="Make a commitment — weekly goal" /><figcaption>Step 2 — Explicit commitment screen</figcaption></figure>
</div>

<div class="cs-featured">
  <div class="cs-featured-body">
    <ul>
      <li>Loading screen as commitment moment</li>
      <li>60-minute activation benchmark surfaced clearly</li>
      <li>Single, focused ask — no competing CTAs</li>
      <li>Informed by mobile team's proven success</li>
      <li>Copy and UI designed in tandem</li>
      <li>Streamlined 6-step flow replacing 12+ step journey</li>
    </ul>
  </div>
</div>

## Strategic Outcomes

The results validated a broader shift in how Coursera thought about early engagement — from feature additions to friction removal, and from isolated nudges to coordinated interventions at meaningful moments.

<div class="cs-columns">
  <div>
    <p class="cs-col-label">Design Principles Validated</p>
    <ul>
      <li>Behavioral science over feature complexity</li>
      <li>Friction reduction as a retention lever</li>
      <li>Micro-moments meeting learners at high-intent points</li>
      <li>Coordinated cross-team interventions replacing isolated nudges</li>
    </ul>
  </div>
  <div>
    <p class="cs-col-label">Organizational Impact</p>
    <ul>
      <li>Accelerated team adoption of motivation-focused behavioral design</li>
      <li>Established Day 1 engagement as a core product KPI</li>
      <li>Hundreds of thousands of additional learners reaching activation</li>
      <li>Model for future retention experiments across the platform</li>
    </ul>
  </div>
</div>
