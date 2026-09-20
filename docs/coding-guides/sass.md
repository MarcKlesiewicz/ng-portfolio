# SCSS and utility CSS guide

Global styles enter through `src/main.scss`. Tailwind CSS 4 and daisyUI 5 are loaded there through the PostCSS plugin in `.postcssrc.json`; do not add a parallel Tailwind JavaScript configuration.

- Keep component-specific styles beside the component.
- Put shared tokens and global imports in `src/styles`.
- Prefer existing Tailwind utilities and daisyUI theme tokens before adding one-off declarations.
- Preserve the `mytheme` values declared in `src/main.scss`.
- Respect reduced-motion preferences for transitions and animations.
- Avoid `!important` and excessive selector specificity.

Run `npm run lint:styles:fix` and `npm run format` after editing SCSS, then run `npm run lint:styles` and `npm run format:check`.
