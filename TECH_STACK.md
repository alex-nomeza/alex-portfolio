# Technical Stack

## Core

- Astro
- TypeScript
- HTML
- CSS

Use the latest stable versions compatible with the project at implementation time. Record material version decisions in `DECISIONS.md`.

## Rendering

Default:

- static site generation.

Do not add server-side rendering unless a later feature requires it.

## Components

Default:

- Astro components.

Framework islands:

- prohibited by default;
- may be introduced only for a concrete interaction that cannot be implemented cleanly with Astro/native browser APIs.

## Styling

Preferred:

- project CSS;
- CSS custom properties;
- component-scoped styles where useful.

Tailwind:

- optional;
- use only if it improves maintainability;
- do not make Tailwind a dependency merely because it is popular.

## Content

Use Astro Content Collections for:

- portfolio projects;
- Lab entries if appropriate.

Validate content using schemas.

## Images

Use Astro's supported image optimization pipeline for local images when practical.

Goals:

- responsive image sizes;
- modern formats where appropriate;
- explicit dimensions/aspect ratio;
- lazy loading below the fold;
- no avoidable layout shift.

## Icons

Prefer:

- inline SVG;
- a small icon package only if repeated icon use justifies the dependency.

Do not import a large icon bundle for three icons.

## Fonts

Preferred:

- Geist Sans;
- Geist Mono;
  or compatible alternatives.

Use a performant loading strategy.
Avoid unnecessary font weights.

## Animation

Default:

- CSS;
- native browser APIs;
- Astro transitions where appropriate.

No GSAP, Framer Motion, Three.js, Lenis, or similar library without explicit justification.

## Tooling

Recommended:

- npm or pnpm; choose one and commit the corresponding lockfile;
- Prettier;
- ESLint only if the current Astro setup benefits from it;
- Astro check;
- GitHub Actions.

Do not mix package managers.

## Testing

Minimum:

- build validation;
- Astro/TypeScript checks;
- targeted unit tests only for meaningful logic.

Optional as project grows:

- Playwright smoke tests;
- accessibility checks;
- Lighthouse CI.

## Deployment

Primary target discussed:

- GitHub Pages through GitHub Actions.

Important:
GitHub Pages availability for private repositories depends on the GitHub plan. Keep deployment architecture portable so the same static `dist/` can be deployed to another static host if required.

## Browser support

Target current evergreen browsers:

- Chrome;
- Edge;
- Firefox;
- Safari.

No IE support.

## Dependency policy

Before adding a dependency, answer:

1. What problem does it solve?
2. Can the platform/Astro/CSS solve it?
3. What does it add to client bundle size?
4. Is it actively maintained?
5. Does it create vendor lock-in?

Prefer zero-dependency solutions for small features.
