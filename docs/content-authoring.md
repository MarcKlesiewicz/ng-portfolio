# Portfolio content authoring

The portfolio currently keeps content in TypeScript so edits remain reviewed, validated, and deployable with the app. The UI depends on `PortfolioContentSource`, which means persistence can later move to a headless CMS, database, or generated JSON without rewriting page components.

## Add or edit a project

Edit `src/app/content/local/portfolio-content.data.ts` and keep these rules:

1. Give every project a permanent, lowercase kebab-case `slug`. Never reuse an old slug for another project.
2. Keep `legacyId` unique so previously shared numeric URLs continue to redirect.
3. Reference technology IDs from the canonical `technologies` registry rather than writing display labels into projects.
4. Only include `liveUrl`, `githubUrl`, `contribution`, and `outcome` when the claim or destination is current and verifiable. Missing optional data is intentionally omitted in the UI.
5. Set `featuredOrder` only for projects that should appear on the homepage.

Every media record requires a useful `alt` value plus its intrinsic pixel `width` and `height`. Decorative media uses an empty alt. Prefer WebP for large photographic or screenshot assets, keep source images under `src/assets/images`, and avoid shipping an image much wider than its largest rendered size.

## Story blocks

Project stories accept a finite union of blocks:

- `heading`: level 2 or 3 and plain text.
- `paragraph`: plain text.
- `list`: ordered or unordered string items.
- `media`: a validated media record with an optional caption.
- `callout`: a short title and supporting text.
- `links`: labelled external destinations.

Do not add HTML strings or use `innerHTML`. If a new editorial structure is genuinely needed, add a typed block to `portfolio-content.model.ts`, validate it, render it exhaustively in `ProjectStoryComponent`, and add a component test.

## Profile and contacts

The same data file owns the introduction, experience, capability groups, endorsement, portrait, and contact links. Capability groups reference technology IDs. Contact actions disappear cleanly when `contacts` is empty, so do not add placeholder addresses.

## Validation and future persistence

`LocalPortfolioContentSource` validates the complete snapshot at startup. Its tests catch duplicate slugs and IDs, unknown technology references, invalid URLs, and incomplete media metadata.

A future persistent setup should implement `PortfolioContentSource` and change only `providePortfolioContent()`. Good options, in increasing operational weight, are:

- versioned JSON generated from a small authoring script;
- a Git-backed CMS that opens pull requests;
- a hosted headless CMS with preview and webhook-triggered builds.

For a personal portfolio, a Git-backed CMS is the strongest next step: it provides a friendly editor and image workflow while preserving reviewable history and static deployment. Keep slugs and legacy IDs immutable during migration, and run the same validator at the adapter boundary.
