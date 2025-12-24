<script setup lang="ts">
const { t } = useDocusI18n()

// Define your custom links here
const customLinks = [{
  label: 'Join our Discord',
  icon: 'i-simple-icons-discord',
  to: 'https://discord.gg/RZP3A9dq7S',
  target: '_blank'
}]
</script>

<template>
  <div class="hidden lg:block space-y-6">
    <USeparator type="dashed" />

    <UPageLinks
      :title="t('docs.links')"
      :links="customLinks"
    />
  </div>
</template>