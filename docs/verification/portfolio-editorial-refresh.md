# Portfolio editorial refresh verification

Verified on 2026-09-08 in the Codex in-app Chromium browser against the local Angular server. A production build was completed first; browser interaction ran on the development server at `http://127.0.0.1:4201` to avoid an older service-worker cache on port 4200 masking current bundles.

## Automated gates

| Gate                         | Result                                                           |
| ---------------------------- | ---------------------------------------------------------------- |
| Angular unit and route tests | Pass — 40 tests                                                  |
| Angular ESLint and Stylelint | Pass                                                             |
| Production build             | Pass — 356.10 kB raw initial bundle, 94.66 kB estimated transfer |
| Component style budgets      | Pass                                                             |

## Browser route matrix

| Route/state                                   | 320 px | 768 px | 1280 px | Result and evidence                                                                                                                                               |
| --------------------------------------------- | ------ | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                           | Pass   | Pass   | Pass    | Semantic H1, project/About actions, no horizontal overflow, images loaded. Explicit grid placement fixed an artwork/headline overlap found during the first pass. |
| `/projects`                                   | Pass   | Pass   | Pass    | Five cards in default state; semantic filters and results heading rendered.                                                                                       |
| `/projects?category=work&tech=firebase,figma` | Pass   | —      | Pass    | URL state restored as pressed controls and reduced the result to MyEpi. Clear filters returned to five cards, rewrote the URL, and announced “5 projects shown.”  |
| `/projects/monto`                             | —      | Pass   | Pass    | Typed story rendered without HTML injection, external link shown, no horizontal overflow, and all visible media loaded.                                           |
| `/projects/1?tech=flutter`                    | —      | —      | Pass    | Redirected to `/projects/monto?tech=flutter`; title became `Monto — Project \| Marc Klesiewicz`.                                                                  |
| `/projects/does-not-exist`                    | —      | —      | Pass    | Distinct not-found message and gallery recovery action rendered.                                                                                                  |
| `/about`                                      | Pass   | Pass   | Pass    | Narrative, capability groups, five experience chapters, endorsement, and project action rendered without horizontal overflow.                                     |

## Interaction and accessibility checks

- Menu opened as a labelled modal dialog; current route was identified.
- Escape closed the dialog, changed `aria-expanded` to `false`, and restored focus to the menu trigger.
- Keyboard-visible focus styles are globally defined, and controls use native links/buttons.
- The 320 px routes reflowed without horizontal scrolling; the mobile hero retained a readable static composition.
- Browser console errors: none.
- Large portfolio screenshots and portrait assets used the generated WebP derivatives with intrinsic dimensions.
- Reduced-motion behavior is covered by the motion-preference unit tests and the global `prefers-reduced-motion` override. Touch/no-hover, 200% text resize, and 400% zoom should be repeated on target devices before public deployment.

## Performance note

Lighthouse was not installed in this repository, so no synthetic score was recorded. The production build budget and image-transfer reductions were verified, but a release owner should run three mobile Lighthouse samples for `/`, `/projects`, and one project story from a deployed preview and record the median LCP/CLS values here.

## Post-deploy monitoring and validation

- **Owner/window:** Marc, during the first 24 hours after deployment and again after one week.
- **Healthy signals:** home, gallery, About, canonical project slugs, and numeric redirects return the SPA; no browser console errors; project media returns 200 responses; page titles change per route.
- **Failure signals:** deep-link 404s, missing WebP assets, blank project states, stale numeric links, or a sustained regression in mobile LCP/CLS.
- **Checks:** search hosting logs for `404`, `.webp`, `/projects/`, and `ngsw`; sample the core route matrix in an incognito window; run three mobile Lighthouse passes per representative route.
- **Mitigation trigger:** roll back to the previous deployment if a core route is unavailable or content cannot render; otherwise fix the isolated route/media record and redeploy.
