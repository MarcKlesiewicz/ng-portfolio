# Angular coding guide

- Build components as standalone components and list template dependencies in each component's `imports`.
- Keep application-wide providers in `src/app/app.config.ts` and routes in `src/app/app.routes.ts`.
- Lazy-load page components at route boundaries.
- Use signals for mutable state read by templates. Keep immutable data and event-local calculations as ordinary values.
- Prefer built-in template control flow (`@if`, `@for`) and native CSS transitions.
- Keep components zoneless-safe and use `ChangeDetectionStrategy.OnPush` when the component's notification paths support it.
- Run `npm run lint:eslint:fix` after changing TypeScript or templates.

Use `npm run generate -- component <path>` for Angular CLI scaffolding and review generated imports before committing.
