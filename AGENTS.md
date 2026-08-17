# AGENTS.md — Alex Portfolio

## Mission

Build and maintain a production-quality personal portfolio for Alex Mezan using Astro.

The site must communicate one idea immediately:

> Multidisciplinary Designer & Developer.

The experience must feel minimal, editorial, precise, fast, and intentionally designed. It must not look like a SaaS landing page, a generic developer template, a Behance clone, or an AI-generated portfolio.

## Product principles

1. Clarity before novelty.
2. Work before decoration.
3. Typography and spacing are primary visual tools.
4. Images bring color; the interface remains mostly black, off-white, and neutral gray.
5. Every interaction must have a reason.
6. Performance, accessibility, responsive behavior, and SEO are non-negotiable.
7. Prefer the simplest implementation that produces the intended design.
8. Avoid unnecessary client-side JavaScript.
9. Keep content separate from presentation.
10. Changes must be easy for one person to maintain.

## Source of truth

Before implementing a task, read the relevant project documents:

- `CONTEXT.md` — project and creator context
- `PRD.md` — product requirements
- `DESIGN_SYSTEM.md` — visual and interaction rules
- `ARCHITECTURE.md` — technical architecture
- `TECH_STACK.md` — approved technologies
- `CONTENT_MODEL.md` — project/content schemas
- `SEO.md` — metadata and discoverability rules
- `ACCESSIBILITY.md` — accessibility baseline
- `PERFORMANCE.md` — performance budgets
- `SECURITY.md` — security constraints
- `TASKS.md` — current implementation queue
- `QA_CHECKLIST.md` — completion criteria
- `DECISIONS.md` — architectural decisions
- `GIT_WORKFLOW.md` — Git rules
- `DEPLOYMENT.md` — publishing workflow

If requirements conflict:

1. explicit user instruction wins;
2. `AGENTS.md` wins over other repository documentation;
3. `PRD.md` wins for product behavior;
4. `DESIGN_SYSTEM.md` wins for visual behavior;
5. `ARCHITECTURE.md` / `TECH_STACK.md` win for implementation choices.

## Implementation rules

### Astro

- Use Astro with TypeScript strict mode.
- Default to `.astro` components.
- Do not introduce React, Vue, Svelte, Solid, or other UI runtimes unless a real interaction requires one and the change is justified.
- Prefer Astro server/build-time capabilities and static output.
- Prefer content collections for portfolio projects and structured editorial content.
- Use Astro image tooling for local project imagery whenever practical.
- Keep page components thin. Extract reusable presentation into components.

### CSS

- Use CSS custom properties for design tokens.
- Tailwind may be used only if it reduces repetition without hiding important visual logic.
- Do not use arbitrary one-off spacing values when a token exists.
- Do not add a UI component framework.
- Do not use a global CSS reset package unless justified.
- Keep responsive behavior fluid with `clamp()`, grid, flexbox, container queries, and media queries where appropriate.

### JavaScript

- No JavaScript for behavior that CSS or native HTML can handle.
- No heavy animation libraries by default.
- No scroll hijacking.
- No custom cursor that degrades usability.
- Respect `prefers-reduced-motion`.
- Any client-side island must have a documented purpose.

### Design

- Primary palette: off-white, black, neutral grays.
- Project artwork and photography may introduce color.
- Large typographic hierarchy.
- Strong editorial grid.
- Generous whitespace.
- Minimal navigation.
- No gradients unless a specific project artwork contains them.
- No glassmorphism.
- No neon cyberpunk aesthetic.
- No fake terminal hero.
- No decorative code snippets without informational value.
- No generic stock illustrations.
- No excessive rounded cards.
- Avoid visual patterns associated with generic SaaS dashboards.

### Content

- Do not invent awards, clients, dates, metrics, testimonials, roles, project outcomes, or technologies.
- Missing factual content must use clearly labeled placeholders such as `[TODO: project description]`.
- Never expose private personal information.
- Public professional information only.
- Keep project case studies concise and evidence-based.

## Quality gate

Before declaring any implementation task complete:

1. Run formatting.
2. Run linting if configured.
3. Run TypeScript/Astro checks.
4. Run the production build.
5. Inspect the relevant pages at mobile, tablet, and desktop widths.
6. Check keyboard navigation.
7. Check for obvious console errors.
8. Check broken internal links.
9. Confirm no secrets or local paths were committed.
10. Update `TASKS.md` if task status changed.
11. Update `DECISIONS.md` for any material architectural decision.

A task is not complete if the production build fails.

## Git safety

- Never commit secrets, tokens, `.env` contents, credentials, private keys, or personal data.
- Never force-push unless explicitly instructed.
- Never rewrite shared history without explicit instruction.
- Do not commit generated build output unless the deployment method requires it.
- Use focused commits.
- Prefer Conventional Commit style:
  - `feat:`
  - `fix:`
  - `refactor:`
  - `docs:`
  - `style:`
  - `test:`
  - `chore:`

## Working style for Codex

For each substantial task:

1. Inspect the repository and relevant docs.
2. State the implementation approach briefly.
3. Implement the smallest coherent solution.
4. Validate locally.
5. Report:
   - files changed;
   - important decisions;
   - checks executed;
   - remaining TODOs.

Do not silently broaden scope.
Do not replace working architecture merely because another approach is fashionable.
Do not add dependencies without explaining why they are needed.
