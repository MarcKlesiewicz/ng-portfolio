# ng-portfolio

Marc Klesiewicz's portfolio, built with Angular 22.

The application uses standalone components and lazy standalone routes. Angular CLI owns the esbuild/Vite-backed development and build pipeline, Vitest runs the component tests, and the production build includes an Angular service worker.

## Requirements

- Node.js 22.22.3 or newer
- npm 11 or newer

## Install

```sh
npm ci
```

Installation configures the local Husky hook but does not format or otherwise rewrite tracked files.

## Develop

```sh
npm start
```

Open <http://localhost:4200>. The public routes are `/home`, `/about`, and `/projects`.

## Validate changes

```sh
npm test
npm run test:coverage
npm run lint
npm run format:check
```

Use `npm run lint:eslint:fix`, `npm run lint:styles:fix`, and `npm run format` to apply the available automatic fixes. `npm run test:watch` keeps Vitest running during development.

The pre-commit hook runs Prettier through lint-staged, so only staged supported files are rewritten.

## Build and preview

```sh
npm run build
npm run preview
```

The optimized browser files are written to `dist/browser`. The preview command serves that directory with SPA fallback at <http://localhost:4200>, so direct requests such as `/about` and `/projects` work. `npm run serve:sw` combines a fresh production build with the same preview server for PWA checks.

Vercel uses the rewrite in `vercel.json` for extensionless route requests. Static files keep their generated URLs.

## Project structure

```text
src/
  app/
    app.config.ts          application-wide providers
    app.routes.ts          lazy standalone routes
    about/                 about page and components
    home/                  home page and components
    shared/                shared standalone components and services
    work/                  projects page, data, and components
  assets/                  images and SVGs copied by the Angular build
  environments/            build-time environment selection
  styles/                  global SCSS partials
  main.ts                  standalone bootstrap
  main.scss                Tailwind, daisyUI, and global style entry point
  manifest.webmanifest     installable-app metadata
public/icons/              PWA icons copied to `dist/browser/icons`
```

Additional contributor notes are in [`docs/readme.md`](docs/readme.md).
