# Deployment

## Target

Primary target: GitHub Pages using GitHub Actions.

Astro maintains an official GitHub Pages deployment approach. Use the current official Astro documentation when implementing the workflow.

## Important private-repository constraint

GitHub Pages availability for a private repository depends on the GitHub account plan.

At the time this document was prepared:

- GitHub Free supports Pages from public repositories;
- GitHub Pro/Team/Enterprise plans support Pages from private repositories.

Therefore:

### If the GitHub account supports private-repository Pages

Keep:

- source repository private;
- Pages deployment enabled through GitHub Actions.

### If the account does not support private-repository Pages

Do **not** make the repository public automatically.

Instead present the user with these choices:

1. upgrade/use a GitHub plan that supports Pages from a private repository;
2. keep the source repository private and deploy the static build to another supported host;
3. explicitly change repository visibility to public only if the user requests it.

Never change repository visibility without explicit approval.

## Astro configuration

When using project Pages URL:

```text
https://<user>.github.io/alex-portfolio/
```

Astro may require:

- `site`;
- `base`.

Use the current Astro GitHub Pages documentation to configure these correctly.

With a custom domain, revisit `site` / `base`.

## GitHub Actions

Desired workflow characteristics:

- trigger on push to `main`;
- allow manual dispatch;
- install dependencies from lockfile;
- build Astro;
- deploy Pages artifact;
- use minimal permissions.

Use official/current actions from Astro/GitHub documentation.

## Pre-deploy checks

Run:

- format check;
- Astro/TypeScript check;
- production build;
- optional smoke test.

Deployment must fail if the production build fails.

## Custom domain

Later phase:

- purchase/choose domain;
- configure GitHub Pages custom domain;
- configure DNS;
- enforce HTTPS;
- update Astro canonical site URL;
- verify Open Graph/canonical output.

Potential domains are product decisions, not hard-coded architecture.

## Rollback

Because deployment is source-controlled:

- revert the problematic commit;
- push;
- let the deployment workflow publish the last known good source.

Do not manually patch generated production files.

## Current publication (2026-09-11)

Production URL: https://alex-nomeza.github.io/

- Source remains private in `alex-nomeza/alex-portfolio`.
- Public delivery repository: `alex-nomeza/alex-nomeza.github.io`.
- Only the contents of the validated `dist/` directory and `.nojekyll` are published.
- GitHub Pages serves the root of the delivery repository's `main` branch.
- Astro `site` uses the production origin; `base` remains `/`.
- No source history, project documents, credentials, or source maps are copied.

This initial release uses a local build and a push of the generated files. A push
of the source repository does not automatically republish the website.

For updates, run `npm run format:check`, `npm run check`, and `npm run build`.
Clone the delivery repository into an ignored temporary directory, replace its
tracked website files with the new `dist/` contents, keep `.nojekyll`, review the
diff, then commit and push. Do not copy the source repository or its `.git` folder.
Use the GitHub noreply email for commits in the public delivery repository.

To roll back, revert the relevant delivery commit and push. GitHub Pages then
publishes the reverted static files. Cross-repository automatic delivery remains
a future task and requires dedicated authentication with limited permissions.
