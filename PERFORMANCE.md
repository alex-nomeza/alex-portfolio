# Performance Requirements

## Philosophy

The portfolio is intentionally static and visual. Performance must not be sacrificed for decorative effects.

## Targets

Aim for strong production Lighthouse/Core Web Vitals behavior.

Working budgets:

- minimal client JavaScript on content pages;
- no large runtime framework by default;
- no uncompressed hero media;
- no auto-playing background video in v1;
- no avoidable render-blocking third-party scripts.

## JavaScript

Every client-side script must justify its existence.

Preferred order:

1. HTML;
2. CSS;
3. native browser APIs;
4. small isolated JS;
5. framework island only if necessary.

## Images

- generate responsive sizes;
- use modern web formats when appropriate;
- define dimensions/aspect ratios;
- do not lazy-load the primary LCP image if doing so delays it;
- lazy-load below-fold images;
- keep source images reasonably sized.

## Fonts

- use few families;
- use few weights;
- subset/self-host when practical;
- use `font-display` strategy that avoids invisible text.

## CSS

- keep global CSS intentional;
- avoid huge utility/plugin output;
- remove abandoned experiments.

## Third parties

Do not add:

- analytics;
- tracking;
- chat widgets;
- social embeds;
- heatmaps

without explicit need.

If analytics is later added, prefer privacy-conscious and lightweight options.

## Build

Production build must:

- complete without warnings that indicate broken assets;
- generate expected static pages;
- avoid accidental source maps or debug artifacts when not needed.

## Regression rule

If a design change introduces a material performance regression, document the tradeoff before accepting it.
