# xavis

Website for **Xavi's Koeltechniek**.

## Development

The static site lives in the `site/` directory. Shared sections such as the header and footer reside in `site/partials/` and are injected at runtime. Styles and scripts are organised into `site/css/` and `site/js/`. Only files under `site/` are deployed.

To view the site locally, serve the `site/` directory over HTTP (partials are fetched via JavaScript):

```bash
cd site
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

### Deployment

Pushing to `main` triggers a GitHub Actions workflow that runs tests and deploys the `site/` directory to Cloudflare Pages. The workflow uses the secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` and publishes to the `xaviskoeltechniek` project at <https://www.xavi.sr>.

## Structure

```
site/
  index.html         # Home page
  css/style.css      # Global styles
  js/main.js         # Behaviour & partial loading
  partials/header.html
  partials/footer.html
tests/
  main.test.js       # Jest unit tests
```

Contributions should maintain semantic HTML, keep the site lightweight and respect the existing style guidelines.
