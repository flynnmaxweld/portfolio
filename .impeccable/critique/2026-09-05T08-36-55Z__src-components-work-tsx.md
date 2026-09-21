---
target: the work section
total_score: 29
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/run/media/codex/Max/LINUX/Portfolio/src/components/Work.tsx"
target_fingerprint: "sha256:e021743b26cfbe85bf88fa2a4804c52e454a06519df40d886b7b8113043479ab"
target_path: /run/media/codex/Max/LINUX/Portfolio/src/components/Work.tsx
timestamp: 2026-09-05T08-36-55Z
slug: src-components-work-tsx
closed: true
---
Method: dual-agent (A: critique-assessment-a / explore · B: critique-assessment-b / task)

# Critique — Work section (stack-of-cards)

## Design Health Score
| Heuristic | Score |
|---|---|
| 1 · Visibility of system status | 4 |
| 2 · Match between system & real world | 4 |
| 3 · User control & freedom | 3 |
| 4 · Consistency & standards | 4 |
| 5 · Error prevention | 3 |
| 6 · Recognition rather than recall | 4 |
| 7 · Flexibility & efficiency | n/a (single-path curated list is correct on an Experience surface; per-project prev/next nav not required) |
| 8 · Aesthetic & minimalist design | 4 |
| 9 · Help users recognize/recover | 3 |
| 10 · Help & documentation | n/a (self-evident; no doc layer on a portfolio) |
**Total: 29 / 32** (renormalized over 8 scored heuristics) · **P0: 1 · P1: 3 · P2: 1**

## Design-Specificity Verdict
**Specific, not interchangeable.** The register/stack/record metaphor is product-native — register numbers, category chips, thumbnails, one forward arrow read as catalogued AI/ML experiment records on a bench, not a generic grid. Deliberate scarcity (3 cards) asserts judgment. The paper/ink/rust language persists into the detail overlay so the "record" survives opening. Minor leakage: cryptic codenames (VOID, A.R.I.S.) need a teaser read to decode on first scan.

## Mode
Experience — the artifact leads; the interface recedes. Confirmed appropriate.

## Overall Impression
A genuinely low-load, product-grounded surface. Warm paper + ink + rust with a confident Machine + Space Mono + Breton type system delivers an edited editorial identity that fits an AI/ML craft portfolio. Detector scan is clean on Work (the 4 overused-font hits are pre-existing global/About/Contact false positives). No console/page errors, no broken images, no layout overflow at 1440px. The weak front is accessibility: the primary action (open a record) is mouse/touch-only, and the overlay promises a modal (`aria-modal`) it doesn't fully deliver.

## What's Working
1. **Product-grounded concept** — "selected work" as a physical record catalog, not a template grid.
2. **Exceptional type system** — Machine display + Space Mono params + Breton italic on warm paper is a confident, non-generic editorial identity.
3. **Honest credibility design** — the A.R.I.S. "in development" rust-dot note and concrete stack strings are exactly the trust signals a client evaluator needs.
4. **Clean technical state** — detector-clean markup, no errors, healthy contrast on primary copy (11.45:1), Escape + backdrop close, close button focusable, focus stays inside the open overlay.

## Priority Issues

**P0 — Cards are not keyboard-operable (blocks the core action).**
Why: the primary action is "open a record." `<article onClick>` has no tabIndex, no role="button", no onKeyDown — keyboard and screen-reader users have no way to open any record (Tab never lands on a card). This breaks the job and is an a11y failure.
Fix: make each card focusable with `tabIndex={0}`, `role="button"` (or a real `<button>`/`<a>`), fire `open(i)` on Enter/Space, and give each card an accessible name. `.stack-card:focus-visible` styling already exists but is unreachable.
Command: `@impeccable make stack-card focusable and activate on Enter/Space via keydown; add role=button and per-record aria-label; keep Escape in overlay`

