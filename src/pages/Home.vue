<script lang="ts" setup>
const { t, locale } = useI18n()
const { title } = useNavbar()
watch(locale, () => (title.value = t('home.title')), { immediate: true })

const { count, updateCount } = useCount(0)
</script>

<template>
  <HomeHero />
  <Card border>
    <p>
      <span>{{ t('home.linkTo') }}: </span>
      <RouterLink :to="{ name: 'about' }">{{ t('about.title') }}</RouterLink>
    </p>
  </Card>
  <Counter border />
  <Card border title="mock data">
    <p>
      count: <span>{{ count }}</span>
    </p>
    <p>
      <button @click="updateCount">mock请求</button>
    </p>
  </Card>
</template>
