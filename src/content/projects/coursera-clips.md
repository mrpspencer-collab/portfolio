---
title: Coursera Clips
subtitle: Short Form Content Redesign
role: Principal Product Designer
tags:
  - UX Design
  - Enterprise
  - '2024'
thumb: 'https://paulamsbary.com/wp-content/uploads/2025/11/mbip-clips.png'
thumbBg: '#EDE9E2'
thumbText: Coursera Clips
thumbTextColor: '#7C7771'
metrics:
  - '+23.4% more Clips viewed'
  - '+99% additional video views per learner'
  - '+156% increase in end-of-experience clicks'
  - '+73.6% more Clips started from recommendations'
  - '+24.25% lift in explicit enrollment actions'
  - '+1.5% increase in Enterprise Enrollment Rate'
cta: Explore the case study
order: 2
---

Clips are Coursera's short-form learning format: 2–10 minute videos pulled from full courses. I led the redesign of the end-to-end Clips experience to increase video consumption, continuation rates, and course enrollments — ultimately unlocking new enterprise wins and long-term revenue.

## The Problem

The original design prioritized the video player while underrepresenting course structure. Users couldn't easily identify a clip's position within lessons, explore related clips, or transition to full courses. The hypothesis: this was limiting discovery and engagement.

![Video Clip Original Design](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/before.png)

## Design Opportunity

### For Learners

- Get answers without committing to full courses
- Quickly assess relevance by viewing clip placement in course structure
- Maintain workflow momentum — learn focused content then return to tasks
- Trust vetted, expert-led, high-quality content

### For Business

- Increase monthly active learners (MAL)
- Expose course content to drive enrollments
- Enable L&D teams to create job-relevant learning paths
- Support enterprise customer acquisitions

## Mobile Web

<div class="cs-split">
  <div class="cs-split-body">
    <p>The responsive design challenge was reordering page elements for a smaller screen without losing the context that makes Clips useful. On desktop, course structure, related content, and the player coexist. On mobile, those elements needed to be sequenced — not hidden.</p>
    <p>The wireframe explores how to maintain hierarchy while keeping the experience linear and low-friction.</p>
  </div>
  <div class="cs-split-image">
    <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/mobile-web.png" alt="Clips Player Sketch — Enrollment CTA" />
  </div>
</div>

<div class="cs-split">
  <div class="cs-split-body">
    <p>Key decisions in the final design:</p>
    <ul>
      <li><strong>Video placement</strong> — top of page, full width</li>
      <li><strong>Player controls</strong> — native device controls; removed custom chrome to reduce friction</li>
      <li><strong>Navigation</strong> — simple shelf below player with title toggle</li>
      <li><strong>Call-to-action</strong> — pinned enrollment button always in view</li>
      <li><strong>Autoplay</strong> — playlist set to autoplay next videos to reduce drop-off</li>
    </ul>
  </div>
  <div class="cs-split-image">
    <div class="cs-image-pair">
      <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/mobileweb1-1.png" alt="Mobile Web — Single Video Emphasis" />
      <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/mobileweb2.png" alt="Mobile Web — Course Playlist Open" />
    </div>
  </div>
</div>

## Desktop Explorations

<div class="cs-carousel">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/Clips-Video-stream-within-course-2.png" alt="Theatre Mode Sketch" />
        <div class="cs-carousel-caption">
          <strong>Theatre Mode</strong>
          <p>Video-first layout with a horizontal continuation rail below the player. Abandoned due to layout complexity and unclear ROI.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/videsidebarb.png" alt="Context-First Design" />
        <div class="cs-carousel-caption">
          <strong>Context-First Design</strong>
          <p>Right-hand vertical rail showing course structure and related content. Improved learner positioning but struggled with visual disconnection of related navigation.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/video-sidebar.png" alt="Toggle Panel" />
        <div class="cs-carousel-caption">
          <strong>Toggle Panel</strong>
          <p>Panel switching between deep (full course) and broad (related) structures with image thumbnails. Required additional engineering effort and didn't reach final build.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="https://staging4.paulamsbary.com/wp-content/uploads/2025/11/redline.png" alt="V1 Desktop Release" />
        <div class="cs-carousel-caption">
          <strong>V1 Desktop Release</strong>
          <p>Enrollment CTA moved below the video per licensing agreement — automatic enrollment triggered after 10% of content viewed. Design emphasised consumption over enrollment actions.</p>
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

## End Cards

End cards appear when clips finish, recommending additional content. They're a critical decision point for user retention and deeper discovery.

![End Card Original Design](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/endcard-2.png)

### Exploration 1 — Informative Card

Displayed next video, course, and institution logo as a credibility cue. Reinforced the "trusted content" value proposition but was overloaded with metadata and CTAs within an eight-second window.

![End Card Ideation 1](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/ideation1.png)

### Exploration 2 — Card Overlay

Featured next video thumbnail, play icon, and countdown timer — a familiar streaming pattern. Strong affordances but risked competing CTAs.

![End Card Exploration 2 — Overlay](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/endcardexplo12.png)

### Exploration 3 — Overlay with Light/Dark Handling

Added an overlay to manage unpredictable end-frame lighting. Right-aligned module with secondary button. Balanced control but introduced potential text conflicts with end frames.

![End Card Exploration 3 — Overlay with Text](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/endcardexpl2.png)

### Exploration 4 — End of Course Variant

Tested a variant for the end-of-course state, exploring how the recommendation experience should change when a learner completes the full course rather than a single clip.

![End Card — End of Course Exploration](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/endcard-endofcourseexpl.png)

### V1 Final Design

- University logo for credibility
- Countdown timer at top for visibility
- Next-video title as primary focus
- Thumbnail for intentional, engaging recommendation
- Low-pressure tertiary "Play now" button
- Autoplay as a player-level setting
- Strong scrim for universal contrast

![End Card V1 Final Design](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/endcard-3.png)

## System Extension

Evolved the design patterns into a unified visual language across discovery surfaces. Clips became instantly recognizable, trustworthy, and clearly connected to their parent courses.

![Post-Dogfooding — Updated Image Sizing](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/post-dogfooding-Updated-image-sizing.png)

![Clips in Lesson](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/Clips-Lesson.png)

![Clips in Search Dropdown](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/search-dropdown.png)

![Clips in Search Results](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/clipsinsearch.png)

![Clips Extensions System](https://staging4.paulamsbary.com/wp-content/uploads/2025/11/clips-extensions-scaled.png)

## Strategic Impact

The project validated short-form content driving long-form demand. It sparked dedicated manual curation, became the platform model for video surfacing, and strengthened customer confidence in bite-size learning pathways — contributing to enterprise customer renewals and expansions.
