<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <Card border-bottom>
    <h3 class="my-5 text-7xl font-900 text-brand">
      {{ t('productName') }}
    </h3>
    <p class="m-0">{{ t('home.description') }}</p>
  </Card>
</template>
