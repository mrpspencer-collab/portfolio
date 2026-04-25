---
title: Coursera Clips
subtitle: Short Form Content Redesign
role: Principal Product Designer
tags:
  - UX Design
  - Enterprise
  - '2024'
thumb: '/images/mbip-clips.png'
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

<div class="cs-split">
  <div class="cs-split-body">
    <p>The original design prioritized the video player while underrepresenting course structure. Users couldn't identify a clip's position within lessons, explore related clips, or transition to full courses.</p>
    <p>The hypothesis: this was limiting discovery and engagement.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="/images/before.png" alt="Video Clip — Original Design" /><figcaption>Video Clip — Original Design</figcaption></figure>
  </div>
</div>

## Design Opportunity

<div class="cs-columns">
  <div>
    <p class="cs-col-label">For Learners</p>
    <ul>
      <li>Get answers without committing to full courses</li>
      <li>Quickly assess relevance by viewing clip placement in course structure</li>
      <li>Maintain workflow momentum — learn focused content then return to tasks</li>
      <li>Trust vetted, expert-led, high-quality content</li>
    </ul>
  </div>
  <div>
    <p class="cs-col-label">For Business</p>
    <ul>
      <li>Increase monthly active learners (MAL)</li>
      <li>Expose course content to drive enrollments</li>
      <li>Enable L&D teams to create job-relevant learning paths</li>
      <li>Support enterprise customer acquisitions</li>
    </ul>
  </div>
</div>

## Mobile Web

<div class="cs-split">
  <div class="cs-split-body">
    <p>The responsive design challenge was reordering page elements for a smaller screen without losing the context that makes Clips useful. On desktop, course structure, related content, and the player coexist. On mobile, those elements needed to be sequenced — not hidden.</p>
    <p>The wireframe explores how to maintain hierarchy while keeping the experience linear and low-friction.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="/images/mobile-web.png" alt="Clips Player Sketch — Enrollment CTA" /><figcaption>Clips Player Sketch — Enrollment CTA</figcaption></figure>
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
      <li><strong>Autoplay</strong> — playlist autoplay to reduce drop-off</li>
    </ul>
  </div>
  <div class="cs-split-image">
    <div class="cs-image-pair">
      <figure><img src="/images/mobileweb1-1.png" alt="Single Video Emphasis" /><figcaption>Single Video Emphasis</figcaption></figure>
      <figure><img src="/images/mobileweb2.png" alt="Course Playlist Open" /><figcaption>Course Playlist Open</figcaption></figure>
    </div>
  </div>
</div>

## Desktop Explorations

<div class="cs-carousel">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="/images/Clips-Video-stream-within-course-2.png" alt="Theatre Mode Sketch" />
        <div class="cs-carousel-caption">
          <strong>Theatre Mode</strong>
          <p>Video-first layout with a horizontal continuation rail below the player. Abandoned due to layout complexity and unclear ROI.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/videsidebarb.png" alt="Context-First Design" />
        <div class="cs-carousel-caption">
          <strong>Context-First Design</strong>
          <p>Right-hand vertical rail showing course structure and related content. Improved learner positioning but struggled with visual disconnection of related navigation.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/video-sidebar.png" alt="Toggle Panel" />
        <div class="cs-carousel-caption">
          <strong>Toggle Panel</strong>
          <p>Panel switching between deep (full course) and broad (related) structures with image thumbnails. Required additional engineering and didn't reach final build.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/redline.png" alt="V1 Desktop Release" />
        <div class="cs-carousel-caption">
          <strong>V1 Desktop Release</strong>
          <p>Enrollment CTA moved below the video per licensing agreement — automatic enrollment triggered after 10% of content viewed.</p>
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

<div class="cs-split">
  <div class="cs-split-body">
    <p>End cards appear when clips finish, recommending additional content. They're a critical decision point for user retention — the moment a learner either continues or leaves.</p>
    <p>The original design lacked engagement affordances and failed to communicate what to watch next with enough clarity or urgency.</p>
  </div>
  <div class="cs-split-image">
    <figure><img src="/images/endcard-2.png" alt="End Card — Original Design" /><figcaption>End Card — Original Design</figcaption></figure>
  </div>
</div>

### Explorations

<div class="cs-carousel">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="/images/ideation1.png" alt="End Card — Informative Card" />
        <div class="cs-carousel-caption">
          <strong>Informative Card</strong>
          <p>Next video, course, and institution logo as a credibility cue. Overloaded with metadata and CTAs within an eight-second window.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/endcardexplo12.png" alt="End Card — Card Overlay" />
        <div class="cs-carousel-caption">
          <strong>Card Overlay</strong>
          <p>Next video thumbnail, play icon, and countdown timer — familiar streaming pattern. Strong affordances but risked competing CTAs.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/endcardexpl2.png" alt="End Card — Overlay with Light/Dark Handling" />
        <div class="cs-carousel-caption">
          <strong>Overlay with Light/Dark Handling</strong>
          <p>Overlay managing unpredictable end-frame lighting. Balanced control but introduced potential text conflicts.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/endcard-endofcourseexpl.png" alt="End Card — End of Course Variant" />
        <div class="cs-carousel-caption">
          <strong>End of Course Variant</strong>
          <p>How should the recommendation experience change when a learner completes the full course, not just a single clip?</p>
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

### Final Design

<div class="cs-featured">
  <img src="/images/endcard-3.png" alt="End Card V1 Final Design" />
  <div class="cs-featured-body">
    <ul>
      <li>University logo for credibility</li>
      <li>Countdown timer at top for visibility</li>
      <li>Next-video title as primary focus</li>
      <li>Thumbnail for intentional, engaging recommendation</li>
      <li>Low-pressure tertiary "Play now" button</li>
      <li>Strong scrim for universal contrast</li>
    </ul>
  </div>
</div>

## System Extension

Evolved the design patterns into a unified visual language across discovery surfaces. Clips became instantly recognizable, trustworthy, and clearly connected to their parent courses.

<div class="cs-carousel">
  <div class="cs-carousel-track-wrap">
    <div class="cs-carousel-track">
      <div class="cs-carousel-slide">
        <img src="/images/post-dogfooding-Updated-image-sizing.png" alt="Post-Dogfooding — Updated Image Sizing" />
        <div class="cs-carousel-caption">
          <strong>Post-Dogfooding Refinement</strong>
          <p>Updated image sizing and proportions based on internal testing feedback.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/search-dropdown.png" alt="Clips in Search Dropdown" />
        <div class="cs-carousel-caption">
          <strong>Search Dropdown</strong>
          <p>Clips integrated into search suggestions for immediate, low-friction discovery.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/clipsinsearch.png" alt="Clips in Search Results" />
        <div class="cs-carousel-caption">
          <strong>Search Results</strong>
          <p>Clips merchandised alongside full courses on search results pages.</p>
        </div>
      </div>
      <div class="cs-carousel-slide">
        <img src="/images/clips-extensions-scaled.png" alt="Clips Extensions System" />
        <div class="cs-carousel-caption">
          <strong>Extensions System</strong>
          <p>The full system — a unified visual language across all discovery surfaces.</p>
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

## Strategic Impact

The project validated short-form content driving long-form demand. It sparked dedicated manual curation, became the platform model for video surfacing, and strengthened customer confidence in bite-size learning pathways — contributing to enterprise renewals and expansions.
