<script lang="ts" setup>
const { t, locale } = useI18n()
const { title } = useNavbar()

watch(locale, () => (title.value = t('home.title')), { immediate: true })
</script>

<template>
  <HomeHero />
  <Card border>
    <p>
      <span>{{ t('home.linkTo') }}: </span>
      <RouterLink :to="{ name: 'about' }">{{ t('about.title') }}</RouterLink>
    </p>
  </Card>
  <Counter />
</template>
