# TypeScript coding guide

The application compiles with the TypeScript version pinned in `package.json` and Angular's strict template checks.

- Prefer explicit domain types over `any`.
- Use `const` and readonly data where values do not change.
- Let TypeScript infer obvious local types, but type public APIs and data models.
- Keep imports on configured aliases such as `@app/*` and `@env/*` when that makes ownership clearer.
- Do not suppress compiler or lint errors without a narrow documented reason.

ESLint owns TypeScript and Angular correctness rules; Prettier owns formatting. Run `npm run lint:eslint:fix` and `npm run format` before the corresponding checks.
