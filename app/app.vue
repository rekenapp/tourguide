<script lang="ts" setup>
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'fade',
        mode: 'out-in',
        onBeforeEnter
      }" />
    </NuxtLayout>
  </UApp>
</template>