// eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'nuxt/config-key-order': 'off',  // disables config key order warnings
    '@stylistic/comma-dangle': 'off', // disable trailing comma checks
    '@stylistic/quotes': 'off',       // disable quote style checks
    'no-console': 'off',              // optional: allow console logs
  }
})
