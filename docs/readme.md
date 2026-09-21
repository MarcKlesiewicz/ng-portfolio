# Contributor notes

The supported commands and runtime requirements are documented in the repository [README](../README.md).

## Architecture

- `src/main.ts` bootstraps `AppComponent` with the providers in `src/app/app.config.ts`.
- `src/app/app.routes.ts` lazy-loads the standalone page components for `/home`, `/about`, `/work`, and `/work/:slug`.
- Components import their own template dependencies; this project has no NgModules.
- Template-observed mutable state uses Angular signals. Static portfolio data remains readonly data.
- Angular CLI's `application` and `dev-server` builders provide the supported Vite-backed workflow. There is no separate Vite configuration.
- The test target uses Angular CLI's Vitest runner and jsdom.
- Tailwind CSS 4 and daisyUI 5 are configured from `src/main.scss` through `.postcssrc.json`.
- `src/app/app.config.ts` registers the service worker only for production builds.

## Deployment and PWA

Run `npm run build` before deployment. Deploy the contents of `dist/browser` and configure the host to return `index.html` for extensionless application routes. The checked-in Vercel rewrite provides that behavior while leaving asset requests untouched.

For a local PWA check, run `npm run serve:sw`, open <http://localhost:4200>, and verify the application and service worker in browser developer tools. Service workers are enabled on localhost and secure origins only.

## Dependency updates

See [updating.md](updating.md). Keep Angular framework packages on matching stable versions and follow Angular's supported update migrations for major upgrades.
