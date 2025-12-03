<script setup lang="ts">
import { ref } from 'vue'
const appConfig = useAppConfig()
const { t } = useDocusI18n()

// Override the bottom links to include your Discord server
appConfig.toc = appConfig.toc || {}
appConfig.toc.bottom = {
  title: 'Community', // Change the section title
  links: [
    {
      text: 'Join our Discord',
      link: 'https://discord.gg/YOUR_INVITE_CODE', // Replace with your server invite
      external: true, // optional, marks it as external
    },
  ],
}
</script>

<template>
  <div
    v-if="appConfig.toc?.bottom?.links?.length"
    class="hidden lg:block space-y-6"
  >
    <USeparator type="dashed" />

    <UPageLinks
      :title="appConfig.toc?.bottom?.title || t('docs.links')"
      :links="appConfig.toc?.bottom?.links"
    />
  </div>
</template>
