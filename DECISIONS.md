# Architecture Decision Log

Record material decisions here.

Format:

```md
## ADR-XXX — Title

**Date:** YYYY-MM-DD  
**Status:** proposed | accepted | superseded

### Context

Why is this decision needed?

### Decision

What are we choosing?

### Consequences

Benefits, costs, constraints.

### Alternatives considered

What else was considered and why was it not selected?
```

---

## ADR-001 — Astro for the portfolio

**Date:** 2026-08-17  
**Status:** accepted

### Context

The portfolio is primarily static content with rich visual presentation, project case studies, strong SEO requirements, and limited interaction.

### Decision

Use Astro with TypeScript as the core web framework.

### Consequences

Benefits:

- static-first output;
- low JavaScript by default;
- good content architecture;
- good fit for image-heavy editorial pages;
- easy static hosting.

Constraint:

- interactive application-like features require deliberate islands or client code.

### Alternatives considered

Next.js:

- unnecessary application/runtime complexity for the current portfolio.

WordPress:

- more maintenance and runtime complexity than needed for this code-driven portfolio.

---

## ADR-002 — Monochrome interface

**Date:** 2026-08-17  
**Status:** accepted

### Context

The portfolio must communicate a designer/developer identity without visual clutter.

### Decision

Use off-white, black, and neutral gray for the interface. Let project imagery carry color.

### Consequences

- strong consistency;
- project visuals receive emphasis;
- typography and spacing must be executed precisely.

---

## ADR-003 — Content-driven projects

**Date:** 2026-08-17  
**Status:** accepted

### Context

Adding a portfolio project should not require duplicating route/page code.

### Decision

Use Astro Content Collections for project metadata and case-study content.

### Consequences

- structured validation;
- reusable work index;
- static project generation;
- easier future content migration.

---

## ADR-004 — Static deployment portability

**Date:** 2026-08-17  
**Status:** accepted

### Context

The preferred deployment target is GitHub Pages, but private-repository Pages availability depends on GitHub plan.

### Decision

Keep the site fully portable as a static Astro build and avoid host-specific runtime dependencies.

### Consequences

The same build can move to another static host without redesigning the application.

---

## ADR-005 — npm and Astro 7 foundation versions

**Date:** 2026-08-17  
**Status:** accepted

### Context

The local environment provides Node.js 22.18.0. Astro 7.2.2 is the latest stable Astro release and supports Node.js 22.12.0 or newer, but its allowed `unifont` 0.7.5 transitive update requires Node.js 22.19.0 through `undici` 8.

### Decision

Use npm with Astro 7.2.2 and TypeScript 6.0.3. Pin the transitive `unifont` package to compatible version 0.7.4 through npm overrides until the local Node.js runtime is upgraded.

### Consequences

- the project uses the latest stable Astro release on the current environment;
- installs do not emit a transitive Node engine warning;
- the override should be reviewed and removed after Node.js is upgraded.

### Alternatives considered

Astro 7.1.6:

- compatible but no longer the latest stable Astro release.

TypeScript 7.0.2:

- latest compiler, but outside the supported peer range of the official Astro checker.

## ADR-006 — Separate public static delivery repository

**Date:** 2026-09-11
**Status:** accepted

The user requested publication at `https://alex-nomeza.github.io/`. Keep the
source repository private and publish only Astro build output to the public
`alex-nomeza/alex-nomeza.github.io` repository. Serve `main` at its root using
GitHub Pages and `.nojekyll`. This avoids dependence on private-repository Pages
eligibility and preserves source/document privacy. The first release is built
locally; automatic source-to-delivery synchronization is not yet configured.
