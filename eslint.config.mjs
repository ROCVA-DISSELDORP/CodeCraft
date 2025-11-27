// eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // ✅ Custom rules or overrides go here
  rules: {
    // Turn off Nuxt config key order warning
    'nuxt/config-key-order': 'off',

    // Your stylistic rules
    'comma-dangle': ['error', 'never'],
    'brace-style': ['error', '1tbs'],

    // Example: allow console logs
    'no-console': 'off',
  },

})
