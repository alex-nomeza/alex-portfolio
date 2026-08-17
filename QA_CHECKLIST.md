# QA Checklist

Use before a milestone, pull request, or deployment.

## Build

- [ ] Dependencies install cleanly from lockfile.
- [ ] Astro/TypeScript check passes.
- [ ] Production build passes.
- [ ] No unexpected build warnings.
- [ ] No secrets or `.env` files tracked.

## Navigation

- [ ] Logo/name returns to home.
- [ ] Work link works.
- [ ] About link works.
- [ ] Lab link works.
- [ ] Contact link works.
- [ ] Project links work.
- [ ] Next-project links work.
- [ ] 404 works.

## Responsive

Check at minimum:

- [ ] ~360px.
- [ ] ~390px.
- [ ] ~768px.
- [ ] ~1024px.
- [ ] ~1440px.
- [ ] large desktop.

Confirm:

- [ ] no horizontal overflow;
- [ ] intentional title wrapping;
- [ ] readable body width;
- [ ] images are not distorted;
- [ ] touch targets are usable.

## Accessibility

- [ ] Skip link works.
- [ ] Keyboard order is logical.
- [ ] Focus is visible.
- [ ] No hover-only essential content.
- [ ] Heading hierarchy is logical.
- [ ] Images have correct alt behavior.
- [ ] Reduced motion works.
- [ ] Contrast is sufficient.
- [ ] Page zoom remains usable.

## Content

- [ ] No lorem ipsum.
- [ ] No `[TODO]` visible in production.
- [ ] Dates/roles are accurate.
- [ ] No invented metrics/testimonials.
- [ ] No private information.
- [ ] Draft projects are excluded.

## Visual

- [ ] Typography matches tokens.
- [ ] Grid/gutters are consistent.
- [ ] Borders are intentional.
- [ ] No accidental rounded SaaS cards.
- [ ] Images provide the main color.
- [ ] Animation is restrained.
- [ ] Mobile feels designed, not compressed.

## SEO

- [ ] Unique page title.
- [ ] Description.
- [ ] Canonical.
- [ ] Open Graph.
- [ ] Sitemap.
- [ ] Robots behavior.
- [ ] Favicon.
- [ ] No accidental noindex in production.

## Performance

- [ ] Hero/LCP image is optimized.
- [ ] Below-fold images lazy-load.
- [ ] Image dimensions are reserved.
- [ ] Fonts are not excessive.
- [ ] No unnecessary third-party JS.
- [ ] No unnecessary framework runtime.

## Deployment

- [ ] Correct GitHub branch.
- [ ] Correct Pages/source configuration.
- [ ] Correct Astro base URL.
- [ ] Production links/assets work under deployed path.
- [ ] HTTPS works.
