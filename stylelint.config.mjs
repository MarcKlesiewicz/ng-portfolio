/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['coverage/**', 'dist/**', 'docs/generated/**', 'node_modules/**'],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'declaration-no-important': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-empty-source': null,
    'property-no-vendor-prefix': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['plugin', 'source', 'theme'],
      },
    ],
    'scss/comment-no-empty': null,
    'selector-class-pattern': '[a-z-]+',
    'selector-id-pattern': '[a-z-]+',
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,2',
    'selector-max-universal': 0,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
      },
    ],
    'unit-allowed-list': ['deg', 'em', 'ms', 'px', 'rem', 's', 'vh', 'vw', '%'],
    'value-no-vendor-prefix': true,
  },
};
