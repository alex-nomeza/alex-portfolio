# Product Requirements Document

## 1. Product name

Working name: **Alex Mezan Portfolio**

## 2. Product goal

Create a fast, minimal, highly visual personal portfolio that positions Alex as a multidisciplinary designer and developer.

The portfolio must demonstrate quality of work, range of capability, and technical credibility without becoming visually complicated.

## 3. Success criteria

A successful v1:

- communicates positioning immediately;
- highlights 4–8 strong projects;
- provides individual project case studies;
- works cleanly across desktop, tablet, and mobile;
- achieves strong Core Web Vitals;
- is keyboard accessible;
- has complete baseline SEO metadata;
- can be updated by adding structured content rather than duplicating page code;
- can be built and deployed automatically from GitHub.

## 4. Pages

### `/`

Homepage:

- name / identity;
- hero positioning;
- selected work;
- short capabilities statement;
- selected Lab teaser;
- contact CTA;
- footer.

### `/work`

Project index:

- all published portfolio projects;
- project number/order;
- title;
- discipline/category;
- year;
- visual preview;
- optional filters only if the number of projects justifies them.

Do not implement filters in v1 if there are fewer than ~10 published projects.

### `/work/[slug]`

Project case study:

- project title;
- subtitle if applicable;
- year;
- role;
- disciplines;
- status/link when relevant;
- hero media;
- overview;
- challenge/context where available;
- contribution;
- selected process;
- visual gallery;
- technologies for development projects;
- next project navigation.

### `/about`

- concise professional biography;
- capabilities;
- experience summary;
- selected tools;
- location;
- optional downloadable résumé later.

### `/lab`

Experimental and technical work:

- tools;
- open source;
- prototypes;
- AI/creative technology;
- small development projects;
- 3D/technical explorations.

Lab items may be lighter than full case studies.

### `/contact`

- concise CTA;
- email link;
- GitHub;
- LinkedIn or other explicitly approved professional profiles;
- location/time-zone context if desired.

No backend contact form in v1 unless explicitly requested.

### `/404`

Custom not-found page matching the visual system.

## 5. Navigation

Desktop:

- brand/name;
- Work or Index;
- About;
- Lab;
- Contact.

Mobile:

- name;
- compact menu trigger or simple inline navigation depending on available width.

Navigation must remain understandable without animation.

## 6. Homepage behavior

Hero should prioritize typography over decorative media.

Suggested information hierarchy:

1. Alex Mezan.
2. Multidisciplinary Designer & Developer.
3. short supporting sentence.
4. Selected Work.
5. work imagery.

No autoplay video in the hero for v1.

## 7. Project system

Projects must be data/content-driven.

Each project can define:

- slug;
- title;
- subtitle;
- year;
- disciplines;
- role;
- featured status;
- sort order;
- cover;
- cover alt text;
- summary;
- client/brand when public;
- technologies where relevant;
- external URL where relevant;
- gallery items;
- publish status.

## 8. Non-goals for v1

Do not build:

- CMS;
- authentication;
- admin dashboard;
- comments;
- blog unless requested;
- ecommerce;
- database;
- server-rendered personalization;
- Three.js/WebGL scenes;
- complex page builder;
- advanced filtering;
- analytics dashboard.

## 9. Future-ready capabilities

Architecture should not block:

- custom domain;
- multilingual content;
- analytics;
- privacy-friendly contact form;
- downloadable résumé;
- blog/notes;
- project video;
- external CMS if content volume grows.

## 10. Acceptance criteria

The v1 release is acceptable when:

- all routes build without error;
- all published projects have valid schema data;
- no placeholder text is visible in production;
- navigation works by keyboard;
- responsive layouts have been manually checked;
- project images do not cause obvious layout shift;
- metadata exists for all indexable pages;
- sitemap and robots behavior are correct;
- production deploy succeeds.
