# Contributing Guidelines

- HTML pages should include shared elements (header, footer) via the
  partials in the `partials/` directory. If you add new common sections,
  create a partial and load it in `js/main.js`.
- Global styles live in `css/style.css`; keep them lean and use existing
  variables where possible.
- JavaScript lives in `js/` and must work without external build tools.
  Attach behaviour inside the `DOMContentLoaded` handler after partials
  are loaded.
- Keep markup semantic and accessible.
- Add Jest tests under `js/` for new behaviour and run `npm test` before committing.
