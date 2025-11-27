/* eslint-disable nuxt/config-key-order */
export default defineNuxtConfig({
  // Modules must come first
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "nuxt-og-image",
    "nuxt-llms",
  ],

  // Devtools next
  devtools: { enabled: true },

  // CSS
  css: ["~/assets/css/main.css"],

  // Content module config
  content: {
    build: {
      markdown: { toc: { searchDepth: 1 } }
    }
  },

  // Compatibility date
  compatibilityDate: "2024-07-11",

  // Nitro for GitHub Pages
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  // App config with baseURL
  app: {
    baseURL: "/CodeCraft/",
    buildAssetsDir: "assets",
  },

  // ESLint config
  eslint: {
    config: {
      stylistic: { commaDangle: "never", braceStyle: "1tbs" },
    },
  },

  // Icon provider
  icon: { provider: "iconify" },

  // LLMS module config
  llms: {
    domain: "https://docs-template.nuxt.dev/",
    title: "Nuxt Docs Template",
    description: "A template for building documentation with Nuxt UI en Nuxt Content.",
  },
})
/* eslint-enable nuxt/config-key-order */
