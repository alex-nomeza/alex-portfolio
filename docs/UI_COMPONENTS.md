# UI components

The portfolio uses the official shadcn/ui Radix components, configured in
`components.json`. Pages and editorial sections remain Astro components.

- `src/components/ui/button.tsx`: button variants, adapted to the portfolio tokens.
- `src/components/ui/link-button.tsx`: composes Button and an anchor inside React
  so Radix `asChild` receives a React element rather than an Astro slot. Use for
  navigation actions; arrows are decorative and hidden from assistive technology.
- `src/components/ui/badge.tsx`: laboratory statuses and tags.
- `src/components/ui/timeline.tsx`: static timeline primitives adapted from
  [timDeHof/shadcn-timeline](https://github.com/timDeHof/shadcn-timeline), a community
  component built on shadcn/ui (MIT license in `TIMELINE_LICENSE.txt`).
  `src/components/cv/CvTimeline.tsx` composes these primitives and the existing
  shadcn Badge for CV periods. Connectors follow content height and stop at the
  final entry. Animation/loading code is omitted; no new dependency or hydrated
  island is needed. CV data and draft filtering remain in place.
- `src/components/ui/empty.tsx`: collection empty-state primitives.
- `src/components/blocks/collection-empty.tsx`: shared empty collection message.

These components render to HTML at build time. There are **no hydrated islands**
and no client directives. Keep ordinary navigation, project lists, headings and
image galleries in Astro; they do not require interactive React controls.

The fixed header has one native Astro script: it fades the middle of the name
and moves its final A onto the first A, forming one A over the first 180 pixels of scrolling.
It uses a passive scroll listener and requestAnimationFrame, measures the header
and logo after font loading and resizing, and keeps the full name when reduced
motion is requested. Without JavaScript, the fixed header and links still work
with the full name. Header spacing and scroll padding keep content accessible.

Tailwind v4 is compiled through `@tailwindcss/vite`. Its semantic colors map to
the existing portfolio CSS custom properties in `src/styles/global.css`.

`ZahirSlideshow.astro` enhances only Le Zahir with a native-script slideshow,
using static shadcn Buttons. Its three views are the existing artwork and two
explicitly captioned detail crops, defined in `src/data/le-zahir.ts`. Buttons,
arrow/Home/End keys and horizontal touch gestures select a view; no autoplay.
CSS perspective and a light sweep respect reduced motion. Without JavaScript,
all views remain readable in a vertical list. No React island or dependency is added.
Tailwind Preflight is deliberately excluded to retain the existing CSS reset.
Components use square corners, visible keyboard focus and the global reduced
motion rules. `@radix-ui/react-slot` is the only required Radix primitive;
`class-variance-authority`, `clsx` and `tailwind-merge` handle variants and classes.

Add only needed components with `npx shadcn@latest add <component>` and review
generated imports, dependencies and styles. Preserve these local adaptations
when updating from the registry. See the [Astro installation guide](https://ui.shadcn.com/docs/installation/astro)
and [Button composition](https://ui.shadcn.com/docs/components/radix/button).

Validation: `npm run format:check`, `npm run check`, `npm run build`, then inspect
the production preview at mobile, tablet and desktop widths, including keyboard
focus, internal links and the browser console.
