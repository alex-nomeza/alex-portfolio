# Source Code Instructions

These instructions apply to files under `src/`.

Also follow the repository-root `AGENTS.md`.

## Components

- Keep components focused.
- Prefer semantic HTML.
- Keep presentation props explicit.
- Avoid components that merely wrap one HTML element without reuse/value.
- Avoid business/content data duplicated inside components.
- Prefer content collections or page data for project content.

## Astro

- Default to `.astro`.
- Client directives require a concrete interaction reason.
- Avoid client hydration for static layout.
- Keep page frontmatter/data loading easy to scan.

## Styling

- Use design tokens.
- Scope component styles where appropriate.
- Do not duplicate magic values across components.
- Responsive behavior must be tested at small and large widths.

## Accessibility

Every new interactive component must define:

- keyboard behavior;
- focus behavior;
- reduced-motion behavior if animated;
- touch behavior.

## Completion

Source changes are incomplete until:

- checks pass;
- production build passes;
- visual behavior is inspected at relevant breakpoints.
