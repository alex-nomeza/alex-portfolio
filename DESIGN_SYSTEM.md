# Design System

## 1. Direction

Minimal Creative Developer × Swiss Editorial.

Keywords:

- restrained;
- typographic;
- precise;
- spacious;
- monochrome;
- editorial;
- technical;
- visual-first.

Avoid:

- SaaS dashboard styling;
- gradients;
- glassmorphism;
- neon;
- overly rounded cards;
- decorative blobs;
- generic "AI website" aesthetics;
- excessive animation.

## 2. Color

Initial tokens:

```css
:root {
  --color-bg: #f7f7f5;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-text-muted: #737373;
  --color-border: #d9d9d6;
  --color-inverse-bg: #111111;
  --color-inverse-text: #f7f7f5;
}
```

Rules:

- interface remains mostly monochrome;
- portfolio imagery provides color;
- reserve solid black sections for deliberate contrast;
- do not add an accent color by default.

## 3. Typography

Recommended:

- primary sans: Geist Sans or another clean modern grotesk;
- technical/meta: Geist Mono or equivalent.

Use local or privacy-conscious loading strategy.

Hierarchy should be fluid.

Example starting points:

```css
--font-size-display: clamp(4rem, 11vw, 11rem);
--font-size-h1: clamp(3rem, 7vw, 7rem);
--font-size-h2: clamp(2rem, 4vw, 4.5rem);
--font-size-body-lg: clamp(1.25rem, 1.6vw, 1.75rem);
--font-size-body: clamp(1rem, 1.1vw, 1.125rem);
--font-size-meta: 0.75rem;
```

Display typography:

- tight leading;
- slightly negative tracking where appropriate;
- never sacrifice legibility.

Body:

- comfortable line length;
- target roughly 55–75 characters per line.

## 4. Grid

Desktop:

- 12-column conceptual grid;
- generous outer gutters;
- project layouts may span asymmetrically.

Tablet:

- 8-column conceptual grid.

Mobile:

- 4-column conceptual grid;
- project media typically full available width.

Suggested token:

```css
--page-gutter: clamp(1.25rem, 4vw, 4.5rem);
--section-space: clamp(5rem, 10vw, 10rem);
```

## 5. Borders

Use subtle 1px neutral borders for:

- project index rows;
- section separators;
- metadata groups;
- navigation boundaries when needed.

Borders should organize information, not decorate it.

## 6. Radius

Default:

- little to no radius.

Project visuals:

- 0–8px maximum unless the image itself requires a device-frame treatment.

Avoid universal 16–24px "card" radii.

## 7. Buttons and links

Primary interaction style:

- typographic;
- underlined or directional arrow;
- minimal rectangular button where a stronger CTA is necessary.

Examples:

- `View project ↗`
- `Selected work ↓`
- `Email me ↗`

Visible focus state is mandatory.

## 8. Imagery

- prioritize real project imagery;
- no generic stock filler;
- preserve original aspect ratios intentionally;
- use art-directed crops only when needed;
- project cover images should be compositionally strong;
- always provide meaningful alt text unless image is purely decorative.

## 9. Motion

Motion vocabulary:

- opacity reveal;
- transform of a few pixels;
- image clip/reveal;
- small image scale on hover;
- restrained page transition.

Typical timing:

- 150–250ms for hover;
- 350–600ms for page/section reveal.

Do not:

- hijack scrolling;
- delay navigation;
- animate every element;
- use motion as the only indication of state.

Respect reduced-motion preference.

## 10. Cursor

Use the system cursor by default.

A custom project-hover cursor may be explored later only if:

- keyboard behavior remains complete;
- touch is unaffected;
- it adds clear interaction value.

## 11. Responsive principles

Mobile is a designed layout, not a scaled-down desktop.

At small widths:

- display typography wraps intentionally;
- navigation remains immediately understandable;
- metadata can stack;
- projects become a single strong column;
- spacing remains generous but proportionate.

## 12. Project case studies

Case-study visual rhythm:

1. title/meta;
2. hero;
3. concise overview;
4. paired or offset media;
5. full-bleed/high-impact media;
6. process/role details;
7. final media sequence;
8. next project.

Layouts should vary enough to suit each project while retaining the common system.
