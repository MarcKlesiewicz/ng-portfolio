# Marc Klesiewicz portfolio

An editorial Angular portfolio for selected product work, experience, and personal context.

## Local development

The project expects Node 22.22.3 or newer and npm 10.7 or newer.

```sh
npm install
npm start
```

Open `http://localhost:4200`. Run the checks with:

```sh
npm test -- --configuration=ci
npm run lint
npm run build
```

## Architecture

The app uses standalone Angular components and lazy route groups. Visitor-facing content is kept behind the `PortfolioContentSource` injection token:

- `src/app/content/models/portfolio-content.model.ts` defines the portable schema.
- `src/app/content/local/portfolio-content.data.ts` is the current local content store.
- `src/app/content/local/local-portfolio-content.source.ts` adapts that store to observable queries.
- `src/app/content/portfolio-content.providers.ts` is the replacement seam for a future API, headless CMS, or generated JSON adapter.

Pages consume the source rather than importing content records directly. Project stories are typed blocks rendered by Angular templates; arbitrary HTML is not injected. Gallery filters are encoded in the URL, and canonical project addresses use stable slugs while old numeric links redirect.

See [Content authoring](docs/content-authoring.md) for the editing workflow and schema rules.

## Deployment

`npm run build` produces the deployable app in `dist/`. The existing Vercel configuration serves the Angular SPA and falls back to `index.html` for deep links.
