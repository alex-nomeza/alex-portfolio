# SEO Requirements

## Objective

Make the portfolio technically discoverable while keeping copy natural and portfolio-focused.

## Site-level requirements

Provide:

- unique site title;
- site description;
- canonical base URL once domain is known;
- sitemap;
- robots policy;
- favicon;
- Open Graph defaults;
- social preview image;
- semantic HTML.

## Title strategy

Homepage example:

`Alex Mezan — Multidisciplinary Designer & Developer`

Project example:

`Le Journal — Alex Mezan`

About:

`About — Alex Mezan`

Avoid keyword stuffing.

## Description strategy

Descriptions should:

- be 1–2 concise sentences;
- describe actual work;
- avoid unsupported claims;
- differ by major page.

## Canonical URLs

Configure `site` in Astro once production URL is known.

If deployed under a GitHub project-pages subpath, ensure URL generation respects the configured base path.

If a custom domain is introduced, update canonical configuration.

## Open Graph

Default:

- `og:type=website`;
- title;
- description;
- canonical URL;
- social image.

Project pages may use project-specific social images.

## Structured data

Potential baseline:

- `Person`;
- `WebSite`.

Project-specific `CreativeWork` may be added only where data is accurate and implementation remains maintainable.

Do not add structured data solely for keyword manipulation.

## Headings

- exactly one meaningful primary page heading in normal page hierarchy;
- do not choose heading levels for visual size;
- project titles should be actual headings.

## Images

- descriptive alt text;
- optimized files;
- filenames can be meaningful;
- decorative imagery should use empty alt.

## Indexing

Production:

- index/follow unless intentionally hidden.

Preview/development:

- prevent accidental indexing if deployed to a temporary environment.

## Internal linking

Ensure:

- homepage links to featured projects;
- work index links all public projects;
- case studies link next project;
- About / Lab / Contact are reachable from navigation.

## Performance

SEO is not separated from performance:

- minimize CLS;
- fast LCP;
- avoid blocking JS;
- use responsive images.

## Content

Do not add a blog solely for SEO.

Build useful project descriptions first.
