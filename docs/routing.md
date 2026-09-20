# Routing and deployment

`src/app/app.routes.ts` defines the standalone routes for `/home`, `/about`, `/work`, and `/work/:slug`, plus the empty and wildcard redirects. Page components are lazy-loaded.

The application uses browser history URLs, so production hosts must return `index.html` for extensionless application routes. `vercel.json` provides this fallback on Vercel without rewriting generated asset requests. For local verification, `npm run preview` serves `dist/browser` with the same SPA fallback behavior.
