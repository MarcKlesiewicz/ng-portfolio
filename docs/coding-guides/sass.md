# Sass guide

Global styles enter through `src/main.scss`. Shared colors and typography are exposed as CSS custom properties from `src/styles/theme-variables.scss`.

- Keep component-specific styles beside the component.
- Put shared tokens and global imports in `src/styles`.
- Reuse the existing theme custom properties before adding one-off values.
- Respect reduced-motion preferences for transitions and animations.
- Avoid `!important` and excessive selector specificity.

Run `npm run lint:styles:fix` and `npm run format` after editing SCSS, then run `npm run lint:styles` and `npm run format:check`.
