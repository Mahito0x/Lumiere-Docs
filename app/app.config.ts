export default defineAppConfig({
  socials: {
    //x: "https://x.com/nuxt_js",
    discord: "https://discord.gg/RZP3A9dq7S",
    bluesky: "https://bsky.app/profile/mahitron.bsky.social",
  },
  github: {
    rootDir: "",
  },
  toc: {
    bottom: {
      links: [
        {
          icon: "i-lucide-book-open",
          label: "Documentation",
          to: "https://ui.nuxt.com/getting-started/installation/nuxt",
          target: "_blank",
        },
      ],
    },
  },
  ui: {
    pageHero: {
      slots: {
        title: "font-semibold sm:text-6xl",
        container: "!pb-0",
      },
    },
    pageCard: {
      slots: {
        container: "lg:flex min-w-0",
        wrapper: "flex-none",
      },
    },
  },
});
