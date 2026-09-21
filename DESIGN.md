---
name: "FM. Portfolio"
description: "A modern, card-driven showcase for AI, robotics, and creative systems work."
colors:
  bg: "#fafafa"
  bg-dark: "#0c0b0a"
  surface: "rgba(250, 250, 250, 0.25)"
  surface-dark: "#161512"
  ink: "#1a1a1a"
  ink-dark: "#f5f2eb"
  ink-2: "#4a4a4a"
  ink-2-dark: "#999489"
  rule: "rgba(0, 0, 0, 0.08)"
  rule-dark: "rgba(255, 255, 255, 0.08)"
  glow: "rgba(100, 100, 100, 0.05)"
  glow-dark: "rgba(232, 90, 79, 0.08)"
  accent: "#d5442c"
  accent-dark: "#e85a4f"
  paper: "#ffffff"
  paper-light: "#F5F4F0"
  muted: "#a0a0a0"
typography:
  display:
    fontFamily: "Machine, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Machine, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Machine, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Zirena, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  muted:
    fontFamily: "Zirena, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.16em"
  italic:
    fontFamily: "Breton, Georgia, serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  hairline: "0.2rem"
  xs: "2px"
  sm: "4px"
  card: "6px"
  panel: "8px"
  specimen: "12px"
  workbench: "16px"
  dialog: "18px"
  pill: "999px"
  portrait: "clamp(90px, 20vw, 200px) 0.2rem 0.2rem clamp(90px, 20vw, 200px)"
spacing:
  hero: "0 3rem 5rem"
  nav: "1.5rem 3rem"
  section: "clamp(5rem, 10vh, 8rem) 0 clamp(4.5rem, 8vh, 6.5rem)"
  lab: "clamp(3rem, 6.5vh, 5rem) 0 clamp(3rem, 6vh, 4.5rem)"
  row: "clamp(1.4rem, 2.6vh, 2.1rem) 0.5rem"
  panel: "clamp(1.25rem, 2.5vw, 2rem)"
  overlay: "clamp(2rem, 5vw, 3.25rem)"
  gap: "clamp(1.5rem, 3vw, 3rem)"
components:
  nav-link:
    typography: "Machine, sans-serif; 1.1rem; 700; 0.05em uppercase"
    textColor: "{colors.ink-2}"
    backgroundColor: "transparent"
    padding: "0"
    size: "1.1rem"
    height: "auto"
    width: "auto"
  project-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "clamp(1.4rem, 2.6vh, 2.1rem) 0.5rem"
    size: "auto"
    height: "auto"
    width: "100%"
  project-row-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    rounded: "0"
    padding: "clamp(1.4rem, 2.6vh, 2.1rem) 0.5rem"
    size: "auto"
    height: "auto"
    width: "100%"
  work-overlay-panel:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    padding: "{spacing.overlay}"
    size: "min(50rem, 100%)"
    height: "min(88vh, 48rem)"
    width: "min(50rem, 100%)"
  contact-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper}"
    rounded: "0"
    padding: "clamp(1.25rem, 2.5vh, 2rem) 0"
    size: "auto"
    height: "auto"
    width: "100%"
  contact-cta:
    backgroundColor: "rgba(213, 68, 44, 0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 4vw, 2rem)"
    size: "clamp(0.85rem, 2vw, 0.95rem)"
    height: "auto"
    width: "auto"
  lab-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.workbench}"
    padding: "{spacing.panel}"
    size: "auto"
    height: "auto"
    width: "100%"
  bench-widget:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.specimen}"
    padding: "1rem"
    size: "auto"
    height: "auto"
    width: "100%"
---

# Design System: FM. Portfolio

## Overview

**Creative North Star: "A modern laboratory for systems that feel intentional."**

The portfolio presents technical work as a dynamic card showcase. The visual language is contemporary, layered, and engaging: smooth scroll interactions, floating card stacks, decorative status widgets, and a warm accent used throughout. The dark default world creates an immersive studio atmosphere; the light theme provides an alternative. Motion is purposeful: scroll reveals, card stacking, and subtle animations reinforce the interactive narrative.

