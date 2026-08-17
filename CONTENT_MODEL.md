# Content Model

## Project collection

Each portfolio project should expose structured frontmatter.

Recommended conceptual schema:

```ts
{
  title: string
  subtitle?: string
  summary: string
  year: number
  order: number
  status: "published" | "draft"
  featured: boolean

  disciplines: string[]
  role: string[]
  client?: string

  cover: ImageMetadata
  coverAlt: string

  technologies?: string[]
  externalUrl?: string
  repositoryUrl?: string

  seo?: {
    title?: string
    description?: string
    image?: ImageMetadata
  }
}
```

Use the current Astro content-collection API and schema syntax.

## Suggested discipline vocabulary

Use consistent labels:

- Art Direction
- Editorial Design
- Brand Design
- Graphic Design
- Web Design
- Frontend Development
- Product Design
- UI/UX
- Creative Technology
- 2D/3D
- Visualization
- AI
- Open Source
- Data

Do not create near-duplicate labels such as:

- `Web`
- `Webdesign`
- `Web Design`
- `Website Design`

Choose one canonical term.

## Project body

Case-study prose can use sections such as:

```md
## Overview

## Context

## Role

## Approach

## Selected Work

## Outcome
```

Not every project needs every section.

Do not invent an "Outcome" if measurable outcomes are unknown.

## Media blocks

Initial v1 can use standard Markdown/MDX-compatible imagery or explicit Astro components depending on the selected content approach.

Desired future media types:

- full width;
- split pair;
- portrait;
- landscape;
- captioned;
- video;
- device/browser frame.

Keep v1 simple.

## Lab collection

Conceptual schema:

```ts
{
  title: string
  summary: string
  year: number
  status: "active" | "prototype" | "archived"
  tags: string[]
  url?: string
  repositoryUrl?: string
  featured?: boolean
}
```

Lab entries do not require full portfolio case studies.

## Draft content

Draft projects must never appear in production indexes.

Use schema or build logic to exclude them consistently.

## Content quality

Every public project needs:

- accurate title;
- accurate year;
- short summary;
- disciplines;
- role;
- strong cover;
- meaningful cover alt;
- at least enough content to justify a detail page.

If content is incomplete, keep the project draft.
