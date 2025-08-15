# Contributing Guidelines

- Static site files live under `site/`. HTML pages should include shared elements (header, footer) via the partials in `site/partials/`. If you add new common sections, create a partial and load it in `site/js/main.js`.
- The root `index.html` simply redirects to `site/` for compatibility; serve and edit pages from the `site/` directory.
- Global styles live in `site/css/style.css`; keep them lean and use existing variables where possible.
- Browser JavaScript lives in `site/js/` and must work without external build tools. Attach behaviour inside the `DOMContentLoaded` handler after partials are loaded.
- Keep markup semantic and accessible.
- Add Jest tests under `tests/` for new behaviour and run `npm test` before committing.
