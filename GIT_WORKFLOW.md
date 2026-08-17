# Git & GitHub Workflow

## Repository

Suggested repository name:

`alex-portfolio`

Initial visibility:

`private`

## Default branch

`main`

## Branch strategy

For a one-person portfolio, keep workflow simple:

- `main` — releasable source;
- feature branches for substantial or risky changes.

Examples:

- `feat/homepage`
- `feat/project-content`
- `fix/mobile-nav`

Small safe changes may be committed directly to `main` if preferred.

## Commit convention

Use concise Conventional Commit style.

Examples:

```text
feat: build homepage hero
feat: add project content collection
fix: correct mobile project spacing
refactor: simplify project card markup
docs: update deployment guide
chore: configure Astro checks
```

## Commit quality

A commit should:

- represent one coherent change;
- not include secrets;
- not include unrelated generated files;
- pass relevant checks where practical.

## Before first push

Verify:

- `.gitignore`;
- no `.env`;
- no local IDE secrets;
- no temporary exports;
- no huge raw source media unless intentional;
- build passes.

## Initial repository creation

Preferred with GitHub CLI after authentication:

```bash
gh auth status
gh repo create alex-portfolio --private --source=. --remote=origin
git push -u origin main
```

If the repository already exists, do not recreate it.

## Pull requests

Optional for solo work, recommended for:

- structural refactors;
- dependency changes;
- deployment workflow changes;
- major redesigns.

## Protected branch

If available on the GitHub plan, consider branch protection after the initial build is stable.

## Tags/releases

Optional for portfolio milestones:

```text
v0.1.0 — skeleton
v0.5.0 — content-ready
v1.0.0 — first public portfolio release
```

## GitHub issues

Use only if it improves tracking.

`TASKS.md` remains the local implementation source of truth during initial development.
