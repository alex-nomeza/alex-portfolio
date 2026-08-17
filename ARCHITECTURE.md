# Architecture

## 1. Architectural style

Static content-driven portfolio.

Principles:

- build-time rendering;
- low client JavaScript;
- structured content;
- reusable visual components;
- explicit metadata;
- deployment portability.

## 2. Proposed repository layout

```text
.
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── static/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── global/
│   │   ├── home/
│   │   ├── project/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── projects/
│   │   └── lab/
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── lab/
│   │   └── work/
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── tokens.css
│   │   └── utilities.css
│   │
│   ├── utils/
│   └── content.config.ts
│
├── .github/
│   └── workflows/
│
├── AGENTS.md
├── PRD.md
├── DESIGN_SYSTEM.md
└── ...
```

Adjust to the installed Astro version's recommended content configuration.

## 3. Page architecture

### BaseLayout

Responsibilities:

- document shell;
- metadata hooks;
- global header/footer;
- global styles;
- accessibility skip link;
- optional transition wrapper.

No page-specific content logic.

### Homepage

Composed from focused sections:

- Hero;
- SelectedWork;
- Capabilities;
- LabTeaser;
- ContactCTA.

### Work index

Reads published project collection and sorts by:

1. `order`;
2. year/title as deterministic fallback.

### Project page

Dynamic static route from content collection.

Responsibilities:

- validate slug;
- render project layout;
- render media/content blocks;
- generate page metadata;
- next/previous project.

## 4. Content architecture

Project metadata lives with project content.

Do not maintain the same title/year/category in multiple unrelated files.

The collection is the single source of truth for project listing and detail pages.

## 5. Media architecture

Prefer:

- project-local media grouped by project;
- predictable filenames;
- responsive image components.

Suggested:

```text
src/assets/images/projects/
  le-journal/
    cover.webp
    spread-01.webp
    spread-02.webp
  le-zahir/
    ...
```

If an asset must remain byte-identical or bypass processing, place it in `public/` intentionally.

## 6. SEO architecture

Create reusable metadata component/helper.

Each page should be able to provide:

- title;
- description;
- canonical;
- Open Graph;
- social image;
- index/follow control.

Project metadata should generate project-specific tags.

## 7. State

No global application state in v1.

Interactive UI state must remain local.

## 8. Data fetching

No runtime API dependency for core portfolio content.

External live data must not be required to render primary portfolio pages.

## 9. Error handling

At build time:

- invalid content should fail validation rather than silently render malformed pages.

At runtime:

- links should degrade normally;
- custom 404;
- no critical JS dependency for navigation.

## 10. Extensibility

Future i18n:

- avoid architecture that hardcodes content directly into reusable components;
- use content/translation boundaries.

Future CMS:

- content collection layer should be replaceable without redesigning all page components.

Future hosting:

- keep output portable and static.
