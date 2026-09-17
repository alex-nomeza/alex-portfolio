# Alex Portfolio — Agent instructions

Single instruction file for the repository.

## Mission & design

Build Alex Rafanomezantsoa’s production-quality Astro portfolio around **Multidisciplinary Designer & Developer**. Prioritize clarity, work, performance, accessibility, responsive behavior, SEO, and maintenance by one person.

- Minimal editorial layout: strong typography/grid, generous whitespace, minimal navigation.
- Off-white, black, neutral gray; color comes from project imagery. Gradients only within artwork.
- Avoid generic SaaS/developer/Behance templates, glassmorphism, neon, fake terminals, decorative code, stock illustrations, and excessive rounded cards.
- Every interaction needs a purpose. No scroll hijacking, harmful custom cursors, or heavy animation libraries by default.

## Implementation

- Astro, strict TypeScript, static output, build-time data; default to `.astro` pages/components.
- Use **shadcn/ui** for reusable controls; add only needed components and adapt their design. React is allowed for these; other runtimes require a justified interaction. No other UI framework.
- Hydrate only for required interaction; document each island’s purpose. Prefer native HTML/CSS over client JavaScript.
- Use CSS custom-property tokens; map Tailwind to them. Avoid repeated magic values. Scope styles where useful; justify reset packages.
- Use fluid responsive CSS (`clamp`, grid/flex, queries).
- In `src/`: semantic HTML, focused components, explicit props, thin pages, readable data loading; avoid trivial wrappers and duplicated content. Separate content from presentation; prefer collections/page data and Astro image tooling.
- Interactive components must support keyboard, visible focus, touch, and `prefers-reduced-motion` when animated.

## Content

- Public professional information only. Never invent roles, dates, clients, metrics, awards, technologies, testimonials, or outcomes.
- Keep writing concise, concrete, professional, scannable, and evidence-based; no marketing filler.
- In `src/content/`: omit unconfirmed facts or keep entries as `draft`; use explicit `[TODO: description]` placeholders only in unpublished drafts. Never publish incomplete entries to fill grids.
- Meaningful images need accurate alt text; omit useless decorative details.

## Validation

For implementation: format, lint if configured, run Astro/TypeScript checks and production build; inspect relevant pages at mobile/tablet/desktop widths, keyboard navigation, console errors, and internal links. A failed build blocks completion.

## Workflow & token economy

- Inspect relevant code/docs, briefly state the approach, make the smallest coherent change, validate, then report changed files, decisions, checks, and remaining TODOs.
- Read/search only relevant files and sections; batch independent reads, limit output, and reuse verified context. Avoid repeated checks unless changes or failures justify them.
- Keep plans, progress updates, and final reports concise; do not repeat instructions or dump logs.
- Preserve existing work and architecture; do not silently broaden scope. Explain new dependencies.
- Use focused Conventional Commits. Never commit secrets, `.env` contents, credentials, private keys, or private personal data; exclude build output unless deployment requires it.
- No force-push or shared-history rewrite without explicit instruction.
