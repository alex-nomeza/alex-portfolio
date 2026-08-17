# Accessibility Baseline

Target: practical WCAG 2.2 AA-oriented implementation.

## Keyboard

All interactive elements must:

- be keyboard reachable;
- have logical tab order;
- show visible focus;
- work without pointer hover.

Do not implement clickable `div` elements.

## Navigation

Provide:

- semantic `<nav>`;
- meaningful link text;
- skip-to-content link;
- current-page indication where useful.

## Headings

Use semantic hierarchy.

Do not skip heading levels purely for styling.

## Color

Text and interactive states must maintain sufficient contrast.

Do not communicate state only with color.

## Images

- meaningful project visuals require useful alt text;
- decorative images use `alt=""`;
- avoid duplicating surrounding caption text word-for-word.

## Motion

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* remove or substantially reduce non-essential animation */
}
```

Core navigation and content must remain understandable with motion disabled.

## Forms

If a contact form is added later:

- visible labels;
- clear errors;
- keyboard usability;
- status announcements;
- no placeholder-only labels.

## Touch

Interactive targets should be comfortably usable on touch devices.

Avoid hover-only information.

## Typography

- avoid tiny body text;
- do not disable browser zoom;
- maintain readable line length and line height.

## Semantic HTML

Prefer:

- `header`;
- `main`;
- `nav`;
- `section`;
- `article`;
- `footer`;
- native buttons/links.

ARIA supplements semantics; it does not replace native HTML.

## Testing checklist

At minimum:

- keyboard-only pass;
- reduced-motion pass;
- mobile zoom/readability;
- basic screen-reader naming inspection;
- automated accessibility scan when tooling is available.