**P1 — Detail overlay lacks focus trap, focus-on-open, focus-return, and body scroll lock.**
Why: `aria-modal="true"` promises a modal but doesn't deliver — screen readers can escape into the page, the page scrolls behind, focus isn't placed on open nor restored on close. Anecdotally the basic Tab loop holds, but there is no formal trap. Breaks at the exact high-stakes reading moment.
Fix: on open focus the panel/close button; trap Tab within the panel; restore focus to the triggering card on close; `overflow:hidden` on body while open; hide background content.
Command: `@impeccable add focus trap + focus-on-open + focus-restore + body scroll lock to the stack-overlay; set inert/aria-hidden on the section while open`

**P1 — No persistent clickability affordance (hover-only).**
Why: first-time visitors don't know cards open until they happen to hover. The static arrow at the card edge isn't an obvious "open" invitation, so a non-hovering visitor may leave without opening any record — the primary action never happens.
Fix: make the arrow directionally stronger / a constant colored cue, or add an explicit static "Open" micro-label / persistent edge treatment that reads without hover.
Command: `@impeccable make the card affordance visible without hover — a stronger persistent arrow or explicit open cue`

**P1 — Modal availability gap on A.R.I.S. (dead-end at peak).**
Why: A.R.I.S. reads as the most ambitious record (robotics) but its overlay ends on an "in development" note with no next step (no GitHub). A Maya most impressed by it has no forward action at the emotional peak.
Fix: when a project has no href, render a "Get in touch about A.R.I.S." CTA in the overlay foot linking to Contact, so every record ends actionable.
Command: `@impeccable when a project has no href, render a Contact CTA in the overlay foot instead of only an in-dev note`

**P2 — Cryptic project names slow first-scan comprehension.**
Why: VOID / A.R.I.S. decode only after reading the teaser; a time-pressed evaluator reads two of three records as opaque until then.
Fix: keep the category chip prominent enough to decode before the title in the scan order (the chip already exists).
Command: `@impeccable ensure the category chip ranks readable before the cryptic title in scan order`

## Contrast report (Assessment B)
| Element | Ratio | AA 4.5:1 |
|---|---|---|
| card title `.stack-card-body h3` | 11.45:1 | ✅ AAA |
| card category `.stack-card-cat` | 3.81:1 | ❌ (passes AA-large 3:1 only) |
| intro `.stack-sub` | 4.18:1 | ❌ borderline (0.32 under) |
| overlay title/desc | 19.8:1 | ✅ |
Fix suggestion for the two fails (both use `--stack-ink-soft:#6a6f76` on paper): darken `--stack-ink-soft` (e.g. `#5f646b`) to clear 4.5:1.

## Persona Red Flags
- **Jordan (first-timer):** may not realize cards are clickable → leaves without opening any record (P1 hover-only affordance).
- **Maya (time-pressed evaluator):** 3 modal round-trips, no intermediate scan of all stack strings; cryptic titles force extra reads (P2).
- **Alex (power user / keyboard):** cannot open any record at all (P0) and the modal leaks focus (P1).

## Minor Observations
- Thumb `object-fit: cover` on 16:11 may crop screenshot proof-of-work; `contain` might preserve fidelity since these are the evidence.
- Overlay 16:9 media with `cover` could crop taller/portrait UI — consider `contain`.
- No body scroll lock while modal open (bundled with P1).
- Watch the paper-to-dark-Contact edge so the paper section's bottom doesn't visually merge into the dark (currently clean at 1440px).

## Provocative Questions
1. Does "minimal" here read as "selected" or "that's all they've built" to an AI/ML capability evaluator? Could a "a focused selection — more on request" line convert scarcity into intrigue?
2. Why does the uns-shipped, most ambitious project get no forward action at the peak?
3. Does the center modal destroy the stack metaphor at the moment it should extend it — should the open state keep the stack visible (magnify in place / advance the stack)?
4. Who is the arrow for — the cursor or the eye? Does hover-only affordance cost you every non-hovering visitor?
