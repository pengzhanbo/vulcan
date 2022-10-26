<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <Card border-bottom>
    <h3 class="home-hero-title">{{ t('productName') }}</h3>
    <p class="home-hero-description">{{ t('home.description') }}</p>
  </Card>
</template>

<style lang="scss" scoped>
.home-hero-title {
  color: var(--c-brand);
  font-size: 98px;
  font-weight: 900;
  margin-bottom: 40px;
}
</style>
