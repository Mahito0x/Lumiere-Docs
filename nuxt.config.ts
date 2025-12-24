export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  extends: ["docus"],
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
    ],
  },
  content: {
    sources: {
      content: {
        driver: "fs",
        base: "./content",
      },
    },
  },
});
