<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <Card border-bottom>
    <h3 class="text-$c-brand text-7xl font-900 my-5">
      {{ t('productName') }}
    </h3>
    <p class="m-0">{{ t('home.description') }}</p>
  </Card>
</template>
