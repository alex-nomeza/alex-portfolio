# Codex Prompts

## Prompt 01 — Bootstrap the local Astro project

```text
You are the senior engineer responsible for bootstrapping this portfolio.

First read:
- AGENTS.md
- CONTEXT.md
- PRD.md
- DESIGN_SYSTEM.md
- TECH_STACK.md
- ARCHITECTURE.md
- CONTENT_MODEL.md
- ACCESSIBILITY.md
- PERFORMANCE.md
- SECURITY.md
- TASKS.md

Then initialize the actual Astro project in this repository.

Requirements:
1. Use the latest stable Astro version compatible with the current environment.
2. Use TypeScript strict mode.
3. Keep the site static-first.
4. Do not add React/Vue/Svelte/Solid.
5. Choose one package manager and use it consistently.
6. Add only necessary dependencies.
7. Create the repository structure described in ARCHITECTURE.md, adapting it only where the current Astro version requires it.
8. Configure project and Lab content collections with typed schemas.
9. Add a minimal BaseLayout, homepage shell, Work/About/Lab/Contact routes, and 404 page.
10. Add global design tokens from DESIGN_SYSTEM.md, but do not fully design the homepage yet.
11. Add scripts for development, build, preview, formatting, and Astro/TypeScript checks.
12. Add/update .gitignore.
13. Do not add fake portfolio content. Use clearly marked draft development fixtures only if required for schema validation.
14. Run all relevant checks and the production build.
15. Update TASKS.md for completed foundation tasks.
16. Update DECISIONS.md only if you make a material architecture decision.

Do not create a GitHub repository yet.

At the end report:
- files created/changed;
- installed dependencies and why;
- checks run;
- build result;
- remaining foundation TODOs.
```

## Prompt 02 — Initialize Git and create the private GitHub repository

```text
Read AGENTS.md, GIT_WORKFLOW.md, SECURITY.md, DEPLOYMENT.md, and TASKS.md.

Goal:
Initialize source control for this existing local Astro portfolio and create its GitHub repository.

Repository requirements:
- name: alex-portfolio
- visibility: PRIVATE
- default branch: main
- remote name: origin
- do not make the repository public
- do not enable GitHub Pages yet
- do not add secrets
- do not overwrite an existing remote/repository

Procedure:
1. Inspect the working tree.
2. Confirm .gitignore excludes secrets, .env files, dependency folders, build output, and appropriate local tooling files.
3. Run the project validation commands and production build before publishing source.
4. Check GitHub CLI authentication with `gh auth status`.
5. If the local folder is not already a Git repository, initialize Git and use `main`.
6. Stage only appropriate source/documentation files.
7. Show a concise summary of what will be committed.
8. Create the initial commit:
   `chore: initialize portfolio`
9. Check whether `alex-portfolio` already exists in the authenticated GitHub account.
10. If it does not exist, create it as a private repository from the current source and configure `origin`.
11. If it already exists, do not recreate or overwrite it; inspect its remote state and proceed safely.
12. Push `main` to `origin`.
13. Verify the GitHub repository is private.
14. Verify the remote URL and clean working tree.
15. Update TASKS.md for the completed repository tasks and commit that update if needed.

Do NOT:
- change the repository to public;
- enable Pages;
- force push;
- delete remote history;
- create or expose credentials;
- commit .env files.

At the end report:
- repository owner/name;
- confirmed visibility;
- branch;
- remote;
- commit hash;
- validation/build results;
- anything that requires manual user action.
```

## Prompt 03 — Build the design system and homepage

```text
Read AGENTS.md, PRD.md, DESIGN_SYSTEM.md, ACCESSIBILITY.md,
PERFORMANCE.md, ARCHITECTURE.md, and TASKS.md.

Implement Phase 1 and Phase 2:
- complete the global design system;
- build Header and Footer;
- build the homepage hero;
- build Selected Work;
- build Capabilities;
- build Lab teaser;
- build Contact CTA.

Visual direction:
- minimal Creative Developer × Swiss Editorial;
- off-white / black / neutral gray;
- project imagery provides color;
- large typography;
- strong grid;
- generous whitespace;
- no gradients;
- no glassmorphism;
- no generic rounded card UI;
- no fake terminal;
- no heavy animation library;
- no scroll hijacking.

Use real project content only when already present in the repository.
Otherwise keep content fixtures as non-production drafts.

Responsive:
- design intentionally for mobile, tablet, and desktop;
- no horizontal overflow;
- strong typography wrapping;
- visible keyboard focus;
- reduced-motion support.

Run checks and production build.
Update TASKS.md.
Report files changed and validation results.
```

## Prompt 04 — Build Work and project case studies

```text
Read AGENTS.md, PRD.md, DESIGN_SYSTEM.md, CONTENT_MODEL.md,
ARCHITECTURE.md, SEO.md, ACCESSIBILITY.md, PERFORMANCE.md, and TASKS.md.

Implement:
1. `/work`;
2. `/work/[slug]`;
3. typed project collection;
4. project index sorting;
5. featured project queries;
6. case-study layout;
7. reusable media patterns;
8. project metadata;
9. next-project navigation;
10. draft exclusion.

Do not invent project facts or case-study copy.
Keep incomplete projects as drafts.

The layout must feel editorial, not like a card dashboard.

Run checks and production build.
Update TASKS.md.
```

## Prompt 05 — Prepare GitHub Pages deployment

```text
Read AGENTS.md, DEPLOYMENT.md, SECURITY.md, GIT_WORKFLOW.md,
SEO.md, QA_CHECKLIST.md, and TASKS.md.

Goal:
Prepare GitHub Pages deployment without changing repository visibility.

First:
1. inspect the current GitHub repository visibility and account capabilities;
2. determine whether GitHub Pages can be used from this PRIVATE repository on the current GitHub plan.

If private-repository GitHub Pages is supported:
- configure Astro `site` and `base` correctly for the real repository URL;
- create the current recommended GitHub Actions workflow using official Astro/GitHub guidance;
- use least-privilege workflow permissions;
- run local checks/build;
- commit and push;
- enable/configure Pages only if this can be done safely with existing authenticated tools.

If private-repository GitHub Pages is NOT supported:
- STOP before changing repository visibility;
- keep the repository private;
- do not enable a broken Pages workflow;
- explain the supported options;
- wait for an explicit user decision about hosting or GitHub plan.

Never make the source repository public without explicit user approval.

At the end report:
- current repository visibility;
- whether private Pages is supported;
- deployment configuration made;
- production URL if successfully deployed;
- checks performed;
- manual actions still required.
```

## Prompt 06 — Final release QA

```text
Read AGENTS.md and QA_CHECKLIST.md plus all relevant project docs.

Perform a release-readiness review.

Validate:
- production build;
- Astro/TypeScript checks;
- routing;
- responsive behavior;
- keyboard navigation;
- reduced motion;
- headings;
- image alt text;
- internal links;
- draft exclusion;
- metadata;
- sitemap/robots;
- Open Graph;
- image optimization;
- console errors;
- unnecessary JS;
- accidental private information;
- accidental secrets;
- Git status;
- deployment configuration.

Fix only concrete release blockers or clearly safe issues.
Do not redesign the site during QA.

Update TASKS.md with verified completion state.

Return:
1. blockers;
2. warnings;
3. fixes made;
4. checks passed;
5. release recommendation.
```
