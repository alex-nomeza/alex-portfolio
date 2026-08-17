# Codex Workflow

## Purpose

This file describes how to use Codex on this repository.

Codex should treat `AGENTS.md` as the primary durable instruction file.

## Starting a new Codex session

1. Open the repository root.
2. Ask Codex to read:
   - `AGENTS.md`;
   - `TASKS.md`;
   - the docs relevant to the task.
3. Give one coherent implementation goal.
4. Require validation before completion.

## Recommended task prompt pattern

```text
Read AGENTS.md and the project documentation relevant to this task.

Task:
<one clear task>

Constraints:
- do not broaden scope;
- preserve the approved design direction;
- do not add dependencies unless necessary;
- use Astro/TypeScript idiomatically;
- keep client JavaScript minimal;
- run the relevant checks and production build.

At the end report:
1. files changed;
2. decisions made;
3. checks executed;
4. remaining TODOs.
```

## Session types

### Architecture task

Ask Codex to inspect first and propose only the minimum necessary changes.

### UI task

Require:

- responsive implementation;
- keyboard behavior;
- reduced-motion behavior;
- no visual deviation from `DESIGN_SYSTEM.md`.

### Content task

Require:

- no invented facts;
- draft status when content is incomplete.

### Refactor task

Require:

- no behavior change unless explicitly requested;
- build before and after where practical;
- remove dead code created by the refactor.

### Deployment task

Require:

- current official Astro/GitHub guidance;
- private repository must remain private unless explicitly approved;
- no secret exposure.

## When to update docs

Update:

- `TASKS.md` after task status changes;
- `DECISIONS.md` when architecture changes;
- `README.md` when setup/run commands change;
- `DEPLOYMENT.md` when deployment behavior changes.

Do not update documentation merely to create noise.

## Codex review prompt

```text
Review the current diff against AGENTS.md, PRD.md, DESIGN_SYSTEM.md,
ACCESSIBILITY.md, PERFORMANCE.md, SECURITY.md, and QA_CHECKLIST.md.

Find:
- functional regressions;
- Astro/TypeScript issues;
- unnecessary JavaScript or dependencies;
- accessibility problems;
- responsive/layout risks;
- performance regressions;
- SEO problems;
- security/privacy issues;
- invented or placeholder content.

Do not rewrite code unless necessary to fix a concrete issue.
Run the relevant checks and summarize findings by severity.
```
