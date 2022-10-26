<script lang="ts" setup>
const { t, locale } = useI18n()
const { title } = useNavbar()

watch(locale, () => (title.value = t('about.title')), { immediate: true })
</script>

<template>
  <Counter />
</template>