The page is divided into a full-viewport hero with smooth scroll scaling, an editorial About section with a skills marquee, a card-stack Work showcase with left-sticky metadata and filterable project cards, and a modern light-themed Contact footer with glassmorphic elements. Motion is integrated throughout to make the interface feel alive and responsive.

**Key Characteristics:**

- Dark default world with smooth scroll effects and light-theme override.
- DM Sans for contemporary sans-serif clarity; Machine for structural headings; Space Mono for technical labels.
- Stacked card layout with hover reveal and in-view activation.
- Warm accent used for active states, interactive feedback, and emphasis.
- Smooth scroll animations, floating elements, and layered depth.

## Colors

The palette is near-monochrome with a single warm signal. Use the semantic tokens rather than copying presentation colors: the dark theme is the default, while the light theme changes the background, text, rules, and glow without changing the accent.

### Primary

- **Signal Red** (#d5442c): The only saturated color in the system. Use it for active states, small status marks, hover emphasis, and the short rule beneath the Contact heading. It should remain a signal, not a background.

### Neutral

- **Paper** (#fafafa): The default page and section background.
- **Ink** (#1a1a1a): The default foreground color.
- **Ink Secondary** (#4a4a4a): Secondary text, muted metadata, and non-primary labels.
- **Rule** (rgba(0, 0, 0, 0.08)): Hairline dividers and borders.
- **Glow** (rgba(100, 100, 100, 0.05)): A very soft neutral wash for the portrait placeholder and background atmosphere.
- **Dark Paper** (#0a0a0a): The default section background.
- **Dark Ink** (#ffffff): The default foreground in dark sections.
- **Dark Ink Secondary** (#e0e0e0): Secondary text in dark sections.
- **Dark Rule** (rgba(255, 255, 255, 0.08)): Hairlines in the dark world.
- **Dark Glow** (rgba(155, 155, 155, 0.08)): The dark-theme atmospheric wash.
- **Contact Paper** (#ffffff): Foreground for the Contact section.
- **Contact Muted** (#a0a0a0): Secondary text in the Contact section.

**The One Accent Rule.** Use the accent for no more than a small visual signal on a screen. It marks interaction and direction; it does not decorate every surface.

## Typography

**Display Font:** Machine (with system sans-serif fallback)  
**Body Font:** Zirena (with system sans-serif fallback)  
**Label Font:** Space Mono (with monospace fallback)  
**Editorial Italic:** Breton (with Georgia serif fallback)

The type system combines a technical display voice with a warmer editorial voice. Machine establishes structure and project names; Zirena carries the main reading voice; Breton creates a quiet italic counterpoint; Space Mono identifies metadata, indexes, and controls.

### Hierarchy

- **Display** (400 weight, clamp(2.5rem, 6vw, 4.5rem), 1.15 line-height, -0.04em tracking): The opening statement. Keep it centered and let the second line carry the Breton italic contrast.
- **Headline** (400 weight, clamp(2.6rem, 7vw, 5.25rem), 0.98 line-height, -0.015em tracking): Section headings such as Work. Use uppercase only where the existing section hierarchy calls for it.
- **Title** (400 weight, clamp(1.6rem, 3.4vw, 2.4rem), 1.05 line-height, -0.01em tracking): Project names, lab titles, and other primary labels.
- **Body** (16px default, 400 weight, 1.6 line-height): General interface copy and descriptions. Keep line lengths readable, generally no wider than 44-60ch.
- **Muted** (clamp(1rem, 1.5vw, 1.15rem), 400 weight, 1.6 line-height): Supporting copy and secondary descriptions.
- **Label** (0.65-0.85rem, 400 or 600 weight, uppercase, 0.08-0.24em tracking): Numbers, categories, status text, and control labels.
- **Italic** (clamp(1.15rem, 2.2vw, 1.4rem), 400 weight, 1.5 line-height): Teasers and editorial asides, especially in Breton.

**The Hierarchy Rule.** Type should establish the path through the page. Do not use size, weight, or decoration as a substitute for clear information structure.

## Layout

The site uses a full-width, section-based layout with viewport-aware interactions and layered depth.

- **Hero:** A full-viewport animated statement with scroll-driven scale and border-radius transforms. Navigation fades on scroll; back-to-top appears after hero exit. Powered by Lenis smooth scroll.
- **About:** An editorial section with bio text and asymmetric portrait frame. Skills display as a horizontal marquee with numeric indexing. Animations trigger on scroll reveal.
- **Work:** A two-column sticky layout. Left column (5fr) shows filtered project metadata and sticky info; right column (7fr) displays a card stack that moves into view as scroll progresses. Cards are themeable and tagged with category, status, and visual theme identifiers. Below 960px, layout stacks vertically. Filter controls at the top allow category selection (ALL, AI, Automation, Extension).
- **Contact:** A light-themed closing section with a prefooter banner containing a glassmorphic email input form, a main footer grid with navigation links, and a copyright footer with decorative watermark text.
- **Spacing:** Use viewport-aware clamps for major vertical rhythm. Motion timing is consistent (0.8-0.9s curves with [0.16, 1, 0.3, 1] easing).

At narrow widths, ensure touch targets meet 44x44px minimum. Work cards remain interactive on mobile with simplified hover states.

## Elevation & Depth

The system uses layered depth through overlapping cards, shadows, and translucent surfaces.

- **Card surfaces:** Project cards use subtle gradients, noise overlays, and theme-specific color washes. Shadow: `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12)`.
- **Work overlay:** Dark semi-transparent backdrop with a centered white panel (18px radius, `box-shadow: 0 28px 80px rgba(0, 0, 0, 0.38)`).
- **Sticky info panel:** Low-lift appearance with slight separation from cards.
- **Back-to-top control:** Circular with restrained shadow.
- **Contact form elements:** Glassmorphic input with backdrop blur and subtle borders.

**The Layered Elevation Rule.** Use translucent overlays, soft shadows, and stacking order to create visual hierarchy. Reserve strong shadows for modal and overlay contexts.

## Shapes

The shape language is a mix of editorial precision and soft technical specimens.

- **Portrait frame:** A 3:4 image frame with asymmetric radii: large rounded left corners and sharp right corners. The radius is clamp(90px, 20vw, 200px), with 0.2rem on the sharp corners.
- **Project overlay:** A large, readable sheet with an 18px radius.
- **Workbench and widgets:** Rounded panels at 16px and 12px, respectively, with hairline borders.
- **Chips, tabs, and mini controls:** Small radii from 2px to 6px. These belong to technical interfaces and should remain compact.
- **Pills:** 999px radii for circular close controls and rounded action buttons.
- **Rules:** One-pixel horizontal and vertical dividers create the ledger and editorial structure.
- **Media:** Project images are clipped to the surrounding panel and may use a slight zoomed resting scale for a contained, editorial presentation.

**The Asymmetry Rule.** Use asymmetric rounding only where it creates a signature silhouette, such as the portrait frame. Keep functional controls and data surfaces more regular.

## Components

### Navigation

- **Style:** Uppercase, 1.1rem, Machine type with Zirena fallback. Links appear in hero bottom strip and fade as hero scrolls away.
- **Hover and focus:** Change to primary ink color. Keyboard focus uses visible outline.
- **Layout:** Two-part grid with social links centered and section links right-aligned.

### Hero

- **Style:** Full-viewport animated statement powered by Lenis smooth scroll. Hero scales and border-radius increases on scroll.
- **Typography:** Machine for main lines.
- **Motion:** Content translates up and fades on scroll. Navigation fades earlier. Scroll cue animates in after hero passes.
- **Controls:** Bottom navigation strip, scroll cue, back-to-top control.

### Work Card Stack

- **Style:** Interactive button elements arranged in a stacking layout. Each card has a unique theme (theme-gold-blue, theme-sage-amber, theme-sand-indigo) with gradient backgrounds and status widgets.
- **Content:** Floating widget box with animated flower spinner icon, task description, and status tag.
- **Interaction:** Click to open detail modal. Enter/Space keyboard navigation. Scroll-driven active state sync with left sticky info.
- **Themes:** Each card uses a distinct color wash and gradient to differentiate projects.
- **Responsive:** Stack naturally on narrow viewports.

### Work Metadata Sidebar

- **Style:** Sticky column showing number/total count, project headline, teaser, stack, and call-to-action.
- **Responsive:** Becomes scrollable header on narrow viewports.
- **Sync:** Updates in real-time as user scrolls through card stack (IntersectionObserver-driven).

### Project Filter Controls

- **Style:** Tablist with category buttons (ALL, Artificial Intelligence, Automation, Extension).
- **Behavior:** Click to filter card stack; left metadata syncs with first visible card.
- **Accessibility:** Full keyboard navigation (arrow keys, Enter).

### Project Detail Modal

- **Style:** Centered overlay with dark backdrop and white panel (18px radius). Responsive width and height with internal scroll.
- **Content:** Category label, title, teaser, project image, metadata grid, description, stack, and action link.
- **Accessibility:** Focus trap, Escape to close, focus restoration on close, Tab cycling containment.
- **States:** Close button scales on hover. Backdrop click and Escape both dismiss.

### Portrait Frame

- **Style:** Tall frame with asymmetric radii (large rounded left, sharp right).
- **Placement:** Bleeds intentionally from About section.

### Skills Marquee

- **Style:** Horizontal scrolling list with numeric indexing and skill names.
- **Typography:** Compact labels with Space Mono numbers.
- **Motion:** Continuous scroll with pause on hover/focus.
- **Accessibility:** List semantics with aria-label.

### Contact Section

- **Style:** Light-themed footer with prefooter banner, main footer grid, and copyright.
- **Prefooter:** Glassmorphic email input form with flower icon branding.
- **Main footer:** Grid layout with headline, navigation columns (Socials), and CTA link.
- **Branding:** Decorative flower SVG icons and oversized watermark text ("FLYNN").
- **Footer copy:** Space Mono metadata with year and copyright.

### Buttons and Interactive Elements

- **Card buttons:** Semantic <button> elements with type="button", aria-label, and keyboard support.
- **Filter buttons:** Tablist pattern with role="tab" and aria-selected states.
- **Form controls:** Labeled inputs with aria-label or associated <label> elements.
- **Close buttons:** Icon-only with aria-label="Close details".

## Do's and Don'ts

### Do:

- **Do** preserve the dark default world and smooth scroll animations.
- **Do** use DM Sans for body text clarity, Machine for structural headings, and Space Mono for labels.
- **Do** keep work projects as interactive card buttons in a stacked layout.
- **Do** maintain the left-sticky metadata sidebar sync with scroll-driven card visibility.
- **Do** use smooth scroll with Lenis for hero scale transforms and page navigation.
- **Do** make project cards keyboard operable (Enter/Space) and responsive.
- **Do** implement focus trap and Escape handling in the detail modal.
- **Do** use theme-specific gradients on project cards while maintaining cohesion.
- **Do** respect `prefers-reduced-motion` for Lenis scroll and marquee animations.
- **Do** keep project descriptions grounded in supplied facts and imagery.
- **Do** maintain semantic button elements and proper ARIA labels.

### Don't:

- **Don't** remove the card stack layout; it is the intended Work presentation.
- **Don't** revert Contact to a dark theme; the light footer is intentional.
- **Don't** disable smooth scroll without user preference (prefers-reduced-motion).
- **Don't** hardcode colors; use CSS custom properties and theme tokens.
- **Don't** make interactive elements smaller than 44x44px touch targets.
- **Don't** replace DM Sans with generic fallbacks; load the font reliably.
- **Don't** remove focus trap or focus restoration from the modal.
- **Don't** invent metrics, testimonials, or project claims not in the source material.
- **Don't** disable keyboard navigation or remove aria-labels.
- **Don't** break the skills marquee pause-on-hover behavior.
