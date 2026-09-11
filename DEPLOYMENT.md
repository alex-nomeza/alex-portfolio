# Deployment

Repository: https://github.com/alex-nomeza/alex-portfolio (public).
Website: https://alex-nomeza.github.io/alex-portfolio/

## Automatic publication

GitHub Pages uses GitHub Actions. The `.github/workflows/deploy.yml` workflow
runs on every push to `main` and supports manual dispatch. It installs from the
lockfile, checks formatting, runs Astro/TypeScript checks, builds and publishes.
A failed check or build prevents deployment. Official Astro/GitHub actions use
the built-in token and OIDC with job-scoped permissions; no extra secret is needed.

Astro uses `site: https://alex-nomeza.github.io`, `base: /alex-portfolio/`, and
trailing slashes. Internal links use `withBase`. Do not commit `dist/`.

## Validation and rollback

Run `npm run format:check`, `npm run check`, and `npm run build`. Inspect the
preview at `/alex-portfolio/`, including links, images and keyboard navigation.
To roll back, revert the source commit and push to `main`; the workflow republishes.

## Migration

On 2026-09-11 the user explicitly requested making `alex-portfolio` public and
removing the temporary build-only repository `alex-nomeza.github.io`. This
supersedes manual publication and keeps source and deployment in one repository.

If a custom domain is added, update Pages, DNS, Astro site/base and verify HTTPS.
