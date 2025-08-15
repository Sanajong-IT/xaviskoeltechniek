# xavis

Website for **Xavi's Koeltechniek**.

## Development

The site is built as static HTML with a small amount of JavaScript.
Shared sections such as the header and footer live in `partials/` and
are injected at runtime. Styles and scripts are organised into
`css/` and `js/` respectively.

To view the site locally the files must be served over HTTP (the
partials are fetched via JavaScript).

```bash
python -m http.server
```

Then open <http://localhost:8000> in your browser.

### Testing

Install dev dependencies once:

```bash
npm install
```

Run the unit tests with:

```bash
npm test
```
Always run tests before committing or opening a pull request.

## Structure

```
index.html         # Home page
css/style.css      # Global styles
js/main.js         # Behaviour & partial loading
partials/header.html
partials/footer.html
```

Contributions should maintain semantic HTML, keep the site lightweight
and respect the existing style guidelines.
